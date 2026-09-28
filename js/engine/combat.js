// =====================================================
// ISTQB Quest — engine/combat.js
// Motor del duelo de combate (visual): aciertos disparan
// al enemigo, fallos reciben su fuego. No altera reglas,
// vidas ni puntuación: describe la escena.
// =====================================================

/**
 * Crea el estado de un duelo.
 *  - playerHp: vidas del jugador (coincide con el nivel).
 *  - enemyHp: aguante decorativo del enemigo (nº de preguntas).
 */
export function createCombat({ lives = 3, questions = 0 } = {}) {
  const state = {
    playerHp: lives,
    maxPlayerHp: lives,
    enemyHp: questions,
    maxEnemyHp: questions,
    hits: 0,
    misses: 0,
    over: false,
    outcome: null,
  };

  const snapshot = () => ({
    playerHp: state.playerHp,
    enemyHp: state.enemyHp,
  });

  /** Acierto: el jugador dispara y el aguante del enemigo baja. */
  function hit() {
    if (state.over) return null;
    state.hits += 1;
    state.enemyHp = Math.max(0, state.enemyHp - 1);
    return { type: "player-shot", ...snapshot() };
  }

  /** Fallo: el enemigo dispara y el jugador pierde vida. */
  function miss() {
    if (state.over) return null;
    state.misses += 1;
    state.playerHp = Math.max(0, state.playerHp - 1);
    return { type: "enemy-shot", ...snapshot() };
  }

  /** Cierra el duelo: cae el enemigo (victoria) o el jugador (derrota). */
  function finish(won) {
    if (state.over) return null;
    state.over = true;
    state.outcome = won ? "victory" : "defeat";
    return {
      type: won ? "enemy-down" : "player-down",
      outcome: state.outcome,
      ...snapshot(),
    };
  }

  /** Proporción de aguante restante del enemigo (0–1). */
  function enemyHpRatio() {
    if (state.maxEnemyHp <= 0) return 0;
    return state.enemyHp / state.maxEnemyHp;
  }

  return {
    get playerHp() {
      return state.playerHp;
    },
    get enemyHp() {
      return state.enemyHp;
    },
    get hits() {
      return state.hits;
    },
    get misses() {
      return state.misses;
    },
    get over() {
      return state.over;
    },
    get outcome() {
      return state.outcome;
    },
    hit,
    miss,
    finish,
    enemyHpRatio,
  };
}
