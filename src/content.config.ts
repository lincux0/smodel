import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { loadCatalog, modelSchema } from './lib/catalog.ts';

export const collections = {
  models: defineCollection({
    loader: async () => loadCatalog().models,
    schema: modelSchema,
  }),
  guides: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/data/guides' }),
    schema: z.object({ title: z.string().min(1), description: z.string().min(1) }),
  }),
};
