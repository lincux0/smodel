# 计划型号分阶段上线方案

制定日期：2026-10-17。候选来源为[模型上线台账](../doc/模型上线台账.xlsx)"计划上线"页，共 110 项（2026-10-02 调研窗口，2026-10-17 复核）。本方案是编辑排期建议，不是上线承诺；实际进度以台账与[发布说明](RELEASE.md)为准。

## 1. 排序依据与约束

- 上线门槛与流程沿用[内容维护指南](CONTENT_GUIDE.md)：正式上线前补齐许可原文、参数来源、能力依据与部署步骤；证据不足的用途须写明缺口，不填未经核实的数值。
- 排序维度：①用途缺口（对照已上线 29 个的覆盖）；②时效（近一年优先）；③核实成本（资料整理 → 日期待核实 → 待调研）。
- 每批规模参考历史批次（阶段四首批 21 个、2026-10-10 批次 8 个），建议 8–16 个，按人工核实工作量调整。
- 优先级（高/中/低）沿用台账编辑建议；本方案仅调整批次归属，不改变优先级判定。
- 全部候选都必须通过 `npm run validate:content`、`npm test`、`npm run build` 并完成预览检查后才可发布。

## 2. 现状与缺口

已上线 29 个型号（46 个用途摘要）与候选池对照（多用途型号重复计入）：

| 用途 | 已上线 | 候选池 | 判断 |
| --- | ---: | ---: | --- |
| 文本生成 | 14 | 46 | 覆盖较充分，候选以家族延续为主 |
| 代码 | 12 | 29 | 覆盖较充分 |
| 语音识别 | 6 | 12 | 按档位补充 |
| 视觉理解 | 4 | 16 | 优先补 |
| 向量检索 | 4 | 23 | 按语言与规模档位补 |
| 结果重排 | 2 | 8 | 优先补 |
| 文字识别 | 2 | 9 | 优先补 |
| 语音合成 | 2 | 12 | 优先补 |

候选池结构：高优先 47、中优先 56、低优先 7；资料整理 97、待调研 13；近一年 43、较早经典 41、日期待核实 26。

## 3. 批次总览

| 阶段 | 批次 | 主题 | 项数 | 建议节奏 |
| --- | --- | --- | ---: | --- |
| 阶段一：缺口补全 | 第 1 批 | 视觉、语音与 OCR | 12 | 2026 年第四季度 |
| | 第 2 批 | 新一代通用文本与代码 | 10 | 2026 年第四季度 |
| 阶段二：能力矩阵扩充 | 第 3 批 | 检索与重排 | 12 | 2027 年第一季度 |
| | 第 4 批 | 经典视觉/语音与高优先待核实 | 9 | 2027 年第一季度 |
| 阶段三：中优先长尾 | 第 5 批 | 近一年系列补齐（LFM2.5/Granite 4.0 等） | 16 | 2027 年第二季度 |
| | 第 6 批 | 经典通用与视觉 | 14 | 2027 年第二季度 |
| | 第 7 批 | 经典检索/重排/OCR/语音 | 8 | 2027 年第三季度 |
| 阶段四：核实与收尾 | 第 8 批 | 中优先日期待核实（核实后上线） | 12 | 2027 年第四季度起 |
| | 第 9 批 | 低优先按需 | 4 | 按需 |
| 待调研池 | — | 调研通过后并入相应阶段 | 13 | 并行推进 |

时间仅为建议节奏，未承诺确切日期；复核节奏随核实进度调整，调整后同步更新本文件与台账。

## 4. 阶段一：缺口补全

### 第 1 批：视觉、语音与 OCR（12 项）

