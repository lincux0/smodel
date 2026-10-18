# 0.1.0 发布说明

本版收录21个型号，提供目录筛选、同用途对比、来源与部署指引、贡献及许可说明。代码MIT，原创文字CC BY 4.0；第三方资料遵循各自许可。

## 发布前验证

2026-10-01：内容校验21模型/1指南，Node内置测试3项通过，Astro检查0错误/警告/提示，生产构建28页。Playwright检查站点地图26个URL均200，许可筛选、同用途对比、无效链接反馈正常。320/390/1440px代表页面无横向溢出。

本机Chromium，未限制CPU/网络，1440×900及390×900，各页面加载后观察1.4秒：首页、目录、Gemma 3 4B详情、贡献页LCP为88–244ms，CLS为0–0.0094。此为实验室样本，不代表真实移动设备、弱网或真实访客INP。全站没有标注本站推理已验证的路线，硬件需求未实测。

## 源码与部署

- [GitHub仓库](https://github.com/lincux0/smodel)
- [正式站点](https://smodel.vercel.app)
- [源码包](https://smodel.vercel.app/downloads/smodel-source-0.1.0.zip)

源码包为0.1.0发布前审查快照，仅包含src、docs、scripts、tests、public/favicon.svg、依赖锁文件、配置、README、贡献和许可文件。排除.git、.env、.vercel、缓存、node_modules、dist和下载包自身；不含模型权重。使用PowerShell Compress-Archive生成，并检查条目名单。SHA256摘要随包提供。

首版通过既有CLI连接正式发布。2026-10-01，维护者完成GitHub登录关联与仓库授权后，Vercel Git连接成功；API核实仓库lincux0/smodel、正式分支master。通过本次部署文档提交验证push触发，部署结果以Vercel记录为准；源码包仍为0.1.0首版快照。

## 上线验证

2026-10-17批次5–7上线：按[计划型号分阶段上线方案](LAUNCH_PLAN.md)上线38个型号（LFM2.5系列9、Qwen2.5/Qwen3.5/Qwen3-VL小档与Qwen3大检索7、Llama/Gemma/经典通用9、InternVL小档2、检索与重排6、语音/OCR 3、Granite 4.0 2），目录110型号、170用途摘要、425条成绩（387官方、38第三方）；新增139条成绩（136官方、3第三方）全部标注不可比，关键数值经抽查与来源核对。NVIDIA Llama-NV-Embed-Reasoning-3B 的权重许可经 LICENSE 原文核实为 CC BY-NC 4.0（HF 元数据标签与许可证不一致，已按原文记录并同步台账）；Jina nano 与 LFM 系列的 CC BY-NC/自定义许可条款已列明。8项Node测试通过，Astro检查0错误/警告/提示，生产构建117页；Playwright验证38个新详情页、目录筛选（向量检索23、视觉20、代码39等）与控制台无错误；测试浏览器与预览进程已关闭。台账已更新（已上线110、计划页29；已上线计数公式范围扩展至第205行）。源码下载包仍为0.1.0历史快照。

2026-10-17批次3–4上线：按[计划型号分阶段上线方案](LAUNCH_PLAN.md)上线21个型号：检索与重排（Jina Embeddings v5 Text Small/v3/v4、Jina Reranker v3/v3.5、LightOn mLateOn、Multilingual-E5-Large、EmbeddingGemma、Snowflake Arctic Embed L/M v2.0、Qwen3-Reranker-4B、Nomic Embed Text v2 MoE、BGE-Large-ZH-v1.5）、视觉理解（InternVL3.5-4B/8B、MiniCPM-V 4.5）、语音识别（SenseVoiceSmall、GLM-ASR-Nano-2512）、文字识别（DeepSeek-OCR 2）与推理蒸馏模型（DeepSeek-R1-Distill-Qwen-1.5B/7B）。目录72型号、112用途摘要、286条成绩（251官方、35第三方）；新增78条成绩（73官方、5第三方）全部标注不可比，关键数值经抽查与来源核对（含GLM-ASR官方基准图读图复核）。Jina Embeddings v4 许可经核实为 Qwen Research License（发布方更正），台账已同步；Jina 系列为非商业许可并已列明条款；SenseVoice/GLM 的权重与代码许可分别记录。8项Node测试通过，Astro检查0错误/警告/提示，生产构建79页；Playwright验证21个新详情页、目录筛选与对比流程、控制台无错误；测试浏览器与预览进程已关闭。台账已更新（已上线72、计划页67）。源码下载包仍为0.1.0历史快照。

2026-10-17批次1–2上线：按[计划型号分阶段上线方案](LAUNCH_PLAN.md)上线22个型号：视觉理解（Qwen3-VL-8B-Instruct、Gemma 4 E4B、Ministral 3 3B/8B Instruct、LFM2.5-VL-3B、Qwen3.5-9B/2B）、语音识别（Qwen3-ASR-0.6B/1.7B、Granite Speech 5.0 470M TurboCTC）、语音合成（Qwen3-TTS-12Hz-1.7B-Base、Fun-CosyVoice3-0.5B-2512）、文字识别（PaddleOCR-VL、PaddleOCR-VL-1.5）与通用文本/代码（Qwen3-4B-Instruct-2507、MiniCPM5 1B/2B、Granite 4.2 3B/8B、LFM2.5-1.2B-Instruct/2.6B、NVIDIA Nemotron Nano 9B v2）。目录51型号、86用途摘要、208条成绩（178官方、30第三方）；新增80条成绩全部为发布方自报并标注不可比，Qwen3-VL-8B视觉等6个用途维持证据不足，AA数据未导入；关键数值经抽查与官方页面核对。8项Node测试通过，Astro检查0错误/警告/提示，生产构建58页；Playwright验证22个新详情页均200且关键成绩存在、目录筛选（视觉11、代码23、语音识别9、语音合成4、文字识别4、向量检索4、结果重排2）、三模型视觉对比与搜索，控制台无错误；测试浏览器与预览进程已关闭。台账已更新（已上线51、计划页88）。源码下载包仍为0.1.0历史快照。

2026-10-17全目录数据复核：29型号逐条重查官方模型卡、仓库与论文，基础数据核对一致并刷新核实日期；新增6型号15条成绩（BGE-M3与Qwen3-Embedding-4B的MTEB Results/RTEB分项、BGE-reranker-v2-m3的ViDoRe v3.1分项、DeepSeek-OCR论文Table 3的OmniDocBench编辑距离、Whisper large-v3-turbo的Open ASR平均WER、Qwen3-VL-4B-Instruct技术报告Table 6纯文本成绩），目录合计128条成绩（98官方、30第三方）；更正Qwen3-Embedding-0.6B的PR提交者记录与Phi-4-mini许可链接。Qwen3-VL视觉成绩因官方图表仍为图片未转录，维持证据不足。8项Node测试通过，Astro检查0错误/警告/提示，生产构建36页；Playwright验证6个受影响详情页的关键数值与证据标签、目录29条及控制台无错误；测试页面与预览进程已关闭。台账状态日期更新为2026-10-17，成绩数量与证据覆盖同步。源码下载包仍为0.1.0历史快照。

2026-10-14审查修订：保留2026-10-10新增的8个型号。BGE-M3使用固定v5出处的MIRACL 71.5，其他已登记数值保留；清除没有来源依据的运行日期，纠正Qwen TTS主权重约0.915B与独立tokenizer的口径、Fox 7页分箱条件，更新vLLM/Transformers稳定安装路线和声音克隆限制。Qwen3-VL的视频输入在详情和对比中以中文显示，TTS参考音频列入输入；部署说明长参数名可在窄屏换行。目录仍29型号/46用途摘要/113成绩，未填充未核实图片分数，AA仅链接。台账状态日期更新为2026-10-14，已上线29/计划110，核对未改无关数据、公式、验证与表结构。8项Node测试通过，Astro检查0错误/警告/提示，构建36页；Playwright检查8个新详情在1440/390/320px的24组内容与溢出、视频对比、检索筛选4项、站点地图34个URL和无JavaScript键盘展开，控制台无错误。测试页面与预览进程已关闭；未下载权重或执行模型推理。源码下载包仍为0.1.0历史快照。

2026-10-10内容扩充：从上线台账计划页筛选8个高优先级型号上线（BGE-M3、Qwen3-Embedding-4B、BGE-reranker-v2-m3、DeepSeek-OCR、Whisper large-v3-turbo、Qwen3-VL-4B-Instruct、Qwen3-TTS-12Hz-0.6B-Base、Phi-4-mini-instruct），目录为29模型/1指南、113条成绩（93官方、20第三方）。8项Node测试通过，Astro检查0错误/警告/提示，生产构建36页。Playwright验证8个新详情页均200且标题正确、目录筛选（向量检索4/29、文字识别2/29）、三模型同用途对比、卡片元数据与站点地图34个URL，无控制台错误；测试浏览器与预览进程已关闭。新批次16条成绩全部为发布方自报或论文报告，未建立可比组；BGE-reranker-v2-m3、Whisper large-v3-turbo、Qwen3-VL-4B-Instruct的用途与Phi-4-mini-instruct的代码用途保留证据不足。台账已同步（计划候选118→110）。下载包仍为0.1.0历史快照，获取最新数据请使用GitHub源码。

2026-10-06能力卡片布局调整：单卡及奇数末卡跨满整行，宽卡关键成绩横向排列；状态、来源与独立性标签、来源统计移至展开内容，折叠摘要保留指标、分数、数据集和语言。8项测试与28页生产构建通过，Astro检查0错误/警告/提示；Playwright检查1/2/3/4用途代表型号在1440/768/390/320px的宽度、标签位置和展开无溢出，对比及无JavaScript键盘展开/收起通过。原97条成绩不变，测试页面与预览进程已关闭；Graphify仅AST更新，仍为229节点/309边并保留解析限制。

2026-10-06多来源能力依据：原92条指标/分数/单位/配置/出处与权利说明经逐字段对比保留，新增Epoch AI OTIS两项和MTEB/HUME三项，共97条（77官方、20第三方）。8项Node测试通过，Astro检查0错误/警告/提示、生产构建28页。Playwright验证21个详情在1440/320px展开全部97条记录与条件时无横向溢出，三模型文本对比在1440/390/320px正常；320px禁用JavaScript并启用减少动效时Enter展开、Space收起以及来源条件展开通过，测试浏览器与预览进程已关闭。使用范围见评测来源规范；未完成Arena完整历史快照审查，也未进行本站模型推理或听音实测。下载包仍为0.1.0历史快照。

2026-10-02全目录能力依据更新：21型号、35用途摘要、92成绩（77官方、15第三方），6项测试与28页生产构建通过。1440/320px全部详情、三用途对比及无JavaScript代表页面通过Playwright检查；AA仅链接，未完成本站推理实测。GitHub源码随本轮更新；下载包仍为0.1.0首版历史快照，获取最新证据请使用GitHub源码。

2026-10-01：master已推送至指定GitHub仓库，Vercel正式部署READY并绑定 https://smodel.vercel.app。未登录浏览器检查目录21条、站点地图26个URL均200、robots正确、未知路由404；源码ZIP及SHA256摘要200，浏览器计算的摘要与下载摘要一致。最终复核将Qwen Coder 7B的默认32K与YaRN扩展128K分列，修正后3项测试与生产构建重新通过。后续修正通过CLI补发。

Git自动部署验收（2026-10-01）：提交477b031推送master后，Vercel部署dpl_2czxdpbaNoTnXrV1ddA94BmPjtHe记录source=git、target=production、githubCommitSha与该提交一致；部署READY并绑定smodel.vercel.app。线上目录21条，首页、贡献页、站点地图、robots和源码包均200。
