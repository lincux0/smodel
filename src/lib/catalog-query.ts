export const catalogQueryKeys = ['q', 'task', 'sizeMin', 'sizeMax', 'license', 'runtime', 'family', 'sort'] as const;

export type CatalogQueryState = {
  q: string;
  task: string;
  sizeMin: string;
  sizeMax: string;
  license: string;
  runtime: string;
  family: string;
  sort: string;
};

type CatalogQueryOptions = {
  tasks: readonly string[];
  licenses: readonly string[];
  runtimes: readonly string[];
  families: readonly string[];
};

const defaults: CatalogQueryState = {
  q: '', task: 'all', sizeMin: '', sizeMax: '', license: 'all', runtime: 'all', family: 'all', sort: 'released',
};

const legacySizes: Record<string, [string, string]> = {
  'under-1b': ['', '0.9'],
  '1-3b': ['1', '2.9'],
  '3-8b': ['3', '7.9'],
  '8b-plus': ['8', ''],
};

const decimal = (value: string | null) => {
  if (value === null || value.trim() === '') return '';
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? String(Math.round(parsed * 10) / 10) : '';
};

export function parseCatalogQuery(search: string, options: CatalogQueryOptions): CatalogQueryState {
  const params = new URLSearchParams(search);
  const value = (key: keyof CatalogQueryState, allowed: readonly string[], fallback: string) => {
    const candidate = params.get(key) ?? fallback;
    return candidate === fallback || allowed.includes(candidate) ? candidate : fallback;
  };
  let sizeMin = decimal(params.get('sizeMin'));
  let sizeMax = decimal(params.get('sizeMax'));
  const legacySize = params.get('size');
  if (!sizeMin && !sizeMax && legacySize && legacySizes[legacySize]) {
    [sizeMin, sizeMax] = legacySizes[legacySize];
  }
  return {
    q: (params.get('q') ?? '').trim().replace(/\s+/g, ' ').slice(0, 120),
    task: value('task', options.tasks, defaults.task),
    sizeMin,
    sizeMax,
    license: value('license', options.licenses, defaults.license),
    runtime: value('runtime', options.runtimes, defaults.runtime),
    family: value('family', options.families, defaults.family),
    sort: params.get('sort') === 'recent' ? 'released' : value('sort', ['released', 'name', 'size'], defaults.sort),
  };
}

export function writeCatalogQuery(url: URL, state: CatalogQueryState): URL {
  const result = new URL(url);
  result.searchParams.delete('size');
  for (const key of catalogQueryKeys) {
    const value = state[key];
    if (value && value !== defaults[key]) result.searchParams.set(key, value);
    else result.searchParams.delete(key);
  }
  return result;
}
