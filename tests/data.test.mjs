// =====================================================
// ISTQB Quest — tests/data.test.mjs
// Integridad del banco de preguntas: ids únicos, campos
// completos, índices correctos y opciones sin duplicados.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import { worlds } from "../js/data/index.js";
import { bossBank } from "../js/data/boss/bank.js";

const TEXT_FIELDS = [
  "id",
  "question",
  "explanation",
  "example",
  "useCase",
  "mistake",
  "syllabusRef",
];

const allLevels = worlds.flatMap((world) => world.levels.map((level) => ({ world, level })));
const allQuestions = allLevels.flatMap(({ level }) => level.questions);

describe("integridad del banco de preguntas", () => {
  test("los ids de nivel son únicos", () => {
    const ids = allLevels.map(({ level }) => level.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("los ids de pregunta son únicos en todo el juego", () => {
    const ids = allQuestions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  test("cada pregunta tiene todos los campos requeridos", () => {
    for (const q of allQuestions) {
      for (const field of TEXT_FIELDS) {
        expect(q[field], `falta el campo "${field}" en la pregunta ${q.id}`).toBeTruthy();
      }
      expect(Array.isArray(q.options), `options inválido en ${q.id}`).toBe(true);
      const correctOk =
        typeof q.correct === "number" ||
        (Array.isArray(q.correct) && q.correct.length >= 2 && q.correct.every((c) => typeof c === "number"));
      expect(correctOk, `correct inválido en ${q.id}`).toBe(true);
    }
  });

  test("cada pregunta tiene al menos 3 opciones y sus índices correctos son válidos", () => {
    for (const q of allQuestions) {
      expect(q.options.length, `opciones insuficientes en ${q.id}`).toBeGreaterThanOrEqual(3);
      const idxs = Array.isArray(q.correct) ? q.correct : [q.correct];
      for (const c of idxs) {
        expect(c, `índice correct inválido en ${q.id}`).toBeGreaterThanOrEqual(0);
        expect(c, `índice correct fuera de rango en ${q.id}`).toBeLessThan(q.options.length);
      }
    }
  });

  test("las preguntas multi son coherentes (type, sin duplicados, mínimo 2 correctas)", () => {
    for (const q of allQuestions) {
      if (q.type === "multi") {
        expect(Array.isArray(q.correct), `${q.id} debería tener correct en array`).toBe(true);
        expect(q.correct.length, `${q.id} necesita al menos 2 correctas`).toBeGreaterThanOrEqual(2);
        expect(new Set(q.correct).size, `${q.id} tiene índices duplicados`).toBe(q.correct.length);
      } else {
        expect(typeof q.correct, `${q.id} single debería tener correct numérico`).toBe("number");
      }
    }
  });

  test("no hay opciones duplicadas dentro de una misma pregunta", () => {
    for (const q of allQuestions) {
      const normalized = q.options.map((o) => o.trim().toLowerCase());
      expect(new Set(normalized).size, `opciones duplicadas en ${q.id}`).toBe(normalized.length);
    }
  });

  test("cada nivel tiene id, número, título, topic y tiempo válidos", () => {
    for (const { world, level } of allLevels) {
      expect(level.id.startsWith(world.id)).toBe(true);
      expect(level.number).toBeGreaterThan(0);
      expect(level.title.length).toBeGreaterThan(0);
      expect(level.topic.length).toBeGreaterThan(0);
      expect(level.timePerQuestion).toBeGreaterThan(0);
    }
  });

  test("el mundo 1 tiene 5 niveles y 39 preguntas (37 simple + 2 multi)", () => {
    const world1 = worlds[0];
    expect(world1.levels.length).toBe(5);
    const total = world1.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(39);
  });

  test("el mundo 2 tiene 4 niveles y 29 preguntas (27 simple + 2 multi)", () => {
    const world2 = worlds[1];
    expect(world2.levels.length).toBe(4);
    const total = world2.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(29);
  });

  test("el mundo 3 tiene 3 niveles y 24 preguntas (22 simple + 2 multi)", () => {
    const world3 = worlds[2];
    expect(world3.levels.length).toBe(3);
    const total = world3.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(24);
  });

  test("el mundo 4 tiene 6 niveles y 47 preguntas (45 simple + 2 multi)", () => {
    const world4 = worlds[3];
    expect(world4.levels.length).toBe(6);
    const total = world4.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(47);
  });

  test("el mundo 5 tiene 4 niveles y 32 preguntas (30 simple + 2 multi)", () => {
    const world5 = worlds[4];
    expect(world5.levels.length).toBe(4);
    const total = world5.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(32);
  });

  test("el mundo 6 tiene 3 niveles y 24 preguntas (22 simple + 2 multi)", () => {
    const world6 = worlds[5];
    expect(world6.levels.length).toBe(3);
    const total = world6.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(24);
  });

  test("los 3 desafíos cruzados tienen 1 nivel y 10 preguntas cada uno", () => {
    const challenges = worlds.slice(6);
    expect(challenges.length).toBe(3);
    for (const c of challenges) {
      expect(c.type).toBe("challenge");
      expect(c.levels.length).toBe(1);
      expect(c.levels[0].questions.length).toBe(10);
    }
  });
});

describe("integridad del banco del Boss", () => {
  test("los ids no colisionan con el resto del juego", () => {
    const all = [...allQuestions.map((q) => q.id), ...bossBank.map((q) => q.id)];
    expect(new Set(all).size).toBe(all.length);
  });

  test("cada pregunta tiene campos completos, opciones válidas y capítulo (1–6)", () => {
    for (const q of bossBank) {
      for (const field of TEXT_FIELDS) {
        expect(q[field], `falta el campo "${field}" en ${q.id}`).toBeTruthy();
      }
      expect(Array.isArray(q.options), `options inválido en ${q.id}`).toBe(true);
      expect(q.options.length, `opciones insuficientes en ${q.id}`).toBeGreaterThanOrEqual(3);
      const idxs = Array.isArray(q.correct) ? q.correct : [q.correct];
      for (const c of idxs) {
        expect(c, `índice correct inválido en ${q.id}`).toBeGreaterThanOrEqual(0);
        expect(c, `índice correct fuera de rango en ${q.id}`).toBeLessThan(q.options.length);
      }
      expect(typeof q.chapter, `chapter inválido en ${q.id}`).toBe("number");
      expect(q.chapter).toBeGreaterThanOrEqual(1);
      expect(q.chapter).toBeLessThanOrEqual(6);
      const normalized = q.options.map((o) => o.trim().toLowerCase());
      expect(new Set(normalized).size, `opciones duplicadas en ${q.id}`).toBe(normalized.length);
    }
  });
});
