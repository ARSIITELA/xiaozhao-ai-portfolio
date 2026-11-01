(() => {
  'use strict';
  const BASE = new URL('.', document.currentScript.src).pathname;
  const C = window.PORTFOLIO_CONTENT;
  const root = document.querySelector('#app');
  const menu = document.querySelector('#site-menu');
  const menuButton = document.querySelector('#menu-button');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const url = route => BASE + route.replace(/^\//, '');
  const asset = name => url('assets/' + name);
  const arrow = '<span aria-hidden="true">↗</span>';
  const star = '<span class="four-star" aria-hidden="true">✦</span>';
  const routeLink = (route, label, className = '') => `<a class="${className}" data-route href="${url(route)}">${label}</a>`;
  const pill = (route, label) => routeLink(route, `${label}<span aria-hidden="true">→</span>`, 'pill');
  const ART = {
    'painted-character': [1024, 1536, [512, 1024]],
    'painted-wordmark': [2172, 724, [480, 960, 1440, 1920]],
    'painted-notebook': [1254, 1254, [320, 640, 1254]],
    'painted-orbit': [1254, 1254, [320, 640, 1254]],
    'painted-glider': [1254, 1254, [320, 640, 1254]],
    'paint-study': [1254, 1254, [640, 1254]]
  };
  const HERO_PERSON_SIZE = '(max-width: 760px) 124vw, (min-width: 1983px) 900px, 45.4vw';
  const WORDMARK_SIZE = '(max-width: 521px) 92vw, (max-width: 760px) 480px, (min-width: 1983px) 918px, 46.3vw';
  const SECTION_ART_SIZE = '(max-width: 760px) calc(100vw - 40px), (min-width: 1983px) 837px, 42.2vw';
  function artImage(name, className = '', { alt = '', sizes = SECTION_ART_SIZE, loading = 'lazy', priority = 'auto' } = {}) {
    const [width, height, widths] = ART[name];
    const largest = widths[widths.length - 1];
    const srcset = widths.map(size => `${asset(name + (size === largest ? '' : '-' + size) + '.webp')} ${size}w`).join(', ');
    return `<img class="${className}" src="${asset(name + '.webp')}" srcset="${srcset}" sizes="${sizes}" width="${width}" height="${height}" alt="${esc(alt)}" loading="${loading}" fetchpriority="${priority}" decoding="async">`;
  }
  function wordmark(className = '') {
    return artImage('painted-wordmark', `chrome-wordmark painted-wordmark ${className}`, { alt: 'XIAOZHAO', sizes: WORDMARK_SIZE, loading: 'eager', priority: 'high' });
  }

  function socialLinks(className = '') {
    return `<div class="social-links ${className}">${C.socials.map(item => item.type === 'wechat'
      ? `<button type="button" data-qr>${esc(item.label)}${arrow}</button>`
      : `<a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">${esc(item.label)}${arrow}</a>`).join('')}</div>`;
  }

  function entrance(route, label, kind, aboveFold = false) {
    const images = { profile: 'painted-notebook', works: 'painted-orbit', gallery: 'painted-glider' };
    const sizes = !aboveFold
      ? '(max-width: 760px) 100px, (max-width: 1100px) 16.4vw, (min-width: 1983px) 288px, 14.6vw'
      : kind === 'profile'
        ? '(max-width: 760px) 160px, (max-width: 1100px) 23.6vw, (min-width: 1700px) 370px, 21.8vw'
        : '(max-width: 360px) 88px, (max-width: 760px) 100px, (max-width: 1100px) 15.5vw, (min-width: 1671px) 220px, 13.2vw';
    const graphic = artImage(images[kind], `entrance-art entrance-art-${kind}`, { sizes, loading: aboveFold ? 'eager' : 'lazy' });
    return routeLink(route, `<span class="entrance-visual">${graphic}</span><span class="pill">${label}<span aria-hidden="true">→</span></span>`, `entrance entrance-${kind}`);
  }

  function footer() {
    return `<footer class="site-footer"><div class="footer-art"><span class="portfolio-backdrop" aria-hidden="true">Portfolio</span>${artImage('painted-character', 'footer-person', { sizes: '(max-width: 760px) 105vw, (min-width: 1983px) 972px, 49vw' })}<div class="footer-entrances">${entrance('works/', 'Works', 'works')}${entrance('gallery/', 'Gallery', 'gallery')}${entrance('profile/', 'Profile', 'profile')}</div><div class="footer-intro"><p>小沼<br>AI Product Manager<br>Portfolio</p><p class="fine-print">小沼的个人网站。<br>记录产品项目与个人创作。</p></div><span class="paint-fragment paint-fragment-footer" aria-hidden="true"></span></div><div class="footer-bottom"><p>© ${new Date().getFullYear()} ${esc(C.displayName)}</p>${socialLinks()}</div></footer>`;
  }

  function home() {
    return `<section class="hero page-container"><div class="hero-art"><span class="portfolio-backdrop" aria-hidden="true">Portfolio</span>${artImage('painted-character', 'hero-person', { alt: '穿黑色卫衣的厚涂男性人物', sizes: HERO_PERSON_SIZE, loading: 'eager', priority: 'high' })}${wordmark()}<span class="paint-fragment paint-fragment-hero-a" aria-hidden="true"></span><span class="paint-fragment paint-fragment-hero-b" aria-hidden="true"></span></div><div class="hero-entrances">${entrance('profile/', 'Profile', 'profile', true)}${entrance('works/', 'Works', 'works', true)}${entrance('gallery/', 'Gallery', 'gallery', true)}</div><div class="hero-intro"><h1>小沼<br>AI Product Manager<br>Portfolio</h1><p>曾就职于淘天、字节，<br>参与电商与 AI 相关项目。</p><a class="pill" href="https://github.com/ARSIITELA" target="_blank" rel="noopener noreferrer">GitHub ${star}${arrow}</a></div></section><div class="home-sections page-container"><section class="home-section home-works"><div class="section-copy"><h2 class="display-title">Works</h2><p>工作中的产品实践，<br>和独立完成的个人项目。</p>${pill('works/', 'Works Page')}</div><div class="section-art works-preview section-folio-art" aria-hidden="true"><span class="draft-orbit"></span>${artImage('painted-orbit', 'sculpture sculpture-orbit')}<span class="paint-fragment paint-fragment-section"></span></div></section><section class="home-section home-gallery"><div class="section-copy"><h2 class="display-title">Gallery</h2><p>产品设计手绘，<br>以及绘画与色彩练习。</p>${pill('gallery/', 'Gallery Page')}</div><div class="section-art gallery-preview section-folio-art" aria-hidden="true"><div class="paint-panel paint-panel-a">${artImage('paint-study', '', { sizes: '(max-width: 760px) 61vw, (min-width: 1983px) 511px, 25.8vw' })}</div><span class="flight-trail"></span>${artImage('painted-glider', 'sculpture sculpture-glider', { sizes: '(max-width: 760px) 83vw, (min-width: 1983px) 687px, 34.6vw' })}</div></section><section class="home-section home-profile"><div class="section-copy"><h2 class="display-title">Profile</h2><p class="profile-name">小沼 / 庞志豪</p><p class="profile-role">AI 产品经理</p><p class="home-bio">先后在字节跳动豆包电商、淘天集团商品库、哈啰参与 AI 相关项目。<br>从大模型评测、数据质量，到独立产品的设计与上线。</p>${pill('profile/', 'Profile Page')}</div><div class="section-art profile-preview"><div class="profile-object">${artImage('painted-notebook', '', { alt: '厚涂笔记本与星形装饰' })}</div><span class="portrait-label">HELLO, I'M XIAOZHAO ${star}</span></div></section></div>${footer()}`;
  }

  function pageHeading(title, text, crossRoute, crossLabel) {
    return `<div class="page-heading"><h1 class="display-title">${title}</h1><div class="page-description"><p>${text}</p>${crossRoute ? `<p class="cross-link">${routeLink(crossRoute, `${crossLabel}<span aria-hidden="true">→</span>`)}</p>` : ''}<div class="star-line" aria-hidden="true">${star}<i></i>${star}</div></div></div>`;
  }

  function emptyWork(index) {
    return `<div class="work-placeholder work-shape-${index % 4}" aria-label="项目展示位置"><span class="pill placeholder-tag">#${String(index + 1).padStart(2, '0')}</span><div class="placeholder-paper"><span class="placeholder-number">${String(index + 1).padStart(2, '0')}</span><div class="placeholder-diagram" aria-hidden="true"><i></i><i></i><i></i></div></div></div>`;
  }

  function works() {
    const type = new URLSearchParams(location.search).get('type');
    const filter = ['commission', 'personal'].includes(type) ? type : 'all';
    const items = C.works.filter(item => filter === 'all' || item.category === filter);
    const filters = `<fieldset class="work-filters"><legend class="sr-only">项目分类</legend>${[['all','All'],['commission','Commission'],['personal','Personal']].map(([value,label]) => `<label class="filter-item"><input type="radio" name="work-filter" aria-label="${label}" value="${value}" ${filter===value?'checked':''}><span>${label}</span></label>`).join('')}</fieldset>`;
    const cards = C.works.length ? items.map((item,i) => routeLink(`works/${item.slug}/`, `<img src="${esc(url(item.cover))}" alt="${esc(item.title)}的方案概览" loading="${i<2?'eager':'lazy'}" decoding="async"><span class="pill placeholder-tag">#${String(C.works.indexOf(item)+1).padStart(2,'0')}<span>${item.category==='personal'?'个人项目':'工作项目'}</span></span><div class="work-card-copy"><p class="work-company">${esc(item.company)}</p><h2>${esc(item.title)}</h2><p>${esc(item.summary)}</p></div>`, `work-card ${item.wide?'wide':''}`)).join('') : Array.from({length:6},(_,i)=>emptyWork(i)).join('');
    return `<div class="page-container listing-page works-page">${pageHeading('Works','工作项目与个人实践。<br>从需求定义，到产品落地。','gallery/','Gallery')}${filters}${!C.works.length?'<p class="collection-notice">暂无公开项目。</p>':''}<div class="works-grid" data-filter="${filter}">${cards || '<p class="collection-notice">这个分类暂无项目。</p>'}</div></div>${footer()}`;
  }

  function gallery() {
    const images = C.gallery.map((item,i)=>routeLink(`gallery/${item.id || String(i+1).padStart(2,'0')}/`, `<img src="${esc(url(item.thumbnail || item.image))}" ${item.preview?`srcset="${esc(url(item.thumbnail))} 320w, ${esc(url(item.preview))} 640w" sizes="(max-width: 760px) 44vw, (min-width: 1983px) 400px, 20vw"`:''} width="${Number(item.width)}" height="${Number(item.height)}" alt="${esc(item.title || '图片作品')}" loading="${i<4?'eager':'lazy'}" decoding="async">`, 'gallery-card')).join('');
    return `<div class="page-container listing-page gallery-page">${pageHeading('Gallery','设计手绘与绘画作品。','works/','Works')}<span class="paint-fragment paint-fragment-gallery" aria-hidden="true"></span><div class="gallery-grid">${images}</div></div>${footer()}`;
  }

  function profile() {
    return `<article class="page-container profile-page"><h1 class="display-title">Profile</h1><div class="profile-top"><div class="profile-text"><div class="profile-identity"><h2>小沼 / 庞志豪</h2><p>AI 产品经理</p></div><div class="profile-bio">${C.profile.map(p=>`<p>${esc(p)}</p>`).join('')}</div><div class="profile-contact"><p>欢迎通过邮件或电话联系。</p><a class="phone-link" href="tel:${esc(C.phone)}">${esc(C.phone)}<span aria-hidden="true">↗</span></a>${C.emails.map(email=>`<button class="pill copy-email" type="button" data-copy="${esc(email)}" aria-label="复制邮箱 ${esc(email)}">${esc(email)}<span class="copy-symbol" aria-hidden="true">⧉</span></button>`).join('')}<p class="copy-hint">点击邮箱即可复制</p></div></div><div class="profile-visual"><div class="profile-object">${artImage('painted-notebook', '', { alt: '厚涂笔记本与星形装饰', sizes: '(max-width: 760px) 80vw, (min-width: 1983px) 737px, 37.2vw', loading: 'eager', priority: 'high' })}</div><span class="paint-fragment paint-fragment-profile" aria-hidden="true"></span><span class="portrait-label">XIAOZHAO · AI PRODUCT MANAGER</span></div></div><div class="profile-records"><section><h2>Links</h2>${socialLinks('profile-socials')}</section><section class="archive-section"><h2>Archives</h2><ol class="archive-list">${C.archives.map(item=>`<li><time>${esc(item.date)}</time><div><h3>${esc(item.company)}<span>｜${esc(item.role)}</span></h3><p>${esc(item.description)}</p></div></li>`).join('')}</ol></section></div></article>${footer()}`;
  }

  function detail(kind, id) {
    const list = kind === 'works' ? C.works : C.gallery;
    const index = list.findIndex(item => String(item.slug || item.id) === id);
    const item = list[index];
    if (!item) return `<section class="detail-empty page-container"><h1 class="display-title">${kind==='works'?'Works':'Gallery'}</h1><p>未找到这件作品。</p>${pill(`${kind}/`, '返回列表')}</section>`;
    if (kind==='works' && item.sections) return workArticle(item, index, list);
    const images = kind === 'works' ? item.images : list.map(entry=>entry.image);
    const active = kind === 'works' ? 0 : index;
    return `<section class="detail-page" data-detail-kind="${kind}"><a class="detail-close" data-route href="${url(`${kind}/`)}" aria-label="返回列表">×</a><div class="detail-image"><img id="detail-main" src="${esc(url(images[active]))}" alt="${esc(item.title || '图片作品')}" fetchpriority="high" decoding="async"></div><div class="detail-thumbs">${images.map((image,i)=>`<button type="button" data-image="${esc(url(image))}" data-alt="${esc(kind==='gallery'?list[i].title:item.title || '图片作品')}" ${kind==='gallery'?`data-gallery-id="${esc(list[i].id)}"`:''} aria-label="查看第 ${i+1} 张图片" aria-pressed="${i===active}"><img src="${esc(url(kind==='gallery'?(list[i].thumbnail || image):image))}" alt="" loading="lazy" decoding="async"></button>`).join('')}</div>${kind==='works'?`<div class="detail-caption"><p>#${esc(item.category)}</p><h1>${esc(item.title)}</h1></div><div class="detail-pager">${index>0?pill(`works/${list[index-1].slug}/`,'Prev'):''}${index<list.length-1?pill(`works/${list[index+1].slug}/`,'Next'):''}</div>`:''}</section>`;
  }

  function workArticle(item, index, list) {
    return `<article class="work-story page-container"><div class="story-top">${pill('works/', 'All Works')}<span>${esc(item.period)}</span></div><header class="story-header"><p class="story-company">${esc(item.company)} · ${esc(item.role)}</p><h1>${esc(item.title)}</h1><p class="story-summary">${esc(item.summary)}</p><ul class="story-tags">${item.tags.map(tag=>`<li>${esc(tag)}</li>`).join('')}</ul></header><figure class="story-cover"><img src="${esc(url(item.cover))}" alt="${esc(item.title)}的方案概览" width="1400" height="960" fetchpriority="high" decoding="async"></figure>${item.highlights?.length?`<div class="story-highlights">${item.highlights.map(metric=>`<div><strong>${esc(metric.value)}</strong><p>${esc(metric.label)}</p></div>`).join('')}</div>`:''}<div class="story-content">${item.sections.map(section=>`<section><h2>${esc(section.title)}</h2><div>${(section.paragraphs||[]).map(p=>`<p>${esc(p)}</p>`).join('')}${section.bullets?.length?`<ul>${section.bullets.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>`:''}</div></section>`).join('')}</div><nav class="story-navigation" aria-label="项目导航">${index>0?pill(`works/${list[index-1].slug}/`,'上一篇'):pill('works/','全部项目')}${index<list.length-1?pill(`works/${list[index+1].slug}/`,'下一篇'):pill('works/','全部项目')}</nav></article>`;
  }

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
    menu.inert = !open;
    menu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    root.inert = open;
    if (open) menu.querySelector('a')?.focus();
  }

  function render({focus = false} = {}) {
    const route = decodeURI(location.pathname.slice(BASE.length)).replace(/^\/+|\/+$/g,'');
    const [section, id] = route.split('/');
    let html, title;
    if (!route || route==='index.html') { html=home();title='小沼 · AI 产品经理'; }
    else if (section==='works') { html=id?detail('works',id):works();title='Works · 小沼'; }
    else if (section==='gallery') { html=id?detail('gallery',id):gallery();title='Gallery · 小沼'; }
    else if (section==='profile' && !id) { html=profile();title='Profile · 小沼'; }
    else { html=`<section class="detail-empty page-container"><h1 class="display-title">404</h1><p>这个页面暂时不存在。</p>${pill('','返回首页')}</section>`;title='页面不存在 · 小沼'; }
    root.innerHTML=html;
    const galleryStrip=root.querySelector('.detail-page[data-detail-kind="gallery"] .detail-thumbs');
    const selectedThumb=galleryStrip?.querySelector('[aria-pressed="true"]');
    if(selectedThumb) galleryStrip.scrollLeft=selectedThumb.offsetLeft-(galleryStrip.clientWidth-selectedThumb.offsetWidth)/2;
    document.title=title;
    document.body.classList.toggle('detail-view', Boolean(id && ['works','gallery'].includes(section)));
    document.body.dataset.page=section || 'home';
    document.querySelectorAll('#site-menu [data-route]').forEach(link=>link.setAttribute('aria-current',link.getAttribute('href')===url(route?section+'/':'')?'page':'false'));
    document.querySelector('link[rel="canonical"]').href = new URL(url(route?route+'/':''), location.origin).href;
    if (focus) { root.setAttribute('tabindex','-1');root.focus({preventScroll:true}); }
    installMotion();
  }

  function navigate(destination, push=true, keepScroll=false) {
    const next = new URL(destination, location.href);
    if (next.origin!==location.origin || !next.pathname.startsWith(BASE)) return;
    setMenu(false);
    const update=()=>{ if(push) history.pushState({},'',next.href);render({focus:true});if(!keepScroll)window.scrollTo({top:0,left:0,behavior:'instant'}); };
    if(document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.startViewTransition(update);
    else update();
  }

  let observer;
  function installMotion() {
    observer?.disconnect();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.08});
    root.querySelectorAll('.home-section,.profile-records,.work-placeholder,.gallery-placeholder').forEach(node=>{node.classList.add('reveal');observer.observe(node);});
  }

  document.querySelector('.site-logo').href=url('');
  document.querySelector('.menu-links').innerHTML=[['','Home'],['works/','Works'],['gallery/','Gallery'],['profile/','Profile']].map(([route,label])=>routeLink(route,`<span>${label}</span>${star}`,'menu-link')).join('');
  document.querySelector('.menu-bottom').innerHTML=`<p>© ${new Date().getFullYear()} 小沼</p>${socialLinks()}`;
  menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'){if(document.querySelector('#qr-dialog').open)document.querySelector('#qr-dialog').close();else if(document.body.classList.contains('menu-open')){setMenu(false);menuButton.focus();}}
    if(event.key==='Tab' && document.body.classList.contains('menu-open')){
      const controls=[menuButton,...menu.querySelectorAll('a,button')];
      const first=controls[0],last=controls.at(-1);
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    }
  });
  let toastTimer;
  function toast(message) {const node=document.querySelector('#toast');node.textContent=message;node.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.classList.remove('visible'),2400);}
  document.addEventListener('click',async event=>{
    const link=event.target.closest('a[data-route]');
    if(link && !event.metaKey&&!event.ctrlKey&&!event.shiftKey&&!event.altKey && event.button===0){event.preventDefault();navigate(link.href);return;}
    const qr=event.target.closest('[data-qr]');
    if(qr){const dialog=document.querySelector('#qr-dialog');dialog.querySelector('img').src=asset('wechat-qrcode.jpg');dialog.showModal();return;}
    if(event.target.closest('[data-close-dialog]'))document.querySelector('#qr-dialog').close();
    const copy=event.target.closest('[data-copy]');
    if(copy){try{await navigator.clipboard.writeText(copy.dataset.copy);toast('邮箱已复制');}catch{toast('请长按或选中邮箱进行复制');}return;}
    const thumb=event.target.closest('[data-image]');
    if(thumb){
      const main=document.querySelector('#detail-main');main.src=thumb.dataset.image;main.alt=thumb.dataset.alt || '图片作品';
      document.querySelectorAll('[data-image]').forEach(node=>node.setAttribute('aria-pressed',String(node===thumb)));
      if(thumb.dataset.galleryId){
        const destination=url(`gallery/${thumb.dataset.galleryId}/`);history.replaceState({},'',destination);
        document.querySelector('link[rel="canonical"]').href=new URL(destination,location.origin).href;
        const strip=thumb.parentElement;strip.scrollTo({left:thumb.offsetLeft-(strip.clientWidth-thumb.offsetWidth)/2,behavior:'smooth'});
      }
    }
  });
  document.querySelector('#qr-dialog').addEventListener('click',event=>{if(event.target===event.currentTarget)event.currentTarget.close();});
  document.addEventListener('change',event=>{if(event.target.matches('[name="work-filter"]')){const next=new URL(location.href);if(event.target.value==='all')next.searchParams.delete('type');else next.searchParams.set('type',event.target.value);navigate(next.href,true,true);}});
  window.addEventListener('popstate',()=>{setMenu(false);render();});
  let pointerFrame;
  document.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse'||matchMedia('(prefers-reduced-motion: reduce)').matches)return;cancelAnimationFrame(pointerFrame);pointerFrame=requestAnimationFrame(()=>{document.documentElement.style.setProperty('--pointer-x',((event.clientX/innerWidth)-.5).toFixed(3));document.documentElement.style.setProperty('--pointer-y',((event.clientY/innerHeight)-.5).toFixed(3));});},{passive:true});
  render();
  const loader=document.querySelector('#site-loader');
  Promise.race([Promise.all([document.fonts.ready,...[...document.querySelectorAll('.hero-person')].map(img=>img.decode().catch(()=>{}))]),new Promise(resolve=>setTimeout(resolve,1800))]).then(()=>{loader.classList.add('loaded');loader.setAttribute('aria-hidden','true');setTimeout(()=>loader.remove(),650);});
})();
