# 模型来源与字段口径

模型元数据核对日期：2026-10-01；首批能力依据核对日期：2026-10-02。目录共21个型号。模型身份、参数、上下文、权重许可和部署入口优先取模型维护方的模型卡、技术报告或上游仓库。此处记录来源与字段核对，不代表本站下载或运行模型。`evaluations` 留空表示尚未登记可靠成绩；已有成绩也可能因条件不足而不可直接比较。硬件未做本站实测，来源未提供的数值不推算。

## 阶段四新增模型

| 模型 | 官方来源 | 已录字段与重要口径 |
| --- | --- | --- |
| Qwen3-0.6B | [模型卡](https://huggingface.co/Qwen/Qwen3-0.6B) · [Qwen3仓库](https://github.com/QwenLM/Qwen3) | 0.6B总参数、0.44B非嵌入参数；原生32,768 tokens；Apache-2.0。 |
| Qwen3-1.7B | [模型卡](https://huggingface.co/Qwen/Qwen3-1.7B) · [Qwen3仓库](https://github.com/QwenLM/Qwen3) | 1.7B总参数、1.4B非嵌入参数；原生32,768 tokens；Apache-2.0。 |
| Qwen3-4B | [模型卡](https://huggingface.co/Qwen/Qwen3-4B) · [长文本说明](https://huggingface.co/Qwen/Qwen3-4B#processing-long-texts) | 原生32,768 tokens；YaRN配置后可至131,072；4.0B总参数、3.6B非嵌入参数；Apache-2.0。扩展值不表示默认上下文。 |
| Qwen3-8B | [模型卡](https://huggingface.co/Qwen/Qwen3-8B) · [长文本说明](https://huggingface.co/Qwen/Qwen3-8B#processing-long-texts) | 名称按8B档；官方精确总参数8.2B、非嵌入参数6.95B；原生32,768，YaRN配置后131,072；Apache-2.0。 |
| Gemma 3 1B IT | [Google模型卡](https://ai.google.dev/gemma/docs/core/model_card_3) · [技术报告](https://arxiv.org/abs/2503.19786) · [Gemma Terms](https://ai.google.dev/gemma/terms) · [Hugging Face卡](https://huggingface.co/google/gemma-3-1b-it) | 1.0B参数（698M非嵌入+302M嵌入）；文本输入；32K上下文。权重依Google Gemma Terms，Hugging Face需登录接受条款。 |
| Gemma 3 4B IT | [Google模型卡](https://ai.google.dev/gemma/docs/core/model_card_3) · [技术报告](https://arxiv.org/abs/2503.19786) · [Gemma Terms](https://ai.google.dev/gemma/terms) · [Hugging Face卡](https://huggingface.co/google/gemma-3-4b-it) | 技术报告列语言模型3.884B（3,209M非嵌入+675M嵌入），共享视觉编码器约417M另计；支持图像输入；128K上下文。Gemma Terms且Hub需接受许可。 |
| SmolLM3-3B | [官方模型卡](https://huggingface.co/HuggingFaceTB/SmolLM3-3B) · [训练介绍](https://huggingface.co/blog/smollm3) | 卡片以3B档描述；训练上下文64K，YaRN可外推至128K；Apache-2.0。卡片列六种原生支持语言；Hub其他语言标签不代表同等原生能力。 |
| Qwen2.5-Coder-3B-Instruct | [模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-3B-Instruct) · [LICENSE](https://huggingface.co/Qwen/Qwen2.5-Coder-3B-Instruct/blob/main/LICENSE) | 总参数3.09B、非嵌入2.77B；32K上下文。权重为Qwen Research License，条款限定非商业用途，商业使用须另行申请，不能概括成Apache。 |
| Qwen2.5-Coder-7B-Instruct | [模型卡](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct) · [长文本说明](https://huggingface.co/Qwen/Qwen2.5-Coder-7B-Instruct#processing-long-texts) | 总参数7.61B、非嵌入6.53B；默认配置32,768 tokens，配置YaRN factor=4后扩展至131,072；Apache-2.0。静态YaRN可能影响短文本表现。 |
| Whisper tiny | [OpenAI上游仓库与模型表](https://github.com/openai/whisper#available-models-and-languages) · [MIT许可](https://github.com/openai/whisper/blob/main/LICENSE) | 官方模型表列39M参数。以OpenAI仓库的模型与代码发布路径记录MIT；不混用Hugging Face镜像的独立权重许可标签。30秒为音频片段窗口，不是token上下文。 |
| Whisper base | [OpenAI上游仓库与模型表](https://github.com/openai/whisper#available-models-and-languages) · [MIT许可](https://github.com/openai/whisper/blob/main/LICENSE) | 官方模型表列74M参数；仓库模型/代码按MIT记录。多语言档与英语专用`.en`档区分。 |
| Whisper medium | [OpenAI上游仓库与模型表](https://github.com/openai/whisper#available-models-and-languages) · [MIT许可](https://github.com/openai/whisper/blob/main/LICENSE) | 官方模型表列769M参数；仓库模型/代码按MIT记录。资源字段未知，未采用仓库中的单机速度/显存表作本站设备保证。 |
| all-MiniLM-L6-v2 | [模型卡](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | Hub卡片列22.7M参数、384维向量；默认超过256 word pieces会截断；Apache-2.0。卡片用途集中于英语句子与短段落，未外推中文能力。 |

Qwen3与SmolLM3等模型卡中的训练说明不是完整逐样本语料清单。除上述明确记录的参数与上下文信息外，不从权重文件大小反推模型参数或设备需求，也不把不同评测配置混成统一能力分数。

## 阶段一原有模型复核

旧条目在2026-10-01按当前条目字段重新核对官方卡、上游仓库和许可链接；未发现需要修改模型 JSON 的实质性错误。许可及参数细节以各行列出的来源和当前条目 `notes` 为准。

| 模型 | 官方来源 | 复核结论与未知值 |
| --- | --- | --- |
| Gemma 4 E2B IT | [Google模型卡](https://huggingface.co/google/gemma-4-E2B-it) · [Gemma 4许可](https://ai.google.dev/gemma/docs/gemma_4_license) | E2B有效参数口径与含嵌入表5.1B不同；视觉和音频编码器另列。上下文按卡片列131,072 tokens。权重链接使用Gemma 4 Apache许可。本站没有推理验证。 |
| Kokoro-82M | [模型卡](https://huggingface.co/hexgrad/Kokoro-82M) · [上游用法](https://github.com/hexgrad/kokoro#usage) · [代码许可](https://github.com/hexgrad/kokoro/blob/main/LICENSE) | 官方标注82M参数，权重和代码Apache-2.0。TTS不套用LLM token上下文；长句分段与G2P限制按模型卡说明。本站没有生成音频验证。 |
| PP-OCRv5 mobile rec | [Paddle模型卡及用法](https://huggingface.co/PaddlePaddle/PP-OCRv5_mobile_rec#model-usage) · [PaddleOCR代码许可](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE) | 官方来源未给此文本行识别模型的参数量，保留 `null`；权重与代码Apache-2.0。它是识别组件，不等同完整文本检测、版面和识别流水线。本站未运行OCR。 |
| Qwen2.5-Coder-1.5B-Instruct | [模型卡与Quickstart](https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B-Instruct#quickstart) · [权重许可](https://huggingface.co/Qwen/Qwen2.5-Coder-1.5B-Instruct/blob/main/LICENSE) | 卡片给出1.54B总参数、1.31B非嵌入参数和32,768上下文；权重Apache-2.0。非嵌入数不作为总参数或激活参数。本站没有运行代码生成。 |
| Qwen3.5-4B | [模型卡与Quickstart](https://huggingface.co/Qwen/Qwen3.5-4B#quickstart) · [权重许可](https://huggingface.co/Qwen/Qwen3.5-4B/blob/main/LICENSE) | 卡片的4B参数是语言模型口径，视觉编码器未并入该数字；原生262,144，上下文扩展至1,010,000需YaRN配置。评测只按卡片来源引用，本站未复现。 |
| Qwen3-Embedding-0.6B | [模型卡及Sentence Transformers用法](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B#sentence-transformers-usage) | 卡片标注0.6B、32K上下文和Apache-2.0；查询指令、池化、归一化和维度需与索引一致。本站未构建检索评测。 |
| Qwen3-Reranker-0.6B | [模型卡及Transformers用法](https://huggingface.co/Qwen/Qwen3-Reranker-0.6B#using-transformers) | 卡片标注0.6B、32K上下文和Apache-2.0。重排分数不等同embedding向量；配置字段不作为实测长上下文声明。本站未运行重排验证。 |
| Whisper small | [OpenAI模型表与用法](https://github.com/openai/whisper#available-models-and-languages) · [MIT许可](https://github.com/openai/whisper/blob/main/LICENSE) | small多语言档参数约244M，非`small.en`；原始OpenAI仓库发布路径按MIT记录权重与代码。Hugging Face转换权重有不同的卡片许可标签，应按实际使用的工件核对。30秒是音频窗口，不是token上下文。本站未复现WER。 |

网站代码使用 MIT，原创整理和指南使用 CC BY 4.0；这些许可不套用于第三方模型权重。型号详情页的“获取权重”链接跳转到各自官方模型页或上游仓库，模型文件不存放于本站代码仓库。来源复核、内容校验和构建都不等于本站完成模型推理测试。

## 首批能力依据（历史）

以下为少量指标事实引用，摘要由本站原创撰写；不复制整份报告、截图或官方整表。各项条件及使用说明保存于模型 JSON，未披露的配置明确保留未知。所有原始模型变体保持独立，不将这些引用称为本站复现或统一排名。

| 型号 | 评测出处 | 身份与口径 |
| --- | --- | --- |
| Gemma 4 E2B IT | [官方模型卡](https://huggingface.co/google/gemma-4-E2B-it) · [技术报告 Table 7](https://arxiv.org/html/2607.02770) | 取 E2B 指令版的 MMLU Pro、LiveCodeBench v6、MMMU Pro；ASR 只取英文 FLEURS WER，不混用中文/日文/韩文 CER 或多语言平均。 |
| Qwen3.5-4B | [官方模型卡](https://huggingface.co/Qwen/Qwen3.5-4B) | 取 4B 列的 MMLU-Pro、C-Eval、LiveCodeBench v6、MMMU-Pro；MMLU-Pro 原有 79.1% 记录迁移而不重复添加。 |
| Qwen3-4B | [后续官方卡的对照表](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507) | 只取表内明确的原版 Qwen3-4B Non-Thinking 列，不取该页面发布的 Instruct-2507 型号或 Base 型号成绩；LiveCodeBench 保存表明的题目窗口。 |
| Qwen3-Embedding-0.6B | [官方模型卡](https://huggingface.co/Qwen/Qwen3-Embedding-0.6B) | 取 MTEB Multilingual 表内0.6B行的 Mean(Task)、Retrieval、STS；不取8B成绩，官方自报不标成独立复测，聚合任务及运行条件不足以统一比较。 |
| Whisper small | [OpenAI 原始论文](https://cdn.openai.com/papers/whisper.pdf) | 取附录 Table 11 的 Common Voice 9 印尼语 WER 18.4%、中文 CER 29.4%，及 Table 13 的 FLEURS 印尼语 WER 16.3%；中文口径按附录 C 的逐字符分隔说明，不借用英文专用版或转换权重成绩。 |
| PP-OCRv5 mobile rec | [官方模型卡](https://huggingface.co/PaddlePaddle/PP-OCRv5_mobile_rec) | 少量摘录文字行识别准确率，任一字符或标点错误即整行错误；不混入文字检测或完整流程的成绩，内评估集未完整披露。 |

能力字段维护与 AA 数据使用边界见 [能力依据规范](CAPABILITY_EVIDENCE.md)。AA 仅作为原站参考入口，当前不导入其数值、排名或衍生评分。

## 全目录能力依据审核（2026-10-02）

本轮覆盖全部21个型号、35个型号用途组合。累计92条成绩（77条官方报告、15条第三方记录），比首批新增72条；35条用途摘要中25条仅官方依据、7条有官方与第三方佐证、3条证据不足。状态描述证据覆盖与独立性，不描述能力高低。所有成绩仍不可直接跨配置比较，本站未执行模型推理。

| 型号 | 成绩数 | 用途结论及出处 |
| --- | ---: | --- |
| Gemma 3 1B IT | 4 | 文本多来源；Google模型卡与Epoch GPQA，保留低于随机基线的成绩及条件限制。 |
| Gemma 3 4B IT | 5 | 文本多来源、视觉仅官方；Google模型卡与Epoch GPQA，MMMU取验证集。 |
| Gemma 4 E2B IT | 4 | 文本、代码、视觉、语音均仅官方；保留首批准确变体成绩。 |
| Qwen3-0.6B | 6 | 文本和代码仅官方；原报告Table 19–20，思考开关分别记录。 |
| Qwen3-1.7B | 10 | 文本与代码多来源；官方报告、Epoch GPQA、SmolLM3对照评测。 |
| Qwen3-4B | 12 | 文本与代码多来源；原报告及后续对照表、Epoch、SmolLM3；不借用Instruct-2507成绩。 |
| Qwen3-8B | 8 | 文本多来源、代码仅官方；官方报告及Epoch GPQA。 |
| Qwen3.5-4B | 4 | 文本、代码、视觉均仅官方；保留首批记录，不借用其他尺寸。 |
| Qwen2.5-Coder-1.5B-Instruct | 2 | 代码仅官方；HumanEval+及LiveCodeBench。通用文本仍证据不足，无可靠精确Instruct成绩。 |
| Qwen2.5-Coder-3B-Instruct | 3 | 文本与代码仅官方；原报告Table 16/20，MMLU-Pro35.2%。 |
| Qwen2.5-Coder-7B-Instruct | 3 | 文本与代码仅官方；原报告Table 16/20，MMLU-Pro45.6%。 |
| SmolLM3-3B | 6 | 文本与代码仅官方；模型卡IFEval、GlobalMMLU、LiveCodeBench v4按思考模式分列。 |
| all-MiniLM-L6-v2 | 3 | MTEB/RTEB社区检索记录；提交者身份关系未知，单来源仍证据不足。 |
| Qwen3-Embedding-0.6B | 3 | 向量检索仅官方；保留MTEB多语言成绩，厂商提交不视为独立复测。 |
| Qwen3-Reranker-0.6B | 3 | 重排仅官方；原报告Table 4，基于Qwen3-Embedding-0.6B召回top-100。 |
| Whisper tiny | 3 | 语音仅官方；原论文Common Voice 9印尼语WER49.6%、中文CER52.4%、FLEURS印尼语WER51.7%。 |
| Whisper base | 3 | 语音仅官方；同三项分别36.1%、44.9%、33.1%。 |
| Whisper small | 3 | 语音仅官方；同三项分别18.4%、29.4%、16.3%。 |
| Whisper medium | 3 | 语音仅官方；同三项分别11.6%、23.2%、10.2%。 |
| PP-OCRv5 mobile rec | 4 | OCR仅官方；保留文字行识别内评估，平均值的聚合权重未知。 |
| Kokoro-82M | 0 | 音质与可懂度证据不足；未找到满足准入条件的可靠成绩，不填推测分数。 |

本轮主要新增来源：

- [Google Gemma 3模型卡](https://ai.google.dev/gemma/docs/core/model_card_3)：准确IT尺寸的知识、指令遵循和视觉指标。
- [Qwen3技术报告](https://arxiv.org/html/2505.09388v1)：Table 17–20的准确尺寸及模式；LiveCodeBench v5与其他版本分开。
- [Qwen2.5-Coder技术报告](https://arxiv.org/html/2409.12186v3)：Table 16/20的Instruct成绩，LiveCodeBench题期2024.07–2024.09；非Base成绩。
- [SmolLM3官方卡](https://huggingface.co/HuggingFaceTB/SmolLM3-3B)：SmolLM3自报及Qwen3-1.7B/4B的外部对照评测；引用少量事实而非转载整表。
- [Epoch GPQA Diamond](https://epoch.ai/benchmarks/gpqa-diamond)及[数据使用说明](https://epoch.ai/benchmarks/use-this-data)：采用Epoch自身运行的数据，CC BY 4.0署名；保留导出记录标识、日期与条件缺口，不用外部转载文件冒充其独立测量。
- [MTEB Results PR #264](https://github.com/embeddings-benchmark/results/pull/264)及[结果库](https://github.com/embeddings-benchmark/results)：CC0结果数据。all-MiniLM-L6-v2三项测试集nDCG@10，社区提交者fzoll与发布方关系未核实，不称独立复测。
- [Qwen3 Embedding报告](https://arxiv.org/html/2506.05176v1)：Table 4作者自报的重排结果。
- [Whisper原论文](https://cdn.openai.com/papers/whisper.pdf)：附录Table 11/13。中文原表表头为WER，但附录C规定逐字符分隔，按等效CER记录；均为原始多语言尺寸。

另核对EvalPlus公开结果库，未找到上述Coder Instruct/Qwen3精确型号可用记录，因此未从该库导入成绩。使用评测工具产生的官方成绩仍属于官方自报，不因此成为第三方结果。AA继续仅提供链接。
