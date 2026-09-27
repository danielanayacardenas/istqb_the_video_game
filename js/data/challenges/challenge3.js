// =====================================================
// ISTQB Quest — data/challenges/challenge3.js
// Desafío 3: Gestión bajo presión (capítulos 5–6)
// =====================================================

export const challenge3 = {
  id: "c3",
  number: 9,
  challengeNumber: 3,
  type: "challenge",
  title: "Gestión bajo presión",
  emoji: "⚔️",
  description: "Escenarios de planificación, riesgos, defectos, monitoreo y herramientas.",
  levels: [
    {
      id: "c3-l1",
      number: 1,
      title: "Misión: decidir con el reloj en contra",
      topic: "Desafío 3 — Capítulos 5 y 6",
      difficulty: "difícil",
      timePerQuestion: 90,
      lives: 3,
      questions: [
        {
          id: "c3-l1-q1",
          topic: "Mix 5.1–5.2",
          question:
            "Queda una semana para el lanzamiento y no hay tiempo para probar todo. ¿Cuál es la estrategia más sensata?",
          options: [
            "Probar en el orden en que se escribieron los casos.",
            "Priorizar por riesgo (probabilidad × impacto): asegurar primero lo crítico y escalar las decisiones con los interesados.",
            "Probar solo las funcionalidades más fáciles.",
            "Cancelar las pruebas y lanzar cuanto antes.",
          ],
          correct: 1,
          explanation:
            "Con tiempo limitado, el enfoque basado en riesgos asigna el esfuerzo disponible a lo más crítico y documenta lo que queda sin cubrir, involucrando a los interesados en la decisión.",
          example:
            "Como en un triaje: primero lo grave, no lo que llegó antes a la sala.",
          useCase:
            "El equipo protege pago y autenticación; negocio acepta por escrito el riesgo de lo pospuesto.",
          mistake:
            "Priorizar por costumbre u orden de escritura en vez de por riesgo.",
          syllabusRef: "Desafío — Temas 5.1–5.2 (priorización y riesgos)",
        },
        {
          id: "c3-l1-q2",
          topic: "Mix 5.2",
          question:
            "¿Cuál de estos riesgos debería abordar primero un enfoque basado en riesgos de PRODUCTO?",
          options: [
            "La rotación de personal del equipo.",
            "El retraso en la entrega del entorno de pruebas.",
            "Que una vulnerabilidad permita acceder a los datos de pago de los clientes.",
            "El recorte del presupuesto del proyecto.",
          ],
          correct: 2,
          explanation:
            "La vulnerabilidad afecta directamente a la calidad y seguridad del producto (riesgo de producto) con impacto altísimo. Los demás son riesgos de proyecto: afectan a la capacidad de entregar.",
          example:
            "Producto: la caja fuerte queda abierta. Proyecto: la tienda abre tarde.",
          useCase:
            "El análisis de riesgos clasifica la vulnerabilidad como nivel crítico y dirige ahí las pruebas.",
          mistake:
            "Mezclar riesgos de proyecto con riesgos de producto y priorizar la agenda del equipo antes que la seguridad del sistema.",
          syllabusRef: "Desafío — Tema 5.2 (riesgos de producto)",
        },
        {
          id: "c3-l1-q3",
          topic: "Mix 5.1",
          question:
            "Está planificado comenzar hoy las pruebas de sistema, pero los datos de prueba no están cargados y el entorno no está estable. Según los criterios de entrada, ¿qué corresponde?",
          options: [
            "Comenzar igualmente y probar lo que se pueda.",
            "No cumplir los criterios de entrada: comunicarlo, ajustar el inicio y usar el tiempo en actividades que no dependan del entorno.",
            "Saltarse los criterios: total, son orientativos.",
            "Cancelar el proyecto.",
          ],
          correct: 1,
          explanation:
            "Si no se cumplen los criterios de entrada, la actividad será más costosa y arriesgada. Lo correcto es comunicar, replanificar y adelantar trabajo no dependiente (revisiones, diseño de casos).",
          example:
            "Como no empezar a pintar hasta tener las paredes secas y protegidas: si no, el trabajo se estropea.",
          useCase:
            "El equipo adelanta el diseño de casos mientras infraestructura estabiliza el entorno.",
          mistake:
            "Empezar de todos modos y descubrir tarde que los resultados no son fiables.",
          syllabusRef: "Desafío — Tema 5.1 (criterios de entrada)",
        },
        {
          id: "c3-l1-q4",
          topic: "Mix 5.3",
          question:
            "El informe diario muestra el doble de defectos críticos que lo previsto y un retraso creciente. ¿Cuál es la primera actuación correcta?",
          options: [
            "Ignorarlo hasta la semana siguiente.",
            "Analizar causas, comunicar a los interesados y repriorizar o replanificar el esfuerzo hacia lo crítico.",
            "Cerrar los defectos sin verificarlos para reducir el número.",
            "Duplicar la velocidad de ejecución de casos sin más.",
          ],
          correct: 1,
          explanation:
            "Ante una desviación grave, el control de pruebas actúa: entender la causa (¿área más defectuosa?, ¿build inestable?), informar y ajustar el plan de forma transparente.",
          example:
            "Como un entrenador que cambia la táctica al ver el marcador, no quien mira para otro lado.",
          useCase:
            "Se refuerza la revisión de correcciones, se posponen pruebas de bajo riesgo y se comunica el nuevo plan.",
          mistake:
            "Maquillar las métricas o no actuar; la desviación solo crece.",
          syllabusRef: "Desafío — Tema 5.3 (monitoreo y control)",
        },
        {
          id: "c3-l1-q5",
          topic: "Mix 5.1",
          question:
            "Debes estimar el esfuerzo de pruebas de un proyecto NUEVO, bastante distinto a los anteriores. ¿Qué enfoque es más razonable?",
          options: [
            "Usar solo métricas de proyectos anteriores, aunque el contexto no sea comparable.",
            "Usar solo intuición, sin datos ni supuestos.",
            "Combinar juicio de expertos (con descomposición del trabajo) y métricas cuando existan bases comparables, documentando los supuestos.",
            "Estimar por el número de requisitos, sin más.",
          ],
          correct: 2,
          explanation:
            "La estimación basada en expertos brilla cuando el contexto es nuevo: se descompone el trabajo y se documentan supuestos; las métricas históricas se usan solo cuando son comparables.",
          example:
            "Como calcular el tiempo de una mudanza a otra ciudad: descompones tareas y usas referencias parecidas si existen.",
          useCase:
            "El equipo estima por tareas con Planning Poker y anota los supuestos para revisarlos.",
          mistake:
            "Extrapolar datos de un dominio distinto como si fueran aplicables.",
          syllabusRef: "Desafío — Tema 5.1 (técnicas de estimación)",
        },
        {
          id: "c3-l1-q6",
          topic: "Mix 5.1.6",
          question:
            "El equipo tiene 300 pruebas de interfaz lentas y frágiles, y solo 20 unitarias. ¿Qué sugiere la pirámide de pruebas?",
          options: [
            "Mantener el reparto: lo importante es la cobertura total.",
            "Reequilibrar: aumentar las pruebas de bajo nivel (componente e integración) y reducir las de interfaz a lo imprescindible.",
            "Eliminar todas las pruebas unitarias.",
            "Automatizar todavía más pruebas de interfaz.",
          ],
          correct: 1,
          explanation:
            "La pirámide propone más pruebas de bajo nivel (rápidas, estables) y menos de alto nivel (lentas, frágiles). El reparto actual es la pirámide invertida: cara y frágil.",
          example:
            "Como una dieta equilibrada: mucha base saludable y poca guarnición.",
          useCase:
            "El equipo migra casos de interfaz a pruebas de API y unitarias donde es posible.",
          mistake:
            "Creer que más pruebas de interfaz equivalen a más calidad; a menudo aportan lentitud y fragilidad.",
          syllabusRef: "Desafío — Tema 5.1.6 (pirámide de pruebas)",
        },
        {
          id: "c3-l1-q7",
          topic: "Mix 5.5",
          question:
            "Desarrollo devuelve un defecto con la nota «no se puede reproducir». ¿Qué falta probablemente en el informe?",
          options: [
            "Más opiniones sobre la calidad del módulo.",
            "Pasos claros, datos concretos, entorno y versión, y resultado esperado frente al observado.",
            "El presupuesto del proyecto.",
            "Nada: los desarrolladores deberían adivinar cómo se reproduce.",
          ],
          correct: 1,
          explanation:
            "Un informe útil permite reproducir el fallo: pasos exactos, datos usados, entorno/versión y diferencia entre esperado y observado. Sin eso, el «no reproducable» es casi inevitable.",
          example:
            "Como una receta sin cantidades ni temperatura: imposible repetir el plato.",
          useCase:
            "El tester completa el informe con la build, el navegador y los datos exactos y el defecto se reproduce.",
          mistake:
            "Reportar «no funciona» y culpar a desarrollo de no reproducirlo.",
          syllabusRef: "Desafío — Tema 5.5 (informes de defectos)",
        },
        {
          id: "c3-l1-q8",
          topic: "Mix 5.5",
          question:
            "Un error tipográfico aparece en la portada de la web de ventas durante la campaña principal. La severidad es baja. ¿Y la prioridad?",
          options: [
            "Baja, porque la severidad manda siempre.",
            "Puede ser ALTA: el impacto de negocio (imagen en plena campaña) lo justifica, aunque la severidad sea baja.",
            "Media siempre, por norma.",
            "No existe prioridad para defectos cosméticos.",
          ],
          correct: 1,
          explanation:
            "Severidad (impacto técnico) y prioridad (urgencia de negocio) son independientes. Un fallo cosmético muy visible puede requerir corrección inmediata.",
          example:
            "Como una mancha en el escaparate: no rompe nada, pero urge limpiarla en plena rebajas.",
          useCase:
            "Negocio eleva la prioridad y el texto se corrige antes del pico de ventas.",
          mistake:
            "Deducir la prioridad automáticamente de la severidad.",
          syllabusRef: "Desafío — Tema 5.5 (severidad y prioridad)",
        },
        {
          id: "c3-l1-q9",
          topic: "Mix 6.2",
          question:
            "El equipo quiere automatizar la regresión nocturna pero no reserva tiempo para mantener los scripts. ¿Qué riesgo se está asumiendo?",
          options: [
            "Ninguno: los scripts se mantienen solos.",
            "Subestimar el mantenimiento continuo, el riesgo clásico de la automatización.",
            "Que las pruebas se ejecuten demasiado rápido.",
            "Que la regresión cubra demasiado.",
          ],
          correct: 1,
          explanation:
            "El mantenimiento de los casos automatizados (actualizarlos ante cada cambio) es un coste recurrente que suele subestimarse; sin él, la suite se degrada y pierde credibilidad.",
          example:
            "Como tener un huerto: plantar es lo fácil; mantenerlo es el trabajo continuo.",
          useCase:
            "El equipo reserva tiempo de cada sprint para revisar y actualizar la suite nocturna.",
          mistake:
            "Planificar solo la creación inicial y dejar el mantenimiento a la improvisación.",
          syllabusRef: "Desafío — Tema 6.2 (riesgos de la automatización)",
        },
        {
          id: "c3-l1-q10",
          topic: "Mix 6.1–6.2",
          question: "¿Cuál afirmación sobre herramientas y automatización es CORRECTA?",
          options: [
            "Comprar una herramienta garantiza mejorar la calidad.",
            "Una herramienta no garantiza el éxito: requiere formación, adaptación de procesos y mantenimiento.",
            "La automatización elimina la necesidad de pruebas manuales.",
            "Las herramientas sustituyen el juicio humano.",
          ],
          correct: 1,
          explanation:
            "Adquirir una herramienta no basta: hacen falta formación, ajustes de proceso y mantenimiento continuo. La automatización complementa, no sustituye, el juicio humano ni las pruebas exploratorias.",
          example:
            "Como comprar instrumentos: sin práctica, métodos y mantenimiento no hay música.",
          useCase:
            "Antes de extender la herramienta, el equipo planifica formación y responsable de mantenimiento.",
          mistake:
            "Esperar que la herramienta resuelva por sí sola los problemas de calidad.",
          syllabusRef: "Desafío — Temas 6.1–6.2 (herramientas)",
        },
      ],
    },
  ],
};
