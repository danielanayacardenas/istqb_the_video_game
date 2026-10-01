// =====================================================
// ISTQB Quest — data/worlds/world2.js
// Mundo 2: Testing a lo largo del SDLC (CTFL v4.0, cap. 2)
// Opciones equilibradas en longitud + multi-selección (Etapa 14, lote 3).
// =====================================================

export const world2 = {
  id: "w2",
  number: 2,
  title: "Testing a lo largo del SDLC",
  icon: "workflow",
  description:
    "Modelos de desarrollo, niveles de prueba, tipos de prueba y testing de mantenimiento.",
  levels: [
    {
      id: "w2-l1",
      number: 1,
      title: "Modelos de desarrollo (SDLC)",
      topic: "Tema 2.1 — Testing en el contexto del SDLC",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w2-l1-q1",
          topic: "2.1",
          question: "¿Cómo afecta el modelo de desarrollo al testing?",
          options: [
            "En cascada no se prueba nunca; solo se hacen pruebas en los proyectos ágiles.",
            "En cascada el testing tiende a ser una fase posterior; en ágil es continuo e integrado.",
            "En ágil no se documentan casos; en cascada se documenta absolutamente todo.",
            "El testing es idéntico en todos los modelos y no depende del ciclo de vida.",
          ],
          correct: 1,
          explanation:
            "El modelo de ciclo de vida influye en cuándo y cómo se prueba: en modelos secuenciales el testing tiende a concentrarse tras el desarrollo; en modelos iterativos/ágiles el testing es continuo y se integra en cada iteración.",
          example:
            "Cascada: pintar toda la casa y luego inspeccionarla. Ágil: revisar cada pared a medida que se pinta.",
          useCase:
            "Un equipo ágil integra pruebas en cada sprint; otro equipo en cascada ejecuta un hito de pruebas antes de la entrega.",
          mistake:
            "El testing siempre existe, pero su organización cambia según el modelo de desarrollo.",
          syllabusRef: "Tema 2.1 — Testing en el contexto del SDLC",
        },
        {
          id: "w2-l1-q2",
          topic: "2.1",
          question: "¿Qué caracteriza al modelo en V respecto al testing?",
          options: [
            "El testing solo existe en la parte derecha de la V, sin relación con la izquierda.",
            "Cada fase de desarrollo tiene su fase de prueba asociada: se planifican en paralelo.",
            "Elimina la necesidad de ejecutar las pruebas de aceptación del cliente.",
            "Sustituye las revisiones y el testing estático por pruebas dinámicas.",
          ],
          correct: 1,
          explanation:
            "En el modelo en V, cada nivel de desarrollo (requisitos, diseño, implementación) se corresponde con un nivel de prueba (aceptación, sistema, integración, componente): las actividades de prueba se planifican desde el inicio.",
          example:
            "Como construir un edificio: mientras se diseña cada planta, se planifica su inspección correspondiente.",
          useCase:
            "El equipo de requisitos redacta en paralelo los criterios de las pruebas de aceptación.",
          mistake:
            "La V no retrasa el testing: lo planifica temprano, aunque la ejecución llegue después.",
          syllabusRef: "Tema 2.1 — Modelos secuenciales (V)",
        },
        {
          id: "w2-l1-q3",
          topic: "2.1",
          question:
            "En un enfoque DevOps con integración y entrega continuas (CI/CD), ¿qué cambia para el testing?",
          options: [
            "Se eliminan las pruebas de regresión automatizadas del proceso.",
            "El testing se automatiza y se ejecuta continuamente en el pipeline.",
            "Solo se prueba en producción para ahorrar tiempo y recursos.",
            "El testing pasa a ser responsabilidad exclusiva de operaciones.",
          ],
          correct: 1,
          explanation:
            "En DevOps, las pruebas se integran en el pipeline CI/CD: se ejecutan automáticamente con cada cambio, dando retroalimentación rápida. Los equipos de desarrollo, testing y operaciones trabajan de forma colaborativa.",
          example:
            "Como una línea de montaje con control de calidad en cada estación: cada pieza se verifica al pasar, no solo al final.",
          useCase:
            "Cada push ejecuta pruebas unitarias, de integración y humo automáticamente; si fallan, se bloquea el despliegue.",
          mistake:
            "CI/CD no elimina pruebas: las acelera y automatiza; las pruebas manuales exploratorias siguen aportando valor.",
          syllabusRef: "Tema 2.1 — DevOps y testing",
        },
        {
          id: "w2-l1-q4",
          topic: "2.1",
          question: "¿Qué significa el enfoque shift-right en el testing?",
          options: [
            "Retrasar todo el testing a la fase final del proyecto de desarrollo.",
            "Probar y monitorear en producción para captar el uso real.",
            "Trasladar al equipo de pruebas a la oficina de la derecha del edificio.",
            "Probar únicamente después de que ocurra un fallo grave en producción.",
          ],
          correct: 1,
          explanation:
            "Shift-right complementa al shift-left: consiste en probar y monitorear en producción o cerca de ella (A/B testing, canarios, monitoreo) para captar el comportamiento con usuarios y entornos reales.",
          example:
            "Como estrenar una película en salas selectas (preestreno) antes del estreno mundial para ver reacciones reales.",
          useCase:
            "La nueva versión se despliega primero al 5% de usuarios (canary release) y se monitorean errores y rendimiento.",
          mistake:
            "Shift-left adelanta pruebas; shift-right las lleva al uso real. Se complementan, no se excluyen.",
          syllabusRef: "Tema 2.1 — DevOps y testing (shift-right)",
        },
        {
          id: "w2-l1-q5",
          topic: "2.1",
          question: "¿Qué caracteriza al desarrollo guiado por pruebas (TDD)?",
          options: [
            "Los casos de prueba se escriben después de programar toda la funcionalidad.",
            "Primero se escribe una prueba que falla, luego el código que la pasa.",
            "Solo se aplica a las pruebas de interfaz de usuario y de API.",
            "Reemplaza por completo a las pruebas de aceptación del cliente.",
          ],
          correct: 1,
          explanation:
            "En TDD (Test-Driven Development) el ciclo es: escribir una prueba que falla (red), escribir el código mínimo para pasarla (green) y refactorizar. Las pruebas guían el diseño del código y se ejecutan en cada iteración.",
          example:
            "Como dibujar la silueta antes de esculpir: primero defines cómo se verá funcionando, luego construyes.",
          useCase:
            "Un desarrollador implementa una función de descuentos comenzando por sus pruebas de casos límite.",
          mistake:
            "TDD no es «probar después»: es un ciclo de diseño guiado por pruebas que se repite en cada unidad.",
          syllabusRef: "Tema 2.1 — Testing como mecanismo impulsor (TDD)",
        },
      ],
    },
    {
      id: "w2-l2",
      number: 2,
      title: "Niveles de prueba",
      topic: "Tema 2.2 — Niveles de prueba",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w2-l2-q1",
          topic: "2.2",
          question: "¿Cuáles son los niveles de prueba típicos, de menor a mayor?",
          options: [
            "Aceptación, sistema, integración, componente.",
            "Componente (unitario), integración, sistema y aceptación.",
            "Funcional, no funcional, caja blanca y caja negra.",
            "Unitario, regresión, humo y exploratorio.",
          ],
          correct: 1,
          explanation:
            "Los niveles de prueba estándar son: pruebas de componente, de integración, de sistema y de aceptación. Cada uno tiene sus objetivos, bases de prueba y objetos de prueba.",
          example:
            "Como revisar una casa: cada ladrillo (componente), cómo encajan los muros (integración), la casa completa (sistema) y la entrega al cliente (aceptación).",
          useCase:
            "Un equipo prueba funciones aisladas, luego la API con la base de datos, después el sistema completo y finalmente con usuarios piloto.",
          mistake:
            "Los tipos de prueba (funcional/no funcional) no son niveles: un tipo puede aplicarse en varios niveles.",
          syllabusRef: "Tema 2.2 — Niveles de prueba",
        },
        {
          id: "w2-l2-q2",
          topic: "2.2",
          question: "Las pruebas de componente (unitarias)…",
          options: [
            "…prueban el sistema completo de extremo a extremo en producción.",
            "…prueban unidades de forma aislada usando stubs o mocks.",
            "…las ejecuta siempre el usuario final desde su navegador.",
            "…son siempre pruebas de rendimiento y de seguridad.",
          ],
          correct: 1,
          explanation:
            "Las pruebas de componente verifican cada unidad o componente por separado, aislándolo del resto mediante stubs, drivers o mocks. Suelen ser responsabilidad de los desarrolladores.",
          example:
            "Como probar cada ingrediente por separado antes de combinarlos: el azúcar, la harina, el huevo.",
          useCase:
            "El desarrollador prueba una función de cálculo de intereses con datos simulados de entrada.",
          mistake:
            "Aislar es la clave: en componente no interviene toda la aplicación.",
          syllabusRef: "Tema 2.2 — Pruebas de componente",
        },
        {
          id: "w2-l2-q3",
          topic: "2.2",
          question: "¿Qué se busca principalmente en las pruebas de integración?",
          options: [
            "Verificar la apariencia visual y la usabilidad de la interfaz.",
            "Detectar defectos en las interfaces entre componentes o sistemas.",
            "Validar el plan de negocio y los objetivos comerciales de la empresa.",
            "Probar el rendimiento del servidor directamente en producción.",
          ],
          correct: 1,
          explanation:
            "Las pruebas de integración se centran en las interacciones: comunicación entre componentes, APIs, base de datos y sistemas externos, buscando defectos en las interfaces.",
          example:
            "Como revisar que la tubería A conecta bien con la tubería B: por separado funcionan, juntas deben hacerlo también.",
          useCase:
            "Se prueba que el servicio de pedidos se comunique correctamente con el servicio de pagos.",
          mistake:
            "Integración no es sistema: aquí importan las conexiones, no el flujo completo de extremo a extremo.",
          syllabusRef: "Tema 2.2 — Pruebas de integración",
        },
        {
          id: "w2-l2-q4",
          topic: "2.2",
          question: "Las pruebas de sistema…",
          options: [
            "…verifican el sistema completo, funcional y no funcional.",
            "…solo verifican las unidades individuales de código aisladas.",
            "…son responsabilidad exclusiva del usuario final del sistema.",
            "…se ejecutan antes que las pruebas de integración de módulos.",
          ],
          correct: 0,
          explanation:
            "Las pruebas de sistema evalúan el sistema completo e integrado, de extremo a extremo, cubriendo tanto requisitos funcionales como no funcionales (rendimiento, seguridad, usabilidad…) en un entorno representativo.",
          example:
            "Como probar el coche completo en pista: motor, frenos, dirección y electrónica trabajando juntos.",
          useCase:
            "El equipo ejecuta el flujo completo de compra, incluida la pasarela de pago en un entorno de pruebas.",
          mistake:
            "Sistema = todo el producto integrado; componente e integración van antes.",
          syllabusRef: "Tema 2.2 — Pruebas de sistema",
        },
        {
          id: "w2-l2-q5",
          topic: "2.2",
          question: "¿Cuál es el objetivo principal de las pruebas de aceptación?",
          options: [
            "Encontrar la mayor cantidad posible de defectos técnicos.",
            "Generar confianza en que cubre las necesidades del usuario.",
            "Medir la cobertura de código alcanzada por las pruebas.",
            "Probar la base de datos del sistema y sus consultas.",
          ],
          correct: 1,
          explanation:
            "Las pruebas de aceptación verifican que el sistema cumple las necesidades y expectativas del usuario/negocio, y los criterios acordados. Están enfocadas a la confianza y a la validación, no a la caza masiva de defectos.",
          example:
            "Como la prueba de manejo antes de comprar el coche: no busca averías, confirma que cumple lo que necesitas.",
          useCase:
            "El cliente valida los flujos de compra y facturación con sus propios datos antes de autorizar el despliegue.",
          mistake:
            "Aceptación = validar necesidades y criterios; no es una fase de testing técnico intensivo.",
          syllabusRef: "Tema 2.2 — Pruebas de aceptación",
        },
        {
          id: "w2-l2-q6",
          topic: "2.2",
          question: "¿Qué diferencia clave hay entre niveles de prueba?",
          options: [
            "Ninguno: todos comparten las mismas bases de prueba y objetivos.",
            "Cada nivel tiene objetivos, bases de prueba y defectos típicos propios.",
            "Solo el nivel de componente tiene una base de prueba definida.",
            "Los niveles solo se diferencian en el informe que producen.",
          ],
          correct: 1,
          explanation:
            "Cada nivel se caracteriza por: sus objetivos específicos, la base de prueba que consume (código, diseño, requisitos...), los objetos que prueba y los defectos típicos que busca.",
          example:
            "Como las revisiones de una construcción: el arquitecto revisa planos, el electricista el cableado y el cliente la casa terminada.",
          useCase:
            "Componente parte del código; sistema parte de los requisitos; aceptación parte de las necesidades del negocio.",
          mistake:
            "No todas las bases de prueba sirven para todos los niveles: cada nivel tiene la suya.",
          syllabusRef: "Tema 2.2 — Niveles de prueba",
        },
        {
          id: "w2-l2-q7",
          topic: "2.2",
          question: "¿Cuáles son formas típicas de prueba de aceptación?",
          options: [
            "Aceptación de usuario, operacional, contractual y alfa/beta.",
            "Caja blanca, caja negra y caja gris en sus distintas variantes.",
            "Únicamente pruebas automatizadas ejecutadas por el equipo.",
            "Pruebas unitarias y de integración entre los componentes.",
          ],
          correct: 0,
          explanation:
            "Entre las formas de aceptación están: UAT (usuarios validan), operacional (aceptación de operaciones/soporte), contractual y regulatoria (cumplimiento), y alfa/beta (en instalaciones del cliente o en mercado).",
          example:
            "Como cuando un restaurante hace una degustación privada (alfa) antes de abrir al público (beta).",
          useCase:
            "Una entidad financiera exige pruebas regulatorias de aceptación antes de autorizar el lanzamiento.",
          mistake:
            "La aceptación no la hace solo «el usuario»: también operaciones, auditores o clientes beta.",
          syllabusRef: "Tema 2.2 — Pruebas de aceptación",
        },
        {
          id: "w2-l2-q8",
          topic: "2.2",
          question: "¿Quién suele ser responsable de las pruebas de aceptación?",
          options: [
            "Los usuarios o el negocio, con apoyo del equipo de pruebas.",
            "Exclusivamente los desarrolladores que construyeron el sistema.",
            "Exclusivamente el equipo de operaciones de TI de la empresa.",
            "Nadie: se omiten siempre por falta de tiempo en el proyecto.",
          ],
          correct: 0,
          explanation:
            "Las pruebas de aceptación las lideran los usuarios/negocio/cliente (a veces un cliente externo), con el apoyo del equipo de testing. Su objetivo es validar el valor para el usuario.",
          example:
            "Como quien vive la casa es quien decide si le gusta cómo quedó, no solo el constructor.",
          useCase:
            "El product owner ejecuta los escenarios de aceptación de la épica antes de marcar el incremento como «done».",
          mistake: "El equipo técnico apoya, pero la aceptación la valida el usuario/negocio.",
          syllabusRef: "Tema 2.2 — Pruebas de aceptación",
        },
        {
          id: "w2-l2-q9",
          type: "multi",
          topic: "2.2",
          question: "Selecciona las DOS afirmaciones correctas sobre las pruebas de aceptación.",
          options: [
            "Su objetivo es generar confianza en que el sistema cubre las necesidades del usuario.",
            "Pueden incluir formas como UAT, operacional, contractual y alfa/beta.",
            "Buscan encontrar la mayor cantidad posible de defectos técnicos.",
            "Las realiza siempre el equipo de desarrollo, sin participación del negocio.",
            "Sustituyen a las pruebas de sistema dentro del proceso de testing.",
          ],
          correct: [0, 1],
          explanation:
            "Las pruebas de aceptación buscan confianza y validación de las necesidades del usuario, y adoptan formas como UAT, operacional, contractual/regulatoria y alfa/beta. No son una cacería de defectos técnicos, no las ejecuta solo desarrollo y no sustituyen a las pruebas de sistema.",
          example:
            "Antes de abrir el restaurante, los dueños prueban el menú completo (aceptación), no cada sartén.",
          useCase:
            "El negocio valida los flujos clave con sus propios datos antes de autorizar el despliegue.",
          mistake:
            "Confundir la aceptación (validar necesidades) con las pruebas de sistema (verificar el producto completo).",
          syllabusRef: "Tema 2.2 — Pruebas de aceptación",
        },
      ],
    },
    {
      id: "w2-l3",
      number: 3,
      title: "Tipos de prueba",
      topic: "Tema 2.2 — Tipos de prueba",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w2-l3-q1",
          topic: "2.2",
          question: "¿Cuál de las siguientes es una prueba NO funcional?",
          options: [
            "Verificar que el cálculo mensual de la nómina es correcto.",
            "Verificar que la app responde en menos de 2 segundos bajo carga.",
            "Verificar que el login rechaza las contraseñas incorrectas.",
            "Verificar que el botón «Guardar» persiste los datos del formulario.",
          ],
          correct: 1,
          explanation:
            "Las pruebas no funcionales evalúan atributos de calidad (rendimiento, seguridad, usabilidad, fiabilidad…). Verificar el tiempo de respuesta bajo carga es una prueba de rendimiento, no funcional.",
          example:
            "Como probar si un coche frena bien (funcional) versus probar si aguanta lluvia y nieve (no funcional).",
          useCase:
            "Antes del lanzamiento, se prueba que el sitio soporte la carga de una campaña de ventas.",
          mistake:
            "Funcional = qué hace; no funcional = cómo se comporta.",
          syllabusRef: "Tema 2.2 — Tipos de prueba",
        },
        {
          id: "w2-l3-q2",
          topic: "2.2",
          question: "¿Cuál de los siguientes grupos son tipos de prueba no funcional?",
          options: [
            "Rendimiento, seguridad, usabilidad y portabilidad.",
            "Componente, integración, sistema y aceptación del usuario.",
            "Caja blanca, caja negra y caja gris aplicadas al código.",
            "Humo, regresión y confirmación sobre la funcionalidad.",
          ],
          correct: 0,
          explanation:
            "Entre los tipos no funcionales están: rendimiento, carga, estrés, seguridad, usabilidad, accesibilidad, portabilidad, fiabilidad, mantenibilidad y compatibilidad.",
          example:
            "Como evaluar un auto por velocidad, confort, consumo y seguridad, no solo por si avanza.",
          useCase:
            "Un hospital exige pruebas de seguridad y accesibilidad antes de desplegar su portal de pacientes.",
          mistake:
            "Unidad/integración son niveles; humo/regresión son tipos de prueba funcional o de práctica de ejecución.",
          syllabusRef: "Tema 2.2 — Tipos de prueba",
        },
        {
          id: "w2-l3-q3",
          topic: "2.2",
          question: "¿Qué distingue a las pruebas de caja negra de las de caja blanca?",
          options: [
            "La caja negra usa la especificación; la blanca, la estructura interna.",
            "La caja negra se ejecuta únicamente de noche, sin usuarios.",
            "La caja blanca solo la pueden realizar los usuarios finales.",
            "No existen diferencias reales entre caja negra y caja blanca.",
          ],
          correct: 0,
          explanation:
            "Las pruebas de caja negra derivan de la especificación (comportamiento externo observable); las de caja blanca derivan de la estructura interna (código, diseño). Ambos enfoques se complementan.",
          example:
            "Caja negra: usar la app como un usuario. Caja blanca: rayos X del código para ver qué caminos nunca se ejecutan.",
          useCase:
            "El tester escribe casos desde los requisitos (negra); el desarrollador mide cobertura de ramas (blanca).",
          mistake:
            "Ninguna técnica es mejor: la caja negra encuentra defectos de comportamiento, la blanca de implementación.",
          syllabusRef: "Tema 2.2 — Tipos de prueba",
        },
        {
          id: "w2-l3-q4",
          topic: "2.2",
          question: "Las pruebas funcionales verifican…",
          options: [
            "…el «qué hace» el sistema, según los requisitos funcionales.",
            "…cómo se comporta el sistema cuando está bajo carga.",
            "…la estructura interna y la cobertura del código fuente.",
            "…la estética y el atractivo visual del producto.",
          ],
          correct: 0,
          explanation:
            "Las pruebas funcionales comprueban qué hace el sistema: qué funciones ejecuta y si se comportan según los requisitos y la especificación funcional.",
          example:
            "Como comprobar que un cajero entrega el dinero correcto cuando lo pides (funcional) vs medir cuánto tarda (no funcional).",
          useCase:
            "Los casos de regresión funcional verifican altas, bajas, consultas y cálculos del sistema.",
          mistake: "Funcional = comportamiento y resultados; no evalúa atributos de calidad.",
          syllabusRef: "Tema 2.2 — Tipos de prueba",
        },
        {
          id: "w2-l3-q5",
          topic: "2.2",
          question: "Las pruebas NO funcionales evalúan…",
          options: [
            "…el «qué hace» el sistema y si cumple sus funciones.",
            "…cómo se comporta: rendimiento, usabilidad o seguridad.",
            "…solo la interfaz gráfica y sus elementos visuales.",
            "…únicamente la documentación técnica del proyecto.",
          ],
          correct: 1,
          explanation:
            "Las pruebas no funcionales evalúan cómo se comporta el sistema: atributos de calidad como rendimiento, usabilidad, seguridad, accesibilidad, fiabilidad y portabilidad.",
          example:
            "Como evaluar una moto no solo por avanzar, sino por frenar, consumir y ser estable a alta velocidad.",
          useCase:
            "Se ejecutan pruebas de estrés para validar que la app aguanta el pico de demanda de fin de año.",
          mistake:
            "«No funcional» no significa «sin función»: son atributos distintos a la funcionalidad.",
          syllabusRef: "Tema 2.2 — Tipos de prueba",
        },
        {
          id: "w2-l3-q6",
          topic: "2.2",
          question:
            "¿Cuál es la diferencia entre las pruebas de confirmación (retesting) y las de regresión?",
          options: [
            "Son exactamente lo mismo y se ejecutan en el mismo momento.",
            "El retesting confirma la corrección; la regresión busca efectos.",
            "La regresión solo aplica a las pruebas de interfaz gráfica.",
            "El retesting se realiza únicamente sobre producción.",
          ],
          correct: 1,
          explanation:
            "El retesting (confirmación) comprueba que el defecto reportado se corrigió. Las pruebas de regresión verifican que los cambios no introdujeron nuevos defectos en las áreas que ya funcionaban.",
          example:
            "El retesting pregunta «¿se arregló la gotera?»; la regresión pregunta «¿la reparación no rompió el techo?».",
          useCase:
            "Tras corregir un bug en el cálculo de impuestos, se confirma el caso reportado y se reejecuta la suite del módulo financiero.",
          mistake:
            "Un defecto cerrado sin retesting puede volver; sin regresión, los arreglos pueden romper otras funciones.",
          syllabusRef: "Tema 2.2 — Pruebas de confirmación y regresión",
        },
        {
          id: "w2-l3-q7",
          topic: "2.2",
          question:
            "Un desarrollador corrige un defecto crítico en el cálculo de impuestos. El tester verifica que el defecto ya no ocurre y después ejecuta la suite completa del módulo. ¿Qué hizo en cada paso?",
          options: [
            "Primero ejecutó pruebas de regresión y luego de confirmación.",
            "Primero retesting del defecto y luego regresión del módulo.",
            "Ambas ejecuciones fueron pruebas de aceptación del cliente.",
            "Ambas ejecuciones fueron pruebas de humo de la versión.",
          ],
          correct: 1,
          explanation:
            "El orden típico es: retesting para confirmar la corrección del defecto reportado y, después, regresión para verificar que el cambio no afectó a otras funcionalidades.",
          example:
            "Curas la gripe (confirmación) y luego revisas que la medicina no haya afectado otro órgano (regresión).",
          useCase:
            "El pipeline primero ejecuta el caso del defecto y luego la regresión completa antes de fusionar el cambio.",
          mistake: "El retesting es focalizado; la regresión es amplia y busca efectos colaterales.",
          syllabusRef: "Tema 2.2 — Pruebas de confirmación y regresión",
        },
        {
          id: "w2-l3-q8",
          topic: "2.2",
          question: "¿Cuál de las siguientes afirmaciones sobre tipos de prueba es CORRECTA?",
          options: [
            "Un tipo de prueba puede realizarse en distintos niveles de prueba.",
            "Cada tipo de prueba pertenece a un único nivel de prueba.",
            "Las pruebas no funcionales solo se hacen en el nivel de componente.",
            "Las pruebas funcionales no aplican al nivel de aceptación.",
          ],
          correct: 0,
          explanation:
            "Los niveles (dónde) y los tipos (qué clase de atributo) son dimensiones independientes: se pueden hacer pruebas funcionales o no funcionales en cualquier nivel.",
          example:
            "Como preguntar por el sabor (funcional) o la temperatura (no funcional) en cualquier punto de la cocina: entrada, plato principal o postre.",
          useCase:
            "En pruebas de sistema se corren tanto escenarios funcionales como pruebas de rendimiento.",
          mistake:
            "Nivel ≠ tipo: un mismo tipo puede aplicarse en varios niveles y viceversa.",
          syllabusRef: "Tema 2.2 — Niveles y tipos de prueba",
        },
        {
          id: "w2-l3-q9",
          type: "multi",
          topic: "2.2",
          question: "Selecciona las DOS opciones que son ejemplos de pruebas NO funcionales.",
          options: [
            "Verificar que la app responde en menos de 2 segundos con carga alta.",
            "Comprobar que las contraseñas se almacenan cifradas y seguras.",
            "Validar que el cálculo de la nómina usa la tabla de impuestos correcta.",
            "Comprobar que el botón de guardar persiste los datos correctamente.",
            "Verificar que el informe mensual muestra las columnas acordadas.",
          ],
          correct: [0, 1],
          explanation:
            "El rendimiento (tiempo de respuesta bajo carga) y la seguridad (cifrado de contraseñas) son atributos de calidad, es decir, pruebas no funcionales. Las otras tres verifican funcionalidad: cálculos, persistencia y contenido de informes.",
          example:
            "Preguntar «¿llega rápido y viaja seguro?» es distinto de «¿lleva lo que pedí?».",
          useCase:
            "Antes de la campaña de ventas se prueban carga y seguridad, además de la funcionalidad del carrito.",
          mistake:
            "Verificar «qué hace» es funcional; verificar «cómo se comporta» es no funcional.",
          syllabusRef: "Tema 2.2 — Tipos de prueba",
        },
      ],
    },
    {
      id: "w2-l4",
      number: 4,
      title: "Testing de mantenimiento",
      topic: "Tema 2.3 — Testing de mantenimiento",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w2-l4-q1",
          topic: "2.3",
          question: "¿Cuál de los siguientes es un disparador (trigger) típico del testing de mantenimiento?",
          options: [
            "El primer sprint de un producto que todavía no existe.",
            "Modificaciones, migraciones o el retiro de un sistema.",
            "La escritura de la primera historia de usuario del backlog.",
            "La reunión de kick-off que inicia el proyecto desde cero.",
          ],
          correct: 1,
          explanation:
            "El testing de mantenimiento se dispara por cambios: modificaciones (correcciones, mejoras, adaptaciones), migraciones (de datos o plataforma) y retiros de sistema o funcionalidad.",
          example:
            "Como revisar un coche después de cambiarle el motor (modificación), de pasarlo a gas (migración) o antes de desguazarlo (retiro).",
          useCase:
            "Tras actualizar la versión de la base de datos, el equipo ejecuta pruebas de mantenimiento del área afectada.",
          mistake:
            "Mantenimiento ≠ solo corregir bugs: también incluye mejoras, adaptaciones, migraciones y retiros.",
          syllabusRef: "Tema 2.3 — Testing de mantenimiento",
        },
        {
          id: "w2-l4-q2",
          topic: "2.3",
          question: "¿Cuáles son las categorías típicas de mantenimiento de software?",
          options: [
            "Únicamente correctivo: arreglar los defectos reportados.",
            "Correctivo, adaptativo, perfectivo y preventivo.",
            "Solo preventivo y perfectivo, sin correcciones.",
            "Funcional, no funcional y estructural.",
          ],
          correct: 1,
          explanation:
            "El mantenimiento se clasifica en: correctivo (arreglar defectos), adaptativo (adaptarse a cambios del entorno), perfectivo (mejorar rendimiento o mantenibilidad) y preventivo (evitar problemas futuros).",
          example:
            "Como mantener una casa: reparar una fuga (correctivo), adaptarla a nueva normativa (adaptativo), mejorar la cocina (perfectivo) y cambiar el techo antes de que gotee (preventivo).",
          useCase:
            "El equipo planifica pruebas según el tipo de cambio: el correctivo exige retesting y regresión; el adaptativo, pruebas de integración con el nuevo entorno.",
          mistake: "Correctivo no es la única categoría: hay cuatro tipos clásicos de mantenimiento.",
          syllabusRef: "Tema 2.3 — Testing de mantenimiento",
        },
        {
          id: "w2-l4-q3",
          topic: "2.3",
          question: "¿Qué es el análisis de impacto y por qué es clave en el mantenimiento?",
          options: [
            "Un estudio financiero sobre los beneficios esperados del sistema.",
            "Evaluar cómo un cambio afecta al sistema y qué hay que reprobar.",
            "Un informe de marketing sobre el producto y sus usuarios.",
            "Una prueba de estrés sobre el servidor de aplicaciones.",
          ],
          correct: 1,
          explanation:
            "El análisis de impacto evalúa el alcance de un cambio sobre el sistema (módulos, interfaces, datos afectados). Determina qué pruebas de regresión son necesarias y evita probar de más o de menos.",
          example:
            "Como tirar de un hilo de una red: el análisis de impacto dice cuántos nudos se moverán con ese tirón.",
          useCase:
            "Antes de cambiar la pasarela de pago, el equipo marca los módulos dependientes y planifica su regresión.",
          mistake:
            "Sin análisis de impacto, la regresión se convierte en «probar todo por si acaso» o en no probar lo suficiente.",
          syllabusRef: "Tema 2.3 — Análisis de impacto",
        },
        {
          id: "w2-l4-q4",
          topic: "2.3",
          question:
            "Se va a modificar un sistema en producción. ¿Qué es imprescindible para gestionar el riesgo?",
          options: [
            "Reejecutar la regresión sobre las áreas que el análisis marque.",
            "Probar solo la funcionalidad modificada y no mirar el resto.",
            "No probar nada: los cambios pequeños nunca rompen nada.",
            "Reescribir el sistema completo desde cero para eliminar el riesgo.",
          ],
          correct: 0,
          explanation:
            "En mantenimiento, el riesgo está en los efectos colaterales. El análisis de impacto guía las pruebas de regresión de las áreas afectadas, incluidas sus integraciones.",
          example:
            "Como cuando mueves un mueble: revisa no solo el mueble, sino también el suelo y la pared que toca.",
          useCase:
            "Al actualizar un componente de autenticación, se reejecutan las pruebas de login, permisos y sesiones.",
          mistake:
            "«Es un cambio pequeño» es una trampa: los defectos de mantenimiento suelen aparecer en lo que dependía del código cambiado.",
          syllabusRef: "Tema 2.3 — Testing de mantenimiento",
        },
        {
          id: "w2-l4-q5",
          topic: "2.3",
          question: "¿Qué tipo de pruebas se necesitan antes de migrar datos a un sistema nuevo?",
          options: [
            "Pruebas de migración: verificar que los datos llegan completos.",
            "Solo una revisión visual de la pantalla de inicio de sesión.",
            "Ninguna: las migraciones las valida directamente el proveedor.",
            "Únicamente pruebas de usabilidad sobre la nueva interfaz.",
          ],
          correct: 0,
          explanation:
            "En una migración hay que probar que los datos llegan completos, sin pérdidas ni duplicados, con la transformación correcta y en un formato utilizable. También se prueba el sistema durante y después de la migración.",
          example:
            "Como mudarse de casa: cuenta que todos los platos llegaron y ninguno se rompió.",
          useCase:
            "Antes de migrar clientes del CRM viejo al nuevo, se comparan totales, formatos y campos obligatorios.",
          mistake:
            "Las migraciones requieren pruebas específicas: integridad, transformación y volumen de datos.",
          syllabusRef: "Tema 2.3 — Migraciones",
        },
        {
          id: "w2-l4-q6",
          topic: "2.3",
          question: "Cuando un sistema se retira (retirement)…",
          options: [
            "…no hace falta ningún tipo de testing porque deja de usarse.",
            "…hacen falta pruebas de archivado y de que no se pierdan datos.",
            "…se eliminan las pruebas de regresión sin revisarlas siquiera.",
            "…se prueba únicamente la nueva interfaz gráfica del reemplazo.",
          ],
          correct: 1,
          explanation:
            "El retiro también genera necesidades de prueba: archivar datos según normativa, cancelar integraciones, migrar procesos pendientes y asegurar que no se pierde información importante.",
          example:
            "Como cerrar una tienda: no basta apagar la luz; hay que archivar facturas, cancelar contratos y avisar a proveedores.",
          useCase:
            "Al retirar una app antigua, se prueba la exportación definitiva de datos y el aviso a los usuarios.",
          mistake: "El retiro no es solo apagar el servidor: hay riesgos de datos y procesos pendientes.",
          syllabusRef: "Tema 2.3 — Retiro del sistema",
        },
      ],
    },
  ],
};
