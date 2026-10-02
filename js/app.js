// =====================================================
// ISTQB Quest — app.js
// Bootstrap de la aplicación: carga estado, registra
// pantallas y arranca el router.
// =====================================================

import { loadState } from "./state.js";
import { checkAchievements } from "./engine/achievements.js";
import { refreshGoldPending } from "./engine/gold.js";
import { registerScreen, initRouter, onNavigate } from "./router.js";
import { initMusic, setGameplay } from "./ui/music.js";
import { renderStart } from "./screens/start.js";
import { renderMap } from "./screens/map.js";
import { renderLevel } from "./screens/level.js";
import { renderResults } from "./screens/results.js";
import { renderBoss } from "./screens/boss.js";

/** Pantallas en las que suena la música (mientras se juega). */
const GAMEPLAY_SCREENS = new Set(["map", "level", "boss"]);

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  checkAchievements(); // desbloquea los logros ya merecidos por el progreso guardado
  refreshGoldPending(); // reto dorado pendiente si ya se cruzó el umbral de estrellas

  registerScreen("start", renderStart);
  registerScreen("map", renderMap);
  registerScreen("level", renderLevel);
  registerScreen("results", renderResults);
  registerScreen("boss", renderBoss);

  // La música arranca con el primer gesto del usuario y solo suena en las
  // pantallas de juego; inicio y resultados quedan en silencio.
  initMusic();
  onNavigate((name) => setGameplay(GAMEPLAY_SCREENS.has(name)));

  initRouter(document.getElementById("screen-container"), "start");
});
