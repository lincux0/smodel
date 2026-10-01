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

Vercel Git连接尝试因账号缺少GitHub Login Connection失败；本次通过既有CLI连接正式发布。需要在Vercel账号设置关联GitHub登录后重试Git连接，才能将后续push自动发布。源码推送和部署分别核实。

## 上线验证

待本次正式部署完成后记录；上述本地检查不代替线上结果。
