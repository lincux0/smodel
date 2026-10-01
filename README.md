# 小模型图鉴

按用途了解小模型的特点、能力依据与官方部署方式。阶段一至三已完成：统一视觉与圆角、目录搜索和组合筛选、同用途模型对比、部署指南与来源。首批内容扩充和公开发布按[开发方案](docs/DEVELOPMENT_PLAN.md)继续推进。

## 本地运行

使用 Node.js 24.x 和 npm。

```sh
npm ci
npm run dev
```

打开终端输出的本地地址。正式条目位于 `src/data/models/`，内容维护方式见[内容维护指南](docs/CONTENT_GUIDE.md)。

## 校验与构建

```sh
npm run validate:content
npm test
npm run build
npm run preview
```

`build` 包含数据校验、Astro / TypeScript 检查和静态页面生成，输出目录为 `dist/`。只有 `npm ci` 需要下载依赖，内容校验和构建读取本地已审查数据。

当前模型部署信息引用官方资料，尚未进行本站模型推理验证；官方评测数字不代表本站实测。

## 文档

- [分阶段开发方案](docs/DEVELOPMENT_PLAN.md)
- [内容维护与模板](docs/CONTENT_GUIDE.md)
- [项目架构与部署](docs/ARCHITECTURE.md)
- [视觉与动效规范](docs/DESIGN_SYSTEM.md)

正式站点：[小模型图鉴](https://smodel.vercel.app)。Vercel Hobby 项目 `zav5/smodel` 已连接，正式与预览部署均已验证。

阶段二[历史视觉预览](https://smodel-ky1tbwmab-zav5.vercel.app)已通过维护者审阅。正式站点仍为阶段一版本。

最新[阶段三功能预览](https://smodel-eyqp4h7t7-zav5.vercel.app)包含已确认视觉方向、统一圆角与完整选型功能（需登录有项目权限的 Vercel 账号）。正式发布与首批内容扩充按阶段四推进。

当前机器已保存 Vercel CLI 登录凭据；在凭据有效期内，运行 `npx vercel --target preview` 创建预览，运行 `npx vercel --prod` 发布正式站点。部署配置和凭据说明见[项目架构与部署](docs/ARCHITECTURE.md)。当前未配置 Git 自动部署。
