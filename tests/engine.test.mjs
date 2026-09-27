// =====================================================
// ISTQB Quest — tests/engine.test.mjs
// Tests del motor de juego: vidas, racha, estrellas,
// timeout y aleatorización.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import { createGame } from "../js/engine/game.js";
import { starsFor } from "../js/engine/scoring.js";
import { world1 } from "../js/data/worlds/world1.js";

const level = world1.levels[0];

describe("motor de juego", () => {
  test("el nivel 1.1 tiene 5 preguntas", () => {
    expect(level.questions.length).toBe(5);
  });

  test("partida perfecta: gana sin fallos, racha x5 y 3 estrellas", () => {
    const g = createGame(level);
    let status = "next";
    while (status === "next") {
      g.submit(g.current().correctIndex);
      status = g.advance();
    }
    expect(status).toBe("won");
    expect(g.wrong).toBe(0);
    expect(g.bestStreak).toBe(5);
    expect(starsFor(g.lives, g.won)).toBe(3);
  });

  test("un fallo: gana con 2 vidas y 2 estrellas", () => {
    const g = createGame(level);
    g.submit((g.current().correctIndex + 1) % 4);
    let status = g.advance();
    while (status === "next") {
      g.submit(g.current().correctIndex);
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
      g.submit((g.current().correctIndex + 1) % 4);
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
        correctPositions.add(g.current().correctIndex);
        if (g.advance() !== "next") break;
      }
      orders.add(ids.join(","));
    }
    expect(orders.size).toBeGreaterThan(1);
    expect(correctPositions.size).toBeGreaterThan(1);
  });
});
