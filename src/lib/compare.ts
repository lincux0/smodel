type ComparableModel = { id: string; tasks: readonly string[] };
type Comparison = { ok: true; ids: string[]; task: string } | { ok: false; message: string };

export function validateComparison(ids: string[], models: readonly ComparableModel[], task: string | null = null): Comparison {
  if (ids.length === 0) return { ok: false, message: '请从目录选择最多三个同用途模型，再打开对比。' };
  if (ids.length > 3) return { ok: false, message: '对比链接最多允许三个模型，请重新从目录选择。' };
  if (new Set(ids).size !== ids.length) return { ok: false, message: '对比链接包含重复型号，请重新选择。' };
  const chosen = ids.map((id) => models.find((model) => model.id === id));
  if (chosen.some((model) => !model)) return { ok: false, message: '对比链接包含不存在的型号，请检查链接或返回目录。' };
  const common = chosen[0]!.tasks.filter((candidate) => chosen.every((model) => model!.tasks.includes(candidate)));
  if (common.length === 0) return { ok: false, message: '这些模型没有共同用途，不能进行同用途对比。' };
  if (task !== null && !common.includes(task)) return { ok: false, message: '链接中的用途无效，或不适用于所有选中模型。' };
  return { ok: true, ids, task: task ?? common[0] };
}
