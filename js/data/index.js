// =====================================================
// ISTQB Quest — data/index.js
// Agrega los mundos y expone utilidades de acceso.
// Cada etapa de contenido añade aquí su mundo.
// =====================================================

import { world1 } from "./worlds/world1.js";
import { world2 } from "./worlds/world2.js";
import { world3 } from "./worlds/world3.js";
import { world4 } from "./worlds/world4.js";
import { world5 } from "./worlds/world5.js";
import { world6 } from "./worlds/world6.js";
import { challenge1 } from "./challenges/challenge1.js";
import { challenge2 } from "./challenges/challenge2.js";
import { challenge3 } from "./challenges/challenge3.js";

// Los desafíos cruzados se añaden al final como pseudo-mundos
// (mismo desbloqueo, progreso y estrellas que los mundos).
export const worlds = [
  world1,
  world2,
  world3,
  world4,
  world5,
  world6,
  challenge1,
  challenge2,
  challenge3,
];

/** Etiqueta visible de un mundo: "Mundo 3" o "Desafío 2". */
export function worldLabel(world) {
  return world.type === "challenge" ? `Desafío ${world.challengeNumber}` : `Mundo ${world.number}`;
}

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
