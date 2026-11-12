// Dark mode
(function() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});

document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.5) return; // nicht bei jeder Bewegung

  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";

  const size = Math.random() * 2 + 2; // 2–4px
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 600);
});
