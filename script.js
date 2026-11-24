// Theme switch. The first paint is handled by the small script in <head>;
// this only reacts to the button and remembers the choice.
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme');
  if (!button) return;

  function label() {
    button.setAttribute('aria-label', 'Switch to ' + (root.dataset.theme === 'dark' ? 'light' : 'dark') + ' theme');
  }

  button.addEventListener('click', function () {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    label();
  });
  label();
})();
