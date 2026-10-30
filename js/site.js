/* Interaction and motion. Every page reads and navigates without this file. */
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const animate = !reduced && 'gsap' in window && 'ScrollTrigger' in window && 'SplitText' in window;
  window.__motion = animate;
  if (!animate) root.classList.remove('motion');
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // Local time in Richmond and the footer year.
  const clockFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });
  const tick = () => $$('[data-clock]').forEach(el => { el.textContent = clockFormat.format(new Date()); });
  tick();
  setInterval(tick, 15000);
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Small dot-matrix icons, drawn from row patterns like "0110/1001".
  $$('[data-dots]').forEach(el => {
    const rows = el.dataset.dots.split('/');
    const cells = rows.flatMap((row, y) => [...row].map((on, x) => `<circle cx="${x + .5}" cy="${y + .5}" r=".36" fill="${on === '1' ? '#ff6a13' : '#16181a'}" fill-opacity="${on === '1' ? 1 : .12}"/>`));
    el.innerHTML = `<svg viewBox="0 0 ${rows[0].length} ${rows.length}">${cells.join('')}</svg>`;
  });

  // Header: hides while reading down, returns on the way up, and darkens over dark sections.
  const header = $('[data-header]');
  const menuButton = $('[data-menu]');
  const nav = $('#site-nav');
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle('is-scrolled', y > 8);
    const open = menuButton && menuButton.getAttribute('aria-expanded') === 'true';
    if (!open && !header.contains(document.activeElement)) header.classList.toggle('is-hidden', y > lastY && y > 320);
    if (y < lastY) header.classList.remove('is-hidden');
    lastY = y;
    const probe = header.offsetHeight / 2;
    header.classList.toggle('on-dark', $$('[data-theme="dark"]').some(s => { const r = s.getBoundingClientRect(); return r.top <= probe && r.bottom >= probe; }));
  };
  addEventListener('scroll', onScroll, { passive: true });
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
  onScroll();

  // Mobile menu.
  if (menuButton && nav) {
    const setMenu = (open, focusButton) => {
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? 'Close' : 'Menu';
      nav.classList.toggle('is-open', open);
      header.classList.toggle('menu-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
      if (open && animate) gsap.fromTo($$('a', nav), { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .7, stagger: .05, ease: 'expo.out' });
      if (focusButton) menuButton.focus();
    };
    menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
    $$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true); });
    matchMedia('(min-width: 861px)').addEventListener('change', () => setMenu(false));
  }

  // Current section in the nav.
  const navLinks = $$('.nav a[href^="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => (a.getAttribute('href') === '#' + entry.target.id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
    }), { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(a => { const s = $(a.getAttribute('href')); if (s) io.observe(s); });
  }

  // Copy email.
  const copy = $('[data-copy]');
  if (copy && navigator.clipboard) {
    const status = $('[data-copy-status]');
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copy.dataset.copy);
        copy.textContent = 'Copied';
        if (status) status.textContent = 'Email address copied';
      } catch {
        copy.textContent = 'Copy failed';
      }
      setTimeout(() => { copy.textContent = 'Copy email'; if (status) status.textContent = ''; }, 2200);
    });
  } else if (copy) {
    copy.hidden = true;
  }

  // Before and after comparison.
  $$('[data-compare]').forEach(figure => {
    const range = $('[data-compare-range]', figure);
    const frame = $('.compare-frame', figure);
    const update = () => frame.style.setProperty('--pos', range.value + '%');
    range.addEventListener('input', update);
    update();
  });

  // The dot-matrix display.
  let dmd = null;
  const canvas = $('[data-dmd]');
  if (canvas && window.DMD && window.DMD_FONTS) {
    const label = $('[data-dmd-label]');
    const count = $('[data-dmd-count]');
    const pause = $('[data-dmd-pause]');
    const next = $('[data-dmd-next]');
    const scenes = canvas.dataset.dmdScenes ? canvas.dataset.dmdScenes.split(',') : undefined;
    dmd = new DMD(canvas, {
      reduced,
      scenes,
      onScene: (name, i, n) => { if (label) label.textContent = name; if (count && n > 1) count.textContent = `${i} / ${n}`; },
    });
    let paused = reduced, onScreen = true;
    const sync = () => { if (!paused && onScreen && !document.hidden) dmd.start(); else dmd.stop(); };
    if (pause) {
      if (reduced) pause.hidden = true;
      pause.addEventListener('click', () => {
        paused = !paused;
        pause.setAttribute('aria-pressed', String(paused));
        pause.textContent = paused ? 'Play' : 'Pause';
        sync();
      });
    }
    const advance = () => { dmd.next(); if (paused || reduced) dmd.still(); };
    if (next) next.addEventListener('click', advance);
    canvas.addEventListener('click', advance);
    new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; sync(); }).observe(canvas);
    document.addEventListener('visibilitychange', sync);
    dmd.sync = sync;
    if (!animate || !$('[data-intro-dmd]')) dmd.boot();
  }

  if (!animate) return;
  // Line splits are measured, so they wait for the web fonts.
  document.fonts.ready.then(motion);

  function motion() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const ease = 'expo.out';

    // Inertial scrolling, kept in step with ScrollTrigger.
    if (window.Lenis) {
      const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        const target = id === '#main' ? document.body : $(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target === document.body ? 0 : target, { offset: -header.offsetHeight + 1, duration: 1.4 });
        history.replaceState(null, '', id);
        const focusTarget = id === '#main' ? $('#main') : target;
        focusTarget.setAttribute('tabindex', '-1');
        focusTarget.focus({ preventScroll: true });
      }));
    }

    // Splits a heading into masked lines for one animation, then restores the plain text so it reflows freely.
    const riseLines = (el, vars) => {
      const split = SplitText.create(el, { type: 'lines', mask: 'lines' });
      gsap.set(el, { autoAlpha: 1 });
      return gsap.from(split.lines, { yPercent: 108, ease, ...vars, onComplete: () => split.revert() });
    };

    // Intro: header, headline lines, then the display powers on.
    const introLines = $('[data-intro-lines]');
    const intro = gsap.timeline({ defaults: { ease } });
    const introParts = $$('[data-intro]');
    if (introParts.length) intro.fromTo(introParts, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 1, stagger: .06 }, 0);
    if (introLines) intro.add(riseLines(introLines, { duration: 1.25, stagger: .09 }), .1);
    const bezel = $('[data-intro-dmd]');
    if (bezel) {
      intro.fromTo(bezel, { autoAlpha: 0, clipPath: 'inset(0% 0% 100% 0% round 20px)' },
        { autoAlpha: 1, clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.1, ease: 'expo.inOut', clearProps: 'clipPath' }, .45);
      intro.call(() => dmd && dmd.boot(), null, 1.15);
    }

    // Headings rise line by line as they arrive.
    $$('[data-split]').forEach(el => {
      riseLines(el, { duration: 1.15, stagger: .08, scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    // Supporting copy and panels.
    ScrollTrigger.batch('[data-fade]', {
      start: 'top 90%',
      once: true,
      onEnter: els => gsap.fromTo(els, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1.1, stagger: .08, ease, overwrite: true }),
    });
    gsap.set('[data-fade]', { autoAlpha: 0 });

    // Featured project: the frame opens and the screenshot settles as it scrolls into view.
    $$('.work .case-media').forEach(media => {
      const img = $('img', media);
      gsap.fromTo(media, { clipPath: 'inset(9% 7% 0% 7% round 18px)' }, { clipPath: 'inset(0% 0% 0% 0% round 18px)', ease: 'none', scrollTrigger: { trigger: media, start: 'top 95%', end: 'top 25%', scrub: true } });
      gsap.fromTo(img, { scale: 1.12, yPercent: 4 }, { scale: 1, yPercent: 0, ease: 'none', scrollTrigger: { trigger: media, start: 'top 95%', end: 'top 25%', scrub: true } });
    });

    // The story brightens word by word as it is read.
    $$('[data-scrub]').forEach(story => {
      const words = SplitText.create($$('p', story), { type: 'words' }).words;
      gsap.fromTo(words, { opacity: .16 }, { opacity: 1, stagger: .1, ease: 'none', scrollTrigger: { trigger: story, start: 'top 78%', end: 'bottom 52%', scrub: true } });
    });

    // Photographs drift slightly against the scroll.
    $$('.portrait-frame img, .shop-frame img').forEach(img => {
      gsap.fromTo(img, { scale: 1.14, yPercent: -5 }, { scale: 1.06, yPercent: 5, ease: 'none', scrollTrigger: { trigger: img.closest('figure'), start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // Rules draw across as their rows arrive.
    $$('.rule').forEach(rule => {
      gsap.from(rule, { scaleX: 0, duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: rule.parentElement, start: 'top 90%', once: true } });
    });
    $$('.xp-row').forEach(row => {
      gsap.from($$(':scope > :not(.rule)', row), { autoAlpha: 0, y: 18, duration: 1, stagger: .06, ease, delay: .15, scrollTrigger: { trigger: row, start: 'top 90%', once: true } });
    });

    // A label follows the pointer over the featured project.
    const cursor = $('[data-cursor-label]');
    if (cursor && finePointer) {
      const x = gsap.quickTo(cursor, 'x', { duration: .45, ease: 'power3' });
      const y = gsap.quickTo(cursor, 'y', { duration: .45, ease: 'power3' });
      let px = -1, py = -1, shown = null;
      // Scrolling moves content under a still pointer, so the target is checked on both events.
      const update = () => {
        const hit = px < 0 ? null : document.elementFromPoint(px, py);
        const target = hit && hit.closest('[data-cursor]');
        if (target === shown) return;
        shown = target;
        if (target) { cursor.textContent = target.dataset.cursor; gsap.to(cursor, { scale: 1, opacity: 1, duration: .45, ease }); }
        else gsap.to(cursor, { scale: 0, opacity: 0, duration: .35, ease: 'power3.in' });
      };
      addEventListener('pointermove', e => { px = e.clientX; py = e.clientY; x(px); y(py); update(); }, { passive: true });
      addEventListener('scroll', update, { passive: true });
      document.addEventListener('pointerleave', () => { px = -1; update(); });
    }

  }
})();
