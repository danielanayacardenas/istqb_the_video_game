// =====================================================
// ISTQB Quest — tests/engine.test.mjs
// Tests del motor de juego: vidas, racha, estrellas,
// timeout, aleatorización y multi-selección.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import { createGame, isMultiQuestion, sameSet } from "../js/engine/game.js";
import { starsFor } from "../js/engine/scoring.js";
import { world1 } from "../js/data/worlds/world1.js";

const level = world1.levels[0];

/** Selección incorrecta para la pregunta actual (funciona en simple y multi). */
function wrongSelection(q) {
  if (q.correctIndexes.length === 1) return [(q.correctIndexes[0] + 1) % q.options.length];
  return [q.correctIndexes[0]];
}

describe("motor de juego", () => {
  test("el nivel 1.1 tiene 6 preguntas (5 simple + 1 multi)", () => {
    expect(level.questions.length).toBe(6);
    expect(level.questions.filter(isMultiQuestion).length).toBe(1);
  });

  test("partida perfecta: gana sin fallos, racha x6 y 3 estrellas", () => {
    const g = createGame(level);
    let status = "next";
    while (status === "next") {
      g.submit(g.current().correctIndexes);
      status = g.advance();
    }
    expect(status).toBe("won");
    expect(g.wrong).toBe(0);
    expect(g.bestStreak).toBe(6);
    expect(starsFor(g.lives, g.won)).toBe(3);
  });

  test("un fallo: gana con 2 vidas y 2 estrellas", () => {
    const g = createGame(level);
    g.submit(wrongSelection(g.current()));
    let status = g.advance();
    while (status === "next") {
      g.submit(g.current().correctIndexes);
      status = g.advance();
    }
    expect(status).toBe("won");
    expect(g.lives).toBe(2);
    expect(starsFor(g.lives, g.won)).toBe(2);
  });

  test("tres fallos: pierde con 0 vidas y 0 estrellas", () => {
    const g = createGame(level);
    let status = "next";
    while (status === "next") {
      g.submit(wrongSelection(g.current()));
      status = g.advance();
    }
    expect(status).toBe("lost");
    expect(g.lives).toBe(0);
    expect(starsFor(g.lives, g.won)).toBe(0);
  });

  test("el timeout cuenta como fallo y quita una vida", () => {
    const g = createGame(level);
    g.submit(null, { timedOut: true });
    expect(g.wrong).toBe(1);
    expect(g.lives).toBe(2);
    expect(g.streak).toBe(0);
  });

  test("preguntas y respuestas se barajan entre intentos", () => {
    const orders = new Set();
    const correctPositions = new Set();
    for (let i = 0; i < 25; i++) {
      const g = createGame(level);
      const ids = [];
      while (true) {
        ids.push(g.current().id);
        correctPositions.add(g.current().correctIndexes[0]);
        if (g.advance() !== "next") break;
      }
      orders.add(ids.join(","));
    }
    expect(orders.size).toBeGreaterThan(1);
    expect(correctPositions.size).toBeGreaterThan(1);
  });
});

describe("multi-selección", () => {
  const multiLevel = {
    id: "test-multi",
    lives: 3,
    questions: [
      {
        id: "tm-1",
        type: "multi",
        question: "Elige dos opciones.",
        options: ["correcta A", "distractor B", "correcta C", "distractor D", "distractor E"],
        correct: [0, 2],
        explanation: "x",
        example: "x",
        useCase: "x",
        mistake: "x",
        syllabusRef: "x",
      },
    ],
  };

  test("acierto solo con el conjunto exacto (el orden de envío no importa)", () => {
    const g = createGame(multiLevel);
    const q = g.current();
    expect(q.correctIndexes.length).toBe(2);
    const reversed = [...q.correctIndexes].reverse();
    const r = g.submit(reversed);
    expect(r.isCorrect).toBe(true);
    expect(g.correct).toBe(1);
  });

  test("selección parcial falla y quita una vida", () => {
    const g = createGame(multiLevel);
    const q = g.current();
    const r = g.submit([q.correctIndexes[0]]);
    expect(r.isCorrect).toBe(false);
    expect(g.wrong).toBe(1);
    expect(g.lives).toBe(2);
  });

  test("selección con una opción de más falla", () => {
    const g = createGame(multiLevel);
    const q = g.current();
    const extra = q.options.map((_, i) => i).find((i) => !q.correctIndexes.includes(i));
    const r = g.submit([...q.correctIndexes, extra]);
    expect(r.isCorrect).toBe(false);
  });

  test("el timeout en multi falla y quita una vida", () => {
    const g = createGame(multiLevel);
    const r = g.submit(null, { timedOut: true });
    expect(r.isCorrect).toBe(false);
    expect(g.lives).toBe(2);
  });

  test("sameSet compara conjuntos sin importar el orden", () => {
    expect(sameSet([0, 2], [2, 0])).toBe(true);
    expect(sameSet([0], [0, 2])).toBe(false);
    expect(sameSet([], [])).toBe(true);
  });
});
