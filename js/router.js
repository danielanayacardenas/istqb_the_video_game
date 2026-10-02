/* =====================================================
   ISTQB Quest — router.js
   Router de pantallas: registra y monta vistas en el DOM.
   ===================================================== */

const screens = new Map();
const listeners = new Set();
let container = null;

/** Registra una pantalla: name -> función render(params) => HTMLElement */
export function registerScreen(name, render) {
  screens.set(name, render);
}

/** Suscribe una función a cada navegación: (name, params) => void. */
export function onNavigate(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/** Inicializa el router montando la pantalla por defecto. */
export function initRouter(containerEl, defaultScreen) {
  container = containerEl;
  navigate(defaultScreen);
}

/** Navega a una pantalla, reemplazando el contenido actual. */
export function navigate(name, params = {}) {
  const render = screens.get(name);
  if (!render) {
    console.error(`Pantalla desconocida: "${name}"`);
    return;
  }
  container.innerHTML = "";
  const el = render(params);
  container.appendChild(el);
  window.scrollTo(0, 0);
  listeners.forEach((fn) => {
    try {
      fn(name, params);
    } catch (err) {
      console.error(`Error en onNavigate("${name}"):`, err);
    }
  });
}
