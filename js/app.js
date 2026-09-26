/* =====================================================
   ISTQB Quest — app.js
   Bootstrap de la aplicación: carga estado y arranca el router.
   ===================================================== */

import { loadState } from "./state.js";
import { registerScreen, initRouter } from "./router.js";
import { renderStart } from "./screens/start.js";

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
      <button class="btn btn-ghost" data-action="back">← Volver al inicio</button>
    </div>
  `;
  el.querySelector('[data-action="back"]').addEventListener("click", () =>
    import("./router.js").then(({ navigate }) => navigate("start"))
  );
  return el;
}

/* ---------------------------------------------------
   Arranque
   --------------------------------------------------- */
window.addEventListener("DOMContentLoaded", () => {
  loadState();

  registerScreen("start", renderStart);
  registerScreen("map", renderMapPlaceholder);

  initRouter(document.getElementById("screen-container"), "start");
});
