// =====================================================
// ISTQB Quest — app.js
// Bootstrap de la aplicación: carga estado, registra
// pantallas y arranca el router.
// =====================================================

import { loadState } from "./state.js";
import { checkAchievements } from "./engine/achievements.js";
import { registerScreen, initRouter } from "./router.js";
import { renderStart } from "./screens/start.js";
import { renderMap } from "./screens/map.js";
import { renderLevel } from "./screens/level.js";
import { renderResults } from "./screens/results.js";
import { renderBoss } from "./screens/boss.js";

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  checkAchievements(); // desbloquea los logros ya merecidos por el progreso guardado

  registerScreen("start", renderStart);
  registerScreen("map", renderMap);
  registerScreen("level", renderLevel);
  registerScreen("results", renderResults);
  registerScreen("boss", renderBoss);

  initRouter(document.getElementById("screen-container"), "start");
});
