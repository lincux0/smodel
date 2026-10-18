# 通用、代码与视觉评测来源覆盖台账

核对日期：2026-10-17。范围为本站 14 个通用文本、代码和视觉模型。此表记录具体型号是否有可复用的公开结果；框架支持、榜单索引或同系列其他尺寸不能代替准确型号成绩。表中“已有”指 JSON 已登记，不代表不同用途结论都得到独立佐证。

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
| Phi-4-mini-instruct | 官方卡内部基准平台七项已有；Epoch 精确条目待查 | 官方卡能力表无代码基准行；EvalPlus 与 LiveCodeBench 待查 | 不适用 | 保留官方记录；代码用途维持证据不足 |
| Qwen3-VL-4B-Instruct | 技术报告 HTML 版 Table 6 为可转录的纯文本对比表，已登记 MMLU-Pro 67.1；Epoch 精确条目待查 | LiveCodeBench v6 37.9 已登记；EvalPlus 当前公开 JSON 无精确条目 | 官方视觉性能表为图片，未转录；Arena / OpenCompass 待查 | 文本与代码用途改为仅官方；视觉用途维持证据不足 |
| Qwen3-VL-8B-Instruct | 技术报告 Table 6 的 8B 列已登记 MMLU-Pro 71.6、GPQA 61.9；Epoch 待查 | LiveCodeBench v6 39.3 已登记；EvalPlus 无精确条目 | 视觉评测表为图片，未转录；Arena / OpenCompass 待查 | 文本与代码仅官方；视觉证据不足 |
| Gemma 4 E4B IT | 模型卡 E4B 列已登记 MMLU-Pro 69.4；Epoch 待查 | LiveCodeBench v6 52.0 已登记 | MMMU Pro 52.6、MATH-Vision 59.5 已登记；Arena / OpenCompass 待查 | 保留官方记录 |
| Ministral 3 3B Instruct | 官方 Instruct 表已登记（Arena Hard 0.305、WildBench 56.8、MATH 0.830） | 本站未收录此用途 | MM MTBench 7.83 已登记 | 仅官方 |
| Ministral 3 8B Instruct | 官方 Instruct 表已登记（Arena Hard 0.509、WildBench 66.8、MATH 0.876） | 代码基准仅见 Reasoning 检查点表（0.616），未借用 | MM MTBench 8.08 已登记 | 文本与视觉仅官方；代码证据不足 |
| LFM2.5-VL-3B | 无纯文本基准（官方未提供） | 本站未收录此用途 | ScreenSpot-v2 80.7、RefCOCO 87.9、OCRBenchv2 47.5、MMMU Pro 30.5 已登记 | 视觉仅官方；文本证据不足 |
| Qwen3.5-9B | 模型卡已登记 MMLU-Pro 82.5、C-Eval 88.2；Epoch 待查 | LiveCodeBench v6 65.6 已登记 | MMMU-Pro 70.1 已登记；Arena / OpenCompass 待查 | 仅官方；列序逐格核对 |
| Qwen3.5-2B | 模型卡 Thinking 列已登记 MMLU-Pro 66.5、C-Eval 73.2 | 未找到该档位代码成绩 | MMMU-Pro 50.3 已登记 | 文本与视觉仅官方；代码证据不足 |
| MiniCPM5 1B | 官方排行榜为图片，未转录 | 同 | 不适用 | 两个用途维持证据不足 |
| MiniCPM5 2B | 模型卡已登记 MMLU-Pro 70.8、IFEval 86.7 | LiveCodeBench v6 69.1、SWE-bench Verified 46.4 已登记 | 不适用 | 仅官方；卡内 †（AA 发布）行未导入 |
| Granite 4.2 3B | 评测表已登记 MMLU-Pro 67.84、AIME25 78.33、BFCL v4 52.41 | LiveCodeBench v6 69.71 已登记 | 不适用 | 仅官方（NeMo Evaluator 框架）；思考模式未逐项说明 |
| Granite 4.2 8B | 评测表已登记 MMLU-Pro 74.04、AIME25 86.67 | LiveCodeBench v6 73.24、SWE-bench Verified 47.67 已登记 | 不适用 | 仅官方 |
| LFM2.5-1.2B-Instruct | 评测表已登记 MMLU-Pro 44.35、IFEval 86.23 | 本站未收录此用途 | 不适用 | 仅官方 |
| LFM2.5-2.6B | 评测表已登记 AIME25 51.87、IFBench 59.17 | 本站未收录此用途 | 不适用 | 仅官方；卡内 AA-Omni 行未导入 |
| Qwen3-4B-Instruct-2507 | 模型卡已登记 MMLU-Pro 69.6、GPQA 62.0 | LiveCodeBench v6 35.1、MultiPL-E 76.8 已登记 | 不适用 | 仅官方；独立于已上线 Qwen3-4B，未合并旧版成绩 |
| NVIDIA Nemotron Nano 9B v2 | 模型卡已登记 AIME25 72.1、GPQA 64.0、RULER 128K 78.9 | LiveCodeBench 71.1 已登记 | 不适用 | 仅官方（NeMo-Skills）；AIME/GPQA/LCB 为 Reasoning-On、RULER 为 Reasoning-Off |
| InternVL3.5-4B | 论文 Table 14 已登记 MMLU 73.8；Epoch 待查 | 本站未收录此用途 | MMMU 66.6、MathVista 77.1（Table 2/3）、OCRBench 822（Table 4）已登记 | 仅官方（发布版；OCR 对比值来源脚注已注明） |
| InternVL3.5-8B | 论文 Table 14 已登记 MMLU 78.2 | 本站未收录此用途 | MMMU 73.4、MathVista 78.4、OCRBench 840 已登记 | 仅官方 |
| MiniCPM-V 4.5 | 官方未发布纯文本基准 | 本站未收录此用途 | OpenCompass 77.0、MMMU 67.7、OCRBench 89.0、OmniDocBench(EN) 0.175 已登记 | 视觉仅官方；文本用途证据不足 |
| DeepSeek-R1-Distill-Qwen-1.5B | 模型卡已登记 AIME 28.9、MATH-500 83.9、GPQA 33.8 | LiveCodeBench 16.9 已登记 | 不适用 | 仅官方；上下文未披露（not-provided）；采样协议已注明 |
| DeepSeek-R1-Distill-Qwen-7B | 模型卡已登记 AIME 55.5、MATH-500 92.8、GPQA 49.1 | LiveCodeBench 37.6 已登记 | 不适用 | 仅官方；同上 |
| LFM2.5-230M | 模型卡已登记 MMLU-Pro 20.25、IFEval 71.71 | 本站未收录此用途 | 不适用 | 仅官方；超小档位（数据抽取/轻量代理定位） |
| LFM2.5-350M | 模型卡已登记 MMLU-Pro 20.01、IFEval 76.96 | 本站未收录此用途 | 不适用 | 仅官方 |
| LFM2.5-1.2B-Thinking | 模型卡已登记 MMLU-Pro 49.65、IFEval 88.42、AIME25 31.73 | 本站未收录此用途 | 不适用 | 仅官方（thinking 模式） |
| LFM2.5-8B-A1B | 模型卡已登记 IFEval 91.84、IFBench 56.47、AIME25 42.53 | BFCL 数值冲突未收录（limitations 说明） | 不适用 | 仅官方；MoE 8.3B/1.5B |
| LFM2.5-VL-450M | 用途仅视觉，未收录文本成绩 | 本站未收录此用途 | MMMU 32.67、MMStar 43.00、OCRBench 684、RefCOCO-M 81.28 已登记 | 仅官方 |
| LFM2.5-VL-1.6B | 卡无语言基准表 | 本站未收录此用途 | MMMU 40.56、MMStar 50.67、InfoVQA 62.71 已登记 | 视觉仅官方；文本证据不足 |
| Qwen3-VL-2B-Instruct | 技术报告 Table 6 已登记 MMLU-Pro 49.0、GPQA 42.0 | LiveCodeBench v6 20.3 已登记 | 视觉表为图片未转录 | 文本与代码仅官方；视觉不足 |
| Qwen3.5-0.8B | 模型卡已登记 MMLU-Pro 42.3/29.7、C-Eval 50.5 | 官方无该档位代码基准 | MMMU-Pro 31.2 已登记 | 文本与视觉仅官方；代码不足 |
| Granite 4.0 1B | 模型卡已登记 MMLU 59.39、IFEval 77.38 | HumanEval 74、MBPP 65 已登记 | 不适用 | 仅官方 |
| Granite 4.0 H-1B | 模型卡已登记 MMLU 59.74、IFEval 78.53 | HumanEval 73、MBPP 69 已登记 | 不适用 | 仅官方；Mamba2 混合架构 |
| Qwen2.5-7B-Instruct | 报告已登记 MMLU-Pro 56.3、MATH 75.5 | HumanEval 84.8、LiveCodeBench 28.7 已登记 | 不适用 | 仅官方；与 Coder 系列互不混用 |
| Qwen2.5-1.5B-Instruct | 报告已登记 MMLU-Pro 32.4、MATH 55.2 | HumanEval 61.6、LiveCodeBench 14.8 已登记 | 不适用 | 仅官方 |
| Qwen2.5-0.5B-Instruct | 报告已登记 MMLU-Pro 15.0、MATH 34.4、GSM8K 49.6 | 用途不含代码 | 不适用 | 仅官方 |
| Llama 3.2 1B Instruct | 官方卡已登记 MMLU 49.3、IFEval 59.5、GSM8K 44.4 | 官方无代码基准 | 不适用 | 仅官方；代码证据不足 |
| Llama 3.2 3B Instruct | 官方卡已登记 MMLU 63.4、IFEval 77.4、GSM8K 77.7 | 同上 | 不适用 | 仅官方；代码证据不足 |
| Llama 3.1 8B Instruct | 官方卡已登记 MMLU 69.4、IFEval 80.4、GSM8K 84.5 | HumanEval 72.6、MBPP++ 72.8 已登记 | 不适用 | 仅官方 |
| Gemma 2 2B IT | 报告已登记 MMLU（IT）56.1、TruthfulQA 43.72 | MBPP 36.6 已登记 | 不适用 | 仅官方；IT 版 MT-Bench 官方未发布 |
| Gemma 2 9B IT | 报告已登记 MMLU 72.3、TruthfulQA 50.27 | MBPP 59.2 已登记 | 不适用 | 仅官方 |
| Phi-3.5-mini-instruct | 模型卡已登记 MMLU 69、MMLU-Pro 47.4 | HumanEval 62.8、MBPP 69.6 已登记 | 不适用 | 仅官方（厂商内部工具口径已注明） |
| SmolLM2-1.7B-Instruct | 模型卡已登记 IFEval 56.7、MMLU-Pro 19.3、GSM8K 48.2 | HumanEval 28.1 已登记 | 不适用 | 仅官方；GSM8K 卡/论文差异已注明 |
| MiniCPM4 0.5B | 报告已登记 MMLU 55.55、CMMLU 65.22、C-Eval 66.11 | 用途不含代码 | 不适用 | 仅官方 |
| MiniCPM4 8B | 报告已登记 MMLU 75.83、CMMLU 80.62、C-Eval 81.36 | MBPP 78.99、HumanEval 85.37 已登记 | 不适用 | 仅官方 |
| InternVL3.5-1B | 论文 Table 14 已登记 MMLU 49.1 | 本站未收录此用途 | MMMU 44.2、MathVista 59.3、OCRBench 795 已登记 | 仅官方（发布版口径） |
| InternVL3.5-2B | 论文 Table 14 已登记 MMLU 61.9 | 本站未收录此用途 | MMMU 59.0、MathVista 71.8、OCRBench 836 已登记 | 仅官方 |

