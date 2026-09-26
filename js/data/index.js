// =====================================================
// ISTQB Quest — data/index.js
// Agrega los mundos y expone utilidades de acceso.
// Cada etapa de contenido añade aquí su mundo.
// =====================================================

import { world1 } from "./worlds/world1.js";

export const worlds = [world1];

/** Busca un nivel por id. Devuelve { world, level } o null. */
export function findLevel(levelId) {
  for (const world of worlds) {
    const level = world.levels.find((l) => l.id === levelId);
    if (level) return { world, level };
  }
  return null;
}

/** Devuelve el siguiente nivel (en el mismo mundo o en el siguiente) o null. */
export function getNextLevel(levelId) {
  for (let w = 0; w < worlds.length; w++) {
    const world = worlds[w];
    const idx = world.levels.findIndex((l) => l.id === levelId);
    if (idx >= 0) {
      if (idx + 1 < world.levels.length) {
        return { world, level: world.levels[idx + 1] };
      }
      if (w + 1 < worlds.length) {
        const nextWorld = worlds[w + 1];
        if (nextWorld.levels.length > 0) {
          return { world: nextWorld, level: nextWorld.levels[0] };
        }
      }
      return null;
    }
  }
  return null;
}
