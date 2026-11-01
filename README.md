# 小沼 · AI 产品经理

这一版沿用 Yoshito Illustration Portfolio 的页面结构，使用已确认的单人黑色卫衣形象、灰白背景和斑驳厚涂素材。首页、列表、个人介绍、详情框架、导航、加载页与联系方式弹窗采用同一套视觉样式。

## 预览

在此目录运行 `python3 -m http.server 8765 --directory dist`，然后访问 http://127.0.0.1:8765/。

## 更新内容

编辑 `dist/content.js` 可更新个人资料、联系方式及经历。Works 已收录 5 个项目案例，包含豆包电商、淘天商品库、哈啰与 Ink Map；Gallery 已收录用户提供的 16 张设计手绘与绘画作品。

项目数据结构：`{ slug, title, category, cover, images, wide, company, role, period, summary, tags, highlights, sections }`，支持背景、职责、方案与结果的文字案例页。category 使用 `commission` 或 `personal`，图片路径相对 dist。Gallery 数据结构：`{ id, title, image, thumbnail, preview, width, height }`。列表使用 320px / 640px 预览，详情仅加载当前选中的大图。

Works 与 Gallery 的详情路径都会从内容数据自动生成；运行 `python3 build.py` 更新静态页面。

主页面：`/`、`/works/`、`/gallery/`、`/profile/`。`/gallery/01/` 至 `/gallery/16/` 可直接打开对应作品。

## 素材

正式素材位于 `dist/assets/`：`painted-character.png` 是透明人物，`painted-wordmark.png` 是透明署名，`paint-study.png` 是抽象厚涂素材。这些素材均由内置图片工具根据已确认预览制作。新增 `painted-orbit.png`（轨道球）、`painted-glider.png`（折纸飞行器）、`painted-notebook.png`（笔记本与星形装饰），用于不同入口和装饰区。最终提示词分别记录在 `asset-prompts/painted-orbit.md`、`asset-prompts/painted-glider.md`、`asset-prompts/painted-notebook.md`。

微信公众号二维码来自用户提供的图片地址。纸张纹理、背景线条和小型装饰由 SVG、CSS 组合绘制。`design-review/` 保存本地审阅稿，已从源码同步范围中排除。

## 图片加载

线上展示使用透明 WebP 和按显示宽度选择的多尺寸图片，原始 PNG 保留作为源文件。首页只预加载人物和署名，入口卡片直接加载小图，页脚和下方装饰继续延迟加载。小碎片和浅色背景统一使用 384px 纹理。

需要重新压缩时，先在本项目启动 8765 端口的静态预览，再将 `scripts/optimize-images.tabbit.js` 交给 Tabbit 的 `nodejs` 命令执行。脚本使用浏览器自带的 WebP 编码能力，不需要安装额外图片工具。随后运行 `python3 build.py` 生成页面。

Gallery 原图和顺序记录保存在 `source-assets/gallery/`。`scripts/optimize-gallery.tabbit.js` 可直接读取本地原图，使用浏览器编码生成完整大图和两种预览尺寸，不需要额外安装图片工具。
