// =====================================================
// ISTQB Quest — screens/map.js
// Mapa del juego: 6 mundos con desbloqueo progresivo,
// niveles secuenciales, estrellas y progreso.
// =====================================================

import { worlds, worldLabel } from "../data/index.js";
import { getState } from "../state.js";
import { navigate } from "../router.js";
import { esc } from "../utils.js";
import {
  isWorldUnlocked,
  isWorldCompleted,
  isLevelUnlocked,
  isLevelCompleted,
  levelStars,
  worldStats,
  globalStars,
} from "../engine/progress.js";

/** Tres estrellas pequeñas: llenas según las obtenidas. */
function miniStars(count, max = 3) {
  return Array.from(
    { length: max },
    (_, i) => `<span class="mini-star ${i < count ? "on" : "off"}">★</span>`
  ).join("");
}

/** Tarjeta HTML de un mundo. */
function worldCardHtml(world, wi, progress, activeWorldIndex) {
  const unlocked = isWorldUnlocked(wi, progress);
  const completed = isWorldCompleted(world, progress);
  const stats = worldStats(world, progress);
  const empty = world.levels.length === 0;

  let status = "locked";
  if (unlocked && !empty) status = completed ? "completed" : "current";

  const expanded = wi === activeWorldIndex && unlocked && !empty;
  const statusIcon = status === "locked" ? "🔒" : status === "completed" ? "✅" : "▶️";
  const pct = stats.totalLevels > 0 ? (stats.completed / stats.totalLevels) * 100 : 0;

  const levelsHtml = empty
    ? `<p class="world-empty">🚧 Contenido en construcción — llega en la próxima actualización.</p>`
    : world.levels
        .map((level, li) => {
          const unlockedLevel = isLevelUnlocked(wi, li, progress);
          const done = isLevelCompleted(level.id, progress);
          const stars = levelStars(level.id, progress);
          const cls = done ? "done" : unlockedLevel ? "current" : "locked";
          return `
            <button class="level-row ${cls}" data-level="${level.id}" ${unlockedLevel ? "" : "disabled"}>
              <span class="level-num">${world.type === "challenge" ? `D${world.challengeNumber}` : `${world.number}.${level.number}`}</span>
              <span class="level-name">${esc(level.title)}</span>
              <span class="mini-stars">${miniStars(stars)}</span>
            </button>`;
        })
        .join("");

  return `
    <article class="world-card ${status}">
      <button class="world-header" ${unlocked && !empty ? 'data-action="toggle"' : "disabled"} aria-expanded="${expanded}">
        <span class="world-emoji">${world.emoji}</span>
        <div class="world-info">
          <h2 class="world-title">${worldLabel(world)} · ${esc(world.title)}</h2>
          <div class="world-meta">
            <div class="world-progress">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="world-count">${stats.completed}/${stats.totalLevels} niveles</span>
            <span class="world-stars">⭐ ${stats.stars}/${stats.maxStars}</span>
          </div>
        </div>
        <span class="world-status">${statusIcon}</span>
      </button>
      <div class="level-list" ${expanded ? "" : "hidden"}>
        ${levelsHtml}
      </div>
    </article>
  `;
}

/** Tarjeta especial del Boss Final. */
function bossCardHtml(progress) {
  const allDone = worlds.every((w) => w.levels.length > 0 && isWorldCompleted(w, progress));
  const stats = getState().stats;
  const passed = Boolean(stats.bossCleared);
  const best = stats.bossBest ?? 0;
  const status = passed ? "completed" : allDone ? "current" : "locked";
  const statusIcon = passed ? "✅" : allDone ? "▶️" : "🔒";

  return `
    <article class="world-card boss-card ${status}">
      <button class="world-header" ${allDone ? 'data-action="boss"' : "disabled"}>
        <span class="world-emoji">👑</span>
        <div class="world-info">
          <h2 class="world-title">Boss Final · Simulacro de examen</h2>
          <div class="world-meta">
            <span class="world-count">40 preguntas · 75 min · 65 % para aprobar${passed ? ` · Mejor: ${best}/40` : ""}</span>
          </div>
        </div>
        <span class="world-status">${statusIcon}</span>
      </button>
    </article>
  `;
}

export function renderMap() {
  const progress = getState().progress;

  // Mundo activo: primer mundo desbloqueado, con contenido y sin completar
  let activeWorldIndex = worlds.findIndex(
    (w, wi) => isWorldUnlocked(wi, progress) && w.levels.length > 0 && !isWorldCompleted(w, progress)
  );

  const el = document.createElement("section");
  el.className = "screen map-screen";
  el.innerHTML = `
    <header class="map-header">
      <button class="icon-btn" data-action="home" title="Volver al inicio">🏠</button>
      <h1 class="map-title">Mapa del juego</h1>
      <div class="map-stars" title="Estrellas conseguidas">⭐ ${globalStars(progress)}</div>
    </header>
    <main class="map-body">
      ${worlds.map((world, wi) => worldCardHtml(world, wi, progress, activeWorldIndex)).join("")}
      ${bossCardHtml(progress)}
    </main>
  `;

  /* ---------- Volver al inicio ---------- */
  el.querySelector('[data-action="home"]').addEventListener("click", () => navigate("start"));

  /* ---------- Expandir / colapsar mundos ---------- */
  el.querySelectorAll('.world-header[data-action="toggle"]').forEach((header) => {
    header.addEventListener("click", () => {
      const list = header.closest(".world-card").querySelector(".level-list");
      list.hidden = !list.hidden;
      header.setAttribute("aria-expanded", String(!list.hidden));
    });
  });

  /* ---------- Entrar a un nivel ---------- */
  el.querySelectorAll(".level-row:not(:disabled)").forEach((row) => {
    row.addEventListener("click", () => navigate("level", { levelId: row.dataset.level }));
  });

  /* ---------- Entrar al Boss Final ---------- */
  const bossBtn = el.querySelector('[data-action="boss"]');
  if (bossBtn) bossBtn.addEventListener("click", () => navigate("boss"));

  return el;
}
