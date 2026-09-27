// =====================================================
// ISTQB Quest — screens/results.js
// Resultado de un nivel: estrellas, estadísticas y acciones.
// =====================================================

import { navigate } from "../router.js";
import { getNextLevel, worlds, findLevel, worldLabel } from "../data/index.js";
import { getState } from "../state.js";
import { isWorldCompleted } from "../engine/progress.js";
import { esc } from "../utils.js";

export function renderResults(params = {}) {
  const {
    levelId,
    won = false,
    stars = 0,
    correct = 0,
    total = 0,
    wrong = 0,
    bestStreak = 0,
    topic = "",
    newAchievements = [],
  } = params;

  const next = won ? getNextLevel(levelId) : null;

  // Banner cuando se acaba de completar un mundo y el siguiente tiene contenido
  let worldBanner = "";
  if (won) {
    const found = findLevel(levelId);
    if (found) {
      const wi = worlds.indexOf(found.world);
      const nextWorld = wi + 1 < worlds.length ? worlds[wi + 1] : null;
      if (
        nextWorld &&
        nextWorld.levels.length > 0 &&
        isWorldCompleted(found.world, getState().progress)
      ) {
        const doneEmoji = found.world.type === "challenge" ? "⚔️" : "🌍";
        worldBanner = `<p class="results-world-banner">${doneEmoji} ¡${worldLabel(found.world)} completado! Se desbloqueó el <strong>${worldLabel(nextWorld)} — ${esc(nextWorld.title)}</strong></p>`;
      }
    }
  }

  const el = document.createElement("section");
  el.className = "screen results-screen";
  el.innerHTML = `
    <div class="results-card card">
      <div class="results-emoji">${won ? "🎉" : "💥"}</div>
      <h2 class="results-title">${won ? "¡Nivel completado!" : "¡Te quedaste sin vidas!"}</h2>
      <p class="results-topic">${esc(topic)}</p>

      ${
        won
          ? `<div class="stars" aria-label="${stars} de 3 estrellas">
              ${[0, 1, 2]
                .map(
                  (i) =>
                    `<span class="star ${i < stars ? "on" : "off"}" style="animation-delay:${i * 0.18}s">⭐</span>`
                )
                .join("")}
            </div>`
          : ""
      }

      <div class="results-stats">
        <div class="stat">
          <span class="stat-value">${correct}/${total}</span>
          <span class="stat-label">Aciertos</span>
        </div>
        <div class="stat">
          <span class="stat-value">${wrong}</span>
          <span class="stat-label">Fallos</span>
        </div>
        <div class="stat">
          <span class="stat-value">x${bestStreak}</span>
          <span class="stat-label">Mejor racha</span>
        </div>
      </div>

      ${
        !won
          ? `<p class="results-hint">
              📚 Te recomendamos repasar este módulo antes de reintentar:<br>
              <strong>${esc(topic)}</strong>
            </p>`
          : ""
      }

      ${worldBanner}

      ${
        newAchievements.length > 0
          ? `<div class="achievements-unlocked">
              <h3>🏆 ¡Logros desbloqueados!</h3>
              ${newAchievements
                .map(
                  (a) =>
                    `<p class="achievement-item">${a.emoji} <strong>${esc(a.name)}</strong> — ${esc(a.description)}</p>`
                )
                .join("")}
            </div>`
          : ""
      }

      <div class="results-actions">
        ${next ? `<button class="btn btn-primary" data-action="next">▶ Siguiente nivel</button>` : ""}
        <button class="btn ${next ? "btn-ghost" : "btn-primary"}" data-action="retry">
          🔁 ${won ? "Repetir nivel" : "Reintentar nivel"}
        </button>
        <button class="btn btn-ghost" data-action="map">🗺️ Mapa</button>
      </div>
    </div>
  `;

  el.querySelector('[data-action="retry"]').addEventListener("click", () =>
    navigate("level", { levelId })
  );
  el.querySelector('[data-action="map"]').addEventListener("click", () => navigate("map"));

  const nextBtn = el.querySelector('[data-action="next"]');
  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigate("level", { levelId: next.level.id }));
  }

  return el;
}
