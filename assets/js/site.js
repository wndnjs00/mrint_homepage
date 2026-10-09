/* ═══════════════════════════════════════════════════════════════════
   ㈜미래아이엔텍 — 공통 스크립트
   최초 시안(homepage4)의 인터랙션 로직을 그대로 재현 + 멀티페이지 확장
   ① 히어로 3D lattice 캔버스 + 커서 추적 (원본 그대로)
   ② 헤더 solid/hide, 실시간 서울 시계, 스크롤 페이드인, 숫자 카운트업 (원본 그대로)
   ③ 멀티페이지: 공통 헤더·푸터 주입, 뉴스룸/사례/문의 렌더러 (확장)
   ═══════════════════════════════════════════════════════════════════ */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ACC = [80, 214, 130]; // approx accent rgb for canvas (원본과 동일)
const C = window.SITE_CONTENT || {};
/* 실제 로고(mrint.co.kr) 인라인 SVG — 어두운 헤더에서 검정 글자를 흰색으로 반전시키기 위해 인라인 주입. 로고 파일 교체 시 이 상수와 assets/img/logo.svg(파비콘용)를 함께 교체할 것 */
const LOGO_SVG = "<svg class=\"logo-svg\" width=\"184\" height=\"50\" viewbox=\"0 0 184 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_323_312)\">\n<path d=\"M89.8892 17.6561V0H107.738\" fill=\"#39B54A\"/>\n<path d=\"M180.113 33.3868C178.691 33.8459 177.356 33.8407 176.344 33.5719C175.301 33.2949 174.576 32.3593 174.576 31.291V21.893H183.989V6.14106H174.576V0L156.214 0.0133878L156.216 6.06362H144.814L144.823 9.84239C141.383 6.96402 136.58 5.75334 130.898 6.33899L130.865 6.34266C128.69 6.59493 126.654 7.29556 124.906 8.38653V6.32954H107.77V6.33111L89.8883 23.5612L89.8891 6.3298C88.6087 6.25026 87.3407 6.16574 86.1158 6.32088C84.7051 6.49938 82.6986 7.19371 81.065 8.28101V6.18621H64.5316V21.4871C64.4618 19.1918 64.0351 17.06 63.2586 15.1424C62.3741 12.9581 61.0616 11.105 59.3574 9.63501C55.8561 6.61436 50.9799 5.42862 45.2558 6.20564L45.2351 6.20852C42.9625 6.53561 40.7727 7.50189 38.9028 9.00342C38.2896 9.49588 37.7294 10.0303 37.2281 10.5989C36.0536 9.37251 34.6439 8.36002 33.035 7.59849C29.8468 6.08935 26.0743 5.62104 21.8217 6.20616L21.7917 6.21036C19.9641 6.48337 18.1668 7.19318 16.5329 8.28048V6.18569H0V49.9995H17.4136V25.8463C17.4136 24.5543 17.7026 23.6331 18.2729 23.1086C18.9682 22.4692 20.1565 22.335 21.0309 22.335C22.3519 22.335 22.8254 22.8719 22.9809 23.0485C23.4957 23.6326 23.7679 24.6233 23.7679 25.9135V49.9995H41.1139V25.8463C41.1139 24.6496 41.4371 23.7426 42.0748 23.1512C42.6419 22.6248 43.4893 22.335 44.4605 22.335C45.2593 22.335 47.1299 22.335 47.1299 25.9133V49.9992H81.9455V25.8461C81.9455 24.554 82.2345 23.6329 82.8048 23.1084C83.5 22.4689 84.6884 22.3348 85.5628 22.3348C86.8838 22.3348 87.3572 22.8716 87.5127 23.0483C88.0275 23.6323 88.2998 24.623 88.2998 25.913L88.3022 49.1085V49.9992L107.77 31.9918V49.9992H125.651V25.9256C125.651 24.9782 125.784 23.7208 126.418 23.1115C126.888 22.66 127.757 22.4309 129.002 22.4309C129.909 22.4309 130.565 22.6697 131.008 23.1611C131.534 23.7447 131.812 24.7236 131.812 25.9923V49.9992H150.096V25.3565C150.141 24.4963 150.322 23.5289 150.853 23.0168C151.321 22.5647 152.189 22.3356 153.431 22.3356C154.334 22.3356 154.989 22.5747 155.43 23.0664C155.957 23.6533 156.235 24.6377 156.235 25.9138V34.4683L156.216 35.747V35.7861C156.215 37.9993 156.555 40.0096 157.226 41.7615C157.907 43.5408 158.931 45.0701 160.269 46.3071C162.753 48.6022 166.197 49.8302 170.507 49.9567C171.094 49.9853 171.682 49.9992 172.269 49.9992C175.968 49.9992 179.62 49.4424 182.305 48.4465L184 47.8178V31.9375C184 31.9375 181.725 32.8662 180.114 33.3865L180.113 33.3868Z\" fill=\"black\"/>\n</g>\n<defs>\n<clippath id=\"clip0_323_312\">\n<rect width=\"184\" height=\"50\" fill=\"white\"/>\n</clippath>\n</defs>\n</svg>";
const depth = +(document.documentElement.dataset.depth || 0);
const root = '../'.repeat(depth);
const R = p => root + p;
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── 공통 Chrome: 헤더 / 모바일 내비 / 푸터 (content.js 기반) ── */
const NAV = [
  { label: '회사소개', href: 'about/index.html', key: 'about' },
  { label: '사업영역', href: 'business/index.html', key: 'business', sub: [
    ['01', '사업영역 개요', 'business/index.html'],
    ...((C.areas) || []).map((a, i) => [String(i + 1).padStart(2, '0'), a.title, `business/${a.id}/index.html`]),
  ]},
  { label: '고객사례', href: 'clients/index.html', key: 'clients' },
  { label: '뉴스룸', href: 'newsroom/index.html', key: 'newsroom' },
];

