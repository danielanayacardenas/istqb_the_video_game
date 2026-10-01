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
- 🎯 **Combate arcade** (estilo retro): aciertos → disparas al enemigo; fallos → el enemigo te dispara y pierdes una vida. Es visual: no altera las reglas. Se puede desactivar en los ajustes, junto con el sonido y la música.
- 🎵 **Música de fondo**: dos pistas 8-bit que suenan en bucle mientras juegas, con bocina de silencio y slider de volumen en la esquina de la escena de combate, y botón de apagado en el mapa.
- ⚙️ **Configuración estilo videojuego**: el botón de engrane abre una modal con **Combate**, **Efectos** y **Música** (ON/OFF). La interfaz usa iconos SVG de [Lucide](https://lucide.dev) en lugar de emojis.
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

### Opción 1 — Bun (recomendada)

Requiere [Bun](https://bun.sh) instalado.

```bash
bun server.js
```

(o `bun run dev`). Luego abre **http://localhost:4173** en tu navegador.

### Opción 2 — VS Code + Live Server

1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Server**.
3. Clic derecho sobre `index.html` → **Open with Live Server**.

---

## 🛠️ Tecnologías

- **HTML5**
- **CSS3** (vanilla, sin frameworks)
- **JavaScript** (ES Modules, vanilla, sin dependencias)
- **Bun** como runtime para el servidor de desarrollo local

---

## 🧪 Tests

El motor, el sistema de progreso y la persistencia tienen tests unitarios
con el runner integrado de Bun:

```bash
bun test          # suite completa (incluye guardarraíles anti-sesgo)
bun run analyze   # reporte de sesgo de longitud del banco de preguntas
```

---

## 📁 Estructura del proyecto

```
ISTQB/
├── index.html            ← punto de entrada
├── server.js             ← servidor de desarrollo (Bun)
├── package.json
├── assets/
│   └── audio/            ← pistas de música de fondo (8-bit)
├── css/
│   ├── base.css          ← variables, reset, tipografía
│   ├── components.css    ← botones, insignias, tarjetas
│   ├── screens.css       ← pantallas (inicio, mapa, nivel, resultados)
│   ├── animations.css    ← streak, estrellas, transiciones
│   └── combat.css        ← arena de combate arcade (sprites, disparos, KO)
├── js/
│   ├── app.js            ← bootstrap de la aplicación
│   ├── router.js         ← router de pantallas
│   ├── state.js          ← estado global + persistencia (localStorage)
│   ├── utils.js          ← utilidades compartidas
│   ├── screens/
│   │   ├── start.js      ← pantalla de inicio + idioma + ajustes
│   │   ├── map.js        ← mapa del juego con desbloqueo
│   │   ├── level.js      ← juego de nivel (preguntas + combate)
│   │   ├── results.js    ← resultado del nivel, estrellas y logros
│   │   └── boss.js       ← Boss Final (simulacro de examen)
│   ├── engine/
│   │   ├── game.js       ← vidas, racha, aleatorización
│   │   ├── scoring.js    ← estrellas
│   │   ├── progress.js   ← desbloqueo de mundos y niveles
│   │   ├── combat.js     ← motor del duelo de combate
│   │   ├── exam.js       ← sorteo y puntuación del Boss
│   │   └── achievements.js ← logros desbloqueables
│   ├── ui/
│   │   ├── combatScene.js ← escena pixel-art SVG del combate
│   │   ├── volumeControl.js ← bocina + slider de volumen (música)
│   │   ├── music.js       ← playlist de música de fondo
│   │   ├── icons.js       ← iconos SVG de Lucide
│   │   └── sfx.js         ← efectos de sonido (WebAudio)
│   └── data/
│       ├── index.js      ← agregador de mundos y desafíos
│       ├── worlds/       ← banco de preguntas por mundo (world1–world6)
│       ├── challenges/   ← desafíos cruzados (challenge1–challenge3)
│       └── boss/         ← banco del Boss Final (60 preguntas)
├── tests/
│   ├── engine.test.mjs      ← motor del juego
│   ├── progress.test.mjs    ← desbloqueo y estadísticas
│   ├── state.test.mjs       ← persistencia del progreso
│   ├── data.test.mjs        ← integridad de los bancos de preguntas
│   ├── exam.test.mjs        ← sorteo y puntuación del Boss
│   ├── achievements.test.mjs ← sistema de logros
│   ├── combat.test.mjs      ← motor del duelo de combate
│   ├── music.test.mjs       ← playlist y volumen de la música
│   └── icons.test.mjs       ← iconos SVG de Lucide
└── README.md
```

---

## 🗓️ Roadmap por etapas

| # | Etapa | Estado |
|---|-------|--------|
| 0 | Inicialización del repo, estructura y README | ✅ |
| 1 | Esqueleto de la app + pantalla de inicio + router + estado | ✅ |
| 2 | Motor de niveles (vidas, timer, streak, feedback, resultados) | ✅ |
| 3 | Mapa del juego con desbloqueo progresivo | ✅ |
| 4 | Contenido — Mundo 1: Fundamentos de Testing | ✅ |
| 5 | Contenido — Mundo 2: Testing en el SDLC | ✅ |
| 6 | Contenido — Mundo 3: Testing Estático | ✅ |
| 7 | Contenido — Mundo 4: Análisis y Diseño de Pruebas | ✅ |
| 8 | Contenido — Mundo 5: Gestión de Pruebas | ✅ |
| 9 | Contenido — Mundo 6: Herramientas | ✅ |
| 10 | Desafíos cruzados | ✅ |
| 11 | Boss Final (simulacro de examen) | ✅ |
| 12 | Logros y pulido final | ✅ |
| 13 | Combate arcade (mini-juego retro en los niveles) | ✅ |
| 14 | Calidad del banco: re-equilibrio de opciones + multi-selección | ✅ |
| 15 | Música de fondo + control de volumen (bocina y slider) | ✅ |
| 16 | Configuración estilo videojuego + iconos Lucide + música en el mapa | ✅ |

Cada etapa se desarrolla y se versiona con su propio commit.

---

## 📄 Créditos

Basado en el syllabus **ISTQB® CTFL v4.0** (© International Software Testing Qualifications Board).
Proyecto personal de estudio, sin fines comerciales.
