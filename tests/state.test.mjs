// =====================================================
// ISTQB Quest — tests/state.test.mjs
// Tests de la persistencia del progreso (state.js).
// =====================================================

import "./helpers.mjs";
import { describe, test, expect, beforeEach } from "bun:test";
import { recordLevelResult, recordBossResult, getState, resetProgress } from "../js/state.js";

beforeEach(() => {
  resetProgress();
});

describe("progreso persistente", () => {
  test("conserva el máximo de estrellas, la mejor racha y cuenta intentos", () => {
    recordLevelResult("w1-l1", { stars: 2, bestStreak: 3, correct: 4, wrong: 1 });
    recordLevelResult("w1-l1", { stars: 1, bestStreak: 2, correct: 3, wrong: 2 });

    const p = getState().progress["w1-l1"];
    expect(p.stars).toBe(2);
    expect(p.attempts).toBe(2);
    expect(p.bestStreak).toBe(3);
    expect(p.completed).toBe(true);
  });

  test("acumula estadísticas globales", () => {
    recordLevelResult("w1-l1", { stars: 3, bestStreak: 5, correct: 5, wrong: 0 });
    expect(getState().stats.totalCorrect).toBe(5);
    expect(getState().stats.bestStreak).toBe(5);
  });

  test("un intento perdido no marca el nivel como completado", () => {
    recordLevelResult("w1-l1", { stars: 0, bestStreak: 2, correct: 2, wrong: 3 });
    expect(getState().progress["w1-l1"].completed).toBe(false);
  });

  test("el Boss conserva el mejor resultado y solo marca aprobado al aprobar", () => {
    recordBossResult({ correct: 20, passed: false });
    expect(getState().stats.bossCleared).toBe(false);
    expect(getState().stats.bossBest).toBe(20);

    recordBossResult({ correct: 30, passed: true });
    expect(getState().stats.bossCleared).toBe(true);
    expect(getState().stats.bossBest).toBe(30);

    recordBossResult({ correct: 26, passed: true });
    expect(getState().stats.bossBest).toBe(30);
    expect(getState().stats.bossCleared).toBe(true);
  });
});
