// =====================================================
// ISTQB Quest — data/worlds/world3.js
// Mundo 3: Testing Estático (CTFL v4.0, capítulo 3)
// Opciones equilibradas en longitud + multi-selección (Etapa 14, lote 4).
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
            "Ejecutar el software para provocar fallos y observar su comportamiento real.",
            "Examinar productos de trabajo sin ejecutarlos, mediante revisiones o análisis.",
            "Una técnica exclusiva para revisar el código fuente ya compilado.",
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
            "Solo el código fuente y los scripts de automatización.",
            "Solo los documentos de requisitos y las historias de usuario.",
            "Solo los casos de prueba y sus datos asociados.",
            "Cualquier producto de trabajo: código, requisitos, diseños o planes.",
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
            "Fallos de rendimiento del sistema cuando hay mucha carga.",
            "Ambigüedades en los requisitos y código muerto o inalcanzable.",
            "Errores de integración entre servicios durante la ejecución.",
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
            "Porque elimina la necesidad de ejecutar pruebas dinámicas.",
            "Porque los defectos se corrigen antes, cuando son más baratos.",
            "Porque lo realizan únicamente herramientas automáticas.",
            "Porque garantiza que el producto no tendrá ningún defecto.",
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
            "El estático examina sin ejecutar y el dinámico ejecuta; se complementan.",
            "El dinámico es superior porque encuentra siempre más defectos que el estático.",
            "El estático solo puede usarse después de terminar el dinámico.",
            "Ambos requieren que el código sea ejecutable y esté desplegado.",
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
            "Errores de sintaxis del lenguaje de programación usado.",
            "Ambigüedades, contradicciones y requisitos no verificables.",
            "Fallos de memoria y de recursos del servidor de aplicaciones.",
            "Problemas de compatibilidad con los navegadores de los usuarios.",
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
            "En cuanto existen borradores de productos de trabajo.",
            "Después de terminar las pruebas de sistema del producto.",
            "Únicamente durante la fase de mantenimiento del sistema.",
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
            "No puede examinar documentos ni código sin compilar.",
            "No evalúa el comportamiento real durante la ejecución del software.",
            "Solo lo pueden aplicar las herramientas comerciales de pago.",
            "Depende siempre de datos reales de producción para funcionar.",
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
            "Informal → walkthrough → revisión técnica → inspección.",
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
            "Un proceso documentado con actas y métricas de la revisión.",
            "Sin proceso formal ni documentación obligatoria de resultados.",
            "Requiere un moderador y revisores certificados en el estándar.",
            "Solo puede realizarla el propio autor del documento revisado.",
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
            "El autor presenta el producto y los revisores detectan anomalías.",
            "Es la revisión más formal, con criterios de entrada y de salida.",
            "La dirige siempre un moderador externo al equipo del autor.",
            "No admite preguntas ni comentarios de los revisores presentes.",
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
            "No dejar ningún registro de los hallazgos encontrados.",
            "Un peer review documentado con proceso y moderador definidos.",
            "Ser una sesión exclusiva del área de negocio, sin técnicos.",
            "Sustituir a la inspección en los productos más críticos.",
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
            "Sigue un proceso completo con roles, checklists y métricas.",
            "Es una charla informal que se hace sin ninguna preparación.",
            "La dirige el propio autor sin ayuda de ningún moderador.",
            "Prohíbe expresamente el uso de listas de comprobación.",
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
            "El autor del producto que se está revisando.",
            "El escriba, que registra los hallazgos.",
            "El moderador, que facilita la revisión.",
            "El gerente del proyecto, por su autoridad.",
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
            "La corrección de los defectos que se encontraron.",
            "El examen individual del producto por cada revisor.",
            "La publicación del informe final de la revisión.",
            "La reunión de apertura (kick-off) de la revisión.",
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
            "Objetivos claros y un producto de tamaño manejable para revisar.",
            "Revisar documentos de 300 páginas en una única sesión maratón.",
            "Usar la revisión para evaluar el desempeño del autor del documento.",
            "Invitar a cuantas más personas mejor, sin definir ningún rol.",
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
        {
          id: "w3-l2-q9",
          type: "multi",
          topic: "3.2",
          question: "Selecciona las DOS afirmaciones correctas sobre el proceso de revisión.",
          options: [
            "La inspección es el tipo de revisión más formal, con roles y métricas.",
            "El moderador planifica y dirige la revisión y hace su seguimiento.",
            "El walkthrough lo dirige siempre un moderador externo al autor.",
            "La revisión informal exige siempre actas y métricas obligatorias.",
            "En la inspección, el autor decide en solitario qué hallazgos corregir.",
          ],
          correct: [0, 1],
          explanation:
            "La inspección es la revisión más formal (proceso completo, roles y métricas) y el moderador es quien planifica, dirige y hace seguimiento. El walkthrough lo lidera el autor, la revisión informal no exige documentación y las correcciones se gestionan con seguimiento, no en solitario.",
          example:
            "El árbitro dirige el partido (moderador) y la final se juega con reglas completas (inspección).",
          useCase:
            "Para un requisito crítico se elige inspección con moderador y checklist.",
          mistake:
            "Dar por hecho que todas las revisiones funcionan igual: cada tipo tiene su formalidad.",
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
            "La ejecución automática de casos de prueba sobre el código.",
            "El examen automático del código sin ejecutarlo, buscando defectos.",
            "Una revisión manual de documentos guiada por checklists.",
            "Un tipo de prueba de rendimiento sobre la aplicación.",
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
            "Que la aplicación se ralentiza con diez mil usuarios conectados.",
            "Código muerto, variables sin definir y violaciones de estándares.",
            "Que un pago se procesa dos veces por una condición de carrera.",
            "Que la interfaz del producto confunde a los usuarios nuevos.",
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
            "Un defecto real que la herramienta no logra detectar.",
            "Una advertencia sobre algo que en realidad no es un defecto.",
            "Un error de compilación del propio lenguaje de programación.",
            "Un caso de prueba que pasa cuando debería fallar.",
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
            "Detecta problemas de inmediato, incluso antes de ejecutar el código.",
            "Sustituye por completo a las revisiones manuales de documentos.",
            "Garantiza que no habrá defectos en el entorno de producción.",
            "Solo aporta valor real en los sistemas pequeños y medianos.",
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
            "Únicamente en la fase final del proyecto, antes del despliegue.",
            "En la integración continua, ejecutándose con cada cambio.",
            "Solo durante las pruebas manuales de aceptación del cliente.",
            "Únicamente después de que ocurra un incidente en producción.",
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
        {
          id: "w3-l3-q7",
          type: "multi",
          topic: "3.3",
          question: "Selecciona las DOS opciones correctas sobre el análisis estático.",
          options: [
            "Puede integrarse en la integración continua y frenar un merge.",
            "Detecta código muerto, variables sin usar y vulnerabilidades.",
            "Sirve para medir el rendimiento real del sistema bajo carga.",
            "Sustituye a las revisiones y a las pruebas dinámicas del equipo.",
            "Garantiza que el software no tendrá defectos en producción.",
          ],
          correct: [0, 1],
          explanation:
            "El análisis estático se integra en CI/CD como quality gate y detecta defectos sin ejecutar: código muerto, variables sin usar, vulnerabilidades. No mide rendimiento real, no sustituye a otras actividades y no garantiza ausencia de defectos.",
          example:
            "El detector de metales de la entrada: automático (CI) y detecta objetos peligrosos (defectos).",
          useCase:
            "El pipeline frena el merge si el análisis encuentra una vulnerabilidad conocida.",
          mistake:
            "Esperar del análisis estático cosas que solo el testing dinámico puede dar.",
          syllabusRef: "Tema 3.3 — Análisis estático por herramientas",
        },
      ],
    },
  ],
};
