// =====================================================
// ISTQB Quest — ui/music.js
// Música de fondo: playlist de dos pistas 8-bit en bucle,
// volumen y silencio persistidos. Arranca con el primer
// gesto del usuario (política de autoplay del navegador)
// y suena solo mientras se juega (mapa, niveles, boss).
// =====================================================

import { getSetting, setSetting } from "../state.js";

/** Pistas de fondo; se reproducen en orden y vuelven a empezar. */
export const TRACKS = [
  "assets/audio/8-bit-hypnosis.mp3",
  "assets/audio/8-bit-riff.mp3",
];

const DEFAULT_VOLUME = 0.6;

let audio = null;
let trackIndex = 0;
let userGestured = false;
let inGameplay = false;
let initialized = false;

/** Deja cualquier volumen dentro del rango [0, 1]. */
export function clampVolume(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

/** Índice de la siguiente pista de la playlist (vuelve al inicio). */
export function nextTrackIndex(current, total = TRACKS.length) {
  const count = Number.isFinite(total) && total > 0 ? Math.floor(total) : TRACKS.length;
  const index = Number.isFinite(Number(current)) ? Math.floor(Number(current)) : -1;
  return (((index + 1) % count) + count) % count;
}

function hasDom() {
  return typeof window !== "undefined" && typeof Audio !== "undefined";
}

function musicEnabled() {
  return getSetting("music") !== false;
}

function currentVolume() {
  return clampVolume(getSetting("musicVolume") ?? DEFAULT_VOLUME);
}

function shouldPlay() {
  return userGestured && inGameplay && musicEnabled();
}

function ensureAudio() {
  if (audio || !hasDom()) return audio;
  audio = new Audio(TRACKS[trackIndex]);
  audio.preload = "auto";
  audio.volume = currentVolume();
  audio.addEventListener("ended", () => {
    trackIndex = nextTrackIndex(trackIndex);
    audio.src = TRACKS[trackIndex];
    if (shouldPlay()) audio.play().catch(() => {});
  });
  return audio;
}

function play() {
  const a = ensureAudio();
  if (!a || !shouldPlay()) return;
  a.play().catch(() => {
    // El navegador puede bloquear el audio; se reintenta con el próximo gesto.
  });
}

function pause() {
  audio?.pause();
}

/** Prepara la música: arranca con el primer gesto y pausa con la pestaña oculta. */
export function initMusic() {
  if (initialized || !hasDom()) return;
  initialized = true;

  const unlock = () => {
    userGestured = true;
    play();
    window.removeEventListener("pointerdown", unlock, true);
    window.removeEventListener("keydown", unlock, true);
    window.removeEventListener("touchstart", unlock, true);
  };
  window.addEventListener("pointerdown", unlock, true);
  window.addEventListener("keydown", unlock, true);
  window.addEventListener("touchstart", unlock, { capture: true, passive: true });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pause();
    else play();
  });
}

/** Indica si la pantalla actual es de juego; fuera de ellas la música se pausa. */
export function setGameplay(active) {
  inGameplay = Boolean(active);
  if (inGameplay) play();
  else pause();
}

/** ¿La música está activada? (ajuste persistido) */
export function isMusicOn() {
  return musicEnabled();
}

/** Volumen actual de la música (0–1). */
export function getMusicVolume() {
  return currentVolume();
}

/** Enciende o silencia la música; devuelve el estado nuevo. */
export function toggleMusic() {
  const next = !musicEnabled();
  setSetting("music", next);
  if (next) play();
  else pause();
  return next;
}

/** Ajusta el volumen de la música (0–1); devuelve el valor aplicado. */
export function setMusicVolume(value) {
  const volume = clampVolume(value);
  setSetting("musicVolume", volume);
  if (audio) audio.volume = volume;
  return volume;
}
