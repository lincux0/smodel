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

2026-10-06多来源能力依据：原92条指标/分数/单位/配置/出处与权利说明经逐字段对比保留，新增Epoch AI OTIS两项和MTEB/HUME三项，共97条（77官方、20第三方）。8项Node测试通过，Astro检查0错误/警告/提示、生产构建28页。Playwright验证21个详情在1440/320px展开全部97条记录与条件时无横向溢出，三模型文本对比在1440/390/320px正常；320px禁用JavaScript并启用减少动效时Enter展开、Space收起以及来源条件展开通过，测试浏览器与预览进程已关闭。使用范围见评测来源规范；未完成Arena完整历史快照审查，也未进行本站模型推理或听音实测。下载包仍为0.1.0历史快照。

2026-10-02全目录能力依据更新：21型号、35用途摘要、92成绩（77官方、15第三方），6项测试与28页生产构建通过。1440/320px全部详情、三用途对比及无JavaScript代表页面通过Playwright检查；AA仅链接，未完成本站推理实测。GitHub源码随本轮更新；下载包仍为0.1.0首版历史快照，获取最新证据请使用GitHub源码。

2026-10-01：master已推送至指定GitHub仓库，Vercel正式部署READY并绑定 https://smodel.vercel.app。未登录浏览器检查目录21条、站点地图26个URL均200、robots正确、未知路由404；源码ZIP及SHA256摘要200，浏览器计算的摘要与下载摘要一致。最终复核将Qwen Coder 7B的默认32K与YaRN扩展128K分列，修正后3项测试与生产构建重新通过。后续修正通过CLI补发。

Git自动部署验收（2026-10-01）：提交477b031推送master后，Vercel部署dpl_2czxdpbaNoTnXrV1ddA94BmPjtHe记录source=git、target=production、githubCommitSha与该提交一致；部署READY并绑定smodel.vercel.app。线上目录21条，首页、贡献页、站点地图、robots和源码包均200。
