// =====================================================
// ISTQB Quest — tests/data.test.mjs
// Integridad del banco de preguntas: ids únicos, campos
// completos, índices correctos y opciones sin duplicados.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import { worlds } from "../js/data/index.js";

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
      expect(typeof q.correct, `correct inválido en ${q.id}`).toBe("number");
    }
  });

  test("cada pregunta tiene al menos 3 opciones y un índice correcto válido", () => {
    for (const q of allQuestions) {
      expect(q.options.length, `opciones insuficientes en ${q.id}`).toBeGreaterThanOrEqual(3);
      expect(q.correct, `índice correct inválido en ${q.id}`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `índice correct fuera de rango en ${q.id}`).toBeLessThan(q.options.length);
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

  test("el mundo 1 tiene 5 niveles y 37 preguntas", () => {
    const world1 = worlds[0];
    expect(world1.levels.length).toBe(5);
    const total = world1.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(37);
  });

  test("el mundo 2 tiene 4 niveles y 27 preguntas", () => {
    const world2 = worlds[1];
    expect(world2.levels.length).toBe(4);
    const total = world2.levels.reduce((sum, l) => sum + l.questions.length, 0);
    expect(total).toBe(27);
  });
});
