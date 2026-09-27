// =====================================================
// ISTQB Quest — engine/achievements.js
// Logros desbloqueables: definición, comprobación pura y
// persistencia de los nuevos desbloqueos.
// =====================================================

import { worlds } from "../data/index.js";
import { globalStars, isWorldCompleted } from "./progress.js";
import { getState, updateState } from "../state.js";

export const ACHIEVEMENTS = [
  {
    id: "first-step",
    emoji: "🎓",
    name: "Primer paso",
    description: "Completa tu primer nivel.",
    check: (progress) => progress["w1-l1"]?.completed === true,
  },
  {
    id: "perfectionist",
    emoji: "⭐",
    name: "Perfeccionista",
    description: "Consigue 3 estrellas en un nivel.",
    check: (progress) => Object.values(progress).some((p) => (p.stars ?? 0) >= 3),
  },
  {
    id: "on-fire",
    emoji: "🔥",
    name: "En llamas",
    description: "Logra una racha de 5 respuestas correctas seguidas.",
    check: (_progress, stats) => (stats.bestStreak ?? 0) >= 5,
  },
  {
    id: "collector",
    emoji: "🌟",
    name: "Coleccionista",
    description: "Reúne 30 estrellas.",
    check: (progress) => globalStars(progress) >= 30,
  },
  {
    id: "explorer",
    emoji: "🗺️",
    name: "Explorador",
    description: "Completa los 6 mundos del juego.",
    check: (progress) =>
      worlds.slice(0, 6).every((w) => w.levels.length > 0 && isWorldCompleted(w, progress)),
  },
  {
    id: "challenger",
    emoji: "⚔️",
    name: "Retador",
    description: "Supera los 3 desafíos cruzados.",
    check: (progress) =>
      worlds.filter((w) => w.type === "challenge").every((w) => isWorldCompleted(w, progress)),
  },
  {
    id: "graduated",
    emoji: "👑",
    name: "Graduado",
    description: "Aprueba el Boss Final.",
    check: (_progress, stats) => stats.bossCleared === true,
  },
  {
    id: "excellent",
    emoji: "💯",
    name: "Excelencia",
    description: "Consigue al menos el 90 % en el Boss Final (36/40).",
    check: (_progress, stats) => (stats.bossBest ?? 0) >= 36,
  },
];

/** Ids de los logros que cumple el estado dado (comprobación pura). */
export function unlockedAchievements(progress, stats) {
  return ACHIEVEMENTS.filter((a) => a.check(progress, stats)).map((a) => a.id);
}

/**
 * Comprueba los logros contra el estado actual, persiste los nuevos
 * y devuelve la lista de logros recién desbloqueados.
 */
export function checkAchievements() {
  const state = getState();
  const earned = unlockedAchievements(state.progress, state.stats);
  const fresh = earned.filter((id) => !state.achievements.includes(id));
  if (fresh.length > 0) {
    updateState({ achievements: [...state.achievements, ...fresh] });
  }
  return ACHIEVEMENTS.filter((a) => fresh.includes(a.id));
}
