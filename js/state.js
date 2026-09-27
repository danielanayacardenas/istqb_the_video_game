/* =====================================================
   ISTQB Quest — state.js
   Estado global del juego + persistencia en localStorage.
   ===================================================== */

const STORAGE_KEY = "istqb-quest.v1";

const DEFAULT_STATE = {
  version: 1,
  language: "es",
  /** Progreso por nivel: levelId -> { completed, stars, attempts, bestStreak } */
  progress: {},
  /** Logros desbloqueados (ids) */
  achievements: [],
  stats: {
    totalCorrect: 0,
    totalWrong: 0,
    bestStreak: 0,
    bossCleared: false,
    bossBest: 0,
  },
};

let state = structuredClone(DEFAULT_STATE);

/** Carga el progreso guardado (si existe) y lo mezcla con el estado por defecto. */
export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state = {
        ...structuredClone(DEFAULT_STATE),
        ...saved,
        stats: { ...DEFAULT_STATE.stats, ...(saved.stats || {}) },
      };
    }
  } catch (err) {
    console.warn("No se pudo cargar el progreso guardado:", err);
    state = structuredClone(DEFAULT_STATE);
  }
  return state;
}

/** Guarda el estado actual en localStorage. */
export function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.warn("No se pudo guardar el progreso:", err);
  }
}

/** Devuelve el estado actual (referencia viva). */
export function getState() {
  return state;
}

/** Actualiza el estado con un merge superficial y guarda. */
export function updateState(partial) {
  state = { ...state, ...partial };
  saveState();
  return state;
}

/** Cambia el idioma de la interfaz. */
export function setLanguage(language) {
  return updateState({ language });
}

/** ¿El jugador tiene algún progreso guardado? */
export function hasProgress() {
  return Object.keys(state.progress).length > 0 || state.achievements.length > 0;
}

/** Borra todo el progreso y deja el estado por defecto. */
export function resetProgress() {
  state = structuredClone(DEFAULT_STATE);
  saveState();
}

/**
 * Registra el resultado de un intento de nivel:
 * conserva el mejor número de estrellas y la mejor racha,
 * incrementa los intentos y acumula estadísticas globales.
 */
export function recordLevelResult(levelId, { stars = 0, bestStreak = 0, correct = 0, wrong = 0 } = {}) {
  const prev = state.progress[levelId] || {
    completed: false,
    stars: 0,
    attempts: 0,
    bestStreak: 0,
  };

  const entry = {
    completed: prev.completed || stars > 0,
    stars: Math.max(prev.stars, stars),
    attempts: prev.attempts + 1,
    bestStreak: Math.max(prev.bestStreak, bestStreak),
  };

  state.progress = { ...state.progress, [levelId]: entry };
  state.stats.totalCorrect += correct;
  state.stats.totalWrong += wrong;
  state.stats.bestStreak = Math.max(state.stats.bestStreak, bestStreak);
  saveState();

  return entry;
}

/**
 * Registra el resultado del Boss Final:
 * conserva el mejor número de aciertos y marca aprobado
 * en cuanto se aprueba una vez.
 */
export function recordBossResult({ correct = 0, passed = false } = {}) {
  state.stats.bossCleared = state.stats.bossCleared || passed;
  state.stats.bossBest = Math.max(state.stats.bossBest || 0, correct);
  saveState();
  return { ...state.stats };
}
