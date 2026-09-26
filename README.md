# 🎮 ISTQB Quest

Juego interactivo de preparación para el examen **ISTQB Foundation Level v4.0**.
Avanza de lo básico a lo avanzado pasando mundos, niveles y desafíos, como en un videojuego.

> 📚 Basado en el syllabus oficial **ISTQB Certified Tester Foundation Level (CTFL) v4.0**.

---

## ✨ Características

- 🗺️ **29 niveles**: 6 mundos (uno por capítulo del syllabus), 3 desafíos cruzados y 1 Boss Final.
- ❤️ **3 vidas por nivel** — si las pierdes, repites el nivel. Al repetir, las preguntas **y** las respuestas se barajan en orden aleatorio.
- ⏱️ **Temporizador por pregunta** en mundos y desafíos. El Boss Final tiene **75 minutos totales** (como el examen real).
- 💬 **Feedback inmediato**:
  - ✅ Si aciertas: explicación breve + ejemplo simple + caso de uso.
  - ❌ Si fallas: por qué está mal + referencia al tema del syllabus para repasar.
- ⭐ **Estrellas** según vidas restantes (1⭐ / 2⭐ / 3⭐).
- 🔥 **Racha (streak)** de respuestas correctas con multiplicador visual.
- 🏆 **Logros desbloqueables** (perfeccionista, en llamas, explorador, etc.).
- 💾 **Progreso guardado** en `localStorage` (no pierdes tu avance al cerrar el navegador).
- 🌐 **Español** en v1. Selector de idioma preparado para futuras versiones.

---

## 🗺️ Estructura del juego

### Fase 1 — Los 6 Mundos

| Mundo | Tema | Niveles |
|-------|------|---------|
| 🌍 1 | Fundamentos de Testing | 5 |
| 🌍 2 | Testing a lo largo del SDLC | 4 |
| 🌍 3 | Testing Estático | 3 |
| 🌍 4 | Análisis y Diseño de Pruebas | 6 |
| 🌍 5 | Gestión de las Actividades de Prueba | 4 |
| 🌍 6 | Soporte de Herramientas | 3 |

Los mundos se desbloquean en orden: completa el anterior para acceder al siguiente.

### Fase 2 — Desafíos Cruzados ⚔️

3 desafíos que mezclan temas de todos los mundos, con preguntas tipo escenario y casos trampa.

### Fase 3 — Boss Final 👑

Simulacro del examen real: **40 preguntas en 75 minutos**, con navegación libre entre preguntas.
Se desbloquea al completar las fases 1 y 2. Puntuación mínima de aprobación: **65 % (26/40)**.

---

## 🚀 Cómo ejecutar

El proyecto usa **ES Modules**, por lo que necesita servirse desde un servidor local
(no funciona abriendo `index.html` con doble clic).

### Opción 1 — VS Code + Live Server (recomendado)

1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Server**.
3. Clic derecho sobre `index.html` → **Open with Live Server**.

### Opción 2 — npx serve

```bash
npx serve .
```

### Opción 3 — Python

```bash
python -m http.server 8000
```

Luego abre `http://localhost:8000` en tu navegador.

---

## 🛠️ Tecnologías

- **HTML5**
- **CSS3** (vanilla, sin frameworks)
- **JavaScript** (ES Modules, vanilla, sin dependencias)

---

## 📁 Estructura del proyecto

```
ISTQB/
├── index.html            ← punto de entrada
├── css/
│   ├── base.css          ← variables, reset, tipografía
│   ├── components.css    ← botones, tarjetas, modales, barras
│   ├── screens.css       ← pantallas (inicio, mapa, nivel, resultados)
│   └── animations.css    ← streak, estrellas, transiciones
├── js/
│   ├── app.js            ← bootstrap + router de pantallas
│   ├── state.js          ← estado global + persistencia (localStorage)
│   ├── screens/
│   │   ├── start.js      ← pantalla de inicio + idioma
│   │   ├── map.js        ← mapa del juego
│   │   ├── level.js      ← juego de nivel (preguntas)
│   │   ├── results.js    ← resultado del nivel, estrellas y fallidas
│   │   ├── achievements.js
│   │   └── boss.js       ← simulacro de examen
│   ├── engine/
│   │   ├── game.js       ← vidas, streak, temporizador, aleatorización
│   │   └── scoring.js    ← estrellas y logros
│   └── data/
│       ├── worlds/       ← banco de preguntas por mundo
│       │   ├── world1.js … world6.js
│       │   ├── challenges.js
│       │   └── boss.js
│       └── achievements.js
└── README.md
```

---

## 🗓️ Roadmap por etapas

| # | Etapa | Estado |
|---|-------|--------|
| 0 | Inicialización del repo, estructura y README | ✅ |
| 1 | Esqueleto de la app + pantalla de inicio + router + estado | ⏳ |
| 2 | Motor de niveles (vidas, timer, streak, feedback, resultados) | ⏳ |
| 3 | Mapa del juego con desbloqueo progresivo | ⏳ |
| 4 | Contenido — Mundo 1: Fundamentos de Testing | ⏳ |
| 5 | Contenido — Mundo 2: Testing en el SDLC | ⏳ |
| 6 | Contenido — Mundo 3: Testing Estático | ⏳ |
| 7 | Contenido — Mundo 4: Análisis y Diseño de Pruebas | ⏳ |
| 8 | Contenido — Mundo 5: Gestión de Pruebas | ⏳ |
| 9 | Contenido — Mundo 6: Herramientas | ⏳ |
| 10 | Desafíos cruzados | ⏳ |
| 11 | Boss Final (simulacro de examen) | ⏳ |
| 12 | Logros y pulido final | ⏳ |

Cada etapa se desarrolla y se versiona con su propio commit.

---

## 📄 Créditos

Basado en el syllabus **ISTQB® CTFL v4.0** (© International Software Testing Qualifications Board).
Proyecto personal de estudio, sin fines comerciales.
