// =====================================================
// ISTQB Quest — engine/exam.js
// Motor del Boss Final: sorteo del examen (40 preguntas con
// cuota por capítulo y objetivo de multi-selección),
// puntuación y umbral de aprobación.
// =====================================================

import { shuffle } from "./game.js";

/** Proporción mínima de aciertos para aprobar (65 % → 26/40). */
export const PASS_RATIO = 0.65;

/** Cuotas por capítulo para las 40 preguntas del examen. */
export const CHAPTER_QUOTAS = { 1: 8, 2: 6, 3: 4, 4: 11, 5: 8, 6: 3 };

export const EXAM_SIZE = Object.values(CHAPTER_QUOTAS).reduce((a, b) => a + b, 0);

/** Objetivo de preguntas multi-selección por sorteo (si el banco las tiene). */
export const MULTI_TARGET = 4;

/**
 * ¿La respuesta es correcta para la pregunta?
 * Simple: coincidencia exacta. Multi: mismo conjunto exacto
 * (sin crédito parcial), en cualquier orden.
 */
export function isCorrectAnswer(question, answer) {
  if (Array.isArray(question.correct)) {
    if (!Array.isArray(answer)) return false;
    const correct = [...question.correct].sort((a, b) => a - b);
    const given = [...answer].sort((a, b) => a - b);
    return given.length === correct.length && given.every((v, i) => v === correct[i]);
  }
  return answer === question.correct;
}

/**
 * Sortea las preguntas del examen desde el banco.
 * Respeta las cuotas por capítulo, incluye hasta `multiTarget`
 * preguntas multi-selección y rellena con el resto del banco si
 * algún capítulo no tiene suficientes preguntas.
 */
export function drawExam(bank, { quotas = CHAPTER_QUOTAS, multiTarget = MULTI_TARGET } = {}) {
  const target = Object.values(quotas).reduce((a, b) => a + b, 0);
  const selected = [];
  const used = new Set();
  const perChapter = {};

  const isMulti = (q) => Array.isArray(q.correct);

  // 1) Multi-selección primero, respetando las cuotas por capítulo
  let multiCount = 0;
  for (const q of shuffle(bank.filter(isMulti))) {
    if (multiCount >= multiTarget) break;
    const quota = quotas[q.chapter] ?? 0;
    if ((perChapter[q.chapter] ?? 0) < quota) {
      selected.push(q);
      used.add(q.id);
      perChapter[q.chapter] = (perChapter[q.chapter] ?? 0) + 1;
      multiCount += 1;
    }
  }

  // 2) Rellenar las cuotas por capítulo con el resto del banco
  for (const [chapterKey, quota] of Object.entries(quotas)) {
    const chapter = Number(chapterKey);
    const remaining = quota - (perChapter[chapter] ?? 0);
    if (remaining <= 0) continue;
    const pool = shuffle(bank.filter((q) => q.chapter === chapter && !used.has(q.id)));
    for (const q of pool.slice(0, remaining)) {
      selected.push(q);
      used.add(q.id);
      perChapter[chapter] = (perChapter[chapter] ?? 0) + 1;
    }
  }

  // 3) Relleno global si algún capítulo no tiene suficientes preguntas
  if (selected.length < target) {
    const rest = shuffle(bank.filter((q) => !used.has(q.id)));
    selected.push(...rest.slice(0, target - selected.length));
  }

  return shuffle(selected);
}

/**
 * Puntúa el examen.
 * `answers` es un array alineado con `questions` con la respuesta
 * dada: número (simple), array (multi) o null si quedó en blanco
 * (cuenta como incorrecta).
 */
export function scoreExam(questions, answers) {
  let correct = 0;
  const perChapter = {};

  questions.forEach((q, i) => {
    const ok = isCorrectAnswer(q, answers[i]);
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
