import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadCatalog, validateCatalog } from '../src/lib/catalog.ts';
import { parameterBand, parseCatalogQuery, writeCatalogQuery } from '../src/lib/catalog-query.ts';

test('真实目录保留未知值，并拒绝重复身份、无效关联和错误字段', () => {
  const { models, guideIds } = loadCatalog();
  assert.ok(models.length >= 20 && models.length <= 30);
  assert.ok(models.some((model) => model.parameters.totalB === null));
  assert.ok(models.some((model) => model.evaluations.length === 0));
  const sample = models[0];
  assert.throws(() => validateCatalog([sample, sample], guideIds), /重复模型 ID/);
  const invalidGuide = structuredClone(sample);
  invalidGuide.deployments[0].guideId = 'missing-guide';
  assert.throws(() => validateCatalog([invalidGuide], guideIds), /不存在的指南/);
  const invalidParameter = structuredClone(sample);
  invalidParameter.parameters.totalB = -1;
  assert.throws(() => validateCatalog([invalidParameter], guideIds));
  const invalidDate = structuredClone(sample);
  invalidDate.checkedAt = '2026-02-30';
  assert.throws(() => validateCatalog([invalidDate], guideIds));
  const unsafeUrl = structuredClone(sample);
  unsafeUrl.officialUrl = 'javascript:alert(1)';
  assert.throws(() => validateCatalog([unsafeUrl], guideIds));
  const unsupportedMemory = structuredClone(sample);
  unsupportedMemory.deployments[0].hardware.ramGb = 8;
  assert.throws(() => validateCatalog([unsupportedMemory], guideIds));
});

test('评测 schema 保留空值并校验证据身份、用途与来源关系', () => {
  const { models, guideIds } = loadCatalog();
  const model = structuredClone(models[0]);
  delete model.assessments;
  const migratedEmpty = validateCatalog([model], guideIds)[0];
  assert.deepEqual(migratedEmpty.assessments, []);
  const missingEvaluations = structuredClone(model);
  delete missingEvaluations.evaluations;
  assert.throws(() => validateCatalog([missingEvaluations], guideIds), /evaluations/);
  model.evaluations = [];
  model.assessments = [];
  const task = model.tasks[0];
  const evaluation = (overrides = {}) => ({
    id: 'sample-result', benchmark: 'Sample benchmark', dataset: 'Sample set', language: 'zh', metric: 'accuracy',
    value: 81, unit: '%', direction: 'higher', version: 'v1', settings: '设置未完整提供',
    sourceUrl: 'https://benchmark.example/report', date: null, checkedAt: '2026-10-02', kind: 'official-report',
    task, publisher: '发布方', externalModelId: null,
    modelConfig: { revision: null, thinking: 'unknown', quantization: null, runtime: null },
    conditions: { split: null, fewShot: null, promptTemplate: null, outputTokens: null },
    comparable: false, comparisonGroup: null, nonComparableReason: '推理配置和数据划分未完整披露。',
    rights: { status: 'citation', license: null, url: 'https://benchmark.example/terms', notes: '仅引用公开结果。' },
    ...overrides,
  });
  model.evaluations.push(evaluation());
  model.assessments.push({ task, status: 'official-only', summary: '官方来源提供了该项结果。', strengths: [], limitations: ['运行条件不完整。'], evidenceIds: ['sample-result'] });
  assert.equal(validateCatalog([model], guideIds)[0].assessments[0].evidenceIds[0], 'sample-result');
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation({ value: 101 })] }], guideIds), /百分比成绩/);
  assert.doesNotThrow(() => validateCatalog([{ ...model, evaluations: [evaluation({ metric: 'WER', value: 125.698 })] }], guideIds));
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation({ metric: 'WER', value: -1 })] }], guideIds), /百分比成绩/);
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation({ value: Infinity })] }], guideIds));
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation({ comparable: true, comparisonGroup: 'sample-group', nonComparableReason: null })] }], guideIds), /明确模型版本/);
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation({ nonComparableReason: null })] }], guideIds), /不可比记录必须说明原因/);
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation(), evaluation()] }], guideIds), /重复评测 ID/);
  assert.throws(() => validateCatalog([{ ...model, assessments: [{ ...model.assessments[0], evidenceIds: ['missing-result'] }] }], guideIds), /引用不存在的评测/);
  assert.throws(() => validateCatalog([{ ...model, evaluations: [evaluation({ task: 'speech-recognition' })] }], guideIds), /不在模型用途中/);
  const corroborated = structuredClone(model);
  corroborated.evaluations.push(evaluation({ id: 'copied-result', kind: 'third-party', sourceUrl: 'https://benchmark.example/reposted', publisher: '发布方' }));
  corroborated.assessments[0] = { ...corroborated.assessments[0], status: 'corroborated', evidenceIds: ['sample-result', 'copied-result'] };
  assert.throws(() => validateCatalog([corroborated], guideIds), /独立的官方与第三方来源/);
});

