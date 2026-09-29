// =====================================================
// ISTQB Quest — data/worlds/world5.js
// Mundo 5: Gestión de las Actividades de Prueba (CTFL v4.0, capítulo 5)
// Opciones equilibradas en longitud + multi-selección (Etapa 14, lote 6).
// =====================================================

export const world5 = {
  id: "w5",
  number: 5,
  title: "Gestión de las Actividades de Prueba",
  emoji: "📋",
  description:
    "Planificación y estimación, gestión de riesgos, monitoreo y control, configuración y gestión de defectos.",
  levels: [
    {
      id: "w5-l1",
      number: 1,
      title: "Planificación de pruebas",
      topic: "Tema 5.1 — Planificación de pruebas",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w5-l1-q1",
          topic: "5.1",
          question: "¿Cuál es el propósito principal de un plan de pruebas?",
          options: [
            "Registrar los defectos que se encuentran durante la ejecución.",
            "Documentar alcance, objetivos, enfoque, recursos y calendario.",
            "Detallar el código fuente de los casos automatizados.",
            "Sustituir al plan general del proyecto.",
          ],
          correct: 1,
          explanation:
            "El plan de pruebas documenta cómo se realizarán las pruebas: alcance, objetivos, enfoque, criterios, recursos y agenda. Es la referencia para monitorear el avance y controlar desviaciones, y se actualiza cuando cambia el contexto.",
          example:
            "Como el itinerario de un viaje: destino (objetivos), ruta (enfoque), presupuesto (recursos) y fechas (agenda).",
          useCase:
            "Al inicio del release, el test manager redacta el plan; durante la ejecución lo revisa en cada informe de progreso.",
          mistake:
            "Verlo como un documento burocrático; sin plan no hay contra qué comparar el avance.",
          syllabusRef: "Tema 5.1 — Planificación de pruebas",
        },
        {
          id: "w5-l1-q2",
          topic: "5.1",
          question: "¿Qué afirmación sobre los planes de pruebas es CORRECTA?",
          options: [
            "Deben ser idénticos en todos los proyectos de la empresa.",
            "Su contenido varía según el contexto: hay planes maestros o por iteración.",
            "Solo puede existir un plan de pruebas por cada empresa.",
            "Una vez escrito, el plan no puede modificarse jamás.",
          ],
          correct: 1,
          explanation:
            "No hay un formato único: según el contexto puede haber un plan maestro y planes por nivel o iteración. En enfoques ágiles los planes suelen ser más ligeros y evolutivos.",
          example:
            "Como los planos de una casa: uno general del proyecto y planos de detalle por planta.",
          useCase:
            "Un equipo ágil usa un plan de iteración de una página; otro proyecto regulado mantiene un plan maestro extenso.",
          mistake:
            "Buscar la plantilla única; el plan se adapta al contexto y al modelo de ciclo de vida.",
          syllabusRef: "Tema 5.1 — Planificación de pruebas",
        },
        {
          id: "w5-l1-q3",
          topic: "5.1",
          question: "¿Qué son los criterios de entrada de una actividad de prueba?",
          options: [
            "Las condiciones necesarias para poder comenzar la actividad.",
            "Los defectos que quedan pendientes al terminar la actividad.",
            "Las métricas de cobertura que se alcanzaron al final.",
            "Los casos de prueba que se ejecutaron con éxito.",
          ],
          correct: 0,
          explanation:
            "Los criterios de entrada definen las precondiciones para iniciar una actividad de prueba. Si no se cumplen, la actividad será más difícil, costosa y arriesgada, aunque pueden aceptarse excepciones con justificación.",
          example:
            "Como no empezar a pintar hasta que las paredes estén secas y las protecciones colocadas.",
          useCase:
            "Antes de ejecutar: build desplegada, humo pasado, datos de prueba cargados y entorno accesible.",
          mistake:
            "Empezar a probar sin precondiciones y descubrir tarde que faltaban piezas clave.",
          syllabusRef: "Tema 5.1 — Criterios de entrada y salida",
        },
        {
          id: "w5-l1-q4",
          topic: "5.1",
          question: "¿Qué son los criterios de salida?",
          options: [
            "Las condiciones para declarar completada la actividad de prueba.",
            "Los permisos de acceso al entorno de pruebas.",
            "Las condiciones para comenzar a programar el sistema.",
            "Las tareas pendientes del equipo de desarrollo.",
          ],
          correct: 0,
          explanation:
            "Los criterios de salida definen qué debe lograrse para dar por terminada una actividad de prueba. Incluyen medidas como cobertura de requisitos o de código, defectos pendientes por severidad y resultados de las pruebas.",
          example:
            "Como terminar de pintar solo cuando todas las paredes tienen dos manos y no quedan manchas.",
          useCase:
            "Criterio de salida del nivel: 95 % de casos ejecutados, 100 % de los críticos aprobados y cero defectos graves abiertos.",
          mistake:
            "Confundir criterios de salida con la fecha de entrega; la fecha no mide calidad.",
          syllabusRef: "Tema 5.1 — Criterios de entrada y salida",
        },
        {
          id: "w5-l1-q5",
          topic: "5.1",
          question: "¿En qué se basa la estimación del esfuerzo de pruebas BASADA EN MÉTRICAS?",
          options: [
            "En extrapolar con datos de proyectos anteriores, como ratios.",
            "En la intuición del equipo, sin usar ningún dato.",
            "En el presupuesto de marketing de la empresa.",
            "En el número de reuniones realizadas por el equipo.",
          ],
          correct: 0,
          explanation:
            "La estimación basada en métricas usa datos históricos (tamaño del proyecto, número de casos, defectos previos, productividad) para extrapolar el esfuerzo necesario en el nuevo proyecto.",
          example:
            "Como calcular el tiempo de un viaje con tus tiempos de viajes anteriores.",
          useCase:
            "Si en proyectos previos hubo 2 defectos por punto de historia, se estima el esfuerzo de prueba con ese ratio.",
          mistake:
            "Aplicar métricas sin comprobar que el contexto es comparable; los datos de otro dominio pueden engañar.",
          syllabusRef: "Tema 5.1 — Técnicas de estimación",
        },
        {
          id: "w5-l1-q6",
          topic: "5.1",
          question: "¿Qué caracteriza a la estimación BASADA EN EXPERTOS?",
          options: [
            "Usar únicamente fórmulas matemáticas muy complejas.",
            "Basarse en la experiencia del equipo y descomponer tareas.",
            "Depender exclusivamente de los datos históricos.",
            "Ignorar por completo los supuestos del proyecto.",
          ],
          correct: 1,
          explanation:
            "La estimación basada en expertos usa el conocimiento y la experiencia del equipo. Las tareas grandes se descomponen en otras más pequeñas (más fáciles de estimar) y se documentan los supuestos.",
          example:
            "Como preguntar al cocinero veterano cuánto tarda el banquete según su experiencia.",
          useCase:
            "El equipo usa Planning Poker para estimar las tareas de prueba del sprint.",
          mistake:
            "Olvidar documentar los supuestos; una estimación sin supuestos no se puede validar.",
          syllabusRef: "Tema 5.1 — Técnicas de estimación",
        },
        {
          id: "w5-l1-q7",
          topic: "5.1",
          question: "¿Qué implica priorizar las pruebas basándose en RIESGOS?",
          options: [
            "Ejecutar primero las áreas de mayor riesgo (probabilidad × impacto).",
            "Ejecutar los casos de prueba por orden alfabético.",
            "Ejecutar primero los casos de prueba más cortos de ejecutar.",
            "Ejecutar primero lo que pida el equipo de desarrollo.",
          ],
          correct: 0,
          explanation:
            "La priorización basada en riesgos ordena la ejecución según el nivel de riesgo de cada área, de forma que si el tiempo aprieta, lo crítico ya está probado. Existen también priorización basada en requisitos y en cobertura.",
          example:
            "Como en un triaje hospitalario: primero lo más grave, no lo que llegó antes.",
          useCase:
            "El equipo prueba primero el pago y la autenticación; los textos legales quedan para el final.",
          mistake:
            "Priorizar por comodidad u orden de llegada en lugar de por riesgo.",
          syllabusRef: "Tema 5.1 — Priorización de casos de prueba",
        },
      ],
    },
    {
      id: "w5-l2",
      number: 2,
      title: "Pirámide, cuadrantes y riesgos",
      topic: "Temas 5.1–5.2 — Modelos de prueba y gestión de riesgos",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w5-l2-q1",
          topic: "5.1",
          question: "¿Qué representa la pirámide de pruebas?",
          options: [
            "Muchos tests de componente, menos de integración y pocos de sistema.",
            "Que las pruebas manuales son la base de toda la pirámide.",
            "Que solo se debe probar al final del proyecto completo.",
            "El número de testers necesarios para cada equipo.",
          ],
          correct: 0,
          explanation:
            "El modelo de la pirámide muestra distintos niveles de granularidad: los tests de componente son numerosos, rápidos y baratos; los de niveles superiores, menos, más lentos y frágiles. Ayuda a repartir esfuerzo y automatización.",
          example:
            "Como una nutrición equilibrada: mucha base (verduras), menos proteína y poca guarnición.",
          useCase:
            "El equipo automatiza cientos de unitarios, decenas de integración y unos pocos de extremo a extremo.",
          mistake:
            "Construir la pirámide al revés: muchas pruebas de interfaz lentas y frágiles.",
          syllabusRef: "Tema 5.1.6 — Pirámide de pruebas",
        },
        {
          id: "w5-l2-q2",
          topic: "5.1",
          question: "¿Para qué sirve el modelo de los CUATRO CUADRANTES de prueba?",
          options: [
            "Para clasificar las pruebas según negocio/tecnología y su enfoque.",
            "Para medir la cobertura de código alcanzada por la suite.",
            "Para calcular el nivel de riesgo de cada proyecto.",
            "Para clasificar los defectos según su severidad.",
          ],
          correct: 0,
          explanation:
            "Los cuadrantes agrupan las pruebas en: tecnológicas que apoyan al desarrollo (unitarias, integración), de negocio que apoyan (funcionales, prototipos), de negocio que critican (exploratorias, usabilidad, aceptación) y tecnológicas que critican (rendimiento, seguridad).",
          example:
            "Como una brújula con cuatro puntos cardinales para no olvidar ningún tipo de prueba.",
          useCase:
            "El equipo revisa que cubre los cuatro cuadrantes y detecta que olvidó las pruebas de seguridad.",
          mistake:
            "Creer que los cuadrantes son niveles de prueba; son categorías de tipos de prueba.",
          syllabusRef: "Tema 5.1.7 — Cuadrantes de prueba",
        },
        {
          id: "w5-l2-q3",
          topic: "5.2",
          question: "¿Cómo se determina el nivel de un riesgo?",
          options: [
            "Sumando el número de defectos abiertos en el sistema.",
            "Multiplicando la probabilidad de ocurrencia por el impacto.",
            "Con el presupuesto disponible del proyecto de pruebas.",
            "Según el orden en que se detectan los fallos.",
          ],
          correct: 1,
          explanation:
            "El nivel de riesgo combina la probabilidad (cuán factible es que ocurra) con el impacto (gravedad de las consecuencias). Ambos factores guían la priorización del esfuerzo de prueba.",
          example:
            "Como valorar un viaje: probabilidad de lluvia × cuánto arruinaría el plan.",
          useCase:
            "Un fallo probable en el pago (impacto altísimo) encabeza la lista de riesgos a cubrir.",
          mistake:
            "Fijarse solo en la probabilidad o solo en el impacto; ambos pesan.",
          syllabusRef: "Tema 5.2 — Gestión de riesgos",
        },
        {
          id: "w5-l2-q4",
          topic: "5.2",
          question: "¿Cuál de los siguientes es un ejemplo de riesgo de PRODUCTO?",
          options: [
            "Que el equipo pierda a un desarrollador clave durante el sprint.",
            "Que la pasarela de pago cobre importes incorrectos a los clientes.",
            "Que el entorno de pruebas del proyecto llegue tarde.",
            "Que recorten el presupuesto del proyecto a mitad de camino.",
          ],
          correct: 1,
          explanation:
            "Los riesgos de producto afectan a la calidad del propio sistema (errores funcionales, de rendimiento, de seguridad…). Los otros ejemplos son riesgos de proyecto: afectan a la capacidad de entregar.",
          example:
            "Producto: el freno de un coche falla. Proyecto: el coche se entrega tarde.",
          useCase:
            "El análisis de riesgos marca el cálculo de importes como riesgo de producto prioritario.",
          mistake:
            "Confundir los riesgos que dañan el producto con los que retrasan el proyecto.",
          syllabusRef: "Tema 5.2 — Riesgos de producto y de proyecto",
        },
        {
          id: "w5-l2-q5",
          topic: "5.2",
          question: "¿Cuál de los siguientes es un ejemplo de riesgo de PROYECTO?",
          options: [
            "Que exista una vulnerabilidad en el módulo de login.",
            "Que la aplicación no cumpla los tiempos de respuesta requeridos.",
            "Que la rotación de personal retrase la entrega del producto.",
            "Que los cálculos de facturación sean incorrectos.",
          ],
          correct: 2,
          explanation:
            "Los riesgos de proyecto afectan a la planificación y la entrega: recursos, personal, presupuesto, plazos, proveedores, entorno. Los otros ejemplos afectan a la calidad del producto.",
          example:
            "Proyecto: el reparto se retrasa porque falta personal. Producto: la pizza llega mal cocida.",
          useCase:
            "El test manager anota la rotación de personal como riesgo de proyecto y planifica transferencia de conocimiento.",
          mistake:
            "Registrar como riesgo de producto algo que en realidad amenaza el calendario.",
          syllabusRef: "Tema 5.2 — Riesgos de producto y de proyecto",
        },
        {
          id: "w5-l2-q6",
          topic: "5.2",
          question: "¿Qué busca el análisis de riesgos de producto?",
          options: [
            "Identificar y evaluar los riesgos del producto para priorizar.",
            "Redactar el presupuesto anual del departamento de TI.",
            "Seleccionar el lenguaje de programación principal.",
            "Medir la velocidad de entrega del equipo de desarrollo.",
          ],
          correct: 0,
          explanation:
            "El análisis de riesgos de producto identifica los posibles problemas del sistema y los evalúa (probabilidad e impacto). Su resultado orienta qué áreas probar antes y con más profundidad.",
          example:
            "Como el médico que valora tu historial y síntomas para decidir qué análisis hacer primero.",
          useCase:
            "El equipo pondera cada módulo y los de riesgo alto reciben más casos y revisiones.",
          mistake:
            "Analizar riesgos y luego probar todo por igual; el análisis pierde su valor.",
          syllabusRef: "Tema 5.2 — Análisis de riesgos de producto",
        },
        {
          id: "w5-l2-q7",
          topic: "5.2",
          question:
            "Las acciones de mitigación (control) de los riesgos de producto buscan…",
          options: [
            "Eliminar los defectos por completo y de inmediato.",
            "Reducir la probabilidad o el impacto del riesgo.",
            "Aumentar el número de defectos registrados.",
            "Cambiar la fecha de entrega del producto.",
          ],
          correct: 1,
          explanation:
            "El control de riesgos aplica medidas para reducir la probabilidad (que el problema ocurra) o el impacto (que las consecuencias sean menores): pruebas adicionales, revisiones, prototipos, formación, respaldos.",
          example:
            "Como poner barandillas (reducir impacto) y señalizar zonas resbaladizas (reducir probabilidad).",
          useCase:
            "Para el riesgo de cálculo de importes se añaden pruebas automatizadas de regresión y revisión de código.",
          mistake:
            "Analizar el riesgo y no actuar; el control es la parte que reduce la exposición.",
          syllabusRef: "Tema 5.2 — Control de riesgos de producto",
        },
        {
          id: "w5-l2-q8",
          topic: "5.2",
          question: "¿Qué implica un enfoque de pruebas BASADO EN RIESGOS?",
          options: [
            "Probar todas las áreas con exactamente la misma profundidad.",
            "Probar más y antes las áreas de mayor riesgo; menos el resto.",
            "Probar únicamente lo que pida el área de negocio.",
            "No probar las áreas que ya funcionaron alguna vez.",
          ],
          correct: 1,
          explanation:
            "El testing basado en riesgos distribuye el esfuerzo según el nivel de riesgo: las zonas críticas reciben más pruebas y prioridad temporal; las de bajo riesgo, menos. Es una estrategia habitual para optimizar tiempo y cobertura.",
          example:
            "Como revisar un coche antes de un viaje largo: más atención a frenos y neumáticos que a la tapicería.",
          useCase:
            "Con dos semanas y mucho que probar, el equipo asigna casos según la matriz de riesgos.",
          mistake:
            "Repartir esfuerzo por igual entre todo; los riesgos altos quedan infracubiertos.",
          syllabusRef: "Tema 5.2 — Testing basado en riesgos",
        },
        {
          id: "w5-l2-q9",
          type: "multi",
          topic: "5.2",
          question: "Selecciona las DOS afirmaciones correctas sobre los riesgos.",
          options: [
            "Los riesgos de producto amenazan la calidad del propio sistema.",
            "El nivel de riesgo combina la probabilidad con el impacto.",
            "Los riesgos de proyecto son siempre fallos funcionales del sistema.",
            "Mitigar un riesgo consiste en eliminar todos los defectos existentes.",
            "El testing basado en riesgos prueba todo con igual profundidad.",
          ],
          correct: [0, 1],
          explanation:
            "Los riesgos de producto amenazan la calidad del sistema y su nivel combina probabilidad × impacto. Los riesgos de proyecto afectan a la planificación y entrega (no son fallos funcionales), mitigar no elimina defectos por arte de magia y el testing basado en riesgos distribuye el esfuerzo de forma desigual.",
          example:
            "Producto: el pago cobra mal. Proyecto: falta personal. Cada uno se gestiona distinto.",
          useCase:
            "La matriz de riesgos prioriza módulos: pago (alto), textos legales (bajo).",
          mistake:
            "Mezclar las categorías de riesgo y creer que mitigar significa eliminar el problema.",
          syllabusRef: "Tema 5.2 — Gestión de riesgos",
        },
      ],
    },
    {
      id: "w5-l3",
      number: 3,
      title: "Monitoreo, control y cierre",
      topic: "Tema 5.3 — Monitoreo, control y cierre de las pruebas",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w5-l3-q1",
          topic: "5.3",
          question: "¿Qué es el monitoreo de pruebas?",
          options: [
            "Recopilar el avance real y compararlo con el plan de pruebas.",
            "Modificar el plan sin medir absolutamente nada.",
            "Ejecutar los casos de prueba mucho más rápido.",
            "Escribir el informe final del proyecto completo.",
          ],
          correct: 0,
          explanation:
            "El monitoreo recoge datos (casos ejecutados/pasados, defectos, cobertura, riesgos) y los compara con el plan para saber si las pruebas avanzan según lo previsto.",
          example:
            "Como mirar el marcador de un partido: te dice cómo va todo, no cambia el juego.",
          useCase:
            "Cada día el equipo actualiza el tablero: casos ejecutados, fallos y riesgos en curso.",
          mistake:
            "Confundir monitoreo con control; el monitoreo informa, el control actúa.",
          syllabusRef: "Tema 5.3 — Monitoreo de pruebas",
        },
        {
          id: "w5-l3-q2",
          topic: "5.3",
          question: "¿Qué es el control de pruebas?",
          options: [
            "Tomar acciones ante las desviaciones y ajustar el plan.",
            "Copiar el plan de pruebas del proyecto anterior.",
            "Medir el avance sin intervenir en absoluto.",
            "Añadir más casos de prueba sin ningún criterio.",
          ],
          correct: 0,
          explanation:
            "El control de pruebas actúa sobre las desviaciones que detecta el monitoreo: repriorizar, ajustar alcance o profundidad, redistribuir recursos, actualizar el plan y comunicar decisiones a los interesados.",
          example:
            "Como el entrenador que cambia la táctica según el marcador.",
          useCase:
            "Con retraso acumulado, el equipo reprioriza y pospone pruebas de bajo riesgo para llegar a lo crítico.",
          mistake:
            "Detectar problemas y no decidir nada; sin control, la desviación solo crece.",
          syllabusRef: "Tema 5.3 — Control de pruebas",
        },
        {
          id: "w5-l3-q3",
          topic: "5.3",
          question: "¿Cuál de las siguientes es una métrica típica del avance de pruebas?",
          options: [
            "Casos ejecutados y aprobados, defectos por severidad y cobertura.",
            "El número total de empleados de toda la empresa.",
            "La cotización de las acciones de la compañía en bolsa.",
            "Los metros cuadrados de las oficinas centrales.",
          ],
          correct: 0,
          explanation:
            "Las métricas habituales incluyen: casos ejecutados/aprobados/fallidos, defectos por severidad y estado, cobertura de requisitos o de código, estado de los riesgos y fechas de hitos.",
          example:
            "Como los indicadores de un tablero de coche: velocidad, combustible y temperatura del motor.",
          useCase:
            "El informe semanal muestra 80 % de casos ejecutados, 5 defectos críticos abiertos y 92 % de cobertura de requisitos.",
          mistake:
            "Medir solo «cuántos casos quedan»; el estado de defectos y riesgos también cuenta.",
          syllabusRef: "Tema 5.3 — Métricas de pruebas",
        },
        {
          id: "w5-l3-q4",
          topic: "5.3",
          question: "¿Qué contiene típicamente un informe de progreso de pruebas?",
          options: [
            "El estado frente al plan, métricas y riesgos vigentes.",
            "Únicamente la lista de defectos ya cerrados.",
            "El código fuente completo del sistema bajo prueba.",
            "Las actas de todas las reuniones del año.",
          ],
          correct: 0,
          explanation:
            "El informe de progreso comunica de forma periódica el estado: avance frente al plan, desviaciones y su causa, métricas clave, riesgos actuales y las acciones/plan previstos.",
          example:
            "Como el boletín de un viaje: dónde estás, qué te desviaste y qué hará el grupo mañana.",
          useCase:
            "El test manager envía un resumen semanal a los interesados con semáforos por área.",
          mistake:
            "Informar solo datos sin contexto ni acciones; el informe sirve para decidir.",
          syllabusRef: "Tema 5.3 — Informes de prueba",
        },
        {
          id: "w5-l3-q5",
          topic: "5.3",
          question: "¿Cuándo se elabora el informe de cierre (test completion report)?",
          options: [
            "Al final de la actividad: resultados, cobertura y lecciones.",
            "Antes de escribir el primer caso de prueba del ciclo.",
            "Solo si no se encontraron defectos durante la ejecución.",
            "Nunca: el informe de cierre no aporta ningún valor.",
          ],
          correct: 0,
          explanation:
            "El informe de cierre se emite cuando una actividad de prueba termina: recopila resultados, cumplimiento de criterios de salida, defectos, riesgos residuales y aprendizajes para futuras iteraciones o proyectos.",
          example:
            "Como la nota final de un curso: qué se logró, qué quedó pendiente y qué mejorar la próxima vez.",
          useCase:
            "Al cerrar el release, el informe documenta el riesgo residual aceptado por negocio.",
          mistake:
            "Saltarlo por prisa; sin él no queda constancia de qué se probó ni de lo que queda pendiente.",
          syllabusRef: "Tema 5.3 — Informes de prueba",
        },
        {
          id: "w5-l3-q6",
          topic: "5.3",
          question: "¿En qué se basa la decisión de dar por finalizadas las pruebas?",
          options: [
            "En el cumplimiento de los criterios de salida y el riesgo residual.",
            "En la fecha del calendario de entrega, sin más criterio.",
            "En el número de testers disponibles en el equipo.",
            "En el cansancio acumulado del equipo de pruebas.",
          ],
          correct: 0,
          explanation:
            "La finalización se decide comparando los criterios de salida con los resultados reales y valorando el riesgo residual. El informe de cierre sustenta esa decisión ante los interesados.",
          example:
            "Como finalizar la mudanza: no cuando se acaba el día, sino cuando todo está inventariado y ubicado.",
          useCase:
            "Aunque queden casos de bajo riesgo, se cierra porque los criterios críticos se cumplen y hay acuerdo.",
          mistake:
            "Confundir «se acabó el tiempo» con «se cumplieron los objetivos».",
          syllabusRef: "Tema 5.3 — Finalización de las pruebas",
        },
        {
          id: "w5-l3-q7",
          topic: "5.3",
          question:
            "Durante la ejecución, la densidad de defectos críticos supera el umbral y quedan módulos críticos sin probar. ¿Qué acción de control es adecuada?",
          options: [
            "Ignorar los datos y continuar exactamente igual.",
            "Investigar la causa, repriorizar y avisar a los interesados.",
            "Cerrar los defectos sin verificar sus correcciones.",
            "Cancelar el proyecto de inmediato por completo.",
          ],
          correct: 1,
          explanation:
            "La acción de control típica ante una desviación grave: analizar causas (¿build inestable?, ¿área más defectuosa de lo previsto?), repriorizar el esfuerzo hacia lo crítico, informar y replanificar con los interesados.",
          example:
            "Como en un partido: si te están superando, cambias la táctica y avisas al equipo, no sigues igual.",
          useCase:
            "Se aparcan las pruebas de bajo riesgo, se refuerza la revisión de correcciones y se comunica el nuevo plan.",
          mistake:
            "Aplicar acciones drásticas o ignorar los datos; el control busca equilibrio y comunicación.",
          syllabusRef: "Tema 5.3 — Control de pruebas",
        },
      ],
    },
    {
      id: "w5-l4",
      number: 4,
      title: "Configuración y defectos",
      topic: "Temas 5.4–5.5 — Gestión de configuración y de defectos",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w5-l4-q1",
          topic: "5.4",
          question: "¿Qué gestiona la gestión de configuración en un proyecto?",
          options: [
            "El versionado y control de cambios de los elementos del proyecto.",
            "Los precios de venta del producto en el mercado.",
            "El calendario de vacaciones y ausencias del equipo.",
            "La decoración y el mobiliario de las oficinas.",
          ],
          correct: 0,
          explanation:
            "La gestión de configuración identifica los elementos de configuración, controla sus versiones y cambios, y establece líneas base para saber siempre qué versión de cada elemento es la vigente y reproducible.",
          example:
            "Como un almacén con inventario etiquetado: cada pieza tiene versión y ubicación conocidas.",
          useCase:
            "Cada build, script de prueba, dato y documento del proyecto está versionado con trazabilidad.",
          mistake:
            "Pensar que solo aplica al código; el testware y los entornos también se gestionan.",
          syllabusRef: "Tema 5.4 — Gestión de configuración",
        },
        {
          id: "w5-l4-q2",
          topic: "5.4",
          question: "¿Por qué es importante la gestión de configuración para el testing?",
          options: [
            "Porque permite saber qué versión se prueba y reproducirla.",
            "Porque evita tener que probar el software construido.",
            "Porque sustituye a los criterios de salida del ciclo.",
            "Porque elimina los defectos de forma automática.",
          ],
          correct: 0,
          explanation:
            "Sin control de versiones preciso, los resultados de prueba no son reproducibles ni fiables: ¿sobre qué build se ejecutó?, ¿con qué datos?, ¿con qué entorno? La CM asegura trazabilidad y estabilidad de esa base.",
          example:
            "Como anotar la receta exacta y los ingredientes usados para poder repetir el plato idéntico.",
          useCase:
            "Al reportar un defecto se indica la versión exacta del software y del paquete de pruebas.",
          mistake:
            "Probar «la última versión» sin registrarla; después nadie puede reproducir el hallazgo.",
          syllabusRef: "Tema 5.4 — Gestión de configuración",
        },
        {
          id: "w5-l4-q3",
          topic: "5.5",
          question: "¿Qué debe incluir un informe de defecto para ser útil?",
          options: [
            "Pasos para reproducir, resultados observado/esperado y entorno.",
            "Solo una captura de pantalla, y además opcional.",
            "La opinión personal del tester sobre el programador.",
            "El presupuesto completo del proyecto de pruebas.",
          ],
          correct: 0,
          explanation:
            "Un buen informe de defecto permite reproducirlo y entenderlo: pasos, resultado esperado vs observado, entorno/versión, datos de identificación (id, título, autor, fecha) y clasificación (severidad, prioridad, estado).",
          example:
            "Como una receta de cocina con instrucciones claras para que cualquiera repita el plato… y vea el fallo.",
          useCase:
            "El desarrollador reproduce el defecto a la primera porque el informe detalla los pasos y el entorno.",
          mistake:
            "Reportes vagos («no funciona») que obligan a idas y vueltas entre tester y desarrollo.",
          syllabusRef: "Tema 5.5 — Gestión de defectos",
        },
        {
          id: "w5-l4-q4",
          topic: "5.5",
          question: "¿Qué diferencia hay entre la severidad y la prioridad de un defecto?",
          options: [
            "La severidad mide el impacto; la prioridad, la urgencia de corrección.",
            "Son exactamente lo mismo y las decide la misma persona.",
            "La severidad la decide el cliente y la prioridad el tester.",
            "Dependen solo de la fecha en que se reportó el defecto.",
          ],
          correct: 0,
          explanation:
            "La severidad refleja el daño técnico (por ejemplo, pérdida de datos = alta). La prioridad refleja la urgencia de negocio (un error cosmético en la web de ventas puede ser alta prioridad). Un defecto grave puede ser baja prioridad y viceversa.",
          example:
            "Como una fuga de agua en un cuarto cerrado: muy grave, pero puede esperar; en cambio una mancha en el escaparate urge arreglarla.",
          useCase:
            "El equipo acuerda corrección inmediata para un texto erróneo en la portada (prioridad alta, severidad baja).",
          mistake:
            "Asumir que severidad alta = prioridad alta; la urgencia la define el negocio.",
          syllabusRef: "Tema 5.5 — Gestión de defectos",
        },
        {
          id: "w5-l4-q5",
          topic: "5.5",
          question: "Un defecto pasa de «resuelto» a «reabierto». ¿Qué significa?",
          options: [
            "Que la corrección no pasó la verificación y el defecto sigue.",
            "Que se encontró un defecto nuevo con el mismo identificador.",
            "Que la corrección se verificó con éxito y se cerró.",
            "Que su corrección se pospuso de forma indefinida.",
          ],
          correct: 0,
          explanation:
            "«Reabierto» indica que, tras la corrección, la prueba de confirmación volvió a fallar: el defecto persiste (o el arreglo introdujo nuevos problemas). Suele acompañarse de la evidencia actualizada.",
          example:
            "Como llevar el coche a reparar y que el mismo ruido siga sonando: el taller lo vuelve a abrir.",
          useCase:
            "El tester reejecuta el caso, comprueba que sigue fallando y reabre el defecto con notas.",
          mistake:
            "Cerrar el defecto solo porque desarrollo dijo «arreglado», sin verificar.",
          syllabusRef: "Tema 5.5 — Ciclo de vida de los defectos",
        },
        {
          id: "w5-l4-q6",
          topic: "5.5",
          question: "¿Cuál es un objetivo de la gestión de defectos?",
          options: [
            "Dar información, seguir el ciclo de vida y apoyar la mejora.",
            "Ocultar los defectos para no alarmar al negocio.",
            "Registrar únicamente los defectos cosméticos del producto.",
            "Transformar cada defecto en una nueva funcionalidad.",
          ],
          correct: 0,
          explanation:
            "La gestión de defectos establece el proceso para reportar, clasificar, priorizar, corregir y verificar defectos; además produce información valiosa para el análisis de causas raíz y la mejora continua.",
          example:
            "Como el libro de incidencias de un hotel: registra, resuelve y ayuda a mejorar el servicio.",
          useCase:
            "Cada trimestre el equipo analiza la categoría de defectos más frecuente y refuerza las revisiones.",
          mistake:
            "Usar el registro como archivador y no como fuente de mejora.",
          syllabusRef: "Tema 5.5 — Gestión de defectos",
        },
        {
          id: "w5-l4-q7",
          topic: "5.5",
          question: "¿Qué NO debe hacerse en un informe de defectos?",
          options: [
            "Culpar a personas concretas o incluir opiniones subjetivas.",
            "Incluir el entorno y la versión donde se reprodujo el fallo.",
            "Añadir evidencias, como capturas de pantalla o registros.",
            "Indicar el resultado esperado y el resultado observado.",
          ],
          correct: 0,
          explanation:
            "Un informe de defecto es una herramienta técnica y objetiva: describe hechos, no personas. Atribuir culpas o incluir juicios subjetivos enturbia la colaboración y dificulta la corrección.",
          example:
            "Como un parte de avería del taller: describe el síntoma y las condiciones, no acusa al mecánico anterior.",
          useCase:
            "El informe señala «al guardar sin email, la app se cierra» en vez de «el desarrollador rompió el formulario».",
          mistake:
            "Escribir el informe con frustración; el tono subjetivo retrasa la resolución.",
          syllabusRef: "Tema 5.5 — Informes de defectos",
        },
        {
          id: "w5-l4-q8",
          topic: "5.5",
          question:
            "Tras corregir un defecto y verificar con éxito la corrección, ¿qué estado corresponde?",
          options: [
            "Cerrado (closed).",
            "Abierto (open).",
            "Reabierto (reopened).",
            "Pospuesto (deferred).",
          ],
          correct: 0,
          explanation:
            "El flujo típico termina en cierre: nuevo → asignado → en progreso → resuelto → verificado → cerrado. Si la verificación falla, se reabre; si se decide no corregir ahora, se pospone.",
          example:
            "Como dar el visto bueno final a una reparación: el caso queda cerrado.",
          useCase:
            "El tester confirma la corrección en la nueva build y cierra el defecto con la evidencia.",
          mistake:
            "Dejar defectos «resueltos» sin verificar; la verificación es lo que autoriza el cierre.",
          syllabusRef: "Tema 5.5 — Ciclo de vida de los defectos",
        },
        {
          id: "w5-l4-q9",
          type: "multi",
          topic: "5.5",
          question: "Selecciona las DOS afirmaciones correctas sobre la gestión de defectos.",
          options: [
            "La severidad y la prioridad de un defecto pueden no coincidir.",
            "Tras verificar con éxito la corrección, el defecto pasa a cerrado.",
            "Un defecto reabierto indica que la corrección se verificó bien.",
            "El informe de defecto debe incluir opiniones sobre las personas.",
            "Un defecto resuelto se cierra automáticamente, sin verificar.",
          ],
          correct: [0, 1],
          explanation:
            "La severidad (impacto técnico) y la prioridad (urgencia de negocio) son independientes y pueden no coincidir; el cierre llega tras verificar con éxito la corrección. Reabierto indica que la verificación falló, el informe describe hechos (no personas) y nada se cierra sin verificar.",
          example:
            "La mancha en el escaparate: severidad baja, prioridad alta. Solo se cierra al comprobar que quedó limpio.",
          useCase:
            "El tester verifica el arreglo en la nueva build y recién entonces cierra el defecto.",
          mistake:
            "Cerrar por confianza («ya me dijeron que está arreglado») en lugar de por evidencia.",
          syllabusRef: "Tema 5.5 — Gestión de defectos",
        },
      ],
    },
  ],
};
