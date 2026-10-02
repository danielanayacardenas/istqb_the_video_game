// =====================================================
// ISTQB Quest — tests/music.test.mjs
// Tests del motor de música: playlist, volumen y ajustes.
// =====================================================

import "./helpers.mjs";
import { describe, test, expect, beforeEach } from "bun:test";
import { clampVolume, nextTrackIndex, TRACKS } from "../js/ui/music.js";
import { getState, resetProgress, setSetting } from "../js/state.js";

beforeEach(() => {
  resetProgress();
});

describe("música de fondo", () => {
  test("la playlist tiene dos pistas locales", () => {
    expect(TRACKS.length).toBe(2);
    TRACKS.forEach((track) => expect(track.startsWith("assets/audio/")).toBe(true));
  });

  test("el volumen se limita al rango 0–1", () => {
    expect(clampVolume(0.5)).toBe(0.5);
    expect(clampVolume(-1)).toBe(0);
    expect(clampVolume(3)).toBe(1);
    expect(clampVolume("0.25")).toBe(0.25);
    expect(clampVolume("nope")).toBe(0);
    expect(clampVolume(undefined)).toBe(0);
  });

  test("la playlist avanza y vuelve al inicio", () => {
    expect(nextTrackIndex(0, 2)).toBe(1);
    expect(nextTrackIndex(1, 2)).toBe(0);
    expect(nextTrackIndex(-1, 2)).toBe(0);
    expect(nextTrackIndex(0, 0)).toBe(0);
  });

  test("los ajustes de música se persisten con los valores por defecto", () => {
    expect(getState().settings.music).toBe(true);
    expect(getState().settings.musicVolume).toBe(0.6);

    setSetting("music", false);
    setSetting("musicVolume", 0.35);

    expect(getState().settings.music).toBe(false);
    expect(getState().settings.musicVolume).toBe(0.35);
  });
});
