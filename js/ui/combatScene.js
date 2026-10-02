// =====================================================
// ISTQB Quest — ui/combatScene.js
// Escena de combate arcade (franja inferior): personajes
// pixel-art SVG, disparos, impactos, KO y barra de aguante.
// Es puramente visual y decorativa (aria-hidden).
// =====================================================

import { icon } from "./icons.js";

const PLAYER_COLORS = {
  helmetLight: "#a794ff",
  helmet: "#7c5cff",
  skin: "#f0c9a0",
  uniform: "#4a7ddb",
  uniformDark: "#345c9e",
  pack: "#2f4d7d",
  gun: "#3c4258",
  boot: "#171c30",
};

const ENEMY_COLORS = {
  helmetLight: "#ff9d9d",
  helmet: "#ff6b6b",
  skin: "#e8b48c",
  uniform: "#c94b4b",
  uniformDark: "#8f3131",
  pack: "#7d2f2f",
  gun: "#2e3247",
  boot: "#241a1a",
};

/** Soldado pixel-art de 16×16 mirando a la derecha. */
function soldierSvg(c) {
  return `
    <svg viewBox="0 0 16 16" class="combat-sprite" shape-rendering="crispEdges" focusable="false" aria-hidden="true">
      <rect x="5" y="2" width="4" height="1" fill="${c.helmetLight}"/>
      <rect x="4" y="3" width="6" height="2" fill="${c.helmet}"/>
      <rect x="5" y="5" width="4" height="2" fill="${c.skin}"/>
      <rect x="6" y="5" width="1" height="1" fill="${c.gun}"/>
      <rect x="4" y="7" width="5" height="4" fill="${c.uniform}"/>
      <rect x="3" y="7" width="1" height="3" fill="${c.pack}"/>
      <rect x="9" y="7" width="1" height="1" fill="${c.skin}"/>
      <rect x="10" y="7" width="5" height="1" fill="${c.gun}"/>
      <rect x="13" y="8" width="2" height="1" fill="${c.gun}"/>
      <rect x="4" y="11" width="2" height="3" fill="${c.uniformDark}"/>
      <rect x="7" y="11" width="2" height="3" fill="${c.uniformDark}"/>
      <rect x="4" y="14" width="2" height="1" fill="${c.boot}"/>
      <rect x="7" y="14" width="2" height="1" fill="${c.boot}"/>
    </svg>`;
}

/**
 * Monta la escena de combate en `container`.
 * Devuelve la API para disparar eventos y actualizar la barra.
 */
export function createCombatScene(container, { theme = "w1" } = {}) {
  container.innerHTML = `
    <div class="combat-arena theme-${theme}" data-el="arena">
      <div class="combat-skyline"></div>
      <div class="combat-ground"></div>
      <div class="combat-actor combat-player" data-el="player">
        ${soldierSvg(PLAYER_COLORS)}
        <span class="combat-muzzle"></span>
      </div>
      <div class="combat-actor combat-enemy" data-el="enemy">
        ${soldierSvg(ENEMY_COLORS)}
        <span class="combat-muzzle"></span>
        <div class="combat-hp"><div class="combat-hp-fill" data-el="hp"></div></div>
      </div>
      <span class="combat-projectile" data-el="bullet"></span>
      <span class="combat-spark" data-el="spark"></span>
      <div class="combat-vignette" data-el="vignette"></div>
    </div>
  `;

  const arena = container.querySelector('[data-el="arena"]');
  const player = container.querySelector('[data-el="player"]');
  const enemy = container.querySelector('[data-el="enemy"]');
  const bullet = container.querySelector('[data-el="bullet"]');
  const spark = container.querySelector('[data-el="spark"]');
  const vignette = container.querySelector('[data-el="vignette"]');
  const hpFill = container.querySelector('[data-el="hp"]');

  let timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  /** Posición relativa de un rectángulo dentro de la arena. */
  function pointInArena(rect, arenaRect) {
    return {
      x: rect.left + rect.width / 2 - arenaRect.left,
      y: rect.top + rect.height / 2 - arenaRect.top,
    };
  }

  /** Disparo: fogonazo, bala de tirador a objetivo y reacción. */
  function fire(direction) {
    clearTimers();

    const shooter = direction === "right" ? player : enemy;
    const target = direction === "right" ? enemy : player;

    const arenaRect = arena.getBoundingClientRect();
    const shooterRect = shooter.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const startX =
      direction === "right"
        ? shooterRect.right - arenaRect.left + 4
        : shooterRect.left - arenaRect.left - 16;
    const startY = shooterRect.top - arenaRect.top + shooterRect.height * 0.42;

    const end = pointInArena(targetRect, arenaRect);
    const endX = direction === "right" ? end.x - targetRect.width * 0.18 : end.x + targetRect.width * 0.18;
    const endY = end.y;

    shooter.classList.add("firing");
    bullet.style.transition = "none";
    bullet.style.left = `${startX}px`;
    bullet.style.top = `${startY}px`;
    bullet.classList.add("visible");

    requestAnimationFrame(() => {
      bullet.style.transition = "left 0.22s linear, top 0.22s linear";
      bullet.style.left = `${endX}px`;
      bullet.style.top = `${endY}px`;
    });

    later(() => {
      target.classList.add("hit");
      spark.style.left = `${endX}px`;
      spark.style.top = `${endY}px`;
      spark.classList.add("visible");
      if (direction === "left") {
        arena.classList.add("shake");
        vignette.classList.add("show");
      } else {
        arena.classList.add("shake-soft");
      }
    }, 240);

    later(() => {
      bullet.classList.remove("visible");
      spark.classList.remove("visible");
      target.classList.remove("hit");
      shooter.classList.remove("firing");
      arena.classList.remove("shake", "shake-soft");
      vignette.classList.remove("show");
    }, 700);
  }

  /** KO: el actor cae. */
  function down(who) {
    clearTimers();
    const actor = who === "enemy" ? enemy : player;
    actor.classList.add("down");
    arena.classList.add("finished");
  }

  /** Reproduce un evento del motor de combate. */
  function play(event) {
    if (!event) return;
    switch (event.type) {
      case "player-shot":
        fire("right");
        break;
      case "enemy-shot":
        fire("left");
        break;
      case "enemy-down":
        down("enemy");
        break;
      case "player-down":
        down("player");
        break;
    }
  }

  /** Actualiza la barra de aguante del enemigo (0–1). */
  function setEnemyHp(ratio) {
    const clamped = Math.max(0, Math.min(1, ratio || 0));
    hpFill.style.width = `${clamped * 100}%`;
    hpFill.classList.toggle("low", clamped <= 0.34);
  }

  /** Deja caer una estrella dorada en la arena; onPick se ejecuta al clickearla. */
  function dropGoldStar(onPick) {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "combat-gold-star";
    star.title = "¡Un reto extra!";
    star.setAttribute("aria-label", "Estrella dorada: reto extra desbloqueado");
    star.innerHTML = icon("star", { size: 24, fill: true });
    star.style.left = `${25 + Math.random() * 40}%`;
    star.addEventListener("click", () => {
      star.classList.add("picked");
      star.disabled = true;
      onPick?.();
    });
    arena.appendChild(star);
    return star;
  }

  /** Limpia temporizadores pendientes (al salir de la pantalla). */
  function destroy() {
    clearTimers();
  }

  return { play, setEnemyHp, dropGoldStar, destroy };
}
