from pathlib import Path
import json
import subprocess
import hashlib

ROOT = Path(__file__).resolve().parent
DIST = ROOT / "dist"
VERSIONS = {name: hashlib.sha256((DIST / name).read_bytes()).hexdigest()[:12]
            for name in ("styles.css", "content.js", "app.js")}

def page(prefix, title, home=False):
    image_preloads = ''
    if home:
        image_preloads = f'''
  <link rel="preload" href="{prefix}assets/painted-character.webp" as="image" type="image/webp" fetchpriority="high" imagesrcset="{prefix}assets/painted-character-512.webp 512w, {prefix}assets/painted-character.webp 1024w" imagesizes="(max-width: 760px) 124vw, (min-width: 1983px) 900px, 45.4vw">
  <link rel="preload" href="{prefix}assets/painted-wordmark.webp" as="image" type="image/webp" fetchpriority="high" imagesrcset="{prefix}assets/painted-wordmark-480.webp 480w, {prefix}assets/painted-wordmark-960.webp 960w, {prefix}assets/painted-wordmark-1440.webp 1440w, {prefix}assets/painted-wordmark.webp 1920w" imagesizes="(max-width: 521px) 92vw, (max-width: 760px) 480px, (min-width: 1983px) 918px, 46.3vw">'''
    return f'''<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#3d3b37">
  <meta name="description" content="小沼，AI产品经理。曾就职于淘天、字节，参与电商与AI相关项目。这里记录个人介绍、产品实践与创作。">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="小沼 / 庞志豪 · AI产品经理">
  <meta property="og:type" content="website">
  <title>{title}</title>
  <link rel="canonical" href="https://xiaozhao-ai-portfolio.ashfuasfgau.chatgpt.site/">
  <link rel="icon" href="{prefix}assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="{prefix}styles.css?v={VERSIONS['styles.css']}">
{image_preloads}
</head>
<body>
  <a class="skip-link" href="#app">跳至正文</a>
  <div id="site-loader" class="site-loader" aria-label="页面加载中">
    <div class="loader-robot" aria-hidden="true">✦</div>
    <p class="loader-title">Xiaozhao Portfolio</p>
    <span class="loader-progress" aria-hidden="true"></span>
  </div>
  <header class="site-header">
    <a class="site-logo" data-route href="{prefix}" aria-label="小沼，返回首页"><span aria-hidden="true">✦</span> 小沼 <span aria-hidden="true">✦</span></a>
    <button id="menu-button" type="button" aria-expanded="false" aria-controls="site-menu"><span class="menu-label">Menu</span></button>
  </header>
  <nav id="site-menu" class="menu-overlay" aria-label="全站导航" aria-hidden="true" inert>
    <div class="menu-links"></div>
    <div class="menu-bottom"></div>
  </nav>
  <main id="app"></main>
  <dialog id="qr-dialog" class="qr-dialog" aria-labelledby="qr-title">
    <button type="button" class="dialog-close" data-close-dialog aria-label="关闭微信公众号二维码">×</button>
    <h2 id="qr-title">微信公众号</h2>
    <p>使用微信扫码，关注公众号</p>
    <img src="{prefix}assets/wechat-qrcode.jpg" alt="小沼的微信公众号二维码" width="430" height="430" loading="lazy" decoding="async">
  </dialog>
  <p id="toast" class="toast" role="status" aria-live="polite"></p>
  <noscript><div class="noscript-info"><h1>小沼 · AI 产品经理</h1><p>庞志豪，22岁，AI产品经理。先后在字节跳动豆包电商、淘天集团商品库、哈啰参与AI相关项目。</p><p>请开启 JavaScript 浏览完整网站。联系方式：1691434502@qq.com</p></div></noscript>
  <script src="{prefix}content.js?v={VERSIONS['content.js']}"></script>
  <script src="{prefix}app.js?v={VERSIONS['app.js']}"></script>
</body>
</html>
'''

routes = {"": "小沼 · AI 产品经理", "works": "Works · 小沼", "gallery": "Gallery · 小沼", "profile": "Profile · 小沼", "works/project": "Works · 小沼"}
content = json.loads(subprocess.check_output([
    "node", "-e", "const fs=require('node:fs'),vm=require('node:vm');const c={window:{}};vm.runInNewContext(fs.readFileSync('dist/content.js','utf8'),c);process.stdout.write(JSON.stringify(c.window.PORTFOLIO_CONTENT));"
], cwd=ROOT, text=True))
for item in content.get("gallery", []):
    routes[f"gallery/{item['id']}"] = f"{item['title']} · 小沼"
for item in content.get("works", []):
    routes[f"works/{item['slug']}"] = f"{item['title']} · 小沼"
for route, title in routes.items():
    destination = DIST / route
    destination.mkdir(parents=True, exist_ok=True)
    prefix = "../" * len(Path(route).parts) if route else "./"
    (destination / "index.html").write_text(page(prefix, title, home=not route), encoding="utf-8")
(DIST / "404.html").write_text(page("./", "页面不存在 · 小沼"), encoding="utf-8")
(DIST / "robots.txt").write_text("User-agent: *\nAllow: /\n", encoding="utf-8")
print(f"Built {len(routes)} page routes in {DIST}")
