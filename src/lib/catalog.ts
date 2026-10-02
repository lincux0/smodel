import { readdirSync, readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const url = z.url().refine((value) => new URL(value).protocol === 'https:', '来源必须使用 HTTPS');
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}, '日期必须为有效的 YYYY-MM-DD');
const size = z.number().positive().nullable();
const license = z.object({ name: text, url }).strict();
export const taskLabels = {
  'text-generation': '文本生成',
  coding: '代码',
  'image-understanding': '视觉理解',
  embedding: '向量检索',
  reranking: '结果重排',
  'speech-recognition': '语音识别',
  'text-to-speech': '语音合成',
  ocr: '文字识别',
} as const;

const evaluationSchema = z.object({
  id,
  benchmark: text,
  dataset: text,
  language: text,
  metric: text,
  value: z.number(),
  unit: text,
  direction: z.enum(['higher', 'lower']),
  version: text,
  settings: text,
  sourceUrl: url,
  date: date.nullable(),
  checkedAt: date,
  kind: z.enum(['official-report', 'third-party', 'site-measured']),
  comparable: z.boolean(),
  task: z.enum(Object.keys(taskLabels) as [keyof typeof taskLabels, ...Array<keyof typeof taskLabels>]),
  publisher: text,
  externalModelId: text.nullable(),
  modelConfig: z.object({
    revision: text.nullable(),
    thinking: z.enum(['enabled', 'disabled', 'not-applicable', 'unknown']),
    quantization: text.nullable(),
    runtime: text.nullable(),
  }).strict(),
  conditions: z.object({
    split: text.nullable(),
    fewShot: z.number().int().nonnegative().nullable(),
    promptTemplate: text.nullable(),
    outputTokens: z.number().int().positive().nullable(),
  }).strict(),
  comparisonGroup: id.nullable(),
  nonComparableReason: text.nullable(),
  rights: z.object({
    status: z.enum(['citation', 'open-data', 'site-owned']),
    license: text.nullable(),
    url,
    notes: text,
  }).strict(),
}).strict().superRefine((value, ctx) => {
  const errorRate = /\b(?:wer|cer|word error rate|character error rate)\b/i.test(value.metric);
  if (value.unit.includes('%') && (value.value < 0 || (!errorRate && value.value > 100))) {
    ctx.addIssue({ code: 'custom', path: ['value'], message: '百分比成绩必须在 0 到 100 之间' });
  }
  if (value.kind === 'site-measured' && value.rights.status !== 'site-owned') {
    ctx.addIssue({ code: 'custom', path: ['rights', 'status'], message: '本站实测记录必须使用本站自有来源' });
  }
  if (value.comparable) {
    if (value.comparisonGroup === null || value.nonComparableReason !== null) {
      ctx.addIssue({ code: 'custom', message: '可比记录需要比较组且不能填写不可比原因' });
    }
    if (value.modelConfig.revision === null || value.modelConfig.thinking === 'unknown' || value.modelConfig.runtime === null
      || value.modelConfig.quantization === null || value.conditions.split === null || value.conditions.fewShot === null
      || value.conditions.promptTemplate === null || value.conditions.outputTokens === null) {
      ctx.addIssue({ code: 'custom', message: '可比记录需要明确模型版本、推理条件和评测配置' });
    }
  } else if (value.comparisonGroup !== null || value.nonComparableReason === null) {
    ctx.addIssue({ code: 'custom', message: '不可比记录必须说明原因且不能加入比较组' });
  }
});

