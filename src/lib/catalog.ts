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
  evaluations: z.array(z.object({
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
  }).strict()),
}).strict();

export type Model = z.infer<typeof modelSchema>;

export function validateCatalog(entries: unknown[], guideIds: string[]): Model[] {
  const seen = new Set<string>();
  const guides = new Set(guideIds);
  return entries.map((entry) => {
    const model = modelSchema.parse(entry);
    if (seen.has(model.id)) throw new Error(`重复模型 ID：${model.id}`);
    seen.add(model.id);
    const deployments = new Set<string>();
    for (const deployment of model.deployments) {
      if (deployments.has(deployment.id)) throw new Error(`${model.id}：重复部署 ID ${deployment.id}`);
      deployments.add(deployment.id);
      if (!guides.has(deployment.guideId)) throw new Error(`${model.id}：不存在的指南 ${deployment.guideId}`);
    }
    return model;
  });
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
