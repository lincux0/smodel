# 项目架构与部署

## 当前实现范围

阶段一提供 Astro 静态网站、React 集成、8 个真实模型样本、1 篇公共部署指南、内容校验及基本路由。阶段二建立银灰、石墨与深青色视觉系统及统一圆角。阶段三完成搜索、组合筛选、可分享状态、同用途对比、部署步骤与复制反馈。阶段四扩充至21个模型，增加贡献与许可页、规范URL、分享元信息、robots和站点地图；视觉规则见[设计规范](DESIGN_SYSTEM.md)。

## 数据流

```text
src/data/models/*.json
  → src/lib/catalog.ts（结构、身份、关联校验）
  → src/content.config.ts（Astro 内容集合）
  → src/pages/models/[id].astro
  → dist/models/<id>/index.html

src/data/guides/*.md
  → Astro glob loader（Markdown 元数据校验）
  → src/pages/guides/[id].astro
  → dist/guides/<id>/index.html
```

模型集合使用函数 loader，开发或构建加载时都会调用共享校验，直接执行 `astro build` 也不能绕过模型校验。模型 ID 必须与文件名一致，部署方案的 `guideId` 必须存在，同一模型的部署 ID 不可重复。JSON schema 使用严格字段校验，帮助发现拼写错误。

`npm run validate:content` 检查 JSON 结构、ID 和指南引用；`npm run check` 和构建进一步检查 Markdown 元数据、Astro 页面和 TypeScript。

内容使用转义后的文本和 Markdown 渲染。来源字段只接受 HTTPS 链接；模型简介与特征不作为原始 HTML 插入页面。

## 目录职责

| 路径 | 职责 |
| --- | --- |
| `src/lib/catalog.ts` | 唯一模型 schema、目录读取、重复身份与指南关联校验 |
| `src/content.config.ts` | 模型及公共指南的内容集合 |
| `src/data/models/` | 每模型一个 JSON，保存元数据、部署与评测 |
| `src/data/guides/` | 公共部署指南 Markdown |
| `src/layouts/Base.astro` | 文档结构、导航、基础元信息和页脚 |
| `src/components/ModelList.astro` | 首页与目录复用的模型列表 |
| `src/lib/catalog-query.ts` | 目录 URL 状态白名单、默认值与参数分段 |
| `src/lib/compare.ts` | 对比型号数量、身份和共同用途校验 |
| `src/pages/` | 静态路由与内容展示 |
| `src/styles/global.css` | 基础布局与可访问样式 |
| `scripts/validate-content.mjs` | 可独立运行的内容检查入口 |
| `tests/catalog.test.mjs` | 使用 Node 内置测试验证真实目录及错误输入 |

React 集成已配置，当前页面使用 Astro 的原生脚本增强交互，不额外下载 React 客户端运行时。正文和模型条目保持静态输出，交互行为由浏览器加载脚本后启用。

## 页面

- `/`：项目入口与部分样本。
- `/models/`：完整样本列表。
- `/models/<id>/`：静态模型详情。
- `/compare/`：从 URL 读取最多三个同用途型号，对照特点、参数口径、许可、评测条件和部署信息。
- `/guides/official-quickstart/`：公共部署前检查。
- `/methodology/`：收录、许可、评测与验证状态说明。
- `/404.html`：静态未找到页面。

没有账户、数据库、服务端函数或模型推理服务。模型权重和部署文档链接指向相应来源。

## 目录与对比状态

目录 URL 支持 `q`、`task`、`size`、`license`、`runtime`、`sort` 与选中型号 `ids`。查询值按已收录用途、许可和运行时做白名单解析；搜索最多 120 字符，多关键词同时匹配名称、家族、简介和用途。筛选与选择使用 History API，搜索输入替换当前状态避免每个字符新增历史。刷新与 `popstate` 恢复控件、结果和选择。

参数分段为小于 1B、1B 至小于 3B、3B 至小于 8B、8B 及以上与未知；排序按公开数值，未知值最后。不同参数口径不被转化为内存或能力保证。

对比 URL 为 `/compare/?ids=<id1>,<id2>,<id3>&task=<task>`。型号必须存在、无重复、最多三个且具有共同用途；指定用途须适用于每个型号。无效链接显示可读错误并提供目录入口。比较内容以构建时转义后的模板输出，客户端克隆选中模板，不通过动态 HTML 字符串渲染用户输入。评测逐条保留来源、设置、日期和可比性，不生成总分或混排。

