// =====================================================
// ISTQB Quest — tests/progress.test.mjs
// Tests de desbloqueo de mundos y niveles, y estadísticas.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import {
  isWorldUnlocked,
  isLevelUnlocked,
  isWorldCompleted,
  worldStats,
  globalStars,
} from "../js/engine/progress.js";
import { worlds } from "../js/data/index.js";

// Mundos ficticios para probar las reglas:
//  a → tiene 2 niveles · b → vacío (sin contenido) · c → tiene 1 nivel
const fakeWorlds = [
  { id: "a", number: 1, title: "A", levels: [{ id: "a-l1" }, { id: "a-l2" }] },
  { id: "b", number: 2, title: "B (vacío)", levels: [] },
  { id: "c", number: 3, title: "C", levels: [{ id: "c-l1" }] },
];

describe("desbloqueo de mundos", () => {
  test("el mundo 1 siempre está desbloqueado", () => {
    expect(isWorldUnlocked(0, {})).toBe(true);
  });

  test("el mundo 2 está bloqueado al inicio", () => {
    expect(isWorldUnlocked(1, {}, fakeWorlds)).toBe(false);
  });

  test("completar todos los niveles del mundo 1 desbloquea el mundo 2", () => {
    const progress = { "a-l1": { completed: true }, "a-l2": { completed: true } };
    expect(isWorldUnlocked(1, progress, fakeWorlds)).toBe(true);
  });

  test("un mundo sin contenido no desbloquea al siguiente", () => {
    const progress = { "a-l1": { completed: true }, "a-l2": { completed: true } };
    expect(isWorldUnlocked(2, progress, fakeWorlds)).toBe(false);
  });
});

describe("desbloqueo secuencial de niveles", () => {
  test("el nivel 1.2 está bloqueado hasta completar el 1.1", () => {
    expect(isLevelUnlocked(0, 1, {}, fakeWorlds)).toBe(false);
    expect(isLevelUnlocked(0, 1, { "a-l1": { completed: true } }, fakeWorlds)).toBe(true);
  });

  test("los niveles de un mundo bloqueado no están accesibles", () => {
    expect(isLevelUnlocked(1, 0, {}, fakeWorlds)).toBe(false);
  });
});

describe("estadísticas", () => {
  test("worldStats calcula niveles completados y estrellas", () => {
    const progress = {
      "a-l1": { completed: true, stars: 3 },
      "a-l2": { completed: true, stars: 1 },
    };
    expect(worldStats(fakeWorlds[0], progress)).toEqual({
      completed: 2,
      totalLevels: 2,
      stars: 4,
      maxStars: 6,
    });
  });

  test("globalStars suma las estrellas de todos los mundos", () => {
    const progress = {
      "a-l1": { completed: true, stars: 3 },
      "c-l1": { completed: true, stars: 2 },
    };
    expect(globalStars(progress, fakeWorlds)).toBe(5);
  });

  test("isWorldCompleted requiere que todos los niveles estén completos", () => {
    expect(isWorldCompleted(fakeWorlds[0], { "a-l1": { completed: true } })).toBe(false);
    expect(
      isWorldCompleted(fakeWorlds[0], {
        "a-l1": { completed: true },
        "a-l2": { completed: true },
      })
    ).toBe(true);
  });

  test("con los datos reales: mundo 2 bloqueado al inicio, mundo 1 abierto", () => {
    expect(isWorldUnlocked(1, {}, worlds)).toBe(false);
    expect(isWorldUnlocked(0, {}, worlds)).toBe(true);
  });
});
