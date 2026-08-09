function shakeStage() {
  const stage = document.getElementById("stage");
  stage.style.animation = "shake 0.4s";
  setTimeout(() => stage.style.animation = "", 400);
}

function flashLightning() {
  const stage = document.getElementById("stage");
  stage.style.boxShadow = "0 0 200px #ffffff";
  setTimeout(() => stage.style.boxShadow = "0 0 40px #5a00ff88 inset", 150);
}

function warpColors() {
  const stage = document.getElementById("stage");
  stage.style.filter = "hue-rotate(180deg)";
  setTimeout(() => stage.style.filter = "", 400);
}
