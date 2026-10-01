import { loadCatalog } from '../src/lib/catalog.ts';

try {
  const { models, guideIds } = loadCatalog();
  console.log(`内容校验通过：${models.length} 个模型，${guideIds.length} 篇指南。`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
