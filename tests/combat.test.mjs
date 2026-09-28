// =====================================================
// ISTQB Quest — tests/combat.test.mjs
// Tests del motor del duelo de combate (puro).
// =====================================================

import { describe, test, expect } from "bun:test";
import { createCombat } from "../js/engine/combat.js";

describe("duelo de combate", () => {
  test("el acierto dispara y baja el aguante del enemigo", () => {
    const c = createCombat({ lives: 3, questions: 5 });
    const e = c.hit();
    expect(e.type).toBe("player-shot");
    expect(e.enemyHp).toBe(4);
    expect(e.playerHp).toBe(3);
    expect(c.hits).toBe(1);
    expect(c.misses).toBe(0);
  });

  test("el fallo hace que el enemigo dispare y el jugador pierda vida", () => {
    const c = createCombat({ lives: 3, questions: 5 });
    const e = c.miss();
    expect(e.type).toBe("enemy-shot");
    expect(e.playerHp).toBe(2);
    expect(e.enemyHp).toBe(5);
    expect(c.misses).toBe(1);
  });

  test("el aguante del enemigo no baja de 0 y la vida del jugador tampoco", () => {
    const c = createCombat({ lives: 2, questions: 2 });
    c.hit();
    c.hit();
    const extraHit = c.hit();
    expect(extraHit.enemyHp).toBe(0);

    c.miss();
    c.miss();
    const extraMiss = c.miss();
    expect(extraMiss.playerHp).toBe(0);
  });

  test("finish declara victoria o derrota y solo puede cerrarse una vez", () => {
    const win = createCombat({ lives: 3, questions: 3 });
    const won = win.finish(true);
    expect(won.type).toBe("enemy-down");
    expect(won.outcome).toBe("victory");
    expect(win.finish(true)).toBe(null);
    expect(win.finish(false)).toBe(null);

    const lose = createCombat({ lives: 3, questions: 3 });
    const lost = lose.finish(false);
    expect(lost.type).toBe("player-down");
    expect(lost.outcome).toBe("defeat");
  });

  test("tras cerrarse el duelo, hit y miss no emiten eventos", () => {
    const c = createCombat({ lives: 3, questions: 3 });
    c.finish(true);
    expect(c.hit()).toBe(null);
    expect(c.miss()).toBe(null);
  });

  test("enemyHpRatio refleja el aguante restante", () => {
    const c = createCombat({ lives: 3, questions: 4 });
    expect(c.enemyHpRatio()).toBe(1);
    c.hit();
    expect(c.enemyHpRatio()).toBe(0.75);
    expect(createCombat({ lives: 3, questions: 0 }).enemyHpRatio()).toBe(0);
  });
});
