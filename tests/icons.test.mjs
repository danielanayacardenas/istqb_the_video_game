// =====================================================
// ISTQB Quest — tests/icons.test.mjs
// Tests del módulo de iconos SVG inline de Lucide.
// =====================================================

import { describe, test, expect } from "bun:test";
import { icon, iconNames } from "../js/ui/icons.js";

/** Iconos que usa la interfaz del juego. */
const USED_ICONS = [
  "settings",
  "x",
  "gamepad-2",
  "volume-2",
  "volume-x",
  "music",
  "languages",
  "play",
  "trash-2",
  "star",
  "trophy",
  "book",
  "house",
  "lock",
  "circle-check",
  "construction",
  "crown",
  "flask-conical",
  "workflow",
  "search",
  "target",
  "clipboard-list",
  "wrench",
  "swords",
  "heart",
  "flame",
  "puzzle",
  "circle-x",
  "lightbulb",
  "pin",
  "book-open",
  "alarm-clock",
  "calculator",
  "timer",
  "compass",
  "ban",
  "file-text",
  "flag",
  "rotate-ccw",
  "map",
  "bomb",
  "party-popper",
  "globe",
  "graduation-cap",
  "sparkles",
  "award",
];

describe("iconos Lucide", () => {
  test("expone todos los iconos que usa la interfaz", () => {
    const names = iconNames();
    USED_ICONS.forEach((name) => expect(names).toContain(name));
  });

  test("no queda ningún icono duplicado", () => {
    const names = iconNames();
    expect(new Set(names).size).toBe(names.length);
  });

  test("icon() genera un SVG accesible que hereda el color", () => {
    const svg = icon("settings", { size: 20, className: "foo" });
    expect(svg.startsWith("<svg")).toBe(true);
    expect(svg.endsWith("</svg>")).toBe(true);
    expect(svg).toContain('width="20"');
    expect(svg).toContain('class="icon icon-settings foo"');
    expect(svg).toContain('fill="none"');
    expect(svg).toContain('aria-hidden="true"');
    expect(svg).toContain('stroke="currentColor"');
  });

  test("fill: true rellena el icono con el color actual", () => {
    const svg = icon("star", { fill: true });
    expect(svg).toContain('fill="currentColor"');
  });

  test("un icono desconocido devuelve cadena vacía", () => {
    expect(icon("no-existe")).toBe("");
  });
});