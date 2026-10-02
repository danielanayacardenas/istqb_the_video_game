// =====================================================
// ISTQB Quest — data/worlds/world4.js
// Mundo 4: Análisis y Diseño de Pruebas (CTFL v4.0, capítulo 4)
// Opciones equilibradas en longitud + multi-selección (Etapa 14, lote 5).
// =====================================================

export const world4 = {
  id: "w4",
  number: 4,
  title: "Análisis y Diseño de Pruebas",
  icon: "target",
  description:
    "Proceso de diseño, técnicas de caja negra, caja blanca, basadas en experiencia y enfoques colaborativos.",
  levels: [
    {
      id: "w4-l1",
      number: 1,
      title: "Análisis y diseño de pruebas",
      topic: "Tema 4.1 — Análisis y diseño de pruebas",
      difficulty: "fácil",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w4-l1-q1",
          topic: "4.1",
          question:
            "¿Qué actividad de prueba responde a la pregunta «qué probar», identificando capacidades testeables y condiciones de prueba?",
          options: [
            "El análisis de pruebas.",
            "El diseño de pruebas.",
            "La implementación de pruebas.",
            "La ejecución de pruebas.",
          ],
          correct: 0,
          explanation:
            "El análisis de pruebas examina la base de prueba (requisitos, diseño, código…) para identificar capacidades testeables y definir condiciones de prueba, respondiendo a «qué probar».",
          example:
            "Como estudiar una receta y decidir qué aspectos habrá que comprobar: cantidades, tiempos, temperatura.",
          useCase:
            "Antes de escribir casos, el tester analiza la historia de usuario y lista las condiciones a verificar.",
          mistake:
            "Confundir análisis con diseño; el análisis decide QUÉ probar; el diseño, CÓMO.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q2",
          topic: "4.1",
          question: "¿Qué produce principalmente el diseño de pruebas?",
          options: [
            "Una lista de los defectos encontrados en la base de prueba.",
            "Casos de prueba y otro testware, con elementos de cobertura.",
            "El código fuente ya probado y verificado por el equipo.",
            "El informe de cierre del proyecto y su acta final.",
          ],
          correct: 1,
          explanation:
            "El diseño de pruebas elabora las condiciones de prueba en casos de prueba y otro testware; a menudo implica identificar elementos de cobertura que guían los datos de entrada de cada caso.",
          example:
            "Como convertir la lista de comprobaciones de la receta en pasos concretos con cantidades exactas.",
          useCase:
            "El tester transforma la condición «descuento con cupón caducado» en casos de prueba concretos.",
          mistake:
            "Pensar que el diseño ya ejecuta pruebas; el diseño produce testware, no resultados.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q3",
          topic: "4.1",
          question: "¿Qué incluye típicamente la implementación de pruebas?",
          options: [
            "Crear datos de prueba y organizar los casos en suites.",
            "Elegir el lenguaje de programación principal del sistema.",
            "Firmar el contrato del proyecto con el cliente final.",
            "Revisar y aprobar el presupuesto anual del proyecto.",
          ],
          correct: 0,
          explanation:
            "La implementación de pruebas prepara todo lo necesario para ejecutar: datos de prueba, procedimientos de prueba, suites, y verifica el entorno. Organiza el testware creado en análisis y diseño.",
          example:
            "Como dejar los ingredientes medidos y los utensilios listos antes de empezar a cocinar.",
          useCase:
            "El equipo prepara los datos de clientes de prueba y agrupa los casos por flujo de compra.",
          mistake:
            "Saltar de los casos a la ejecución sin preparar datos ni procedimientos reproducibles.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q4",
          topic: "4.1",
          question: "¿En qué se basan las técnicas de caja negra (especificación)?",
          options: [
            "En la estructura interna del código y su flujo de control.",
            "En el comportamiento especificado, sin ver la estructura interna.",
            "En la intuición y en la experiencia previa del tester.",
            "En los defectos históricos registrados del proyecto.",
          ],
          correct: 1,
          explanation:
            "Las técnicas de caja negra analizan el comportamiento especificado del objeto de prueba sin conocer su estructura interna; por eso los casos pueden diseñarse antes de implementar el software.",
          example:
            "Como comprobar una máquina expendedora solo por lo que ves: monedas, botones, producto; sin abrirla.",
          useCase:
            "A partir de la especificación de la función de descuentos, el tester diseña casos sin mirar el código.",
          mistake:
            "Creer que la caja negra exige conocer el código; es justamente lo contrario.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q5",
          topic: "4.1",
          question: "¿En qué se basan las técnicas de caja blanca (estructurales)?",
          options: [
            "En las especificaciones funcionales escritas del producto.",
            "En la estructura interna del objeto de prueba y su diseño.",
            "En la opinión recogida de los usuarios finales.",
            "En los requisitos no funcionales del sistema.",
          ],
          correct: 1,
          explanation:
            "Las técnicas de caja blanca analizan la estructura interna (código, flujo de control). Como los casos dependen de la implementación, solo pueden crearse una vez diseñado o implementado el objeto de prueba.",
          example:
            "Como revisar el circuito interno de un aparato para comprobar que cada ruta recibe corriente.",
          useCase:
            "Un desarrollador deriva casos de las ramas del código de la función de descuentos.",
          mistake:
            "Pensar que la caja blanca se usa solo en pruebas de sistema; es típica de los niveles de componente e integración.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q6",
          topic: "4.1",
          question: "¿En qué se basan las técnicas basadas en la experiencia?",
          options: [
            "En la estructura del código fuente del sistema.",
            "En el conocimiento y la experiencia de testers y usuarios.",
            "En el número total de líneas de código del sistema.",
            "En la documentación formal de requisitos exclusivamente.",
          ],
          correct: 1,
          explanation:
            "Las técnicas basadas en la experiencia aprovechan el conocimiento y la experiencia de testers y usuarios para diseñar y ejecutar pruebas; complementan a las técnicas sistemáticas.",
          example:
            "Como un cocinero veterano que sabe por experiencia dónde suele quemarse el guiso.",
          useCase:
            "Un tester con años en el dominio prueba primero los flujos que históricamente más fallan.",
          mistake:
            "Descartarlas por «poco sistemáticas»; detectan defectos que las técnicas formales no alcanzan.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q7",
          topic: "4.1",
          question:
            "¿Para qué sirve la trazabilidad bidireccional entre la base de prueba y el testware?",
          options: [
            "Para calcular el presupuesto anual del proyecto.",
            "Para evaluar la cobertura y el impacto de los cambios.",
            "Para elegir el lenguaje de programación principal.",
            "Para decidir qué desarrollador programa cada módulo.",
          ],
          correct: 1,
          explanation:
            "La trazabilidad bidireccional (requisitos ↔ condiciones ↔ casos ↔ resultados) permite conocer qué está cubierto, evaluar el impacto de cambios y justificar la cobertura ante los interesados.",
          example:
            "Como el índice de un libro: sabes qué capítulo cubre cada tema y qué temas quedan sin cubrir.",
          useCase:
            "Al cambiar un requisito, la trazabilidad muestra qué casos de prueba hay que revisar.",
          mistake:
            "Verla como burocracia; sin trazabilidad no puedes demostrar cobertura ni medir impacto.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
        {
          id: "w4-l1-q8",
          topic: "4.1",
          question:
            "¿Cuál es el orden típico de las actividades de prueba dentro del proceso?",
          options: [
            "Ejecución → análisis → diseño → implementación de pruebas.",
            "Análisis, luego diseño, implementación y ejecución.",
            "Diseño → ejecución → análisis → implementación de pruebas.",
            "Implementación → diseño → análisis → ejecución de pruebas.",
          ],
          correct: 1,
          explanation:
            "Primero se analiza la base de prueba y se definen las condiciones (análisis); luego se elaboran los casos (diseño); después se preparan datos, procedimientos y suites (implementación); y por último se ejecuta.",
          example:
            "Como planificar un viaje: decidir el destino (análisis), trazar la ruta (diseño), preparar el equipaje (implementación) y viajar (ejecución).",
          useCase:
            "El equipo define condiciones del sprint, escribe casos, prepara datos y solo entonces ejecuta.",
          mistake:
            "Empezar ejecutando sin condiciones ni casos pensados; el resultado es cobertura arbitraria.",
          syllabusRef: "Tema 4.1 — Análisis y diseño de pruebas",
        },
      ],
    },
    {
      id: "w4-l2",
      number: 2,
      title: "Partición de equivalencia y valores límite",
      topic: "Tema 4.2 — Caja negra: partición de equivalencia y valores límite",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w4-l2-q1",
          topic: "4.2",
          question: "¿Qué hace la partición de equivalencia (EP)?",
          options: [
            "Ejecutar el programa con datos aleatorios hasta encontrar fallos.",
            "Dividir los datos en particiones que se tratan igual y probar una de cada.",
            "Medir el porcentaje de líneas de código ejecutadas por las pruebas.",
            "Ordenar los casos de prueba por prioridad de ejecución.",
          ],
          correct: 1,
          explanation:
            "EP divide los datos en particiones de equivalencia: cualquier valor de una partición debería comportarse igual, así que un solo valor representativo por partición es suficiente para cubrirla.",
          example:
            "Como en un aparcamiento: coche, moto o camión; da igual el modelo exacto, la tarifa depende de la categoría.",
          useCase:
            "Para un campo de edad (18–65), se identifican las particiones: menores, válidos y mayores.",
          mistake:
            "Probar muchos valores de la misma partición; aportan la misma información con más esfuerzo.",
          syllabusRef: "Tema 4.2 — Caja negra: partición de equivalencia",
        },
        {
          id: "w4-l2-q2",
          topic: "4.2",
          question: "En la partición de equivalencia, ¿cómo deben cubrirse las particiones no válidas?",
          options: [
            "Agrupando todos los valores no válidos en un único caso de prueba.",
            "Con un caso de prueba separado para cada partición no válida.",
            "Ignorándolas, porque solo interesan las entradas válidas.",
            "Probándolas únicamente en el entorno de producción.",
          ],
          correct: 1,
          explanation:
            "Cada partición no válida se cubre con un caso de prueba independiente: si se combinaran varios valores inválidos, uno podría impedir verificar el tratamiento de los demás.",
          example:
            "Como probar qué pasa con cada tipo de documento incorrecto por separado, sin mezclarlos.",
          useCase:
            "Un formulario: un caso con edad menor de 18 y otro caso aparte con edad mayor de 65.",
          mistake:
            "Meter dos valores inválidos en el mismo caso; el sistema puede rechazar el primero y no evaluar el segundo.",
          syllabusRef: "Tema 4.2 — Caja negra: partición de equivalencia",
        },
        {
          id: "w4-l2-q3",
          topic: "4.2",
          question: "¿Cómo se calcula la cobertura de la partición de equivalencia?",
          options: [
            "Particiones ejercitadas entre particiones totales, en porcentaje.",
            "Defectos encontrados entre defectos totales estimados.",
            "Líneas de código ejecutadas entre líneas totales del módulo.",
            "Casos ejecutados entre casos planificados en el sprint.",
          ],
          correct: 0,
          explanation:
            "La cobertura de EP es el porcentaje de particiones de equivalencia que han sido ejercitadas por los casos de prueba respecto al total identificado.",
          example:
            "Como decir que has visitado 3 de las 4 habitaciones de una casa: 75 % de cobertura.",
          useCase:
            "El informe de avance muestra «cobertura EP: 100 %» cuando todas las particiones tienen al menos un caso.",
          mistake:
            "Confundir la cobertura de particiones con la de código; miden cosas distintas.",
          syllabusRef: "Tema 4.2 — Caja negra: partición de equivalencia",
        },
        {
          id: "w4-l2-q4",
          topic: "4.2",
          question: "¿En qué se centra el análisis de valores límite (BVA)?",
          options: [
            "En los valores de cada partición más alejados de los extremos.",
            "En los límites entre particiones, donde suelen aparecer defectos.",
            "En valores elegidos al azar dentro de cada partición.",
            "En la cobertura de ramas del código fuente del módulo.",
          ],
          correct: 1,
          explanation:
            "BVA prueba los valores límite de particiones ordenadas (por ejemplo, rangos numéricos), donde es más probable que se cometan errores de programación (usar > en lugar de >=, etc.).",
          example:
            "Como revisar exactamente dónde está la raya de salida de un aparcamiento: justo en el límite.",
          useCase:
            "Para un campo de edad 18–65 se prueban 17, 18, 65 y 66.",
          mistake:
            "Probar solo el centro del rango; los defectos de límites se escapan.",
          syllabusRef: "Tema 4.2 — Caja negra: análisis de valores límite",
        },
        {
          id: "w4-l2-q5",
          topic: "4.2",
          question:
            "En BVA de 2 valores para un rango de 1 a 10, ¿qué valores se prueban en el límite inferior?",
          options: [
            "El 1 y el 10, los valores exactos de los límites.",
            "El 0 y el 1, límite y vecino de la partición adyacente.",
            "El 0, el 1 y el 2, con el vecino interior incluido.",
            "Solo el 1, porque es el valor mínimo del rango.",
          ],
          correct: 1,
          explanation:
            "BVA de 2 valores prueba, para cada límite, el valor que marca el límite y su vecino más cercano en la partición adyacente: en el límite inferior del rango [1, 10] son 0 y 1.",
          example:
            "Como comprobar los kilos permitidos en una maleta: justo el límite y un poco por debajo.",
          useCase:
            "Un campo admite 1 a 10 licencias: se prueban 0 y 1 para el borde inferior, 10 y 11 para el superior.",
          mistake:
            "Olvidar el valor vecino adyacente; solo probar el valor exacto del límite.",
          syllabusRef: "Tema 4.2 — Caja negra: análisis de valores límite",
        },
        {
          id: "w4-l2-q6",
          topic: "4.2",
          question:
            "En BVA de 3 valores para un rango de 1 a 10, ¿qué valores se prueban en el límite inferior?",
          options: [
            "El 0 y el 1, límite y vecino adyacente.",
            "El 0, el 1 y el 2, incluyendo el vecino interior.",
            "El 1, el 2 y el 3, sin salir de la partición válida.",
            "El 1 y el 10, solo los bordes exactos del rango.",
          ],
          correct: 1,
          explanation:
            "BVA de 3 valores añade, además del valor límite y su vecino adyacente, el vecino del mismo lado: para el límite inferior de [1, 10] se prueban 0, 1 y 2.",
          example:
            "Como medir la temperatura con tres sensores: bajo el umbral, en el umbral y justo por encima.",
          useCase:
            "Para el campo de licencias (1–10) con BVA de 3 valores: 0, 1, 2 en el inferior; 9, 10, 11 en el superior.",
          mistake:
            "Confundir BVA de 2 y de 3 valores; el de 3 añade el vecino interior.",
          syllabusRef: "Tema 4.2 — Caja negra: análisis de valores límite",
        },
        {
          id: "w4-l2-q7",
          topic: "4.2",
          question: "¿Qué significa un 100 % de cobertura de valores límite?",
          options: [
            "Que se han ejecutado todas las líneas de código del módulo.",
            "Que se ejercitaron los valores límite identificados.",
            "Que no quedan defectos pendientes en el sistema.",
            "Que se probaron todos los valores posibles del dominio.",
          ],
          correct: 1,
          explanation:
            "La cobertura de BVA mide el porcentaje de valores límite ejercitados respecto a los identificados. El 100 % no implica ausencia de defectos: solo indica que esos valores concretos fueron probados.",
          example:
            "Como haber revisado todos los bordes de un tapete: no garantiza que el centro esté perfecto, pero ya no te sorprenderán las esquinas.",
          useCase:
            "El informe muestra 100 % de cobertura de límites y el equipo decide qué otras técnicas aplicar.",
          mistake:
            "Equiparar cobertura del 100 % con producto sin defectos; la cobertura mide lo probado, no la calidad total.",
          syllabusRef: "Tema 4.2 — Caja negra: análisis de valores límite",
        },
        {
          id: "w4-l2-q8",
          topic: "4.2",
          question:
            "Un campo acepta edades de 18 a 65 años. ¿Qué valores se prueban con BVA de 2 valores en los dos límites?",
          options: [
            "17, 18, 65 y 66.",
            "18 y 65 solamente.",
            "18, 19, 64 y 65.",
            "17, 18, 19, 64, 65 y 66.",
          ],
          correct: 0,
          explanation:
            "Con BVA de 2 valores se prueba cada límite y su vecino adyacente: 17 (por debajo del mínimo), 18 (mínimo), 65 (máximo) y 66 (por encima del máximo). Los valores 19 y 64 corresponden a BVA de 3 valores.",
          example:
            "Como las tallas de seguridad de un parque: justo por debajo del mínimo, el mínimo, el máximo y justo por encima.",
          useCase:
            "El caso de prueba válido ejecuta 18 y 65; los inválidos, 17 y 66, cada uno en su propio caso.",
          mistake:
            "Añadir los vecinos interiores (19 y 64): eso es BVA de 3 valores.",
          syllabusRef: "Tema 4.2 — Caja negra: análisis de valores límite",
        },
        {
          id: "w4-l2-q9",
          type: "multi",
          topic: "4.2",
          question:
            "Selecciona las DOS afirmaciones correctas sobre la partición de equivalencia (EP) y los valores límite (BVA).",
          options: [
            "En EP basta un valor representativo por cada partición de equivalencia.",
            "BVA se centra en los límites entre particiones ordenadas.",
            "Cada partición no válida debe agruparse con las demás en un solo caso.",
            "La cobertura del 100 % con estas técnicas garantiza ausencia de defectos.",
            "BVA de 3 valores prueba únicamente el valor exacto del límite.",
          ],
          correct: [0, 1],
          explanation:
            "En EP un valor representativo cubre toda la partición, y BVA se centra en los límites, donde más defectos aparecen. Las particiones no válidas van en casos separados, el 100 % no garantiza calidad total y BVA de 3 valores incluye el vecino interior.",
          example:
            "EP elige un representante de cada grupo; BVA vigila las fronteras de cada grupo.",
          useCase:
            "Para un campo de 1 a 10: EP prueba 5 (válido) y 12 (inválido); BVA prueba 0, 1, 10 y 11.",
          mistake:
            "Confundir el objetivo de cada técnica: EP cubre clases, BVA cubre fronteras.",
          syllabusRef: "Tema 4.2 — Caja negra: partición de equivalencia y valores límite",
        },
      ],
    },
    {
      id: "w4-l3",
      number: 3,
      title: "Tablas de decisión y transición de estados",
      topic: "Tema 4.2 — Caja negra: tablas de decisión y transición de estados",
      difficulty: "difícil",
      timePerQuestion: 75,
      lives: 3,
      questions: [
        {
          id: "w4-l3-q1",
          topic: "4.2",
          question: "¿Qué prueban las tablas de decisión?",
          options: [
            "Los tiempos de respuesta del sistema bajo carga real.",
            "Las combinaciones de condiciones que producen acciones.",
            "La cobertura de ramas y sentencias del código fuente.",
            "La usabilidad de la interfaz con usuarios finales.",
          ],
          correct: 1,
          explanation:
            "Las tablas de decisión modelan la lógica de negocio combinando condiciones y las acciones resultantes; son ideales cuando el resultado depende de varias condiciones a la vez.",
          example:
            "Como una tabla de descuentos de tienda: cliente nuevo o habitual, con o sin cupón.",
          useCase:
            "Reglas de aprobación de un préstamo según ingresos, historial y deuda.",
          mistake:
            "Usarlas para procesos con secuencia temporal; para eso están las transiciones de estado.",
          syllabusRef: "Tema 4.2 — Caja negra: tablas de decisión",
        },
        {
          id: "w4-l3-q2",
          topic: "4.2",
          question: "¿Qué elementos componen una tabla de decisión?",
          options: [
            "Estados, transiciones y eventos que las provocan.",
            "Condiciones, acciones y reglas que las combinan.",
            "Nodos, aristas y caminos del grafo de flujo.",
            "Particiones válidas y no válidas de los datos.",
          ],
          correct: 1,
          explanation:
            "Una tabla de decisión tiene condiciones (entradas), acciones (resultados) y reglas: cada columna combina valores de las condiciones y define qué acciones se ejecutan.",
          example:
            "Como una quiniela: cada columna es una combinación de resultados y su premio.",
          useCase:
            "El analista dibuja la tabla de aprobación del préstamo y deriva un caso por columna factible.",
          mistake:
            "Confundir columnas (reglas) con condiciones; las condiciones son las filas.",
          syllabusRef: "Tema 4.2 — Caja negra: tablas de decisión",
        },
        {
          id: "w4-l3-q3",
          topic: "4.2",
          question: "¿Cuál es la diferencia entre entradas limitadas y extendidas en una tabla de decisión?",
          options: [
            "Las limitadas usan valores booleanos; las extendidas, varios valores.",
            "Las limitadas no tienen acciones; las extendidas sí las tienen.",
            "Las extendidas solo sirven para modelos de estados.",
            "No hay diferencia real: son términos sinónimos.",
          ],
          correct: 0,
          explanation:
            "En las tablas de entradas limitadas cada condición toma valores booleanos (verdadero/falso). Las de entradas extendidas permiten valores más ricos (rangos, categorías, números), a costa de tablas más complejas.",
          example:
            "Limitada: «¿tiene cupón? sí/no». Extendida: «tipo de cupón: oro, plata, ninguno».",
          useCase:
            "Para reglas de descuento por categoría de cliente se usa una tabla extendida.",
          mistake:
            "Creer que las extendidas son otra técnica; es la misma, con condiciones de más valores.",
          syllabusRef: "Tema 4.2 — Caja negra: tablas de decisión",
        },
        {
          id: "w4-l3-q4",
          topic: "4.2",
          question: "¿Cómo se mide la cobertura de una tabla de decisión?",
          options: [
            "Reglas factibles ejercitadas entre el total de reglas factibles.",
            "Condiciones ejercitadas entre las condiciones totales.",
            "Sentencias ejecutadas entre las sentencias totales del código.",
            "Defectos cerrados entre los defectos aún abiertos.",
          ],
          correct: 0,
          explanation:
            "La cobertura de la tabla de decisión se calcula como el porcentaje de reglas factibles (columnas) que han sido ejercitadas por los casos de prueba.",
          example:
            "Como marcar en la quiniela cuántas columnas has jugado de las posibles.",
          useCase:
            "El equipo reporta 90 % de cobertura de tabla: falta una regla por probar.",
          mistake:
            "Contar columnas infactibles; no pueden ejecutarse y se excluyen del cálculo.",
          syllabusRef: "Tema 4.2 — Caja negra: tablas de decisión",
        },
        {
          id: "w4-l3-q5",
          topic: "4.2",
          question:
            "¿Qué se hace con las combinaciones imposibles (infactibles) en una tabla de decisión?",
          options: [
            "Se prueban igualmente, aunque no puedan ocurrir nunca.",
            "Se marcan como infactibles y se excluyen de la cobertura.",
            "Se convierten en acciones de la propia tabla.",
            "Se eliminan todas las reglas de la tabla por completo.",
          ],
          correct: 1,
          explanation:
            "Las combinaciones que no pueden darse en la realidad (por ejemplo, «menor de edad» y «jubilado» a la vez) se marcan como infactibles y no se cuentan para la cobertura.",
          example:
            "Como una combinación imposible del menú: «sin gluten y sin lactosa» con un plato que lleva ambos.",
          useCase:
            "En préstamos, «sin ingresos» y «deuda cero» con aval no siempre es factible; se marca y se documenta.",
          mistake:
            "Intentar cubrir columnas imposibles; infla el esfuerzo sin valor.",
          syllabusRef: "Tema 4.2 — Caja negra: tablas de decisión",
        },
        {
          id: "w4-l3-q6",
          topic: "4.2",
          question: "¿Qué modela un diagrama de transición de estados?",
          options: [
            "Las condiciones y acciones de una regla de negocio.",
            "Estados, transiciones y los eventos que las provocan.",
            "La estructura de ramas y bucles del código fuente.",
            "Las particiones de equivalencia de cada campo.",
          ],
          correct: 1,
          explanation:
            "El diagrama (o tabla) de transición de estados representa el comportamiento dependiente del estado: qué estados existen, qué eventos provocan transiciones y qué acciones se ejecutan.",
          example:
            "Como el ciclo de vida de un pedido: creado → pagado → enviado → entregado.",
          useCase:
            "El tester modela los estados de una suscripción: activa, suspendida y cancelada.",
          mistake:
            "Confundirlo con una tabla de decisión; aquí importa el estado actual y la secuencia.",
          syllabusRef: "Tema 4.2 — Caja negra: transición de estados",
        },
        {
          id: "w4-l3-q7",
          topic: "4.2",
          question: "¿Qué significa cubrir todos los estados en una prueba de transición de estados?",
          options: [
            "Que cada estado se visita al menos una vez por los casos.",
            "Que se prueban todos los eventos posibles del sistema.",
            "Que se ejecutan todas las líneas de código del módulo.",
            "Que se prueban solo las transiciones no válidas.",
          ],
          correct: 0,
          explanation:
            "El criterio de cobertura de todos los estados exige que cada estado sea visitado al menos una vez. Existen además criterios más exigentes, como cubrir todas las transiciones válidas.",
          example:
            "Como visitar todas las estaciones de una línea de metro durante las pruebas.",
          useCase:
            "Los casos recorren: creación, activación, suspensión y cancelación, sin dejar ningún estado sin tocar.",
          mistake:
            "Pensar que visitar todos los estados cubre todas las transiciones; son criterios distintos.",
          syllabusRef: "Tema 4.2 — Caja negra: transición de estados",
        },
        {
          id: "w4-l3-q8",
          topic: "4.2",
          question: "¿Para qué sirve probar las transiciones NO válidas?",
          options: [
            "Para nada: solo importan las transiciones válidas.",
            "Para verificar que el sistema rechaza los eventos inválidos.",
            "Para medir el rendimiento del sistema bajo eventos.",
            "Para reducir el número total de casos de prueba.",
          ],
          correct: 1,
          explanation:
            "Las transiciones inválidas (por ejemplo, «cancelar» un pedido ya entregado) deben probarse para confirmar que el sistema las rechaza o las gestiona según lo especificado; suelen ser fuente de defectos graves.",
          example:
            "Como comprobar que el cajero no te deja sacar dinero con la tarjeta bloqueada.",
          useCase:
            "Se prueba que no se puede pasar un pedido de «entregado» a «en preparación».",
          mistake:
            "Probar solo el camino feliz; las transiciones inválidas descubren comportamientos indebidos.",
          syllabusRef: "Tema 4.2 — Caja negra: transición de estados",
        },
      ],
    },
    {
      id: "w4-l4",
      number: 4,
      title: "Cobertura de sentencias y ramas",
      topic: "Tema 4.3 — Caja blanca: cobertura de sentencias y de ramas",
      difficulty: "difícil",
      timePerQuestion: 75,
      lives: 3,
      questions: [
        {
          id: "w4-l4-q1",
          topic: "4.3",
          question: "¿Qué mide la cobertura de sentencias?",
          options: [
            "El porcentaje de sentencias ejecutadas por las pruebas.",
            "El porcentaje de particiones de equivalencia cubiertas.",
            "El número de defectos encontrados por cada sentencia.",
            "El porcentaje de decisiones evaluadas como verdaderas.",
          ],
          correct: 0,
          explanation:
            "La cobertura de sentencias es el porcentaje de sentencias ejecutables del código que han sido ejecutadas por las pruebas: sentencias ejecutadas dividido entre sentencias ejecutables totales.",
          example:
            "Como comprobar qué pasos de un manual de montaje se han realizado realmente.",
          useCase:
            "Tras ejecutar la suite, la herramienta reporta «cobertura de sentencias: 85 %».",
          mistake:
            "Confundirla con la cobertura de ramas; ejecutar una sentencia no implica recorrer todas las ramas.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de sentencias",
        },
        {
          id: "w4-l4-q2",
          topic: "4.3",
          question: "¿Qué es una rama en el código?",
          options: [
            "Una variable global declarada en el programa.",
            "Una transferencia de control entre nodos del grafo de flujo.",
            "Un comentario explicativo dentro del código fuente.",
            "Una partición de equivalencia del dominio de datos.",
          ],
          correct: 1,
          explanation:
            "Una rama es una transferencia de control entre nodos del grafo de flujo (por ejemplo, la salida «sí» y la salida «no» de un if). Las decisiones generan dos o más ramas.",
          example:
            "Como un cruce de caminos: cada salida posible del cruce es una rama.",
          useCase:
            "Un if/else crea dos ramas: una por el camino verdadero y otra por el falso.",
          mistake:
            "Pensar que una rama es una línea de código; es la conexión entre bloques.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de ramas",
        },
        {
          id: "w4-l4-q3",
          topic: "4.3",
          question:
            "Un programa tiene 8 ramas y las pruebas ejercitan el 75 % de cobertura de ramas. ¿Cuántas ramas se han ejecutado?",
          options: [
            "4 ramas.",
            "5 ramas.",
            "6 ramas.",
            "7 ramas.",
          ],
          correct: 2,
          explanation:
            "Cobertura = ramas ejercitadas / ramas totales. 75 % de 8 = 6 ramas ejecutadas (8 × 0,75 = 6).",
          example:
            "Como completar 6 de 8 estaciones de una ruta: el 75 % del trayecto.",
          useCase:
            "El informe semanal muestra 75 % de cobertura y el equipo prioriza los casos que faltan.",
          mistake:
            "Confundir el porcentaje con el número de casos; la cobertura se mide sobre ramas, no sobre casos.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de ramas",
        },
        {
          id: "w4-l4-q4",
          topic: "4.3",
          question:
            "¿Qué relación existe entre la cobertura de ramas y la cobertura de sentencias?",
          options: [
            "100 % de ramas implica 100 % de sentencias; lo inverso no.",
            "100 % de sentencias implica 100 % de cobertura de ramas.",
            "Son exactamente lo mismo y se calculan igual.",
            "La cobertura de ramas no tiene relación con las sentencias.",
          ],
          correct: 0,
          explanation:
            "Cubrir todas las ramas hace que se ejecuten todas las sentencias alcanzables (cada rama incluye sus sentencias), pero cubrir todas las sentencias no garantiza haber recorrido todas las ramas.",
          example:
            "Como visitar todas las calles (ramas) garantiza pasar por todas las casas (sentencias), pero pasar por las casas no garantiza recorrer todas las calles.",
          useCase:
            "Un equipo exige 100 % de ramas en código crítico: obtiene la de sentencias como consecuencia.",
          mistake:
            "Creer que 100 % de sentencias es suficiente; puede dejar ramas (y defectos) sin probar.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de ramas",
        },
        {
          id: "w4-l4-q5",
          topic: "4.3",
          question: "¿Cuál de estas afirmaciones sobre cobertura es CORRECTA?",
          options: [
            "La cobertura de sentencias del 100 % garantiza que no quedan defectos.",
            "Un 100 % de cobertura de sentencias no garantiza un 100 % de cobertura de ramas.",
            "La cobertura de ramas se mide sobre los casos de prueba ejecutados.",
            "La cobertura de sentencias exige que cada decisión se evalúe como verdadera y como falsa.",
          ],
          correct: 1,
          explanation:
            "Ejecutar todas las sentencias no obliga a evaluar todas las decisiones en ambos sentidos: pueden quedar ramas sin cubrir. La cobertura mide estructura (sentencias o ramas), no casos, y nunca garantiza ausencia de defectos.",
          example:
            "Como pasar por delante de todas las tiendas de un centro comercial sin entrar en todas las plantas de cada una.",
          useCase:
            "El equipo complementa la cobertura de sentencias con la de ramas en módulos críticos.",
          mistake:
            "Asumir que la cobertura alta equivale a calidad total; mide ejecución, no corrección.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de sentencias y de ramas",
        },
        {
          id: "w4-l4-q6",
          topic: "4.3",
          question:
            "Una función contiene 4 estructuras if/else independientes (cada una con un camino verdadero y otro falso). ¿Cuántas ramas hay que cubrir para lograr el 100 % de cobertura de ramas?",
          options: [
            "4 ramas.",
            "6 ramas.",
            "8 ramas.",
            "16 ramas.",
          ],
          correct: 2,
          explanation:
            "Cada if/else genera 2 ramas (verdadero y falso): 4 × 2 = 8 ramas. El 100 % de cobertura de ramas exige ejercitar las 8.",
          example:
            "Como cuatro semáforos con verde y rojo: 8 estados de paso posibles.",
          useCase:
            "El tester diseña datos que fuercen tanto el camino verdadero como el falso de cada if.",
          mistake:
            "Contar una rama por if; cada decisión duplica el camino.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de ramas",
        },
        {
          id: "w4-l4-q7",
          topic: "4.3",
          question: "¿Para qué sirven las técnicas de caja blanca en la práctica?",
          options: [
            "Para reemplazar a las pruebas de aceptación del cliente.",
            "Para medir la cobertura y guiar pruebas hacia lo no cubierto.",
            "Para medir la satisfacción del usuario con el producto.",
            "Para calcular el presupuesto de pruebas del proyecto.",
          ],
          correct: 1,
          explanation:
            "Las técnicas de caja blanca miden cuánta estructura se ha ejecutado (sentencias, ramas) y ayudan a identificar qué partes del código faltan por probar, guiando casos adicionales.",
          example:
            "Como un mapa de senderos: te muestra qué caminos has recorrido y cuáles quedan.",
          useCase:
            "Tras la suite unitaria, el equipo añade casos para las ramas que el informe marca sin cubrir.",
          mistake:
            "Creer que la caja blanca sustituye a las pruebas de comportamiento; se complementan.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de sentencias y de ramas",
        },
        {
          id: "w4-l4-q8",
          topic: "4.3",
          question:
            "Un módulo tiene 20 sentencias ejecutables y las pruebas solo ejecutaron 15. ¿Cuál es la cobertura de sentencias?",
          options: [
            "15 %.",
            "20 %.",
            "75 %.",
            "85 %.",
          ],
          correct: 2,
          explanation:
            "Cobertura = sentencias ejecutadas / sentencias ejecutables = 15 / 20 = 0,75 → 75 %.",
          example:
            "Como completar 15 de 20 ejercicios de una lista: el 75 %.",
          useCase:
            "El informe indica 75 % y señala las 5 sentencias pendientes para la próxima iteración.",
          mistake:
            "Dividir al revés (20/15); la cobertura nunca supera el 100 %.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de sentencias",
        },
        {
          id: "w4-l4-q9",
          type: "multi",
          topic: "4.3",
          question: "Selecciona las DOS afirmaciones correctas sobre la cobertura de código.",
          options: [
            "100 % de cobertura de ramas implica 100 % de cobertura de sentencias.",
            "La cobertura de ramas puede ser menor que la de sentencias en un módulo.",
            "100 % de cobertura de sentencias garantiza todas las ramas cubiertas.",
            "La cobertura del 100 % demuestra que no quedan defectos en el código.",
            "Ejecutar todas las sentencias obliga a evaluar cada decisión en ambos sentidos.",
          ],
          correct: [0, 1],
          explanation:
            "Cubrir todas las ramas ejecuta todas las sentencias alcanzables (implicación directa), y en un módulo la cobertura de ramas puede quedar por debajo de la de sentencias. Las otras tres afirmaciones son falsas: la cobertura no garantiza defectos cero ni obliga a recorrer ambos sentidos de cada decisión.",
          example:
            "Pasear por todas las calles (ramas) implica pasar por todas las casas (sentencias), pero no al revés.",
          useCase:
            "El equipo reporta 95 % de sentencias y 80 % de ramas: añade casos para las ramas restantes.",
          mistake:
            "Creer que la cobertura mide la calidad del código; mide cuánto se ha ejecutado.",
          syllabusRef: "Tema 4.3 — Caja blanca: cobertura de sentencias y de ramas",
        },
      ],
    },
    {
      id: "w4-l5",
      number: 5,
      title: "Técnicas basadas en la experiencia",
      topic: "Tema 4.4 — Técnicas basadas en la experiencia",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w4-l5-q1",
          topic: "4.4",
          question: "¿En qué consiste la adivinación de errores (error guessing)?",
          options: [
            "En ejecutar pruebas al azar y sin ningún criterio definido.",
            "En derivar pruebas de la experiencia sobre errores típicos.",
            "En medir la cobertura de código alcanzada por la suite.",
            "En seguir una tabla de decisión hasta el final.",
          ],
          correct: 1,
          explanation:
            "La adivinación de errores usa la experiencia y el conocimiento de fallos típicos para diseñar pruebas dirigidas a los puntos donde suele haber defectos. No es aleatoria, aunque tampoco sistemática.",
          example:
            "Como el mecánico que revisa primero la pieza que más veces ha visto romperse.",
          useCase:
            "El tester prueba primero los formularios con caracteres especiales, sabiendo que suelen fallar.",
          mistake:
            "Confundirla con probar sin criterio; se apoya en defectos históricos y en conocimiento del dominio.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
        {
          id: "w4-l5-q2",
          topic: "4.4",
          question: "¿Qué puede hacer más efectiva a la adivinación de errores?",
          options: [
            "Conocer los defectos históricos y usar listas de ataques de fallos.",
            "Usar exclusivamente casos aleatorios generados por herramientas.",
            "Evitar el conocimiento previo del dominio del negocio.",
            "Limitarse a ejecutar el camino feliz del sistema.",
          ],
          correct: 0,
          explanation:
            "La adivinación de errores se apoya en información valiosa: los defectos históricos, las listas de ataques de fallos y la experiencia del equipo. Cuanto más se conoce el producto y su historia, mejores son las conjeturas.",
          example:
            "Como un portero que conoce por dónde suelen chutar los delanteros.",
          useCase:
            "El equipo revisa los últimos 10 defectos críticos y diseña pruebas dirigidas a esas áreas.",
          mistake:
            "Ignorar el histórico de defectos; es una de las mejores fuentes para esta técnica.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
        {
          id: "w4-l5-q3",
          topic: "4.4",
          question: "¿Qué caracteriza a las pruebas exploratorias?",
          options: [
            "Diseñar y ejecutar a la vez, en sesiones con límite de tiempo.",
            "Ejecutar pruebas sin ninguna misión ni objetivo previo.",
            "Documentar cada caso de prueba antes de ejecutarlo.",
            "Medir la cobertura de ramas del código fuente.",
          ],
          correct: 0,
          explanation:
            "En las pruebas exploratorias el aprendizaje, el diseño y la ejecución ocurren de forma simultánea. Suele trabajarse con sesiones de duración limitada (timebox) guiadas por un charter.",
          example:
            "Como explorar una ciudad sin mapa fijo: descubres y decides sobre la marcha.",
          useCase:
            "El tester dedica una sesión de 90 minutos a investigar a fondo el flujo de devoluciones.",
          mistake:
            "Creer que es «probar sin rumbo»; hay charter, tiempo acotado y registro de hallazgos.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
        {
          id: "w4-l5-q4",
          topic: "4.4",
          question: "En las pruebas exploratorias, ¿qué es un charter (o misión)?",
          options: [
            "Un documento legal de compras del proyecto.",
            "Una declaración breve del objetivo de la sesión.",
            "El informe final de los defectos encontrados.",
            "El listado completo de casos de prueba del sprint.",
          ],
          correct: 1,
          explanation:
            "El charter describe el objetivo de una sesión exploratoria: qué área se explora y con qué propósito. Guía la exploración sin convertirla en un guion cerrado.",
          example:
            "Como la misión de un explorador: «cartografiar el río del norte».",
          useCase:
            "Charter: «Explorar el proceso de pago con cupones, priorizando errores de importes».",
          mistake:
            "Redactar el charter como un caso de prueba paso a paso; el charter es una guía, no un guion.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
        {
          id: "w4-l5-q5",
          topic: "4.4",
          question: "¿Qué caracteriza a las pruebas basadas en checklists?",
          options: [
            "El tester verifica elementos de una checklist actualizada.",
            "Se ejecutan únicamente pruebas de rendimiento básicas.",
            "La checklist se mantiene sin cambios con el tiempo.",
            "Sustituyen por completo a las técnicas de caja negra.",
          ],
          correct: 0,
          explanation:
            "En las pruebas basadas en checklists el diseño y la ejecución se apoyan en una lista de elementos a comprobar (requisitos, estándares, casos frecuentes). Las checklists deben revisarse: una lista obsoleta pierde efectividad.",
          example:
            "Como la lista de comprobación del piloto antes de despegar: siempre la misma hasta que se actualiza.",
          useCase:
            "Checklist de revisión de interfaces: textos, idioma, fechas, importes, permisos.",
          mistake:
            "Mantener checklists desactualizadas; cubrirán menos de lo esperado.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
        {
          id: "w4-l5-q6",
          topic: "4.4",
          question:
            "¿Cómo se relacionan las técnicas basadas en la experiencia con las de caja negra y caja blanca?",
          options: [
            "Las reemplazan por completo cuando no hay documentación.",
            "Las complementan y cubren lo que las formales dejan fuera.",
            "Son incompatibles entre sí y no deben combinarse.",
            "Solo se pueden usar después de las técnicas de caja blanca.",
          ],
          correct: 1,
          explanation:
            "Las técnicas basadas en la experiencia complementan a las sistemáticas: pueden combinarse en un mismo esfuerzo de pruebas y a menudo se usan después para cubrir lo que las reglas formales no contemplan.",
          example:
            "Como un chef que sigue la receta (sistemático) y además prueba con el olfato y la vista (experiencia).",
          useCase:
            "Tras ejecutar la suite de caja negra, una sesión exploratoria busca lo que los casos no previeron.",
          mistake:
            "Elegir una única familia de técnicas; combinarlas da mejor cobertura.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
        {
          id: "w4-l5-q7",
          topic: "4.4",
          question:
            "¿Cuándo resultan especialmente valiosas las técnicas basadas en la experiencia?",
          options: [
            "Con poca documentación, prisa, o defectos que las formales no ven.",
            "Solo cuando hay documentación exhaustiva y sin ninguna prisa.",
            "Únicamente en sistemas pequeños y poco críticos.",
            "Cuando no hay testers disponibles en el equipo.",
          ],
          correct: 0,
          explanation:
            "La experiencia compensa la falta de especificaciones y de tiempo: en contextos ágiles, documentos incompletos o sistemas muy conocidos por el equipo, estas técnicas aportan hallazgos valiosos rápidamente.",
          example:
            "Como el guía local que improvisa una ruta útil cuando se cierra el camino previsto.",
          useCase:
            "Sprint corto y requisitos escuetos: el equipo dedica una sesión exploratoria al flujo de registro.",
          mistake:
            "Usarlas solo como último recurso; bien aplicadas, son eficaces en todo tipo de contextos.",
          syllabusRef: "Tema 4.4 — Técnicas basadas en la experiencia",
        },
      ],
    },
    {
      id: "w4-l6",
      number: 6,
      title: "Colaboración y elección de técnicas",
      topic: "Tema 4.5 — Enfoques colaborativos y selección de técnicas",
      difficulty: "medio",
      timePerQuestion: 60,
      lives: 3,
      questions: [
        {
          id: "w4-l6-q1",
          topic: "4.5",
          question:
            "¿Quiénes colaboran típicamente al escribir historias de usuario en un enfoque colaborativo?",
          options: [
            "Únicamente los desarrolladores del equipo.",
            "Negocio, desarrollo y testing con su perspectiva.",
            "Solo el equipo de operaciones de TI.",
            "Únicamente la persona que vende el producto.",
          ],
          correct: 1,
          explanation:
            "La escritura colaborativa de historias de usuario reúne distintas perspectivas: negocio aporta el valor, desarrollo la viabilidad técnica y testing las preguntas sobre escenarios y criterios verificables.",
          example:
            "Como diseñar un plato entre el cliente que lo pide, el cocinero y quien debe comprobar que quedó perfecto.",
          useCase:
            "Antes del sprint, los tres perfiles refinan juntos las historias y detectan ambigüedades.",
          mistake:
            "Escribirlas en solitario: se pierden perspectivas y aparecen suposiciones ocultas.",
          syllabusRef: "Tema 4.5 — Enfoques colaborativos",
        },
        {
          id: "w4-l6-q2",
          topic: "4.5",
          question: "¿Qué son los criterios de aceptación de una historia de usuario?",
          options: [
            "El presupuesto asignado a la historia de usuario.",
            "Las condiciones para considerar la historia terminada.",
            "Una lista de los defectos encontrados durante el sprint.",
            "El manual de estilo y formato del código fuente.",
          ],
          correct: 1,
          explanation:
            "Los criterios de aceptación definen las condiciones de satisfacción de una historia: qué debe cumplir para aceptarse. Se acuerdan antes de desarrollar y sirven de base para las pruebas.",
          example:
            "Como los requisitos mínimos que debe cumplir un plato por encargo: sin sal, al punto, para 6 personas.",
          useCase:
            "Historia «recuperar contraseña»: el enlace caduca en 15 minutos y solo se acepta el último generado.",
          mistake:
            "Redactarlos después de programar; pierden su función de guía y su valor para testing.",
          syllabusRef: "Tema 4.5 — Enfoques colaborativos",
        },
        {
          id: "w4-l6-q3",
          topic: "4.5",
          question: "¿Cuál es un formato típico de criterio de aceptación?",
          options: [
            "Escenarios Dado / Cuando / Entonces (contexto, acción y resultado).",
            "Un diagrama de Gantt con las tareas planificadas del sprint.",
            "Una tabla de cobertura de ramas y sentencias del código.",
            "El organigrama del equipo de desarrollo del producto.",
          ],
          correct: 0,
          explanation:
            "Los criterios de aceptación pueden expresarse como reglas o como escenarios; el formato Dado/Cuando/Entonces es el más extendido porque hace explícitos el contexto, la acción y el resultado esperado.",
          example:
            "Dado un usuario registrado, cuando introduce su correo, entonces recibe un enlace de recuperación.",
          useCase:
            "El equipo convierte cada criterio en ejemplos concretos reutilizables como escenarios de prueba.",
          mistake:
            "Redactar criterios vagos («debe funcionar bien»); un buen criterio es verificable.",
          syllabusRef: "Tema 4.5 — Enfoques colaborativos",
        },
        {
          id: "w4-l6-q4",
          topic: "4.5",
          question:
            "¿Cómo se usan los criterios de aceptación en ATDD (desarrollo guiado por pruebas de aceptación)?",
          options: [
            "Se derivan casos antes de programar que guían el desarrollo.",
            "Se usan solo después de desplegar a producción.",
            "Los redacta el equipo de operaciones de TI.",
            "Sustituyen por completo a los casos de caja blanca del sprint.",
          ],
          correct: 0,
          explanation:
            "En ATDD, a partir de los criterios de aceptación se crean ejemplos y casos de prueba de aceptación antes del desarrollo; estos guían la implementación y verifican la historia al completarla.",
          example:
            "Como acordar la entrega exacta de una obra antes de construir, y usarla luego como criterio de recepción.",
          useCase:
            "El equipo convierte tres criterios de aceptación en tres casos automatizados antes de programar la historia.",
          mistake:
            "Confundir ATDD con documentar de más; su esencia es acordar ejemplos verificables en equipo.",
          syllabusRef: "Tema 4.5 — Enfoques colaborativos (ATDD)",
        },
        {
          id: "w4-l6-q5",
          topic: "4.5",
          question: "¿Qué factores influyen al elegir una técnica de diseño de pruebas?",
          options: [
            "El objeto de prueba, el riesgo y la experiencia del equipo.",
            "Únicamente el gusto personal y la costumbre del tester.",
            "Solo el presupuesto asignado al proyecto de pruebas.",
            "Exclusivamente el modelo de ciclo de vida elegido.",
          ],
          correct: 0,
          explanation:
            "La elección depende de varios factores: el objeto y tipo de sistema, el análisis de riesgo, el contexto y las restricciones, los artefactos disponibles (especificaciones, código, modelos) y la experiencia del equipo, entre otros.",
          example:
            "Como elegir la herramienta adecuada para el trabajo: no hay una única mejor, depende del contexto.",
          useCase:
            "Para el cálculo de tarifas se eligen tablas de decisión; para un flujo de estados, transición.",
          mistake:
            "Aplicar siempre la misma técnica favorita sin analizar el contexto.",
          syllabusRef: "Tema 4.5 — Enfoques colaborativos y selección de técnicas",
        },
        {
          id: "w4-l6-q6",
          topic: "4.5",
          question: "¿Cuál de estas afirmaciones sobre la elección de técnicas es CORRECTA?",
          options: [
            "Se combinan según el contexto: ninguna técnica es la mejor para todo.",
            "La partición de equivalencia es la mejor técnica en todos los casos.",
            "Se debe elegir una única técnica por proyecto y no variarla.",
            "Las basadas en la experiencia nunca se combinan con otras técnicas.",
          ],
          correct: 0,
          explanation:
            "No hay una técnica universal: su eficacia depende del contexto. En la práctica se combinan (por ejemplo, caja negra para derivar casos y experiencia para completarlos), buscando el mejor balance de riesgo y cobertura.",
          example:
            "Como en una caja de herramientas: martillo, destornillador y llave; según el trabajo, a veces se usan juntos.",
          useCase:
            "Para un requisito crítico se combinan EP, valores límite y una sesión exploratoria dirigida.",
          mistake:
            "Buscar «la mejor técnica»; lo correcto es la mejor combinación para el contexto.",
          syllabusRef: "Tema 4.5 — Enfoques colaborativos y selección de técnicas",
        },
      ],
    },
  ],
};
