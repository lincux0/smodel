import assert from 'node:assert/strict';
import { test } from 'node:test';
import { loadCatalog, validateCatalog } from '../src/lib/catalog.ts';

test('真实目录保留未知值，并拒绝重复身份、无效关联和错误字段', () => {
  const { models, guideIds } = loadCatalog();
  assert.ok(models.length >= 6 && models.length <= 8);
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
