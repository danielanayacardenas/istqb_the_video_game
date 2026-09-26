// =====================================================
// ISTQB Quest — data/worlds/world1.js
// Mundo 1: Fundamentos de Testing (CTFL v4.0, capítulo 1)
// =====================================================

export const world1 = {
  id: "w1",
  number: 1,
  title: "Fundamentos de Testing",
  emoji: "🧪",
  description:
    "Qué es el testing, sus objetivos, principios, el proceso de prueba y la psicología del tester.",
  levels: [
    {
      id: "w1-l1",
      number: 1,
      title: "¿Qué es el testing?",
      topic: "Tema 1.1 — ¿Qué es el testing?",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w1-l1-q1",
          topic: "1.1",
          question: "¿Cuál de las siguientes opciones describe mejor el testing de software?",
          options: [
            "Un proceso exclusivamente dinámico que consiste en ejecutar el software para encontrar fallos.",
            "Un conjunto de actividades para descubrir defectos y evaluar la calidad de los productos de trabajo, que puede incluir actividades estáticas y dinámicas.",
            "Una actividad de desarrollo cuyo objetivo es corregir los defectos encontrados.",
            "Una fase final del proyecto que certifica que el software está libre de defectos.",
          ],
          correct: 1,
          explanation:
            "El testing es un conjunto de actividades cuyo propósito es descubrir defectos y evaluar la calidad de los productos de trabajo. Incluye actividades estáticas (revisiones, análisis) y dinámicas (ejecutar el software); no se limita a ejecutar pruebas ni a corregir defectos.",
          example:
            "Como revisar la receta y los ingredientes antes de cocinar (estático) y luego probar el guiso (dinámico).",
          useCase:
            "En una revisión de requisitos, el tester encuentra una ambigüedad sin ejecutar una sola línea de código: eso también es testing.",
          mistake:
            "Es común creer que testing = solo ejecutar pruebas, pero el testing estático (revisiones, análisis) también es testing y puede encontrar defectos antes de que exista código.",
          syllabusRef: "Tema 1.1 — ¿Qué es el testing?",
        },
        {
          id: "w1-l1-q2",
          topic: "1.1",
          question:
            "¿Cuál de las siguientes afirmaciones sobre el testing y la depuración (debugging) es CORRECTA?",
          options: [
            "El testing y el debugging son la misma actividad, realizada siempre por la misma persona.",
            "El debugging encuentra fallos y el testing corrige los defectos.",
            "El testing puede provocar fallos que revelan defectos; el debugging localiza la causa del fallo y corrige el defecto.",
            "El debugging solo se realiza sobre el código fuente y el testing solo sobre la interfaz de usuario.",
          ],
          correct: 2,
          explanation:
            "El testing dinámico ejecuta el software y puede provocar fallos que revelan defectos. El debugging es la actividad de desarrollo que busca la causa del fallo, la analiza y elimina el defecto.",
          example:
            "El tester ve que al guardar un formulario vacío la aplicación se cierra (fallo). El desarrollador depura, descubre que faltó una validación (defecto) y la corrige.",
          useCase:
            "En un equipo, el tester reporta el fallo con pasos de reproducción y el desarrollador hace debugging sobre ese reporte.",
          mistake:
            "Recuerda la secuencia: testing → fallo → debugging → corrección del defecto → retesting y pruebas de regresión.",
          syllabusRef: "Tema 1.1 — Testing y depuración (debugging)",
        },
        {
          id: "w1-l1-q3",
          topic: "1.1",
          question: "¿Cuál de las siguientes opciones NO es un objetivo típico del testing?",
          options: [
            "Evaluar productos de trabajo como requisitos, historias de usuario y código.",
            "Causar fallos y descubrir defectos.",
            "Corregir los defectos encontrados en el software.",
            "Proporcionar información a los interesados para la toma de decisiones.",
          ],
          correct: 2,
          explanation:
            "Corregir defectos es tarea del debugging (desarrollo), no un objetivo del testing. Entre los objetivos típicos están: evaluar productos de trabajo, provocar fallos y descubrir defectos, asegurar la cobertura requerida, reducir riesgos y proporcionar información.",
          example:
            "Un analista de calidad informa que 3 requisitos no están cubiertos por pruebas; no arregla el código.",
          useCase:
            "En la reunión de release, el tester aporta información sobre riesgos residuales para decidir si se publica.",
          mistake:
            "Ojo con las preguntas del tipo «¿cuál NO…?»: lee con calma y busca la opción que no encaja con los objetivos del testing.",
          syllabusRef: "Tema 1.1 — Objetivos del testing",
        },
        {
          id: "w1-l1-q4",
          topic: "1.1",
          question: "¿Cuál de las siguientes es una actividad de testing ESTÁTICO?",
          options: [
            "Ejecutar un caso de prueba de inicio de sesión con credenciales inválidas.",
            "Revisar una historia de usuario para detectar ambigüedades e inconsistencias.",
            "Automatizar una batería de pruebas de regresión de interfaz.",
            "Medir los tiempos de respuesta del sistema bajo carga.",
          ],
          correct: 1,
          explanation:
            "El testing estático no ejecuta el software: analiza productos de trabajo (requisitos, diseño, código) mediante revisiones. Las demás opciones requieren ejecutar el software, es decir, son testing dinámico.",
          example:
            "Como revisar una receta y notar que dice «añade sal» sin indicar cuánta: el error se detecta sin cocinar.",
          useCase:
            "En un sprint, el equipo revisa las historias de usuario antes de programarlas y evita retrabajos costosos.",
          mistake:
            "Regla rápida: si no se ejecuta código, es testing estático; si se ejecuta, es dinámico.",
          syllabusRef: "Tema 1.1 — Testing estático y dinámico",
        },
        {
          id: "w1-l1-q5",
          topic: "1.1",
          question:
            "Un desarrollador escribe por error «suma = a - b» en lugar de «suma = a + b». Al ejecutarse, el sistema muestra resultados incorrectos al usuario. ¿Cómo se llama ese resultado incorrecto observado durante la ejecución?",
          options: [
            "Error (equivocación humana).",
            "Defecto (fault / bug).",
            "Fallo (failure).",
            "Caso de prueba negativo.",
          ],
          correct: 2,
          explanation:
            "El error es la equivocación humana; el defecto es su manifestación en el producto de trabajo (la fórmula mal escrita); el fallo es el comportamiento incorrecto observado al ejecutar el software.",
          example:
            "Error: te equivocaste al dictar la fórmula. Defecto: la fórmula quedó mal escrita en la hoja. Fallo: todos los cálculos del informe salen mal cuando lo usas.",
          useCase:
            "Al reportar un bug describe el fallo (lo observable); durante el debugging se busca el defecto que lo causa.",
          mistake:
            "Cadena para memorizar: error humano → defecto en el producto de trabajo → fallo al ejecutar.",
          syllabusRef: "Tema 1.1 — Errores, defectos y fallos",
        },
      ],
    },
    // Los niveles 1.2 a 1.5 se añaden en la Etapa 4.
  ],
};
