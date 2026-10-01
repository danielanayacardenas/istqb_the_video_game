// =====================================================
// ISTQB Quest — data/worlds/world1.js
// Mundo 1: Fundamentos de Testing (CTFL v4.0, capítulo 1)
// Opciones equilibradas en longitud (Etapa 14, lote 2).
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
            "Un proceso exclusivamente dinámico que consiste en ejecutar el software para encontrar sus fallos.",
            "Un conjunto de actividades, estáticas y dinámicas, para descubrir defectos y evaluar la calidad.",
            "Una actividad de desarrollo cuyo objetivo es corregir los defectos encontrados en el código.",
            "Una fase final del proyecto que certifica que el software quedó libre de todos los defectos.",
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
            "El testing y el debugging son la misma actividad y los realiza siempre la misma persona.",
            "El testing localiza la causa de los fallos y el debugging corrige los defectos encontrados.",
            "El testing provoca fallos que revelan defectos; el debugging localiza la causa y corrige el defecto.",
            "El debugging se realiza solo sobre el código fuente y el testing solo sobre la interfaz gráfica.",
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
            "Evaluar productos de trabajo como requisitos, historias de usuario o código fuente.",
            "Causar fallos reales y descubrir los defectos presentes en el software.",
            "Corregir los defectos encontrados durante la ejecución de las pruebas.",
            "Proporcionar información a los interesados para que tomen decisiones.",
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
            "Automatizar una batería de pruebas de regresión de la interfaz.",
            "Medir los tiempos de respuesta del sistema con muchos usuarios.",
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
            "Error: la equivocación humana al escribir la fórmula en el editor.",
            "Defecto: la fórmula mal escrita dentro del producto de trabajo.",
            "Fallo: el comportamiento incorrecto observado al ejecutar el sistema.",
            "Caso negativo: la prueba que verifica una entrada inválida del usuario.",
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
        {
          id: "w1-l1-q6",
          type: "multi",
          topic: "1.1",
          question:
            "Selecciona las DOS afirmaciones correctas sobre el testing y la depuración (debugging).",
          options: [
            "El testing dinámico puede provocar fallos que revelan la presencia de defectos.",
            "El debugging busca la causa de un fallo, la analiza y elimina el defecto correspondiente.",
            "El testing y el debugging son actividades sinónimas que realiza siempre la misma persona.",
            "El debugging consiste en ejecutar casos de prueba hasta que aparezcan fallos nuevos.",
            "El testing estático exige ejecutar el software para poder detectar los defectos.",
          ],
          correct: [0, 1],
          explanation:
            "El testing dinámico provoca fallos que evidencian defectos; después, el debugging localiza la causa, la analiza y corrige el defecto. Son actividades distintas y no las realiza necesariamente la misma persona.",
          example:
            "Tú detectas que la puerta chirría al abrirla (testing); el técnico engrasa la bisagra (debugging).",
          useCase:
            "El tester adjunta pasos y evidencia del fallo; desarrollo depura, corrige y solicita el retesting.",
          mistake:
            "Confundir las actividades: el testing descubre, el debugging localiza y corrige la causa.",
          syllabusRef: "Tema 1.1 — Testing y depuración (debugging)",
        },
      ],
    },
    {
      id: "w1-l2",
      number: 2,
      title: "¿Por qué es necesario el testing?",
      topic: "Tema 1.2 — ¿Por qué es necesario el testing?",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w1-l2-q1",
          topic: "1.2",
          question:
            "Además de descubrir defectos, ¿qué otra contribución clave hace el testing al éxito de un producto?",
          options: [
            "Garantizar que el producto no tendrá ningún fallo cuando esté en producción.",
            "Reducir el riesgo de fallos, aportar información para decidir y generar confianza.",
            "Sustituir al aseguramiento de calidad de la organización cuando falta personal.",
            "Eliminar la necesidad de revisiones, auditorías y controles de calidad.",
          ],
          correct: 1,
          explanation:
            "El testing contribuye a reducir riesgos evaluando la calidad, a aportar información objetiva para la toma de decisiones, a generar confianza y a verificar el cumplimiento de requisitos legales o contractuales.",
          example:
            "Como revisar el paracaídas antes de saltar: no elimina el riesgo, pero lo reduce drásticamente y te da confianza para saltar.",
          useCase:
            "En un banco, las pruebas de una transferencia verifican requisitos legales y reducen el riesgo de sanciones y pérdidas.",
          mistake:
            "El testing no garantiza software sin fallos: reduce riesgos y proporciona información.",
          syllabusRef: "Tema 1.2 — El testing y el éxito del proyecto",
        },
        {
          id: "w1-l2-q2",
          topic: "1.2",
          question: "¿Cuál es la diferencia entre el aseguramiento de la calidad (QA) y el testing?",
          options: [
            "La QA se centra en el producto terminado y el testing en los procesos internos.",
            "Son sinónimos: ambos consisten en ejecutar pruebas y revisar los resultados.",
            "La QA se centra en los procesos y el testing es control de calidad del producto.",
            "La QA la realiza solo el cliente y el testing solo el equipo de desarrollo.",
          ],
          correct: 2,
          explanation:
            "El aseguramiento de calidad (QA) se ocupa de la calidad de los procesos; el testing es control de calidad (QC) y se centra en el producto. Ambos buscan la calidad, desde enfoques distintos.",
          example:
            "QA: verificar que el equipo sigue un proceso de despliegue seguro. Testing: comprobar que esta versión concreta funciona.",
          useCase:
            "En una empresa certificada, QA audita los procesos mientras el equipo de testing verifica cada entrega.",
          mistake: "QA = procesos (prevención); testing/QC = producto (detección).",
          syllabusRef: "Tema 1.2 — Testing y aseguramiento de calidad (QA)",
        },
        {
          id: "w1-l2-q3",
          topic: "1.2",
          question: "¿Cuál de las siguientes es una CAUSA típica de defectos en el software?",
          options: [
            "Trabajar bajo presión con plazos ajustados, prisa y demasiada complejidad.",
            "Ejecutar demasiadas pruebas automatizadas antes de cada entrega.",
            "Documentar los requisitos con demasiado detalle y claridad.",
            "Revisar el código por pares antes de subirlo al repositorio.",
          ],
          correct: 0,
          explanation:
            "Entre las causas de defectos están: el error humano (equivocarse), la presión de tiempo, la complejidad del código, la falta de comunicación, las tecnologías nuevas y las interfaces complejas.",
          example:
            "Con prisa por entregar el viernes, alguien invierte una condición lógica y nadie la revisó a tiempo.",
          useCase:
            "En la retrospectiva, el equipo identifica que la presión de fechas causó varios defectos en el módulo de pagos.",
          mistake:
            "Distingue causas (error humano, contexto) de manifestaciones (defecto en el producto, fallo al ejecutar).",
          syllabusRef: "Tema 1.2 — Errores, defectos, fallos y sus causas",
        },
        {
          id: "w1-l2-q4",
          topic: "1.2",
          question: "¿Por qué se dice que encontrar un defecto tarde es mucho más caro?",
          options: [
            "Porque los defectos se multiplican de forma exponencial con el tiempo transcurrido.",
            "Porque más tarde hay más artefactos implicados y el retrabajo crece en cascada.",
            "Porque los testers cobran más caro en las últimas fases de cada proyecto.",
            "Porque los usuarios finales siempre reportan defectos mejor que los testers.",
          ],
          correct: 1,
          explanation:
            "Cuanto más avanza el ciclo de vida, más productos de trabajo dependen de un defecto (diseño, código, pruebas, documentación). Corregirlo tarde implica cambios en cascada y mayor coste.",
          example:
            "Un error en un requisito detectado en la revisión se corrige con una conversación; descubierto tras el despliegue puede costar días de parches y clientes perdidos.",
          useCase:
            "El equipo adopta revisiones de requisitos (shift left) tras medir el alto coste de los defectos reabiertos en producción.",
          mistake:
            "Detectar temprano (revisiones, testing estático) reduce costes: es la base del principio del testing temprano.",
          syllabusRef: "Tema 1.2 — El testing y el éxito del proyecto",
        },
        {
          id: "w1-l2-q5",
          topic: "1.2",
          question:
            "¿Cómo contribuye el testing al cumplimiento de requisitos legales o contractuales?",
          options: [
            "Emitiendo certificados de calidad que se entregan a los clientes.",
            "Comprobando que cumple normativas exigidas, como seguridad o privacidad.",
            "Sustituyendo al departamento legal de la empresa durante el proyecto.",
            "Eliminando la necesidad de auditorías externas de calidad.",
          ],
          correct: 1,
          explanation:
            "El testing puede verificar el cumplimiento de requisitos contractuales, legales o normativos (protección de datos, seguridad, accesibilidad…), lo que reduce riesgos legales y económicos.",
          example:
            "Como la revisión técnica del vehículo: no arregla el coche, pero certifica que cumple los requisitos para circular.",
          useCase:
            "Un software médico debe evidenciar pruebas de cumplimiento normativo antes de comercializarse.",
          mistake:
            "Las razones del testing no son solo los defectos: también el cumplimiento, la confianza y la información.",
          syllabusRef: "Tema 1.2 — El testing y el éxito del proyecto",
        },
        {
          id: "w1-l2-q6",
          topic: "1.2",
          question:
            "El director pregunta: «¿Lanzamos mañana?». Tras ejecutar las pruebas de aceptación, todas pasan. ¿Qué aporta el testing en esta decisión?",
          options: [
            "La certeza absoluta de que el producto no tendrá ningún fallo futuro.",
            "Información objetiva sobre la calidad para decidir con confianza.",
            "La corrección automática de los defectos que quedan pendientes.",
            "Una excusa formal para retrasar el despliegue previsto.",
          ],
          correct: 1,
          explanation:
            "El testing proporciona información sobre la calidad para que los interesados tomen decisiones informadas (lanzar, retrasar, priorizar). Cuando los resultados son positivos, genera confianza, pero nunca garantiza la ausencia de fallos.",
          example:
            "Como el informe médico antes de una operación: no garantiza el resultado, pero permite decidir con datos.",
          useCase:
            "En la reunión go/no-go, el equipo revisa el informe de pruebas y decide lanzar la versión con evidencias.",
          mistake:
            "El testing informa decisiones; no demuestra ausencia de defectos.",
          syllabusRef: "Tema 1.2 — El testing y el éxito del proyecto",
        },
      ],
    },
    {
      id: "w1-l3",
      number: 3,
      title: "Principios del testing",
      topic: "Tema 1.3 — Principios del testing",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w1-l3-q1",
          topic: "1.3",
          question:
            "«El testing muestra la presencia de defectos, pero no su ausencia». ¿Qué significa exactamente?",
          options: [
            "Que el testing nunca puede encontrar la mayoría de los defectos presentes.",
            "Que aunque no encontremos defectos, pueden existir: se reduce la probabilidad.",
            "Que solo puede demostrarse la presencia de defectos si el usuario los reporta.",
            "Que los defectos solo existen antes de ejecutar las pruebas por primera vez.",
          ],
          correct: 1,
          explanation:
            "El testing puede demostrar que hay defectos, pero no puede demostrar que no los haya: las pruebas reducen la probabilidad de que queden defectos sin descubrir, sin garantizar su ausencia total.",
          example:
            "Encontrar 10 mosquitos en una habitación no prueba que no quede ninguno escondido; no encontrar ninguno tampoco prueba que esté limpia.",
          useCase:
            "Nunca se firma «cero defectos»: se informa «no se encontraron defectos en las pruebas ejecutadas».",
          mistake: "Ningún conjunto de pruebas puede demostrar la ausencia total de defectos.",
          syllabusRef: "Tema 1.3 — Principio 1: presencia de defectos, no ausencia",
        },
        {
          id: "w1-l3-q2",
          topic: "1.3",
          question: "¿Por qué el testing exhaustivo es imposible?",
          options: [
            "Porque los testers no tienen suficiente formación técnica y experiencia.",
            "Porque las combinaciones de entradas y condiciones son astronómicas.",
            "Porque las herramientas automáticas tienen límites de licencias y coste.",
            "Porque el software cambia por completo cada pocas semanas de desarrollo.",
          ],
          correct: 1,
          explanation:
            "Salvo casos triviales, probar todas las combinaciones es inviable. En lugar de intentarlo, se aplican técnicas, priorización basada en riesgos y criterios de cobertura.",
          example:
            "Un formulario con 20 campos de 10 valores posibles tiene 10^20 combinaciones: nadie puede probarlas todas.",
          useCase:
            "El equipo prueba primero los flujos de pago y alta de usuarios (mayor riesgo) y deja para después los textos de ayuda.",
          mistake:
            "Exhaustivo no significa completo: se sustituye por priorización basada en el riesgo.",
          syllabusRef: "Tema 1.3 — Principio 2: el testing exhaustivo es imposible",
        },
        {
          id: "w1-l3-q3",
          topic: "1.3",
          question: "«Probar temprano ahorra tiempo y dinero» (shift left). ¿Cuál es un ejemplo?",
          options: [
            "Ejecutar todas las pruebas manuales justo el último día del proyecto.",
            "Revisar requisitos y diseño antes de programar, cuando corregir es más barato.",
            "Empezar a probar solo cuando el código esté terminado y estable.",
            "Automatizar únicamente las pruebas de interfaz de usuario.",
          ],
          correct: 1,
          explanation:
            "El testing temprano (shift left) adelanta las actividades de prueba y revisión a fases iniciales, cuando los defectos son más baratos de corregir y el ahorro es mayor.",
          example:
            "Detectar una ambigüedad en la historia de usuario cuesta una conversación; descubrirla en producción cuesta un parche urgente.",
          useCase:
            "El equipo añade una revisión de requisitos al inicio del sprint; los defectos se corrigen antes de escribir código.",
          mistake: "Shift left = adelantar las pruebas, no posponerlas.",
          syllabusRef: "Tema 1.3 — Principio 3: el testing temprano",
        },
        {
          id: "w1-l3-q4",
          topic: "1.3",
          question:
            "Un análisis muestra que el 80% de los fallos provienen de 2 de los 15 módulos del sistema. ¿Qué principio ilustra esto?",
          options: [
            "Que el testing exhaustivo es imposible de alcanzar en la práctica.",
            "Que los defectos se agrupan: pocos módulos concentran la mayoría de ellos.",
            "Que las pruebas se desgastan y dejan de encontrar defectos nuevos.",
            "Que el enfoque de testing depende del contexto de cada producto.",
          ],
          correct: 1,
          explanation:
            "El agrupamiento de defectos indica que los defectos tienden a concentrarse en pocos módulos (principio de Pareto): normalmente el 80% de los defectos está en el 20% de los componentes. Esto ayuda a priorizar el esfuerzo.",
          example:
            "En una casa, las goteras se agrupan: la mayoría de las filtraciones aparece en pocas tuberías.",
          useCase:
            "El test manager concentra más pruebas y regresiones en los módulos históricamente problemáticos.",
          mistake:
            "Agrupamiento = concentración desigual de defectos; no confundir con «los defectos se multiplican».",
          syllabusRef: "Tema 1.3 — Principio 4: agrupamiento de defectos",
        },
        {
          id: "w1-l3-q5",
          topic: "1.3",
          question:
            "El mismo conjunto de pruebas lleva meses sin encontrar defectos nuevos, aunque el software sigue cambiando. ¿Qué principio aplica y qué se debe hacer?",
          options: [
            "La falacia de ausencia de defectos; hay que dejar de probar definitivamente.",
            "Las pruebas se desgastan: hay que revisarlas y actualizar también los datos.",
            "El testing exhaustivo es imposible; hay que volver a probar todo cada vez.",
            "El testing depende del contexto; hay que cambiar de marco de trabajo.",
          ],
          correct: 1,
          explanation:
            "Los conjuntos de pruebas y sus datos se desgastan: dejan de encontrar defectos nuevos. Hay que revisarlos y actualizarlos periódicamente para reflejar cambios y nuevos riesgos (paradoja del pesticida).",
          example:
            "Las firmas de un antivirus deben actualizarse: las de ayer ya no detectan las amenazas de hoy.",
          useCase:
            "Cada trimestre, el equipo revisa su plan de pruebas y renueva casos y datos de entrada obsoletos.",
          mistake:
            "Los mismos casos de prueba dejan de ser efectivos: hay que renovarlos.",
          syllabusRef: "Tema 1.3 — Principio 5: las pruebas se desgastan",
        },
        {
          id: "w1-l3-q6",
          topic: "1.3",
          question: "¿Qué significa que «el testing depende del contexto»?",
          options: [
            "Que el testing se ejecuta distinto según el sistema operativo de cada equipo.",
            "Que el enfoque debe adaptarse al riesgo, al dominio y al desarrollo.",
            "Que hay que usar siempre el mismo proceso para poder comparar los resultados.",
            "Que el testing solo puede hacerse en entornos reales de producción.",
          ],
          correct: 1,
          explanation:
            "No existe una única forma de probar: el tipo y la profundidad del testing dependen del contexto, los riesgos y el dominio. Una app de banca prioriza seguridad; un videojuego, rendimiento y experiencia.",
          example:
            "El mantenimiento de un avión y el de una bicicleta no siguen el mismo plan, aunque ambos requieran revisión.",
          useCase:
            "Un hospital prioriza pruebas de seguridad de datos; una app de fotos prioriza rendimiento y usabilidad.",
          mistake: "No existe «la mejor manera única» de probar: el contexto manda.",
          syllabusRef: "Tema 1.3 — Principio 6: el testing depende del contexto",
        },
        {
          id: "w1-l3-q7",
          topic: "1.3",
          question:
            "Un sistema fue probado a fondo y cumple todos los requisitos, pero el cliente está descontento: no cubre sus necesidades reales. ¿Qué principio explica esto?",
          options: [
            "La falacia de ausencia de defectos: cumplir requisitos no cubre necesidades.",
            "El principio de que el testing exhaustivo es imposible de alcanzar.",
            "El principio de que las pruebas se desgastan con el tiempo.",
            "El principio de que los defectos se agrupan en pocos módulos.",
          ],
          correct: 0,
          explanation:
            "La falacia de la ausencia de defectos: un producto sin defectos técnicos puede no satisfacer las necesidades reales del usuario, por ejemplo si los requisitos están incompletos o son incorrectos. Hay que verificar Y validar.",
          example:
            "Un paraguas perfectamente construido que no te protege porque llueve de lado: sin defectos, pero no resuelve tu necesidad.",
          useCase:
            "El equipo entregó todas las historias aceptadas, pero el flujo no sirve al usuario real: faltó validar la necesidad.",
          mistake: "Verificación (¿bien construido?) no es lo mismo que validación (¿es lo necesario?).",
          syllabusRef: "Tema 1.3 — Principio 7: la ausencia de errores es una falacia",
        },
        {
          id: "w1-l3-q8",
          topic: "1.3",
          question: "¿Cuál de las siguientes afirmaciones sobre los principios del testing es CORRECTA?",
          options: [
            "Con suficiente automatización se puede alcanzar el testing exhaustivo.",
            "El principio del testing temprano solo aplica a proyectos en cascada.",
            "Revisar y actualizar las pruebas periódicamente contrarresta su desgaste.",
            "Si no se encuentran defectos, el software está libre de todo defecto.",
          ],
          correct: 2,
          explanation:
            "El desgaste de las pruebas se combate revisándolas y actualizándolas. El testing exhaustivo es imposible incluso con automatización, y no encontrar defectos no demuestra su ausencia.",
          example:
            "Renovar las preguntas de un examen evita que los alumnos las memoricen y mantiene la evaluación efectiva.",
          useCase:
            "El equipo renueva su suite de regresión para cubrir los módulos que más cambiaron en el último trimestre.",
          mistake:
            "Automatizar más no vuelve exhaustivo al testing: solo ejecuta más rápido lo que ya priorizaste.",
          syllabusRef: "Tema 1.3 — Principios del testing",
        },
      ],
    },
    {
      id: "w1-l4",
      number: 4,
      title: "Actividades, testware y roles",
      topic: "Tema 1.4 — Actividades de prueba, testware y roles",
      difficulty: "difícil",
      timePerQuestion: 75,
      lives: 3,
      questions: [
        {
          id: "w1-l4-q1",
          topic: "1.4",
          question: "¿Cuál es la primera actividad del proceso de testing?",
          options: [
            "La ejecución de los primeros casos de prueba del nivel.",
            "La planificación: definir objetivos, enfoque y estrategia de prueba.",
            "El diseño de los casos de prueba a partir de las condiciones.",
            "El cierre: archivar el testware y documentar lecciones.",
          ],
          correct: 1,
          explanation:
            "El proceso comienza con la planificación: se definen los objetivos de prueba, el enfoque, los recursos y se decide qué se va a probar y cómo.",
          example:
            "Como el plan de una mudanza: antes de mover cajas, decides qué llevas, en qué orden y con qué recursos.",
          useCase:
            "Al inicio del proyecto, el test manager elabora el plan de pruebas con alcance, riesgos y estimaciones.",
          mistake:
            "Orden del proceso: planificación → monitoreo y control (continuo) → análisis → diseño → implementación → ejecución → cierre.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q2",
          topic: "1.4",
          question: "Durante el ANÁLISIS de pruebas, ¿qué se produce?",
          options: [
            "El código de los tests automatizados y sus datos de entrada.",
            "La decisión de liberar el producto al mercado tras el hito.",
            "Las condiciones de prueba: qué probar, según bases y riesgos.",
            "Los resultados de la ejecución de las pruebas del ciclo.",
          ],
          correct: 2,
          explanation:
            "El análisis identifica las características a probar y define las condiciones de prueba (el «qué» probar), a partir de las bases de prueba (requisitos, diseño, riesgos, informes de defectos).",
          example:
            "Antes de redactar las preguntas de un examen, decides qué temas entran y con qué profundidad.",
          useCase:
            "El tester analiza las historias del sprint y deriva condiciones de prueba ligadas a los criterios de aceptación.",
          mistake:
            "Análisis = condiciones (qué); diseño = casos (cómo); implementación = dejarlo listo para ejecutar.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q3",
          topic: "1.4",
          question: "En el DISEÑO de pruebas, los testers…",
          options: [
            "…transforman las condiciones en casos concretos con datos y resultados esperados.",
            "…ejecutan las pruebas y comparan los resultados reales con los esperados.",
            "…escriben el informe de cierre y archivan el testware del proyecto.",
            "…definen la estrategia comercial y el presupuesto de la empresa.",
          ],
          correct: 0,
          explanation:
            "El diseño convierte el «qué probar» (condiciones) en el «cómo probar» (casos y conjuntos de pruebas), cubriendo requisitos y riesgos.",
          example:
            "Como pasar de «probar el envío de paquetes» a diseñar los pasos concretos: paquete válido, peso límite, dirección inválida.",
          useCase:
            "El tester diseña casos para la condición «recuperar contraseña» con entradas válidas, inválidas y valores límite.",
          mistake: "Diseñar (crear los casos) no es ejecutar (correr los casos).",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q4",
          topic: "1.4",
          question:
            "Preparar los datos de prueba, escribir scripts automatizados y organizar los casos en conjuntos de pruebas (suites) corresponde a…",
          options: [
            "La ejecución de las pruebas en el entorno de pruebas.",
            "La implementación de las pruebas y su preparación.",
            "El análisis de las bases de prueba y sus condiciones.",
            "El cierre de las pruebas y el archivo del testware.",
          ],
          correct: 1,
          explanation:
            "La implementación prepara todo para poder ejecutar: scripts, datos, entornos, procedimientos y la organización de casos en suites según su orden de ejecución.",
          example:
            "Como preparar la cocina antes de cocinar: ingredientes, utensilios y la receta ordenada.",
          useCase:
            "El equipo automatiza suites, genera datos de prueba y prepara el entorno antes de la regresión.",
          mistake: "Implementar es dejarlo todo listo; ejecutar es correrlo.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q5",
          topic: "1.4",
          question: "¿Qué ocurre durante la EJECUCIÓN de pruebas?",
          options: [
            "Se diseñan los casos de prueba a partir de las condiciones.",
            "Se ejecutan, se registran (pasó, falló) y se reportan defectos.",
            "Se archiva el testware reutilizable y las lecciones aprendidas.",
            "Se definen los objetivos y la estrategia del siguiente ciclo.",
          ],
          correct: 1,
          explanation:
            "En la ejecución se corren los casos en el orden previsto, se registra el resultado de cada uno, se documentan las anomalías y se generan reportes de defectos con evidencia suficiente.",
          example:
            "Como el acta de una carrera: quién pasó la meta, con qué tiempo y qué incidencias ocurrieron.",
          useCase:
            "Al ejecutar la regresión, 3 casos fallan: se documentan con logs y capturas y se reportan como defectos.",
          mistake: "Ejecutar incluye registrar y reportar: no es solo hacer clic.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q6",
          topic: "1.4",
          question: "En el CIERRE del testing, una actividad típica es…",
          options: [
            "…ejecutar por primera vez el plan de pruebas del proyecto.",
            "…conservar el testware, documentar lecciones y comunicar el estado.",
            "…diseñar los casos de prueba de la próxima versión del producto.",
            "…corregir los defectos pendientes antes del cierre del proyecto.",
          ],
          correct: 1,
          explanation:
            "El cierre ocurre cuando el testing finaliza (liberación, hito alcanzado o proyecto cancelado): se conserva el testware útil, se documentan lecciones aprendidas y se comunica el estado final.",
          example:
            "Como cerrar el curso: guardas los apuntes que servirán, resumes lo aprendido y entregas el informe final.",
          useCase:
            "Al liberar la versión, el equipo archiva las suites exitosas para la próxima regresión y documenta qué funcionó.",
          mistake: "El cierre no corrige defectos: preserva conocimiento y artefactos para el futuro.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q7",
          topic: "1.4",
          question: "¿Cuál de los siguientes es testware típico del proceso de testing?",
          options: [
            "El expediente académico y la titulación del tester.",
            "El plan de pruebas, los casos y los informes de defectos.",
            "El manual de marca y la guía de estilo de la empresa.",
            "La nómina y los contratos del personal de la empresa.",
          ],
          correct: 1,
          explanation:
            "El testware son los productos de trabajo creados durante el proceso: planes, condiciones y casos de prueba, procedimientos, datos, informes de ejecución y reportes de defectos.",
          example:
            "Como los utensilios y apuntes de un chef: no son el plato final, pero es lo que produce mientras cocina.",
          useCase:
            "Al cambiar de proveedor, el equipo traspasa el testware (planes, casos, informes) para poder continuar el testing.",
          mistake: "No todo lo que produce el equipo es testware: solo lo que da soporte directo a las pruebas.",
          syllabusRef: "Tema 1.4 — Testware",
        },
        {
          id: "w1-l4-q8",
          topic: "1.4",
          question: "¿Para qué sirve la trazabilidad entre las bases de prueba y el testware?",
          options: [
            "Para decorar el informe final que se entrega al cliente.",
            "Para evaluar cobertura, medir el impacto de cambios y dar evidencias.",
            "Para aumentar de forma automática los defectos detectados.",
            "Para no tener que diseñar ni escribir casos de prueba nuevos.",
          ],
          correct: 1,
          explanation:
            "La trazabilidad vincula requisitos u otras bases con los casos que los cubren: permite medir cobertura, evaluar el impacto de cambios (qué re-probar) y demostrar conformidad ante auditorías.",
          example:
            "Como el índice de un libro: si cambias el capítulo 3, sabes exactamente qué páginas revisar.",
          useCase:
            "Un auditor pide evidencia de que cada requisito regulado tiene pruebas asociadas: la matriz de trazabilidad lo demuestra.",
          mistake: "Sin trazabilidad, cualquier cambio te obliga a «reprobar todo por si acaso».",
          syllabusRef: "Tema 1.4 — Trazabilidad",
        },
        {
          id: "w1-l4-q9",
          topic: "1.4",
          question: "¿Qué describe mejor la diferencia entre el test manager y el tester?",
          options: [
            "El test manager ejecuta los casos y el tester planifica las pruebas.",
            "El test manager se enfoca en la gestión y el tester en el trabajo técnico.",
            "El test manager no trabaja con personas ni coordina al equipo.",
            "El tester solo redacta documentos y no ejecuta ningún caso.",
          ],
          correct: 1,
          explanation:
            "El test manager lidera las actividades de prueba, gestionando recursos, riesgos y planes; el tester tiene el foco técnico: analiza, diseña, ejecuta y reporta. En proyectos pequeños, ambos roles pueden recaer en la misma persona.",
          example:
            "Como en un rodaje: producción gestiona tiempos y recursos; el equipo técnico rueda y revisa las tomas.",
          useCase:
            "En equipos grandes los roles se separan; en startups una misma persona planifica y ejecuta.",
          mistake: "El tester también analiza y diseña; no solo ejecuta pruebas.",
          syllabusRef: "Tema 1.4 — Roles en el testing",
        },
        {
          id: "w1-l4-q10",
          topic: "1.4",
          question: "El monitoreo y control del testing…",
          options: [
            "…solo se realiza una vez, al final, para cerrar el proyecto.",
            "…es continuo: compara el progreso con el plan y aplica correcciones.",
            "…consiste en ejecutar manualmente todos los casos de prueba.",
            "…lo realiza siempre el cliente al recibir el producto final.",
          ],
          correct: 1,
          explanation:
            "Monitoreo y control acompaña todo el proceso: compara el progreso con el plan, verifica los criterios de salida y aplica acciones correctivas (ajustar alcance, prioridades o recursos).",
          example:
            "Como el GPS de un viaje: te compara continuamente con la ruta y te avisa si debes desviarte.",
          useCase:
            "A mitad del sprint, el test manager detecta retraso en la regresión, reasigna recursos y prioriza los casos críticos.",
          mistake: "El control se ejerce durante todo el proyecto, no solo al final.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
        {
          id: "w1-l4-q11",
          type: "multi",
          topic: "1.4",
          question:
            "Selecciona las DOS opciones que describen correctamente las actividades del proceso de testing.",
          options: [
            "El análisis define las condiciones de prueba a partir de las bases y los riesgos.",
            "La implementación prepara scripts, datos y suites listos para ejecutar.",
            "La ejecución comienza cuando el diseño de casos aún está sin terminar.",
            "El cierre del testing consiste en corregir los defectos que quedaron pendientes.",
            "La planificación se limita a pedir presupuesto y asignar testers al proyecto.",
          ],
          correct: [0, 1],
          explanation:
            "El análisis deriva las condiciones de prueba de las bases y los riesgos, y la implementación deja todo listo (scripts, datos, suites) para poder ejecutar. La ejecución requiere el diseño terminado, el cierre no corrige defectos y la planificación va mucho más allá del presupuesto.",
          example: "Antes de cocinar: primero eliges los platos (análisis) y luego preparas los ingredientes (implementación).",
          useCase: "El tester deriva condiciones de las historias y después prepara datos y suites para la regresión.",
          mistake: "Confundir implementación (preparar) con ejecución (correr), y cierre con corrección de defectos.",
          syllabusRef: "Tema 1.4 — Actividades del proceso de testing",
        },
      ],
    },
    {
      id: "w1-l5",
      number: 5,
      title: "Habilidades y buenas prácticas del tester",
      topic: "Tema 1.5 — Habilidades y buenas prácticas del tester",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w1-l5-q1",
          topic: "1.5",
          question: "¿Cuál es una habilidad de comunicación clave para un tester?",
          options: [
            "Escribir informes largos y muy técnicos para impresionar al equipo.",
            "Comunicar los hallazgos con precisión y adaptados a cada audiencia.",
            "Evitar hablar con los desarrolladores para no influir en ellos.",
            "Corregir los defectos directamente en el código sin avisar.",
          ],
          correct: 1,
          explanation:
            "La comunicación eficaz es esencial: reportar defectos con claridad y evidencia, adaptando el mensaje a audiencias técnicas y no técnicas, y manteniéndolo constructivo (sin culpabilizar personas).",
          example:
            "Un buen reporte dice qué se hizo, qué se esperaba y qué ocurrió; no dice «tu código está mal».",
          useCase:
            "En la reunión diaria, el tester resume riesgos para negocio y detalles técnicos para desarrollo.",
          mistake: "Reportar defectos es informar sobre el producto, no atacar a las personas.",
          syllabusRef: "Tema 1.5 — Habilidades del tester",
        },
        {
          id: "w1-l5-q2",
          topic: "1.5",
          question:
            "El desarrollador dice: «funciona en mi máquina». ¿Qué habilidad ayuda al tester a investigar esa afirmación?",
          options: [
            "La obediencia: aceptar sin más lo que afirma el desarrollador.",
            "El pensamiento crítico: cuestionar supuestos y verificar con evidencias.",
            "La creatividad: proponer un tema distinto para evitar el conflicto.",
            "La atención al detalle: revisar la ortografía de los mensajes.",
          ],
          correct: 1,
          explanation:
            "El pensamiento crítico y el escepticismo profesional permiten cuestionar afirmaciones («en mi máquina sí funciona») e investigar diferencias de entorno, datos o configuraciones hasta obtener evidencia.",
          example:
            "Como un periodista ante un rumor: no basta con que alguien lo diga, hay que verificarlo.",
          useCase:
            "El tester pide la versión exacta, los datos y la configuración con la que se probó para reproducir el caso.",
          mistake: "«En mi máquina funciona» no es evidencia suficiente: hay que verificar condiciones.",
          syllabusRef: "Tema 1.5 — Habilidades del tester",
        },
        {
          id: "w1-l5-q3",
          topic: "1.5",
          question: "¿Por qué el conocimiento del dominio (negocio) es valioso para un tester?",
          options: [
            "Porque le permite sustituir al product owner en las decisiones clave.",
            "Porque le ayuda a anticipar riesgos y a comunicarse con el negocio.",
            "Porque así ejecuta los clics de las pruebas mucho más rápido.",
            "Porque elimina la necesidad de leer los requisitos del sistema.",
          ],
          correct: 1,
          explanation:
            "Entender el dominio y el producto permite reconocer casos límite reales y riesgos de negocio importantes, priorizar mejor y conversar con los interesados en su propio lenguaje.",
          example:
            "Un tester que conoce la facturación intuye que los impuestos por región son un caso crítico que otros pasarían por alto.",
          useCase:
            "Antes del sprint, el tester con experiencia en seguros identifica reglas de negocio que las historias no mencionan.",
          mistake: "Conocer el negocio no reemplaza la evidencia: sigue siendo necesario probar.",
          syllabusRef: "Tema 1.5 — Habilidades del tester",
        },
        {
          id: "w1-l5-q4",
          topic: "1.5",
          question: "¿Cómo ayudan la curiosidad y la atención al detalle al tester?",
          options: [
            "Explorando en busca de comportamientos inesperados e inconsistencias.",
            "Encontrando siempre el 100% de los defectos de cada versión.",
            "Terminando antes las pruebas, sin necesidad de ejecutar casos.",
            "Evitando documentar los hallazgos para ahorrar tiempo.",
          ],
          correct: 0,
          explanation:
            "La curiosidad impulsa a explorar más allá del guion (testing exploratorio) y la atención al detalle permite detectar anomalías pequeñas pero significativas.",
          example:
            "Un buen detective pregunta «¿y si…?» y revisa el detalle que todos los demás pasaron por alto.",
          useCase:
            "En una sesión exploratoria, el tester descubre que el carrito acepta importes negativos: nadie lo había especificado.",
          mistake: "Curiosidad sin método puede desordenar: combínala con técnicas de prueba.",
          syllabusRef: "Tema 1.5 — Habilidades del tester",
        },
        {
          id: "w1-l5-q5",
          topic: "1.5",
          question:
            "¿Cuál es una VENTAJA de la independencia del tester respecto del equipo de desarrollo?",
          options: [
            "Tiene menos incentivos para ignorar los errores más comunes.",
            "Ve el producto con menos sesgos y detecta defectos distintos.",
            "Conoce mejor el código interno y por eso no necesita probar.",
            "Trabaja mucho más rápido porque no habla con nadie del equipo.",
          ],
          correct: 1,
          explanation:
            "La independencia (un tester fuera del equipo que creó el producto) reduce sesgos de confirmación: los autores tienden a no ver sus propios errores. Mayor independencia se asocia a mayor probabilidad de detectar defectos distintos.",
          example:
            "El corrector de tu examen no eres tú: ves mejor los errores ajenos que los propios.",
          useCase:
            "La empresa contrata una auditoría externa de seguridad para la versión anual del sistema.",
          mistake: "Independencia no es blanco o negro: los autores también deben probar sus productos.",
          syllabusRef: "Tema 1.5 — Independencia del testing",
        },
        {
          id: "w1-l5-q6",
          topic: "1.5",
          question: "¿Cuál es una DESVENTAJA de la independencia total del tester?",
          options: [
            "Que el tester conoce demasiado bien el negocio de la empresa.",
            "Que puede aislarlo del equipo y darle menos contexto del producto.",
            "Que encuentra demasiados defectos y retrasa el proyecto entero.",
            "Que no puede ejecutar las pruebas de regresión necesarias.",
          ],
          correct: 1,
          explanation:
            "La independencia tiene niveles: más independencia reduce sesgos, pero puede traer desventajas como el aislamiento del equipo, información de contexto limitada y responsabilidad difusa. Hay que buscar el equilibrio.",
          example:
            "Un auditor externo ve con ojos frescos, pero no conoce la historia ni las decisiones del día a día.",
          useCase:
            "El equipo equilibra revisión cruzada diaria con auditorías externas puntuales.",
          mistake: "Ni independencia total ni cero independencia: el nivel adecuado depende del contexto.",
          syllabusRef: "Tema 1.5 — Independencia del testing",
        },
        {
          id: "w1-l5-q7",
          topic: "1.5",
          question: "¿Qué implica el enfoque de equipo completo (whole team approach)?",
          options: [
            "Que solo el test manager se responsabiliza de la calidad del producto.",
            "Que la calidad es responsabilidad compartida de todo el equipo.",
            "Que los desarrolladores dejan de escribir código de producción.",
            "Que el testing lo realiza únicamente el cliente al final del proyecto.",
          ],
          correct: 1,
          explanation:
            "En el enfoque de equipo completo, cualquier miembro puede asumir tareas de prueba según su experiencia; la responsabilidad de la calidad es compartida, lo que reduce cuellos de botella y mejora la colaboración.",
          example:
            "Como en un equipo de fútbol: todos defienden cuando toca, no solo el portero.",
          useCase:
            "En el sprint, desarrollo y negocio analizan casos límite junto al tester antes de implementar.",
          mistake: "Equipo completo no elimina el rol de tester: optimiza la colaboración.",
          syllabusRef: "Tema 1.5 — Enfoque de equipo completo",
        },
        {
          id: "w1-l5-q8",
          topic: "1.5",
          question:
            "El tester propone probar el sistema en zonas sin conexión, un escenario que nadie había considerado. ¿Qué habilidad demuestra principalmente?",
          options: [
            "Creatividad: generar ideas, escenarios y pruebas que otros no han imaginado.",
            "Obediencia: seguir al pie de la letra lo escrito en los requisitos.",
            "Impuntualidad: perder el tiempo en escenarios irrelevantes.",
            "Rigidez metodológica: aplicar el proceso sin adaptarlo al contexto.",
          ],
          correct: 0,
          explanation:
            "La creatividad ayuda a generar escenarios, datos y pruebas novedosas que aumentan la eficacia del testing, especialmente en exploración y en situaciones poco documentadas.",
          example:
            "Un chef crea combinaciones nuevas con ingredientes de siempre y descubre platos que otros no ven.",
          useCase:
            "En la retrospectiva, el tester propone probar con conexión intermitente, escenario ausente de los requisitos.",
          mistake: "Creatividad con foco: acompáñala siempre de análisis de riesgos para priorizar.",
          syllabusRef: "Tema 1.5 — Habilidades del tester",
        },
      ],
    },
  ],
};
