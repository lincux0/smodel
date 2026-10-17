# 专项模型评测来源覆盖

核对日期：2026-10-17。本表追踪 Embedding、Reranker、ASR、TTS 与 OCR 模型的准确权重匹配、可用结果和数据使用依据。评测工具代码、结果数据、基准数据集、模型权重分别处理；某仓库的代码许可不自动覆盖它托管或引用的结果及数据集。

| 模型 | 来源及准确型号覆盖 | 本站处理 | 使用依据与限制 |
| --- | --- | --- | --- |
| all-MiniLM-L6-v2 | MTEB Results 的 RTEB PR #264 有准确型号、模型 revision（8b3219a9）与三项检索任务结果 | 保留三项记录并补记 revision；提交者 fzoll 的评测身份关系未核实，`independence: unknown`，摘要状态为独立性待确认 | [结果仓库 CC0](https://github.com/embeddings-benchmark/results/blob/main/LICENSE)；只引用分数与任务事实，不复制基准样本 |
| Qwen3-Embedding-0.6B | Qwen 卡片含官方多语言汇总；MTEB Results PR #281 含准确权重 revision 的 HUME 任务级结果，提交者为 Samoed（2026-10-17 更正早前 afalf 归属） | 保留原三项；新增 Arxiv clustering、Core17 reranking、SICK-R 三项原始指标。MTEB PR 已合并，但执行者身份未披露，标记独立性未知；Core17 是 embedding 向量参与候选排序的任务，不是 Qwen3-Reranker 成绩 | [结果仓库 CC0](https://github.com/embeddings-benchmark/results/blob/main/LICENSE)；新分项链接精确 JSON；版本为 MTEB 1.34.7，测试集与模型 revision 可追溯，其他未报告条件保留未知 |
| Qwen3-Reranker-0.6B | 已有 Qwen 技术报告的 MTEB-R、CMTEB-R、MMTEB-R 汇总；未发现可确认属于此精确型号的 MTEB Results 独立结果文件 | 保留三项官方成绩，不新增第三方成绩 | 论文报告是模型发布方自测；评测仓库存在其他 embedding 结果不表示 reranker 已被独立测试。作者报告的候选集由 Qwen3-Embedding-0.6B top-100 召回 |
| Whisper tiny、base、small、medium（均为多语言版） | Open ASR Leaderboard 仓库示例主要列 `tiny.en`、`base.en`、`small.en`、`medium.en`，不匹配本站多语言权重；2026-10-17 复核 english_short_latest.csv（65 行）亦无该四尺寸行 | 保留原论文精确尺寸的官方结果；未导入榜单成绩 | [榜单代码 Apache-2.0](https://github.com/huggingface/open_asr_leaderboard/blob/main/LICENSE) 仅说明代码许可；没有由此确认公开结果文件或各评测语料许可。WER/CER、硬件速度及语言配置不可跨变体移用 |
| PP-OCRv5_mobile_rec | 官方模型卡结果对应准确文字行识别组件；OCRBench 面向多模态 OCR 理解，OmniDocBench 面向文档解析流水线 | 保留官方四项文字行成绩；没有移植整页、问答或完整流水线分数 | [PaddleOCR 代码 Apache-2.0](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE) 不改变官方模型卡/测试数据许可；仅对模型卡少量事实引用 |
| Kokoro-82M | TTS Arena 页面未确认该模型的可追溯榜单记录或结果再使用许可；SeedTTS-Eval 的零样本声音克隆 SIM 协议不匹配预置音色 Kokoro | 保留“证据不足”；不新增数值，AA 仅提供链接 | Arena 可作为外部入口；未确认结果数据许可前不复制成绩。SeedTTS 使用的 Common Voice、DiDiSpeech 等数据各有各的许可，不能凭评测脚本许可转载结果/数据。UTMOS 是自动预测器，不能代替真人 MOS |
| BGE-M3 | [论文v5](https://arxiv.org/html/2402.03216v5) Table 1–3 分别含 M3.All 在 MIRACL、MKQA、MLDR 的汇总值及逐语言结果；MTEB Results PR #264 另有 revision 5617a9f6 的 RTEB 三项分项（ChatDoctorRetrieval、DS1000Retrieval、MBPPRetrieval） | 保留三项论文成绩并标为 `first-party`；新增三项 RTEB 记录（fzoll 提交、独立性未知），摘要状态改为独立性待确认；未建立可比组 | 指标口径按原表标题记录（MIRACL/MLDR 为 nDCG@10、MKQA 为 Recall@100）。成绩对应稠密、稀疏与多向量融合表示，不是稠密单独成绩；BAAI 于 2024-07-01 公告修正 MIRACL，实际评测运行日期未披露；MLDR 由论文作者构建且其训练集参与训练增强 |
| Qwen3-Embedding-4B | 官方模型卡含 MTEB 多语言、英文 v2 与 C-MTEB 三张汇总表，按型号逐行列出；MTEB Results PR #214 有 revision 636cd9bf 的三项分项（CQADupstackRetrieval、STS12、ATEC） | 保留三项任务均值并标为 `first-party`；新增三项社区提交记录（afalf 提交、独立性未知），摘要状态改为独立性待确认 | 模型卡仅注明多语言表对照模型的 MTEB 榜单成绩取自 2025-05-24；这不是 Qwen3-Embedding-4B 的评测日期。模型自身评测运行日期未披露，英文与中文表也未注明；未披露模型 revision 与任务级推理配置，汇总分不参与跨型号排序 |
| BGE-reranker-v2-m3 | 官方模型卡评测仍以图片形式给出（BEIR、CMTEB-retrieval、miracl），无可复制数值表；MTEB Results PR #768（ViDoRe v3.1，beta）有 english 子集三项重排 nDCG@10 | 新增 ComputerScience 0.6929、FinanceEn 0.49652、Industrial 0.48268 三项记录（gabrielspmoreira 参与提交、独立性未知），摘要状态改为独立性待确认；官方图片成绩继续不引用 | 未找到许可明确且确认为独立方的同型号同条件结果；重排效果依赖召回候选集、切分与阈值标定，官方示例的 512 截断也影响长段落 |
| Whisper large-v3-turbo（多语言） | [Open ASR Leaderboard](https://huggingface.co/datasets/hf-audio/open-asr-leaderboard-results) english_short_latest.csv 含该多语言权重行（英文短音频平均 WER 8.39%） | 新增一条记录（`independence: unknown`，评测者与 OpenAI 关系未核实），摘要状态改为独立性待确认；不借用 large-v3 论文数值 | 该型号由 large-v3 剪减解码层微调，能力不等同 large-v3；30 秒为音频窗口，不是 token 上下文；该行未披露模型 revision、解码配置与硬件 |
| Qwen3-TTS-12Hz-0.6B-Base | [官方仓库](https://github.com/QwenLM/Qwen3-TTS)基准表含 Seed-TTS 零样本中英文 WER，按型号逐行列出 | 保留两项官方成绩并标为 `first-party` | 表前统一说明精度、输出长度上限与语言设置；参考音频来源与说话人划分未披露。WER 只表示内容一致性，不代表音色相似度或听感自然度 |
| DeepSeek-OCR | [论文](https://arxiv.org/abs/2510.18234) Table 2 含 Fox 基准按文本 token 区间的压缩解码精度；Table 3（HTML 版为可转录文本表）含 OmniDocBench 编辑距离 | 保留600–700 GT tokens分箱7页的一项论文成绩；新增 Gundam 档 English/Chinese overall 0.127/0.181 与 Small 档 English 0.221 三项并标为 `first-party` | 98.5%只对应7页分箱而非全部Fox样本；该指标是特定压缩比下的解码精度，不是普通OCR字符准确率或通用榜单分数；论文说明输出格式无法完全匹配 Fox 评测脚本，实际可能略高于测试值；OmniDocBench 为编辑距离口径，版本、revision 与推理配置未披露 |
| Qwen3-TTS-12Hz-1.7B-Base | [HF 卡](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-Base) 与[官方仓库](https://github.com/QwenLM/Qwen3-TTS)基准表含 Seed-TTS 中英文 WER 与多语言表 12Hz-1.7B-Base 中文 WER/SIM | 保留四项官方成绩并标为 `first-party`；独立仓库确认属于 1.7B-Base 档（同系列 CustomVoice/VoiceDesign 未建条目） | WER 只表示内容一致性；多语言表列头已逐列核对；参考音频来源与说话人划分未披露 |
| Fun-CosyVoice3-0.5B-2512 | [权重仓库](https://huggingface.co/FunAudioLLM/Fun-CosyVoice3-0.5B-2512)可供核对；权重许可经 HF 元数据确证为 Apache-2.0，仓库无独立 LICENSE 文件（已注明） | 保留 Seed-TTS 测试载体 Base 行四项（test-zh CER 1.21、SS 78.0、test-en WER 2.24、test-hard CER 6.71）并标为 `first-party` | RL 行属另一权重未混用；论文的规模/语言描述未套作 0.5B 权重结论；评测运行日未披露 |
| Qwen3-ASR-0.6B / 1.7B | 两型号[模型卡](https://huggingface.co/Qwen/Qwen3-ASR-0.6B)为同一系列级评测表逐列含 0.6B/1.7B；覆盖 30 语言与 22 中文方言（逐项计数核实） | 各保留四项官方成绩（GigaSpeech、AISHELL-2、KeSpeech、Fleurs 十二语平均）并标为 `first-party` | 官方说明 greedy 解码、max_new_tokens=1024；内部数据集、歌声与带 BGM 表未收录；LLM token 上下文未披露 |
| Granite Speech 5.0 470M TurboCTC | [模型卡](https://huggingface.co/ibm-granite/granite-speech-5.0-470m-turboctc)与[官方文章](https://huggingface.co/blog/ibm-granite/granite-speech-5-0-470m-turboctc)提供聚合平均 WER 与 RTFx | 保留两项官方成绩（平均 WER 5.00%、RTFx 超 12,600 按下限照录）并标为 `first-party`；NC 变体（CC-BY-NC-SA-4.0）另行存在、未建条目 | 分测试集数值为图片未转录；RTFx 为 1×H200 测量，不代表用户设备；英语专用模型 |
| PaddleOCR-VL | [技术报告](https://arxiv.org/html/2510.14528v1)正文可确证 OmniDocBench v1.5 总分与分项 | 保留三项官方成绩（总分 92.56、Text-Edit 0.035、Formula-CDM 91.43）并标为 `first-party` | 模型卡成绩表为图片未转录；1.5 报告将其总分写作 92.86 的报告间差异已注明；完整页级流程需配套版面分析组件 |
| PaddleOCR-VL-1.5 | [模型卡](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.5)与[报告](https://arxiv.org/abs/2601.21957)可确证 OmniDocBench v1.5 与 Real5-OmniDocBench 数值 | 保留四项官方成绩（94.5%、Real5 总体 92.05%、Skewing 91.66%、Formula-CDM 94.21）并标为 `first-party` | 语言扩展 111 种取自 GitHub 发布说明；印章识别/文本检测具体数值为图片未转录；与首版共享 0.9B 规模 |
| Jina Embeddings v5 Text Small | [模型卡](https://huggingface.co/jinaai/jina-embeddings-v5-text-small)自报 MTEB English v2 71.7、MMTEB 67.7 | 保留两项并标为 `first-party` | CC BY-NC 4.0 非商业许可，商用需另行授权；HF 张量和与官方 677M 口径差异已注明 |
| Jina Embeddings v3 | [论文](https://arxiv.org/html/2409.10173v3) Table 4 的 MTEB 英语 65.52、多语 64.44 | 保留两项并标为 `first-party` | 官方 570M（台账原 0.572B 未获官方支持）；CC BY-NC 4.0 |
| Jina Embeddings v4 | [模型卡](https://huggingface.co/jinaai/jina-embeddings-v4) Table 2 的 MMTEB/MTEB(eng,v2)/ViDoRe/JVDR | 保留四项（单向量口径）并标为 `first-party`；多向量结果写入 settings 未单列 | **Qwen Research License**（发布方更正原 CC BY-NC 声明，衍生自 Qwen2.5-VL-3B）；台账已同步 |
| Jina Reranker v3 | [模型卡](https://huggingface.co/jinaai/jina-reranker-v3)与[论文](https://arxiv.org/html/2509.25085v4) | 保留四项（top-100 协议）；BEIR 61.94 与论文 61.85 的差异已双记 | CC BY-NC 4.0；listwise 输入（最多 64 候选）|
| Jina Reranker v3.5 | [模型卡](https://huggingface.co/jinaai/jina-reranker-v3.5)对比表四项 | 保留四项；Struct-IR 为受控池协议、RTEB 不含 MIRACL 均值（表注已录） | CC BY-NC 4.0；131K 上下文 |
| LightOn mLateOn | [模型卡](https://huggingface.co/lightonai/mLateOn) Headline Results 四项 | 保留四项（目标语言子集口径，全语言值写入 settings） | Apache-2.0；多向量存储成本不可按单向量估算 |
| Multilingual-E5-Large | [模型卡](https://huggingface.co/intfloat/multilingual-e5-large)与[论文](https://arxiv.org/html/2402.05672v1) | 保留三项（Mr. TyDi 70.5、MIRACL dev 66.5、MTEB 英文 61.5） | MIT；官方未单列参数量（0.56B 为公开部署口径，notes 已说明）；query/passage 前缀为使用前提 |
| EmbeddingGemma | [模型卡](https://huggingface.co/google/embeddinggemma-300m)与[论文](https://arxiv.org/html/2509.20354v1) Table 1 | 保留三项（768d：多语 61.15、英文 69.67、代码 68.76） | Gemma Terms of Use；不支持 fp16 激活（已注明）；512/256/128 维结果未单列 |
| Snowflake Arctic Embed L v2.0 | [模型卡](https://huggingface.co/Snowflake/snowflake-arctic-embed-l-v2.0)质量基准表 | 保留四项（BEIR 55.6/MIRACL 55.8/CLEF 52.9/54.3，nDCG@10） | Apache-2.0 可商用；568M 中 303M 非嵌入 |
| Snowflake Arctic Embed M v2.0 | [模型卡](https://huggingface.co/Snowflake/snowflake-arctic-embed-m-v2.0)同表 | 保留四项（BEIR 55.4/MIRACL 55.2/CLEF 51.7/53.9） | Apache-2.0；305M 中 113M 非嵌入 |
| Qwen3-Reranker-4B | [模型卡](https://huggingface.co/Qwen/Qwen3-Reranker-4B)与技术报告 Table 4 | 保留四项（MTEB-R 69.76、CMTEB-R 75.94、MMTEB-R 72.74、MTEB-Code 81.20） | 与已上线 0.6B 同一报告批次（runId 一致）；候选集为 Qwen3-Embedding-0.6B top-100 召回 |
| Nomic Embed Text v2 MoE | [模型卡](https://huggingface.co/nomic-ai/nomic-embed-text-v2-moe)两项 + MTEB 结果仓库两项（提交者身份未核实） | 官方两项标 `first-party`；MTEB 两项 `independence: unknown`，摘要为独立性待确认 | Apache-2.0；总参数 475M/激活 305M 分别记录；权重首传 2025-02-07 |
| SenseVoiceSmall | [论文](https://arxiv.org/abs/2407.04051v3) Table 6 四项 | 保留四项并标为 `first-party`（AISHELL-1 2.96、AISHELL-2 3.80、LibriSpeech clean 3.15、CommonVoice yue 7.09） | [FunASR Model Open Source License v1.1](https://github.com/modelscope/FunASR/blob/main/MODEL_LICENSE)；官方澄清商用允许、需注明出处与模型名；代码 MIT 另记 |
| GLM-ASR-Nano-2512 | 官方基准图（GitHub resources/bench.png）与 Open ASR 榜单文件 | 官方图四项转录（Aishell-1 1.81、Wenet 6.73 等，图片读图经复核）；榜单 mean WER 7.03 与 LibriSpeech 2.15 为 `unknown` 第三方记录 | 权重 MIT、代码 Apache-2.0 分记；权重 2025-12-09 上传；RTFx 未注明机器未收录 |
| DeepSeek-OCR 2 | [模型卡](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2)与报告 | 保留四项（OmniDocBench v1.5 Overall 91.09、Text Edit 0.048、阅读顺序 0.057、图片重复率 4.17%） | Apache-2.0；编辑距离口径；权重 2026-01-27 首传；文本上下文未披露 |
| BGE-Large-ZH-v1.5 | [模型卡](https://huggingface.co/BAAI/bge-large-zh-v1.5) C-MTEB 三项 + MTEB 结果仓库一项（CC0） | 官方三项标 `first-party`；MTEB 记录 `independence: unknown`，摘要为独立性待确认 | MIT；326M 按 C-Pack 论文口径（MTEB 元数据 1.34B 未采用）；2023-09-12 发布 |

## 新增的 MTEB 分项

以下成绩来自已合并的 [MTEB Results PR #281](https://github.com/embeddings-benchmark/results/pull/281)，准确模型 ID 为 `Qwen/Qwen3-Embedding-0.6B`，结果目录对应权重 revision `b22da495047858cce924d27d76261e96be6febc0`。结果 JSON 明示 MTEB 1.34.7、数据集 revision 与 test split；评测执行者、运行时及提示细节没有披露。`HUMECore17InstructionReranking` 是 embedding 向量参与候选排序的任务，结果属于 Qwen3-Embedding，不是 Qwen3-Reranker。分数只作为该公开结果记录，不称本站复测或独立复测，也不据此改变交叉佐证状态。

| 任务 | 指标 | 分数 | 语言 | 结果记录 |
| --- | --- | ---: | --- | --- |
| HUMEArxivClusteringP2P | V-measure | 0.69058 | 英语 | [MTEB JSON](https://github.com/embeddings-benchmark/results/blob/main/results/Qwen__Qwen3-Embedding-0.6B/b22da495047858cce924d27d76261e96be6febc0/HUMEArxivClusteringP2P.json) |
| HUMECore17InstructionReranking | MAP | 0.969722 | 英语 | [MTEB JSON](https://github.com/embeddings-benchmark/results/blob/main/results/Qwen__Qwen3-Embedding-0.6B/b22da495047858cce924d27d76261e96be6febc0/HUMECore17InstructionReranking.json) |
| HUMESICK-R | Spearman 相关系数 | 0.932601 | 英语 | [MTEB JSON](https://github.com/embeddings-benchmark/results/blob/main/results/Qwen__Qwen3-Embedding-0.6B/b22da495047858cce924d27d76261e96be6febc0/HUMESICK-R.json) |

## 来源入口

- [MTEB Results](https://github.com/embeddings-benchmark/results)：结果数据按 CC0 发布；模型结果仍需准确映射至具体权重与评测执行者。基准数据本身不因此改为 CC0。
- [Open ASR Leaderboard](https://github.com/huggingface/open_asr_leaderboard)：代码按 Apache-2.0 发布；条目需确认模型 ID、结果文件和对应语料许可。其 H200 运行时间不能当作本站用户设备性能。
- [TTS Arena 2](https://tts-agi-tts-arena-v2.hf.space/leaderboard)：保留链接；模型匹配、结果数据许可及快照条件待核实。
- [SeedTTS-Eval](https://github.com/BytedanceSpeech/seed-tts-eval)：仅作适用协议参考。其 WER 使用外部 ASR，SIM 需参考说话人音频；SIM 不适用于没有对应参考音色克隆任务的 Kokoro。
- [OmniDocBench](https://github.com/OpenDataLab/OmniDocBench) 与 [OCRBench](https://github.com/Yuliang-Liu/MultimodalOCR)：前者评价文档解析，后者评价多模态 OCR 理解；都不能直接替代 PP-OCRv5_mobile_rec 的文字行识别结果。
- [Artificial Analysis](https://artificialanalysis.ai/)：依现有规则仅链接，不导入成绩、排名、截图或衍生分数。

没有准确可复核的型号/任务匹配，或结果许可无法确认时，维持证据缺口；后续获取许可或找到符合条件的公开记录后再更新本表。