export const modelSchema = z.object({
  id,
  name: text,
  family: text,
  version: text,
  variant: z.enum(['base', 'instruct', 'specialized']),
  tasks: z.array(z.enum(Object.keys(taskLabels) as [keyof typeof taskLabels, ...Array<keyof typeof taskLabels>])).min(1),
  modalities: z.object({
    input: z.array(z.enum(['text', 'image', 'audio'])).min(1),
    output: z.array(z.enum(['text', 'audio', 'vector', 'score'])).min(1),
  }).strict(),
  parameters: z.object({ totalB: size, activeB: size, effectiveB: size, notes: text, sourceUrl: url }).strict(),
  context: z.object({
    nativeTokens: z.number().int().positive().nullable(),
    extendedTokens: z.number().int().positive().nullable(),
    extension: text.nullable(),
    status: z.enum(['documented', 'not-provided', 'not-applicable']),
    sourceUrl: url.nullable(),
  }).strict().superRefine((value, ctx) => {
    if (value.status === 'documented' && (value.nativeTokens === null || value.sourceUrl === null)) {
      ctx.addIssue({ code: 'custom', message: '已公开的上下文需要原生长度和来源' });
    }
    if (value.status !== 'documented' && (value.nativeTokens !== null || value.extendedTokens !== null || value.extension !== null)) {
      ctx.addIssue({ code: 'custom', message: '未提供或不适用的上下文必须保留空值' });
    }
    if (value.extendedTokens !== null && (!value.extension || value.nativeTokens === null || value.extendedTokens < value.nativeTokens)) {
      ctx.addIssue({ code: 'custom', message: '扩展上下文需要有效的原生长度和扩展条件' });
    }
  }),
  languages: z.array(text),
  licenses: z.object({ weights: license, code: license.nullable(), trainingDisclosure: text }).strict(),
  summary: text,
  features: z.array(text).min(1),
  limitations: z.array(text).min(1),
  officialUrl: url,
  checkedAt: date,
  deployments: z.array(z.object({
    id,
    runtime: text,
    systems: z.array(text),
    format: text,
    quantization: text.nullable(),
    downloadUrl: url,
    sourceUrl: url,
    guideId: id,
    dependencies: z.array(text),
    steps: z.array(z.object({ title: text, description: text, command: text.nullable() }).strict()).min(1),
    hardware: z.object({
      status: z.enum(['not-verified', 'official-estimate', 'measured']),
      notes: text,
      ramGb: size,
      vramGb: size,
      sourceUrl: url.nullable(),
    }).strict().superRefine((value, ctx) => {
      if (value.status === 'not-verified' && (value.ramGb !== null || value.vramGb !== null)) {
        ctx.addIssue({ code: 'custom', message: '未核实硬件不能填写内存数值' });
      }
      if (value.status !== 'not-verified' && (value.sourceUrl === null || (value.ramGb === null && value.vramGb === null))) {
        ctx.addIssue({ code: 'custom', message: '硬件估算或实测需要数值和来源' });
      }
    }),
    verification: z.object({
      status: z.enum(['official-supported', 'site-verified']),
      verifiedAt: date.nullable(),
    }).strict().superRefine((value, ctx) => {
      if ((value.status === 'site-verified') !== (value.verifiedAt !== null)) {
        ctx.addIssue({ code: 'custom', message: '只有本站已验证的部署应填写验证日期' });
      }
    }),
  }).strict()).min(1),
  evaluations: z.array(evaluationSchema),
  assessments: z.array(z.object({
    task: z.enum(Object.keys(taskLabels) as [keyof typeof taskLabels, ...Array<keyof typeof taskLabels>]),
    status: z.enum(['official-only', 'corroborated', 'insufficient']),
    summary: text,
    strengths: z.array(text),
    limitations: z.array(text),
    evidenceIds: z.array(id),
  }).strict()).default([]),
}).strict();

export type Model = z.infer<typeof modelSchema>;