function logoHTML() {
  const co = C.company || {};
  return `<a href="${R('index.html')}" class="logo" aria-label="미래아이엔텍 홈">${LOGO_SVG}<span class="logo-kr">${esc(co.name || '미래아이엔텍')}</span></a>`;
}

function renderChrome() {
  const page = document.body.dataset.page || '';
  const co = C.company || {};
  const navHTML = NAV.map(n => {
    const on = page === n.key ? ' class="on" aria-current="page"' : '';
    const sub = n.sub ? `<div class="nav-sub">` + n.sub.map(([no, t, h]) => `<a href="${R(h)}"><span class="n">${no}</span><b>${esc(t)}</b></a>`).join('') + `</div>` : '';
    return `<div class="nav-item"><a href="${R(n.href)}"${on}>${n.label}</a>${sub}</div>`;
  }).join('');
  const mnavHTML = `<div class="mnav" id="mnav"><ol>` +
    NAV.map(n => `<li><a href="${R(n.href)}">${n.label}</a>` + (n.sub ? `<div class="mnav-sub">` + n.sub.slice(1).map(([no, t, h]) => `<a href="${R(h)}">${no} · ${esc(t)}</a>`).join('') + `</div>` : '') + `</li>`).join('') +
    `<li><a href="${R('contact/index.html')}">문의하기</a></li></ol>` +
    `<div class="mnav-foot">T. ${esc(co.tel || '')}<br><a href="mailto:${esc(co.email || '')}">${esc(co.email || '')}</a></div></div>`;
  $('#hdr-mount').innerHTML = `<header class="hdr" id="hdr"><div class="wrap hdr-in">${logoHTML()}<nav class="nav" aria-label="주 메뉴">${navHTML}<a href="${R('contact/index.html')}" class="nav-cta">문의하기</a></nav><button class="burger" id="burger" aria-label="메뉴" aria-expanded="false"><span></span><span></span></button></div></header>` + mnavHTML;
  $('#ftr-mount').innerHTML = `<footer class="ftr"><div class="wrap">
    <div class="ftr-top"><nav class="ftr-nav" aria-label="푸터 메뉴">
      <a href="${R('about/index.html')}">회사소개</a><a href="${R('business/index.html')}">사업영역</a><a href="${R('clients/index.html')}">고객사례</a><a href="${R('newsroom/index.html')}">뉴스룸</a><a href="${R('contact/index.html')}">문의하기</a><a href="${R('privacy/index.html')}">개인정보처리방침</a>
    </nav></div>
    <div class="ftr-bot"><span>© ${new Date().getFullYear()} MIRAE I&amp;N TECH CO., LTD. ALL RIGHTS RESERVED.</span><span>대표이사 ${esc(co.ceo || '')} · ${esc(co.address || '')} · T. ${esc(co.tel || '')}</span></div>
  </div></footer>`;
  // 파비콘 (로고 이미지)
  if (co.logo && co.logo.src) {
    const l = document.createElement('link');
    l.rel = 'icon';
    l.type = co.logo.src.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
    l.href = R(co.logo.src);
    document.head.appendChild(l);
  }
}

function bindChrome() {
  /* ── Header (원본 로직 그대로) ── */
  const hdr = $('#hdr');
  const chromePage = document.body.dataset.page;
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY;
    hdr.classList.toggle('solid', chromePage === 'article' || y > innerHeight * 0.85);
    hdr.classList.toggle('hide', y > lastY && y > innerHeight && !document.body.classList.contains('menu-open'));
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  $('#burger').onclick = () => { const o = document.body.classList.toggle('menu-open'); $('#burger').setAttribute('aria-expanded', o); };
  $$('#mnav a').forEach(a => a.onclick = () => document.body.classList.remove('menu-open'));
  /* ── Clock (원본 로직 그대로) ── */
  const clk = $('#clock');
  if (clk) {
    const tick = () => { clk.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Seoul', hour12: false }); };
    tick(); setInterval(tick, 1000);
  }
}

/* ── Reveal + counters (원본 로직 그대로, 렌더 후 재관찰 가능하게 확장) ── */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('on'); io.unobserve(e.target);
}), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
function observeRv(scope = document) {
  $$('.rv, .cycle, .viz', scope).filter(el => !el.classList.contains('on')).forEach(el => io.observe(el));
}
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.count, t0 = performance.now(), dur = 1400;
  const step = t => { const k = Math.min(1, (t - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - k, 3))); el.textContent = String(v).padStart(2, '0'); if (k < 1) requestAnimationFrame(step); };
  reduce ? el.textContent = String(to).padStart(2, '0') : requestAnimationFrame(step);
  cio.unobserve(el);
}), { threshold: 0.5 });
function bindCounters(scope = document) { $$('[data-count]', scope).forEach(el => cio.observe(el)); }

