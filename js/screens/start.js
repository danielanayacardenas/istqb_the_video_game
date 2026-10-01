/* =====================================================
   ISTQB Quest — screens/start.js
   Pantalla de inicio: título, selector de idioma y arranque.
   ===================================================== */

import { getState, setLanguage, hasProgress, resetProgress, setSetting } from "../state.js";
import { ACHIEVEMENTS } from "../engine/achievements.js";
import { globalStars } from "../engine/progress.js";
import { navigate } from "../router.js";
import { icon } from "../ui/icons.js";

/** Desconecta los listeners de la modal de configuración anterior. */
let detachSettings = null;

/** Renderiza la pantalla de inicio y devuelve su elemento raíz. */
export function renderStart() {
  const screen = document.createElement("section");
  screen.className = "screen start-screen";

  const someProgress = hasProgress();
  const state = getState();

  screen.innerHTML = `
    <div class="start-hero">
      <img class="start-logo" src="assets/img/neon-game-controller.png" alt="ISTQB Quest">
      <h1 class="start-title">ISTQB <span>Quest</span></h1>
      <p class="start-subtitle">
        Prepárate para el examen <strong>Foundation Level v4.0</strong>
        pasando mundos, niveles y desafíos.
      </p>
      <span class="badge">${icon("book", { size: 16 })} CTFL v4.0</span>
    </div>

    <div class="lang-switch" role="group" aria-label="Idioma">
      <span class="lang-switch-icon">${icon("languages", { size: 18 })}</span>
      <button class="lang-btn" data-lang="es">Español</button>
      <button class="lang-btn" data-lang="en" disabled title="Próximamente">
        English <span class="soon">pronto</span>
      </button>
    </div>

    <div class="settings-row">
      <button class="chip settings-open" data-action="settings" aria-haspopup="dialog" aria-expanded="false">
        ${icon("settings", { size: 17 })} Configuración
      </button>
    </div>

    <div class="settings-modal" data-el="settings-modal" hidden>
      <div class="settings-dialog" role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <header class="settings-head">
          <h2 class="settings-title" id="settings-title">Configuración</h2>
          <button class="icon-btn" data-action="settings-close" aria-label="Cerrar configuración">
            ${icon("x", { size: 18 })}
          </button>
        </header>
        <div class="settings-list">
          <div class="settings-item">
            <span class="settings-item-label">${icon("gamepad-2", { size: 18 })} Combate</span>
            <button class="setting-toggle" data-setting="combat" aria-pressed="${state.settings.combat}">
              ${state.settings.combat ? "ON" : "OFF"}
            </button>
          </div>
          <div class="settings-item">
            <span class="settings-item-label">${icon("volume-2", { size: 18 })} Efectos</span>
            <button class="setting-toggle" data-setting="sound" aria-pressed="${state.settings.sound}">
              ${state.settings.sound ? "ON" : "OFF"}
            </button>
          </div>
          <div class="settings-item">
            <span class="settings-item-label">${icon("music", { size: 18 })} Música</span>
            <button class="setting-toggle" data-setting="music" aria-pressed="${state.settings.music}">
              ${state.settings.music ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="start-actions">
      <button class="btn btn-primary btn-big" data-action="play">
        ${icon("play", { size: 18, fill: true })} ${someProgress ? "Continuar" : "Comenzar"}
      </button>
      ${
        someProgress
          ? `<button class="btn btn-ghost btn-small" data-action="reset">${icon("trash-2", { size: 16 })} Reiniciar progreso</button>
             <p class="start-progress-summary">${icon("star", { size: 15, fill: true })} ${globalStars()} estrellas · ${icon("trophy", { size: 15 })} ${state.achievements.length}/${ACHIEVEMENTS.length} logros</p>`
          : ""
      }
    </div>

    <footer class="start-footer">
      v1.4.0 · Basado en el syllabus oficial ISTQB® CTFL v4.0
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

  /* ---------- Modal de configuración (estilo videojuego) ---------- */
  const settingsBtn = screen.querySelector('[data-action="settings"]');
  const settingsModal = screen.querySelector('[data-el="settings-modal"]');
  const settingsClose = screen.querySelector('[data-action="settings-close"]');

  const setSettingsOpen = (open) => {
    settingsModal.hidden = !open;
    settingsBtn.setAttribute("aria-expanded", String(open));
    if (open) settingsClose.focus();
    else settingsBtn.focus();
  };

  const paintSettings = () => {
    screen.querySelectorAll(".setting-toggle").forEach((toggle) => {
      const on = getState().settings[toggle.dataset.setting] !== false;
      toggle.setAttribute("aria-pressed", String(on));
      toggle.textContent = on ? "ON" : "OFF";
    });
  };

  settingsBtn.addEventListener("click", () => setSettingsOpen(true));
  settingsClose.addEventListener("click", () => setSettingsOpen(false));
  settingsModal.addEventListener("click", (ev) => {
    if (ev.target === settingsModal) setSettingsOpen(false);
  });

  screen.querySelectorAll(".setting-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const key = toggle.dataset.setting;
      setSetting(key, !getState().settings[key]);
      paintSettings();
    });
  });

  const onSettingsKey = (ev) => {
    if (ev.key === "Escape" && !settingsModal.hidden) setSettingsOpen(false);
  };

  detachSettings?.();
  document.addEventListener("keydown", onSettingsKey);
  detachSettings = () => {
    document.removeEventListener("keydown", onSettingsKey);
    detachSettings = null;
  };

  paintSettings();

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
