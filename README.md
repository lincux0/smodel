# 小模型图鉴

小模型图鉴按用途整理开源及开放权重模型，提供能力依据、许可说明、局限和部署入口。当前仓库目录包含 21 个经来源核对的型号，覆盖文本与代码、图像理解、语音、向量检索、重排、OCR 和语音合成。目录是人工维护的代表性集合，不宣称穷尽所有模型或提供统一能力排名。

公开网站：[小模型图鉴](https://smodel.vercel.app)。当前仓库中的 21 条数据属于阶段四发布内容，正式站点版本以部署更新为准。

模型卡中的官方评测仅保留其来源和条件；当前样本没有本站推理实测。模型权重不存放在本仓库。到模型详情页选择“获取权重”，会跳转至对应的官方模型页或发布仓库；下载可能需要接受各自的许可条款。

## 使用

本地开发需要 Node.js 24.x 和 npm：

```sh
npm ci
npm run dev
```

运行 `npm run validate:content` 校验条目，`npm test` 运行测试，`npm run build` 检查并生成静态页面；生成目录为 `dist/`。项目按静态内容部署在 Vercel Hobby。当前阶段四数据已进入仓库，正式站点发布状态以 [项目开发方案](docs/DEVELOPMENT_PLAN.md) 和线上页面为准。

## 获取源码与贡献

GitHub 仓库：[lincux0/smodel](https://github.com/lincux0/smodel)。

```sh
git clone https://github.com/lincux0/smodel.git
```

可通过仓库提交 Issue 或 Pull Request；提交前请阅读[贡献指南](CONTRIBUTING.md)、[内容维护指南](docs/CONTENT_GUIDE.md)和[来源记录](docs/SOURCES.md)。模型详情中的“获取权重”链接会打开官方来源；仓库仅保存目录数据和说明，不包含模型权重。也可从[网站贡献页](https://smodel.vercel.app/contribute/)下载0.1.0源码包及SHA256摘要。

## 许可

- 网站程序与界面代码：MIT，见 [LICENSE](LICENSE)。
- 维护者和贡献者撰写的原创模型整理、指南和文章：CC BY 4.0，见 [LICENSE-CONTENT.md](LICENSE-CONTENT.md)。
- 模型权重、上游代码和第三方材料：遵循各自来源的许可；具体权重许可在模型详情页列出。

## 文档

- [分阶段开发方案](docs/DEVELOPMENT_PLAN.md)
- [内容维护指南](docs/CONTENT_GUIDE.md)
- [模型来源与字段口径](docs/SOURCES.md)
- [项目架构与部署](docs/ARCHITECTURE.md)
- [视觉与动效规范](docs/DESIGN_SYSTEM.md)
