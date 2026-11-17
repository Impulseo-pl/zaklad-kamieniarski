// Skórka w stylu wzorca: pływający pasek, mobilne menu, kroki „jak pracujemy".
(function () {
  var fl = document.querySelector('.sw-float');
  var hero = document.querySelector('.sw-hero');
  if (fl && hero) {
    var tick = false;
    var upd = function () {
      fl.classList.toggle('show', window.scrollY > hero.offsetHeight * 0.55);
      tick = false;
    };
    window.addEventListener('scroll', function () {
      if (!tick) { tick = true; requestAnimationFrame(upd); }
    }, { passive: true });
    upd();
  }

  var drawer = document.querySelector('.sw-drawer');
  if (drawer) {
    var open = function () { drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
    var close = function () { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
    document.querySelectorAll('.sw-burger').forEach(function (b) { b.addEventListener('click', open); });
    drawer.querySelectorAll('.sw-close, a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  var steps = document.querySelectorAll('.sw-step');
  var panel = document.querySelector('.sw-panel');
  if (steps.length && panel) {
    var kick = panel.querySelector('.sw-panel-kicker');
    var dds = panel.querySelectorAll('dd');
    var cnt = document.querySelector('.sw-proof-cap span:last-child');
    var nm = document.querySelector('.sw-proof-cap span:first-child');
    steps.forEach(function (s, i) {
      s.addEventListener('click', function () {
        steps.forEach(function (o) { o.setAttribute('aria-selected', 'false'); });
        s.setAttribute('aria-selected', 'true');
        kick.textContent = s.dataset.k;
        dds[0].textContent = s.dataset.a;
        dds[1].textContent = s.dataset.b;
        dds[2].textContent = s.dataset.c;
        if (cnt) cnt.textContent = '0' + (i + 1) + ' / 0' + steps.length;
        if (nm) nm.textContent = s.dataset.n;
      });
    });
  }
})();
