/* =====================================================
   ISTQB Quest — screens/start.js
   Pantalla de inicio: título, selector de idioma y arranque.
   ===================================================== */

import { getState, setLanguage, hasProgress, resetProgress } from "../state.js";
import { navigate } from "../router.js";

/** Renderiza la pantalla de inicio y devuelve su elemento raíz. */
export function renderStart() {
  const screen = document.createElement("section");
  screen.className = "screen start-screen";

  const someProgress = hasProgress();

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

    <div class="start-actions">
      <button class="btn btn-primary btn-big" data-action="play">
        ${someProgress ? "▶ Continuar" : "🎮 Comenzar"}
      </button>
      ${
        someProgress
          ? `<button class="btn btn-ghost btn-small" data-action="reset">🗑 Reiniciar progreso</button>`
          : ""
      }
    </div>

    <footer class="start-footer">
      v0.1.0 · Basado en el syllabus oficial ISTQB® CTFL v4.0
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
