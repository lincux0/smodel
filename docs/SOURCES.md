# 模型来源与字段口径

模型元数据核对日期：2026-10-01；首批能力依据核对日期：2026-10-02；2026-10-10 批次已于2026-10-14复核修订；全目录复核与批次1–4扩充于2026-10-17执行（见文末章节）。目录共72个型号。模型身份、参数、上下文、权重许可和部署入口优先取模型维护方的模型卡、技术报告或上游仓库。此处记录来源与字段核对，不代表本站下载或运行模型。`evaluations` 留空表示尚未登记可靠成绩；已有成绩也可能因条件不足而不可直接比较。硬件未做本站实测，来源未提供的数值不推算。

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

## 多来源增量维护

2026-10-06：既有92条成绩保留，新增Qwen3-8B的两条Epoch AI OTIS Mock AIME 2024-2025数学记录（CC BY 4.0，自有运行日志）以及Qwen3-Embedding-0.6B的三条MTEB/HUME分项（CC0，提交执行者关系未知）。总计97条；新记录未加入可比组。运行标识、模型配置与结果出处在对应JSON中保留。

## 2026-10-10 上线批次

本轮从[上线台账](../doc/模型上线台账.xlsx)计划页筛选 8 个高优先级型号上线，补齐向量检索、结果重排、文字识别、语音合成与语音识别的档位覆盖。字段取自发布方模型卡、技术报告或官方仓库；本站未下载权重或运行模型。