### Arena 快照核验范围

2026-10-06 检查了 CC BY 4.0 数据集的 text 与 vision `latest` 快照各前100行，列表中未出现上述本站精确小模型标识；本轮在检索其他行时遇到 Hugging Face 数据集查看 API 限流，后续按模型过滤的 API 请求也超时，未读取完整快照和历史 `full` 配置。因此不将“前100行未见”写成“榜单没有该型号”。后续从官方 Parquet 快照按完整 `model_name` / `organization` 字段核对并记录快照版本；若条目指向托管 API，应明确展示它是服务端点成绩，不能误标为本地权重实测。

### 后续准入条件

本轮读取 Epoch AI 页面指向的 [`benchmark_data.zip`](https://epoch.ai/data/benchmark_data.zip)（更新 2026-10-06），仅审查非 `_external` 的直接自测 CSV；排除其 external 汇总和 ECI 聚合文件。目标型号已登记 GPQA 成绩；新增命中为 Qwen3-8B 在 `otis_mock_aime_2024_2025.csv` 的 `qwen3-8b` 与 `qwen3-8b_none` 两条，分别 56.11%±6.45、22.22%±4.53 个百分点（标准误）。`chess_puzzles.csv` 也有同型号专门题成绩，但属于目录暂未覆盖的棋类专项，本轮不塞入通用能力摘要。其余被审查的自有 benchmark CSV 未匹配到可新增且准确的本站型号记录；Qwen3-4B-Instruct-2507 与本站原版 Qwen3-4B 不匹配，未借用。

导入前同时核对：准确模型工件或服务名、 benchmark 与数据/任务版本、指标方向和单位、运行模式、测试者、成绩来源的许可、再分发时需保留的署名/声明。多份网页出现同一成绩按原始执行批次去重。OpenCompass 或 LiveBench “支持该模型”只说明框架可运行，不表示已找到该精确型号的公开结果。Arena 人类偏好、客观知识/代码/视觉准确率分开呈现，不合并成总分。
