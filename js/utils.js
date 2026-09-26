// =====================================================
// ISTQB Quest — utils.js
// Utilidades compartidas.
// =====================================================

/** Escapa texto para inyectarlo de forma segura en HTML. */
export function esc(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
