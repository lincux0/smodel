import assert from 'node:assert/strict';
import { test } from 'node:test';
import { validateComparison } from '../src/lib/compare.ts';
import { loadCatalog } from '../src/lib/catalog.ts';

test('对比链接仅接受一至三个存在且具有共同用途的型号', () => {
  const { models } = loadCatalog();
  const ids = ['gemma-4-e2b-it', 'qwen2-5-coder-1-5b-instruct', 'qwen3-5-4b'];
  assert.deepEqual(validateComparison(ids, models, 'coding'), { ok: true, ids, task: 'coding' });
  assert.equal(validateComparison(ids, models).ok, true);
  for (const invalid of [[], [ids[0], ids[0]], ['missing'], [...ids, 'whisper-small'], ['kokoro-82m', ids[0]], ['']]) {
    assert.equal(validateComparison(invalid, models).ok, false);
  }
  assert.equal(validateComparison(ids, models, 'speech-recognition').ok, false);
  assert.equal(validateComparison(ids, models, '<script>').ok, false);
  assert.equal(validateComparison(['pp-ocrv5-mobile-rec'], models, 'ocr').ok, true);
});
