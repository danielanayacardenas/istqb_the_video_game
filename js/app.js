// =====================================================
// ISTQB Quest — app.js
// Bootstrap de la aplicación: carga estado, registra
// pantallas y arranca el router.
// =====================================================

import { loadState } from "./state.js";
import { registerScreen, initRouter, navigate } from "./router.js";
import { renderStart } from "./screens/start.js";
import { renderLevel } from "./screens/level.js";
import { renderResults } from "./screens/results.js";

/* ---------------------------------------------------
   Placeholder del mapa del juego.
   Se reemplaza por la pantalla real en la Etapa 3.
   --------------------------------------------------- */
function renderMapPlaceholder() {
  const el = document.createElement("section");
  el.className = "screen placeholder-screen";
  el.innerHTML = `
    <div class="placeholder-card">
      <span class="placeholder-emoji">🗺️</span>
      <h2>Mapa del juego</h2>
      <p>En construcción — llega en la <strong>Etapa 3</strong> con los 6 mundos.</p>
      <p class="placeholder-demo-label">Mientras tanto, prueba el motor de juego con el nivel 1.1:</p>
      <button class="btn btn-primary" data-action="demo">▶ Nivel 1.1 — ¿Qué es el testing?</button>
      <button class="btn btn-ghost" data-action="back">← Volver al inicio</button>
    </div>
  `;
  el.querySelector('[data-action="demo"]').addEventListener("click", () =>
    navigate("level", { levelId: "w1-l1" })
  );
  el.querySelector('[data-action="back"]').addEventListener("click", () => navigate("start"));
  return el;
}

/* ---------------------------------------------------
   Arranque
   --------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadState();

  registerScreen("start", renderStart);
  registerScreen("map", renderMapPlaceholder);
  registerScreen("level", renderLevel);
  registerScreen("results", renderResults);

  initRouter(document.getElementById("screen-container"), "start");
});