/* ── Hero canvas: lattice of nodes with travelling packets (원본 그대로) ── */
function heroInit() {
  const cv = $('#heroCanvas'); if (!cv) return;
  const cx = cv.getContext('2d');
  let W, H, dpr, nodes = [], edges = [], packets = [], t0 = performance.now();
  let mx = 0.7, my = 0.5, tmx = 0.7, tmy = 0.5;
  function build() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    nodes = []; edges = []; packets = [];
    const cols = W < 760 ? 9 : 16, rows = W < 760 ? 14 : 10;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const hot = Math.random() < 0.14;
      nodes.push({ gx: i / (cols - 1) - 0.5, gz: j / (rows - 1) - 0.5, h: hot ? 0.04 + Math.random() * 0.22 : 0, hot, ph: Math.random() * 6.28, i, j });
    }
    const idx = (i, j) => i * rows + j;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      if (i < cols - 1) edges.push([idx(i, j), idx(i + 1, j)]);
      if (j < rows - 1) edges.push([idx(i, j), idx(i, j + 1)]);
    }
    for (let k = 0; k < (W < 760 ? 10 : 22); k++) packets.push(newPacket());
  }
  function newPacket() {
    const e = edges[(Math.random() * edges.length) | 0];
    return { e, p: Math.random(), v: 0.004 + Math.random() * 0.01 };
  }
  function proj(n, t) {
    const rot = -0.62 + (mx - 0.5) * 0.25 + Math.sin(t * 0.00005) * 0.05;
    const tilt = 0.9 + (my - 0.5) * 0.12;
    const S = Math.max(W, H) * 1.35;
    const x = n.gx * Math.cos(rot) - n.gz * Math.sin(rot);
    const z = n.gx * Math.sin(rot) + n.gz * Math.cos(rot);
    const wave = Math.sin(n.gx * 6 + t * 0.0006) * Math.cos(n.gz * 5 + t * 0.0004) * 0.012;
    const y = -(n.h * (0.85 + 0.15 * Math.sin(t * 0.001 + n.ph))) + wave;
    const persp = 1 / (1.6 + z * 0.9);
    return { x: W * (W < 760 ? 0.5 : 0.66) + x * S * persp, y: H * 0.56 + (z * Math.cos(tilt) * 0.55 + y) * S * persp, s: persp, z };
  }
  function draw(t) {
    mx += (tmx - mx) * 0.04; my += (tmy - my) * 0.04;
    cx.clearRect(0, 0, W, H);
    const P = nodes.map(n => proj(n, t));
    const B = nodes.map(n => n.hot ? proj({ ...n, h: 0 }, t) : null);
    cx.lineWidth = 1;
    for (const [a, b] of edges) {
      const pa = P[a], pb = P[b];
      const al = Math.max(0, Math.min(0.16, 0.2 - (pa.z + 0.5) * 0.12));
      cx.strokeStyle = `rgba(244,244,241,${al})`;
      cx.beginPath(); cx.moveTo(pa.x, pa.y); cx.lineTo(pb.x, pb.y); cx.stroke();
    }
    nodes.forEach((n, k) => {
      if (!n.hot) return;
      const p = P[k], b = B[k];
      const g = cx.createLinearGradient(0, b.y, 0, p.y);
      g.addColorStop(0, `rgba(${ACC},0)`); g.addColorStop(1, `rgba(${ACC},.55)`);
      cx.strokeStyle = g; cx.lineWidth = 1;
      cx.beginPath(); cx.moveTo(b.x, b.y); cx.lineTo(p.x, p.y); cx.stroke();
      cx.fillStyle = `rgba(${ACC},.95)`;
      const r = 2.2 * p.s * 1.6;
      cx.fillRect(p.x - r, p.y - r, r * 2, r * 2);
    });
    nodes.forEach((n, k) => {
      if (n.hot) return;
      const p = P[k];
      cx.fillStyle = `rgba(244,244,241,${0.18 + p.s * 0.2})`;
      cx.fillRect(p.x - 1, p.y - 1, 2, 2);
    });
    for (const pk of packets) {
      pk.p += reduce ? 0 : pk.v;
      if (pk.p >= 1) { Object.assign(pk, newPacket(), { p: 0 }); }
      const a = P[pk.e[0]], b = P[pk.e[1]];
      const x = a.x + (b.x - a.x) * pk.p, y = a.y + (b.y - a.y) * pk.p;
      const tx = a.x + (b.x - a.x) * Math.max(0, pk.p - 0.35), ty = a.y + (b.y - a.y) * Math.max(0, pk.p - 0.35);
      const g = cx.createLinearGradient(tx, ty, x, y);
      g.addColorStop(0, `rgba(${ACC},0)`); g.addColorStop(1, `rgba(${ACC},.9)`);
      cx.strokeStyle = g; cx.lineWidth = 1.5;
      cx.beginPath(); cx.moveTo(tx, ty); cx.lineTo(x, y); cx.stroke();
    }
  }
  let running = true;
  new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running) loop(); }).observe(cv);
  function loop(t = performance.now()) { draw(reduce ? 0 : t - t0); if (running && !reduce) requestAnimationFrame(loop); }
  addEventListener('mousemove', e => { tmx = e.clientX / innerWidth; tmy = e.clientY / innerHeight; }, { passive: true });
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { build(); if (reduce) draw(0); }, 150); });
  build(); loop();
  requestAnimationFrame(() => setTimeout(() => $('.hero').classList.add('in'), 120));
}

