# 通用、代码与视觉评测来源覆盖台账

核对日期：2026-10-06。范围为本站 12 个通用文本、代码和视觉模型。此表记录具体型号是否有可复用的公开结果；框架支持、榜单索引或同系列其他尺寸不能代替准确型号成绩。表中“已有”指 JSON 已登记，不代表不同用途结论都得到独立佐证。

## 数据使用口径

| 来源 | 本轮核实 | 本站使用方式 |
| --- | --- | --- |
| Epoch AI | [官方数据说明](https://epoch.ai/benchmarks/use-this-data)称其自有评测数据按 CC BY 许可再分发，要求署名；所收录外部项目仍遵循原许可，benchmark题目与答案属于各自创建者 | 只将 Epoch 自有 GPQA 运行结果标为 `open-data` 并署名；不能给Epoch网站上汇总的外部数据统一套用该许可 |
| EvalPlus | [结果页](https://evalplus.github.io/leaderboard)公开 HumanEval+ 0.1.10、MBPP+ 0.2.0 的 pass@1 greedy 结果；结果页的 [results.json](https://github.com/evalplus/evalplus.github.io/blob/main/results.json) 位于 Apache-2.0 仓库，并保留仓库许可与来源链接 | 可按 Apache-2.0 转载少量结果并履行许可声明；题目数据与扩展测试的许可须单独处理。本轮该公开 JSON 共125个型号；相关命中仅有 Qwen2.5-Coder-32B-Instruct，未发现本站 1.5B/3B/7B Coder、Qwen3、Gemma 或 SmolLM3 的精确条目，故未新增成绩 |
| Arena | 官方 [leaderboard dataset](https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset) 的数据集卡声明 CC BY 4.0，提供 text、vision 配置与快照字段 | 精确匹配到模型/服务标识后，可署名导入官方发布的聚合分数、置信区间、样本数和快照日期。不要下载或复发原始对话/投票；服务端点匹配不自动证明等同于仓库权重 |
| OpenCompass / VLMEvalKit | 工具代码的开放许可不自动覆盖平台成绩、模型提交或测试数据。本轮未为具体榜单结果文件核实独立的数据再分发条款 | 结果先链接；需取得准确的结果文件及适用许可后再导入。精确模型成绩仍须逐条确认 |
| HuggingFaceTB / SmolLM3 模型卡 | 卡片中的第三方对照表可作少量事实引用，但没有单独查到表格成绩的开放数据许可 | 使用 `citation` 并链接原卡，不把权重/代码许可套到成绩；表内 Qwen3 的 LCB v4 作为 HF TB 执行的第三方结果保留 |
| Qwen / Google 模型卡与技术报告 | 当前成绩均由对应模型发布方报告；报告或模型权重许可不自动成为成绩表许可 | 仅作少量事实引用，链接原文，标为 first-party；不宣称独立复测 |
| Artificial Analysis | 沿用 [能力依据规范](CAPABILITY_EVIDENCE.md#artificial-analysis) | 仅提供原站链接，不导入分数、排名、截图或衍生数据 |

## 型号覆盖

“待查”表示本轮没有拿到足够证据确认有或没有精确记录，后续应继续核对具体快照，不应解读为无成绩。

| 型号 | 通用 / Epoch AI | Coding / EvalPlus、LiveCodeBench | VLM / Arena Vision、OpenCompass | 当前处理 |
| --- | --- | --- | --- | --- |
| Gemma 3 1B IT | Epoch GPQA 已有 | 本站未收录此用途 | 不适用 | 保留现有记录 |
| Gemma 3 4B IT | Epoch GPQA 已有 | 本站未收录此用途 | MMMU 官方成绩已有；Arena / OpenCompass 待查 | 保留官方与 Epoch 记录 |
| Gemma 4 E2B IT | 无精确 Epoch 条目已登记；其余待查 | LiveCodeBench v6 官方成绩已有 | MMMU-Pro 官方成绩已有；Arena / OpenCompass 待查 | 保留官方记录 |
| Qwen3-0.6B | Epoch 待查 | LCB v5 官方成绩已有；EvalPlus 当前公开 JSON 无精确条目 | 不适用 | 保留官方记录 |
| Qwen3-1.7B | Epoch GPQA 已有 | LCB v5 官方及 HF TB LCB v4 已有；EvalPlus 当前公开 JSON 无精确条目 | 不适用 | 保留并区分评测版本与思考配置 |
| Qwen3-4B | Epoch GPQA 已有 | 官方 LCB v5/v6 与 HF TB LCB v4 已有；EvalPlus 当前公开 JSON 无精确条目 | 不适用 | 保留全部既有记录，不跨版本合并 |
| Qwen3-8B | Epoch GPQA 已有；OTIS Mock AIME 2024-2025 新增两条模式标签不同的自测记录 | LCB v5 官方成绩已有；EvalPlus 当前公开 JSON 无精确条目 | 不适用 | 保留并列分数；Epoch 日志未完整披露思考配置，仍不可比 |
| Qwen3.5-4B | 待查 | LiveCodeBench v6 官方成绩已有；EvalPlus 当前公开 JSON 无精确条目 | MMMU-Pro 官方成绩已有；Arena / OpenCompass 待查 | 保留官方记录 |
| Qwen2.5-Coder-1.5B-Instruct | 无精确外部通用结果已登记 | 官方技术报告含 EvalPlus；外部 EvalPlus 当前结果 JSON 无精确型号 | 不适用 | 保留官方成绩；外部独立成绩待查 |
| Qwen2.5-Coder-3B-Instruct | 无精确外部通用结果已登记 | 官方技术报告含 EvalPlus；外部 EvalPlus 当前结果 JSON 无精确型号 | 不适用 | 保留官方成绩；外部独立成绩待查 |
| Qwen2.5-Coder-7B-Instruct | 无精确外部通用结果已登记 | 官方技术报告含 EvalPlus；外部 EvalPlus 当前结果 JSON 无精确型号 | 不适用 | 保留官方成绩；外部独立成绩待查 |
| SmolLM3-3B | 暂无精确外部通用结果 | 官方卡含 LCB v4；本轮未确认另一独立来源 | 不适用 | 保留发布方成绩 |

### Arena 快照核验范围

2026-10-06 检查了 CC BY 4.0 数据集的 text 与 vision `latest` 快照各前100行，列表中未出现上述本站精确小模型标识；本轮在检索其他行时遇到 Hugging Face 数据集查看 API 限流，后续按模型过滤的 API 请求也超时，未读取完整快照和历史 `full` 配置。因此不将“前100行未见”写成“榜单没有该型号”。后续从官方 Parquet 快照按完整 `model_name` / `organization` 字段核对并记录快照版本；若条目指向托管 API，应明确展示它是服务端点成绩，不能误标为本地权重实测。

### 后续准入条件

本轮读取 Epoch AI 页面指向的 [`benchmark_data.zip`](https://epoch.ai/data/benchmark_data.zip)（更新 2026-10-06），仅审查非 `_external` 的直接自测 CSV；排除其 external 汇总和 ECI 聚合文件。目标型号已登记 GPQA 成绩；新增命中为 Qwen3-8B 在 `otis_mock_aime_2024_2025.csv` 的 `qwen3-8b` 与 `qwen3-8b_none` 两条，分别 56.11%±6.45、22.22%±4.53 个百分点（标准误）。`chess_puzzles.csv` 也有同型号专门题成绩，但属于目录暂未覆盖的棋类专项，本轮不塞入通用能力摘要。其余被审查的自有 benchmark CSV 未匹配到可新增且准确的本站型号记录；Qwen3-4B-Instruct-2507 与本站原版 Qwen3-4B 不匹配，未借用。

导入前同时核对：准确模型工件或服务名、 benchmark 与数据/任务版本、指标方向和单位、运行模式、测试者、成绩来源的许可、再分发时需保留的署名/声明。多份网页出现同一成绩按原始执行批次去重。OpenCompass 或 LiveBench “支持该模型”只说明框架可运行，不表示已找到该精确型号的公开结果。Arena 人类偏好、客观知识/代码/视觉准确率分开呈现，不合并成总分。
