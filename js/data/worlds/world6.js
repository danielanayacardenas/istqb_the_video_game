// =====================================================
// ISTQB Quest — data/worlds/world6.js
// Mundo 6: Soporte de Herramientas (CTFL v4.0, capítulo 6)
// Opciones equilibradas en longitud + multi-selección (Etapa 14, lote 7).
// =====================================================

export const world6 = {
  id: "w6",
  number: 6,
  title: "Soporte de Herramientas",
  icon: "wrench",
  description:
    "Tipos de herramientas de prueba, beneficios y riesgos de la automatización, e introducción en la organización.",
  levels: [
    {
      id: "w6-l1",
      number: 1,
      title: "Tipos de herramientas de prueba",
      topic: "Tema 6.1 — Soporte de herramientas para el testing",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w6-l1-q1",
          topic: "6.1",
          question:
            "¿Qué categoría de herramienta apoya la planificación, el seguimiento, los informes y la gestión de defectos?",
          options: [
            "Las herramientas de gestión de pruebas.",
            "Las herramientas de análisis estático.",
            "Las herramientas de diseño e implementación de pruebas.",
            "Las herramientas de colaboración.",
          ],
          correct: 0,
          explanation:
            "Las herramientas de gestión de pruebas apoyan la organización del testing: planificación, seguimiento del avance, informes, gestión de casos y de defectos, y a menudo la trazabilidad con los requisitos.",
          example:
            "Como el panel de control de un proyecto: calendario, tareas, incidencias y avance en un solo lugar.",
          useCase:
            "El equipo registra casos, ejecuciones y defectos en la herramienta y genera informes automáticos.",
          mistake:
            "Confundirlas con las de ejecución; gestionan el proceso, no ejecutan pruebas sobre el software.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q2",
          topic: "6.1",
          question:
            "Un analizador que detecta violaciones de estándares de código y código muerto pertenece a las herramientas de…",
          options: [
            "Testing estático.",
            "Ejecución y cobertura.",
            "Pruebas no funcionales.",
            "Gestión de defectos.",
          ],
          correct: 0,
          explanation:
            "Las herramientas de testing estático examinan productos de trabajo sin ejecutarlos: analizadores de código (estilo, complejidad, código muerto, vulnerabilidades) y herramientas de soporte a revisiones.",
          example:
            "Como el corrector ortográfico que revisa el texto antes de publicarlo.",
          useCase:
            "El pipeline ejecuta el analizador estático en cada commit y bloquea los merges con violaciones.",
          mistake:
            "Asociar «static» a pruebas sin herramientas; el análisis estático es justamente una familia de herramientas.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q3",
          topic: "6.1",
          question: "¿Qué hacen las herramientas de diseño e implementación de pruebas?",
          options: [
            "Generar casos y datos de prueba, y apoyar el modelado del sistema.",
            "Ejecutar las pruebas sobre el software ya compilado.",
            "Medir la cobertura de ramas durante la ejecución.",
            "Gestionar las incidencias reportadas por el usuario final.",
          ],
          correct: 0,
          explanation:
            "Este tipo de herramientas apoya el diseño e implementación del testware: generación de casos, generación de datos de prueba, herramientas de modelado y de palabras clave.",
          example:
            "Como una plantilla inteligente que te ayuda a redactar los casos y preparar los datos.",
          useCase:
            "La herramienta genera combinaciones de datos para las pruebas de partición y valores límite.",
          mistake:
            "Pensar que generan y ejecutan a la vez; la ejecución corresponde a otra categoría.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q4",
          topic: "6.1",
          question: "Las herramientas de ejecución y cobertura permiten…",
          options: [
            "Ejecutar pruebas y medir la cobertura alcanzada.",
            "Generar las condiciones de prueba desde los requisitos.",
            "Gestionar el presupuesto y las compras del proyecto.",
            "Revisar la ortografía de los documentos del equipo.",
          ],
          correct: 0,
          explanation:
            "Los frameworks y runners de pruebas ejecutan los casos automatizados, y las herramientas de cobertura miden qué parte de la estructura del código fue ejercitada durante esa ejecución.",
          example:
            "Como el cronómetro y el cuentakilómetros de un corredor: ejecuta y mide a la vez.",
          useCase:
            "Tras la suite nocturna, el informe muestra la cobertura de ramas por módulo.",
          mistake:
            "Olvidar que la cobertura solo se mide durante una ejecución; sin ejecutar no hay cobertura.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q5",
          topic: "6.1",
          question:
            "¿Qué tipo de pruebas apoyan las herramientas no funcionales? Por ejemplo, las de rendimiento o seguridad.",
          options: [
            "Carga y estrés, vulnerabilidades, accesibilidad y usabilidad.",
            "Únicamente pruebas de regresión funcional del sistema.",
            "Pruebas de partición de equivalencia y valores límite.",
            "Revisiones informales de documentos entre compañeros.",
          ],
          correct: 0,
          explanation:
            "Las herramientas no funcionales apoyan la evaluación de características de calidad: rendimiento (carga, estrés), seguridad (análisis de vulnerabilidades), accesibilidad, usabilidad, entre otras.",
          example:
            "Como el banco de pruebas de un gimnasio: mide fuerza, resistencia y velocidad del sistema.",
          useCase:
            "La herramienta simula 5.000 usuarios concurrentes para medir tiempos de respuesta.",
          mistake:
            "Creer que solo existen herramientas para pruebas funcionales; las no funcionales tienen su propia familia.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q6",
          topic: "6.1",
          question: "¿Para qué sirven las herramientas de colaboración en el contexto del testing?",
          options: [
            "Para facilitar la comunicación y compartir información.",
            "Para ejecutar pruebas de rendimiento del sistema.",
            "Para compilar automáticamente el código fuente.",
            "Para calcular la cobertura de decisiones del código.",
          ],
          correct: 0,
          explanation:
            "Las herramientas de colaboración ayudan a que los equipos (incluidos los testers) compartan información, acuerden criterios y mantengan visibilidad del trabajo; son transversales a todas las actividades.",
          example:
            "Como la pizarra común de una cocina: todos ven la receta, los cambios y quién hace qué.",
          useCase:
            "El equipo mantiene los criterios de aceptación y los hallazgos de pruebas en la wiki compartida.",
          mistake:
            "Verlas como accesorios; la comunicación deficiente es causa frecuente de fallos de calidad.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q7",
          topic: "6.1",
          question:
            "En un pipeline de integración continua (CI), ¿qué permiten las herramientas de automatización?",
          options: [
            "Construir y probar con cada cambio, con feedback rápido.",
            "Eliminar la necesidad de definir criterios de entrada.",
            "Sustituir por completo a las pruebas exploratorias.",
            "Prescindir de los entornos de prueba del equipo.",
          ],
          correct: 0,
          explanation:
            "La integración continua combina herramientas que construyen y ejecutan pruebas automáticamente ante cada cambio; el resultado es feedback rápido que permite detectar problemas de integración de inmediato.",
          example:
            "Como la cinta transportadora con control de calidad en cada estación, no solo al final.",
          useCase:
            "Cada push dispara la suite automática; si algo falla, el equipo lo sabe en minutos.",
          mistake:
            "Pensar que CI/CD elimina actividades de prueba; las automatiza y acelera, pero no las suprime.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
        {
          id: "w6-l1-q8",
          topic: "6.1",
          question: "Las herramientas de soporte a las revisiones ayudan a…",
          options: [
            "Gestionar el proceso: repartir y seguir los hallazgos.",
            "Ejecutar el software que se está revisando.",
            "Medir el rendimiento del sistema revisado.",
            "Generar datos de prueba aleatorios para el equipo.",
          ],
          correct: 0,
          explanation:
            "Estas herramientas apoyan el flujo de una revisión: convocatoria, reparto del material, registro de comentarios y seguimiento de acciones, haciendo el proceso más eficiente y trazable.",
          example:
            "Como el sistema de comentarios de un documento compartido: cada observación queda registrada y asignada.",
          useCase:
            "La revisión de los requisitos queda documentada con comentarios y responsables por punto.",
          mistake:
            "Creer que la herramienta revisa por ti; facilita el proceso, pero los hallazgos los aportan las personas.",
          syllabusRef: "Tema 6.1 — Tipos de herramientas",
        },
      ],
    },
    {
      id: "w6-l2",
      number: 2,
      title: "Beneficios y riesgos de la automatización",
      topic: "Tema 6.2 — Beneficios y riesgos de la automatización de pruebas",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w6-l2-q1",
          topic: "6.2",
          question: "¿Cuál es un beneficio clave de la automatización de pruebas?",
          options: [
            "Repetir pruebas sin fatiga y con mayor velocidad.",
            "Garantizar que no quedan defectos en el software.",
            "Eliminar la necesidad de revisar los resultados.",
            "Reducir el número de requisitos a implementar.",
          ],
          correct: 0,
          explanation:
            "La automatización destaca en tareas repetitivas: ejecuta más rápido y sin cansancio la misma batería (regresión, smoke tests), lo que permite ejecutarla con mucha más frecuencia.",
          example:
            "Como una lavadora: repite el mismo ciclo perfectamente mil veces sin quejarse.",
          useCase:
            "La suite de regresión se ejecuta cada noche; los testers dedican el día a lo que requiere juicio.",
          mistake:
            "Esperar cobertura perfecta; la automatización acelera la ejecución, no garantiza calidad por sí sola.",
          syllabusRef: "Tema 6.2 — Beneficios de la automatización",
        },
        {
          id: "w6-l2-q2",
          topic: "6.2",
          question:
            "¿Qué beneficio aporta ejecutar la misma prueba automatizada una y otra vez?",
          options: [
            "Consistencia: se aplican siempre los mismos pasos y datos.",
            "Que la prueba se actualiza sola cuando cambia el software.",
            "Que ya no hace falta mantenimiento de la suite.",
            "Que los defectos se corrigen automáticamente.",
          ],
          correct: 0,
          explanation:
            "Una de las ventajas de la automatización es la consistencia: la ejecución es idéntica cada vez, lo que hace comparables los resultados y elimina errores de variabilidad humana.",
          example:
            "Como un metrónomo: marca el mismo compás siempre.",
          useCase:
            "Los resultados diarios de regresión son comparables porque la ejecución no varía entre personas.",
          mistake:
            "Confundir consistencia con mantenimiento cero; los casos automatizados siguen necesitando actualizarse.",
          syllabusRef: "Tema 6.2 — Beneficios de la automatización",
        },
        {
          id: "w6-l2-q3",
          topic: "6.2",
          question:
            "¿Qué beneficio cualitativo aporta la automatización al equipo de pruebas?",
          options: [
            "Libera al equipo de tareas repetitivas y mecánicas.",
            "Permite eliminar a los testers del proyecto.",
            "Elimina la necesidad de formación técnica.",
            "Hace innecesario el análisis de riesgos.",
          ],
          correct: 0,
          explanation:
            "Al automatizar lo repetitivo, el esfuerzo humano se concentra donde aporta más: exploración, análisis, diseño y evaluación; la automatización amplía las capacidades del equipo, no lo sustituye.",
          example:
            "Como un robot de cocina: pela y corta para que el chef se centre en el sabor.",
          useCase:
            "Con la regresión cubierta, el equipo dedica sesiones exploratorias a los flujos más riesgosos.",
          mistake:
            "Creer que automatizar es despedir testers; cambia su foco, no los elimina.",
          syllabusRef: "Tema 6.2 — Beneficios de la automatización",
        },
        {
          id: "w6-l2-q4",
          topic: "6.2",
          question: "¿Cuál es un riesgo típico de la automatización de pruebas?",
          options: [
            "Las expectativas irreales sobre lo que la herramienta logrará.",
            "Que los pasos se ejecuten siempre de la misma forma.",
            "Que la regresión se ejecute con más frecuencia.",
            "Que el equipo dedique más tiempo a lo exploratorio.",
          ],
          correct: 0,
          explanation:
            "Las expectativas irreales son un riesgo clásico: la automatización no hace mágia ni sustituye el juicio humano, el análisis de riesgos o los procesos de calidad. Sin expectativas realistas, se percibe como un fracaso.",
          example:
            "Como comprar un robot de gimnasio y esperar que haga el ejercicio por ti.",
          useCase:
            "El equipo acuerda qué cubrirá la automatización y qué seguirá siendo manual y exploratorio.",
          mistake:
            "Vender la automatización como solución total; genera decepción y abandono.",
          syllabusRef: "Tema 6.2 — Riesgos de la automatización",
        },
        {
          id: "w6-l2-q5",
          topic: "6.2",
          question: "¿Qué riesgo suele subestimarse al iniciar la automatización?",
          options: [
            "El mantenimiento continuo de los casos y los scripts.",
            "La velocidad de ejecución de las pruebas.",
            "La consistencia de las ejecuciones repetidas.",
            "La posibilidad de repetir pruebas sin fatiga.",
          ],
          correct: 0,
          explanation:
            "El mantenimiento de la automatización (actualizar casos ante cada cambio del software, datos o entorno) es un coste recurrente que a menudo se subestima en la planificación.",
          example:
            "Como tener un huerto: plantar es lo fácil; mantenerlo es el trabajo continuo.",
          useCase:
            "El equipo reserva presupuesto de cada sprint para actualizar la suite automatizada.",
          mistake:
            "Planificar solo el coste inicial de crear los tests y olvidar el mantenimiento.",
          syllabusRef: "Tema 6.2 — Riesgos de la automatización",
        },
        {
          id: "w6-l2-q6",
          topic: "6.2",
          question: "¿Qué significa el riesgo de «dependencia del proveedor» (vendor lock-in)?",
          options: [
            "Depender de una tecnología propietaria y no poder cambiarla.",
            "Que el proveedor ejecute las pruebas en tu lugar.",
            "Que la herramienta deje de venderse en las tiendas.",
            "Que el equipo reciba demasiado soporte técnico.",
          ],
          correct: 0,
          explanation:
            "El lock-in aparece cuando la organización depende de un producto propietario (formatos, integraciones, licencias) y migrar a otra solución implicaría costes desproporcionados. Conviene evaluarlo antes de adoptar.",
          example:
            "Como elegir una impresora con cartuchos exclusivos: cómoda hasta que quieres cambiar de marca.",
          useCase:
            "Antes de adoptar la suite, el equipo revisa formatos de exportación e integraciones abiertas.",
          mistake:
            "Elegir por precio o popularidad sin evaluar la portabilidad futura.",
          syllabusRef: "Tema 6.2 — Riesgos de la automatización",
        },
        {
          id: "w6-l2-q7",
          topic: "6.2",
          question: "¿Cuál afirmación sobre las pruebas automatizadas es CORRECTA?",
          options: [
            "Comparan expectativas predefinidas: no sustituyen al juicio humano.",
            "Detectan cualquier defecto, incluidos los no anticipados.",
            "No necesitan revisar sus resultados nunca más.",
            "Pueden diseñar por sí solas los criterios de aceptación.",
          ],
          correct: 0,
          explanation:
            "Los checks automatizados verifican lo que fueron programados para verificar: si las expectativas son erróneas o el caso no contempla una situación, el defecto se escapa. El juicio humano sigue siendo insustituible.",
          example:
            "Como una alarma programada: solo avisa de lo que fue configurada para vigilar.",
          useCase:
            "Tras la regresión verde, el equipo hace exploración dirigida a escenarios no anticipados.",
          mistake:
            "Confundir «sin fallos en la suite» con «producto sin defectos».",
          syllabusRef: "Tema 6.2 — Riesgos de la automatización",
        },
        {
          id: "w6-l2-q8",
          topic: "6.2",
          question:
            "¿Qué debe hacer una organización con los riesgos de la automatización (mantenimiento, expectativas, lock-in, coste inicial)?",
          options: [
            "Analizarlos y mitigarlos con planes y expectativas realistas.",
            "Ignorarlos hasta que aparezcan los primeros problemas.",
            "Firmar cuanto antes el contrato con un proveedor grande.",
            "Automatizar el 100 % de las pruebas para compensarlos.",
          ],
          correct: 0,
          explanation:
            "El syllabus es claro: cada herramienta exige esfuerzo de introducción, mantenimiento y formación, y sus riesgos deben analizarse y mitigarse, no ignorarse ni compensarse automatizando todo.",
          example:
            "Como preparar una mudanza: anticipas qué puede salir mal y preparas plan de respaldo.",
          useCase:
            "El equipo define quién mantiene la suite, con qué cadencia y qué presupuesto.",
          mistake:
            "Adoptar la herramienta con optimismo ciego; los riesgos no mitigados se materializan.",
          syllabusRef: "Tema 6.2 — Riesgos de la automatización",
        },
        {
          id: "w6-l2-q9",
          type: "multi",
          topic: "6.2",
          question: "Selecciona las DOS afirmaciones correctas sobre la automatización de pruebas.",
          options: [
            "La automatización repite pruebas sin fatiga y con consistencia.",
            "El mantenimiento continuo de los scripts es un coste a planificar.",
            "Los checks automáticos detectan defectos que nadie anticipó.",
            "Automatizar elimina la necesidad del juicio humano.",
            "Adoptar una herramienta garantiza mejoras inmediatas de calidad.",
          ],
          correct: [0, 1],
          explanation:
            "Los grandes beneficios son la repetibilidad sin fatiga y la consistencia, a cambio de un mantenimiento continuo que debe planificarse. Los checks solo detectan lo programado, el juicio humano sigue siendo esencial y ninguna herramienta garantiza mejoras por sí sola.",
          example:
            "La lavadora repite el ciclo sin cansarse, pero hay que limpiarla y revisarla de vez en cuando.",
          useCase:
            "El equipo planifica cada sprint tiempo para mantener la suite automatizada.",
          mistake:
            "Esperar de la automatización lo que solo el criterio humano puede dar.",
          syllabusRef: "Tema 6.2 — Beneficios y riesgos de la automatización",
        },
      ],
    },
    {
      id: "w6-l3",
      number: 3,
      title: "Introducción y adopción de herramientas",
      topic: "Temas 6.1–6.2 — Introducción de herramientas en la organización",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w6-l3-q1",
          topic: "6.2",
          question: "¿Qué implica adquirir una herramienta de prueba?",
          options: [
            "Requiere introducción, formación y mantenimiento para dar frutos.",
            "Garantiza la mejora inmediata de la calidad del producto.",
            "Elimina la necesidad de formación para el equipo entero.",
            "Sustituye al proceso de pruebas de la organización.",
          ],
          correct: 0,
          explanation:
            "Una herramienta no es una solución mágica: introducirla implica adaptar procesos, formar al equipo y mantenerla. Los beneficios llegan con el uso correcto y sostenido, no con la compra.",
          example:
            "Como comprar instrumentos musicales: sin práctica y mantenimiento, no hay música.",
          useCase:
            "Antes de extender la herramienta, el equipo planifica formación y define quién la mantiene.",
          mistake:
            "Presupuestar solo la licencia e ignorar introducción, formación y mantenimiento.",
          syllabusRef: "Tema 6.2 — Introducción de herramientas",
        },
        {
          id: "w6-l3-q2",
          topic: "6.2",
          question:
            "Antes de adoptar ampliamente una herramienta, ¿qué análisis conviene hacer?",
          options: [
            "Valorar beneficios frente a costes, riesgos y encaje.",
            "Comprobar únicamente el precio de la licencia anual.",
            "Ver si un competidor la usa, sin más análisis.",
            "Decidirlo por votación popular sin criterios.",
          ],
          correct: 0,
          explanation:
            "La decisión debe basarse en un análisis coste-beneficio realista: beneficios esperados, esfuerzos de adopción y mantenimiento, formación, integración con lo existente y riesgos asociados.",
          example:
            "Como evaluar comprar un coche: no solo el precio; también seguro, mantenimiento y uso previsto.",
          useCase:
            "El equipo compara dos suites: coste total a 3 años, curva de aprendizaje e integración con su CI.",
          mistake:
            "Decidir por moda o por precio, sin considerar el coste total de propiedad.",
          syllabusRef: "Tema 6.2 — Introducción de herramientas",
        },
        {
          id: "w6-l3-q3",
          topic: "6.2",
          question: "¿Qué papel juega la formación al introducir una herramienta?",
          options: [
            "Es clave: sin formación no se aprovecha la herramienta.",
            "Es opcional: las herramientas son autoexplicativas.",
            "Solo importa para el equipo directivo de la empresa.",
            "No influye en el éxito de la adopción.",
          ],
          correct: 0,
          explanation:
            "La formación y el acompañamiento del equipo son factores determinantes: una herramienta potente en manos no formadas produce resultados pobres y abandono de su uso.",
          example:
            "Como un piano de concierto sin clases: bonito, pero mudo.",
          useCase:
            "La organización organiza sesiones prácticas y acompaña a los primeros equipos usuarios.",
          mistake:
            "Comprar la herramienta y no invertir en que el equipo aprenda a usarla.",
          syllabusRef: "Tema 6.2 — Introducción de herramientas",
        },
        {
          id: "w6-l3-q4",
          topic: "6.2",
          question:
            "Un equipo introduce una herramienta de gestión de pruebas, pero no tiene procesos definidos ni comunicación fluida. ¿Qué cabe esperar?",
          options: [
            "Que no arregle por sí sola esos problemas de fondo.",
            "Que resuelva automáticamente la falta de procesos.",
            "Que sustituya la comunicación interna del equipo.",
            "Que garantice la calidad sin cambiar la forma de trabajar.",
          ],
          correct: 0,
          explanation:
            "Las herramientas apoyan procesos existentes; no los crean ni compensan su ausencia. Sin claridad de procesos y buena colaboración, su adopción rara vez aporta valor sostenible.",
          example:
            "Como una agenda perfecta para alguien que no decide sus prioridades: organiza, pero no decide por ti.",
          useCase:
            "Antes de extender la herramienta, el equipo acuerda primero su flujo de trabajo y criterios.",
          mistake:
            "Esperar que la herramienta cure problemas organizativos de raíz.",
          syllabusRef: "Tema 6.2 — Introducción de herramientas",
        },
        {
          id: "w6-l3-q5",
          topic: "6.2",
          question:
            "¿Cuál de las siguientes pruebas es MENOS adecuada para automatizar?",
          options: [
            "Una prueba exploratoria que requiere el juicio del tester.",
            "Una prueba de regresión sobre un cálculo estable y repetitivo.",
            "Un smoke test que se ejecuta en cada despliegue.",
            "La verificación del contrato de una API estable.",
          ],
          correct: 0,
          explanation:
            "La automatización brilla en lo repetitivo y estable. Las pruebas exploratorias dependen del juicio humano: se benefician de herramientas de apoyo, pero no se sustituyen por checks automáticos.",
          example:
            "Como automatizar la búsqueda del tesoro: el robot puede cavar, pero la intuición del mapa es tuya.",
          useCase:
            "La regresión se automatiza; la exploración de un flujo nuevo se mantiene manual con apoyo de herramientas.",
          mistake:
            "Automatizar todo por sistema, incluidas pruebas que requieren criterio humano.",
          syllabusRef: "Tema 6.2 — Automatización de pruebas",
        },
        {
          id: "w6-l3-q6",
          topic: "6.1",
          question:
            "Para sostener los beneficios de la automatización integrada en CI/CD, ¿qué necesita la organización?",
          options: [
            "Equipo preparado y casos mantenidos de forma continua.",
            "No volver a tocar nunca la suite automatizada.",
            "Automatizar una sola vez y olvidarse del tema.",
            "Ejecutar la suite una vez al año como mínimo.",
          ],
          correct: 0,
          explanation:
            "El valor de la automatización es continuo: exige mantenimiento de los casos, personas formadas y una integración estable con el pipeline. La automatización es un activo vivo, no un proyecto puntual.",
          example:
            "Como un gimnasio: los resultados llegan con entrenamiento regular, no con la matrícula.",
          useCase:
            "Cada sprint se actualizan casos, se revisan fallos de la suite y se mejoran los tiempos de ejecución.",
          mistake:
            "Tratar la automatización como proyecto cerrado; sin mantenimiento pierde valor rápidamente.",
          syllabusRef: "Tema 6.1 — Integración con CI/CD",
        },
        {
          id: "w6-l3-q7",
          type: "multi",
          topic: "6.2",
          question:
            "Selecciona las DOS afirmaciones correctas sobre la introducción de herramientas.",
          options: [
            "Conviene analizar el coste total: introducción, formación y mantenimiento.",
            "Las herramientas apoyan los procesos, pero no los sustituyen.",
            "Comprar la herramienta garantiza por sí sola la mejora de calidad.",
            "La formación es un gasto prescindible en la adopción.",
            "El vendor lock-in se evita eligiendo la herramienta más barata.",
          ],
          correct: [0, 1],
          explanation:
            "La adopción exige un análisis realista de coste total (introducción, formación, mantenimiento) y recordar que las herramientas apoyan procesos existentes, no los crean. Comprar no garantiza nada, la formación es clave y el lock-in se evalúa por portabilidad, no por precio.",
          example:
            "Antes de mudarte, calcula no solo el alquiler: también el transporte, el seguro y el mantenimiento.",
          useCase:
            "El equipo compara suites por coste total a 3 años, formación necesaria y portabilidad.",
          mistake:
            "Decidir por precio inicial y llevarse sorpresas de coste y dependencia después.",
          syllabusRef: "Tema 6.2 — Introducción de herramientas",
        },
      ],
    },
  ],
};
