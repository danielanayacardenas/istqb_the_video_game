// =====================================================
// ISTQB Quest — tests/exam.test.mjs
// Tests del Boss Final: sorteo (40 de 61 con cuotas y multi),
// puntuación, umbral de aprobación y formato de tiempo.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import {
  drawExam,
  scoreExam,
  formatTime,
  isCorrectAnswer,
  EXAM_SIZE,
  CHAPTER_QUOTAS,
  MULTI_TARGET,
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

  test("incluye multis hasta el objetivo y respeta las cuotas", () => {
    const make = (id, chapter, multi) => ({
      id,
      chapter,
      ...(multi ? { type: "multi", correct: [0, 1] } : { correct: 0 }),
    });
    const bank = [
      ...Array.from({ length: 10 }, (_, i) => make(`s${i}`, 1, false)),
      ...Array.from({ length: 4 }, (_, i) => make(`m${i}`, 1, true)),
    ];
    const qs = drawExam(bank, { quotas: { 1: 8 }, multiTarget: 3 });
    expect(qs.length).toBe(8);
    expect(qs.filter((q) => Array.isArray(q.correct)).length).toBe(3);

    const qs2 = drawExam(bank, { quotas: { 1: 8 }, multiTarget: 10 });
    expect(qs2.filter((q) => Array.isArray(q.correct)).length).toBe(4);
  });

  test("con el banco real, el sorteo aprovecha las multis (1 a MULTI_TARGET)", () => {
    const qs = drawExam(bossBank);
    const multis = qs.filter((q) => Array.isArray(q.correct)).length;
    expect(multis).toBeGreaterThanOrEqual(1);
    expect(multis).toBeLessThanOrEqual(MULTI_TARGET);
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

  test("multi: solo acierta el conjunto exacto (sin crédito parcial)", () => {
    const q = { id: "m1", chapter: 1, correct: [0, 2] };
    expect(isCorrectAnswer(q, [0, 2])).toBe(true);
    expect(isCorrectAnswer(q, [2, 0])).toBe(true);
    expect(isCorrectAnswer(q, [0])).toBe(false);
    expect(isCorrectAnswer(q, [0, 1, 2])).toBe(false);
    expect(isCorrectAnswer(q, null)).toBe(false);
    expect(isCorrectAnswer(q, [])).toBe(false);
  });

  test("scoreExam mezcla preguntas simples y multi correctamente", () => {
    const qs = [
      { id: "s", chapter: 1, correct: 1 },
      { id: "m", chapter: 1, correct: [0, 2] },
      { id: "m2", chapter: 2, correct: [1, 3] },
    ];
    const r = scoreExam(qs, [1, [2, 0], [1, 2]]);
    expect(r.correct).toBe(2);
    expect(r.perChapter[1]).toEqual({ correct: 2, total: 2 });
    expect(r.perChapter[2]).toEqual({ correct: 0, total: 1 });
  });

  test("formatTime formatea mm:ss", () => {
    expect(formatTime(4500)).toBe("75:00");
    expect(formatTime(59)).toBe("00:59");
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(-5)).toBe("00:00");
  });
});

describe("banco del Boss", () => {
  test("tiene 61 preguntas con suficientes por capítulo para cubrir las cuotas", () => {
    expect(bossBank.length).toBe(61);
    for (const [chapter, quota] of Object.entries(CHAPTER_QUOTAS)) {
      const count = bossBank.filter((q) => q.chapter === Number(chapter)).length;
      expect(count, `capítulo ${chapter}`).toBeGreaterThanOrEqual(quota);
    }
  });

  test("incluye preguntas multi bien formadas", () => {
    const multis = bossBank.filter((q) => Array.isArray(q.correct));
    expect(multis.length).toBeGreaterThanOrEqual(1);
    for (const q of multis) {
      expect(q.type, `${q.id} debería ser type multi`).toBe("multi");
      expect(q.correct.length, `${q.id} necesita al menos 2 correctas`).toBeGreaterThanOrEqual(2);
      expect(new Set(q.correct).size, `${q.id} tiene índices duplicados`).toBe(q.correct.length);
      for (const c of q.correct) {
        expect(c).toBeGreaterThanOrEqual(0);
        expect(c).toBeLessThan(q.options.length);
      }
    }
  });
});
