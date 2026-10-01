// =====================================================
// ISTQB Quest — ui/volumeControl.js
// Control de volumen de la música: bocina (clic para
// silenciar/activar) y slider 0–100. Solo afecta a la
// música. Se monta en la esquina derecha de la escena de
// combate o flotante en pantallas sin arena.
// =====================================================

import { icon } from "./icons.js";
import { getMusicVolume, isMusicOn, setMusicVolume, toggleMusic } from "./music.js";

/** Crea el control de volumen listo para insertar en el DOM. */
export function createVolumeControl({ floating = false } = {}) {
  const el = document.createElement("div");
  el.className = `volume-control${floating ? " floating" : ""}`;
  el.innerHTML = `
    <button class="volume-btn" type="button" data-action="mute">${icon("volume-2", { size: 14 })}</button>
    <input class="volume-slider" type="range" min="0" max="100" step="1" data-el="slider"
           aria-label="Volumen de la música">
  `;

  const btn = el.querySelector('[data-action="mute"]');
  const slider = el.querySelector('[data-el="slider"]');

  /** Refresca icono, estado accesible y slider desde los ajustes. */
  function paint() {
    const on = isMusicOn();
    const volume = getMusicVolume();
    btn.innerHTML = on && volume > 0 ? icon("volume-2", { size: 14 }) : icon("volume-x", { size: 14 });
    btn.setAttribute("aria-pressed", String(!on));
    btn.setAttribute("aria-label", on ? "Silenciar música" : "Activar música");
    btn.title = on ? "Silenciar música" : "Activar música";
    el.classList.toggle("muted", !on);
    slider.value = String(Math.round(volume * 100));
    slider.disabled = !on;
  }

  btn.addEventListener("click", () => {
    toggleMusic();
    paint();
  });

  slider.addEventListener("input", () => {
    setMusicVolume(Number(slider.value) / 100);
    paint();
  });

  paint();
  return { el, refresh: paint };
}
