# 贡献指南

先阅读 [内容维护指南](docs/CONTENT_GUIDE.md)、[来源复核记录](docs/SOURCES.md)和[许可说明](LICENSE-CONTENT.md)。

贡献一个具体型号或修正已有条目时，请提供官方模型卡、权重许可、参数口径和部署来源；未知值保留为空，不凭型号名称推测能力、内存或许可。提交模型推理实测时，附上设备、系统、权重版本、运行时、量化、输入、命令、日期与可复核结果；只有完成审核的路线才能标注本站已验证。

模型位于 `src/data/models/<id>.json`，指南位于 `src/data/guides/`。稳定 ID 更名会破坏分享链接，改名需说明迁移方式。提交前运行：

```sh
npm ci
npm run validate:content
npm test
npm run build
```

页面改动还需检查桌面、窄屏、键盘和减少动效模式。不要提交凭据、环境文件、权重或未经授权的第三方大段内容。贡献以 MIT（程序）及 CC BY 4.0（原创内容）提供，详情见对应许可。

通过 [GitHub 仓库](https://github.com/lincux0/smodel)提交 Issue 或 Pull Request；源码包也可在本地修改并提供补丁。问题报告应包含条目 ID、出错字段、可靠来源和预期修正，界面问题附复现步骤及浏览器/视口条件。
