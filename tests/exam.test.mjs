// =====================================================
// ISTQB Quest — tests/exam.test.mjs
// Tests del Boss Final: sorteo (40 de 60 con cuotas),
// puntuación, umbral de aprobación y formato de tiempo.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import {
  drawExam,
  scoreExam,
  formatTime,
  EXAM_SIZE,
  CHAPTER_QUOTAS,
} from "../js/engine/exam.js";
import { bossBank } from "../js/data/boss/bank.js";

describe("sorteo del examen", () => {
  test("sortea 40 preguntas sin repetir", () => {
    const qs = drawExam(bossBank);
    expect(EXAM_SIZE).toBe(40);
    expect(qs.length).toBe(40);
    expect(new Set(qs.map((q) => q.id)).size).toBe(40);
  });

  test("respeta las cuotas por capítulo", () => {
    const qs = drawExam(bossBank);
    for (const [chapter, quota] of Object.entries(CHAPTER_QUOTAS)) {
      const count = qs.filter((q) => q.chapter === Number(chapter)).length;
      expect(count, `capítulo ${chapter}`).toBe(quota);
    }
  });

  test("todas las preguntas provienen del banco", () => {
    const bankIds = new Set(bossBank.map((q) => q.id));
    for (const q of drawExam(bossBank)) {
      expect(bankIds.has(q.id)).toBe(true);
    }
  });

  test("rellena con el resto del banco si un capítulo no tiene suficientes preguntas", () => {
    const small = bossBank.slice(0, 10); // todas del capítulo 1
    const qs = drawExam(small, { quotas: { 1: 5, 2: 5 } });
    expect(qs.length).toBe(10);
    expect(new Set(qs.map((q) => q.id)).size).toBe(10);
  });
});

describe("puntuación del examen", () => {
  const makeQuestions = (n) =>
    Array.from({ length: n }, (_, i) => ({ id: `q${i}`, chapter: 1, correct: 0 }));

  test("umbral de aprobación: 26 de 40 aprueba; 25 no", () => {
    const qs = makeQuestions(40);
    const pass = Array(40).fill(null);
    for (let i = 0; i < 26; i++) pass[i] = 0;
    expect(scoreExam(qs, pass).passed).toBe(true);

    const fail = Array(40).fill(null);
    for (let i = 0; i < 25; i++) fail[i] = 0;
    expect(scoreExam(qs, fail).passed).toBe(false);
  });

  test("las respuestas en blanco cuentan como incorrectas", () => {
    const qs = makeQuestions(4);
    const r = scoreExam(qs, [0, 0, null, null]);
    expect(r.correct).toBe(2);
    expect(r.percent).toBe(0.5);
    expect(r.passed).toBe(false);
  });

  test("calcula el desglose por capítulo", () => {
    const qs = [
      { id: "a", chapter: 1, correct: 1 },
      { id: "b", chapter: 1, correct: 0 },
      { id: "c", chapter: 2, correct: 0 },
    ];
    const r = scoreExam(qs, [1, 1, 0]);
    expect(r.perChapter[1]).toEqual({ correct: 1, total: 2 });
    expect(r.perChapter[2]).toEqual({ correct: 1, total: 1 });
  });

  test("formatTime formatea mm:ss", () => {
    expect(formatTime(4500)).toBe("75:00");
    expect(formatTime(59)).toBe("00:59");
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(-5)).toBe("00:00");
  });
});

describe("banco del Boss", () => {
  test("tiene 60 preguntas con suficientes por capítulo para cubrir las cuotas", () => {
    expect(bossBank.length).toBe(60);
    for (const [chapter, quota] of Object.entries(CHAPTER_QUOTAS)) {
      const count = bossBank.filter((q) => q.chapter === Number(chapter)).length;
      expect(count, `capítulo ${chapter}`).toBeGreaterThanOrEqual(quota);
    }
  });
});
