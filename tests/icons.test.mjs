// =====================================================
// ISTQB Quest — tests/icons.test.mjs
// Tests del módulo de iconos SVG inline de Lucide.
// =====================================================

import { describe, test, expect } from "bun:test";
import { icon, iconNames } from "../js/ui/icons.js";

describe("iconos Lucide", () => {
  test("expone los iconos que usa la interfaz", () => {
    const names = iconNames();
    ["settings", "x", "gamepad-2", "volume-2", "volume-x", "music"].forEach((name) => {
      expect(names).toContain(name);
    });
  });

  test("icon() genera un SVG accesible que hereda el color", () => {
    const svg = icon("settings", { size: 20, className: "foo" });
    expect(svg.startsWith("<svg")).toBe(true);
    expect(svg.endsWith("</svg>")).toBe(true);
    expect(svg).toContain('width="20"');
    expect(svg).toContain('class="icon icon-settings foo"');
    expect(svg).toContain('aria-hidden="true"');
    expect(svg).toContain('stroke="currentColor"');
  });

  test("un icono desconocido devuelve cadena vacía", () => {
    expect(icon("no-existe")).toBe("");
  });
});