// =====================================================
// ISTQB Quest — tests/screens.test.mjs
// Smoke test de pantallas con DOM simulado (happy-dom).
// Renderiza inicio, mapa, niveles (mundo y reto),
// resultados y boss para detectar pantallas en blanco.
// Si happy-dom no está instalado, el test se omite.
// =====================================================

import { describe, test, beforeAll, expect } from "bun:test";

let Window = null;
try {
  ({ Window } = await import("happy-dom"));
} catch {
  // Sin happy-dom instalado (bun install) este smoke test se omite.
}

const run = Window ? test : test.skip;

let renderStart;
let renderMap;
let renderLevel;
let renderResults;
let renderBoss;
let getState;

beforeAll(async () => {
  if (!Window) return;

  const window = new Window({ url: "http://localhost:4173/" });
  globalThis.window = window;
  globalThis.document = window.document;
  globalThis.localStorage = window.localStorage;
  // Sin temporizadores reales: los niveles no deben quedar corriendo.
  globalThis.requestAnimationFrame = () => 1;
  globalThis.cancelAnimationFrame = () => {};
  globalThis.confirm = () => true;
  window.scrollTo = () => {};

  ({ renderStart } = await import("../js/screens/start.js"));
  ({ renderMap } = await import("../js/screens/map.js"));
  ({ renderLevel } = await import("../js/screens/level.js"));
  ({ renderResults } = await import("../js/screens/results.js"));
  ({ renderBoss } = await import("../js/screens/boss.js"));
  ({ getState } = await import("../js/state.js"));
});

const htmlOf = (el) => el.innerHTML ?? "";

describe("pantallas (smoke)", () => {
  run("inicio: configuración y logo", () => {
    const html = htmlOf(renderStart());
    expect(html).toContain("Configuración");
    expect(html).toContain("start-logo");
    expect(html).toContain("neon-game-controller.png");
  });

  run("mapa: mundos con iconos y tarjetas", () => {
    const html = htmlOf(renderMap());
    expect(html).toContain("Mapa del juego");
    expect(html).toContain("world-card");
    expect(html).toContain("world-icon");
  });

  run("nivel: pregunta y opciones visibles (mundo y reto)", () => {
    for (const levelId of ["w1-l1", "c1-l1"]) {
      const html = htmlOf(renderLevel({ levelId }));
      expect(html).toContain("question-text");
      expect(html).toContain("option-btn");
    }
  });

  run("nivel sin combate: control de volumen flotante", () => {
    const previous = getState().settings.combat;
    getState().settings.combat = false;
    try {
      const html = htmlOf(renderLevel({ levelId: "w1-l2" }));
      expect(html).toContain("question-text");
      expect(html).toContain("volume-control");
    } finally {
      getState().settings.combat = previous;
    }
  });

  run("resultados: estrellas, logros y botones", () => {
    const html = htmlOf(
      renderResults({
        levelId: "w1-l1",
        won: true,
        stars: 2,
        correct: 5,
        total: 5,
        bestStreak: 4,
        topic: "Fundamentos",
      })
    );
    expect(html).toContain("results-card");
    expect(html).toContain("star on");
    expect(html).toContain("Siguiente nivel");
  });

  run("resultados sin ganar: reintentar", () => {
    const html = htmlOf(renderResults({ levelId: "w1-l1", won: false, topic: "x" }));
    expect(html).toContain("results-card");
    expect(html).toContain("Reintentar nivel");
  });

  run("boss: intro con reglas", () => {
    const html = htmlOf(renderBoss());
    expect(html).toContain("boss-intro");
    expect(html).toContain("boss-rules");
    expect(html).toContain("Comenzar examen");
  });

  run("mapa: tarjeta dorada y contador con el reto desbloqueado", () => {
    const stats = getState().stats;
    const previous = stats.goldUnlocked;
    stats.goldUnlocked = true;
    try {
      const html = htmlOf(renderMap());
      expect(html).toContain("gold-card");
      expect(html).toContain("gold-stars");
      expect(html).toContain("Reto Dorado");
    } finally {
      stats.goldUnlocked = previous;
    }
  });

  run("reto dorado: intro de reglas y arranque", () => {
    const el = renderLevel({ levelId: "gold-l1" });
    expect(htmlOf(el)).toContain("gold-intro");
    expect(htmlOf(el)).toContain("Comenzar reto");
    el.querySelector('[data-action="start-gold"]').click();
    const html = htmlOf(el);
    expect(html).toContain("question-text");
    expect(html).toContain("option-btn");
  });

  run("sin combate: la ventana dorada aparece al empezar el nivel", () => {
    const state = getState();
    const prevPending = state.stats.goldPending;
    const prevUnlocked = state.stats.goldUnlocked;
    const prevCombat = state.settings.combat;
    state.stats.goldPending = true;
    state.stats.goldUnlocked = false;
    state.settings.combat = false;
    try {
      const el = renderLevel({ levelId: "w1-l1" });
      const modal = el.querySelector('[data-el="gold-modal"]');
      expect(modal).not.toBeNull();
      expect(modal.hidden).toBe(false);
      expect(modal.textContent).toContain("¡Has desbloqueado un reto extra!");
      expect(getState().stats.goldUnlocked).toBe(true);
      expect(getState().stats.goldPending).toBe(false);
    } finally {
      state.stats.goldPending = prevPending;
      state.stats.goldUnlocked = prevUnlocked;
      state.settings.combat = prevCombat;
    }
  });
});