目标：把视觉理解（现 4）、语音合成（现 2）、文字识别（现 2）补到有代表性的档位组合。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Qwen3-VL-8B-Instruct | 文本生成、代码、视觉理解 | 8 | Apache-2.0 | 承接已上线 4B；补充同系列大档位 |
| Gemma 4 E4B | 文本生成、代码、视觉理解 | 8 | Apache-2.0 | 承接 E2B；含音频理解，台账口径见行内备注 |
| Ministral 3 3B Instruct | 文本生成、视觉理解 | 3 | Apache-2.0 | 3B 级视觉理解档位 |
| Ministral 3 8B Instruct | 文本生成、代码、视觉理解 | 8 | Apache-2.0 | 8B 级视觉理解档位 |
| LFM2.5-VL-3B | 文本生成、视觉理解 | 3 | LFM Open License v1.x | 自定义许可，详情页须列明条款 |
| Qwen3-TTS 1.7B 系列 | 语音合成 | 1.7 | Apache-2.0 | 承接已上线 0.6B；上线时按官方型号拆分条目 |
| CosyVoice 3 | 语音合成 | 0.5 | Apache-2.0 | 补充 TTS 第二来源 |
| Qwen3-ASR-0.6B | 语音识别 | 0.6 | Apache-2.0 | 与 Whisper 互补的现代 ASR 档位 |
| Qwen3-ASR-1.7B | 语音识别 | 1.7 | Apache-2.0 | 同系列大档位 |
| Granite Speech 5.0 470M TurboCTC | 语音识别 | 0.47 | Apache-2.0（另有 NC 变体） | 上线前确认具体变体与许可 |
| PaddleOCR-VL-0.9B | 文字识别 | 0.9 | Apache-2.0 | 整页文档解析路线，补充 PP-OCRv5 之外的能力 |
| PaddleOCR-VL-1.5 | 文字识别 | 0.9 | Apache-2.0 | 同系列新版本；与 0.9B 的版本关系在条目中说明 |

### 第 2 批：新一代通用文本与代码（10 项）

目标：补齐 2026 年新发布的通用小模型档位，优先家族延续。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Qwen3.5-9B | 文本生成、代码、视觉理解 | 9 | Apache-2.0 | 承接已上线 3.5-4B |
| Qwen3.5-2B | 文本生成、代码、视觉理解 | 2 | Apache-2.0 | 3.5 系列小档位 |
| MiniCPM5 1B | 文本生成、代码 | 1 | Apache-2.0 | MiniCPM 新一代 |
| MiniCPM5 2B | 文本生成、代码 | 2 | Apache-2.0 | 同系列大档位 |
| Granite 4.2 3B | 文本生成、代码 | 3 | Apache-2.0 | IBM Granite 更新代 |
| Granite 4.2 8B | 文本生成、代码 | 8 | Apache-2.0 | 同系列大档位 |
| LFM2.5-1.2B-Instruct | 文本生成 | 1.17 | LFM Open License v1.x | 自定义许可 |
| LFM2.5-2.6B | 文本生成 | 2.69 | LFM Open License v1.x | 自定义许可 |
| Qwen3-4B-Instruct-2507 | 文本生成、代码 | 4 | Apache-2.0 | 与已上线 Qwen3-4B 并列的后续版本；独立条目、不合并成绩 |
| Nemotron Nano 9B v2 | 文本生成、代码 | 9 | NVIDIA Open Model License | 9B 级替代来源 |

## 5. 阶段二：能力矩阵扩充

### 第 3 批：检索与重排（12 项）

目标：向量检索（现 4）与结果重排（现 2）扩充到多语言、多规模档位。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Jina Embeddings v5 Text Small | 向量检索 | 0.677 | CC BY-NC 4.0 | 非商业许可，须列明条款 |
| Jina Embeddings v3 | 向量检索 | 0.572 | CC BY-NC 4.0 | 同上 |
| Jina Embeddings v4 | 向量检索 | 3.8 | CC BY-NC 4.0 | 同上；多模态检索路线 |
| Jina Reranker v3 | 结果重排 | 0.597 | CC BY-NC 4.0 | 同上 |
| Jina Reranker v3.5 | 结果重排 | 0.6 | CC BY-NC 4.0 | 同上；与 v3 的关系在条目中说明 |
| LightOn mLateOn | 向量检索 | 0.307 | Apache-2.0 | 多语言 late-interaction 档位 |
| Multilingual-E5-Large | 向量检索 | 0.56 | MIT | 经典多语言基线 |
| EmbeddingGemma | 向量检索 | 0.308 | Gemma Terms of Use | Google 检索模型；条款与 Gemma 3/4 一致 |
| Snowflake Arctic Embed L v2.0 | 向量检索 | 0.568 | Apache-2.0 | 英语检索档位 |
| Snowflake Arctic Embed M v2.0 | 向量检索 | 0.305 | Apache-2.0 | 同系列小档位 |
| Qwen3-Reranker-4B | 结果重排 | 4 | Apache-2.0 | 承接已上线 0.6B |
| Nomic Embed Text v2 MoE | 向量检索 | 0.475 | Apache-2.0 | 先核实权重首发日，再进入排期 |