test('可比记录只在比较组的基准与测试口径一致时通过', () => {
  const { models, guideIds } = loadCatalog();
  const pair = models.flatMap((left, index) => models.slice(index + 1).map((right) => [left, right]))
    .find(([left, right]) => left.tasks.some((task) => right.tasks.includes(task)));
  assert.ok(pair);
  const task = pair[0].tasks.find((value) => pair[1].tasks.includes(value));
  const record = (model, split = 'test') => ({
    id: 'shared-result', benchmark: 'Shared benchmark', dataset: 'Shared set', language: 'zh', metric: 'accuracy',
    value: 81, unit: '%', direction: 'higher', version: 'v1', settings: 'temperature=0', sourceUrl: 'https://benchmark.example/report',
    date: null, checkedAt: '2026-10-02', kind: 'third-party', task, publisher: 'Independent Lab', externalModelId: model.id,
    modelConfig: { revision: `revision-${model.id}`, thinking: 'disabled', quantization: 'bf16', runtime: 'Transformers' },
    conditions: { split, fewShot: 0, promptTemplate: 'chat-v1', outputTokens: 512 },
    comparable: true, comparisonGroup: 'shared-benchmark-v1', nonComparableReason: null,
    rights: { status: 'citation', license: null, url: 'https://benchmark.example/terms', notes: '引用公开榜单结果。' },
  });
  const modelsForGroup = pair.map((source) => {
    const model = structuredClone(source);
    model.evaluations = [record(source)];
    model.assessments = [];
    return model;
  });
  assert.equal(validateCatalog(modelsForGroup, guideIds).length, 2);
  modelsForGroup[1].evaluations[0].settings = 'temperature=1';
  assert.throws(() => validateCatalog(modelsForGroup, guideIds), /条件不一致/);
  modelsForGroup[1].evaluations[0].settings = 'temperature=0';
  modelsForGroup[1].evaluations[0].conditions.split = 'validation';
  assert.throws(() => validateCatalog(modelsForGroup, guideIds), /条件不一致/);
});

test('目录 URL 状态只接受已知筛选值并保留比较参数', () => {
  const options = { tasks: ['coding'], sizes: ['under-1b', 'unknown'], licenses: ['Apache-2.0'], runtimes: ['Transformers'] };
  const state = parseCatalogQuery('?q=%20Qwen%20%20coder%20&task=unknown&size=under-1b&license=Apache-2.0&runtime=Transformers&sort=invalid', options);
  assert.deepEqual(state, { q: 'Qwen coder', task: 'all', size: 'under-1b', license: 'Apache-2.0', runtime: 'Transformers', sort: 'recent' });
  const url = writeCatalogQuery(new URL('https://example.test/models/?ids=qwen-a,qwen-b&task=coding'), state);
  assert.equal(url.searchParams.get('ids'), 'qwen-a,qwen-b');
  assert.equal(url.searchParams.get('q'), 'Qwen coder');
  assert.equal(parameterBand(null), 'unknown');
  assert.equal(parameterBand(0.6), 'under-1b');
  assert.equal(parameterBand(1.5), '1-3b');
});
