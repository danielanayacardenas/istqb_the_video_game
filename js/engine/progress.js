// =====================================================
// ISTQB Quest — engine/progress.js
// Lógica de progreso y desbloqueo:
//  - Los mundos se desbloquean al completar el anterior.
//  - Los niveles se desbloquean en secuencia dentro del mundo.
//  - Todo se calcula a partir del progreso guardado.
// =====================================================

import { worlds } from "../data/index.js";
import { getState } from "../state.js";

/** ¿El nivel está completado? */
export function isLevelCompleted(levelId, progress = getState().progress) {
  return Boolean(progress[levelId]?.completed);
}

/** Estrellas obtenidas en un nivel (0 si no se ha jugado). */
export function levelStars(levelId, progress = getState().progress) {
  return progress[levelId]?.stars ?? 0;
}

/** ¿Están completados TODOS los niveles del mundo? */
export function isWorldCompleted(world, progress = getState().progress) {
  return world.levels.length > 0 && world.levels.every((l) => isLevelCompleted(l.id, progress));
}

/** ¿El mundo está desbloqueado? (el mundo 1 siempre lo está) */
export function isWorldUnlocked(worldIndex, progress = getState().progress, allWorlds = worlds) {
  if (worldIndex <= 0) return true;
  const prev = allWorlds[worldIndex - 1];
  if (!prev || prev.levels.length === 0) return false;
  return isWorldCompleted(prev, progress);
}

/** ¿El nivel está desbloqueado? (secuencial dentro del mundo) */
export function isLevelUnlocked(
  worldIndex,
  levelIndex,
  progress = getState().progress,
  allWorlds = worlds
) {
  if (!isWorldUnlocked(worldIndex, progress, allWorlds)) return false;
  if (levelIndex <= 0) return true;
  const world = allWorlds[worldIndex];
  return isLevelCompleted(world.levels[levelIndex - 1].id, progress);
}

/** Estadísticas de un mundo: niveles completados y estrellas. */
export function worldStats(world, progress = getState().progress) {
  const totalLevels = world.levels.length;
  const completed = world.levels.filter((l) => isLevelCompleted(l.id, progress)).length;
  const stars = world.levels.reduce((sum, l) => sum + levelStars(l.id, progress), 0);
  return { completed, totalLevels, stars, maxStars: totalLevels * 3 };
}

/** Total de estrellas conseguidas en todos los mundos. */
export function globalStars(progress = getState().progress, allWorlds = worlds) {
  return allWorlds.reduce(
    (sum, w) => sum + w.levels.reduce((s, l) => s + levelStars(l.id, progress), 0),
    0
  );
}
