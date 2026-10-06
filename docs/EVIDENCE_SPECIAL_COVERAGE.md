# 专项模型评测来源覆盖

核对日期：2026-10-06。本表追踪 Embedding、Reranker、ASR、TTS 与 OCR 模型的准确权重匹配、可用结果和数据使用依据。评测工具代码、结果数据、基准数据集、模型权重分别处理；某仓库的代码许可不自动覆盖它托管或引用的结果及数据集。

| 模型 | 来源及准确型号覆盖 | 本站处理 | 使用依据与限制 |
| --- | --- | --- | --- |
| all-MiniLM-L6-v2 | MTEB Results 的 RTEB PR #264 有准确型号与三项检索任务结果 | 保留三项记录；提交者 fzoll 的评测身份关系未核实，`independence: unknown` | [结果仓库 CC0](https://github.com/embeddings-benchmark/results/blob/main/LICENSE)；只引用分数与任务事实，不复制基准样本 |
| Qwen3-Embedding-0.6B | Qwen 卡片含官方多语言汇总；MTEB Results PR #281 含准确权重 revision 的 HUME 任务级结果 | 保留原三项；新增 Arxiv clustering、Core17 reranking、SICK-R 三项原始指标。MTEB PR 已合并，但执行者身份未披露，标记独立性未知；Core17 是 embedding 向量参与候选排序的任务，不是 Qwen3-Reranker 成绩 | [结果仓库 CC0](https://github.com/embeddings-benchmark/results/blob/main/LICENSE)；新分项链接精确 JSON；版本为 MTEB 1.34.7，测试集与模型 revision 可追溯，其他未报告条件保留未知 |
| Qwen3-Reranker-0.6B | 已有 Qwen 技术报告的 MTEB-R、CMTEB-R、MMTEB-R 汇总；未发现可确认属于此精确型号的 MTEB Results 独立结果文件 | 保留三项官方成绩，不新增第三方成绩 | 论文报告是模型发布方自测；评测仓库存在其他 embedding 结果不表示 reranker 已被独立测试。作者报告的候选集由 Qwen3-Embedding-0.6B top-100 召回 |
| Whisper tiny、base、small、medium（均为多语言版） | Open ASR Leaderboard 仓库示例主要列 `tiny.en`、`base.en`、`small.en`、`medium.en`，不匹配本站多语言权重 | 保留原论文精确尺寸的官方结果；未导入榜单成绩 | [榜单代码 Apache-2.0](https://github.com/huggingface/open_asr_leaderboard/blob/main/LICENSE) 仅说明代码许可；没有由此确认公开结果文件或各评测语料许可。WER/CER、硬件速度及语言配置不可跨变体移用 |
| PP-OCRv5_mobile_rec | 官方模型卡结果对应准确文字行识别组件；OCRBench 面向多模态 OCR 理解，OmniDocBench 面向文档解析流水线 | 保留官方四项文字行成绩；没有移植整页、问答或完整流水线分数 | [PaddleOCR 代码 Apache-2.0](https://github.com/PaddlePaddle/PaddleOCR/blob/main/LICENSE) 不改变官方模型卡/测试数据许可；仅对模型卡少量事实引用 |
| Kokoro-82M | TTS Arena 页面未确认该模型的可追溯榜单记录或结果再使用许可；SeedTTS-Eval 的零样本声音克隆 SIM 协议不匹配预置音色 Kokoro | 保留“证据不足”；不新增数值，AA 仅提供链接 | Arena 可作为外部入口；未确认结果数据许可前不复制成绩。SeedTTS 使用的 Common Voice、DiDiSpeech 等数据各有各的许可，不能凭评测脚本许可转载结果/数据。UTMOS 是自动预测器，不能代替真人 MOS |

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