/* ── Tech canvas: orbital precision rings (원본 그대로) ── */
function techInit() {
  const cv = $('#techCanvas'); if (!cv) return;
  const cx = cv.getContext('2d');
  let W, H, dpr, pts = [];
  function build() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pts = [];
    const N = 900;
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.39996;
      pts.push([Math.cos(th) * r, y, Math.sin(th) * r]);
    }
  }
  function draw(t) {
    cx.clearRect(0, 0, W, H);
    const R2 = Math.min(W, H) * 0.34, ox = W / 2, oy = H / 2;
    const a = t * 0.00012, tilt = 0.42;
    const rings = [[1.28, 0.2, 1], [1.46, -0.5, 0.6], [1.12, 1.1, 0.45]];
    rings.forEach(([rr, inc, al], ri) => {
      cx.strokeStyle = `rgba(244,244,241,${0.1 * al + 0.04})`; cx.lineWidth = 1;
      cx.beginPath();
      for (let k = 0; k <= 120; k++) {
        const th = k / 120 * Math.PI * 2;
        let x = Math.cos(th) * rr, y = 0, z = Math.sin(th) * rr;
        const y2 = y * Math.cos(inc) - z * Math.sin(inc), z2 = y * Math.sin(inc) + z * Math.cos(inc);
        const px = ox + x * R2, py = oy + (y2 * Math.cos(tilt) - z2 * Math.sin(tilt) * 0.35) * R2;
        k ? cx.lineTo(px, py) : cx.moveTo(px, py);
      }
      cx.stroke();
      const th = t * 0.0004 * (ri % 2 ? -1 : 1) + ri * 2;
      let x = Math.cos(th) * rr, z = Math.sin(th) * rr;
      const y2 = -z * Math.sin(inc), z2 = z * Math.cos(inc);
      const px = ox + x * R2, py = oy + (y2 * Math.cos(tilt) - z2 * Math.sin(tilt) * 0.35) * R2;
      cx.fillStyle = ri === 0 ? `rgb(${ACC})` : 'rgba(244,244,241,.9)';
      cx.fillRect(px - 3, py - 3, 6, 6);
    });
    for (const [x0, y0, z0] of pts) {
      let x = x0 * Math.cos(a) - z0 * Math.sin(a), z = x0 * Math.sin(a) + z0 * Math.cos(a), y = y0;
      const y2 = y * Math.cos(tilt) - z * Math.sin(tilt), z2 = y * Math.sin(tilt) + z * Math.cos(tilt);
      const d = (z2 + 1) / 2;
      const band = Math.abs(y0) < 0.05 || Math.abs(Math.atan2(z0, x0) % 0.785) < 0.02;
      if (band && d > 0.3) cx.fillStyle = `rgba(${ACC},${0.3 + d * 0.7})`;
      else cx.fillStyle = `rgba(244,244,241,${0.06 + d * 0.5})`;
      const s = 0.8 + d * 1.4;
      cx.fillRect(ox + x * R2 - s / 2, oy + y2 * R2 - s / 2, s, s);
    }
    cx.strokeStyle = 'rgba(244,244,241,.12)';
    cx.beginPath(); cx.moveTo(ox - R2 * 1.6, oy); cx.lineTo(ox - R2 * 1.2, oy); cx.moveTo(ox + R2 * 1.2, oy); cx.lineTo(ox + R2 * 1.6, oy);
    cx.moveTo(ox, oy - R2 * 1.45); cx.lineTo(ox, oy - R2 * 1.15); cx.moveTo(ox, oy + R2 * 1.15); cx.lineTo(ox, oy + R2 * 1.45); cx.stroke();
    cx.font = '10px "JetBrains Mono", monospace'; cx.fillStyle = 'rgba(140,151,146,.9)';
    cx.fillText('LAT ' + (Math.sin(a) * 90).toFixed(3), ox + R2 * 1.2, oy - 8);
    cx.fillText('SYNC 100.000%', ox - R2 * 1.6, oy + 16);
  }
  let running = false, t0 = performance.now();
  new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was) loop(); }).observe(cv);
  function loop(t = performance.now()) { draw(reduce ? 0 : t - t0); if (running && !reduce) requestAnimationFrame(loop); }
  addEventListener('resize', () => { build(); draw(performance.now() - t0); });
  build(); draw(0);
}

/* ═══════ 페이지 렌더러 (content.js 기반 — 관리자 페이지 이관 대상 데이터) ═══════ */

function renderSlogan() {
  const s = C.slogan || {}; if (!$('.hero')) return;
  const eb = $('.hero .eyebrow'); if (eb && s.en) eb.textContent = s.en;
  const l1 = $('.hero h1 .ln:nth-child(1)>span'); if (l1 && s.kr1) l1.textContent = s.kr1;
  const l2 = $('.hero h1 .ln:nth-child(2)>span'); if (l2 && s.kr2) l2.innerHTML = `<em>${esc(s.kr2em)}</em>${esc(s.kr2)}`;
  const sub = $('.hero-sub'); if (sub && s.sub) sub.textContent = s.sub;
}

function renderMarquee(el1, el2) {
  const cl = C.clients || {};
  const fill = (el, arr) => { if (!el) return; const h = arr.map(n => `<span>${esc(n)}</span>`).join(''); el.innerHTML = h + h; };
  fill(el1, cl.row1 || []); fill(el2, cl.row2 || []);
}

function renderFacts(el) {
  if (!el) return;
  el.innerHTML = (C.metrics || []).map((m, i) =>
    `<div class="fact rv d${i || ''}"><div class="k">${esc(m.k)}</div><div class="v">${m.prefix ? esc(m.prefix) : ''}${m.static ? esc(m.v) : `<span data-count="${esc(m.v)}">0</span>`}${m.suffix ? `<small>${esc(m.suffix)}</small>` : ''}</div><div class="d">${esc(m.d)}</div></div>`
  ).join('');
  observeRv(el); bindCounters(el);
}

const GLYPH = {
  'g-a': '<i class="a1"></i><i class="a2"></i>',
  'g-b': '<i class="b1"></i><i class="b2"></i><i class="b3"></i>',
  'g-c': '<i class="c1"></i><i class="c2"></i>',
  'g-d': '<i class="d1"></i><i class="d2"></i><i class="d3"></i>',
  'g-e': '<i class="e1"></i><i class="e2"></i><i class="e3"></i>',
  'g-f': '<i class="f1"></i><i class="f2"></i><i class="f3"></i>',
};

function renderBizCards(el, hubCell = false) {
  if (!el) return;
  let html = (C.areas || []).map((a, i) => `<a class="biz-cell rv d${(i % 3) || ''}" href="${R(`business/${a.id}/index.html`)}" aria-label="${esc(a.title)} 상세 보기">
    <div class="biz-top"><span class="biz-no">${esc(a.no)}</span><span class="biz-tag">${esc(a.tag)}</span></div>
    <div class="glyph ${a.glyph}" aria-hidden="true">${GLYPH[a.glyph] || ''}</div>
    <h3><small>${esc(a.en)}</small>${esc(a.title)}</h3>
    <p>${esc(a.short)}</p>
    <span class="biz-ai">AI with Future Tech Lab</span>
  </a>`).join('');
  if (hubCell) html += `<div class="biz-cell rv d2">
    <div class="biz-top"><span class="biz-no">＋</span><span class="biz-tag">HUB</span></div>
    <div class="glyph g-a" aria-hidden="true">${GLYPH['g-a']}</div>
    <h3><small>Future Technology Research Center</small>미래기술연구소</h3>
    <p>다섯 개 사업영역 전체에 AI 기술을 불어넣는 허브. 축적된 데이터와 노하우를 학습해 다시 현장으로 돌려보냅니다.</p>
    <a class="biz-ai" style="cursor:pointer" href="${R((C.hub && C.hub.linkHref) || 'about/index.html#lab')}">미래기술연구소 자세히 보기 →</a>
  </div>`;
  el.innerHTML = html; observeRv(el);
}

