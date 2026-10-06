# 评测来源与导入边界

本指南用于维护现有型号的多来源、多指标能力依据。网站仍由人工审查 JSON 后静态构建，不在访问页面时抓取榜单或运行模型。核对日期：2026-10-06。平台许可可能变化，新增批次应重新核对具体结果文件。

## 来源准入

| 来源 | 适用用途与指标 | 目前的数据使用口径 |
| --- | --- | --- |
| [MTEB 结果仓库](https://github.com/embeddings-benchmark/results) | Embedding 的检索、相似度、分类；Reranker 的专用重排任务 | 结果仓库明确 CC0，可摘取已发布的准确型号结果；提交者和执行者另外核实，不能把托管当独立复测 |
| [Arena 官方成绩数据集](https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset) | 文本/视觉用户偏好 | 数据集声明 CC BY 4.0；仅使用该数据集的成绩快照，署名并保留许可链接、类别、日期、置信区间和样本量。模型端点与本站权重不能准确对应时不导入；不扩展到原始对话或投票数据 |
| [Epoch AI](https://epoch.ai/benchmarks/use-this-data) | 通用知识、数学、推理 | 自有成绩按其署名许可使用；外部汇总保留原始来源许可，不因为 Epoch 收录而成为第二份独立结果 |
| [OpenCompass Academic](https://opencompass.readthedocs.io/en/stable/notes/academic.html) | 通用、代码、多模态分项 | 核对具体榜单/结果文件及其许可；代码 Apache-2.0 不自动授权平台结果。保存评测配置与快照，不把框架支持当公开成绩 |
| [VLMEvalKit](https://github.com/open-compass/VLMEvalKit) | MMMU、MathVista、ChartQA、TextVQA 等 | 工具许可与结果许可分开；记录提取器、裁判与数据划分，厂商提交不算独立复测 |
| [EvalPlus](https://github.com/evalplus/evalplus.github.io) | HumanEval+、MBPP+ | 核查网站结果文件的许可和归属，需保留声明；题目和扩展测试另遵循各自许可。不借用 Base、其他尺寸或同家族型号 |
| [LiveCodeBench](https://github.com/LiveCodeBench/LiveCodeBench) / [LiveBench](https://livebench.ai/) | 编程竞赛 / 多领域客观能力 | 两者是不同评测；记录发布版本、题目时间窗口和配置。工具代码许可不是题目、答案或平台成绩的统一许可 |
| [HF Open LLM 历史榜](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard/discussions/1135) | 历史通用模型 | 2025-03-13 官方宣布退休；v1/v2 分开，核查结果数据许可。不能补充其停止后发布的型号 |
| [Open ASR Leaderboard](https://github.com/huggingface/open_asr_leaderboard) | ASR 的 WER/CER、RTF/RTFx | 代码 Apache-2.0 不覆盖所有结果和语料；多语言权重与 `.en` 变体分开，速度注明机器与运行时 |
| [OCRBench](https://github.com/Yuliang-Liu/MultimodalOCR) / [OmniDocBench](https://github.com/OpenDataLab/OmniDocBench) | 多模态文字问答 / 整页文档解析 | 先区分模型与完整流水线；文字行识别不能借用整页成绩，核查每份结果和语料许可 |
| [SeedTTS-Eval](https://github.com/BytedanceSpeech/seed-tts-eval) / [UTMOSv2](https://github.com/sarulab-speech/UTMOSv2) | 声音克隆专项 / 自动音质预测 | 不能把克隆协议的 SIM 套到预置音色 TTS；自动预测不是真人 MOS，工具、声音素材和结果分别审查 |
| [Artificial Analysis](https://artificialanalysis.ai/methodology) | 外部查阅入口 | 未取得适用于本站及开源再分发的书面授权，保持仅链接，不导入成绩、排名、截图、镜像成绩或衍生评分 |

逐型号准入和缺口见 [通用/代码/视觉覆盖表](EVIDENCE_GENERAL_COVERAGE.md) 与 [检索/语音/OCR 覆盖表](EVIDENCE_SPECIAL_COVERAGE.md)。覆盖表中的“待核实”不等于平台没有该型号；“仅链接”也不表示已获得数据使用许可。

## 身份、批次与独立性

每条成绩保留既有指标与配置，并记录 `provenance`：

- `sourceId`：实际评测者的稳定标识，不是转载网站名称。平台提交身份不明时按社区提交者记录。
- `runId`：可追溯的报告或评测批次标识。同一次运行被模型卡、论文和榜单转载时沿用同一标识；不同指标可以属于同一批次。
- `independence`：`first-party` 为厂商自测，`independent` 为已核实的独立评测，`unknown` 为执行者关系待确认。不能从域名、发布者名称或代码许可推导独立性。

成绩数、评测者来源数与独立来源数分开显示。多来源佐证至少需要不同来源的不同批次，其中包含经过审核的独立评测；同一次测试的转载及身份不明的社区提交不能提升该状态。结构检查仅发现字段冲突，无法证明评测者真正独立。

按用途保留所有指标；相同基准、数据集、语言、指标、单位、方向和版本的记录归组展示，每个来源的数值与条件仍分别保留。版本或口径不同分组展示，不平均、换算成智能总分或默认为可比。0 是有效成绩，未知配置保留空值。

## 导入流程

1. 检查准确权重/变体、思考模式、量化或 API 端点；名称相似不足以匹配。
2. 核对实际执行者、原始批次、结果文件和许可，确认公开网页、GitHub JSON 与源码包的使用范围。许可未确认时只记录缺口，不把公开访问视为授权。
3. 摘取必要结果而非复制整份报告、题目、声音、答案或截图；开放数据保留署名、许可和变更说明。
4. 保留版本、划分、语言、提示和运行时。评测日期、快照日期、核实日期分别说明，不从教程反推设置。
5. 更新同用途摘要与来源覆盖表，再运行内容校验、测试和构建。已有历史成绩不被当前榜单覆盖。

缺少可合法复用的准确结果时保留证据不足。后续只有确需验证缺口且协议适用时，才考虑离线本站实测；实测需另附设备、输入、命令、版本和许可。当前没有 GPU 推理服务，也未进行本站音质或识别准确率实测。
