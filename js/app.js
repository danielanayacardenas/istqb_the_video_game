// =====================================================
// ISTQB Quest — app.js
// Bootstrap de la aplicación: carga estado, registra
// pantallas y arranca el router.
// =====================================================

import { loadState } from "./state.js";
import { registerScreen, initRouter } from "./router.js";
import { renderStart } from "./screens/start.js";
import { renderMap } from "./screens/map.js";
import { renderLevel } from "./screens/level.js";
import { renderResults } from "./screens/results.js";

window.addEventListener("DOMContentLoaded", () => {
  loadState();

  registerScreen("start", renderStart);
  registerScreen("map", renderMap);
  registerScreen("level", renderLevel);
  registerScreen("results", renderResults);

  initRouter(document.getElementById("screen-container"), "start");
});
