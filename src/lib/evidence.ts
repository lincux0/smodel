import type { Model } from './catalog.ts';

type Evaluation = Model['evaluations'][number];

export function summarizeEvidence(evaluations: Evaluation[]) {
  const sourceCount = new Set(evaluations.map(({ provenance }) => provenance.sourceId)).size;
  const independentCount = new Set(evaluations.filter(({ provenance }) => provenance.independence === 'independent')
    .map(({ provenance }) => provenance.sourceId)).size;
  const unverifiedCount = new Set(evaluations.filter(({ provenance }) => provenance.independence === 'unknown')
    .map(({ provenance }) => provenance.sourceId)).size;
  return { sourceCount, independentCount, unverifiedCount };
}

export function groupEvidence(evaluations: Evaluation[]) {
  const groups = new Map<string, { key: string; label: string; records: Evaluation[] }>();
  for (const evaluation of evaluations) {
    const key = JSON.stringify([evaluation.benchmark, evaluation.dataset, evaluation.language,
      evaluation.metric, evaluation.unit, evaluation.direction, evaluation.version]);
    const group = groups.get(key) ?? { key, label: `${evaluation.benchmark} · ${evaluation.metric}`, records: [] };
    group.records.push(evaluation);
    groups.set(key, group);
  }
  return [...groups.values()];
}

export function selectEvidencePreview(evaluations: Evaluation[], limit = 3) {
  const selected: Evaluation[] = [];
  const remaining = [...evaluations];
  while (remaining.length && selected.length < limit) {
    const sources = new Set(selected.map(({ provenance }) => provenance.sourceId));
    const metrics = new Set(selected.map(({ benchmark, metric }) => `${benchmark}\0${metric}`));
    const hasIndependent = selected.some(({ provenance }) => provenance.independence === 'independent');
    const priority = (record: Evaluation) => (selected.length && !hasIndependent && record.provenance.independence === 'independent' ? 4 : 0)
      + (sources.has(record.provenance.sourceId) ? 0 : 2) + (metrics.has(`${record.benchmark}\0${record.metric}`) ? 0 : 1);
    const next = selected.length ? remaining.reduce((best, record) => priority(record) > priority(best) ? record : best) : remaining[0];
    selected.push(next);
    remaining.splice(remaining.indexOf(next), 1);
  }
  return selected;
}
