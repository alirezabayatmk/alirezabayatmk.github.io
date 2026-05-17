(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function sync() {
    var theme = root.getAttribute('data-theme') || 'light';
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  btn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (_) {}
    sync();
  });

  sync();
})();
