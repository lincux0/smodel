export const catalogQueryKeys = ['q', 'task', 'size', 'license', 'runtime', 'sort'] as const;

export type CatalogQueryState = {
  q: string;
  task: string;
  size: string;
  license: string;
  runtime: string;
  sort: string;
};

type CatalogQueryOptions = {
  tasks: readonly string[];
  sizes: readonly string[];
  licenses: readonly string[];
  runtimes: readonly string[];
};

const defaults: CatalogQueryState = { q: '', task: 'all', size: 'all', license: 'all', runtime: 'all', sort: 'recent' };

export function parseCatalogQuery(search: string, options: CatalogQueryOptions): CatalogQueryState {
  const params = new URLSearchParams(search);
  const value = (key: keyof CatalogQueryState, allowed: readonly string[], fallback: string) => {
    const candidate = params.get(key) ?? fallback;
    return candidate === fallback || allowed.includes(candidate) ? candidate : fallback;
  };
  return {
    q: (params.get('q') ?? '').trim().replace(/\s+/g, ' ').slice(0, 120),
    task: value('task', options.tasks, defaults.task),
    size: value('size', options.sizes, defaults.size),
    license: value('license', options.licenses, defaults.license),
    runtime: value('runtime', options.runtimes, defaults.runtime),
    sort: value('sort', ['recent', 'name', 'size'], defaults.sort),
  };
}

export function writeCatalogQuery(url: URL, state: CatalogQueryState): URL {
  const result = new URL(url);
  for (const key of catalogQueryKeys) {
    const value = state[key];
    if (value && value !== defaults[key]) result.searchParams.set(key, value);
    else result.searchParams.delete(key);
  }
  return result;
}

export function parameterBand(value: number | null): string {
  if (value === null) return 'unknown';
  if (value < 1) return 'under-1b';
  if (value < 3) return '1-3b';
  if (value < 8) return '3-8b';
  return '8b-plus';
}
