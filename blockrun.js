document.addEventListener("click", e => {
  if (!e.target.classList.contains("dropped")) return;

  const text = e.target.textContent;

  if (text.includes("Shake Stage")) shakeStage();
  if (text.includes("Flash Lightning")) flashLightning();
  if (text.includes("Warp Colors")) warpColors();
});
