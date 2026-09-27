// =====================================================
// ISTQB Quest — engine/exam.js
// Motor del Boss Final: sorteo del examen (40 preguntas con
// cuota por capítulo), puntuación y umbral de aprobación.
// =====================================================

import { shuffle } from "./game.js";

/** Proporción mínima de aciertos para aprobar (65 % → 26/40). */
export const PASS_RATIO = 0.65;

/** Cuotas por capítulo para las 40 preguntas del examen. */
export const CHAPTER_QUOTAS = { 1: 8, 2: 6, 3: 4, 4: 11, 5: 8, 6: 3 };

export const EXAM_SIZE = Object.values(CHAPTER_QUOTAS).reduce((a, b) => a + b, 0);

/**
 * Sortea las preguntas del examen desde el banco.
 * Respeta las cuotas por capítulo y rellena con el resto del
 * banco si algún capítulo no tiene suficientes preguntas.
 */
export function drawExam(bank, { quotas = CHAPTER_QUOTAS } = {}) {
  const target = Object.values(quotas).reduce((a, b) => a + b, 0);
  const selected = [];
  const used = new Set();

  const byChapter = new Map();
  for (const q of bank) {
    const list = byChapter.get(q.chapter) ?? [];
    list.push(q);
    byChapter.set(q.chapter, list);
  }

  for (const [chapter, quota] of Object.entries(quotas)) {
    const pool = shuffle(byChapter.get(Number(chapter)) ?? []);
    for (const q of pool.slice(0, quota)) {
      selected.push(q);
      used.add(q.id);
    }
  }

  if (selected.length < target) {
    const rest = shuffle(bank.filter((q) => !used.has(q.id)));
    selected.push(...rest.slice(0, target - selected.length));
  }

  return shuffle(selected);
}

/**
 * Puntúa el examen.
 * `answers` es un array alineado con `questions` con el índice
 * elegido o null si quedó en blanco (cuenta como incorrecta).
 */
export function scoreExam(questions, answers) {
  let correct = 0;
  const perChapter = {};

  questions.forEach((q, i) => {
    const ok = answers[i] === q.correct;
    if (ok) correct += 1;
    const entry = perChapter[q.chapter] ?? { correct: 0, total: 0 };
    entry.total += 1;
    if (ok) entry.correct += 1;
    perChapter[q.chapter] = entry;
  });

  const total = questions.length;
  const percent = total > 0 ? correct / total : 0;
  return { correct, total, percent, passed: percent >= PASS_RATIO, perChapter };
}

/** Formatea segundos como mm:ss. */
export function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