目录与详情正文静态可读，部署步骤使用原生 `details`。对比的 URL 选择需 JavaScript；关闭脚本时给出说明和目录入口。公共指南反向列出关联模型。复制采用 Clipboard API，权限拒绝时保留手动复制入口；当前 Kokoro 安装命令依据官方仓库整理，未进行本站模型推理验证。

## 本地开发与产物

Node.js 24.x；依赖以根目录 `package-lock.json` 锁定。首次使用 `npm ci`，常规开发使用 `npm run dev`，构建使用 `npm run build`，预览使用 `npm run preview`。

`dist/`、`node_modules/`、`.astro/`、`.cache/`、`.vercel/` 和本地环境文件不提交。npm 使用工作区 `.cache/npm/`，避免依赖用户全局缓存写入权限。

## Vercel 部署

已于 2026-10-01 连接 Vercel Hobby 工作区 `zav5` 下的 `smodel` 项目，并完成正式及预览部署：

- [正式站点](https://smodel.vercel.app)：可公开访问。
- [阶段一预览](https://smodel-qvp4mmn1b-zav5.vercel.app)：保留 Vercel 登录保护，已通过 CLI 授权访问检查。
- [阶段二视觉原型](https://smodel-ky1tbwmab-zav5.vercel.app)：云端构建与检查通过，维护者已确认视觉方向。正式站点保持阶段一版本。
- [阶段三核心功能](https://smodel-eyqp4h7t7-zav5.vercel.app)：云端构建、检查通过，部署 READY；包括统一圆角和核心选型功能。预览需登录，正式公开发布按阶段四推进。

`vercel.json` 固定 Astro 框架预设、`npm ci` 安装、`npm run build` 构建与 `dist` 输出，云端使用 Node.js 24.x。`.vercelignore` 排除本地凭据、环境文件、缓存、依赖目录、测试和文档，上传前已核对清单。

当前 Windows 用户的 CLI 凭据保存在 `%APPDATA%\com.vercel.cli\Data\auth.json`，文件权限仅允许当前用户访问；凭据不在仓库内。在令牌有效且未撤销期间，后续 CLI 命令自动使用此连接。项目关联保存在忽略的 `.vercel/project.json`；CLI 生成的 `.env.local` 也不提交或上传。

```sh
npx vercel whoami
npx vercel --target preview
npx vercel --prod
```

其他机器或新克隆需自行登录，再运行 `npx vercel link --project smodel --scope zav5`。每次发布后检查部署日志和目标页面。

本次云端内容校验通过（8 个模型、1 篇指南），Astro 检查为 0 错误、0 警告、0 提示，部署状态为 READY。正式站点通过浏览器验证首页、目录、8 个模型详情、方法说明和公共指南返回 200，未知路由返回 404；预览首页授权访问返回 200。本机 Node 直接请求曾连接超时，线上访问结果以随后实际浏览器及 CLI 检查为准。

需要 Git 自动部署时，先确定远端仓库并由维护者连接 Vercel。Git 远端为 https://github.com/lincux0/smodel.git。Vercel Git 自动连接目前因账号缺少 GitHub Login Connection 未完成；当前通过 CLI 正式部署，不将源码推送视为自动部署成功。

静态 Astro 无需 Vercel 服务端适配器。后续如果增加按需服务端渲染，再评估适配器与套餐用量。

参考：[Astro Vercel 部署](https://docs.astro.build/en/guides/deploy/vercel/)、[Vercel CLI 部署](https://vercel.com/docs/cli/deploy)。

## Graphify

使用 `graphify update . --no-cluster` 更新代码 AST 结构图，不执行语义提取或社区模型命名。图用于源码定位，不证明 JSON、Markdown 与运行时关系；以上数据流以源码和校验结果为准。

输出位于 `graphify-out/graph.json`。本地缓存和运行侧文件不提交，源码变更后重新更新图。

当前 Graphify 对 10 个 Astro 文件报告语法解析限制，21 个模型 JSON 未生成节点；只读完整性诊断还报告 19 条悬空端点边。图包含 183 个节点和 230 条原始边，不能保证所有关系可遍历。这些页面与数据的关系需要以源码、内容校验和构建验证为依据，结构图属于部分源码索引，不代表完整项目图。

## 首个公开版本

代码为 MIT，原创文字为 CC BY 4.0；第三方模型各依其许可。源码包位于 public/downloads，Git 跟踪以确保克隆后的部署仍提供下载。包仅包含程序、数据、许可与文档，排除依赖、构建缓存、凭据和自身下载目录。发布检查见 [发布说明](RELEASE.md)。
