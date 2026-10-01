# Guía de estilo del contenido — ISTQB Quest

Reglas para escribir y mantener las preguntas del juego.
Todo contenido nuevo debe pasar `bun test` (incluye los guardarraíles anti-sesgo
de `tests/bias.test.mjs`) y `bun run analyze` (reporte de sesgo de longitud).

---

## 1. Equilibrio de longitud de las opciones

El problema histórico del banco era que **la respuesta correcta se reconocía por ser
la más larga** (ratio medio 2.38 con el 93 % de correctas más largas). Esto está
prohibido por diseño:

- **Por pregunta:** ratio = media(longitud de correctas) / media(longitud de incorrectas)
  debe quedar entre **0.7 y 1.4** (bidireccional: también se evita el sesgo inverso).
- **Margen por pregunta:** la opción correcta no debe superar a la más larga de las
  incorrectas por más de **10 caracteres** (márgenes mayores se perciben a simple vista
  y permiten «acertar a ojo» eligiendo la más larga).
- **Global:** la media del banco debe ser **≤ 1.15**.
- Verificación: `bun run analyze` y `bun test` (tests/bias.test.mjs).

## 2. Redacción de opciones

- **Frases completas** y estructura gramatical homogénea entre las 4 (o 5) opciones.
- **Distractores plausibles:** errores típicos reales que un estudiante dudaría, no obviedades.
- **Prohibido:** «todas las anteriores», «ninguna de las anteriores», «A y B».
- **Sin pistas de formato:** evitar que solo una opción tenga paréntesis, rangos, ejemplos
  o matices que la delaten.
- **Longitud orientativa:** 45–90 caracteres por opción (las preguntas con valores
  numéricos pueden usar descriptores para mantener el cuerpo: «9, 10, 20 y 21: cada límite
  con su vecino adyacente»).

## 3. Preguntas de selección múltiple (multi)

- **Formato:** `type: "multi"`, `correct: [i, j]` (array), **5 opciones**, exactamente **2 correctas**.
- **Enunciado:** «Selecciona las DOS ...» (como el examen real).
- **Sin crédito parcial:** el conjunto elegido debe coincidir exactamente.
- La regla de equilibrio también aplica al conjunto: media de las 2 correctas vs. media
  de las 3 incorrectas.
- Ojo con los absolutos en las incorrectas («siempre», «nunca», «garantiza»): son útiles,
  pero no deben ser el único patrón detectable.

## 4. Campos requeridos de cada pregunta

```
id · topic · question · options · correct · explanation · example · useCase · mistake · syllabusRef
```

Las preguntas del banco del Boss añaden además: `chapter` (1–6).

## 5. Estabilidad de IDs

- Los IDs **nunca se renumeran ni se reutilizan**: el progreso del jugador
  (localStorage) depende de ellos.
- Para añadir preguntas nuevas: continuar la numeración del nivel (por ejemplo, `w1-l1-q7`).

## 6. Proceso para contenido nuevo

1. Escribir o editar la pregunta.
2. `bun run analyze` → comprobar que la pregunta queda en rango (0.7–1.4).
3. `bun test` → guardarraíles anti-sesgo + integridad + conteos.
4. Commit por lote de contenido (mundo, desafío o banco).
5. Actualizar los tests de conteo si cambia el número de preguntas de un nivel.

---

_Última actualización: Etapa 14 (re-equilibrio + multi-selección), lote 10._
