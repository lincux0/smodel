# 内容维护指南

本指南供维护者人工创建和复核模型条目。项目目标、范围与阶段安排见[开发计划](DEVELOPMENT_PLAN.md)第 1、2、5 节。当前目录收录 21 个型号，属于人工维护的代表性集合，不是穷尽清单。正式条目每个模型一个 JSON 文件，路径为 `src/data/models/<id>.json`；公共部署指南放在 `src/data/guides/`。目前没有批量导入工具，也不维护假例正式数据。关键字段来源与口径见[模型来源记录](SOURCES.md)。

模型详情页的“获取权重”入口链接到各型号对应的官方模型页或上游发布仓库；权重需要由使用者直接从该来源获取，本站不托管或随源码包分发模型文件。部分来源需要登录、接受特定许可或申请访问，维护者应在条目步骤与许可说明中明确这些条件。源码从 [GitHub 仓库](https://github.com/lincux0/smodel) 克隆；通过 GitHub Issue 或 Pull Request 贡献纠错和新条目，流程见根目录 [CONTRIBUTING.md](../CONTRIBUTING.md)。

目录与对比直接使用这些字段。修改 `tasks` 会影响同用途对比是否有效；修改许可名称、运行时或稳定 ID 会影响已有分享链接，旧链接遇到无效型号时会显示错误。公共指南会自动列出所有通过 `guideId` 引用它的模型。

部署 `steps[].command` 仅填写来源明确、适用环境说明清楚的真实命令，缺失保持 `null`。从 Notebook 转为终端写法时，注明转换和必要的引号；不要把依赖安装等同于完整部署或本站实测。当前 Kokoro 示例按[官方仓库 Usage](https://github.com/hexgrad/kokoro#usage)转换，复制校验不表示已执行命令或模型。

## 新建模型条目

复制下面的完整模板，将 `<...>` 占位内容替换为已核实的信息。`example.org` 仅用于展示字段格式，是无效示例来源，绝不可直接导入或发布。未知的可选数值、日期或链接填 `null`；仅在 schema 允许空数组的字段中，没有记录时才填 `[]`。必需文字和来源链接必须提供，不能用猜测补齐。

```json
{
  "id": "model-example",
  "name": "<official model name>",
  "family": "<model family>",
  "version": "<version>",
  "variant": "base",
  "tasks": ["text-generation"],
  "modalities": {
    "input": ["text"],
    "output": ["text"]
  },
  "parameters": {
    "totalB": null,
    "activeB": null,
    "effectiveB": null,
    "notes": "未找到可靠参数口径时保持数值为空。",
    "sourceUrl": "https://example.org/model-card"
  },
  "context": {
    "nativeTokens": null,
    "extendedTokens": null,
    "extension": null,
    "status": "not-provided",
    "sourceUrl": null
  },
  "languages": ["<language>"],
  "licenses": {
    "weights": {
      "name": "<weights license>",
      "url": "https://example.org/weights-license"
    },
    "code": null,
    "trainingDisclosure": "<publisher disclosure or 未提供>"
  },
  "summary": "<original concise description>",
  "features": ["<evidence-backed feature>"],
  "limitations": ["<known limitation or verification gap>"],
  "officialUrl": "https://example.org/model",
  "checkedAt": "2026-10-01",
  "deployments": [
    {
      "id": "default-runtime",
      "runtime": "<runtime>",
      "systems": [],
      "format": "<model format>",
      "quantization": null,
      "downloadUrl": "https://example.org/download",
      "sourceUrl": "https://example.org/deployment-docs",
      "guideId": "official-quickstart",
      "dependencies": [],
      "steps": [
        {
          "title": "<step title>",
          "description": "<what the user should do and expected result>",
          "command": null
        }
      ],
      "hardware": {
        "status": "not-verified",
        "notes": "本站未在设备上实测；没有可靠官方估算时不填写资源数值。",
        "ramGb": null,
        "vramGb": null,
        "sourceUrl": null
      },
      "verification": {
        "status": "official-supported",
        "verifiedAt": null
      }
    }
  ],
  "evaluations": []
}
```

替换示例值时必须遵循代码 schema 的枚举：`variant` 为 `base`、`instruct`、`specialized`；任务标签为 `text-generation`、`coding`、`image-understanding`、`embedding`、`reranking`、`speech-recognition`、`text-to-speech`、`ocr`。输入模态为 `text`、`image`、`audio`；输出模态为 `text`、`audio`、`vector`、`score`。上下文 `status` 为 `documented`、`not-provided`、`not-applicable`；硬件状态为 `not-verified`、`official-estimate`、`measured`；部署验证状态为 `official-supported`、`site-verified`。评测类型为 `official-report`、`third-party`、`site-measured`，指标方向为 `higher` 或 `lower`。

## 字段与缺失值

- `id` 是永久稳定标识，使用小写 ASCII、数字和连字符；必须与文件名完全一致（如 `qwen-example.json` 中的 `id` 为 `qwen-example`）。以发布方/模型名/版本区分不同型号。改名不改 ID，模型版本或变体确实不同则使用新 ID。部署 `id` 在同一模型内稳定且唯一。
- 参数单位是十亿（B）。只按来源披露的口径填写 `totalB`、`activeB`、`effectiveB`，口径放 `notes` 并附 `sourceUrl`。多模态模型的官方数值可能只涵盖语言模型或嵌入表，必须说明哪些组件被包含，页面统一标为公开参数规模，不将其扩大为完整系统合计。不要从模型文件大小反推参数。
- `context.status` 表示上下文信息的披露状态；`extension` 是扩展方式/条件的说明文字，不是状态。`documented` 时必须有 `nativeTokens` 和 `sourceUrl`；已知扩展上限时填写 `extendedTokens`（不得小于原生长度）并在 `extension` 写明条件。`not-provided` 或 `not-applicable` 时，两个 token 数值及 `extension` 都必须为 `null`；前者表示来源未披露，后者表示确实不适用。
- 数值未知用 `null`，不能用 0 或估计值伪装事实。`parameters.sourceUrl`、模型 `officialUrl`、部署下载/来源链接、步骤及简介/特点/限制等 schema 要求的字段不能留空；上下文 `sourceUrl` 和硬件 `sourceUrl` 可为 `null`。没有评测记录时用 `evaluations: []`，不要填 0 作为占位成绩。`systems`、`dependencies` 可为空；`tasks`、输入/输出模态、`features`、`limitations`、`deployments` 和 `steps` 必须至少有一项。`languages` 至少列出已知语言；确认没有披露时以空数组表示。`date` 可为 `null`；`checkedAt` 与本站已验证时的 `verifiedAt` 是日期，格式为 `YYYY-MM-DD`。
- `official-supported` 表示官方文档明确支持该部署路线，其 `verifiedAt` 必须为 `null`；`site-verified` 仅在维护者按记录条件成功运行后使用，并填写验证日期。硬件 `measured` 仅代表本站实际测量，必须在 `notes` 说明设备、系统、运行时、格式/量化和关键负载条件，并附来源或记录链接。
- `guideId` 关联 `src/data/guides/` 下同名 Markdown 公共指南，ID 由文件名（不含 `.md`）确定。当前公共指南是 `official-quickstart`，来源文件为 `src/data/guides/official-quickstart.md`，frontmatter 仅需 `title`、`description`。模型特有步骤仍写在模型 JSON 中；只有跨模型可复用的步骤才放公共指南。

## 来源、许可与内容信任

先查模型发布方的模型卡、官方仓库和官方部署文档；用第三方评测或社区量化时，直接链接到具体报告/文件，并在描述中标明第三方或社区来源。关键事实分别记录来源，不能让一个主页链接替代参数、许可和评测的证据。本站简介和特点使用自己的话总结，不复制大段模型卡或评测文字。

权重许可决定模型权重的使用与再分发条件；代码许可约束相关代码。`licenses.weights` 必须记录许可名称和许可原文链接；`licenses.code` 为 `null` 时统一表示代码许可未核实，页面也显示“未核实”；已确认时记录名称和链接，不用该空值表示“不适用”。若许可不同、缺失或权重受额外条款约束，应明确写出。不要把“开放权重”写成“完整开源”，也不要将代码仓库许可套用于权重。许可不明确时说明待核实，不自行推断。`licenses.trainingDisclosure` 描述发布方公开了什么；未披露就写“未提供”，不推测训练数据。

本项目网站代码按 MIT 许可发布（根目录 `LICENSE`）；维护者和贡献者的原创模型整理及指南按 CC BY 4.0 发布（[原创内容许可说明](../LICENSE-CONTENT.md)）。这两项许可不改变模型权重或第三方软件自己的许可。`docs/SOURCES.md` 按型号记录证据链接和口径；例如 Gemma 条款、Qwen Research License 及不同来源的 Whisper 权重应分别准确说明。

本站未实测是默认状态：硬件默认 `not-verified`，验证状态不得写 `site-verified`。官方给出的资源需求可标 `official-estimate`，保留官方条件和来源；文件下载体积不能代替内存/显存需求。社区反馈不能冒充本站验证。

## 评测记录与可比性

结论、配置、证据关联与第三方结果使用范围见 [能力依据规范](CAPABILITY_EVIDENCE.md)。新增评测需填写稳定 `id`、`task`、`publisher`、`externalModelId`、`modelConfig`、`conditions`、`comparisonGroup`、`nonComparableReason` 和 `rights`。条件未知保留空值。模型可填写 `assessments`，按用途引用本模型同用途 `evidenceIds`，缺省为空数组。旧非空记录需迁移，空 `evaluations` 不需添加虚构记录。

一条记录对应一个明确指标结果。记录基准与数据集/划分、语言、单位、指标方向、模型/基准版本、测试设置、来源、评测日期（未知可为 `null`）和本次核实日期。`unit` 必须是非空文字；无单位时填写“无单位”。`kind` 应准确区分官方报告、第三方结果和本站实测；没有可靠成绩就保持 `evaluations: []`，不要用虚构数字占位。

只有任务、数据集及划分、语言、指标定义、版本和关键测试条件足够一致时，`comparable` 才能为 `true`。缺少条件或仅有宣传性数字时置 `false`，不得用于同一排序或暗示直接胜负。不同单位或方向的数值不直接比较；保留历史结果及其版本，不将旧评测描述成当前排名。

## 维护与校验

模型上线台账维护于 [`doc/模型上线台账.xlsx`](../doc/模型上线台账.xlsx)。已上线页按正式JSON清单记录型号、用途、参数、上下文、许可、部署工具、来源和证据覆盖；计划页用于手工登记待上线具体型号、状态、优先级与计划日期。正式发布确认后将对应计划记录移至已上线页，并同步JSON中的基本信息。稳定ID用于去重；没有明确型号时不创建计划占位记录。

台账不是网站的数据输入，网站仍以JSON为准。每次新增、下线模型或变更基本信息后同步更新台账及状态核对日期。计数公式、计划状态和优先级验证预设至第105行；超过范围时扩展公式、验证及表格范围。核实日期不等于上线日期；未披露和不适用不得改成0。

当前21个型号已逐用途填写审核摘要。后续维护应同步检查所有 `tasks` 的摘要与证据关联；缺少成绩时写明证据缺口，AA保持仅链接。开放结果许可与独立性分别核实，厂商或身份关系未知的社区提交不能自动视为独立复测。最新覆盖见 [来源记录](SOURCES.md)。

新增或更新前，依次核对模型身份/版本、来源与许可、参数和上下文、部署来源与支持状态、评测条件；只更新有证据支持的字段，并刷新 `checkedAt`。来源发生变化或链接失效时重新检查官方页面，保留可追溯说明。发现错误时修正对应字段并检查是否影响相关部署或评测，不覆盖仍准确的历史评测条件。

在项目根目录运行以下检查，再通过预览页面人工复核内容和关联：

```sh
npm run validate:content
npm run check
npm test
npm run build
```

校验通过只说明结构与构建检查通过，不代表来源真实、许可判断正确或本站完成了实测；这些仍需人工复核。
