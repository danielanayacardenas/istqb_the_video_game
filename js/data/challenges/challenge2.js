// =====================================================
// ISTQB Quest — data/challenges/challenge2.js
// Desafío 2: Diseño y cálculo (capítulo 4)
// =====================================================

export const challenge2 = {
  id: "c2",
  number: 8,
  challengeNumber: 2,
  type: "challenge",
  title: "Diseño y cálculo",
  emoji: "⚔️",
  description: "Casos trampa de técnicas de diseño: particiones, límites, tablas, estados y cobertura.",
  levels: [
    {
      id: "c2-l1",
      number: 1,
      title: "Misión: diseñar sin margen de error",
      topic: "Desafío 2 — Capítulo 4",
      difficulty: "difícil",
      timePerQuestion: 90,
      lives: 3,
      questions: [
        {
          id: "c2-l1-q1",
          topic: "Mix 4.2",
          question:
            "Un formulario acepta edades entre 18 y 65 años. Aplicando partición de equivalencia, ¿cuántas particiones identificas como MÍNIMO para este campo?",
          options: [
            "1: todas las edades en una sola partición.",
            "2: válidas e inválidas agrupadas en bloque.",
            "3: menores de 18, entre 18 y 65, y mayores de 65.",
            "4: menores, 18, 65 y mayores.",
          ],
          correct: 2,
          explanation:
            "Se identifican tres particiones: por debajo del rango, dentro del rango y por encima. Los valores exactos de los límites (17/18 y 65/66) se cubren con BVA, no son particiones.",
          example:
            "Como las tallas de ropa: infantil, adulto y tallaje especial; una muestra de cada grupo basta.",
          useCase:
            "Con 3 casos (uno por partición) se cubre EP al 100 %; BVA añadirá los valores frontera.",
          mistake:
            "Contar 17, 18, 65 y 66 como particiones; esos son valores límite.",
          syllabusRef: "Desafío — Tema 4.2 (partición de equivalencia)",
        },
        {
          id: "c2-l1-q2",
          topic: "Mix 4.2",
          question:
            "El horario de atención de un servicio es de 9:00 a 17:00 (ambos incluidos). Con BVA de 3 VALORES, ¿qué horas pruebas en los límites?",
          options: [
            "8:00, 9:00, 17:00 y 18:00.",
            "8:00, 9:00, 10:00, 16:00, 17:00 y 18:00.",
            "9:00 y 17:00 solamente.",
            "10:00 y 16:00 solamente.",
          ],
          correct: 1,
          explanation:
            "BVA de 3 valores añade, además del límite y su vecino adyacente, el vecino interior: 8, 9 y 10 para el límite inferior; 16, 17 y 18 para el superior. La opción de 8, 9, 17 y 18 es la de 2 valores.",
          example:
            "Como medir una puerta: un dedo antes del marco, el marco y un dedo después.",
          useCase:
            "El equipo prueba reservas a las 8:59, 9:00, 9:01, 16:59, 17:00 y 17:01.",
          mistake:
            "Confundir 2 y 3 valores; esta última incluye el vecino interior.",
          syllabusRef: "Desafío — Tema 4.2 (análisis de valores límite)",
        },
        {
          id: "c2-l1-q3",
          topic: "Mix 4.2",
          question:
            "Un campo admite entre 1 y 99 caracteres. Con BVA de 2 valores, ¿qué longitudes conviene probar en los límites?",
          options: [
            "0, 1, 99 y 100.",
            "1 y 99.",
            "0 y 100.",
            "1, 2, 98 y 99.",
          ],
          correct: 0,
          explanation:
            "Con 2 valores se prueba cada límite y su vecino en la partición adyacente: 0 y 1 (inferior), 99 y 100 (superior). Las longitudes 2 y 98 corresponden a BVA de 3 valores.",
          example:
            "Como medir el equipaje permitido: justo el límite y un kilo por encima y por debajo.",
          useCase:
            "Se prueba con textos de 0, 1, 99 y 100 caracteres.",
          mistake:
            "Probar solo los valores dentro del rango (1 y 99) y no los que lo cruzan.",
          syllabusRef: "Desafío — Tema 4.2 (análisis de valores límite)",
        },
        {
          id: "c2-l1-q4",
          topic: "Mix 4.2",
          question:
            "Una tabla de decisión con 3 condiciones booleanas genera 8 combinaciones; 2 se marcan como infactibles. Si las pruebas cubren 3 de las reglas factibles, ¿cuál es la cobertura de la tabla?",
          options: ["37,5 %.", "50 %.", "66,7 %.", "75 %."],
          correct: 1,
          explanation:
            "Las reglas factibles son 8 − 2 = 6. La cobertura es reglas factibles ejercitadas / total de factibles = 3/6 = 50 %. Las combinaciones infactibles se excluyen del cálculo.",
          example:
            "Como una quiniela con 6 combinaciones posibles: si juegas 3, cubres la mitad.",
          useCase:
            "El informe muestra 50 % de cobertura de la tabla y el equipo prioriza las 3 reglas restantes.",
          mistake:
            "Dividir entre 8 (incluyendo las infactibles) y reportar 37,5 %.",
          syllabusRef: "Desafío — Tema 4.2 (tablas de decisión)",
        },
        {
          id: "c2-l1-q5",
          topic: "Mix 4.2",
          question:
            "El ciclo de un pedido es: creado → pagado → enviado → entregado. ¿Cuál es una transición INVÁLIDA que conviene probar?",
          options: [
            "De creado a pagado.",
            "De pagado a enviado.",
            "De entregado a pagado (volver atrás sin mediar una devolución).",
            "De enviado a entregado.",
          ],
          correct: 2,
          explanation:
            "Las transiciones inválidas (como retroceder de entregado a pagado) deben probarse para confirmar que el sistema las rechaza o las gestiona correctamente. Suelen ser fuente de defectos graves.",
          example:
            "Como intentar deshacer el pago de una compra ya entregada: el sistema debe impedirlo.",
          useCase:
            "Se verifica que el sistema bloquea la transición y muestra el error adecuado.",
          mistake:
            "Probar solo el camino feliz y obviar las transiciones prohibidas.",
          syllabusRef: "Desafío — Tema 4.2 (transición de estados)",
        },
        {
          id: "c2-l1-q6",
          topic: "Mix 4.3",
          question:
            "Una función contiene 6 ramas. Los casos ejecutados cubren 4. ¿Cuál es la cobertura de ramas alcanzada?",
          options: ["40 %.", "60 %.", "67 %.", "75 %."],
          correct: 2,
          explanation:
            "Cobertura de ramas = ramas ejercitadas / ramas totales = 4/6 = 0,667 → 67 %.",
          example:
            "Como recorrer 4 de los 6 senderos de un parque.",
          useCase:
            "El informe señala las 2 ramas pendientes para completar el 100 %.",
          mistake:
            "Dividir 6/4 o confundir ramas con sentencias.",
          syllabusRef: "Desafío — Tema 4.3 (cobertura de ramas)",
        },
        {
          id: "c2-l1-q7",
          topic: "Mix 4.3",
          question:
            "Un equipo presume de 100 % de cobertura de sentencias en un módulo crítico. ¿Qué debería advertir el tester?",
          options: [
            "Nada: el 100 % de sentencias garantiza que no hay defectos.",
            "Que el 100 % de sentencias no garantiza el 100 % de ramas; pueden quedar caminos (y defectos) sin ejercitar.",
            "Que la cobertura de sentencias siempre es superior a la de ramas.",
            "Que deberían haber medido solo la cobertura de ramas.",
          ],
          correct: 1,
          explanation:
            "Ejecutar todas las sentencias no implica recorrer todas las ramas: un if puede evaluarse siempre en el mismo sentido y aun así ejecutar sus sentencias. La cobertura de ramas es más exigente.",
          example:
            "Como visitar todos los pasillos de un edificio sin haber abierto todas las puertas posibles.",
          useCase:
            "El equipo añade cobertura de ramas para el módulo crítico y descubre caminos sin probar.",
          mistake:
            "Equiparar cobertura de sentencias con cobertura completa del comportamiento.",
          syllabusRef: "Desafío — Tema 4.3 (sentencias y ramas)",
        },
        {
          id: "c2-l1-q8",
          topic: "Mix 4.2",
          question:
            "Las reglas de aprobación de un préstamo dependen de la COMBINACIÓN de ingresos, historial y deuda. ¿Qué técnica de diseño es MÁS adecuada para probar estas reglas?",
          options: [
            "Partición de equivalencia simple.",
            "Análisis de valores límite.",
            "Tablas de decisión.",
            "Cobertura de sentencias.",
          ],
          correct: 2,
          explanation:
            "Cuando el resultado depende de combinaciones de condiciones, la tabla de decisión modela reglas y acciones de forma exhaustiva y permite medir la cobertura por reglas.",
          example:
            "Como una tabla de descuentos cruzados: tipo de cliente × importe × cupón.",
          useCase:
            "El analista deriva un caso por cada regla factible de la matriz de aprobación.",
          mistake:
            "Aplicar solo EP por condición, sin cubrir combinaciones.",
          syllabusRef: "Desafío — Tema 4.2 (selección de técnica)",
        },
        {
          id: "c2-l1-q9",
          topic: "Mix 4.4–4.5",
          question:
            "Un módulo nuevo carece de especificaciones claras y el tiempo es limitado. ¿Qué enfoque de prueba es más razonable?",
          options: [
            "Esperar a que existan especificaciones completas antes de probar.",
            "Combinar sesiones exploratorias con charters y adivinación de errores, complementando lo que se pueda derivar de la información disponible.",
            "Probar solo el camino feliz para ahorrar tiempo.",
            "Automatizar todo sin criterio humano.",
          ],
          correct: 1,
          explanation:
            "Con poca documentación y poco tiempo, las técnicas basadas en la experiencia aportan: sesiones exploratorias guiadas por charters y adivinación de errores basada en experiencia y defectos históricos.",
          example:
            "Como explorar una ciudad sin mapa actualizado: con experiencia y buen instinto encuentras lo relevante rápido.",
          useCase:
            "El tester dedica una sesión de 90 minutos al flujo nuevo y anota los hallazgos.",
          mistake:
            "Elegir entre «esperar» o «probar solo el camino feliz»; la exploración es la alternativa profesional.",
          syllabusRef: "Desafío — Temas 4.4–4.5 (experiencia y colaboración)",
        },
        {
          id: "c2-l1-q10",
          topic: "Mix 4.5",
          question:
            "La historia de usuario dice: «el usuario podrá recuperar su contraseña». ¿Qué práctica mejora la prueba ANTES de programar?",
          options: [
            "Escribir los criterios de aceptación en colaboración (por ejemplo, escenarios Dado/Cuando/Entonces) y derivar de ellos los casos de prueba.",
            "Programar primero y ver qué sale.",
            "Pedir al usuario final que pruebe directamente en producción.",
            "Dividir la historia en tareas de código sin criterios.",
          ],
          correct: 0,
          explanation:
            "Definir criterios de aceptación verificables en colaboración (negocio, desarrollo, testing) y derivar casos antes de programar evita ambigüedades y guía el desarrollo: es la esencia de ATDD/BDD.",
          example:
            "Dado un usuario registrado, cuando pide recuperar su contraseña, entonces recibe un enlace que caduca en 15 minutos.",
          useCase:
            "Los tres criterios de la historia se convierten en ejemplos ejecutables antes del sprint.",
          mistake:
            "Dejar la historia vaga y esperar a probar después «lo que se implementó».",
          syllabusRef: "Desafío — Tema 4.5 (enfoques colaborativos)",
        },
      ],
    },
  ],
};
