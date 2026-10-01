// =====================================================
// ISTQB Quest — data/challenges/challenge1.js
// Desafío 1: Fundamentos en acción (capítulos 1–3)
// Opciones equilibradas + 1 multi (Etapa 14, lote 8).
// =====================================================

export const challenge1 = {
  id: "c1",
  number: 7,
  challengeNumber: 1,
  type: "challenge",
  title: "Fundamentos en acción",
  icon: "swords",
  description: "Escenarios y trampas de fundamentos, SDLC y testing estático.",
  levels: [
    {
      id: "c1-l1",
      number: 1,
      title: "Misión: fundamentos bajo presión",
      topic: "Desafío 1 — Capítulos 1 a 3",
      difficulty: "difícil",
      timePerQuestion: 90,
      lives: 3,
      questions: [
        {
          id: "c1-l1-q1",
          topic: "Mix 1–2",
          question:
            "Un tester reproduce un fallo: al guardar un formulario sin correo, la aplicación se cierra. ¿Cuál es el siguiente paso MÁS adecuado para el tester?",
          options: [
            "Depurar el código para encontrar la causa raíz del cierre.",
            "Corregir la validación que falta en el formulario.",
            "Documentar el fallo con pasos y evidencia, y reportarlo.",
            "Concluir que no se puede reproducir y descartarlo.",
          ],
          correct: 2,
          explanation:
            "El testing provoca fallos y los documenta; la depuración (buscar la causa y corregir el defecto) corresponde al desarrollo. El tester aporta un reporte reproducible y con contexto.",
          example:
            "Como el detector de humo: avisa y señala dónde, pero apagar el incendio es tarea del equipo de extinción.",
          useCase:
            "Un reporte con pasos y entorno permite al desarrollador reproducir y depurar a la primera.",
          mistake:
            "Confundir testing con debugging; el tester no corrige el código.",
          syllabusRef: "Desafío — Temas 1.1–1.2 (testing y depuración)",
        },
        {
          id: "c1-l1-q2",
          topic: "Mix 1",
          question:
            "Tras encontrar una vulnerabilidad de inyección en el buscador, el equipo decide revisar todas las consultas similares del sistema. ¿Qué principio del testing están aplicando?",
          options: [
            "El testing exhaustivo es imposible de alcanzar.",
            "Los defectos se agrupan: conviene buscar más en la misma zona.",
            "La paradoja del pesticida: las pruebas se desgastan.",
            "La falacia de la ausencia de errores en el producto.",
          ],
          correct: 1,
          explanation:
            "El principio de agrupación de defectos indica que los errores tienden a concentrarse: si aparece uno en un área o patrón, es rentable buscar otros parecidos en el resto del sistema.",
          example:
            "Como cuando aparece una gotera: revisas también los puntos similares del techo.",
          useCase:
            "Tras el hallazgo, el equipo audita todas las consultas SQL construidas igual.",
          mistake:
            "Corregir solo el caso encontrado y no buscar el patrón completo.",
          syllabusRef: "Desafío — Tema 1.3 (principios del testing)",
        },
        {
          id: "c1-l1-q3",
          topic: "Mix 2",
          question: "En un proyecto que usa el modelo en V, ¿qué afirmación es CORRECTA?",
          options: [
            "Las pruebas solo se planifican cuando termina el desarrollo.",
            "Cada fase tiene su nivel de prueba asociado y se planifican al inicio.",
            "El modelo en V elimina la necesidad de pruebas de aceptación.",
            "En la V, el testing no guarda relación con las fases de la izquierda.",
          ],
          correct: 1,
          explanation:
            "En el modelo en V cada fase de la izquierda (requisitos, diseño…) tiene su nivel de prueba asociado a la derecha (aceptación, sistema…). La planificación acompaña al desarrollo desde el principio.",
          example:
            "Como construir un edificio: por cada plano que se diseña, se planifica su inspección.",
          useCase:
            "El equipo redacta los criterios de aceptación mientras analiza los requisitos.",
          mistake:
            "Creer que la V retrasa el testing; lo planifica temprano aunque la ejecución llegue después.",
          syllabusRef: "Desafío — Tema 2.1 (modelos secuenciales)",
        },
        {
          id: "c1-l1-q4",
          topic: "Mix 2",
          question:
            "Antes del lanzamiento, usuarios de negocio validan los procesos reales de facturación y alta de clientes para confirmar que el sistema cubre sus necesidades. ¿Qué nivel de prueba se está ejecutando?",
          options: [
            "Pruebas de componente.",
            "Pruebas de integración.",
            "Pruebas de sistema.",
            "Pruebas de aceptación.",
          ],
          correct: 3,
          explanation:
            "Validar con usuarios que el sistema satisface las necesidades del negocio y es apto para su uso es el objetivo de las pruebas de aceptación.",
          example:
            "Como la inspección final y la entrega de llaves al comprador antes de mudarse.",
          useCase:
            "Usuarios clave ejecutan el alta de un cliente real de principio a fin antes del despliegue.",
          mistake:
            "Asignar la validación de negocio a las pruebas de sistema; el sistema comprueba requisitos, la aceptación valida necesidades.",
          syllabusRef: "Desafío — Tema 2.2 (niveles de prueba)",
        },
        {
          id: "c1-l1-q5",
          topic: "Mix 2",
          question:
            "Se corrige un defecto del módulo de impuestos y se reejecuta solo el caso que fallaba, que ahora pasa. ¿Qué riesgo se está asumiendo?",
          options: [
            "Ninguno: si el caso pasa, la corrección es segura.",
            "Que los cambios rompan otras zonas sin regresión.",
            "Que la corrección no se haya aplicado en la build.",
            "Que falten más casos de confirmación del defecto.",
          ],
          correct: 1,
          explanation:
            "La confirmación verifica el arreglo, pero la corrección puede romper otras zonas. Sin pruebas de regresión, los efectos secundarios pasan desapercibidos hasta producción.",
          example:
            "Como arreglar un grifo y no comprobar que las demás tuberías siguen sin gotear.",
          useCase:
            "Tras el arreglo, se ejecuta la regresión de impuestos, facturación y pedidos.",
          mistake:
            "Confiar solo en la confirmación por tratarse de un «cambio pequeño».",
          syllabusRef: "Desafío — Tema 2.2.3 (confirmación y regresión)",
        },
        {
          id: "c1-l1-q6",
          topic: "Mix 2–3",
          question:
            "La empresa traslada su facturación de servidores locales a la nube sin cambiar funcionalidades. ¿Qué tipo de testing es necesario y por qué?",
          options: [
            "Pruebas de mantenimiento: la migración es un disparador habitual.",
            "Solo pruebas exploratorias, porque la funcionalidad no cambió.",
            "Ninguna: si no cambian funcionalidades no hace falta probar.",
            "Solo pruebas de componente del código migrado.",
          ],
          correct: 0,
          explanation:
            "Las migraciones (de plataforma, entorno o datos) son disparadores típicos del testing de mantenimiento: hay que verificar que el sistema sigue funcionando correctamente en el nuevo entorno.",
          example:
            "Como mudarse de casa: aunque tus muebles sean los mismos, hay que comprobar que todo funciona en el nuevo lugar.",
          useCase:
            "Antes del corte, se prueban integraciones, rendimiento y datos en la nube.",
          mistake:
            "Pensar que sin cambios funcionales no hace falta probar; el entorno también es una fuente de fallos.",
          syllabusRef: "Desafío — Tema 2.3 (testing de mantenimiento)",
        },
        {
          id: "c1-l1-q7",
          topic: "Mix 3",
          question:
            "En la revisión de requisitos se detecta que dos reglas de negocio se contradicen; corregirlo lleva 10 minutos. Si el problema llegara a producción, costaría días de retrabajo. ¿Qué ilustra este caso?",
          options: [
            "Que el testing dinámico es siempre mucho más caro.",
            "El valor del feedback temprano: defectos tempranos, costes menores.",
            "Que las revisiones sustituyen a las pruebas de sistema.",
            "Que los defectos de requisitos nunca llegan a producción.",
          ],
          correct: 1,
          explanation:
            "Detectar defectos pronto (revisiones, análisis estático) reduce drásticamente el coste de corrección. Es la esencia del shift-left y del valor del testing estático.",
          example:
            "Como corregir una errata en el borrador del libro frente a retirar mil ejemplares impresos.",
          useCase:
            "La revisión temprana de requisitos evita retrabajo de desarrollo, pruebas y despliegue.",
          mistake:
            "Posponer las revisiones «porque hay prisa»; sale caro después.",
          syllabusRef: "Desafío — Tema 3.1 (fundamentos del testing estático)",
        },
        {
          id: "c1-l1-q8",
          topic: "Mix 3",
          question:
            "Los requisitos de seguridad de un banco deben revisarse con el máximo rigor: proceso completo, roles definidos, checklists, criterios de entrada/salida y métricas. ¿Qué tipo de revisión corresponde?",
          options: ["Revisión informal.", "Walkthrough.", "Revisión técnica.", "Inspección."],
          correct: 3,
          explanation:
            "La inspección es la revisión más formal: proceso completo, roles definidos (moderador, autor, escriba, revisores), preparación individual, checklists y métricas. Se reserva para productos críticos.",
          example:
            "Como una auditoría formal con actas, checklist y responsables.",
          useCase:
            "Los requisitos de seguridad pasan por inspección antes de aprobarse.",
          mistake:
            "Usar una revisión informal para material crítico; el rigor debe acompañar al riesgo.",
          syllabusRef: "Desafío — Tema 3.2 (proceso de revisión)",
        },
        {
          id: "c1-l1-q9",
          topic: "Mix 3",
          question:
            "El analizador estático reporta 40 avisos; al revisarlos, 37 no eran defectos reales. ¿Cómo se llama el fenómeno y qué conclusión es correcta?",
          options: [
            "Falsos negativos: hay que desactivar la herramienta.",
            "Falsos positivos: conviene ajustar las reglas del analizador.",
            "Defectos reales: hay que corregir los 40 avisos.",
            "Efecto pesticida: hay que ignorar todos los avisos.",
          ],
          correct: 1,
          explanation:
            "Los avisos que señalan algo que no es defecto son falsos positivos. Su exceso erosiona la confianza, así que se gestionan (configuración, reglas, umbrales) manteniendo el valor del análisis.",
          example:
            "Como una alarma de coche demasiado sensible: si suena siempre, dejas de mirarla.",
          useCase:
            "El equipo calibra las reglas del analizador y prioriza los avisos de seguridad.",
          mistake:
            "Pasar de 40 avisos ruidosos a desactivar el análisis por completo.",
          syllabusRef: "Desafío — Tema 3.3 (análisis estático)",
        },
        {
          id: "c1-l1-q10",
          topic: "Mix 1–3",
          question: "¿Cuál de las siguientes afirmaciones es CORRECTA?",
          options: [
            "El estático empieza con borradores; el dinámico necesita código.",
            "Ambos requieren código ejecutable para poder empezar.",
            "El estático solo encuentra defectos de programación.",
            "El dinámico encuentra con facilidad requisitos ambiguos.",
          ],
          correct: 0,
          explanation:
            "El estático examina productos de trabajo sin ejecutarlos (borradores incluidos); el dinámico requiere ejecutar el software. Los requisitos ambiguos se detectan mejor con revisión (estático).",
          example:
            "Como revisar el plano antes de construir (estático) y probar la casa después (dinámico).",
          useCase:
            "Las revisiones del backlog ocurren antes de que exista una línea de código.",
          mistake:
            "Esperar al código para empezar a probar o pedirle al dinámico detectar ambigüedades de texto.",
          syllabusRef: "Desafío — Temas 3.1 y 1.3",
        },
        {
          id: "c1-l1-q11",
          type: "multi",
          topic: "Mix 1–3",
          question:
            "Selecciona las DOS afirmaciones correctas sobre el testing y sus principios.",
          options: [
            "El testing estático puede encontrar defectos sin ejecutar el software.",
            "Los defectos tienden a agruparse: conviene buscar más en zonas similares.",
            "El testing dinámico detecta con facilidad requisitos ambiguos de texto.",
            "Encontrar cero defectos demuestra que el software está libre de ellos.",
            "El testing exhaustivo es alcanzable con suficiente automatización.",
          ],
          correct: [0, 1],
          explanation:
            "El estático encuentra defectos sin ejecutar y los defectos se agrupan por zonas. Los requisitos ambiguos se detectan mejor revisando (estático no dinámico), no encontrar defectos no demuestra su ausencia y el testing exhaustivo es imposible.",
          example:
            "Revisas el contrato antes de firmar (estático) y sospechas de las cláusulas vecinas (agrupamiento).",
          useCase:
            "Tras la revisión de un requisito problemático, el equipo revisa los requisitos redactados por el mismo autor.",
          mistake:
            "Confundir qué defectos encuentra cada tipo de testing y qué prometen sus resultados.",
          syllabusRef: "Desafío — Capítulos 1–3 (fundamentos)",
        },
      ],
    },
  ],
};