function buildHubConn(svg) {
  const w = svg.clientWidth, h = svg.clientHeight;
  if (!w || !h) return;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  let inner = '';
  for (let i = 0; i < 5; i++) {
    const x = Math.round(w * (i + 0.5) / 5);
    inner += `<line x1="${x}" y1="0" x2="${x}" y2="${h}"></line>`;
    inner += `<rect class="port" x="${x - 3}" y="0" width="6" height="6"></rect>`;
    inner += `<circle class="pkt" cx="${x}" r="2.5" cy="0"><animate attributeName="cy" values="0;${h}" dur="${(2.2 + i * 0.35).toFixed(2)}s" begin="${(i * 0.5).toFixed(2)}s" repeatCount="indefinite"></animate></circle>`;
  }
  svg.innerHTML = inner;
}

function renderHub(bandEl, svgEl) {
  const hb = C.hub; if (!hb) return;
  if (bandEl) bandEl.innerHTML = `<div class="hb-in">
      <span class="hb-tag"><span class="live"></span>${esc(hb.tag)}</span>
      <h3>${hb.titleHtml}</h3>
      <p class="hb-desc">${esc(hb.desc)}</p>
      <a class="hb-link" href="${R(hb.linkHref)}">${esc(hb.linkLabel)} <span class="arr"></span></a></div>`;
  if (svgEl) requestAnimationFrame(() => buildHubConn(svgEl));
}

