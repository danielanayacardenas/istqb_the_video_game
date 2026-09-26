// =====================================================
// ISTQB Quest — engine/scoring.js
// Reglas de puntuación y recompensas.
// =====================================================

export const MAX_LIVES = 3;

/**
 * Estrellas obtenidas al terminar un nivel:
 *  - Ganar con 3 vidas restantes (sin fallos) → 3 estrellas
 *  - Ganar con 2 vidas restantes → 2 estrellas
 *  - Ganar con 1 vida restante → 1 estrella
 *  - Perder → 0 estrellas
 */
export function starsFor(livesLeft, won) {
  if (!won) return 0;
  return Math.max(1, Math.min(MAX_LIVES, livesLeft));
}
