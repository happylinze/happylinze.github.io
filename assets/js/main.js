(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');

  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Highlight the section currently in view in the sidebar navigation.
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  if (!('IntersectionObserver' in window) || !links.length) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('active'); });
      var a = byId[e.target.id];
      if (a) a.classList.add('active');
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  Object.keys(byId).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();

// Copy buttons for BibTeX entries.
document.addEventListener('click', function (e) {
  var btn = e.target.closest && e.target.closest('.bib-copy');
  if (!btn) return;
  var code = btn.parentNode.querySelector('code');
  var text = code ? code.textContent : '';
  var labels = {
    idle: btn.getAttribute('data-label') || 'Copy',
    copied: btn.getAttribute('data-copied') || 'Copied',
    fallback: btn.getAttribute('data-fallback') || 'Press Ctrl+C'
  };
  function done(label) {
    btn.textContent = label;
    setTimeout(function () { btn.textContent = labels.idle; }, 1600);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () { done(labels.copied); }, function () { done(labels.fallback); });
  } else {
    var r = document.createRange(); r.selectNodeContents(code);
    var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
    done(labels.fallback);
  }
});
