// =====================================================
// ISTQB Quest — engine/gold.js
// Reto Dorado: desbloqueo por estrellas (≥20), anuncio
// pendiente y armado de su nivel: 1 pregunta nueva + 9 de
// preguntas ya vistas en niveles completados (hasta 3 por
// mundo y relleno del resto del pool).
// =====================================================

import { worlds } from "../data/index.js";
import { goldQuestions } from "../data/gold/goldBank.js";
import { getState, updateState } from "../state.js";
import { globalStars, isLevelCompleted, levelStars } from "./progress.js";

export const GOLD_THRESHOLD = 20;
export const GOLD_LEVEL_ID = "gold-l1";
export const GOLD_QUESTION_COUNT = 10;
export const GOLD_TIME_PER_QUESTION = 30;
export const GOLD_LIVES = 3;
/** Máximo de preguntas ya vistas que aporta cada mundo. */
export const GOLD_SEEN_PER_WORLD = 3;

/** Barajado Fisher-Yates con aleatoriedad inyectable (tests). */
function shuffleWith(items, random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Toma `count` elementos al azar (copia barajada). */
function pickRandom(items, count, random) {
  if (count <= 0) return [];
  return shuffleWith(items, random).slice(0, count);
}

/** Estrellas doradas ganadas en el reto. */
export function goldStars(progress = getState().progress) {
  return levelStars(GOLD_LEVEL_ID, progress);
}

/** ¿El reto dorado ya fue anunciado (desbloqueado)? */
export function isGoldUnlocked(stats = getState().stats) {
  return stats.goldUnlocked === true;
}

/** ¿El anuncio del reto quedó pendiente de mostrar? */
export function isGoldPending(stats = getState().stats) {
  return stats.goldPending === true;
}

/** Preguntas ya vistas, agrupadas por mundo (solo niveles completados). */
export function completedQuestionsByWorld(progress = getState().progress) {
  return worlds
    .map((world) => ({
      world,
      questions: world.levels
        .filter((level) => isLevelCompleted(level.id, progress))
        .flatMap((level) => level.questions),
    }))
    .filter((entry) => entry.questions.length > 0);
}

/**
 * Marca el reto como pendiente si el jugador cruzó el umbral de
 * estrellas normales y todavía no lo desbloqueó.
 * Devuelve true si cambió el estado.
 */
export function refreshGoldPending() {
  const state = getState();
  if (state.stats.goldUnlocked || state.stats.goldPending) return false;
  if (globalStars(state.progress) < GOLD_THRESHOLD) return false;
  updateState({ stats: { ...state.stats, goldPending: true } });
  return true;
}

/** Anuncia el reto (al mostrar la ventana): pendiente → desbloqueado. */
export function announceGoldChallenge() {
  const state = getState();
  updateState({
    stats: { ...state.stats, goldPending: false, goldUnlocked: true },
  });
  return true;
}

/**
 * Arma el nivel del Reto Dorado:
 *  - 1 pregunta dorada nueva de un mundo con niveles completados
 *  - 9 preguntas ya vistas (hasta 3 por mundo + relleno del pool)
 * Si el pool visto no alcanza, usa las disponibles.
 */
export function buildGoldLevel(progress = getState().progress, random = Math.random) {
  const completedWorlds = shuffleWith(completedQuestionsByWorld(progress), random);
  const seenTarget = GOLD_QUESTION_COUNT - 1;
  const seen = [];
  const chosen = new Set();

  // Hasta 3 por mundo completado.
  for (const { questions } of completedWorlds) {
    if (seen.length >= seenTarget) break;
    for (const q of pickRandom(questions, GOLD_SEEN_PER_WORLD, random)) {
      if (seen.length >= seenTarget) break;
      seen.push(q);
      chosen.add(q.id);
    }
  }

  // Relleno con el resto del pool de mundos completados.
  if (seen.length < seenTarget) {
    const rest = completedWorlds
      .flatMap((entry) => entry.questions)
      .filter((q) => !chosen.has(q.id));
    for (const q of pickRandom(rest, seenTarget - seen.length, random)) {
      seen.push(q);
      chosen.add(q.id);
    }
  }

  // Una pregunta nueva, de un mundo que el jugador ya trabajó.
  const eligible = goldQuestions.filter((q) =>
    completedWorlds.some((entry) => entry.world.id === q.world)
  );
  const [golden] = pickRandom(eligible.length > 0 ? eligible : goldQuestions, 1, random);

  return {
    id: GOLD_LEVEL_ID,
    number: 1,
    title: "Misión dorada",
    topic: "Reto Dorado — repaso de lo que ya dominas",
    difficulty: "dorado",
    timePerQuestion: GOLD_TIME_PER_QUESTION,
    lives: GOLD_LIVES,
    questions: golden ? [golden, ...seen] : seen,
  };
}
