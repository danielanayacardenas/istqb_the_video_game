// =====================================================
// ISTQB Quest — tests/imports.test.mjs
// Guardarraíl: los helpers compartidos deben importarse
// en cada archivo donde se usan. Bug real que motivó este
// test: icon() sin importar en level.js → niveles en blanco.
// =====================================================

import { describe, test, expect } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const jsDir = path.join(import.meta.dir, "..", "js");

/** Helper compartido -> archivo que lo define. */
const HELPERS = {
  icon: "ui/icons.js",
  createVolumeControl: "ui/volumeControl.js",
  createCombatScene: "ui/combatScene.js",
  playEvent: "ui/sfx.js",
  esc: "utils.js",
};

/** Lista recursiva de archivos .js bajo js/. */
function jsFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsFiles(full);
    return entry.name.endsWith(".js") ? [full] : [];
  });
}

describe("imports de helpers compartidos", () => {
  const files = jsFiles(jsDir);

  for (const [name, defining] of Object.entries(HELPERS)) {
    test(`«${name}» se importa en todos los archivos que lo usan`, () => {
      const missing = files.filter((file) => {
        const rel = path.relative(jsDir, file).replaceAll("\\", "/");
        if (rel === defining) return false;

        const code = readFileSync(file, "utf8");
        const used = new RegExp(`(?<![\\w.])${name}\\s*\\(`).test(code);
        if (!used) return false;

        const imported =
          new RegExp(`import\\s*\\{[^}]*\\b${name}\\b[^}]*\\}`, "s").test(code) ||
          new RegExp(`import\\s+${name}\\b`).test(code);
        return !imported;
      });

      expect(missing).toEqual([]);
    });
  }
});