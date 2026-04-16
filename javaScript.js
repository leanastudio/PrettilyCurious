<script>
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
</script>
