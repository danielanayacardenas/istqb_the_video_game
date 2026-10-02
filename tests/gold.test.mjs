// =====================================================
// ISTQB Quest — tests/gold.test.mjs
// Reto Dorado: desbloqueo por estrellas, armado de las 10
// preguntas y contador de estrellas doradas.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect, beforeEach } from "bun:test";
import {
  GOLD_LEVEL_ID,
  GOLD_THRESHOLD,
  announceGoldChallenge,
  buildGoldLevel,
  goldStars,
  refreshGoldPending,
} from "../js/engine/gold.js";
import { goldQuestions } from "../js/data/gold/goldBank.js";
import { worlds } from "../js/data/index.js";
import { globalStars } from "../js/engine/progress.js";
import { getState, recordLevelResult, resetProgress } from "../js/state.js";

const W1_LEVELS = ["w1-l1", "w1-l2", "w1-l3", "w1-l4", "w1-l5"];
const W2_LEVELS = ["w2-l1", "w2-l2", "w2-l3", "w2-l4"];
const W3_LEVELS = ["w3-l1", "w3-l2", "w3-l3"];
const GOLDEN_IDS = new Set(goldQuestions.map((q) => q.id));

function complete(ids, stars = 3) {
  for (const id of ids) {
    recordLevelResult(id, { stars, bestStreak: 3, correct: 5, wrong: 0 });
  }
}

/** Ids de pregunta de los niveles completados indicados. */
function questionIdsOf(levelIds) {
  const set = new Set(levelIds);
  return new Set(
    worlds.flatMap((w) =>
      w.levels.filter((l) => set.has(l.id)).flatMap((l) => l.questions.map((q) => q.id))
    )
  );
}

const seenOf = (level) => level.questions.filter((q) => !GOLDEN_IDS.has(q.id));

beforeEach(() => {
  resetProgress();
});

describe("Reto Dorado: desbloqueo", () => {
  test("no queda pendiente por debajo del umbral", () => {
    complete([...W1_LEVELS, "w2-l1", "w2-l2"], 2); // 14 estrellas
    expect(refreshGoldPending()).toBe(false);
    expect(getState().stats.goldPending).toBe(false);
  });

  test("queda pendiente al llegar a 20 estrellas normales", () => {
    complete(W1_LEVELS); // 15
    complete(["w2-l1"]); // 18
    complete(["w2-l2"], 2); // 20
    expect(globalStars()).toBe(GOLD_THRESHOLD);
    expect(refreshGoldPending()).toBe(true);
    expect(getState().stats.goldPending).toBe(true);
    expect(getState().stats.goldUnlocked).toBe(false);
  });

  test("el anuncio lo desbloquea y no se vuelve a ofrecer", () => {
    complete([...W1_LEVELS, "w2-l1", "w2-l2"]);
    refreshGoldPending();
    announceGoldChallenge();
    expect(getState().stats.goldUnlocked).toBe(true);
    expect(getState().stats.goldPending).toBe(false);
    expect(refreshGoldPending()).toBe(false);
  });
});

describe("Reto Dorado: selección de preguntas", () => {
  beforeEach(() => {
    complete(W1_LEVELS);
    complete(["w2-l1", "w2-l2"]);
  });

  test("arma 10 preguntas: 1 dorada nueva + 9 ya vistas", () => {
    const level = buildGoldLevel(getState().progress);
    expect(level.id).toBe(GOLD_LEVEL_ID);
    expect(level.questions.length).toBe(10);
    expect(level.timePerQuestion).toBe(30);
    expect(level.lives).toBe(3);

    const golden = level.questions.filter((q) => GOLDEN_IDS.has(q.id));
    expect(golden.length).toBe(1);
    expect(["w1", "w2"]).toContain(golden[0].world);
  });

  test("las 9 vistas salen solo de niveles completados", () => {
    const level = buildGoldLevel(getState().progress);
    const allowed = questionIdsOf([...W1_LEVELS, "w2-l1", "w2-l2"]);
    const forbidden = questionIdsOf(["w2-l3", "w2-l4"]);

    const seen = seenOf(level);
    expect(seen.length).toBe(9);
    for (const q of seen) {
      expect(allowed.has(q.id), `${q.id} no viene de un nivel completado`).toBe(true);
      expect(forbidden.has(q.id), `${q.id} es de un nivel no completado`).toBe(false);
    }
  });

  test("reparte hasta 3 por mundo y completa el resto del pool", () => {
    const level = buildGoldLevel(getState().progress);
    const seen = seenOf(level);
    const byWorld = {};
    for (const q of seen) {
      const w = q.id.split("-")[0];
      byWorld[w] = (byWorld[w] ?? 0) + 1;
    }
    // Ambos mundos completados participan del reparto inicial.
    expect(byWorld.w1).toBeGreaterThanOrEqual(3);
    expect(byWorld.w2).toBeGreaterThanOrEqual(3);
    expect(seen.length).toBe(9);
  });

  test("con 4 o más mundos completados nunca pasa de 3 por mundo", () => {
    complete(W2_LEVELS);
    complete(W3_LEVELS);
    complete(["w4-l1", "w4-l2", "w4-l3", "w4-l4", "w4-l5", "w4-l6"]);

    const level = buildGoldLevel(getState().progress);
    const seen = seenOf(level);
    expect(seen.length).toBe(9);
    const byWorld = {};
    for (const q of seen) {
      const w = q.id.split("-")[0];
      byWorld[w] = (byWorld[w] ?? 0) + 1;
    }
    for (const [worldId, count] of Object.entries(byWorld)) {
      expect(count, `${worldId} aporta ${count} preguntas`).toBeLessThanOrEqual(3);
    }
  });
});

describe("Reto Dorado: estrellas", () => {
  test("las doradas se guardan aparte de las normales", () => {
    complete(W1_LEVELS); // 15 normales
    recordLevelResult(GOLD_LEVEL_ID, { stars: 3, bestStreak: 5, correct: 10, wrong: 0 });

    expect(goldStars()).toBe(3);
    expect(globalStars()).toBe(15);
    expect(getState().progress[GOLD_LEVEL_ID].completed).toBe(true);
  });
});