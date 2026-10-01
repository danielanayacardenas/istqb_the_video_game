/* =====================================================
   ISTQB Quest — screens/start.js
   Pantalla de inicio: título, selector de idioma y arranque.
   ===================================================== */

import { getState, setLanguage, hasProgress, resetProgress, setSetting } from "../state.js";
import { ACHIEVEMENTS } from "../engine/achievements.js";
import { globalStars } from "../engine/progress.js";
import { navigate } from "../router.js";

/** Desconecta los listeners del panel de sonido de la pantalla anterior. */
let detachSoundPanel = null;

/** Renderiza la pantalla de inicio y devuelve su elemento raíz. */
export function renderStart() {
  const screen = document.createElement("section");
  screen.className = "screen start-screen";

  const someProgress = hasProgress();
  const state = getState();

  screen.innerHTML = `
    <div class="start-hero">
      <div class="start-logo">🎮</div>
      <h1 class="start-title">ISTQB <span>Quest</span></h1>
      <p class="start-subtitle">
        Prepárate para el examen <strong>Foundation Level v4.0</strong>
        pasando mundos, niveles y desafíos.
      </p>
      <span class="badge">📘 CTFL v4.0</span>
    </div>

    <div class="lang-switch" role="group" aria-label="Idioma">
      <button class="lang-btn" data-lang="es">🇪🇸 Español</button>
      <button class="lang-btn" data-lang="en" disabled title="Próximamente">
        🇬🇧 English <span class="soon">pronto</span>
      </button>
    </div>

    <div class="settings-row" role="group" aria-label="Ajustes de juego">
      <button class="chip" data-setting="combat" aria-pressed="${state.settings.combat}">
        🎮 Combate: ${state.settings.combat ? "ON" : "OFF"}
      </button>
      <div class="sound-settings">
        <button class="chip" data-action="sound-panel" aria-expanded="false" aria-haspopup="true" aria-controls="sound-panel">
          🔊 Sonido
        </button>
        <div class="sound-panel" id="sound-panel" data-el="sound-panel" hidden>
          <p class="sound-panel-title">Sonido</p>
          <button class="sound-choice" data-setting="sound" aria-pressed="${state.settings.sound}">
            <span class="sound-choice-label">FX</span>
            <span class="sound-choice-state">${state.settings.sound ? "On" : "Off"}</span>
          </button>
          <button class="sound-choice" data-setting="music" aria-pressed="${state.settings.music}">
            <span class="sound-choice-label">Música</span>
            <span class="sound-choice-state">${state.settings.music ? "On" : "Off"}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="start-actions">
      <button class="btn btn-primary btn-big" data-action="play">
        ${someProgress ? "▶ Continuar" : "🎮 Comenzar"}
      </button>
      ${
        someProgress
          ? `<button class="btn btn-ghost btn-small" data-action="reset">🗑 Reiniciar progreso</button>
             <p class="start-progress-summary">⭐ ${globalStars()} estrellas · 🏆 ${state.achievements.length}/${ACHIEVEMENTS.length} logros</p>`
          : ""
      }
    </div>

    <footer class="start-footer">
      v1.1.0 · Basado en el syllabus oficial ISTQB® CTFL v4.0
    </footer>
  `;

  /* ---------- Selector de idioma ---------- */
  const currentLang = getState().language || "es";
  const langButtons = screen.querySelectorAll(".lang-btn");

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);

    if (!btn.disabled) {
      btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        langButtons.forEach((b) => b.classList.toggle("active", b === btn));
      });
    }
  });

  /* ---------- Ajustes de juego ---------- */
  screen.querySelector('[data-setting="combat"]').addEventListener("click", (ev) => {
    const chip = ev.currentTarget;
    const next = !getState().settings.combat;
    setSetting("combat", next);
    chip.setAttribute("aria-pressed", String(next));
    chip.textContent = `🎮 Combate: ${next ? "ON" : "OFF"}`;
  });

  /* ---------- Panel de sonido: FX y música ---------- */
  const soundBtn = screen.querySelector('[data-action="sound-panel"]');
  const soundPanel = screen.querySelector('[data-el="sound-panel"]');

  const setPanelOpen = (open) => {
    soundPanel.hidden = !open;
    soundBtn.setAttribute("aria-expanded", String(open));
  };

  const paintSoundSettings = () => {
    screen.querySelectorAll(".sound-choice").forEach((choice) => {
      const on = getState().settings[choice.dataset.setting] !== false;
      choice.setAttribute("aria-pressed", String(on));
      choice.querySelector(".sound-choice-state").textContent = on ? "On" : "Off";
    });
  };

  soundBtn.addEventListener("click", () => setPanelOpen(soundPanel.hidden));

  screen.querySelectorAll(".sound-choice").forEach((choice) => {
    choice.addEventListener("click", () => {
      const key = choice.dataset.setting;
      setSetting(key, !getState().settings[key]);
      paintSoundSettings();
    });
  });

  const onDocumentClick = (ev) => {
    if (soundPanel.hidden) return;
    if (soundPanel.contains(ev.target) || soundBtn.contains(ev.target)) return;
    setPanelOpen(false);
  };
  const onDocumentKey = (ev) => {
    if (ev.key === "Escape" && !soundPanel.hidden) setPanelOpen(false);
  };

  detachSoundPanel?.();
  document.addEventListener("click", onDocumentClick);
  document.addEventListener("keydown", onDocumentKey);
  detachSoundPanel = () => {
    document.removeEventListener("click", onDocumentClick);
    document.removeEventListener("keydown", onDocumentKey);
    detachSoundPanel = null;
  };

  paintSoundSettings();

  /* ---------- Acciones ---------- */
  screen.querySelector('[data-action="play"]').addEventListener("click", () => {
    navigate("map");
  });

  const resetBtn = screen.querySelector('[data-action="reset"]');
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const confirmed = confirm(
        "¿Seguro que quieres borrar todo tu progreso? Esta acción no se puede deshacer."
      );
      if (confirmed) {
        resetProgress();
        navigate("start");
      }
    });
  }

  return screen;
}
