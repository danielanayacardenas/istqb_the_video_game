// =====================================================
// ISTQB Quest — data/worlds/world3.js
// Mundo 3: Testing Estático (CTFL v4.0, capítulo 3)
// =====================================================

export const world3 = {
  id: "w3",
  number: 3,
  title: "Testing Estático",
  emoji: "🔍",
  description:
    "Fundamentos del testing estático, proceso de revisión y análisis estático con herramientas.",
  levels: [
    {
      id: "w3-l1",
      number: 1,
      title: "Fundamentos del testing estático",
      topic: "Tema 3.1 — Fundamentos del testing estático",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w3-l1-q1",
          topic: "3.1",
          question: "¿Qué es el testing estático?",
          options: [
            "Ejecutar el software para provocar fallos y observar el comportamiento.",
            "Examinar productos de trabajo sin ejecutarlos, mediante revisiones y/o análisis estático con herramientas.",
            "Una técnica exclusiva para revisar código compilado.",
            "La última fase del proyecto, posterior a las pruebas de aceptación.",
          ],
          correct: 1,
          explanation:
            "El testing estático examina productos de trabajo sin ejecutarlos: incluye revisiones (manuales) y análisis estático (con herramientas). No requiere código ejecutable para aportar valor.",
          example:
            "Como corregir el plano de una casa antes de construirla, en lugar de probar la casa ya construida.",
          useCase:
            "Tres personas revisan una especificación de requisitos antes de que exista una sola línea de código.",
          mistake:
            "Creer que testing es sinónimo de ejecutar software; el estático no ejecuta nada y aun así encuentra defectos.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q2",
          topic: "3.1",
          question: "¿Cuál de los siguientes productos de trabajo PUEDE examinarse con testing estático?",
          options: [
            "Solo el código fuente.",
            "Solo los documentos de requisitos.",
            "Solo los casos de prueba.",
            "Todos los anteriores, y también diseños, planes, historias de usuario, contratos y modelos.",
          ],
          correct: 3,
          explanation:
            "Casi cualquier producto de trabajo puede revisarse: código, requisitos, diseños, planes, casos de prueba, elementos del backlog, historias de usuario, contratos, modelos y prototipos.",
          example:
            "Como revisar no solo el plato final, sino también la receta, los planos de la cocina y la lista de ingredientes.",
          useCase:
            "El equipo revisa historias de usuario y wireframes antes de empezar a programar.",
          mistake:
            "Limitar el testing estático al código; los documentos también contienen defectos costosos.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q3",
          topic: "3.1",
          question:
            "¿Qué tipo de defectos encuentra el testing estático que el dinámico difícilmente detecta?",
          options: [
            "Fallos de rendimiento bajo carga alta.",
            "Ambigüedades, omisiones e inconsistencias en los requisitos, y código muerto o inalcanzable.",
            "Errores de integración entre servicios en tiempo de ejecución.",
            "Problemas de usabilidad detectados por usuarios reales.",
          ],
          correct: 1,
          explanation:
            "El testing estático detecta directamente defectos en los productos: requisitos ambiguos, contradictorios u omitidos, código inalcanzable, violaciones de estándares. Algunos de estos defectos puede que nunca se manifiesten al ejecutar el software.",
          example:
            "Un requisito que dice «el sistema debe ser rápido» no provoca un fallo evidente al ejecutar, pero es un defecto de especificación.",
          useCase:
            "En la revisión se descubre que dos requisitos se contradicen, antes de programar.",
          mistake:
            "Creer que todo defecto acaba manifestándose en ejecución; los defectos de documentación o el código muerto casi nunca lo hacen.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q4",
          topic: "3.1",
          question: "¿Por qué se considera rentable el testing estático?",
          options: [
            "Porque elimina la necesidad de las pruebas dinámicas.",
            "Porque los defectos se detectan antes, cuando corregirlos es más barato, y puede aplicarse a productos que aún no pueden ejecutarse.",
            "Porque solo lo realizan herramientas automáticas.",
            "Porque garantiza que el producto no tendrá defectos.",
          ],
          correct: 1,
          explanation:
            "Detectar y corregir defectos temprano reduce costes. Además, el testing estático aplica a productos que no pueden ejecutarse (requisitos, diseños) y complementa al testing dinámico.",
          example:
            "Corregir la receta antes de cocinar es más barato que tirar el guiso y empezar de nuevo.",
          useCase:
            "Detectar una omisión en los requisitos durante la revisión evita retrabajo de desarrollo y pruebas.",
          mistake:
            "Pensar que el estático reemplaza al dinámico; son complementarios.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q5",
          topic: "3.1",
          question:
            "¿Cuál afirmación sobre el testing estático y el testing dinámico es CORRECTA?",
          options: [
            "El estático examina sin ejecutar y el dinámico ejecuta el software; se complementan y juntos cubren más tipos de defectos.",
            "El dinámico es superior porque siempre encuentra más defectos que el estático.",
            "El estático solo puede usarse después del dinámico.",
            "Ambos requieren que el código sea ejecutable.",
          ],
          correct: 0,
          explanation:
            "Son actividades complementarias: el estático examina productos de trabajo sin ejecutarlos; el dinámico ejecuta el software y observa fallos. Cada uno encuentra defectos que el otro puede pasar por alto.",
          example:
            "Revisar los planos (estático) y además probar la casa construida (dinámico).",
          useCase:
            "Un equipo revisa los requisitos y luego ejecuta pruebas sobre el software construido.",
          mistake:
            "Creer que uno sustituye al otro; se refuerzan mutuamente.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q6",
          topic: "3.1",
          question:
            "¿Qué tipo de defectos busca principalmente una revisión de documentos de requisitos?",
          options: [
            "Errores de sintaxis del lenguaje de programación.",
            "Ambigüedades, contradicciones, omisiones y requisitos no verificables.",
            "Fallos de memoria del servidor.",
            "Problemas de compatibilidad con navegadores.",
          ],
          correct: 1,
          explanation:
            "Los defectos típicos de los requisitos son ambigüedades, contradicciones, omisiones, requisitos no verificables o innecesarios. Todos ellos se detectan sin ejecutar nada.",
          example:
            "«El sistema debe ser intuitivo» no es verificable: la revisión lo señala y pide un criterio medible.",
          useCase:
            "Negocio, desarrollo y testing revisan un borrador de requisitos y acuerdan criterios de aceptación medibles.",
          mistake:
            "Buscar en la revisión defectos de código; cada producto de trabajo tiene sus defectos típicos.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q7",
          topic: "3.1",
          question: "¿Cuándo puede comenzar el testing estático?",
          options: [
            "Solo cuando el código está compilado y es ejecutable.",
            "En cuanto existen borradores de los productos de trabajo, incluso antes de escribir código.",
            "Después de las pruebas de sistema.",
            "Únicamente en la fase de mantenimiento.",
          ],
          correct: 1,
          explanation:
            "El testing estático no necesita ejecución: puede empezar en cuanto hay borradores (requisitos, diseños, prototipos, código sin compilar). Es la forma más temprana de testing.",
          example:
            "Como revisar el borrador de un contrato antes de firmarlo.",
          useCase:
            "Los testers participan en la revisión del backlog antes del primer sprint.",
          mistake:
            "Esperar a que exista código para empezar a probar; el estático arranca antes que cualquier otra actividad de prueba.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
        {
          id: "w3-l1-q8",
          topic: "3.1",
          question: "¿Cuál es una limitación del testing estático?",
          options: [
            "No puede examinar documentos.",
            "No evalúa el comportamiento real en ejecución (por ejemplo, rendimiento o interacciones en tiempo de ejecución); para eso se necesita el testing dinámico.",
            "Solo lo pueden aplicar herramientas de pago.",
            "Depende siempre de datos de producción.",
          ],
          correct: 1,
          explanation:
            "El estático examina productos de trabajo, pero no observa el comportamiento del software en ejecución: rendimiento real, concurrencia, integraciones en tiempo de ejecución. Para eso está el testing dinámico.",
          example:
            "Revisar el guion de una obra no dice cómo reaccionará el público en el estreno.",
          useCase:
            "Aunque la revisión del diseño no muestre problemas, se prueba la aplicación bajo carga real.",
          mistake:
            "Sobreestimar el estático: no todos los defectos se revelan sin ejecutar.",
          syllabusRef: "Tema 3.1 — Fundamentos del testing estático",
        },
      ],
    },
    {
      id: "w3-l2",
      number: 2,
      title: "Proceso de revisión",
      topic: "Tema 3.2 — Proceso de revisión",
      difficulty: "difícil",
      timePerQuestion: 75,
      lives: 3,
      questions: [
        {
          id: "w3-l2-q1",
          topic: "3.2",
          question:
            "¿Cuál es el orden correcto de los tipos de revisión, de MENOR a MAYOR formalidad?",
          options: [
            "Inspección → revisión técnica → walkthrough → informal.",
            "Informal → walkthrough (recorrido) → revisión técnica → inspección.",
            "Walkthrough → informal → inspección → revisión técnica.",
            "Revisión técnica → inspección → informal → walkthrough.",
          ],
          correct: 1,
          explanation:
            "La informal es la menos formal; el walkthrough es guiado por el autor; la revisión técnica es un peer review documentado dirigido por un moderador; la inspección es la más formal, con roles definidos, criterios de entrada/salida y métricas.",
          example:
            "Como pasar de una charla de pasillo a una auditoría con actas y checklists.",
          useCase:
            "Elegir inspección para un producto crítico de seguridad y un walkthrough para alinear a nuevos miembros.",
          mistake:
            "Considerar walkthrough e inspección equivalentes; difieren en formalidad, liderazgo y objetivo.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q2",
          topic: "3.2",
          question: "¿Qué caracteriza a la revisión informal?",
          options: [
            "Un proceso documentado con actas y métricas.",
            "No sigue un proceso formal y sus resultados no se documentan por obligación; busca detectar anomalías de forma económica.",
            "Requiere un moderador y revisores certificados.",
            "Solo puede realizarla el autor del documento.",
          ],
          correct: 1,
          explanation:
            "La revisión informal no tiene proceso definido ni documentación obligatoria; es económica y sirve para detectar anomalías rápidamente.",
          example:
            "Pedir a un compañero que lea tu carta antes de enviarla.",
          useCase:
            "Dos desarrolladores revisan juntos un fragmento de código de forma espontánea.",
          mistake:
            "Subestimar la revisión informal; es la más usada y aporta valor inmediato.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q3",
          topic: "3.2",
          question: "¿Qué distingue al walkthrough (recorrido)?",
          options: [
            "El autor presenta y guía el producto de trabajo a los revisores, que aprenden de él mientras detectan anomalías.",
            "Es la revisión más formal, con criterios de entrada y salida.",
            "La dirige siempre un moderador externo.",
            "No admite preguntas ni comentarios de los revisores.",
          ],
          correct: 0,
          explanation:
            "En el walkthrough el autor lidera la sesión y explica el producto paso a paso; los revisores hacen preguntas y pueden encontrar defectos. También sirve para formación u orientación.",
          example:
            "Como cuando un guía presenta una exposición y el público pregunta.",
          useCase:
            "El autor explica la arquitectura del módulo a testers nuevos, que detectan supuestos ocultos.",
          mistake:
            "Confundirlo con la inspección; el walkthrough lo lidera el autor y es menos formal.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q4",
          topic: "3.2",
          question: "¿Qué caracteriza a la revisión técnica?",
          options: [
            "No dejar registro de los hallazgos.",
            "Un peer review documentado, con proceso definido, dirigido por un moderador y realizado por revisores técnicamente cualificados.",
            "Ser una sesión exclusiva de negocio, sin perfiles técnicos.",
            "Sustituir a la inspección en los productos críticos.",
          ],
          correct: 1,
          explanation:
            "La revisión técnica es un peer review formalizado y documentado; combina la detección de defectos con la toma de decisiones técnicas sobre el producto.",
          example:
            "Como una junta médica que analiza un caso con método y conclusiones.",
          useCase:
            "Revisar un diseño de arquitectura con el equipo técnico antes de aprobarlo.",
          mistake:
            "Pensar que la revisión técnica solo evalúa el estilo; también valora decisiones técnicas.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q5",
          topic: "3.2",
          question:
            "¿Qué característica define a la inspección (la revisión más formal)?",
          options: [
            "Sigue un proceso completo y bien definido, con roles, criterios de entrada/salida, checklists y métricas; busca maximizar la detección de defectos.",
            "Es una charla informal sin preparación.",
            "La dirige el autor sin ayuda.",
            "Prohíbe el uso de listas de comprobación.",
          ],
          correct: 0,
          explanation:
            "La inspección aplica el proceso completo: planificación, inicio, preparación individual, reunión, corrección y seguimiento, con roles definidos y métricas. Se reserva para productos críticos.",
          example:
            "Como una auditoría formal con actas, checklist y responsables.",
          useCase:
            "Inspección formal de los requisitos de seguridad de un sistema bancario.",
          mistake:
            "Creer que la inspección es solo «una reunión más larga»; su rigor está en el proceso completo.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q6",
          topic: "3.2",
          question:
            "En una revisión, ¿qué rol planifica y dirige las actividades y garantiza que la reunión sea efectiva?",
          options: [
            "El autor.",
            "El escriba (scribe).",
            "El moderador (facilitador).",
            "El gerente del proyecto.",
          ],
          correct: 2,
          explanation:
            "El moderador coordina la revisión: planifica, dirige la reunión, facilita la discusión y hace seguimiento. El escriba registra los hallazgos; el autor corrige; los revisores examinan.",
          example:
            "Como el árbitro que ordena el juego sin jugar.",
          useCase:
            "El moderador reparte las tareas de preparación y controla el tiempo de la sesión.",
          mistake:
            "Atribuir la dirección al autor o al jefe; el moderador es un rol específico de la revisión.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q7",
          topic: "3.2",
          question:
            "En una revisión formal, ¿qué actividad corresponde a la preparación previa a la reunión de revisión?",
          options: [
            "La corrección de los defectos encontrados.",
            "El examen individual del producto de trabajo por cada revisor, aplicando checklists si procede.",
            "La publicación del informe final.",
            "La reunión de apertura (kick-off).",
          ],
          correct: 1,
          explanation:
            "Las actividades típicas son: planificación, inicio (kick-off), preparación individual, reunión de revisión (comunicación de hallazgos), corrección y seguimiento. Cada revisor estudia el producto antes de la reunión.",
          example:
            "Como estudiar el caso antes de la reunión de equipo, en lugar de improvisar en ella.",
          useCase:
            "Los revisores marcan hallazgos con antelación; la reunión solo discute lo relevante.",
          mistake:
            "Usar la reunión para leer el documento por primera vez; la preparación individual es clave.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
        {
          id: "w3-l2-q8",
          topic: "3.2",
          question: "¿Cuál de los siguientes factores favorece el éxito de una revisión?",
          options: [
            "Incluir los objetivos de la revisión en la convocatoria y limitar el producto a revisar a un tamaño manejable.",
            "Revisar documentos de 300 páginas en una sola sesión.",
            "Usar la revisión para evaluar el desempeño del autor.",
            "Invitar a cuantas más personas mejor, sin roles definidos.",
          ],
          correct: 0,
          explanation:
            "Factores de éxito: objetivos claros, producto de tamaño adecuado, participantes correctos con tiempo suficiente, preparación previa y un ambiente de confianza; nunca usar la revisión para evaluar personas.",
          example:
            "Como una reunión de trabajo con agenda y un número razonable de temas.",
          useCase:
            "Dividir un documento grande en secciones asignadas a distintos revisores.",
          mistake:
            "Convertir la revisión en un juicio al autor; el miedo produce revisiones superficiales.",
          syllabusRef: "Tema 3.2 — Proceso de revisión",
        },
      ],
    },
    {
      id: "w3-l3",
      number: 3,
      title: "Análisis estático con herramientas",
      topic: "Tema 3.3 — Análisis estático por herramientas",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w3-l3-q1",
          topic: "3.3",
          question: "¿Qué es el análisis estático realizado por herramientas?",
          options: [
            "La ejecución automática de casos de prueba.",
            "El examen automático de productos de trabajo (normalmente código) sin ejecutarlos, para detectar violaciones de estándares, defectos y vulnerabilidades.",
            "Una revisión manual guiada por checklists.",
            "Un tipo de prueba de rendimiento.",
          ],
          correct: 1,
          explanation:
            "Las herramientas de análisis estático examinan el código (u otros productos) sin ejecutarlo: estilo, convenciones, variables no usadas o indefinidas, código muerto, posibles vulnerabilidades, complejidad.",
          example:
            "Como el corrector ortográfico del código: revisa mientras escribes, sin ejecutarlo.",
          useCase:
            "Un analizador marca cada pull request con las violaciones del estándar del equipo.",
          mistake:
            "Confundirlo con las pruebas automatizadas; estas ejecutan el software, el análisis estático no.",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
        {
          id: "w3-l3-q2",
          topic: "3.3",
          question:
            "¿Cuál de los siguientes defectos es típicamente detectable mediante análisis estático del código?",
          options: [
            "Que la aplicación se ralentiza con 10.000 usuarios.",
            "Código inalcanzable (muerto), variables sin definir y violaciones de estándares de código.",
            "Que un pago se procesa dos veces por una condición de carrera.",
            "Que la interfaz confunde a los usuarios.",
          ],
          correct: 1,
          explanation:
            "El análisis estático detecta problemas visibles sin ejecutar: código muerto o inalcanzable, variables no definidas, uso indebido de APIs, complejidad excesiva, riesgos de seguridad. Los problemas de concurrencia o rendimiento reales requieren ejecución.",
          example:
            "Como un detector de humo: avisa antes del incendio, pero no apaga fuegos reales.",
          useCase:
            "El pipeline bloquea el merge si hay variables sin usar o complejidad demasiado alta.",
          mistake:
            "Esperar que el análisis estático detecte defectos dinámicos; son tipos distintos de defectos.",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
        {
          id: "w3-l3-q3",
          topic: "3.3",
          question: "¿Qué es un falso positivo en el análisis estático?",
          options: [
            "Un defecto real que la herramienta no detecta.",
            "Una advertencia de la herramienta sobre algo que en realidad no es un defecto.",
            "Un error del compilador.",
            "Un test que pasa cuando debería fallar.",
          ],
          correct: 1,
          explanation:
            "El falso positivo es una falsa alarma: la herramienta informa de un posible defecto que, tras revisarlo, no lo es. Demasiados falsos positivos restan credibilidad a la herramienta.",
          example:
            "Alarmas de coche que suenan sin que nadie esté robando.",
          useCase:
            "El equipo revisa y descarta veinte avisos irrelevantes antes de encontrar uno real.",
          mistake:
            "Tratar todo aviso como defecto real cuando aún hay que analizarlo.",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
        {
          id: "w3-l3-q4",
          topic: "3.3",
          question: "¿Qué es un falso negativo en el análisis estático?",
          options: [
            "Una advertencia sobre algo que no es un defecto.",
            "Un defecto real que la herramienta no detecta.",
            "Una violación de estilo detectada correctamente.",
            "Un error humano al configurar el servidor.",
          ],
          correct: 1,
          explanation:
            "El falso negativo es un defecto que existe pero la herramienta no detecta; da una falsa sensación de seguridad y refuerza la necesidad de complementar con revisiones y pruebas.",
          example:
            "El vigilante que no vio pasar al intruso.",
          useCase:
            "Tras un incidente de seguridad se descubre que el analizador no contemplaba ese patrón de vulnerabilidad.",
          mistake:
            "Confundir falso positivo (falsa alarma) con falso negativo (defecto no detectado).",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
        {
          id: "w3-l3-q5",
          topic: "3.3",
          question: "¿Cuál es un beneficio clave del análisis estático en el desarrollo?",
          options: [
            "Permite detectar y corregir problemas de inmediato, incluso antes de ejecutar el código, y se integra bien en la integración continua.",
            "Sustituye a las revisiones de documentos.",
            "Garantiza cero defectos en producción.",
            "Solo aporta valor en sistemas pequeños.",
          ],
          correct: 0,
          explanation:
            "El análisis estático da feedback inmediato al desarrollador y puede ejecutarse automáticamente en cada commit (CI), actuando como control de calidad del código. No sustituye a las revisiones ni a las pruebas.",
          example:
            "Como la corrección automática al escribir: te avisa mientras redactas.",
          useCase:
            "El análisis se ejecuta en cada push y bloquea el merge si detecta problemas.",
          mistake:
            "Pensar que es solo para proyectos grandes o que reemplaza a otras actividades.",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
        {
          id: "w3-l3-q6",
          topic: "3.3",
          question: "¿Dónde se suele integrar el análisis estático en un flujo DevOps?",
          options: [
            "Únicamente en la fase final, antes del despliegue.",
            "En la integración continua (CI), ejecutándose automáticamente con cada cambio como control de calidad del código.",
            "Solo en las pruebas manuales de aceptación.",
            "Únicamente cuando hay un incidente en producción.",
          ],
          correct: 1,
          explanation:
            "En los pipelines CI/CD el análisis estático se ejecuta automáticamente con cada cambio, dando feedback temprano y actuando como control de calidad (quality gate) del código.",
          example:
            "Como el detector de metales a la entrada: automático y en cada acceso.",
          useCase:
            "El pipeline rechaza automáticamente un commit con vulnerabilidades conocidas.",
          mistake:
            "Dejarlo para el final; su valor está en ejecutarse continuamente.",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
      ],
    },
  ],
};