export function validateCatalog(entries: unknown[], guideIds: string[]): Model[] {
  const seen = new Set<string>();
  const guides = new Set(guideIds);
  const comparisonGroups = new Map<string, Model['evaluations']>();
  const models = entries.map((entry) => {
    const model = modelSchema.parse(entry);
    if (seen.has(model.id)) throw new Error(`重复模型 ID：${model.id}`);
    seen.add(model.id);
    const deployments = new Set<string>();
    for (const deployment of model.deployments) {
      if (deployments.has(deployment.id)) throw new Error(`${model.id}：重复部署 ID ${deployment.id}`);
      deployments.add(deployment.id);
      if (!guides.has(deployment.guideId)) throw new Error(`${model.id}：不存在的指南 ${deployment.guideId}`);
    }
    const evaluationIds = new Set<string>();
    for (const evaluation of model.evaluations) {
      if (evaluationIds.has(evaluation.id)) throw new Error(`${model.id}：重复评测 ID ${evaluation.id}`);
      evaluationIds.add(evaluation.id);
      if (!model.tasks.includes(evaluation.task)) throw new Error(`${model.id}：评测用途 ${evaluation.task} 不在模型用途中`);
      if (evaluation.comparisonGroup) {
        const group = comparisonGroups.get(evaluation.comparisonGroup) ?? [];
        group.push(evaluation);
        comparisonGroups.set(evaluation.comparisonGroup, group);
      }
    }
    const assessmentTasks = new Set<string>();
    for (const assessment of model.assessments) {
      if (assessmentTasks.has(assessment.task)) throw new Error(`${model.id}：重复能力摘要用途 ${assessment.task}`);
      assessmentTasks.add(assessment.task);
      if (!model.tasks.includes(assessment.task)) throw new Error(`${model.id}：能力摘要用途 ${assessment.task} 不在模型用途中`);
      const references = assessment.evidenceIds.map((evidenceId) => {
        const evaluation = model.evaluations.find(({ id: evaluationId }) => evaluationId === evidenceId);
        if (!evaluation) throw new Error(`${model.id}：能力摘要引用不存在的评测 ${evidenceId}`);
        if (evaluation.task !== assessment.task) throw new Error(`${model.id}：评测 ${evidenceId} 与能力摘要用途不一致`);
        return evaluation;
      });
      if (new Set(assessment.evidenceIds).size !== assessment.evidenceIds.length) {
        throw new Error(`${model.id}：能力摘要包含重复评测引用`);
      }
      if (assessment.status === 'official-only' && (!references.some(({ kind }) => kind === 'official-report')
        || references.some(({ kind }) => kind !== 'official-report'))) {
        throw new Error(`${model.id}：仅官方摘要只能引用官方报告`);
      }
      if (assessment.status === 'corroborated') {
        const official = references.find(({ kind }) => kind === 'official-report');
        const thirdParty = references.find(({ kind }) => kind === 'third-party');
        if (!official || !thirdParty || official.publisher === thirdParty.publisher || official.sourceUrl === thirdParty.sourceUrl) {
          throw new Error(`${model.id}：交叉核实需要独立的官方与第三方来源`);
        }
      }
    }
    return model;
  });
  for (const [groupId, records] of comparisonGroups) {
    const signature = (evaluation: Model['evaluations'][number]) => JSON.stringify([
      evaluation.task, evaluation.benchmark, evaluation.dataset, evaluation.language, evaluation.metric,
      evaluation.unit, evaluation.direction, evaluation.version, evaluation.settings, evaluation.modelConfig.thinking,
      evaluation.modelConfig.quantization, evaluation.modelConfig.runtime, evaluation.conditions.split,
      evaluation.conditions.fewShot, evaluation.conditions.promptTemplate, evaluation.conditions.outputTokens,
    ]);
    if (new Set(records.map(signature)).size > 1) {
      throw new Error(`比较组 ${groupId}：基准、模型模式、运行时或评测条件不一致`);
    }
  }
  return models;
}

export function loadCatalog(root = new URL('../data/', import.meta.url)) {
  const modelDirectory = new URL('models/', root);
  const guideDirectory = new URL('guides/', root);
  const guideIds = readdirSync(guideDirectory).filter((file) => file.endsWith('.md')).map((file) => id.parse(basename(file, '.md')));
  const files = readdirSync(modelDirectory).filter((file) => file.endsWith('.json')).sort();
  if (!files.length) throw new Error('模型目录不能为空');
  const entries = files.map((file) => {
    const path = new URL(file, modelDirectory);
    let entry: unknown;
    try {
      entry = JSON.parse(readFileSync(path, 'utf8'));
    } catch (error) {
      throw new Error(`${fileURLToPath(path)}：JSON 读取失败`, { cause: error });
    }
    const parsed = modelSchema.safeParse(entry);
    if (!parsed.success) throw new Error(`${file}：${parsed.error.message}`);
    if (parsed.data.id !== basename(file, '.json')) throw new Error(`${file}：模型 ID 必须与文件名一致`);
    return parsed.data;
  });
  return { models: validateCatalog(entries, guideIds), guideIds };
}