| 模型 | 官方来源 | 已录字段与重要口径 |
| --- | --- | --- |
| BGE-M3 | [模型卡](https://huggingface.co/BAAI/bge-m3) · [论文v5](https://arxiv.org/html/2402.03216v5) · [代码许可](https://github.com/FlagOpen/FlagEmbedding/blob/master/LICENSE) | 1024维稠密向量、8192 tokens、MIT，官方声明100多种语言。模型卡未单列参数量，568M按其XLM-RoBERTa-large骨干与三类表示头的公开部署口径记录，未从权重文件大小反推。论文v5的MIRACL/MKQA/MLDR为71.5/75.5/65.0，对应M3.All融合表示，不是稠密单独成绩；旧MIRACL 70.0已由作者修正，不再作为当前结果。评测运行日未披露；MLDR由论文作者构建且其训练集参与训练增强。 |
| Qwen3-Embedding-4B | [模型卡](https://huggingface.co/Qwen/Qwen3-Embedding-4B) | 4B、32K上下文、最高2560维并支持32–2560自定义输出；Apache-2.0。MTEB多语言、英文v2与C-MTEB三项任务均值由发布方按型号报告。2025-05-24仅为对照模型榜单分数采集日期，不是Qwen自身评测日期；本型号运行日保留未知。 |
| BGE-reranker-v2-m3 | [模型卡](https://huggingface.co/BAAI/bge-reranker-v2-m3) · [代码许可](https://github.com/FlagOpen/FlagEmbedding/blob/master/LICENSE) | 基于bge-m3的多语cross-encoder；权重Apache-2.0、代码MIT。模型卡未声明最大输入长度，按未披露记录，不把官方示例的max_length=512当作模型上限。参数量按HF权重元数据张量参数和567,755,777（约0.568B）记录。官方评测为图片，未引用其数值。 |
| DeepSeek-OCR | [模型卡](https://huggingface.co/deepseek-ai/DeepSeek-OCR) · [论文](https://arxiv.org/abs/2510.18234) | MIT；权重元数据张量参数和约3.34B，论文说明解码器为DeepSeek3B-MoE-A570M并另有DeepEncoder组件。论文Fox基准98.5%对应600–700 GT tokens分箱的7页、100个视觉tokens与6.7×压缩比，不是全部Fox样本或普通OCR字符准确率。vLLM按[当前官方recipe](https://docs.vllm.ai/projects/recipes/en/latest/DeepSeek/DeepSeek-OCR.html)安装稳定版；OmniDocBench成绩本轮暂未转录核实。模型卡未披露文本上下文长度，官方vLLM示例的max_tokens不作为上下文声明。 |
| Whisper large-v3-turbo | [模型卡](https://huggingface.co/openai/whisper-large-v3-turbo) · [发布讨论](https://github.com/openai/whisper/discussions/2363) · [MIT许可](https://github.com/openai/whisper/blob/main/LICENSE) | 官方参数表列809M，解码层由large-v3的32层减至4层；HF模型卡列出99种语言标识。30秒为音频窗口不是token上下文。模型卡未单独报告该型号WER/CER，未借用large-v3论文数值。 |
| Qwen3-VL-4B-Instruct | [模型卡](https://huggingface.co/Qwen/Qwen3-VL-4B-Instruct) · [Qwen3-VL仓库](https://github.com/QwenLM/Qwen3-VL) | 4B为官方语言骨干档位，权重元数据张量参数和约4.44B含视觉组件；原生262,144、YaRN扩展至1,000,000（官方提示factor取2或3而非4）；Apache-2.0。支持文本、图像和视频输入；Transformers稳定版自4.57.0集成。官方视觉与文本性能表为图片，本轮尚未逐项转录复核，暂不登记分数；仓库说明评测使用vLLM与VLMEvalKit、lmms-eval，部分提示词有修改、部分基准为内部构建。 |
| Qwen3-TTS-12Hz-0.6B-Base | [模型卡](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-Base) · [官方仓库](https://github.com/QwenLM/Qwen3-TTS) | 0.6B为官方型号档位，主检查点914,643,008参数（约0.915B），不含独立speech_tokenizer权重；包含该组件的整套参数总量未核实。覆盖10种语言、Apache-2.0；声音克隆接收参考音频，x_vector_only_mode=True可省略参考文本但质量可能下降。Seed-TTS测试集中文WER 0.92%、英文1.32%取自官方仓库基准表，同批评测配置在表前统一说明；WER只表示内容一致性，不代表音色相似度或听感。 |
| Phi-4-mini-instruct | [模型卡](https://huggingface.co/microsoft/Phi-4-mini-instruct) · [论文](https://huggingface.co/papers/2503.01743) | 3.8B稠密解码器、128K上下文、MIT；官方列出23种语言，训练约5万亿token、公开数据截止2024年6月。模型卡七项成绩来自其内部基准平台，未完整披露提示模板与解码参数；卡内无代码基准行，代码用途保留证据不足。 |

本批 8 个型号的成绩全部为发布方自报或论文报告，本轮未找到许可明确且确认为独立方的同条件复测，因此没有新增第三方记录，也未建立可比组。BGE-reranker-v2-m3、Whisper large-v3-turbo 与 Qwen3-VL-4B-Instruct 的用途结论为证据不足，原因是本轮尚未逐项转录复核图片中的成绩，或未找到明确单列的该型号结果；图片形式本身不代表无法核对。

许可准入及核验范围见 [评测来源规范](EVIDENCE_SOURCES.md)、[通用/代码/视觉覆盖表](EVIDENCE_GENERAL_COVERAGE.md)、[检索/语音/OCR覆盖表](EVIDENCE_SPECIAL_COVERAGE.md)。AA仅链接；未核实完整快照或具体结果许可的平台不宣称已完成数据接入。

## 2026-10-17 全目录复核

对 29 个型号逐条重查官方模型卡、仓库与论文，核对身份、参数、上下文、许可与部署链接，并复核可引用成绩；基础数据未发现需修正的数值，`checkedAt` 全部刷新为 2026-10-17。目录合计 128 条成绩（98 官方、30 第三方）、46 个用途摘要；独立性待确认的用途由 1 项增至 6 项。

更正与补充：

- Qwen3-Embedding-0.6B：三条 HUME 结果位于 [MTEB Results PR #281](https://github.com/embeddings-benchmark/results/pull/281)（提交者 Samoed，AdnanElAssadi 共同提交），此前记录的 afalf 归属有误；已更正 `publisher` 与 `provenance.sourceId`，独立性仍为未确认。
- Phi-4-mini-instruct：权重许可链接改为 [LICENSE 原文](https://huggingface.co/microsoft/Phi-4-mini-instruct/blob/main/LICENSE)。
- Qwen3-VL-4B-Instruct：补充[代码许可](https://github.com/QwenLM/Qwen3-VL/blob/main/LICENSE)（Apache-2.0）；视觉成绩缺口说明见下。

新增成绩（6 个型号、15 条，全部不可比、均未确认独立）：

| 型号 | 来源 | 新增内容 |
| --- | --- | --- |
| BGE-M3 | [MTEB Results PR #264](https://github.com/embeddings-benchmark/results/pull/264)（fzoll 提交） | RTEB 三项 nDCG@10：ChatDoctorRetrieval 0.57973、DS1000Retrieval 0.41902、MBPPRetrieval 0.69972；结果目录对应 revision 5617a9f6 |
| Qwen3-Embedding-4B | [MTEB Results PR #214](https://github.com/embeddings-benchmark/results/pull/214)（afalf 提交） | CQADupstackRetrieval nDCG@10 0.502843、STS12 Spearman 0.866139、ATEC Spearman 0.532428；结果目录对应 revision 636cd9bf |
| BGE-reranker-v2-m3 | [MTEB Results PR #768](https://github.com/embeddings-benchmark/results/pull/768)（KennethEnevoldsen 发起，gabrielspmoreira 参与提交，标注 beta） | ViDoRe v3.1 三项 english 子集 nDCG@10：ComputerScience 0.6929、FinanceEn 0.49652、Industrial 0.48268；结果目录对应 revision 953dc6f6 |
| DeepSeek-OCR | [论文](https://arxiv.org/abs/2510.18234) Table 3（HTML 版为可转录文本表） | OmniDocBench Overall 编辑距离（越低越好）：Gundam 档 English 0.127 / Chinese 0.181，Small 档 English 0.221；2026-10-10 记录称"OmniDocBench 仅有图"不准确 |
| Whisper large-v3-turbo | [Open ASR Leaderboard](https://huggingface.co/datasets/hf-audio/open-asr-leaderboard-results) english_short_latest.csv | 英文短音频平均 WER 8.39%（CSV 原值 8.387142857142857），对应多语言 turbo 权重 |
| Qwen3-VL-4B-Instruct | [技术报告](https://arxiv.org/html/2511.21631v2) Table 6（HTML 版 2B/4B/8B Instruct 对比表） | 纯文本成绩 MMLU-Pro 67.1、LiveCodeBench v6 37.9（4B Instruct 非思考列） |

保留证据缺口：

- Qwen3-VL-4B-Instruct 视觉用途：模型卡与技术报告的视觉性能表以图片形式发布，本轮无法在页面文本中核对数值，未转录、维持证据不足。
- Kokoro-82M 音质：TTS Arena 相关页面仍未确认结果再使用许可，维持证据不足。
- Phi-4-mini-instruct 代码用途：论文 Table 7/8 的代码成绩未标明对应 Base 还是 Instruct 权重，未导入。
- Whisper tiny/base/small/medium：english_short_latest.csv（65 行）中无该四个尺寸的公开行，维持原论文成绩。

其余型号（Qwen3 系、Qwen2.5-Coder 系、Gemma 3/4、SmolLM3、Kokoro、PP-OCRv5、Qwen3-Reranker、Qwen3-TTS 等）的官方页面与既有记录逐项核对一致；部分官方卡表还含更多成绩，本轮按"少量事实引用"原则未扩大搬运。AA 仍仅链接，未导入任何数据。

## 2026-10-17 批次1-2上线

按[计划型号分阶段上线方案](LAUNCH_PLAN.md)第 1–2 批上线 22 个型号：视觉理解（Qwen3-VL-8B-Instruct、Gemma 4 E4B、Ministral 3 3B/8B Instruct、LFM2.5-VL-3B、Qwen3.5-9B/2B）、语音识别（Qwen3-ASR-0.6B/1.7B、Granite Speech 5.0 470M TurboCTC）、语音合成（Qwen3-TTS-12Hz-1.7B-Base、Fun-CosyVoice3-0.5B-2512）、文字识别（PaddleOCR-VL、PaddleOCR-VL-1.5）与通用文本/代码（Qwen3-4B-Instruct-2507、MiniCPM5 1B/2B、Granite 4.2 3B/8B、LFM2.5-1.2B-Instruct/2.6B、NVIDIA Nemotron Nano 9B v2）。目录增至 51 型号、86 用途摘要、208 条成绩（178 官方、30 第三方）。

字段均取自发布方模型卡、许可文件、技术报告与官方仓库，经本轮逐项查阅获取；本站未下载权重或运行模型。新增 80 条成绩全部为发布方自报（`first-party`）并标注不可比。主要口径如下：

| 型号 | 官方出处与已录口径 |
| --- | --- |
| Qwen3-VL-8B-Instruct | [模型卡](https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct) · [技术报告](https://arxiv.org/html/2511.21631v2) · [仓库许可](https://github.com/QwenLM/Qwen3-VL/blob/main/LICENSE) | 8B 语言骨干档位；原生 262,144、YaRN 扩展至 1,000,000（官方提示 factor 取 2 或 3）；权重与代码 Apache-2.0。文本成绩取 Table 6 的 8B 列（MMLU-Pro 71.6、GPQA 61.9、LiveCodeBench v6 39.3）；视觉表为图片未转录，视觉用途证据不足。 |
| Gemma 4 E4B IT | [模型卡](https://huggingface.co/google/gemma-4-E4B-it) · [Gemma 4 许可](https://ai.google.dev/gemma/docs/gemma_4_license) | 官方口径 E4B 为 4.5B 有效参数（含嵌入约 8B）；128K 上下文；支持文本、图像与音频输入。成绩取模型卡 E4B 列（MMLU-Pro 69.4、LiveCodeBench v6 52.0、MMMU-Pro 52.6、MATH-Vision 59.5）；Apache-2.0。 |
| Ministral 3 3B/8B Instruct 2512 | [3B 卡](https://huggingface.co/mistralai/Ministral-3-3B-Instruct-2512) · [8B 卡](https://huggingface.co/mistralai/Ministral-3-8B-Instruct-2512) | 官方组件口径：3B 为 3.4B 语言模型＋0.4B 视觉编码器、8B 为 8.4B＋0.4B；256K 上下文；README 明确 Apache-2.0。成绩取 Instruct 表（Arena Hard、WildBench、MATH Maj@1、MM MTBench）；8B 代码用途证据不足（LiveCodeBench 仅出现在 Reasoning 检查点表格）。 |
| LFM2.5-VL-3B | [模型卡](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LM 骨干 2.6B＋SigLIP2 400M 视觉编码器；32,768 上下文。LFM Open License v1.0（商用门槛：年收入 1000 万美元，非营利与研究不受限，已在条目限制中写明）。成绩：ScreenSpot-v2 80.7、RefCOCO 87.9、OCRBenchv2 英文子集 47.5、MMMU Pro 30.5。 |
| Qwen3-TTS-12Hz-1.7B-Base | [HF 卡](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base) · [官方仓库](https://github.com/QwenLM/Qwen3-TTS) | 1.7B-Base 独立 HF 仓库已确认（Apache-2.0；同系列另有 CustomVoice/VoiceDesign，本轮未建条目）。Seed-TTS 测试集中文 WER 0.77、英文 1.24；多语言表 12Hz-1.7B-Base 中文 WER 0.928、SIM 0.799（已逐列核对列头）。 |
| Fun-CosyVoice3-0.5B-2512 | [权重仓库](https://huggingface.co/FunAudioLLM/Fun-CosyVoice3-0.5B-2512) · [代码仓库](https://github.com/FunAudioLLM/CosyVoice) | 权重许可经 HF 元数据核实为 Apache-2.0；权重仓库无独立 LICENSE 文件，该限制已写入条目。成绩取 Seed-TTS 测试载体 Base 行（test-zh CER 1.21、SS 78.0、test-en WER 2.24、test-hard CER 6.71）；RL 行属另一权重未混用。 |
| Qwen3-ASR-0.6B/1.7B | [0.6B 卡](https://huggingface.co/Qwen/Qwen3-ASR-0.6B) · [1.7B 卡](https://huggingface.co/Qwen/Qwen3-ASR-1.7B) | 模型卡覆盖 30 种语言与 22 种中文方言（逐项计数核实）；GigaSpeech 8.88/8.45、AISHELL-2 3.15/2.71、KeSpeech 7.08/5.10、Fleurs 十二语平均 7.57/4.90；官方说明 greedy 解码、max_new_tokens=1024。 |
| Granite Speech 5.0 470M TurboCTC | [模型卡](https://huggingface.co/ibm-granite/granite-speech-5.0-470m-turboctc) · [官方文章](https://huggingface.co/blog/ibm-granite/granite-speech-5-0-470m-turboctc) | 英语专用非自回归 CTC；Apache-2.0（NC 变体 CC-BY-NC-SA-4.0 另行存在，未建条目）。聚合平均 WER 5.00%、RTFx 超 12,600（1×H200 测量，"in excess of"按下限照录）；分测试集数值为图片未转录。 |
| PaddleOCR-VL | [模型卡](https://huggingface.co/PaddlePaddle/PaddleOCR-VL) · [技术报告](https://arxiv.org/html/2510.14528v1) | 0.959B VLM＋PP-DocLayoutV2；报告 OmniDocBench v1.5 总分 92.56、Text-Edit 0.035、Formula-CDM 91.43；模型卡成绩表为图片未转录；1.5 报告将其写作 92.86 的差异已注明。 |
| PaddleOCR-VL-1.5 | [模型卡](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.5) · [发布说明](https://github.com/PaddlePaddle/PaddleOCR) | 1.5 为版本号、规模仍 0.9B；新增印章识别与文本检测，改进复杂拍摄文档鲁棒性。成绩：OmniDocBench v1.5 94.5%、Real5-OmniDocBench 总体 92.05%、Skewing 91.66%、Formula-CDM 94.21%；语言扩展 111 种取自 GitHub 发布说明。 |
| Qwen3.5-9B/2B | [9B 卡](https://huggingface.co/Qwen/Qwen3.5-9B) · [2B 卡](https://huggingface.co/Qwen/Qwen3.5-2B) | 9B/2B 为型号档位；原生 262,144（9B 可扩展至 1,010,000）。成绩逐列核对：MMLU-Pro 82.5/66.5、C-Eval 88.2/73.2、LiveCodeBench v6 65.6（9B）、MMMU-Pro 70.1/50.3；2B 默认非思考模式且官方提示更易进入思考循环（已写入限制）。 |
| MiniCPM5 1B/2B | [1B 卡](https://huggingface.co/openbmb/MiniCPM5-1B) · [2B 卡](https://huggingface.co/openbmb/MiniCPM5-2B) | 131,072 上下文；官方参数量 1.08B/2.52B（档位记 1B/2B，notes 保留精确值）。1B 评测排行榜为图片未录入，两个用途维持证据不足；2B 收录 MMLU-Pro 70.8、IFEval 86.7、LiveCodeBench v6 69.1、SWE-bench Verified 46.4，卡内带 † 的 AA 发布行未导入。 |
| Granite 4.2 3B/8B | [3B 卡](https://huggingface.co/ibm-granite/granite-4.2-3b) · [8B 卡](https://huggingface.co/ibm-granite/granite-4.2-8b) | 原生 128K（可扩展至 512K）；Apache-2.0；官方 GGUF 仓库存在。成绩（NeMo Evaluator 框架）：3B MMLU-Pro 67.84、AIME25 78.33、BFCL v4 52.41、LiveCodeBench v6 69.71；8B MMLU-Pro 74.04、AIME25 86.67、LiveCodeBench v6 73.24、SWE-bench Verified 47.67；思考模式未逐项说明。 |
| LFM2.5-1.2B-Instruct/2.6B | [1.2B 卡](https://huggingface.co/LiquidAI/LFM2.5-1.2B-Instruct) · [2.6B 卡](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LFM Open License v1.0（商用门槛同 VL 条目）。1.2B：MMLU-Pro 44.35、IFEval 86.23、Multi-IF 60.98、BFCLv3 49.12；2.6B：AIME25 51.87、IFBench 59.17、Multi-IF 80.07、BFCLv4 56.88；官方"不推荐编程/知识密集任务"已写入限制；2.6B 卡内 AA-Omni 行未导入。 |
| Qwen3-4B-Instruct-2507 | [模型卡](https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507) | 4.0B 总参数、3.6B 非嵌入；262,144 原生；仅非思考模式。成绩：MMLU-Pro 69.6、GPQA 62.0、LiveCodeBench v6（25.02–25.05）35.1、MultiPL-E 76.8；SGLang/vLLM 启动命令照录。独立于已上线 Qwen3-4B，未合并任何旧版成绩。 |
| NVIDIA Nemotron Nano 9B v2 | [模型卡](https://huggingface.co/nvidia/NVIDIA-Nemotron-Nano-9B-v2) | Mamba2/Transformer 混合架构（仅 4 层注意力）；NVIDIA Open Model License。成绩：AIME25 72.1、GPQA 64.0、LiveCodeBench 71.1（Reasoning-On）、RULER 128K 78.9（Reasoning-Off，卡注明确）；NeMo-Skills 评测；vLLM 需 Mamba cache 参数。 |

本轮新增记录全部不可比，未建立比较组，未导入AA数据；非商业与自定义许可（LFM、NVIDIA、Gemma 条款）在各条目许可字段标明名称与条款链接。批次完成情况与后续批次安排见[计划型号分阶段上线方案](LAUNCH_PLAN.md)。

## 2026-10-17 批次3-4上线

按[计划型号分阶段上线方案](LAUNCH_PLAN.md)第 3–4 批上线 21 个型号：检索与重排（Jina Embeddings v5 Text Small / v3 / v4、Jina Reranker v3 / v3.5、LightOn mLateOn、Multilingual-E5-Large、EmbeddingGemma、Snowflake Arctic Embed L/M v2.0、Qwen3-Reranker-4B、Nomic Embed Text v2 MoE、BGE-Large-ZH-v1.5）、视觉理解（InternVL3.5-4B/8B、MiniCPM-V 4.5）、语音识别（SenseVoiceSmall、GLM-ASR-Nano-2512）、文字识别（DeepSeek-OCR 2）与推理蒸馏模型（DeepSeek-R1-Distill-Qwen-1.5B/7B）。目录增至 72 型号、112 用途摘要、286 条成绩（251 官方、35 第三方）。

字段均取自发布方模型卡、许可文件、技术报告与官方仓库；新增 78 条成绩（73 官方、5 第三方）全部标注不可比，未导入 AA 数据。台账"日期待核实"与本轮许可核实结论：

- MiniCPM-V 4.5：权重发布 2025-08-26（官方 changelog）。
- DeepSeek-OCR 2：权重 2026-01-27 首次随仓库提交上传（HF 提交历史，未采用仓库创建日）；论文 2026-01-28。
- GLM-ASR-Nano-2512：权重上传 2025-12-09（HF 提交历史）。
- BGE-Large-ZH-v1.5：2023-09-12（官方模型卡 News）。
- Nomic Embed Text v2 MoE：权重首次提交 2025-02-07（HF 文件提交历史；官方博客页面已失效）。
- Jina Embeddings v4 许可：模型卡声明此前 CC BY-NC 4.0 系发布错误，正确许可为 [Qwen Research License](https://huggingface.co/jinaai/jina-embeddings-v4/blob/main/LICENSE)（衍生自 Qwen2.5-VL-3B 的约束）；台账与页面均已按核实结果记录。
- SenseVoiceSmall：[FunASR Model Open Source License v1.1](https://github.com/modelscope/FunASR/blob/main/MODEL_LICENSE)（官方在仓库 issue 中澄清 Section 3 为免责声明、非禁止商用；商用需注明出处与模型名）；代码 MIT 与权重许可分开记录。
- GLM-ASR-Nano-2512：权重 MIT（HF 卡）、代码 Apache-2.0（GitHub），两者分别记录。

主要口径：

| 型号 | 官方出处与已录口径 |
| --- | --- |
| Jina Embeddings v5 Text Small | [模型卡](https://huggingface.co/jinaai/jina-embeddings-v5-text-small) | 677M、119+ 语言、32K、1024 维（支持 Matryoshka）；MTEB English v2 71.7、MMTEB 67.7（卡自报）。CC BY-NC 4.0 非商业许可，商用需另行授权；HF 张量和口径差异已在 notes 说明。 |
| Jina Embeddings v3 | [模型卡](https://huggingface.co/jinaai/jina-embeddings-v3) · [论文](https://arxiv.org/html/2409.10173v3) | 官方 570M（台账原 0.572B 未获官方支持，按 570M 记录）、8192 tokens、100 语基础/30 语调优；MTEB 英语 65.52、多语 64.44（论文 Table 4）。CC BY-NC 4.0。 |
| Jina Embeddings v4 | [模型卡](https://huggingface.co/jinaai/jina-embeddings-v4) | 3.8B、32K、文本+图像输入、单向量与多向量；MMTEB 检索 66.49、MTEB(eng,v2) 55.97、ViDoRe 84.11（nDCG@5）、自建 JVDR 73.98。Qwen Research License（见上）。 |
| Jina Reranker v3 | [模型卡](https://huggingface.co/jinaai/jina-reranker-v3) · [论文](https://arxiv.org/html/2509.25085v4) | 0.6B（基于 Qwen3-0.6B）、listwise、最多 64 候选、131K 上下文；BEIR 61.94（论文 61.85 的差异已注明）、MIRACL 66.83、CoIR 70.64、MKQA 67.92（top-100 协议）。CC BY-NC 4.0。 |
| Jina Reranker v3.5 | [模型卡](https://huggingface.co/jinaai/jina-reranker-v3.5) | 0.6B、混合 3L2G 注意力、131K；BEIR 63.20、MIRACL 74.11、RTEB 70.95、Struct-IR 48.3（受控池协议）。CC BY-NC 4.0。 |
| LightOn mLateOn | [模型卡](https://huggingface.co/lightonai/mLateOn) | 307M（基于 mmBERT-base）、8192、九语 late-interaction；BEIR 57.56、MIRACL 目标语言子集 65.61、MLDR 目标语言子集 87.69、MTEB Code 73.48。Apache-2.0；多向量存储成本另计。 |
| Multilingual-E5-Large | [模型卡](https://huggingface.co/intfloat/multilingual-e5-large) · [论文](https://arxiv.org/html/2402.05672v1) | 约 560M、1024 维、512 截断、100 语、query/passage 前缀范式；Mr. TyDi 70.5、MIRACL dev 66.5（R@100 94.3）、MTEB 英文 61.5。MIT。 |
| EmbeddingGemma | [模型卡](https://huggingface.co/google/embeddinggemma-300m) · [论文](https://arxiv.org/html/2509.20354v1) | 308M（论文）/300M（卡表述）；2048 输入、768 维 MRL 可降维；MTEB 多语 61.15、英文 69.67、代码 68.76（768d）。Gemma Terms of Use；不支持 fp16 激活（已注明）。 |
| Snowflake Arctic Embed L/M v2.0 | [L 卡](https://huggingface.co/Snowflake/snowflake-arctic-embed-l-v2.0) · [M 卡](https://huggingface.co/Snowflake/snowflake-arctic-embed-m-v2.0) | L：568M（303M 非嵌入）、1024 维、8K、74 语，BEIR 55.6/MIRACL 55.8/CLEF 52.9/54.3（nDCG@10）；M：305M（113M 非嵌入）、768 维，BEIR 55.4/MIRACL 55.2/CLEF 51.7/53.9。Apache-2.0。 |
| Qwen3-Reranker-4B | [模型卡](https://huggingface.co/Qwen/Qwen3-Reranker-4B) | 4B、32K；技术报告 Table 4（与已上线 0.6B 同批次）：MTEB-R 69.76、CMTEB-R 75.94、MMTEB-R 72.74、MTEB-Code 81.20。Apache-2.0；候选集为 Qwen3-Embedding-0.6B top-100 召回。 |
| Nomic Embed Text v2 MoE | [模型卡](https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe) | 475M 总参数/305M 激活（8 expert top-2）、512 输入、768 维 Matryoshka；BEIR 52.86、MIRACL 65.80；另收录 MTEB 结果仓库两项记录（提交者身份未核实）。Apache-2.0；权重首传 2025-02-07。 |
| InternVL3.5-4B/8B | [4B 卡](https://huggingface.co/OpenGVLab/InternVL3_5-4B) · [8B 卡](https://huggingface.co/OpenGVLab/InternVL3_5-8B) · [报告](https://arxiv.org/abs/2508.18265) | 4.7B/8.5B（含视觉塔）；4B：MMLU 73.8、MMMU 66.6、MathVista 77.1、OCRBench 822；8B：78.2、73.4、78.4、840（论文表格，对应发布版；OCR 部分对比值来自 OpenCompass 榜单的脚注已注明）。Apache-2.0。 |
| MiniCPM-V 4.5 | [模型卡](https://huggingface.co/openbmb/MiniCPM-V-4_5) · [报告](https://arxiv.org/abs/2509.18154) | 8.7B（Qwen3-8B + SigLIP2-400M）；OpenCompass 77.0、MMMU 67.7、OCRBench 89.0、OmniDocBench(EN) 0.175；上下文按 config（40960）并注明依据限制；纯文本用途无官方基准，维持证据不足。Apache-2.0；2025-08-26 发布。 |
| SenseVoiceSmall | [模型卡](https://huggingface.co/FunAudioLLM/SenseVoiceSmall) · [论文](https://arxiv.org/abs/2407.04051v3) | 234M 非自回归、zh/yue/en/ja/ko；AISHELL-1 2.96、AISHELL-2 3.80、LibriSpeech clean 3.15、CommonVoice yue 7.09（论文 Table 6）。FunASR Model Open Source License v1.1 已链接并注明商用署名条件。 |
| GLM-ASR-Nano-2512 | [模型卡](https://huggingface.co/zai-org/GLM-ASR-Nano-2512) | 1.5B、17 语；官方基准图（GitHub resources/bench.png）转录：Aishell-1 1.81、Wenet Meeting 6.73、五项平均 4.10（图片读图经本站复核）；Open ASR 榜单 mean WER 7.03 与 LibriSpeech test-clean 2.15 为第三方记录（执行者身份未核实）。权重 MIT、代码 Apache-2.0。 |
| DeepSeek-OCR 2 | [模型卡](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2) | 3B MoE（约 500M 激活）；OmniDocBench v1.5 Overall 91.09、Text Edit 0.048、阅读顺序编辑距离 0.057、生产环境图片重复率 4.17%。Apache-2.0；权重 2026-01-27 首传。 |
| DeepSeek-R1-Distill-Qwen-1.5B/7B | [1.5B 卡](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B) · [7B 卡](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B) | 1.5B/7B（底模 Qwen2.5-Math 系列，蒸馏 800k R1 样本）；AIME 2024 28.9/55.5、MATH-500 83.9/92.8、GPQA Diamond 33.8/49.1、LiveCodeBench 16.9/37.6（模型卡表，温度 0.6/top-p 0.95/64 采样）；上下文官方未披露，保留 not-provided。MIT。 |
| BGE-Large-ZH-v1.5 | [模型卡](https://huggingface.co/BAAI/bge-large-zh-v1.5) · [C-Pack 论文](https://arxiv.org/abs/2309.07597) | 326M（C-Pack 论文口径；MTEB 元数据 1.34B 与结构不符未采用）、512、1024 维；C-MTEB 平均 64.53、检索 70.46、STS 56.25；另收录 MTEB 仓库 MIRACLHardNegatives 中文子集 0.37674（CC0，提交者身份未核实）。MIT；2023-09-12 发布。 |

本轮非商业许可（Jina 系列 CC BY-NC 4.0、Jina v4 的 Qwen Research License、SenseVoice/GLM 的区分处理）均在条目许可字段写明名称与条款链接；批次完成情况与后续批次见[计划型号分阶段上线方案](LAUNCH_PLAN.md)。