function renderFlame() {
  const f = C.flame; if (!f) return;
  const set = (sel, html) => { const el = $(sel); if (el) el.innerHTML = html; };
  set('#flameEyebrow', esc(f.eyebrow));
  set('#flameKicker', esc(f.kicker));
  set('#flameName', esc(f.name));
  set('#flameSub', esc(f.sub));
  set('#flameDesc', esc(f.desc));
  set('#flameFeats', f.features.map(([n, t, d], i) => `<div class="rv d${(i % 4) || ''}"><span class="mono">${esc(n)}</span><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join(''));
  set('#flameBadges', f.badges.map(([s, b], i) => `<div class="fbadge b${i + 1}"><span class="dot" aria-hidden="true"></span><div><small>${esc(s)}</small><b>${esc(b)}</b></div></div>`).join(''));
  const addr = $('.ui-addr'); if (addr && f.mockAddr) addr.textContent = f.mockAddr;
}

function renderQuotes(el, list) {
  if (!el) return;
  el.innerHTML = list.map((q, i) => `<div class="q-card rv d${(i % 3) || ''}"><div class="q-mark" aria-hidden="true">“</div><p class="q-text">${esc(q.text)}</p><div class="q-meta"><span class="q-who">${esc(q.who)}</span><span class="q-tag">${esc(q.tag)}</span></div></div>`).join('');
  observeRv(el);
}

function newsCard(p, i = 0) {
  return `<a class="news-card rv d${(i % 3) || ''}" href="${R(`newsroom/article.html?id=${encodeURIComponent(p.id)}`)}">
    <div class="nc-top"><span>${esc(p.date)}</span><span class="nc-tag">${esc(p.cat)}</span></div>
    <h3>${esc(p.title)}</h3><p class="nc-ex">${esc(p.excerpt)}</p>
    <span class="nc-more">Read More <span class="arr"></span></span></a>`;
}

function renderNewsroom() {
  /* 필터·주요기사 제거 요청에 따라 전체 글을 카드 그리드로만 노출 */
  const news = C.news || [];
  const grid = $('#newsGrid'); if (!grid) return;
  grid.innerHTML = news.map((p, i) => newsCard(p, i)).join('');
  observeRv(grid);
}

function renderArticle() {
  if (!$('#aBody')) return;
  const id = new URLSearchParams(location.search).get('id');
  const news = C.news || [];
  const p = news.find(n => n.id === id) || news[0];
  if (!p) { $('#aBody').innerHTML = '<p class="dim">글을 찾을 수 없습니다.</p>'; return; }
  document.title = `${p.title} | 미래아이엔텍 뉴스룸`;
  $('#aMeta').innerHTML = `<span class="cat">${esc(p.cat)}</span><span>${esc(p.date)}</span><span>Newsroom — Mirae I&amp;N Tech</span>`;
  $('#aTitle').textContent = p.title;
  $('#aBody').innerHTML = (p.body && p.body.length) ? p.body.map(t => `<p>${esc(t)}</p>`).join('') : '<p class="dim">등록된 본문이 없습니다.</p>';
  const idx = news.indexOf(p), prev = news[idx + 1], next = news[idx - 1];
  $('#aNav').innerHTML = `<a class="btn" href="${R('newsroom/index.html')}">목록으로 돌아가기 <span class="arr"></span></a>
    <div style="display:flex;gap:24px;align-items:center;font-family:var(--mono);font-size:12px;letter-spacing:.05em;text-transform:uppercase">
    ${prev ? `<a href="${R('newsroom/article.html?id=' + encodeURIComponent(prev.id))}">← Prev</a>` : ''}
    ${next ? `<a href="${R('newsroom/article.html?id=' + encodeURIComponent(next.id))}">Next →</a>` : ''}</div>`;
}

function renderCinfo(el) {
  if (!el) return; const co = C.company || {};
  el.innerHTML = `
   <div><div class="k">Address</div><div class="v">${esc(co.address || '')}<small>${esc(co.addressEn || '')}</small></div></div>
   <div><div class="k">Tel</div><a class="v" href="tel:${esc((co.tel || '').replace(/-/g, ''))}">${esc(co.tel || '')}</a></div>
   <div><div class="k">Fax</div><div class="v">${esc(co.fax || '')}</div></div>
   <div><div class="k">Email</div><a class="v" href="mailto:${esc(co.email || '')}">${esc(co.email || '')}</a></div>`;
}

function renderBizDetail() {
  const id = document.body.dataset.area;
  const a = (C.areas || []).find(x => x.id === id); if (!a) return;
  const areas = C.areas, total = areas.length;
  const next = areas[(areas.indexOf(a) + 1) % total], prev = areas[(areas.indexOf(a) - 1 + total) % total];
  document.title = `${a.title} | 사업영역 | 미래아이엔텍`;
  $('#phEyebrow').textContent = `Business — ${a.no} / ${String(total).padStart(2, '0')}`;
  $('#phTitle').innerHTML = `${esc(a.title)}<span class="ph-en">${esc(a.en)}</span>`;
  $('#phSub').textContent = a.short;
  $('#phFoot').innerHTML = `<span>Area <b>${esc(a.no)} / ${String(total).padStart(2, '0')}</b></span><span>AI <b>with Future Tech Lab</b></span><span>Mirae I&amp;N Tech</span>`;
  $('#ovTitle').textContent = a.overviewTitle;
  $('#ovLead').textContent = a.overview;
  if ($('#scope')) $('#scope').innerHTML = a.scope.map(([t, d], i) => `<li class="rv d${(i % 2) || ''}"><span class="n">${String(i + 1).padStart(2, '0')}</span><div><b>${esc(t)}</b><span>${esc(d)}</span></div></li>`).join('');
  renderQuotes($('#quote'), a.quotes || []);
  $('#ctaTitle').innerHTML = `${esc(a.title)}이 궁금하신가요?<br><em>지금 이야기</em>를 시작해 보세요.`;
  $('#ctaBtn').innerHTML = `문의하기 <span class="arr"></span>`;
  $('#pnNav').innerHTML = `<a href="${R(`business/${prev.id}/index.html`)}"><span class="pn-k"><span class="arr" style="transform:rotate(180deg)"></span>Prev</span><b>${esc(prev.title)}</b></a><a class="next" href="${R(`business/${next.id}/index.html`)}"><span class="pn-k">Next<span class="arr"></span></span><b>${esc(next.title)}</b></a>`;
  if ($('#labShow')) renderLabShow(); // 솔루션 비즈니스 페이지의 미래기술연구소 쇼케이스
  renderSteg(); // STEG ITSM · ITAM 쇼케이스
}

/* ── 미래기술연구소 쇼케이스 (솔루션 비즈니스 상세) ──
   FLAME·ITSM을 메인 페이지 플레임과 동일한 구조(좌 텍스트 + 우 노트북 목업 + 플로팅 배지)로 렌더 */
const ITS_MENUS = ['프로세스 관리', 'SLA 관리', '인력관리', '통계 및 보고서', '모니터링', '대시보드', '시스템 관리'];
const SCREENS = {
  flame: `<div class="ui-body">
      <aside class="ui-side"><i class="on"></i><i></i><i></i><i></i><i></i></aside>
      <div class="ui-main">
        <div class="ui-kpis">
          <div class="ui-kpi"><small>Projects</small><b>24</b></div>
          <div class="ui-kpi"><small>Pipeline</small><b>68</b></div>
          <div class="ui-kpi"><small>Attendance</small><b>98.2%</b></div>
        </div> <!-- SAMPLE — 목업 수치 -->
        <div class="ui-chart"><i style="height:34%"></i><i style="height:52%"></i><i class="hot" style="height:78%"></i><i style="height:46%"></i><i class="hot" style="height:88%"></i><i style="height:56%"></i><i style="height:70%"></i><i class="hot" style="height:74%"></i><i style="height:58%"></i><i style="height:66%"></i></div>
        <div class="ui-table">
          <div class="ui-tr"><span>Project</span><span>Client</span><span>Status</span></div>
          <div class="ui-tr"><span>통합 업무 플랫폼 고도화</span><span>－</span><span class="ui-pill hot">진행</span></div>
          <div class="ui-tr"><span>파이프라인 리포트 v2</span><span>－</span><span class="ui-pill">대기</span></div>
          <div class="ui-tr"><span>근태 자동화 모듈</span><span>－</span><span class="ui-pill">완료</span></div>
        </div> <!-- SAMPLE — 목업 데이터 -->
      </div>
    </div>`,
  itsm: `<div class="itsm-ui">
      <div class="itsm-side">
        <div class="h"><b>IT</b><span>ITSM</span></div>
        <div class="cat">Menu</div>
        ${ITS_MENUS.map(m => `<div class="itsm-item${m === 'SLA 관리' ? ' on' : ''}"><i></i>${esc(m)}${m === '통계 및 보고서' || m === '모니터링' ? '' : '<span class="ar">›</span>'}</div>`).join('')}
      </div>
      <div class="itsm-main">
        <div class="itsm-h">SLA 관리 — 이번 분기</div>
        <div class="itsm-gauge"><i></i></div>
        <div class="itsm-row"><span>서비스 가용률</span><b>99.2%</b></div> <!-- SAMPLE — 목업 수치 -->
        <div class="itsm-row"><span>미해결 이슈</span><b>3건</b></div> <!-- SAMPLE — 목업 수치 -->
        <div class="itsm-row"><span>월간 유지관리 리포트</span><b>완료</b></div> <!-- SAMPLE — 목업 수치 -->
      </div>
    </div>`,
  egitsm: `<div class="eg-main">
      <div class="eg-h"><span class="eg-logo"></span><b>처리현황</b><span class="eg-map">나의처리현황(Map)</span></div>
      <div class="eg-checks">${['서비스요청관리', '장애관리', '변경관리', '문제관리', '작업관리', 'IT운영업무관리'].map((m, i) => `<span class="eg-ck${i === 0 ? ' on' : ''}">${i === 0 ? '✓' : '□'} ${esc(m)}</span>`).join('')}</div>
      <div class="eg-flow"><span>접수</span>›<span>처리</span>›<span>승인</span>›<span>완료</span></div> <!-- SAMPLE — 목업 -->
      <div class="eg-rows"><div><i style="background:var(--accent)"></i>SR-1042 · 계정 권한 요청<span class="ui-pill hot">진행</span></div><div><i style="background:#B9C0BB"></i>SR-1038 · 자산 반납<span class="ui-pill">대기</span></div><div><i style="background:var(--accent-deep)"></i>SR-1031 · 장애 접수<span class="ui-pill">완료</span></div></div> <!-- SAMPLE — 목업 데이터 -->
    </div>`,
  egitam: `<div class="eg-main">
      <div class="eg-h"><span class="eg-logo"></span><b>자산 현황</b><span class="eg-map">Inventory</span></div>
      <div class="pm-bars" style="height:40px"><i style="height:50%"></i><i style="height:72%"></i><i class="hot" style="height:96%"></i><i style="height:60%"></i><i style="height:82%"></i><i style="height:44%"></i><i style="height:66%"></i></div> <!-- SAMPLE — 목업 -->
      <div class="eg-rows"><div><i style="background:var(--accent)"></i>HW · 노트북 142대<span class="ui-pill hot">운용</span></div><div><i style="background:#B9C0BB"></i>SW · 라이선스 갱신 D-21<span class="ui-pill">예정</span></div><div><i style="background:var(--accent-deep)"></i>자산 이력 리포트<span class="ui-pill">완료</span></div></div> <!-- SAMPLE — 목업 데이터 -->
    </div>`,
};

function laptopShell(addr, screenInner, badges) {
  return `<div class="laptop" aria-hidden="true">
      <div class="laptop-screen"><div class="screen-ui">
        <div class="ui-top"><i></i><i></i><i></i><span class="ui-addr">${esc(addr || '')}</span></div>
        ${screenInner}
      </div></div>
      <div class="laptop-base"></div>
    </div>
    <div class="fbadges">${(badges || []).map(([s, b], i) => `<div class="fbadge b${i + 1}"><span class="dot" aria-hidden="true"></span><div><small>${esc(s)}</small><b>${esc(b)}</b></div></div>`).join('')}</div>`;
}

function renderLabShow() {
  const S = C.labShowcase; if (!S || !$('#labShow')) return;
  const set = (sel, v, html) => { const el = $(sel); if (el) html ? el.innerHTML = v : el.textContent = v; };
  set('#labEyebrow', S.eyebrow || '');
  set('#labBig', S.big || '');
  set('#labKick', S.kicker || '');
  set('#labDesc2', S.desc || '');
  const fw = S.fw;
  const rows = S.products.map((p, i) => {
    const feats = p.features === 'main' ? (C.flame || {}).features : p.features;
    return `<div class="lprod rv">
      <div class="lp-txt">
        <span class="mono">${esc(p.no)}</span>
        <div class="lp-name">${esc(p.name)}</div>
        <div class="lp-en">${esc(p.en)}</div>
        <p>${esc(p.desc)}</p>
        ${p.target ? `<span class="lp-target">${esc(p.target)}</span>` : ''}
      </div>
      <div class="lp-vis">${laptopShell(p.addr, SCREENS[p.screen] || '', p.badges)}</div>
      ${feats && feats.length ? `<div class="lp-feats"><div class="feat light">${feats.map(([n, t, d]) => `<div><span class="mono">${esc(n)}</span><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join('')}</div></div>` : ''}
    </div>`;
  }).join('');
  $('#labShow').innerHTML = (fw ? `<div class="lab rv" style="margin-top:0">
      <span class="mono">${esc(fw.no)}</span><h4>${esc(fw.name)}</h4><p>${esc(fw.desc)}</p></div>` : '') + rows;
  observeRv($('#labShow'));
}

