// =====================================================
// ISTQB Quest — screens/map.js
// Mapa del juego: 6 mundos con desbloqueo progresivo,
// niveles secuenciales, estrellas, progreso y Reto Dorado.
// =====================================================

import { worlds, worldLabel, goldChallenge } from "../data/index.js";
import { getState } from "../state.js";
import { navigate } from "../router.js";
import { esc } from "../utils.js";
import { icon } from "../ui/icons.js";
import { isMusicOn, toggleMusic } from "../ui/music.js";
import {
  isWorldUnlocked,
  isWorldCompleted,
  isLevelUnlocked,
  isLevelCompleted,
  levelStars,
  worldStats,
  globalStars,
} from "../engine/progress.js";
import { goldStars, isGoldUnlocked } from "../engine/gold.js";
import { ACHIEVEMENTS } from "../engine/achievements.js";

/** Desconecta los listeners del desglose de estrellas anterior. */
let detachStarsPopover = null;

/** Tres estrellas pequeñas: llenas según las obtenidas. */
function miniStars(count, max = 3) {
  return Array.from(
    { length: max },
    (_, i) =>
      `<span class="mini-star ${i < count ? "on" : "off"}">${icon("star", { size: 13, fill: i < count })}</span>`
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
  const statusIcon =
    status === "locked"
      ? icon("lock", { size: 20 })
      : status === "completed"
        ? icon("circle-check", { size: 20, className: "ok" })
        : icon("play", { size: 20, className: "now", fill: true });
  const pct = stats.totalLevels > 0 ? (stats.completed / stats.totalLevels) * 100 : 0;

  const levelsHtml = empty
    ? `<p class="world-empty">${icon("construction", { size: 16 })} Contenido en construcción — llega en la próxima actualización.</p>`
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
        <span class="world-icon">${icon(world.icon, { size: 26 })}</span>
        <div class="world-info">
          <h2 class="world-title">${worldLabel(world)} · ${esc(world.title)}</h2>
          <div class="world-meta">
            <div class="world-progress">
              <div class="progress-fill" style="width:${pct}%"></div>
            </div>
            <span class="world-count">${stats.completed}/${stats.totalLevels} niveles</span>
            <span class="world-stars">${icon("star", { size: 14, fill: true })} ${stats.stars}/${stats.maxStars}</span>
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

/** Tarjeta dorada del Reto Dorado (siempre arriba del mapa). */
function goldCardHtml(progress) {
  const stars = goldStars(progress);
  return `
    <article class="world-card gold-card">
      <div class="world-header gold-header">
        <span class="world-icon gold-icon">${icon("star", { size: 26, fill: true })}</span>
        <div class="world-info">
          <h2 class="world-title">${esc(goldChallenge.title)} · El 110 %</h2>
          <div class="world-meta">
            <span class="world-count">${icon("timer", { size: 14 })} Tiempo a la mitad · 10 preguntas</span>
            <span class="world-stars">${icon("star", { size: 14, fill: true })} ${stars}/3</span>
          </div>
        </div>
      </div>
      <div class="level-list">
        <button class="level-row gold-row" data-level="gold-l1">
          <span class="level-num">${icon("star", { size: 14, fill: true })}</span>
          <span class="level-name">${esc(goldChallenge.levels[0].title)}</span>
          <span class="mini-stars">${miniStars(stars)}</span>
        </button>
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
  const statusIcon = passed
    ? icon("circle-check", { size: 20, className: "ok" })
    : allDone
      ? icon("play", { size: 20, className: "now", fill: true })
      : icon("lock", { size: 20 });

  return `
    <article class="world-card boss-card ${status}">
      <button class="world-header" ${allDone ? 'data-action="boss"' : "disabled"}>
        <span class="world-icon">${icon("crown", { size: 26 })}</span>
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
  const goldUnlocked = isGoldUnlocked();
  // El reto es único: al completarlo desaparece del mapa (quedan las doradas).
  const goldDone = isLevelCompleted("gold-l1", progress);

  // Mundo activo: primer mundo desbloqueado, con contenido y sin completar
  let activeWorldIndex = worlds.findIndex(
    (w, wi) => isWorldUnlocked(wi, progress) && w.levels.length > 0 && !isWorldCompleted(w, progress)
  );

  const el = document.createElement("section");
  el.className = "screen map-screen";
  el.innerHTML = `
    <header class="map-header">
      <button class="icon-btn" data-action="home" title="Volver al inicio">${icon("house", { size: 18 })}</button>
      <h1 class="map-title">Mapa del juego</h1>
      <div class="map-badges">
        <button class="map-stars" data-action="stars" title="Estrellas: ver desglose">${icon("star", { size: 15, fill: true })} ${globalStars(progress)}</button>
        ${
          goldUnlocked
            ? `<button class="map-stars gold-stars" data-action="stars" title="Estrellas doradas: ver desglose">${icon("star", { size: 15, fill: true, className: "gold" })} ${goldStars(progress)}</button>`
            : ""
        }
        <div class="map-stars" title="Logros desbloqueados">${icon("trophy", { size: 15 })} ${getState().achievements.length}/${ACHIEVEMENTS.length}</div>
        <button class="icon-btn map-music" data-action="music">
          ${icon("music", { size: 18 })}
        </button>
        <div class="stars-popover" data-el="stars-popover" hidden>
          <p class="stars-row">${icon("star", { size: 15, fill: true })} Estrellas <strong>${globalStars(progress)}</strong></p>
          <p class="stars-row">${icon("star", { size: 15, fill: true, className: "gold" })} Doradas <strong>${goldStars(progress)}</strong></p>
        </div>
      </div>
    </header>
    <main class="map-body">
      ${goldUnlocked && !goldDone ? goldCardHtml(progress) : ""}
      ${worlds.map((world, wi) => worldCardHtml(world, wi, progress, activeWorldIndex)).join("")}
      ${bossCardHtml(progress)}
    </main>
  `;

  /* ---------- Volver al inicio ---------- */
  el.querySelector('[data-action="home"]').addEventListener("click", () => navigate("start"));

  /* ---------- Música: apagar / activar ---------- */
  const musicBtn = el.querySelector('[data-action="music"]');
  const paintMusicBtn = () => {
    const on = isMusicOn();
    musicBtn.innerHTML = on ? icon("music", { size: 18 }) : icon("volume-x", { size: 18 });
    musicBtn.setAttribute("aria-pressed", String(!on));
    musicBtn.title = on ? "Apagar música" : "Activar música";
    musicBtn.setAttribute("aria-label", musicBtn.title);
    musicBtn.classList.toggle("muted", !on);
  };
  musicBtn.addEventListener("click", () => {
    toggleMusic();
    paintMusicBtn();
  });
  paintMusicBtn();

  /* ---------- Desglose de estrellas ---------- */
  const starsPopover = el.querySelector('[data-el="stars-popover"]');
  const starsButtons = [...el.querySelectorAll('[data-action="stars"]')];
  const setPopoverOpen = (open) => {
    starsPopover.hidden = !open;
  };

  starsButtons.forEach((btn) => {
    btn.addEventListener("click", () => setPopoverOpen(starsPopover.hidden));
  });

  const onDocumentClick = (ev) => {
    if (starsPopover.hidden) return;
    if (starsPopover.contains(ev.target) || starsButtons.some((b) => b.contains(ev.target))) return;
    setPopoverOpen(false);
  };
  const onDocumentKey = (ev) => {
    if (ev.key === "Escape" && !starsPopover.hidden) setPopoverOpen(false);
  };

  detachStarsPopover?.();
  document.addEventListener("click", onDocumentClick);
  document.addEventListener("keydown", onDocumentKey);
  detachStarsPopover = () => {
    document.removeEventListener("click", onDocumentClick);
    document.removeEventListener("keydown", onDocumentKey);
    detachStarsPopover = null;
  };

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
