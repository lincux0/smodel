# 模型来源与字段口径

核对日期：2026-10-01。当前目录共21个型号：阶段一原有8个和阶段四新增13个。模型身份、参数、上下文、权重许可和部署入口优先取模型维护方的模型卡、技术报告或上游仓库。此处记录的是来源与字段核对，不代表本站下载或运行了模型。`evaluations` 留空表示本目录未登记可按统一条件复核的成绩；硬件字段均标为本站未实测。未在所列来源中得到可靠数值的字段不作推算。

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
