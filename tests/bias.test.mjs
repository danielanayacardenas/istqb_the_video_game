// =====================================================
// ISTQB Quest — tests/bias.test.mjs
// Guardarraíles anti-sesgo de longitud: la opción correcta
// no debe ser sistemáticamente más larga (ni más corta)
// que los distractores. Evita que las preguntas se puedan
// acertar «a ojo» por su formato.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect } from "bun:test";
import { worlds } from "../js/data/index.js";
import { bossBank } from "../js/data/boss/bank.js";

/** Rango aceptable por pregunta (bidireccional). */
const RANGE = { min: 0.7, max: 1.4 };
/** Media global objetivo del banco. */
const GLOBAL_TARGET = 1.15;

/** Ratio de una pregunta: media de correctas / media de incorrectas. */
function questionRatio(q) {
  const lens = q.options.map((o) => o.length);
  const correctIdx = Array.isArray(q.correct) ? q.correct : [q.correct];
  const correctLens = correctIdx.map((i) => lens[i]);
  const wrongLens = lens.filter((_, i) => !correctIdx.includes(i));
  const avgCorrect = correctLens.reduce((a, b) => a + b, 0) / correctLens.length;
  const avgWrong = wrongLens.reduce((a, b) => a + b, 0) / wrongLens.length;
  return avgWrong > 0 ? avgCorrect / avgWrong : 1;
}

const allQuestions = [
  ...worlds.flatMap((w) => w.levels.flatMap((l) => l.questions)),
  ...bossBank,
];

describe("guardarraíles anti-sesgo de longitud", () => {
  test("cada pregunta mantiene el ratio correcta/incorrectas dentro del rango", () => {
    for (const q of allQuestions) {
      const ratio = questionRatio(q);
      expect(
        ratio,
        `${q.id}: ratio ${ratio.toFixed(2)} fuera de [${RANGE.min}, ${RANGE.max}]`
      ).toBeGreaterThanOrEqual(RANGE.min);
      expect(
        ratio,
        `${q.id}: ratio ${ratio.toFixed(2)} fuera de [${RANGE.min}, ${RANGE.max}]`
      ).toBeLessThanOrEqual(RANGE.max);
    }
  });

  test("la media global del banco no supera el objetivo ni baja del simétrico", () => {
    const avg = allQuestions.reduce((sum, q) => sum + questionRatio(q), 0) / allQuestions.length;
    expect(avg, `media global ${avg.toFixed(2)}`).toBeLessThanOrEqual(GLOBAL_TARGET);
    expect(avg, `media global ${avg.toFixed(2)}`).toBeGreaterThanOrEqual(1 / GLOBAL_TARGET);
  });

  test("ninguna opción correcta 'canta' por longitud: margen máximo de 10 caracteres", () => {
    // La correcta no debe superar a la opción más larga entre las incorrectas
    // por más de 10 caracteres (los márgenes grandes son perceptibles a simple vista).
    for (const q of allQuestions) {
      if (Array.isArray(q.correct)) continue; // multi: cubierto por el ratio
      const lens = q.options.map((o) => o.length);
      const others = lens.filter((_, i) => i !== q.correct);
      const margin = lens[q.correct] - Math.max(...others);
      expect(margin, `${q.id}: margen ${margin} caracteres`).toBeLessThanOrEqual(10);
    }
  });
});
