// =====================================================
// ISTQB Quest — screens/level.js
// Pantalla de juego de un nivel: pregunta, opciones (simple
// y multi-selección), vidas, temporizador pausable, racha,
// feedback inmediato y combate arcade.
// =====================================================

import { createGame } from "../engine/game.js";
import { starsFor } from "../engine/scoring.js";
import { checkAchievements } from "../engine/achievements.js";
import { createCombat } from "../engine/combat.js";
import { recordLevelResult, getSetting } from "../state.js";
import { navigate } from "../router.js";
import { findLevel } from "../data/index.js";
import { createCombatScene } from "../ui/combatScene.js";
import { createVolumeControl } from "../ui/volumeControl.js";
import { playEvent as playSfxEvent } from "../ui/sfx.js";
import { esc } from "../utils.js";

const LETTERS = ["A", "B", "C", "D", "E"];

/** Temporizador pausable basado en requestAnimationFrame. */
function createTimer({ seconds, onTick, onEnd }) {
  const duration = seconds * 1000;
  let running = false;
  let startedAt = 0;
  let elapsed = 0;
  let rafId = 0;

  function loop(now) {
    if (!running) return;
    const total = elapsed + (now - startedAt);
    const remaining = Math.max(0, duration - total);
    onTick(remaining / duration);
    if (remaining <= 0) {
      running = false;
      onEnd();
      return;
    }
    rafId = requestAnimationFrame(loop);
  }

  return {
    start() {
      running = true;
      startedAt = performance.now();
      rafId = requestAnimationFrame(loop);
    },
    pause() {
      if (!running) return;
      running = false;
      elapsed += performance.now() - startedAt;
      cancelAnimationFrame(rafId);
    },
    stop() {
      running = false;
      cancelAnimationFrame(rafId);
    },
  };
}

