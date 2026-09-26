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
