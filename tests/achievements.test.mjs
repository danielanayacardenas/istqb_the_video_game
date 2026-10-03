// =====================================================
// ISTQB Quest — tests/achievements.test.mjs
// Tests del sistema de logros: comprobación pura,
// persistencia y desbloqueo único.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect, beforeEach } from "bun:test";
import {
  ACHIEVEMENTS,
  unlockedAchievements,
  checkAchievements,
} from "../js/engine/achievements.js";
import { worlds } from "../js/data/index.js";
import { getState, resetProgress } from "../js/state.js";

const emptyStats = {
  totalCorrect: 0,
  totalWrong: 0,
  bestStreak: 0,
  bossCleared: false,
  bossBest: 0,
};

/** Marca todos los niveles de los mundos indicados como completados con 3 estrellas. */
function completeWorlds(progress, list) {
  for (const w of list) {
    for (const l of w.levels) {
      progress[l.id] = { completed: true, stars: 3, attempts: 1, bestStreak: 5 };
    }
  }
  return progress;
}

beforeEach(() => {
  resetProgress();
});

describe("definiciones de logros", () => {
  test("hay 9 logros con datos completos", () => {
    expect(ACHIEVEMENTS.length).toBe(9);
    const ids = ACHIEVEMENTS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const a of ACHIEVEMENTS) {
      expect(a.name.length).toBeGreaterThan(0);
      expect(a.description.length).toBeGreaterThan(0);
      expect(typeof a.check).toBe("function");
    }
  });

  test("estado vacío: ningún logro desbloqueado", () => {
    expect(unlockedAchievements({}, emptyStats)).toEqual([]);
  });
});

describe("comprobación de logros", () => {
  test("primer paso y perfeccionista con el primer nivel", () => {
    const ids = unlockedAchievements({ "w1-l1": { completed: true, stars: 3 } }, emptyStats);
    expect(ids).toContain("first-step");
    expect(ids).toContain("perfectionist");
  });

  test("explorador requiere los 6 mundos; retador, los 3 desafíos; coleccionista, 30 estrellas", () => {
    const progress = completeWorlds({}, worlds.slice(0, 6));
    let ids = unlockedAchievements(progress, emptyStats);
    expect(ids).toContain("explorer");
    expect(ids).not.toContain("challenger");
    expect(ids).toContain("collector");

    completeWorlds(progress, worlds.slice(6));
    ids = unlockedAchievements(progress, emptyStats);
    expect(ids).toContain("challenger");
  });

  test("graduado y excelencia dependen del Boss", () => {
    const cleared = { ...emptyStats, bossCleared: true, bossBest: 30 };
    expect(unlockedAchievements({}, cleared)).toContain("graduated");

    const excellent = { ...emptyStats, bossCleared: true, bossBest: 36 };
    expect(unlockedAchievements({}, excellent)).toContain("excellent");

    const failed = { ...emptyStats, bossCleared: false, bossBest: 40 };
    expect(unlockedAchievements({}, failed)).not.toContain("graduated");
  });
});

describe("persistencia de logros", () => {
  test("checkAchievements persiste y solo devuelve los nuevos", () => {
    expect(checkAchievements()).toEqual([]);

    const state = getState();
    state.progress["w1-l1"] = { completed: true, stars: 3, attempts: 1, bestStreak: 3 };
    state.stats.bestStreak = 5;

    const ids = checkAchievements().map((a) => a.id);
    expect(ids).toContain("first-step");
    expect(ids).toContain("perfectionist");
    expect(ids).toContain("on-fire");

    const saved = getState().achievements;
    for (const id of ids) expect(saved).toContain(id);

    // Una segunda comprobación no vuelve a desbloquear nada.
    expect(checkAchievements()).toEqual([]);
  });
});
