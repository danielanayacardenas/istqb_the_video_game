// =====================================================
// ISTQB Quest — screens/boss.js
// Boss Final: simulacro de examen (40 preguntas, 75 min,
// navegación libre, sin feedback, 65 % para aprobar).
// =====================================================

import { bossBank, bossInfo } from "../data/boss/bank.js";
import { drawExam, scoreExam, formatTime, isCorrectAnswer } from "../engine/exam.js";
import { checkAchievements } from "../engine/achievements.js";
import { recordBossResult } from "../state.js";
import { navigate } from "../router.js";
import { esc } from "../utils.js";
import { createVolumeControl } from "../ui/volumeControl.js";
import { icon } from "../ui/icons.js";

const LETTERS = ["A", "B", "C", "D", "E"];

export function renderBoss() {
  const el = document.createElement("section");
  el.className = "screen boss-screen";

  let timerId = null;
  let finished = false;

  /** Monta el control flotante de volumen de la música. */
  function mountVolumeControl() {
    el.classList.add("has-volume");
    el.appendChild(createVolumeControl({ floating: true }).el);
  }

  const clearTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  /* ---------- Pantalla de instrucciones ---------- */
  function renderIntro() {
    finished = false;
    clearTimer();
    el.innerHTML = `
      <div class="results-card card boss-intro">
        <div class="results-emoji">${icon("crown", { size: 44 })}</div>
        <h2 class="results-title">Boss Final — Simulacro de examen</h2>
        <p class="results-topic">${esc(bossInfo.description)}</p>
        <ul class="boss-rules">
          <li>${icon("calculator", { size: 16 })} <strong>${bossInfo.questionCount} preguntas</strong> sorteadas del banco completo, con cuota por capítulo.</li>
          <li>${icon("timer", { size: 16 })} <strong>${bossInfo.durationMinutes} minutos</strong> de tiempo total, sin pausa.</li>
          <li>${icon("compass", { size: 16 })} Navegación libre: puedes cambiar respuestas y marcar preguntas para revisar.</li>
          <li>${icon("ban", { size: 16 })} Sin feedback durante el examen: al entregar verás la puntuación y el desglose.</li>
          <li>${icon("target", { size: 16 })} Se aprueba con el <strong>${bossInfo.passPercent} %</strong> (26 de 40).</li>
        </ul>
        <div class="results-actions">
          <button class="btn btn-primary" data-action="start">${icon("play", { size: 16, fill: true })} Comenzar examen</button>
          <button class="btn btn-ghost" data-action="back">${icon("map", { size: 16 })} Volver al mapa</button>
        </div>
      </div>
    `;
    el.querySelector('[data-action="start"]').addEventListener("click", startExam);
    el.querySelector('[data-action="back"]').addEventListener("click", () => navigate("map"));
    mountVolumeControl();
    window.scrollTo(0, 0);
  }

  /* ---------- Examen ---------- */
  function startExam() {
    finished = false;
    clearTimer();
    const questions = drawExam(bossBank);
    const answers = new Array(questions.length).fill(null);
    const marked = new Set();
    let current = 0;
    const deadline = Date.now() + bossInfo.durationMinutes * 60 * 1000;

    el.innerHTML = `
      <header class="level-topbar boss-topbar">
        <button class="icon-btn" data-action="exit" title="Abandonar el examen">${icon("x", { size: 18 })}</button>
        <div class="boss-progress" data-el="progress"></div>
        <div class="hud-timer boss-clock" data-el="clock">00:00</div>
        <button class="btn btn-primary btn-small" data-action="submit">Entregar</button>
      </header>
      <div class="boss-grid" data-el="grid" aria-label="Navegación entre preguntas"></div>
      <main class="level-body" data-el="body"></main>
    `;

    const gridEl = el.querySelector('[data-el="grid"]');
    const bodyEl = el.querySelector('[data-el="body"]');
    const progressEl = el.querySelector('[data-el="progress"]');
    const clockEl = el.querySelector('[data-el="clock"]');

    function tick() {
      const remaining = deadline - Date.now();
      clockEl.textContent = formatTime(remaining / 1000);
      clockEl.classList.toggle("low", remaining <= 5 * 60 * 1000);
      if (remaining <= 0 && !finished) submitExam(true);
    }

    function renderGrid() {
      gridEl.innerHTML = questions
        .map((_, i) => {
          const a = answers[i];
          const hasAnswer = a !== null && (!Array.isArray(a) || a.length > 0);
          const classes = ["boss-cell"];
          if (hasAnswer) classes.push("answered");
          if (i === current) classes.push("current");
          if (marked.has(i)) classes.push("marked");
          return `<button class="${classes.join(" ")}" data-i="${i}">${i + 1}${marked.has(i) ? icon("flag", { size: 10, className: "cell-flag" }) : ""}</button>`;
        })
        .join("");
      gridEl.querySelectorAll(".boss-cell").forEach((btn) => {
        btn.addEventListener("click", () => {
          current = Number(btn.dataset.i);
          renderQuestion();
        });
      });
    }

    function renderQuestion() {
      const q = questions[current];
      const isMulti = Array.isArray(q.correct);
      const required = isMulti ? q.correct.length : 1;
      const raw = answers[current];
      const picked = Array.isArray(raw) ? raw : raw === null ? [] : [raw];
      progressEl.textContent = `Pregunta ${current + 1} de ${questions.length}`;

      bodyEl.innerHTML = `
        <div class="question-card card">
          <p class="question-topic">Pregunta ${current + 1} · Capítulo ${q.chapter}</p>
          <h2 class="question-text">${esc(q.question)}</h2>
        </div>
        ${
          isMulti
            ? `<p class="multi-hint">${icon("puzzle", { size: 16 })} Selecciona <strong>${required}</strong> opciones — <span data-el="multi-count">${picked.length}/${required}</span></p>`
            : ""
        }
        <div class="options">
          ${q.options
            .map(
              (opt, i) => `
            <button class="option-btn ${picked.includes(i) ? "selected" : ""}" data-index="${i}">
              <span class="option-letter">${LETTERS[i]}</span>
              <span class="option-text">${esc(opt)}</span>
            </button>`
            )
            .join("")}
        </div>
        <div class="boss-nav">
          <button class="btn btn-ghost" data-action="prev" ${current === 0 ? "disabled" : ""}>← Anterior</button>
          <button class="btn btn-ghost" data-action="mark">${icon("flag", { size: 15 })} ${marked.has(current) ? "Quitar marca" : "Marcar para revisar"}</button>
          <button class="btn btn-primary" data-action="next" ${current === questions.length - 1 ? "disabled" : ""}>Siguiente →</button>
        </div>
      `;

      bodyEl.querySelectorAll(".option-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.dataset.index);
          if (isMulti) {
            const cur = [...picked];
            const pos = cur.indexOf(i);
            if (pos >= 0) cur.splice(pos, 1);
            else if (cur.length < required) cur.push(i);
            answers[current] = cur;
          } else {
            answers[current] = i;
          }
          renderQuestion();
        });
      });
      bodyEl.querySelector('[data-action="prev"]').addEventListener("click", () => {
        if (current > 0) {
          current -= 1;
          renderQuestion();
        }
      });
      bodyEl.querySelector('[data-action="next"]').addEventListener("click", () => {
        if (current < questions.length - 1) {
          current += 1;
          renderQuestion();
        }
      });
      bodyEl.querySelector('[data-action="mark"]').addEventListener("click", () => {
        if (marked.has(current)) marked.delete(current);
        else marked.add(current);
        renderQuestion();
      });

      renderGrid();
    }

    function submitExam(auto = false) {
      if (finished) return;
      const unanswered = answers.filter((a) => a === null || (Array.isArray(a) && a.length === 0)).length;
      if (!auto) {
        const msg =
          unanswered > 0
            ? `¿Entregar el examen? Quedan ${unanswered} preguntas sin responder.`
            : "¿Entregar el examen ahora?";
        if (!confirm(msg)) return;
      }
      finished = true;
      clearTimer();
      const result = scoreExam(questions, answers);
      recordBossResult({ correct: result.correct, passed: result.passed });
      const newAchievements = checkAchievements();
      renderResults(questions, answers, result, auto, newAchievements);
    }

    el.querySelector('[data-action="submit"]').addEventListener("click", () => submitExam(false));
    el.querySelector('[data-action="exit"]').addEventListener("click", () => {
      if (finished) return;
      if (!confirm("¿Abandonar el examen? Este intento no se guardará.")) return;
      finished = true;
      clearTimer();
      navigate("map");
    });

    mountVolumeControl();
    timerId = setInterval(tick, 1000);
    tick();
    renderQuestion();
    window.scrollTo(0, 0);
  }

  /* ---------- Resultados ---------- */
  function renderResults(questions, answers, result, auto, newAchievements = []) {
    const pct = Math.round(result.percent * 100);
    const chapterRows = Object.entries(result.perChapter)
      .sort(([a], [b]) => Number(a) - Number(b))
      .map(([chapter, r]) => `<tr><td>Capítulo ${chapter}</td><td>${r.correct}/${r.total}</td></tr>`)
      .join("");

    const wrong = questions
      .map((q, i) => ({ q, i }))
      .filter(({ q, i }) => !isCorrectAnswer(q, answers[i]));
    const wrongHtml = wrong
      .map(({ q, i }) => {
        const idxs = Array.isArray(q.correct) ? q.correct : [q.correct];
        const letters = idxs.map((c) => LETTERS[c]).join(" y ");
        const texts = idxs.map((c) => esc(q.options[c])).join(" · ");
        return `
        <div class="boss-review-item">
          <p><strong>${i + 1}.</strong> ${esc(q.question)}</p>
          <p class="answer-reveal">Correcta${idxs.length > 1 ? "s" : ""}: ${letters} — ${texts}</p>
          <p>${esc(q.explanation)}</p>
          <p class="syllabus">${icon("book-open", { size: 16 })} ${esc(q.syllabusRef)}</p>
        </div>`;
      })
      .join("");

    el.innerHTML = `
      <div class="results-card card boss-results">
        <div class="results-emoji">${result.passed ? icon("crown", { size: 44 }) : icon("bomb", { size: 44 })}</div>
        <h2 class="results-title">${result.passed ? "¡Examen aprobado!" : "No aprobado"}</h2>
        ${auto ? `<p class="results-topic">${icon("alarm-clock", { size: 16 })} Se agotó el tiempo: el examen se entregó automáticamente.</p>` : ""}
        <p class="results-topic">
          Puntuación: <strong>${result.correct}/${result.total}</strong> (${pct} %) · mínimo ${bossInfo.passPercent} %
        </p>
        <table class="boss-breakdown">
          <thead><tr><th>Capítulo</th><th>Aciertos</th></tr></thead>
          <tbody>${chapterRows}</tbody>
        </table>
        ${
          newAchievements.length > 0
            ? `<div class="achievements-unlocked">
                 <h3>${icon("trophy", { size: 18 })} ¡Logros desbloqueados!</h3>
                 ${newAchievements
                   .map(
                     (a) =>
                       `<p class="achievement-item">${icon(a.icon, { size: 16 })} <strong>${esc(a.name)}</strong> — ${esc(a.description)}</p>`
                   )
                   .join("")}
               </div>`
            : ""
        }
        ${
          wrong.length > 0
            ? `<details class="boss-review">
                 <summary>${icon("file-text", { size: 16 })} Revisar respuestas incorrectas (${wrong.length})</summary>
                 ${wrongHtml}
               </details>`
            : ""
        }
        <div class="results-actions">
          <button class="btn btn-primary" data-action="retry">${icon("rotate-ccw", { size: 16 })} Repetir examen</button>
          <button class="btn btn-ghost" data-action="map">${icon("map", { size: 16 })} Mapa</button>
        </div>
      </div>
    `;
    el.querySelector('[data-action="retry"]').addEventListener("click", startExam);
    el.querySelector('[data-action="map"]').addEventListener("click", () => navigate("map"));
    mountVolumeControl();
    window.scrollTo(0, 0);
  }

  renderIntro();
  return el;
}
