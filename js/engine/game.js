// =====================================================
// ISTQB Quest — engine/game.js
// Motor de una partida de nivel: aleatorización de preguntas
// y respuestas, vidas, racha, respuestas (simple y multi)
// y avance.
// =====================================================

export const DEFAULT_LIVES = 3;

/** Barajado Fisher-Yates (devuelve una copia). */
export function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** ¿La pregunta es de selección múltiple? */
export function isMultiQuestion(q) {
  return Array.isArray(q.correct);
}

/** ¿Ambos arrays contienen exactamente los mismos índices? */
export function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const setB = new Set(b);
  return a.every((x) => setB.has(x));
}

/**
 * Crea una partida para un nivel.
 * Al crear la partida, las preguntas y las opciones se barajan,
 * de modo que cada intento tenga un orden distinto.
 * Las preguntas se normalizan con `correctIndexes` (array), tanto
 * para simple ([i]) como para multi ([i, j]).
 */
export function createGame(level) {
  const questions = shuffle(level.questions).map((q) => {
    const order = shuffle(q.options.map((_, i) => i));
    const correctList = isMultiQuestion(q) ? q.correct : [q.correct];
    return {
      ...q,
      options: order.map((i) => q.options[i]),
      correctIndexes: correctList
        .map((c) => order.indexOf(c))
        .sort((a, b) => a - b),
    };
  });

  const maxLives = level.lives ?? DEFAULT_LIVES;

  const state = {
    lives: maxLives,
    index: 0,
    streak: 0,
    bestStreak: 0,
    correct: 0,
    wrong: 0,
    results: [],
    won: false,
    over: false,
  };

  const current = () => questions[state.index];
  const total = questions.length;

  /**
   * Registra una respuesta:
   *  - simple: número (índice elegido)
   *  - multi: array de índices elegidos
   *  - timeout: null con timedOut
   * Devuelve el resultado de la pregunta.
   */
  function submit(selection, { timedOut = false } = {}) {
    if (state.over) return null;

    const q = current();
    const chosen = selection == null ? [] : Array.isArray(selection) ? selection : [selection];
    const isCorrect = !timedOut && sameSet(chosen, q.correctIndexes);

    if (isCorrect) {
      state.correct += 1;
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
    } else {
      state.wrong += 1;
      state.streak = 0;
      state.lives -= 1;
    }

    const result = {
      questionId: q.id,
      chosen,
      correctIndexes: q.correctIndexes,
      isCorrect,
      timedOut,
    };
    state.results.push(result);
    return result;
  }

  /**
   * Avanza tras el feedback.
   * Devuelve "next" | "won" | "lost".
   */
  function advance() {
    if (state.lives <= 0) {
      state.over = true;
      state.won = false;
      return "lost";
    }
    if (state.index >= total - 1) {
      state.over = true;
      state.won = true;
      return "won";
    }
    state.index += 1;
    return "next";
  }

  return {
    get maxLives() {
      return maxLives;
    },
    get lives() {
      return state.lives;
    },
    get index() {
      return state.index;
    },
    get streak() {
      return state.streak;
    },
    get bestStreak() {
      return state.bestStreak;
    },
    get correct() {
      return state.correct;
    },
    get wrong() {
      return state.wrong;
    },
    get won() {
      return state.won;
    },
    get over() {
      return state.over;
    },
    get total() {
      return total;
    },
    get results() {
      return state.results;
    },
    current,
    isLast: () => state.index >= total - 1,
    submit,
    advance,
  };
}