export function renderLevel({ levelId } = {}) {
  const found = findLevel(levelId);

  if (!found) {
    const el = document.createElement("section");
    el.className = "screen placeholder-screen";
    el.innerHTML = `
      <div class="placeholder-card">
        <span class="placeholder-emoji">🚧</span>
        <h2>Nivel no encontrado</h2>
        <p>El nivel <strong>${esc(levelId ?? "?")}</strong> todavía no está disponible.</p>
        <button class="btn btn-ghost" data-action="back">← Volver al inicio</button>
      </div>
    `;
    el.querySelector('[data-action="back"]').addEventListener("click", () => navigate("start"));
    return el;
  }

  const { world, level } = found;
  const game = createGame(level);

  const el = document.createElement("section");
  el.className = "screen level-screen";
  el.innerHTML = `
    <header class="level-topbar">
      <button class="icon-btn" data-action="exit" title="Salir del nivel">✕</button>
      <div class="hud-lives" data-el="lives" aria-label="Vidas"></div>
      <div class="hud-streak" data-el="streak" aria-label="Racha"></div>
      <div class="hud-timer" aria-label="Tiempo restante">
        <div class="timer-fill" data-el="timer"></div>
      </div>
    </header>
    <div class="level-progress">
      <span data-el="counter"></span>
      <div class="progress-track">
        <div class="progress-fill" data-el="progress"></div>
      </div>
    </div>
    <main class="level-body" data-el="body"></main>
    <div class="combat-strip" data-el="combat"></div>
  `;

  const livesEl = el.querySelector('[data-el="lives"]');
  const streakEl = el.querySelector('[data-el="streak"]');
  const timerEl = el.querySelector('[data-el="timer"]');
  const counterEl = el.querySelector('[data-el="counter"]');
  const progressEl = el.querySelector('[data-el="progress"]');
  const bodyEl = el.querySelector('[data-el="body"]');

  /* ---------- Combate arcade (franja inferior) ---------- */
  const combatEnabled = getSetting("combat") !== false;
  const combatSlot = el.querySelector('[data-el="combat"]');
  let combat = null;
  let combatScene = null;

  /* ---------- Control de volumen (solo música) ---------- */
  const volumeControl = createVolumeControl();
  if (combatEnabled) {
    combat = createCombat({ lives: game.maxLives, questions: game.total });
    combatScene = createCombatScene(combatSlot, { theme: world.id });
    combatScene.setEnemyHp(combat.enemyHpRatio());
    el.classList.add("has-combat");
    combatSlot.appendChild(volumeControl.el);
  } else {
    volumeControl.el.classList.add("floating");
    el.appendChild(volumeControl.el);
    el.classList.add("has-volume");
    combatSlot.remove();
  }

  let timer = null;
  let locked = false;

  /* ---------- HUD ---------- */
  function paintHud() {
    livesEl.innerHTML = Array.from({ length: game.maxLives }, (_, i) => {
      const on = i < game.lives;
      return `<span class="heart ${on ? "on" : "off"}">${on ? "❤️" : "🖤"}</span>`;
    }).join("");

    const s = game.streak;
    streakEl.textContent = `🔥 x${s}`;
    streakEl.classList.toggle("visible", s >= 1);
    streakEl.classList.toggle("hot", s >= 3);
  }

  function paintProgress() {
    counterEl.textContent = `Pregunta ${game.index + 1} de ${game.total}`;
    progressEl.style.width = `${(game.index / game.total) * 100}%`;
  }

  /* ---------- Pregunta ---------- */
  function renderQuestion() {
    locked = false;
    timer?.stop();

    paintHud();
    paintProgress();

    timerEl.style.width = "100%";
    timerEl.classList.remove("low");

    const q = game.current();
    const isMulti = q.type === "multi";
    const required = q.correctIndexes.length;
    const selected = new Set();

    bodyEl.innerHTML = `
      <div class="question-card card">
        <p class="question-topic">${esc(level.topic ?? "")}</p>
        <h2 class="question-text">${esc(q.question)}</h2>
      </div>
      ${
        isMulti
          ? `<p class="multi-hint">🧩 Selecciona <strong>${required}</strong> opciones —
              <span data-el="multi-count">0/${required}</span></p>`
          : ""
      }
      <div class="options">
        ${q.options
          .map(
            (opt, i) => `
          <button class="option-btn" data-index="${i}">
            <span class="option-letter">${LETTERS[i]}</span>
            <span class="option-text">${esc(opt)}</span>
          </button>`
          )
          .join("")}
      </div>
      ${
        isMulti
          ? `<div class="multi-actions">
              <button class="btn btn-primary" data-action="confirm" disabled>Confirmar respuesta</button>
            </div>`
          : ""
      }
      <div class="feedback" data-el="feedback" hidden></div>
    `;

    const optionBtns = [...bodyEl.querySelectorAll(".option-btn")];

    if (isMulti) {
      const countEl = bodyEl.querySelector('[data-el="multi-count"]');
      const confirmBtn = bodyEl.querySelector('[data-action="confirm"]');

      optionBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (locked) return;
          const idx = Number(btn.dataset.index);
          if (selected.has(idx)) {
            selected.delete(idx);
            btn.classList.remove("selected");
          } else {
            if (selected.size >= required) return; // límite: solo N
            selected.add(idx);
            btn.classList.add("selected");
          }
          countEl.textContent = `${selected.size}/${required}`;
          confirmBtn.disabled = selected.size !== required;
        });
      });

      confirmBtn.addEventListener("click", () => handleAnswer([...selected], false));
    } else {
      optionBtns.forEach((btn) => {
        btn.addEventListener("click", () => handleAnswer(Number(btn.dataset.index), false));
      });
    }

    timer = createTimer({
      seconds: level.timePerQuestion ?? 60,
      onTick: (ratio) => {
        timerEl.style.width = `${ratio * 100}%`;
        timerEl.classList.toggle("low", ratio <= 0.25);
      },
      onEnd: () => handleAnswer(null, true),
    });
    timer.start();
  }

  /* ---------- Respuesta ---------- */
  function handleAnswer(selection, timedOut) {
    if (locked) return;
    locked = true;
    timer?.stop();

    const result = game.submit(selection, { timedOut });

    if (combat && combatScene && result) {
      const event = result.isCorrect ? combat.hit() : combat.miss();
      combatScene.play(event);
      combatScene.setEnemyHp(combat.enemyHpRatio());
      if (getSetting("sound") !== false) playSfxEvent(event.type);
    }

    const q = game.current();
    const chosen = timedOut || selection == null ? [] : Array.isArray(selection) ? selection : [selection];

    bodyEl.querySelectorAll(".option-btn").forEach((btn, i) => {
      btn.disabled = true;
      btn.classList.remove("selected");
      if (q.correctIndexes.includes(i)) btn.classList.add("correct");
      else if (chosen.includes(i)) btn.classList.add("wrong");
    });

    const confirmBtn = bodyEl.querySelector('[data-action="confirm"]');
    if (confirmBtn) confirmBtn.disabled = true;

    paintHud();
    showFeedback(result, q);
  }

  /* ---------- Feedback inmediato ---------- */
  function showFeedback(result, q) {
    const fb = bodyEl.querySelector('[data-el="feedback"]');
    const willEnd = game.lives <= 0 || game.isLast();

    fb.hidden = false;
    fb.className = `feedback card ${result.isCorrect ? "feedback-ok" : "feedback-bad"}`;

    let html = "";
    if (result.isCorrect) {
      const hot = game.streak >= 3 ? ` <span class="feedback-streak">🔥 x${game.streak} ¡En llamas!</span>` : "";
      html += `<p class="feedback-head">✅ ¡Correcto!${hot}</p>`;
      html += `<p>${esc(q.explanation)}</p>`;
      html += `<p>💡 <strong>Ejemplo:</strong> ${esc(q.example)}</p>`;
      html += `<p>🛠️ <strong>Caso de uso:</strong> ${esc(q.useCase)}</p>`;
    } else {
      const letters = q.correctIndexes.map((i) => LETTERS[i]).join(" y ");
      const texts = q.correctIndexes.map((i) => esc(q.options[i])).join(" · ");
      const label = q.correctIndexes.length > 1 ? "Las respuestas correctas eran" : "La respuesta correcta era";
      html += `<p class="feedback-head">${result.timedOut ? "⏰ ¡Se acabó el tiempo!" : "❌ Incorrecto"}</p>`;
      html += `<p class="answer-reveal">${label} ${letters}: ${texts}</p>`;
      html += `<p>${esc(q.explanation)}</p>`;
      html += `<p>📌 <strong>Recuerda:</strong> ${esc(q.mistake)}</p>`;
      html += `<p class="syllabus">📚 Te recomendamos repasar: ${esc(q.syllabusRef)}</p>`;
    }

    const nextLabel = willEnd ? "Ver resultado" : "Siguiente →";
    html += `<button class="btn btn-primary" data-action="next">${nextLabel}</button>`;

    fb.innerHTML = html;
    fb.querySelector('[data-action="next"]').addEventListener("click", handleNext);
    fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ---------- Avance ---------- */
  function handleNext() {
    const status = game.advance();
    if (status === "lost") return finish(false);
    if (status === "won") return finish(true);
    renderQuestion();
  }

  function finish(won) {
    timer?.stop();

    const stars = starsFor(game.lives, won);
    recordLevelResult(level.id, {
      stars,
      bestStreak: game.bestStreak,
      correct: game.correct,
      wrong: game.wrong,
    });
    const newAchievements = checkAchievements();

    const goToResults = () => {
      combatScene?.destroy();
      navigate("results", {
        levelId: level.id,
        won,
        stars,
        correct: game.correct,
        total: game.total,
        wrong: game.wrong,
        bestStreak: game.bestStreak,
        topic: level.topic,
        newAchievements,
      });
    };

    if (combat && combatScene) {
      const event = combat.finish(won);
      combatScene.play(event);
      if (getSetting("sound") !== false) playSfxEvent(event.type);
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (reduced) goToResults();
      else setTimeout(goToResults, 950);
    } else {
      goToResults();
    }
  }

  /* ---------- Salir ---------- */
  el.querySelector('[data-action="exit"]').addEventListener("click", () => {
    const ok = confirm("¿Seguro que quieres salir del nivel? Este intento no se guardará.");
    if (!ok) return;
    timer?.stop();
    combatScene?.destroy();
    navigate("map");
  });

  renderQuestion();
  return el;
}