### 第 4 批：经典视觉/语音与高优先待核实（9 项）

目标：补齐经典高优先项；日期待核实的先完成核实。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| InternVL3.5-4B | 文本生成、视觉理解 | 4.7 | Apache-2.0 | 视觉理解替代来源 |
| InternVL3.5-8B | 文本生成、视觉理解 | 8.5 | Apache-2.0 | 同系列大档位 |
| SenseVoiceSmall | 语音识别 | 0.234 | FunASR 模型许可 | 先核实许可原文再定 |
| DeepSeek-R1-Distill-Qwen-1.5B | 文本生成、代码 | 1.5 | MIT | 推理蒸馏经典档位 |
| DeepSeek-R1-Distill-Qwen-7B | 文本生成、代码 | 7 | MIT | 同系列大档位 |
| MiniCPM-V 4.5 | 文本生成、视觉理解 | 8.7 | Apache-2.0 | 先核实首发日期 |
| DeepSeek-OCR 2 | 文字识别 | 3 | Apache-2.0 | 先核实首发日期；与已上线 DeepSeek-OCR 的关系在条目中说明 |
| GLM-ASR-Nano-2512 | 语音识别 | 1.5 | MIT（HF 卡；GitHub 待核） | 先核实许可来源 |
| BGE-Large-ZH-v1.5 | 向量检索 | 0.326 | MIT | 先核实首发日期；中文检索缺口 |

## 6. 阶段三：中优先长尾

### 第 5 批：近一年系列补齐（16 项）

目标：LFM2.5、Granite 4.0 等近一年系列的档位补齐；评估后择要收录，不机械全收。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Qwen3-VL-2B-Instruct | 文本生成、代码、视觉理解 | 2 | Apache-2.0 | 视觉最小档位 |
| Qwen3.5-0.8B | 文本生成、代码、视觉理解 | 0.8 | Apache-2.0 | 3.5 系列最小档位 |
| LFM2.5-230M | 文本生成 | 0.23 | LFM Open License v1.x | 超小档位 |
| LFM2.5-350M | 文本生成 | 0.35 | LFM Open License v1.x | 超小档位 |
| LFM2.5-VL-450M | 视觉理解 | 0.45 | LFM Open License v1.x | 移动端视觉 |
| LFM2.5-VL-1.6B | 文本生成、视觉理解 | 1.6 | LFM Open License v1.x | 视觉中间档位 |
| LFM2.5-8B-A1B | 文本生成 | 8 | LFM Open License v1.x | MoE 档位 |
| LFM2.5-Embedding-350M | 向量检索 | 0.35 | LFM Open License v1.x | 检索小档位 |
| LFM2.5-ColBERT-350M | 向量检索 | 0.35 | LFM Open License v1.x | 多向量检索路线 |
| LFM2.5-1.2B-Thinking | 文本生成 | 1.2 | LFM Open License v1.x | 推理模式变体 |
| LFM2.5-Audio-1.5B | 语音识别、语音合成 | 1.5 | LFM Open License v1.x | 双用途音频模型 |
| Granite 4.0 1B | 文本生成、代码 | 1.6 | Apache-2.0 | Granite 4.0 档位 |
| Granite 4.0 H-1B | 文本生成、代码 | 1.5 | Apache-2.0 | 同系列混合档位 |
| LightOn mDenseOn | 向量检索 | 0.307 | Apache-2.0 | 稠密检索档位 |
| NVIDIA Llama-NV-Embed-Reasoning-3B | 向量检索 | 3.2 | CC BY 4.0 | 推理式检索路线 |
| Jina Embeddings v5 Text Nano | 向量检索 | 0.239 | CC BY-NC 4.0 | 非商业许可，须列明条款 |

### 第 6 批：经典通用与视觉（14 项）

