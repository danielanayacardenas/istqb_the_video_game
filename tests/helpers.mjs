// =====================================================
// ISTQB Quest — tests/helpers.mjs
// Mock de localStorage para ejecutar la lógica de la app
// fuera del navegador (tests con Bun).
// =====================================================

if (typeof globalThis.localStorage === "undefined") {
  globalThis.localStorage = {
    store: {},
    getItem(key) {
      return this.store[key] ?? null;
    },
    setItem(key, value) {
      this.store[key] = String(value);
    },
    removeItem(key) {
      delete this.store[key];
    },
  };
}
