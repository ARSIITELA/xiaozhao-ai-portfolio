window.PORTFOLIO_CONTENT = {
  displayName: "小沼",
  name: "庞志豪",
  age: 22,
  role: "AI产品经理",
  introShort: "曾就职于淘天、字节，参与电商与 AI 相关项目。",
  profile: [
    "庞志豪，22岁，AI产品经理。先后在字节跳动豆包电商、淘天集团商品库、哈啰参与AI相关项目，熟悉大模型评测体系搭建、数据质量管理与跨团队项目推进，能把模糊的业务诉求拆解为清晰的产品问题与目标。",
    "具备AI Builder能力，独立完成AI辅助小说创作工具Ink Map的需求定义、产品设计、开发与上线。",
    "对AI产品保持长期关注，组建AI学习小组并定期分享前沿资讯，期待在AI产品方向持续深耕。"
  ],
  phone: "19730058618",
  emails: ["1691434502@qq.com", "kkg781926@gmail.com"],
  archives: [
    {
      date: "2026.10",
      company: "Ink Map",
      role: "个人独立项目",
      description: "AI辅助小说创作工作台"
    },
    {
      date: "2026.03 — 2026.10",
      company: "字节跳动",
      role: "AI产品经理",
      description: "豆包电商"
    },
    {
      date: "2025.08 — 2026.03",
      company: "淘天集团",
      role: "AI数据产品经理",
      description: "商品库"
    },
    {
      date: "2024.12 — 2025.05",
      company: "哈啰",
      role: "项目助理（实习）",
      description: "智能驾驶感知数据标注平台设计"
    }
  ],
  socials: [
    {label: "个人主页", url: "https://arsiitela.github.io/XIAOZHAO-333/"},
    {label: "知乎", url: "https://www.zhihu.com/people/arvin-see"},
    {label: "人人都是产品经理", url: "https://www.woshipm.com/u/1662504"},
    {label: "GitHub", url: "https://github.com/ARSIITELA"},
    {label: "微信公众号", type: "wechat", image: "assets/wechat-qrcode.jpg"}
  ],
  works: [
      {
          "slug": "doubao-memory",
          "title": "豆包电商 Memory 个性化推荐",
          "category": "commission",
          "company": "字节跳动 · 豆包电商",
          "role": "AI 产品经理",
          "period": "2026.03 — 2026.10",
          "summary": "从购物问答中的对比与推荐问题出发，设计用户信息优先级、记忆策略和回答规范，让推荐能够结合用户当前需求与历史偏好。",
          "tags": [
              "记忆策略",
              "个性化推荐",
              "AI 电商"
          ],
          "highlights": [
              {
                  "value": "约 30%",
                  "label": "态度不明确的扣分占比下降"
              }
          ],
          "sections": [
              {
                  "title": "背景与问题",
                  "paragraphs": [
                      "众测与线上评估发现，对比类购物问题的满意度偏低。缺少用户信息时，模型容易给出面面俱到的中立回答，难以帮助用户做决定。项目因此将个性化信息缺失作为重点问题。"
                  ]
              },
              {
                  "title": "方案与职责",
                  "bullets": [
                      "比较 Prompt 调整、补充训练数据与引入用户画像三种方案，从效果、成本、周期与隐私风险出发，推动确定 Memory 方案。",
                      "定义信息使用顺序：本轮输入、当前上下文、豆包 Memory、关联画像；区分长期偏好与短期意图，设计记忆写入、检索和过期修正规则。",
                      "设计个性化回答规范，要求给出推荐结论与依据，信息不足时主动澄清，并避免对身材、性别或消费水平作冒犯性推断。"
                  ]
              },
              {
                  "title": "评估与结果",
                  "paragraphs": [
                      "联动算法、工程、搜索与评估团队，新增个性化满足维度，并通过灰度放量验证效果。对比与推荐场景中，态度不明确的扣分占比下降约 30%，同时形成了信息优先级与个性化评估规范。"
                  ]
              }
          ],
          "cover": "assets/works/doubao-memory.svg",
          "images": [
              "assets/works/doubao-memory.svg"
          ],
          "wide": true
      },
      {
          "slug": "doubao-evaluation",
          "title": "豆包电商购物问答体验评估体系",
          "category": "commission",
          "company": "字节跳动 · 豆包电商",
          "role": "AI 产品经理",
          "period": "2026.03 — 2026.10",
          "summary": "重构覆盖回答文本、商品卡与图片输入的购物问答评估体系，统一判定标准，为模型迭代与版本上线提供依据。",
          "tags": [
              "多模态评估",
              "判定标准",
              "偏好测试集"
          ],
          "highlights": [
              {
                  "value": "约 40%",
                  "label": "主观维度判定分歧率下降"
              },
              {
                  "value": "20%",
                  "label": "评估结论一致性提升"
              }
          ],
          "sections": [
              {
                  "title": "背景与目标",
                  "paragraphs": [
                      "原有规则结构松散、维度交叉，主观判断造成的分歧难以稳定指导模型优化。项目目标是让评估顺序贴近用户感知，并同时覆盖文字购物问答与发图咨询。"
                  ]
              },
              {
                  "title": "体系设计",
                  "bullets": [
                      "按需求理解、基础体验、可信性、全面性、个性化满足及展示可读性组织体验漏斗，并补充图片识别、OCR 理解和图文意图等评估维度。",
                      "设计四档判定与强、软滑档规则，明确关键错误优先处理，加分项的分歧不直接构成滑档。",
                      "按品类开放程度设置 9:1、7:3、6:4 等判定阈值；联合运营专家整理购买决策因子，并设计排序转两两对比、背靠背标注和二轮投票流程。"
                  ]
              },
              {
                  "title": "落地与结果",
                  "paragraphs": [
                      "将规则用于评估培训、偏好测试集构建与版本验收。主观维度判定分歧率下降约 40%，评估结论一致性提升 20%；该体系成为购物问答模型版本上线的统一准入标准，也识别出后续 Memory 项目的体验问题。"
                  ]
              }
          ],
          "cover": "assets/works/doubao-evaluation.svg",
          "images": [
              "assets/works/doubao-evaluation.svg"
          ],
          "wide": false
      },
      {
          "slug": "taotian-data-quality",
          "title": "商品库训练数据质量体系建设",
          "category": "commission",
          "company": "淘天集团 · 商品库",
          "role": "AI 数据产品经理",
          "period": "2025.08 — 2026.03",
          "summary": "承接类目识别、属性抽取与同款归并的数据需求，统筹多供应商标注团队，建立数据标准、交付管理和质量治理流程。",
          "tags": [
              "数据质量",
              "标注标准",
              "跨团队协同"
          ],
          "highlights": [
              {
                  "value": "约 70 人",
                  "label": "统筹多供应商标注团队"
              }
          ],
          "sections": [
              {
                  "title": "背景与目标",
                  "paragraphs": [
                      "商品库的多类模型依赖持续的数据供给。多项目并行时，需求口径不一、供应商质量波动和问题追溯困难，会影响数据交付。项目围绕统一标准、质量可度量和交付可追踪展开。"
                  ]
              },
              {
                  "title": "标准与交付设计",
                  "bullets": [
                      "对接算法与业务产品，将类目、属性和同款等需求转成可执行的数据规范，明确口径冲突、优先级与适用范围。",
                      "设计信息校验、商品信息修正、同款挂载与规格补全链路，补充子品牌、赠品、白牌等边界规则，并组织试标与供应商培训。",
                      "统筹约 70 人的多供应商团队，按算法迭代计划拆解数据规模、质量要求和交付节点，建立日记录与周会机制，提前识别延期风险。"
                  ]
              },
              {
                  "title": "质量治理与结果",
                  "paragraphs": [
                      "设计分层质检与交付准入门槛，推动准确率与供应商绩效挂钩；通过 bad case 复盘把高频错误沉淀为规范更新。最终形成覆盖多类模型的数据标准与管理流程，支撑搜索、比价和推荐等下游业务。"
                  ]
              }
          ],
          "cover": "assets/works/taotian-data-quality.svg",
          "images": [
              "assets/works/taotian-data-quality.svg"
          ],
          "wide": false
      },
      {
          "slug": "hello-annotation",
          "title": "智能驾驶感知数据标注平台设计",
          "category": "commission",
          "company": "哈啰",
          "role": "项目助理（实习）",
          "period": "2024.12 — 2025.05",
          "summary": "参与智驾与地图数据标注平台的需求调研和方案梳理，协助完善联合标注、项目管理与质检流程。",
          "tags": [
              "数据标注平台",
              "需求调研",
              "质量指标"
          ],
          "highlights": [],
          "sections": [
              {
                  "title": "业务背景",
                  "paragraphs": [
                      "平台承接智驾与地图场景中的 2D、3D 及联合标注任务。随着任务类型和数据量增长，作业效率、质量管控与项目协同出现新的需求。实习期间主要协助产品负责人梳理问题与推进优化。"
                  ]
              },
              {
                  "title": "参与的工作",
                  "bullets": [
                      "协助调研标注、质检和项目管理等角色的使用场景，将一线痛点整理成需求清单与优化建议。",
                      "协助梳理 2D 与 3D 联合标注作业页、项目与模板管理等模块，参与功能优先级讨论，支撑平台扩展多种标注业务。",
                      "参与定义错标、漏标和准确率等质量指标，协助把线下质检流程转为线上方案，让质量数据能够用于验收和交付判断。"
                  ]
              },
              {
                  "title": "验证与结果",
                  "paragraphs": [
                      "参与新功能和新模板的上线验证，持续收集一线使用反馈，结合业务目标评估优化价值，并配合产研迭代。相关工作支撑了作业、质检和项目管理模块的完善，以及多类型智驾标注项目的稳定生产。"
                  ]
              }
          ],
          "cover": "assets/works/hello-annotation.svg",
          "images": [
              "assets/works/hello-annotation.svg"
          ],
          "wide": true
      },
      {
          "slug": "ink-map",
          "title": "Ink Map · AI 辅助小说创作工作台",
          "category": "personal",
          "company": "个人独立项目",
          "role": "产品设计与开发",
          "period": "2026.10",
          "summary": "面向小说与原创角色创作者，独立完成需求定义、产品设计、前后端开发和部署，将设定探索、画布整理与正文写作整合到同一工作台。",
          "tags": [
              "AI Builder",
              "创作工具",
              "产品内测"
          ],
          "highlights": [
              {
                  "value": "约半个月",
                  "label": "完成需求定义到首个版本"
              },
              {
                  "value": "50 余人",
                  "label": "种子用户参与内测"
              }
          ],
          "sections": [
              {
                  "title": "创作问题",
                  "paragraphs": [
                      "针对设定资料分散、故事构思难以推进和 AI 内容偏离原设定等问题，设计从输入设定、多方向探索、选择修改、整理框架到正文写作的流程。"
                  ]
              },
              {
                  "title": "产品与 AI 交互",
                  "bullets": [
                      "使用卡片和关系连线组织人物、地点及故事设定；接入 DeepSeek，提供首轮八方向探索、每题三个候选方案及后续分支延伸。",
                      "结合已采纳资料生成简介与八节框架，并接入可读取画布、执行卡片操作的对话助手。",
                      "区分原始设定、已采纳内容与待选方案，保留资料来源，通过分块摘要和生成后核对检查设定冲突、条件遗漏及跨故事资料混入。"
                  ]
              },
              {
                  "title": "实现与内测",
                  "paragraphs": [
                      "借助 AI 编程工具独立完成前后端与部署，约半个月形成首个版本。支持 TXT、DOCX、Markdown、文本型 PDF 导入及项目导出恢复。已招募 50 余名种子用户内测，结合注册、激活、次日留存与反馈完成多轮迭代。"
                  ]
              }
          ],
          "cover": "assets/works/ink-map.svg",
          "images": [
              "assets/works/ink-map.svg"
          ],
          "wide": true
      }
  ],
  gallery: [
    {
      "id": "01",
      "title": "背包设计草图 01",
      "image": "assets/gallery/01.webp",
      "thumbnail": "assets/gallery/01-320.webp",
      "preview": "assets/gallery/01-640.webp",
      "width": 1707,
      "height": 980
    },
    {
      "id": "02",
      "title": "背包设计草图 02",
      "image": "assets/gallery/02.webp",
      "thumbnail": "assets/gallery/02-320.webp",
      "preview": "assets/gallery/02-640.webp",
      "width": 1707,
      "height": 1280
    },
    {
      "id": "03",
      "title": "托特包设计草图",
      "image": "assets/gallery/03.webp",
      "thumbnail": "assets/gallery/03-320.webp",
      "preview": "assets/gallery/03-640.webp",
      "width": 1452,
      "height": 1080
    },
    {
      "id": "04",
      "title": "托特包配色练习",
      "image": "assets/gallery/04.webp",
      "thumbnail": "assets/gallery/04-320.webp",
      "preview": "assets/gallery/04-640.webp",
      "width": 1707,
      "height": 1280
    },
    {
      "id": "05",
      "title": "产品造型草图",
      "image": "assets/gallery/05.webp",
      "thumbnail": "assets/gallery/05-320.webp",
      "preview": "assets/gallery/05-640.webp",
      "width": 1970,
      "height": 1280
    },
    {
      "id": "06",
      "title": "家电设计手绘",
      "image": "assets/gallery/06.webp",
      "thumbnail": "assets/gallery/06-320.webp",
      "preview": "assets/gallery/06-640.webp",
      "width": 1839,
      "height": 1280
    },
    {
      "id": "07",
      "title": "篮球鞋设计手绘",
      "image": "assets/gallery/07.webp",
      "thumbnail": "assets/gallery/07-320.webp",
      "preview": "assets/gallery/07-640.webp",
      "width": 1786,
      "height": 1280
    },
    {
      "id": "08",
      "title": "订书机设计手绘",
      "image": "assets/gallery/08.webp",
      "thumbnail": "assets/gallery/08-320.webp",
      "preview": "assets/gallery/08-640.webp",
      "width": 1814,
      "height": 1280
    },
    {
      "id": "09",
      "title": "手持摄像机设计手绘",
      "image": "assets/gallery/09.webp",
      "thumbnail": "assets/gallery/09-320.webp",
      "preview": "assets/gallery/09-640.webp",
      "width": 1823,
      "height": 1280
    },
    {
      "id": "10",
      "title": "设备设计手绘",
      "image": "assets/gallery/10.webp",
      "thumbnail": "assets/gallery/10-320.webp",
      "preview": "assets/gallery/10-640.webp",
      "width": 1837,
      "height": 1280
    },
    {
      "id": "11",
      "title": "静物色彩练习 01",
      "image": "assets/gallery/11.webp",
      "thumbnail": "assets/gallery/11-320.webp",
      "preview": "assets/gallery/11-640.webp",
      "width": 1280,
      "height": 1707
    },
    {
      "id": "12",
      "title": "静物色彩练习 02",
      "image": "assets/gallery/12.webp",
      "thumbnail": "assets/gallery/12-320.webp",
      "preview": "assets/gallery/12-640.webp",
      "width": 879,
      "height": 1083
    },
    {
      "id": "13",
      "title": "静物色彩练习 03",
      "image": "assets/gallery/13.webp",
      "thumbnail": "assets/gallery/13-320.webp",
      "preview": "assets/gallery/13-640.webp",
      "width": 994,
      "height": 1295
    },
    {
      "id": "14",
      "title": "节日静物色彩练习",
      "image": "assets/gallery/14.webp",
      "thumbnail": "assets/gallery/14-320.webp",
      "preview": "assets/gallery/14-640.webp",
      "width": 1276,
      "height": 1842
    },
    {
      "id": "15",
      "title": "庭院色彩写生 01",
      "image": "assets/gallery/15.webp",
      "thumbnail": "assets/gallery/15-320.webp",
      "preview": "assets/gallery/15-640.webp",
      "width": 1280,
      "height": 1788
    },
    {
      "id": "16",
      "title": "庭院色彩写生 02",
      "image": "assets/gallery/16.webp",
      "thumbnail": "assets/gallery/16-320.webp",
      "preview": "assets/gallery/16-640.webp",
      "width": 1826,
      "height": 1284
    }
  ]
};
