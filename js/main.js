/* dylanhughes.dev
   The ball in the opening, the ball on the rail, the intro, the tickers, the numbers, the menu.
   No libraries. With JavaScript off the page is still a plain, complete page. */
(function () {
  'use strict';
  var html = document.documentElement;
  var reduced = false, fine = false, narrow = null;
  try { reduced = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  try { fine = matchMedia('(hover: hover) and (pointer: fine)').matches; } catch (e) {}
  try { narrow = matchMedia('(max-width: 900px)'); } catch (e) {}
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };

  /* Split headline words so each one can rise out of its own clip */
  function splitWords(el) {
    var count = 0;
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(function (piece) {
            if (!piece) return;
            if (/^\s+$/.test(piece)) { frag.appendChild(document.createTextNode(' ')); return; }
            var outer = document.createElement('span'); outer.className = 'w';
            var inner = document.createElement('span'); inner.textContent = piece; inner.style.setProperty('--i', count++);
            outer.appendChild(inner); frag.appendChild(outer);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) { walk(child); }
      });
    }
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    walk(el);
  }
  $$('.split').forEach(splitWords);

  /* Tickers: duplicate the row once so the loop is seamless */
  $$('.ticker-in').forEach(function (row) {
    Array.prototype.slice.call(row.children).forEach(function (it) { row.appendChild(it.cloneNode(true)); });
  });

  /* Staged opening */
  var stages = $$('.stage');
  stages.forEach(function (el, i) { el.style.setProperty('--i', i); });
  var onGo = [];
  function go() {
    html.classList.add('go');
    requestAnimationFrame(function () { requestAnimationFrame(function () { stages.forEach(function (el) { el.classList.add('on'); }); }); });
    onGo.forEach(function (f) { f(); });
    try { sessionStorage.setItem('dh-seen', '1'); } catch (e) {}
  }
  var started = false;
  var start = function () { if (!started) { started = true; go(); } };
  if (html.classList.contains('intro')) {
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(start); }
    setTimeout(start, 700);
  } else { setTimeout(start, 0); }

  /* Nav and menu */
  var nav = $('.nav');
  var menu = $('#menu');
  var menuBtn = $('.menu-btn');
  function setMenu(open) {
    if (!menu || !menuBtn) return;
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.textContent = open ? 'Close' : 'Menu';
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () { setMenu(!menu.classList.contains('is-open')); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* Numbers roll like a backglass score */
  function buildOdo(el) {
    var end = parseInt(el.getAttribute('data-count'), 10) || 0;
    var text = end.toLocaleString('en-US');
    el.textContent = '';
    var k = 0;
    text.split('').forEach(function (ch) {
      if (/\d/.test(ch)) {
        var wrap = document.createElement('span'); wrap.className = 'odo';
        var col = document.createElement('span');
        for (var d = 0; d < 10; d++) { var i = document.createElement('i'); i.textContent = d; col.appendChild(i); }
        col.style.transitionDelay = (k++ * 90) + 'ms';
        col.setAttribute('data-d', ch);
        wrap.appendChild(col); el.appendChild(wrap);
      } else { var sep = document.createElement('span'); sep.textContent = ch; el.appendChild(sep); }
    });
    el.setAttribute('aria-label', text);
  }
  function rollOdo(el) {
    $$('.odo > span', el).forEach(function (col) { col.style.transform = 'translateY(-' + (parseInt(col.getAttribute('data-d'), 10) * 10) + '%)'; });
  }
  $$('[data-count]').forEach(buildOdo);

  /* Reveal once */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('on');
      if (en.target.hasAttribute('data-count')) rollOdo(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('.in-view, .band, [data-count]').forEach(function (el) {
    if (io) io.observe(el); else { el.classList.add('on'); if (el.hasAttribute('data-count')) rollOdo(el); }
  });

  /* The ball on the rail: vertical on the left, along the bottom on phones */
  var lane = $('.lane');
  var track = lane && $('.track', lane);
  var ballWrap = lane && $('.ball-wrap', lane);
  var ball = lane && $('.ball', lane);
  var spin = lane && $('.spin', lane);
  var marks = lane ? $$('.mark', lane) : [];
  var navLinks = $$('.nav-links a');
  var trackLen = 0, ballPos = 0, targetPos = 0, spinDeg = 0, current = -1, ticking = false, first = true;
  var markPos = [];
  var open = $('.open');
  var horiz = function () { return !!(narrow && narrow.matches); };

  function docRange() { return Math.max(1, document.documentElement.scrollHeight - window.innerHeight); }
  function measureRail() {
    if (!track) return;
    var h = horiz();
    trackLen = h ? track.clientWidth : track.clientHeight;
    var range = docRange();
    markPos = marks.map(function (m) {
      var target = document.getElementById(m.getAttribute('data-for'));
      if (!target) return null;
      var top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      var frac = clamp(top / range, 0, 1);
      if (h) { m.style.left = (frac * 100) + '%'; m.style.top = ''; }
      else { m.style.top = (frac * 100) + '%'; m.style.left = ''; }
      return frac * trackLen;
    });
    targetPos = (window.pageYOffset / range) * trackLen;
    if (first) { ballPos = targetPos; first = false; renderRail(); }
    liveCheck();
  }
  function renderRail() {
    if (!ballWrap) return;
    var p = ballPos.toFixed(2);
    ballWrap.style.transform = horiz() ? 'translate3d(' + p + 'px,0,0)' : 'translate3d(0,' + p + 'px,0)';
    if (spin) spin.style.transform = 'rotate(' + spinDeg.toFixed(1) + 'deg)';
  }
  function setCurrent(i) {
    if (i === current) return;
    var was = current; current = i;
    marks.forEach(function (m, k) { m.classList.toggle('lit', k === i); });
    var id = i >= 0 ? marks[i].getAttribute('data-for') : '';
    navLinks.forEach(function (a) { a.classList.toggle('here', a.getAttribute('href') === '#' + id); });
    if (was !== -1 && ball && !reduced) { ball.classList.remove('bump'); void ball.offsetWidth; ball.classList.add('bump'); }
  }
  function railStep() {
    var d = targetPos - ballPos;
    if (Math.abs(d) < 0.15) { ballPos = targetPos; renderRail(); ticking = false; }
    else { ballPos += d * (reduced ? 1 : 0.14); spinDeg += d * 0.14 * 6; renderRail(); requestAnimationFrame(railStep); }
    var idx = -1;
    for (var k = 0; k < markPos.length; k++) { if (markPos[k] !== null && ballPos >= markPos[k] - 2) idx = k; }
    setCurrent(idx);
  }
  function liveCheck() {
    if (!lane) return;
    var live = !open || window.pageYOffset > (open.offsetTop + open.offsetHeight - window.innerHeight * 0.55);
    lane.classList.toggle('live', live);
  }
  function onScroll() {
    if (track) {
      targetPos = (window.pageYOffset / docRange()) * trackLen;
      if (!ticking) { ticking = true; requestAnimationFrame(railStep); }
    }
    if (nav) nav.classList.toggle('is-stuck', window.pageYOffset > 8);
    liveCheck();
    parallax();
  }
  if (track) {
    measureRail();
    window.addEventListener('resize', function () { measureRail(); onScroll(); });
    window.addEventListener('load', function () { measureRail(); onScroll(); });
    setTimeout(function () { measureRail(); onScroll(); }, 900);
    setTimeout(function () { measureRail(); onScroll(); }, 2500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  if (nav) nav.classList.toggle('is-stuck', window.pageYOffset > 8);

  /* Parallax on a few images: a small drift, desktop only */
  var pxEls = (!reduced && fine) ? $$('[data-px]') : [];
  function parallax() {
    if (!pxEls.length) return;
    var vh = window.innerHeight;
    pxEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      var c = r.top + r.height / 2 - vh / 2;
      el.style.transform = 'translate3d(0,' + (c * parseFloat(el.getAttribute('data-px'))).toFixed(1) + 'px,0)';
    });
  }
  parallax();

  /* Cursor dot */
  var cur = $('.cursor');
  if (cur && fine && !reduced) {
    var cx = -100, cy = -100, tx = -100, ty = -100, shown = false, curRaf = false;
    var curStep = function () {
      cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
      cur.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
      if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) requestAnimationFrame(curStep); else curRaf = false;
    };
    document.addEventListener('mousemove', function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; cx = tx; cy = ty; cur.style.opacity = '1'; }
      var t = e.target && e.target.closest ? e.target.closest('a, button, [data-magnet]') : null;
      var lab = e.target && e.target.closest ? e.target.closest('[data-cursor]') : null;
      cur.classList.toggle('is-link', !!t);
      cur.classList.toggle('has-label', !!lab);
      if (lab) cur.setAttribute('data-label', lab.getAttribute('data-cursor')); else cur.removeAttribute('data-label');
      if (!curRaf) { curRaf = true; requestAnimationFrame(curStep); }
    });
    document.addEventListener('mouseleave', function () { cur.style.opacity = '0'; shown = false; });
  }

  /* Magnetic buttons */
  if (fine && !reduced) {
    $$('[data-magnet]').forEach(function (el) {
      el.style.transition = 'transform .25s cubic-bezier(.2,.7,.2,1)';
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        el.style.transform = 'translate(' + (dx * 0.18).toFixed(1) + 'px,' + (dy * 0.28).toFixed(1) + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* The playfield: a ball drops into the opening, bounces off the words, and the cursor kicks it */
  var pfTpl = open && $('.pf-ball', open);
  var scoreEl = open && $('.pf-score', open);
  var heroTick = open && $('.ticker-in', open);
  if (open && pfTpl) {
    var balls = [], obstacles = [], bumps = 0, floorY = 0, W = 0;
    var pointer = { x: -9999, y: -9999, on: false };
    var heroVisible = true, running = false, last = 0;
    var tickX = 0, tickHalf = 0, lastScroll = window.pageYOffset, velS = 0;
    var R = horiz() ? 15 : 22;

    function measurePlay() {
      var o = open.getBoundingClientRect();
      W = open.clientWidth;
      var tk = $('.ticker', open);
      floorY = tk ? tk.offsetTop : open.clientHeight;
      obstacles = $$('.open h1 .w, .open .btn, .open .more, .open .portrait-wrap, .open .sticker').map(function (el) {
        var r = el.getBoundingClientRect();
        return { el: el, l: r.left - o.left, t: r.top - o.top, r: r.right - o.left, b: r.bottom - o.top, flash: true };
      });
      if (heroTick) tickHalf = heroTick.scrollWidth / 2;
      R = horiz() ? 15 : 22;
    }
    function makeBall(el, x, y, vx, vy, r) {
      var b = { el: el, spin: $('.spin', el), x: x, y: y, vx: vx, vy: vy, r: r, ang: 0, asleep: false };
      el.classList.add('on'); balls.push(b); return b;
    }
    function hit(o, strength) {
      if (!o.flash) return;
      o.el.classList.add('hit');
      clearTimeout(o.tm); o.tm = setTimeout(function () { o.el.classList.remove('hit'); }, 380);
      if (strength > 80 && scoreEl) { bumps++; scoreEl.firstElementChild.textContent = bumps; scoreEl.classList.add('on'); }
    }
    function physics(b, dt) {
      var g = 1500, rest = 0.6;
      b.vy += g * dt;
      b.vx *= (1 - 0.12 * dt); b.vy *= (1 - 0.02 * dt);
      /* the cursor is a kicker */
      if (pointer.on) {
        var dx = b.x - pointer.x, dy = b.y - pointer.y, d = Math.sqrt(dx * dx + dy * dy), reach = b.r + 70;
        if (d < reach) { var f = (reach - d) / reach; var nx = d ? dx / d : 0, ny = d ? dy / d : -1; b.vx += nx * f * 2600 * dt; b.vy += ny * f * 2600 * dt; b.asleep = false; }
      }
      if (b.asleep) return;
      b.x += b.vx * dt; b.y += b.vy * dt;
      /* walls and floor */
      if (b.x < b.r) { b.x = b.r; b.vx = -b.vx * 0.7; }
      if (b.x > W - b.r) { b.x = W - b.r; b.vx = -b.vx * 0.7; }
      if (b.y > floorY - b.r) { b.y = floorY - b.r; if (b.vy > 40) b.vy = -b.vy * 0.5; else b.vy = 0; b.vx *= (1 - 2.2 * dt); }
      if (b.y < -300) { b.y = -300; b.vy = 0; }
      /* the words, the button, the photo */
      for (var i = 0; i < obstacles.length; i++) {
        var o = obstacles[i];
        var cx = clamp(b.x, o.l, o.r), cy = clamp(b.y, o.t, o.b);
        var ox = b.x - cx, oy = b.y - cy, d2 = ox * ox + oy * oy;
        if (d2 < b.r * b.r) {
          var dd = Math.sqrt(d2), nx, ny;
          if (dd < 0.001) { nx = 0; ny = -1; dd = 0; } else { nx = ox / dd; ny = oy / dd; }
          b.x = cx + nx * b.r; b.y = cy + ny * b.r;
          var vn = b.vx * nx + b.vy * ny;
          if (vn < 0) { b.vx -= (1 + rest) * vn * nx; b.vy -= (1 + rest) * vn * ny; hit(o, -vn); }
          /* nothing rests on top of a word: roll off toward the nearer edge */
          if (ny < -0.9 && Math.abs(b.vy) < 30) { var mid = (o.l + o.r) / 2; b.vx += (b.x < mid ? -1 : 1) * 600 * dt; }
        }
      }
      b.ang += (b.vx * dt) / b.r;
      if (b.y >= floorY - b.r - 0.5 && Math.abs(b.vx) < 6 && Math.abs(b.vy) < 6) { b.vx = 0; b.vy = 0; b.asleep = true; }
      b.el.style.transform = 'translate3d(' + (b.x - b.r).toFixed(1) + 'px,' + (b.y - b.r).toFixed(1) + 'px,0)';
      if (b.spin) b.spin.style.transform = 'rotate(' + (b.ang * 57.3).toFixed(1) + 'deg)';
    }
    function loop(now) {
      if (!heroVisible || document.hidden) { running = false; return; }
      var dt = Math.min(0.032, (now - (last || now)) / 1000); last = now;
      balls.forEach(function (b) { physics(b, dt); });
      /* the ticker under the opening moves faster when you scroll faster */
      if (heroTick && tickHalf) {
        var sy = window.pageYOffset, vel = dt ? (sy - lastScroll) / dt : 0; lastScroll = sy;
        velS += (vel - velS) * 0.08;
        tickX -= (42 + Math.min(Math.abs(velS), 3000) * 0.14) * dt;
        if (tickX <= -tickHalf) tickX += tickHalf;
        heroTick.style.transform = 'translate3d(' + tickX.toFixed(1) + 'px,0,0)';
      }
      requestAnimationFrame(loop);
    }
    function wake() { if (!running && heroVisible) { running = true; last = 0; requestAnimationFrame(loop); } }
    function dropIn(el, r) {
      var h1 = $('h1', open), o = open.getBoundingClientRect(), hr = h1 ? h1.getBoundingClientRect() : null;
      var x = hr ? (hr.left - o.left) + hr.width * (0.35 + Math.random() * 0.4) : W * 0.4;
      return makeBall(el, clamp(x, r + 4, W - r - 4), -r - 20, (Math.random() - 0.5) * 120, 0, r);
    }

    if (reduced) {
      /* no motion: the ball rests at the bottom left of the opening */
      measurePlay();
      pfTpl.style.transform = 'translate3d(' + (24) + 'px,' + (floorY - R * 2 - 2) + 'px,0)';
      pfTpl.classList.add('on');
    } else {
      if (heroTick) heroTick.style.animation = 'none';
      measurePlay();
      onGo.push(function () { setTimeout(function () { measurePlay(); dropIn(pfTpl, R); wake(); }, 150); });
      setTimeout(measurePlay, 1800);
      window.addEventListener('resize', function () { measurePlay(); balls.forEach(function (b) { b.r = b.el.classList.contains('extra') ? Math.round(R * 0.68) : R; b.asleep = false; }); wake(); });
      window.addEventListener('load', measurePlay);
      if (io) { new IntersectionObserver(function (es) { heroVisible = es[0].isIntersecting; if (heroVisible) wake(); }, { threshold: 0 }).observe(open); }
      document.addEventListener('visibilitychange', function () { if (!document.hidden) wake(); });
      var setPointer = function (x, y) { var o = open.getBoundingClientRect(); pointer.x = x - o.left; pointer.y = y - o.top; pointer.on = true; wake(); };
      open.addEventListener('mousemove', function (e) { setPointer(e.clientX, e.clientY); });
      open.addEventListener('mouseleave', function () { pointer.on = false; });
      open.addEventListener('touchstart', function (e) { var t = e.touches[0]; setPointer(t.clientX, t.clientY); }, { passive: true });
      open.addEventListener('touchmove', function (e) { var t = e.touches[0]; setPointer(t.clientX, t.clientY); }, { passive: true });
      open.addEventListener('touchend', function () { pointer.on = false; });
      window.addEventListener('scroll', function () { if (heroVisible) wake(); }, { passive: true });

      /* Multiball. You know the code. */
      var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], at = 0;
      document.addEventListener('keydown', function (e) {
        at = (e.keyCode === code[at]) ? at + 1 : (e.keyCode === code[0] ? 1 : 0);
        if (at !== code.length) return;
        at = 0;
        measurePlay();
        var extras = [];
        for (var i = 0; i < 6; i++) {
          var el = pfTpl.cloneNode(true); el.classList.add('extra'); el.classList.remove('on'); open.appendChild(el);
          var b = makeBall(el, R + 10 + Math.random() * (W - R * 2 - 20), -30 - i * 40, (Math.random() - 0.5) * 500, 0, Math.round(R * 0.68));
          extras.push(b);
        }
        if (scoreEl) { scoreEl.classList.add('on'); scoreEl.innerHTML = '<b>multiball</b>'; setTimeout(function () { scoreEl.innerHTML = '<b>' + bumps + '</b> bumps'; }, 2200); }
        wake();
        setTimeout(function () {
          extras.forEach(function (b) { b.el.classList.remove('on'); balls.splice(balls.indexOf(b), 1); setTimeout(function () { if (b.el.parentNode) b.el.parentNode.removeChild(b.el); }, 600); });
        }, 14000);
      });
    }
  }

  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