目标：Qwen2.5、Llama 3.x、Gemma 2 等经典家族补齐，供按需选型。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Qwen2.5-7B-Instruct | 文本生成、代码 | 7 | Apache-2.0 | 经典中档位 |
| Qwen2.5-1.5B-Instruct | 文本生成、代码 | 1.5 | Apache-2.0 | 经典小档位 |
| Qwen2.5-0.5B-Instruct | 文本生成 | 0.5 | Apache-2.0 | 超小档位 |
| Llama 3.2 1B Instruct | 文本生成、代码 | 1.23 | Llama 3.2 Community License | 条款须列明 |
| Llama 3.2 3B Instruct | 文本生成、代码 | 3.21 | Llama 3.2 Community License | 同上 |
| Llama 3.1 8B Instruct | 文本生成、代码 | 8.03 | Llama 3.1 Community License | 同上 |
| Gemma 2 2B IT | 文本生成、代码 | 2.6 | Gemma Terms of Use | 条款与 Gemma 3/4 分别说明 |
| Gemma 2 9B IT | 文本生成、代码 | 9.2 | Gemma Terms of Use | 同上 |
| Phi-3.5-mini-instruct | 文本生成、代码 | 3.8 | MIT | 承接 Phi-4-mini 的上一代对照 |
| SmolLM2-1.7B-Instruct | 文本生成、代码 | 1.7 | Apache-2.0 | 承接 SmolLM3 的上一代 |
| MiniCPM4 0.5B | 文本生成 | 0.5 | Apache-2.0 | 超小档位 |
| MiniCPM4 8B | 文本生成、代码 | 8 | Apache-2.0 | 同系列大档位 |
| InternVL3.5-1B | 文本生成、视觉理解 | 1.1 | Apache-2.0 | 视觉最小档位 |
| InternVL3.5-2B | 文本生成、视觉理解 | 2.3 | Apache-2.0 | 视觉小档位 |

### 第 7 批：经典检索/重排/OCR/语音（8 项）

目标：补齐检索经典基线、OCR 与语音的经典档位。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Nomic Embed Text v1.5 | 向量检索 | 0.137 | Apache-2.0 | 英语检索经典 |
| Multilingual-E5-Small | 向量检索 | 0.118 | MIT | 多语言小档位 |
| Multilingual-E5-Base | 向量检索 | 0.278 | MIT | 多语言中间档位 |
| Qwen3-Embedding-8B | 向量检索 | 8 | Apache-2.0 | 承接已上线 0.6B/4B |
| Qwen3-Reranker-8B | 结果重排 | 8 | Apache-2.0 | 承接 0.6B 与计划中的 4B |
| Whisper large-v3 | 语音识别 | 1.55 | Apache-2.0（HF 卡口径） | 与 turbo 同系列全档位对照 |
| GOT-OCR 2.0 | 文字识别 | 0.716 | Apache-2.0 | 通用 OCR 经典 |
| CosyVoice 2 0.5B | 语音合成 | 0.5 | Apache-2.0 | 与 CosyVoice 3 并列的历史版本 |

## 7. 阶段四：核实与收尾

### 第 8 批：中优先日期待核实（12 项，核实后上线）

先完成权重首发日、许可与来源核实，通过后按清单上线；核实不通过或来源存疑的项目移回台账备注并说明。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| BGE-Reranker-Base | 结果重排 | 0.3 | MIT | 核实首发日 |
| GTE-Reranker-ModernBERT-Base | 结果重排 | 0.149 | Apache-2.0 | 核实首发日 |
| mxbai-embed-large-v1 | 向量检索 | 0.335 | Apache-2.0 | 核实首发日 |
| Jina Reranker v2 Base Multilingual | 结果重排 | 0.3 | CC BY-NC 4.0 | 核实首发日；非商业许可 |
| GTE-ModernBERT-Base | 向量检索 | 0.149 | Apache-2.0 | 核实首发日 |
| BGE-Multilingual-Gemma2 | 向量检索 | 9 | Gemma Terms of Use | 核实首发日 |
| E5-Mistral-7B-Instruct | 向量检索 | 7 | MIT | 核实首发日 |
| Florence-2-base | 文字识别 | 0.232 | MIT | 核实首发日；统一视觉任务路线 |
| Florence-2-large | 文字识别 | 0.771 | MIT | 同系列大档位 |
| Parakeet-TDT-0.6B-v3 | 语音识别 | 0.6 | CC-BY-4.0 | 核实首发日 |
| Canary-1B-v2 | 语音识别 | 1 | CC-BY-4.0 | 核实首发日 |
| Distil-Whisper Distil-Large-v3.5 | 语音识别 | 0.756 | MIT | 核实首发日 |

