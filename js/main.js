/* dylanhughes.dev
   The ball on the rail, the intro, the tickers, the count-up, the menu.
   No libraries. Everything degrades to a plain page with JavaScript off. */
(function () {
  'use strict';
  var html = document.documentElement;
  var reduced = false;
  try { reduced = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var fine = false;
  try { fine = matchMedia('(hover: hover) and (pointer: fine)').matches; } catch (e) {}
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

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
    var items = Array.prototype.slice.call(row.children);
    items.forEach(function (it) { row.appendChild(it.cloneNode(true)); });
  });

  /* Staged opening. On a first visit the ball drops and the headline builds first. */
  var stages = $$('.stage');
  stages.forEach(function (el, i) { el.style.setProperty('--i', i); });
  function go() {
    html.classList.add('go');
    requestAnimationFrame(function () { requestAnimationFrame(function () { stages.forEach(function (el) { el.classList.add('on'); }); }); });
    try { sessionStorage.setItem('dh-seen', '1'); } catch (e) {}
  }
  if (html.classList.contains('intro')) {
    var started = false;
    var start = function () { if (!started) { started = true; go(); } };
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(start); }
    setTimeout(start, 700);
  } else { go(); }

  /* Nav */
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

  /* Reveal once */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('on');
      if (en.target.hasAttribute('data-count')) countUp(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
  $$('.in-view, .band').forEach(function (el) { io ? io.observe(el) : el.classList.add('on'); });

  /* Count-up numbers */
  function countUp(el) {
    var end = parseInt(el.getAttribute('data-count'), 10) || 0;
    var fmt = function (n) { return n.toLocaleString('en-US'); };
    if (reduced) { el.textContent = fmt(end); return; }
    var t0 = null, dur = 1500;
    function frame(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(end * e));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  $$('[data-count]').forEach(function (el) { io ? io.observe(el) : countUp(el); });

  /* The ball on the rail */
  var lane = $('.lane');
  var track = lane && $('.track', lane);
  var ballWrap = lane && $('.ball-wrap', lane);
  var ball = lane && $('.ball', lane);
  var spin = lane && $('.spin', lane);
  var marks = lane ? $$('.mark', lane) : [];
  var navLinks = $$('.nav-links a');
  var trackH = 0, ballY = 0, targetY = 0, spinDeg = 0, current = -1, ticking = false, first = true;
  var markPos = [];

  function docRange() { return Math.max(1, document.documentElement.scrollHeight - window.innerHeight); }
  function measure() {
    if (!track) return;
    trackH = track.clientHeight;
    var range = docRange();
    markPos = marks.map(function (m) {
      var target = document.getElementById(m.getAttribute('data-for'));
      if (!target) return null;
      var top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      var frac = Math.max(0, Math.min(1, top / range));
      m.style.top = (frac * 100) + '%';
      return frac * trackH;
    });
    targetY = (window.pageYOffset / range) * trackH;
    if (first) { ballY = targetY; first = false; render(); }
  }
  function render() {
    if (!ballWrap) return;
    ballWrap.style.transform = 'translate3d(0,' + ballY.toFixed(2) + 'px,0)';
    if (spin) spin.style.transform = 'rotate(' + spinDeg.toFixed(1) + 'deg)';
  }
  function setCurrent(i) {
    if (i === current) return;
    var was = current; current = i;
    marks.forEach(function (m, k) { m.classList.toggle('lit', k === i); });
    var id = i >= 0 ? marks[i].getAttribute('data-for') : '';
    navLinks.forEach(function (a) { a.classList.toggle('here', a.getAttribute('href') === '#' + id); });
    if (was !== -1 && ball && !reduced) {
      ball.classList.remove('bump'); void ball.offsetWidth; ball.classList.add('bump');
    }
  }
  function step() {
    var d = targetY - ballY;
    if (Math.abs(d) < 0.15) { ballY = targetY; render(); ticking = false; }
    else {
      ballY += d * (reduced ? 1 : 0.14);
      spinDeg += d * 0.14 * 6;
      render();
      requestAnimationFrame(step);
    }
    var idx = -1;
    for (var k = 0; k < markPos.length; k++) { if (markPos[k] !== null && ballY >= markPos[k] - 2) idx = k; }
    setCurrent(idx);
  }
  function onScroll() {
    if (track) {
      targetY = (window.pageYOffset / docRange()) * trackH;
      if (!ticking) { ticking = true; requestAnimationFrame(step); }
    }
    if (nav) nav.classList.toggle('is-stuck', window.pageYOffset > 8);
    parallax();
  }
  if (track) {
    measure();
    window.addEventListener('resize', function () { measure(); onScroll(); });
    window.addEventListener('load', function () { measure(); onScroll(); });
    setTimeout(function () { measure(); onScroll(); }, 900);
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
      cur.classList.toggle('is-link', !!t);
      if (!curRaf) { curRaf = true; requestAnimationFrame(curStep); }
    });
    document.addEventListener('mouseleave', function () { cur.style.opacity = '0'; shown = false; });
  }

  /* Magnetic email link */
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

  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
