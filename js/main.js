/* dylanhughes.dev */
document.documentElement.classList.add('js');
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Nav border + scroll progress */
  var nav = document.querySelector('.nav');
  var bar = document.querySelector('.progress');
  function onScroll() {
    var y = window.scrollY;
    if (nav) nav.classList.toggle('is-stuck', y > 12);
    if (bar) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(y / h, 1) * 100 : 0) + '%';
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Staged opening: land each piece a beat after the last */
  var stage = document.querySelectorAll('.open .stage');
  stage.forEach(function (el, i) { el.style.setProperty('--i', i); });
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { stage.forEach(function (el) { el.classList.add('on'); }); });
  });

  /* Reveal once */
  var els = document.querySelectorAll('.in-view');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('on'); });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