### 第 9 批：低优先按需（4 项）

按维护容量在下述项中取舍；如长期无补充价值可移出台账计划页并记录原因。

| 模型 | 用途 | 规模（B） | 权重许可 | 上线要点 |
| --- | --- | ---: | --- | --- |
| Granite 4.0 350M | 文本生成 | 0.35 | Apache-2.0 | 与 Granite 4.0 1B 档位重叠，按需 |
| Qwen2.5-3B-Instruct | 文本生成、代码 | 3.09 | Qwen Research License | 非商业许可；与 Coder 3B 档位部分重叠 |
| Mistral-7B-Instruct-v0.3 | 文本生成、代码 | 7 | Apache-2.0 | 经典，但已被多代小模型超越 |
| TrOCR-base-printed | 文字识别 | 0.334 | MIT | 印刷体专项，路线较旧 |

## 8. 待调研池（13 项）

以下项目信息不完整（发布依据、许可或规模未核实），先补齐调研再决定归属批次；调研结论写回台账备注列。

| 模型 | 用途 | 优先级 | 待补内容 |
| --- | --- | --- | --- |
| Chatterbox Multilingual V3 | 语音合成 | 高 | 规模、发布依据、许可原文 |
| GLM-TTS | 语音合成 | 高 | 规模、许可 |
| Chatterbox-Turbo | 语音合成 | 高 | 规模、发布依据 |
| Chatterbox-Nano | 语音合成 | 高 | 规模、发布依据 |
| F5-TTS | 语音合成 | 中 | 规模、许可（HF 权重元数据口径待核） |
| Fish Speech S1-mini | 语音合成 | 中 | 规模、许可条款 |
| Piper | 语音合成 | 中 | 规模、许可、发布依据 |
| PP-OCRv5 server recognition | 文字识别 | 中 | 规模、与已上线 mobile rec 的组件关系 |
| Fun-ASR-Nano-2512 | 语音识别 | 中 | 规模、许可 |
| Paraformer-large | 语音识别 | 中 | 规模、许可、发布依据 |
| mxbai-rerank-xsmall-v1 | 结果重排 | 低 | 规模、发布依据 |
| Donut-base | 文字识别 | 低 | 规模、许可、发布依据 |
| E2-TTS | 语音合成 | 低 | 规模、许可；非商业条款 |

## 9. 每批上线流程与验收

1. 补齐条目：许可原文、参数来源、上下文、部署步骤与验证状态；能力依据按[评测来源规范](EVIDENCE_SOURCES.md)补录，证据不足的用途写明缺口。
2. 本地校验：`npm run validate:content`、`npm test`、`npm run build` 全部通过。
3. 预览检查：用项目 Playwright 检查新增详情页、目录筛选、对比流程与窄屏；无控制台错误。
4. 台账与文档：条目录入后从计划页移入已上线页；更新[来源记录](SOURCES.md)批次章节、[能力依据](CAPABILITY_EVIDENCE.md)统计与[发布说明](RELEASE.md)。
5. 发布：提交并推送 master 触发 Vercel 部署；线上冒烟验证新增页面返回 200 且内容正确。

## 10. 特殊情形处理

- 非商业与自定义许可（Jina 系列 CC BY-NC 4.0、Qwen Research License、LFM Open License、Gemma Terms、Llama Community License、NVIDIA Open Model License）：详情页明确列出条款限制，不把"开放权重"写成"完整开源"，不将代码许可套用于权重。
- 日期待核实：先核实权重首发日与发布依据（不采用仓库创建时间），再进入排期。
- 待调研：补齐许可、规模与来源后重估优先级，长期无法核实的记录原因。
- 同家族多档位：每个型号单独条目；收录前评估档位差异与部署价值，不批量收录重复微调或社区量化副本。
- 证据标准不变：AA 仅链接；新增成绩默认不可比；官方图表为图片且无法转录时保留证据缺口。

## 11. 维护约定

- 每批完成后在台账"已上线页"更新计数与状态核对日期，并在"计划上线"页移除对应行。
- 候选增删（新发布、撤版、许可证变化）同步修订本文件；批次顺序调整记录在台账备注列。
- 阶段六自动采集落地后，新候选按同一优先级体系评估后插入后续批次，不改变本方案的人工审核门槛。
