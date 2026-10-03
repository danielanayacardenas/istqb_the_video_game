// =====================================================
// ISTQB Quest — data/gold/goldBank.js
// Banco dorado: 1 pregunta nueva por mundo para el Reto
// Dorado. Cumple la guía de estilo (opciones equilibradas).
// El nivel se arma en vivo desde engine/gold.js.
// =====================================================

export const goldQuestions = [
  {
    id: "gold-w1-q1",
    world: "w1",
    topic: "Fundamentos — Principios del testing",
    question:
      "Un equipo entrega una función sin defectos conocidos, pero los usuarios no logran completar su tarea con ella. ¿Qué principio explica MEJOR esta situación?",
    options: [
      "La ausencia de defectos no garantiza que el sistema satisfaga al usuario.",
      "El testing exhaustivo es imposible salvo que se automatice todo.",
      "Los defectos tienden a agruparse en unos pocos módulos del sistema.",
      "El testing temprano reduce el costo de corregir los defectos.",
    ],
    correct: 0,
    explanation:
      "Es la falacia de la ausencia de errores: un producto sin defectos conocidos puede no cubrir las necesidades reales de quien lo usa.",
    example:
      "Un reloj perfecto que nadie sabe poner en hora porque el manual no existe.",
    useCase:
      "Complementar la verificación contra requisitos con validación con usuarios reales.",
    mistake:
      "Creer que cero defectos conocidos equivale a un producto exitoso.",
    syllabusRef: "Fundamentos — Principios del testing (ausencia de errores).",
  },
  {
    id: "gold-w2-q1",
    world: "w2",
    topic: "SDLC — Integración y feedback temprano",
    question:
      "El equipo despliega a diario y quiere retroalimentación de calidad lo antes posible. ¿Qué práctica se alinea MEJOR con ese objetivo?",
    options: [
      "Automatizar las pruebas de regresión y ejecutarlas en cada cambio.",
      "Posponer las pruebas al final para ejecutarlas una sola vez.",
      "Documentar los casos de prueba solo después de cada entrega.",
      "Aumentar el tamaño de los lotes para reducir los despliegues.",
    ],
    correct: 0,
    explanation:
      "La regresión automatizada en cada cambio da feedback inmediato y sostiene la integración continua sin frenar las entregas.",
    example:
      "Como el cinturón de seguridad: se activa en cada viaje, no una vez al año.",
    useCase:
      "Pipelines de CI que corren la suite de regresión en cada pull request.",
    mistake:
      "Acumular cambios y probar al final, cuando el costo de corregir es mayor.",
    syllabusRef: "SDLC — Integración continua y feedback temprano.",
  },
  {
    id: "gold-w3-q1",
    world: "w3",
    topic: "Testing estático — Revisiones",
    question:
      "En una revisión formal se detecta que falta una regla de negocio en un requisito. ¿Por qué es MÁS efectiva que ejecutar el software?",
    options: [
      "Detecta el defecto antes de que se propague al código y a las pruebas.",
      "Permite medir el rendimiento real del sistema en producción.",
      "Sustituye la necesidad de ejecutar pruebas de aceptación.",
      "Comprueba el comportamiento de la interfaz con el usuario.",
    ],
    correct: 0,
    explanation:
      "El testing estático encuentra defectos en el artefacto mismo, antes de codificar, evitando retrabajo en cascada.",
    example:
      "Revisar los planos antes de construir evita tirar paredes después.",
    useCase:
      "Revisiones de requisitos y criterios de aceptación con todo el equipo.",
    mistake:
      "Pensar que las revisiones reemplazan las pruebas dinámicas: son complementarias.",
    syllabusRef: "Testing estático — Revisiones y detección temprana.",
  },
  {
    id: "gold-w4-q1",
    world: "w4",
    topic: "Análisis y diseño — Tablas de decisión",
    question:
      "Un sistema aplica un 10 % de descuento solo si el cupón es válido Y la compra supera 50 €. ¿Qué técnica cubre las combinaciones con MENOS casos?",
    options: [
      "Tabla de decisión con las combinaciones de las condiciones.",
      "Particiones de equivalencia de cada campo por separado.",
      "Análisis de valores límite de todos los importes posibles.",
      "Pruebas exploratorias guiadas por la experiencia del tester.",
    ],
    correct: 0,
    explanation:
      "La tabla de decisión modela reglas con condiciones combinadas y permite derivar un caso por cada regla relevante.",
    example:
      "La receta que indica qué ingredientes juntos producen cada platillo.",
    useCase:
      "Reglas de negocio con condiciones Y/O en precios, descuentos o permisos.",
    mistake:
      "Probar cada campo por separado y no cubrir la combinación de condiciones.",
    syllabusRef: "Análisis y diseño — Técnicas basadas en especificación.",
  },
  {
    id: "gold-w5-q1",
    world: "w5",
    topic: "Gestión — Criterios de salida",
    question:
      "El informe muestra 80 % de casos ejecutados y 60 % de defectos abiertos. ¿Qué dato FALTA para decidir la salida a producción?",
    options: [
      "La severidad de los defectos abiertos y su impacto real.",
      "El número total de casos planificados para este ciclo.",
      "La lista de herramientas que usó el equipo de pruebas.",
      "El nombre de los testers que ejecutaron cada caso.",
    ],
    correct: 0,
    explanation:
      "No basta el porcentaje de defectos: sin su severidad e impacto no se puede evaluar el riesgo de liberar el producto.",
    example:
      "El parte médico cuenta qué lesiones hay, no solo cuántos pacientes hay.",
    useCase:
      "Criterios de salida que combinan cobertura, severidad y riesgo de negocio.",
    mistake:
      "Decidir con métricas de volumen (cuántos) sin analizar el impacto (qué tan graves).",
    syllabusRef: "Gestión — Criterios de salida e informes de avance.",
  },
  {
    id: "gold-w6-q1",
    world: "w6",
    topic: "Herramientas — Automatización y mantenimiento",
    question:
      "El equipo automatiza pruebas de UI cuyo diseño cambia cada semana. ¿Qué criterio pesa MÁS al elegir la herramienta?",
    options: [
      "La facilidad de mantener los scripts ante cambios de interfaz.",
      "La popularidad de la herramienta en foros y comunidades.",
      "El precio más bajo posible entre las opciones del mercado.",
      "La cantidad de funciones que nadie del equipo va a usar.",
    ],
    correct: 0,
    explanation:
      "Con una UI cambiante, el costo dominante es el mantenimiento de los scripts: una herramienta que lo facilite ahorra tiempo y fragilidad.",
    example:
      "Elegir una llave ajustable en vez de una fija cuando la tuerca cambia de tamaño.",
    useCase:
      "Selección de frameworks de automatización con page objects y localizadores estables.",
    mistake:
      "Elegir por popularidad o precio sin evaluar el mantenimiento a mediano plazo.",
    syllabusRef: "Herramientas — Criterios de selección y mantenimiento.",
  },
];

/** Ficha del mundo dorado (fuera de la cadena de desbloqueo normal). */
export const goldChallenge = {
  id: "gold",
  type: "gold",
  title: "Reto Dorado",
  icon: "star",
  description: "10 preguntas: una nueva y el resto de lo que ya dominas.",
  levels: [
    {
      id: "gold-l1",
      number: 1,
      title: "Misión dorada",
      topic: "Reto Dorado — repaso de lo que ya dominas",
      timePerQuestion: 30,
      lives: 3,
      questions: [], // se arma en vivo con engine/gold.js
    },
  ],
};