/* ── STEG 솔루션 쇼케이스 (솔루션 비즈니스 상세 — 에스티이지 제품 구축 납품) ── */
function renderSteg() {
  const S = (C.steg || {}).items; if (!S || !$('#stegRows')) return;
  $('#stegRows').innerHTML = S.map(p => `<div class="lprod rv">
      <div class="lp-txt">
        <span class="mono">${esc(p.no)}</span>
        <div class="lp-name">${esc(p.name)}</div>
        <div class="lp-en">${esc(p.en)}</div>
        <h3 class="lp-head">${esc(p.head)}</h3>
        <p>${esc(p.desc)}</p>
        <span class="lp-target">${esc(p.target)}</span>
      </div>
      <div class="lp-vis">${laptopShell(p.addr, SCREENS[p.screen] || '', p.badges)}</div>
      <div class="lp-feats"><div class="feat light">${p.features.map(([n, t, d]) => `<div><span class="mono">${esc(n)}</span><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join('')}</div></div>
    </div>`).join('');
  observeRv($('#stegRows'));
}

function renderLab() {
  if (!$('#labEyebrow')) return;
  const A = (C.about || {}).lab || {};
  const set = (sel, v, html) => { const el = $(sel); if (el) html ? el.innerHTML = v : el.textContent = v; };
  set('#labEyebrow', A.eyebrow || '');
  set('#labTitle', A.titleHtml || '', true);
  set('#labDesc', A.desc || '');
  const lf = $('#labFeat');
  if (lf) lf.innerHTML = (A.features || []).map(([n, t, d], i) => `<div class="rv d${(i % 4) || ''}"><span class="mono">${esc(n)}</span><h4>${esc(t)}</h4><p>${esc(d)}</p></div>`).join('');
}

function renderAbout() {
  const A = C.about || {};
  const set = (sel, v, html) => { const el = $(sel); if (el) html ? el.innerHTML = v : el.textContent = v; };
  set('#visionTitle', A.visionTitle || '', true);
  set('#aboutLead', A.lead || '');
  set('#aboutLead2', A.lead2 || '');
  const pr = $('#principles');
  if (pr) pr.innerHTML = (A.principles || []).map(([n, t, d], i) => `<li class="comp-item rv d${(i % 3) || ''}"><span class="n">${esc(n)}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></li>`).join('');
  renderLab();
  set('#howTitle', A.howTitle || '오시는 길');
  set('#howDesc', A.howDesc || '');
  const co = C.company || {};
  const mapAddr = $('#mapAddr'); if (mapAddr) mapAddr.textContent = co.address || '';
  const q = encodeURIComponent((A.mapQuery || co.address || '').trim());
  const ml = $('#mapLinks');
  if (ml) ml.innerHTML = `<a href="https://map.kakao.com/?q=${q}" target="_blank" rel="noopener">카카오맵 길찾기</a><a href="https://map.naver.com/p/search/${q}" target="_blank" rel="noopener">네이버지도 길찾기</a>`;
}

function renderClients() {
  renderMarquee($('#cqm1'), $('#cqm2'));
  const itv = $('#itvList');
  if (itv) itv.innerHTML = (C.interviews || []).map((q, i) => `<div class="itv rv d${(i % 2) || ''}"><div><span class="itv-tag">${esc(q.tag)}</span><span class="itv-area">${esc(q.area)}</span></div><div><p class="q-text">“${esc(q.text)}”</p><div class="q-meta"><span class="q-who">${esc(q.who)}</span><span class="q-tag">Client Story</span></div></div></div>`).join('');
  // 수행 요약 목록은 요청에 따라 제거됨 (content.js — perf는 현재 미사용)
}

function renderContact() {
  const c = C.contact || {}; const co = C.company || {};
  if (!$('#inquiryForm')) return;
  const set = (sel, v) => { const el = $(sel); if (el) el.textContent = v; };
  const setH = (sel, v) => { const el = $(sel); if (el) el.innerHTML = v; };
  set('#phIntro', c.intro || '');
  $('#phTel').textContent = co.tel || ''; $('#phEmail').textContent = co.email || '';
  set('#inqSub', c.inquirySub || '');
  set('#broTitle', c.brochureTitle || '');
  set('#broSub', c.brochureSub || '');
  setH('#privacyBriefHtml', esc(c.privacyLabel || '') + ' — ' + esc(c.privacyBrief || ''));
  setH('#privacyBriefHtml2', esc(c.privacyLabel || '') + ' — ' + esc(c.privacyBrief || ''));
  $('#inquiryForm').addEventListener('submit', e => {
    e.preventDefault();
    /* TODO(백엔드 연동 지점): 문의하기 접수 → 저장 + 영업 담당자 알림 발송. 현재는 프론트 데모 동작만 제공. */
    const d = $('#inqDone');
    d.classList.add('show');
    d.innerHTML = `<b>✓&nbsp;</b>${esc(c.doneInquiry || '접수되었습니다.')}`;
    e.target.reset();
  });
  $('#brochureForm').addEventListener('submit', e => {
    e.preventDefault();
    /* TODO(백엔드 연동 지점): 회사소개서 발송 요청 → 담당자 알림 + 소개서 자동 발송 메일. 현재는 프론트 데모 동작만 제공(다운로드 링크 없음). */
    const d = $('#broDone');
    d.classList.add('show');
    d.innerHTML = `<b>✓&nbsp;</b>${esc(c.doneBrochure || '접수되었습니다.')}`;
    e.target.reset();
  });
}

function renderPrivacy() {
  const P = C.privacy || {}; const el = $('#privacyBody'); if (!el) return;
  el.innerHTML = `<span class="p-updated">Last updated — ${esc(P.updated || '')}</span><p style="margin-top:20px">${esc(P.intro || '')}</p>` +
    (P.sections || []).map(s => `<h3>${esc(s.h)}</h3>` + (s.ps || []).map(t => `<p>${esc(t)}</p>`).join('')).join('') +
    `<div class="p-note">${esc(P.note || '')}</div>`;
}

/* ═══════ 페이지 디스패치 ═══════ */
renderChrome();
bindChrome();
observeRv();
bindCounters();
const page = document.body.dataset.page;
if (document.body.dataset.area) { renderBizDetail(); if ($('#techCanvas')) techInit(); }
else if (page === 'home') {
  renderSlogan(); heroInit();
  renderMarquee($('#mq1'), $('#mq2'));
  renderFacts($('#facts'));
  renderHub($('#hubBand'), $('#hubConn'));
  renderBizCards($('#bizGrid'), false);
  renderFlame();
  renderQuotes($('#quotes'), C.quotes || []);
  const nt = $('#newsTop');
  if (nt) nt.innerHTML = (C.news || []).slice(0, 3).map((p, i) => newsCard(p, i)).join('');
  renderCinfo($('#cinfo'));
}
else if (page === 'about') { renderAbout(); renderFacts($('#facts')); renderCinfo($('#cinfo')); techInit(); }
else if (page === 'business') { renderHub($('#hubBand'), $('#hubConn')); renderBizCards($('#bizGrid'), false); }
else if (page === 'clients') { renderClients(); }
else if (page === 'newsroom') { renderNewsroom(); }
else if (page === 'article') { renderArticle(); }
else if (page === 'contact') { renderContact(); renderCinfo($('#cinfo')); }
else if (page === 'privacy') { renderPrivacy(); }
observeRv();
/* 안전장치: 관찰 실패 대비 일정 시간 후 전체 표시 */
setTimeout(() => { $$('.rv:not(.on)').forEach(el => el.classList.add('on')); }, 2500);
})();
