import assert from 'node:assert/strict';
import { test } from 'node:test';
import { groupEvidence, selectEvidencePreview, summarizeEvidence } from '../src/lib/evidence.ts';

const record = (id, sourceId, independence, overrides = {}) => ({
  id, benchmark: 'Knowledge', dataset: 'test', language: 'en', metric: 'accuracy', unit: '%', value: 0,
  direction: 'higher', version: 'v1', provenance: { sourceId, runId: `${sourceId}-run`, independence }, ...overrides,
});

test('摘要保留首项、引入独立来源，多指标与镜像不增加来源数', () => {
  const records = [record('official-a', 'vendor', 'first-party'),
    record('official-b', 'vendor', 'first-party', { benchmark: 'Math' }),
    record('official-c', 'vendor', 'first-party', { benchmark: 'Instructions' }),
    record('external', 'lab', 'independent'), record('community', 'submitter', 'unknown')];
  const preview = selectEvidencePreview(records);
  assert.equal(preview.length, 3);
  assert.equal(preview[0].id, 'official-a');
  assert.ok(preview.some(({ id }) => id === 'external'));
  assert.equal(records.length, 5);
  assert.deepEqual(summarizeEvidence(records), { sourceCount: 3, independentCount: 1, unverifiedCount: 1 });
  assert.deepEqual(selectEvidencePreview([], 3), []);
  assert.deepEqual(selectEvidencePreview(records, 0), []);
  assert.equal(selectEvidencePreview(records, 20).length, records.length);
});

test('同指标多来源并列保留原值，不同版本、语言、单位与方向分组', () => {
  const records = [record('official', 'vendor', 'first-party'), record('independent', 'lab', 'independent', { value: 70 }),
    record('new-version', 'lab', 'independent', { version: 'v2' }),
    record('chinese', 'lab', 'independent', { language: 'zh' }),
    record('ratio', 'lab', 'independent', { unit: 'ratio' }),
    record('error', 'lab', 'independent', { direction: 'lower' })];
  const groups = groupEvidence(records);
  assert.equal(groups.length, 5);
  assert.deepEqual(groups[0].records.map(({ value }) => value), [0, 70]);
  assert.equal(groups.flatMap(({ records }) => records).length, 6);
});
