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
