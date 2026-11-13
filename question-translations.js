/* Public practice translation drafts; answer/reference verification remains provisional. */
window.OIC_QUESTION_TRANSLATIONS = {
  "Integration versus Connection": {
    "optionsEs": [
      "Una integración contiene la orquestación; Una conexión almacena el punto final del adaptador configurado y los detalles de seguridad.",
      "Una conexión contiene todas las acciones de orquestación.",
      "Un Adaptador es el reemplazo en tiempo de ejecución de una Integración.",
      "Un Proyecto sólo puede contener Conexiones."
    ],
    "whyEs": [
      "El flujo debe poseer la lógica de ejecución, mientras que la configuración del punto final reutilizable sigue siendo comprobable de forma independiente.",
      "Una conexión configura un punto final y seguridad; la Integración es propietaria de las acciones de orquestación.",
      "Un adaptador proporciona capacidades de conectividad. No reemplaza una integración en ejecución.",
      "Un Proyecto puede agrupar Integraciones, así como Conexiones relacionadas y otros recursos."
    ],
    "extraEs": "Un Adaptador proporciona la capacidad de conectividad configurada por una Conexión.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Trigger direction": {
    "optionsEs": [
      "una conexión Trigger inicia una integración cuando un sistema externo envía una solicitud o evento a Oracle Integration.",
      "una conexión Trigger solo puede llamar a sistemas externos.",
      "un Trigger solo se utiliza en integraciones programadas.",
      "Un disparador no puede tener una carga útil de solicitud."
    ],
    "whyEs": [
      "el Trigger es el punto de entrada que crea una instancia cuando llega una solicitud entrante o un evento admitido.",
      "Las llamadas salientes de un flujo en ejecución son operaciones de invocación, no la función de un Trigger entrante.",
      "Una Integración Programada comienza a partir de un cronograma; un Trigger no está restringido a ese estilo.",
      "Muchas operaciones de activación entrantes aceptan una carga útil de solicitud definida por su contrato."
    ],
    "extraEs": "Un Trigger puede recibir una solicitud entrante cuando su Adaptador admite esa operación.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Invoke direction": {
    "optionsEs": [
      "Una integración utiliza una conexión de invocación para llamar a una aplicación o servicio externo.",
      "Un Invoke siempre inicia una integración.",
      "Un Invoke no puede devolver una respuesta.",
      "Un Invoke es lo mismo que una programación."
    ],
    "whyEs": [
      "La llamada saliente se realiza desde una instancia que ya se está ejecutando, por lo que no puede ser el evento que inicia esa instancia.",
      "La Integración se inicia por su Activador o cronograma; la Invocación se ejecuta después de que ha comenzado la ejecución.",
      "Un Invoke puede tener un contrato de respuesta cuando la operación de destino lo admite.",
      "Un cronograma inicia una Integración Programada; Un Invoke llama a un servicio de destino."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Application Integration": {
    "optionsEs": [
      "Utilice una integración de aplicaciones cuando una integración se inicia mediante un Trigger y organiza llamadas a uno o más objetivos.",
      "Es sólo para el sondeo de archivos.",
      "No puede utilizar un adaptador REST.",
      "Es un reemplazo de una Conexión."
    ],
    "whyEs": [
      "Una solicitud de inicio externa necesita un Trigger, después del cual el flujo puede orquestar las llamadas de destino.",
      "El sondeo de archivos es un patrón de procesamiento de archivos o programado por separado, no el único propósito de una integración de aplicaciones.",
      "Un adaptador REST se puede configurar como activador o invocador en integraciones de aplicaciones compatibles.",
      "Una Integración utiliza Conexiones; no reemplaza su punto final ni su configuración de seguridad."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Synchronous design": {
    "optionsEs": [
      "Elija el procesamiento sincrónico cuando el cliente que invoca necesita una respuesta dentro del tiempo de respuesta admitido y el trabajo puede completarse rápidamente.",
      "Úselo para cada lote de larga duración.",
      "Garantiza un tiempo de espera de respuesta ilimitado.",
      "Elimina la necesidad de manejo de fallas."
    ],
    "whyEs": [
      "El cliente debe permanecer conectado hasta que esté disponible una respuesta limitada, por lo que el tiempo objetivo transcurrido es importante.",
      "Un lote largo puede exceder la ventana de respuesta del cliente que invoca; el procesamiento asincrónico o programado es más seguro.",
      "Los flujos sincrónicos tienen límites de tiempo prácticos y documentados; no son ilimitados.",
      "Una respuesta rápida no elimina la necesidad de informar fallas en el objetivo o en el mapeo."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Asynchronous design": {
    "optionsEs": [
      "Elija el procesamiento asincrónico para trabajos de larga duración, de modo que el cliente que invoca no tenga que esperar a que finalice.",
      "No puede llamar a un Adaptador.",
      "Sólo es posible con SOAP.",
      "Debe devolver una respuesta comercial de inmediato."
    ],
    "whyEs": [
      "Desacoplar la finalización del cliente que invoca evita agotar una ventana de respuesta sincrónica.",
      "El trabajo asincrónico aún puede invocar servicios de destino a través de adaptadores compatibles.",
      "El patrón no se limita a SOAP; el contrato de llamada y el tiempo de procesamiento impulsan la decisión.",
      "Un reconocimiento no significa necesariamente que la operación comercial final ya haya tenido éxito."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Projects": {
    "optionsEs": [
      "Los proyectos organizan recursos relacionados en tiempo de diseño y proporcionan vistas de Diseño, Implementación y Observación.",
      "Los proyectos reemplazan todas las conexiones a nivel mundial.",
      "Los proyectos son solo una carpeta en la computadora portátil de un desarrollador.",
      "Un Proyecto no puede contener integraciones."
    ],
    "whyEs": [
      "La agrupación de recursos relacionados le da al equipo un diseño, despliegue y límites de observación coherentes.",
      "Los proyectos organizan los recursos; no hacen que cada conexión sea globalmente innecesaria.",
      "Un Proyecto es una construcción de diseño e implementación de OIC, no simplemente una carpeta local.",
      "Las integraciones son recursos centrales que se pueden organizar dentro de un Proyecto."
    ],
    "extraEs": "Un proyecto puede agrupar integraciones relacionadas y recursos compartidos.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Activation": {
    "optionsEs": [
      "La activación hace que una integración esté disponible para ejecutarse; La configuración y la validación deben completarse primero.",
      "La activación elimina la versión en tiempo de diseño.",
      "La activación activa automáticamente todas las ediciones futuras.",
      "La activación es solo para Conexiones."
    ],
    "whyEs": [
      "Solo una versión activada o implementada está disponible para el cliente que invoca en tiempo de ejecución.",
      "La activación hace que una versión sea ejecutable; no elimina su recurso de diseño.",
      "Se debe implementar o activar una edición posterior de manera adecuada; Guardar no es una actualización automática en vivo.",
      "Las integraciones están activadas; Se configura y prueba una conexión para que la utilicen."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Business Identifiers": {
    "optionsEs": [
      "Los identificadores comerciales son campos de seguimiento seleccionados que ayudan a localizar y correlacionar instancias de mensajes durante el seguimiento.",
      "Cifran la carga útil completa.",
      "Reemplazan las asignaciones.",
      "Son la contraseña del adaptador."
    ],
    "whyEs": [
      "Un valor comercial indexado permite a los operadores correlacionar un evento visible para el cliente con su instancia OIC.",
      "El seguimiento de un campo comercial seleccionado no cifra la carga útil completa.",
      "Los identificadores comerciales ayudan a localizar instancias; no transforman los datos de origen en datos de destino.",
      "Las contraseñas del adaptador son propiedades de seguridad, no valores de seguimiento empresarial."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "REST and SOAP": {
    "optionsEs": [
      "REST comúnmente expone API HTTP orientadas a recursos, mientras que SOAP usa un contrato de mensaje definido como WSDL.",
      "SOAP nunca utiliza XML.",
      "REST requiere WSDL.",
      "Ambos eliminan la necesidad de autenticación."
    ],
    "whyEs": [
      "El contrato API determina la estructura del mensaje y la semántica de operación; REST y SOAP exponen diferentes modelos de contrato.",
      "Los mensajes y contratos SOAP suelen utilizar XML; decir que SOAP nunca lo usa invierte la distinción.",
      "WSDL describe contratos de servicios de estilo SOAP; Las API REST no lo requieren universalmente.",
      "Ninguno de los protocolos elimina la necesidad de proteger un punto final y autorizar a las personas que llaman."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Connection test": {
    "optionsEs": [
      "Pruebe una conexión después de la configuración para validar que Oracle Integration pueda llegar al punto final con las propiedades y la seguridad configuradas.",
      "Las pruebas activan todas las integraciones dependientes.",
      "Una prueba exitosa garantiza asignaciones de carga útil empresarial.",
      "Testing publica un certificado."
    ],
    "whyEs": [
      "Solo se puede confiar en una conexión por su punto final configurado y su seguridad después de pasar la verificación de conectividad relevante.",
      "La prueba de conectividad no activa todas las integraciones que hacen referencia a una conexión.",
      "Una prueba de conexión no puede demostrar que una integración asigne las cargas comerciales correctamente.",
      "La ​​publicación o rotación de certificados es una tarea separada de gestión de seguridad."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Connectivity Agent": {
    "optionsEs": [
      "Utilice un Agente de Conectividad cuando Oracle Integration necesite acceso controlado a aplicaciones o sistemas dentro de una red privada local.",
      "Es un complemento del navegador para Map Editor.",
      "Reemplaza todos los certificados TLS.",
      "Expone el host del agente directamente a cada cliente de Internet."
    ],
    "whyEs": [
      "El agente ofrece una ruta controlada desde OIC a servicios a los que no se puede acceder directamente desde la nube.",
      "El agente se instala en un entorno de red para conectividad, no dentro del Editor de mapas como complemento del navegador.",
      "Un agente no elimina los requisitos de identidad y confianza de TLS para puntos finales protegidos.",
      "El agente habilita el acceso saliente controlado; no debería exponer su host a todos los clientes de Internet."
    ],
    "extraEs": "Un grupo de agentes se puede asociar con una conexión cuando el adaptador admite esa ruta.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Private Endpoint": {
    "optionsEs": [
      "Un punto final privado admite la conectividad de red privada a recursos elegibles sin tratarlo como el mismo mecanismo que el Agente de Conectividad.",
      "Es sinónimo de servidor FTP.",
      "Almacena secretos del cliente OAuth.",
      "Convierte SOAP a REST."
    ],
    "whyEs": [
      "Las redes privadas alcanzan los recursos elegibles sin equiparar el enrutamiento de la red con un agente instalado.",
      "Un punto final privado es un mecanismo de conectividad de red, no un servidor FTP.",
      "Los secretos de OAuth pertenecen a la configuración de seguridad de conexión aprobada, no a un punto final privado.",
      "El enrutamiento privado no convierte un protocolo de aplicación de SOAP a REST."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Trust Certificate": {
    "optionsEs": [
      "Un certificado de confianza permite a un cliente confiar en el certificado presentado por un servidor remoto o una autoridad certificadora.",
      "Demuestra la identidad del cliente para cada servidor por sí mismo.",
      "Es una contraseña SFTP.",
      "Configura un horario."
    ],
    "whyEs": [
      "El cliente necesita una cadena confiable para validar el servidor durante la negociación TLS.",
      "Confiar en un certificado de servidor es diferente a presentar un certificado de identidad de cliente para mTLS.",
      "La autenticación de contraseña SFTP es independiente de la confianza del certificado TLS.",
      "Un cronograma controla el tiempo; un certificado de confianza controla la validación del certificado."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Identity Certificate": {
    "optionsEs": [
      "Un Certificado de Identidad se utiliza cuando el cliente debe presentar un certificado para establecer su identidad, como TLS mutuo.",
      "Es solo para monitorear paneles.",
      "Reemplaza la URL del punto final.",
      "Es una tabla de búsqueda."
    ],
    "whyEs": [
      "En mTLS, el servidor identifica al cliente mediante su certificado y el cliente valida la identidad del servidor.",
      "Un certificado de identidad participa en la autenticación del cliente, no en la representación del panel.",
      "La URL del punto final identifica dónde llamar; un certificado identifica al cliente durante TLS cuando es necesario.",
      "Una búsqueda asigna valores comerciales y no puede sustituir la identidad del cliente."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "OAuth client credentials": {
    "optionsEs": [
      "Client Credentials es apropiado para un cliente OAuth 2.0 de máquina a máquina que obtiene un token sin un usuario final interactivo.",
      "Requiere que el usuario inicie sesión en un navegador cada vez.",
      "Es un reemplazo de TLS.",
      "Se utiliza solo para activadores REST entrantes."
    ],
    "whyEs": [
      "Un cliente de máquina puede obtener un token utilizando sus propias credenciales sin un paso de autorización humana interactiva.",
      "Credenciales de cliente está destinado a un cliente no interactivo; El inicio de sesión del usuario del navegador pertenece a otros flujos.",
      "La autorización de OAuth todavía depende de TLS para proteger el intercambio de tokens y el tráfico de API.",
      "Un token de servicio a servicio puede proteger las llamadas salientes admitidas; el flujo no es solo para llamadas Trigger entrantes."
    ],
    "extraEs": "El proveedor puede requerir un punto final y un Scope de token configurados.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Authorization Code": {
    "optionsEs": [
      "El código de autorización es un flujo de OAuth 2.0 que implica la autorización y redirección del usuario, a diferencia de un flujo de credenciales de cliente de solo servicio.",
      "Nunca involucra un servidor de autorización.",
      "Envía una clave privada en una URL.",
      "Es lo mismo que la Autenticación Básica."
    ],
    "whyEs": [
      "Esta concesión conlleva un paso de autorización del usuario y redirección antes de que se emitan los tokens.",
      "El código de autorización implica un servidor de autorización que emite un código de autorización y tokens.",
      "La clave privada de un cliente no debe exponerse en la URL de un navegador.",
      "La ​​autenticación básica presenta las credenciales directamente; El código de autorización es una concesión de OAuth 2.0 diferente."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "SFTP": {
    "optionsEs": [
      "SFTP transfiere archivos a través de SSH, mientras que FTP es un protocolo independiente y no se debe asumir que proporciona la misma protección.",
      "SFTP es un método HTTP.",
      "SFTP es SOAP sobre TLS.",
      "SFTP no puede utilizar credenciales."
    ],
    "whyEs": [
      "SSH proporciona el contexto de autenticación de host y transporte seguro utilizado por SFTP.",
      "SFTP es un protocolo de transferencia de archivos SSH, no un método HTTP.",
      "SOAP sobre TLS es un patrón de mensajería de aplicaciones, no SFTP.",
      "SFTP puede autenticarse con una contraseña o clave SSH de acuerdo con la política del servidor."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "REST Adapter": {
    "optionsEs": [
      "El adaptador REST puede exponer o invocar servicios RESTful según su función de activación o invocación configurada.",
      "Solo puede ser un desencadenante entrante.",
      "Sólo puede enviar XML.",
      "Crea automáticamente recursos OCI."
    ],
    "whyEs": [
      "La función configurada determina si OIC expone un punto final REST o llama a uno.",
      "El adaptador REST puede desempeñar una función de invocación saliente compatible, así como una función de activación entrante.",
      "Las cargas útiles REST no se limitan a XML; JSON es común cuando lo define el contrato API.",
      "Una llamada de Adaptador no aprovisiona automáticamente una infraestructura OCI no relacionada."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Dynamic endpoint changes": {
    "optionsEs": [
      "Utilice capacidades documentadas de conexión de invocación dinámica solo cuando sean compatibles y controle cuidadosamente cualquier entrada de punto final dinámico.",
      "Cambie las URL de producción de una carga útil no validada y sin controles.",
      "Almacene secretos en una expresión de mapeo.",
      "Desactivar las pruebas de conexión de forma permanente."
    ],
    "whyEs": [
      "Un objetivo seleccionado en tiempo de ejecución debe permanecer dentro de un límite de conectividad autorizado y validado.",
      "Las URL de tiempo de ejecución no validadas pueden redirigir llamadas a hosts no deseados y violar los controles de seguridad.",
      "Las expresiones de mapeo no son un sustituto seguro del almacenamiento secreto aprobado.",
      "Las pruebas de conexión siguen siendo útiles después de cambiar el comportamiento o la configuración del terminal."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Map Editor": {
    "optionsEs": [
      "Utilice Map Editor para transformar y asignar estructuras de datos de origen a estructuras de datos de destino.",
      "Es la página de monitoreo del tiempo de ejecución.",
      "Instala el Agente de Conectividad.",
      "Programa una integración."
    ],
    "whyEs": [
      "Se requiere un mapeo de origen a destino para que la carga útil de destino se ajuste a su esquema y significado.",
      "Map Editor transforma datos; El monitoreo del tiempo de ejecución se maneja a través de la observabilidad y las vistas de instancia.",
      "La instalación del Agente de conectividad es independiente de la asignación de datos.",
      "La ​​configuración del cronograma controla la recurrencia, no la asignación de campos de origen a destino."
    ],
    "extraEs": "Un mapeo debe probarse con elementos opcionales y repetidos.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Data Stitch": {
    "optionsEs": [
      "Utilice Data Stitch para crear asignaciones complejas o componer datos cuando esa acción sea apropiada.",
      "Reemplaza a todos los manejadores de fallas.",
      "Es un esquema de autenticación.",
      "Activa un proyecto."
    ],
    "whyEs": [
      "Ensambla estructuras complejas donde una asignación escalar perdería forma o elementos repetidos.",
      "Data Stitch compone datos; Los manejadores de fallas aún administran errores en su propio alcance.",
      "La autenticación se configura a través de la seguridad de la conexión, no a través de Data Stitch.",
      "La ​​implementación de un Proyecto no se activa simplemente componiendo una tarea compleja."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Assign": {
    "optionsEs": [
      "Utilice una acción Assign para establecer valores para variables escalares en una orquestación.",
      "Solo puede enviar notificaciones por correo electrónico.",
      "Es obligatorio antes de cada invocación.",
      "Reemplaza un Switch."
    ],
    "whyEs": [
      "Una variable escalar puede conservar un pequeño valor calculado para expresiones o acciones posteriores.",
      "Assign establece valores de variables; La notificación es una acción separada o un comportamiento de integración.",
      "Un Invoke puede utilizar una asignación directa sin una Asignación previa obligatoria.",
      "Cambiar de rama según las condiciones; Assign no reemplaza el enrutamiento de flujo de control."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Switch": {
    "optionsEs": [
      "Utilice una acción Switch para enrutar el procesamiento a una rama según expresiones.",
      "Ejecuta todas las sucursales al mismo tiempo.",
      "Solo funciona en integraciones programadas.",
      "Es un almacén de certificados."
    ],
    "whyEs": [
      "Las expresiones condicionales determinan qué rama se ejecuta para los datos comerciales actuales.",
      "Switch selecciona una rama coincidente; Paralelo es la construcción para ramas concurrentes independientes.",
      "El enrutamiento condicional puede ser útil más allá de las integraciones programadas.",
      "Los certificados se administran en la configuración de seguridad, no en una acción de cambio."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "For Each": {
    "optionsEs": [
      "Utilice For Each para iterar sobre elementos repetidos en una carga útil.",
      "Úselo solo cuando un punto final no esté disponible.",
      "Convierte un CSV automáticamente.",
      "Almacena permanentemente un archivo."
    ],
    "whyEs": [
      "Una colección de elementos repetidos proporciona los elementos para cada iteración.",
      "For Each depende de una recopilación repetida, no de la disponibilidad del punto final.",
      "El análisis de CSV requiere un esquema de archivo apropiado o una operación de archivo de escenario; el bucle por sí solo no lo analiza.",
      "La ​​iteración procesa elementos; El almacenamiento permanente de archivos es una responsabilidad diferente."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "While": {
    "optionsEs": [
      "Usar While cuando las acciones deben repetirse mientras se cumple una condición; asegúrese de que la condición pueda cambiar para evitar un bucle sin fin.",
      "Siempre se ejecuta exactamente una vez.",
      "Es sinónimo de Paralelo.",
      "Se utiliza para cargar un certificado."
    ],
    "whyEs": [
      "La condición debe reevaluarse y eventualmente cambiarse para finalizar el ciclo.",
      "Mientras que puede ejecutarse cero, una o muchas veces dependiendo de su condición.",
      "Paralelo ejecuta ramas independientes al mismo tiempo; Mientras repite una ruta condicionalmente.",
      "La ​​carga de certificados es una operación de gestión de seguridad no relacionada con el bucle."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Parallel": {
    "optionsEs": [
      "Utilice Parallel cuando se puedan ejecutar tareas independientes al mismo tiempo y luego diseñe deliberadamente la agregación de fallas y las dependencias de datos.",
      "Úselo cuando cada acción necesite el resultado de la acción anterior.",
      "Elimina todo comportamiento defectuoso.",
      "Es una sintaxis de programación."
    ],
    "whyEs": [
      "Las ramas independientes pueden funcionar simultáneamente sólo cuando sus efectos secundarios y dependencias lo permitan.",
      "Si cada paso necesita el resultado anterior, las ramas concurrentes romperían la dependencia.",
      "La ejecución paralela aún necesita manejo y agregación de fallas.",
      "La ​​sintaxis de programación controla los tiempos de inicio, no la ejecución paralela dentro de un flujo."
    ],
    "extraEs": "La agregación de fallas y las dependencias necesitan un diseño deliberado.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Scope fault handler": {
    "optionsEs": [
      "Utilice un Scope para agrupar acciones y adjuntar manejo de fallas local para ese alcance de trabajo.",
      "un Scope es solo visual y no puede manejar fallas.",
      "Reemplaza al Global Fault Handler en todos los casos.",
      "Es un Scope OAuth."
    ],
    "whyEs": [
      "Un ámbito define dónde su controlador local puede interceptar fallas de acciones agrupadas.",
      "un Scope puede definir un límite de falla local; es más que una agrupación visual.",
      "Un manejador local no cubre todas las fallas fuera de su alcance; el manejo global tiene un Scope diferente.",
      "un Scope OAuth es un permiso simbólico y no es lo mismo que una acción de alcance OIC."
    ],
    "extraEs": "Una falla detectada localmente se puede propagar con Re-throw Fault cuando sea necesario.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Stage File": {
    "optionsEs": [
      "Utilice Stage File en una integración programada para procesar archivos, incluido el procesamiento segmentado apropiado para diseños de archivos grandes.",
      "Es un repositorio de archivos permanente externo.",
      "Es un código de estado HTTP.",
      "Reemplaza la conexión del Adaptador FTP."
    ],
    "whyEs": [
      "Las operaciones respaldadas por archivos pueden limitar el consumo de memoria durante el procesamiento segmentado adecuado.",
      "Stage File es para el procesamiento de archivos transitorios, no para un repositorio permanente externo.",
      "Un código de estado HTTP describe una respuesta web, no una acción de procesamiento de archivos.",
      "El adaptador FTP llega a un punto final de archivo; Stage File procesa datos preparados y no reemplaza esa conexión."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Re-throw Fault": {
    "optionsEs": [
      "Utilice Re-throw Fault cuando una falla detectada deba propagarse después del manejo o enriquecimiento local.",
      "Marca silenciosamente una falla exitosa.",
      "Mapea todos los campos comerciales.",
      "Espera un cronograma."
    ],
    "whyEs": [
      "La propagación conserva el estado de error después de que un controlador local haya agregado contexto o realizado una limpieza.",
      "Re-throw Fault propaga una falla en lugar de hacerla exitosa de manera silenciosa.",
      "El mapeo de campos se realiza mediante Map o acciones de transformación relacionadas, no mediante Re-throw Fault.",
      "La ​​programación del tiempo no está relacionada con la propagación de una falla detectada."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Schedule Integration": {
    "optionsEs": [
      "Una integración programada se inicia mediante su programación configurada o una ejecución ad hoc, no por una conexión Trigger externa.",
      "Debe tener un disparador REST.",
      "No puede invocar ninguna Conexión.",
      "No tiene historial de ejecución."
    ],
    "whyEs": [
      "Una recurrencia configurada o una ejecución ad hoc autorizada inicia el trabajo sin una conexión Trigger externa.",
      "Su evento iniciador es el cronograma, por lo que un Trigger REST no es obligatorio.",
      "Una integración programada puede utilizar conexiones de invocación compatibles para realizar el trabajo.",
      "Las ejecuciones se pueden observar e investigar después de la ejecución."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Schedule timing": {
    "optionsEs": [
      "Defina deliberadamente el cronograma, incluida la recurrencia y el comportamiento de la zona horaria aplicable, luego verifique la ventana de ejecución planificada.",
      "Supongamos que cada programación se ejecuta en la zona horaria del navegador del usuario.",
      "Utilice un cronograma sólo después de que ocurra una falla.",
      "Nunca supervise la ejecución de una programación."
    ],
    "whyEs": [
      "Una recurrencia debe coincidir con el calendario comercial y la zona horaria para ejecutarse en el momento previsto.",
      "Se debe verificar la zona horaria del horario configurado; la zona horaria del navegador no tiene autoridad.",
      "Un cronograma es una recurrencia planificada, no una reacción que existe sólo después de una falla.",
      "La ​​supervisión es necesaria para verificar el inicio, la finalización y el fallo reales."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Schedule parameters": {
    "optionsEs": [
      "Los parámetros de programación hacen que una ejecución programada sea configurable sin rediseñar toda su orquestación.",
      "Son un sustituto de la seguridad de la conexión.",
      "Exponen secretos en una URL pública.",
      "No se pueden actualizar."
    ],
    "whyEs": [
      "Los parámetros separan una entrada específica de la ejecución del diseño de orquestación implementado.",
      "Los parámetros proporcionan valores de ejecución; La seguridad de la conexión aún administra las credenciales.",
      "Publicar secretos en una URL crearía exposición y no es un diseño de parámetros.",
      "Los parámetros admitidos se pueden actualizar o anular para una ejecución autorizada."
    ],
    "extraEs": "Una ejecución programada manualmente puede utilizar los valores de parámetros proporcionados.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Manual run": {
    "optionsEs": [
      "Se puede utilizar una ejecución manual para iniciar una integración programada configurada cuando el caso de uso operativo lo permita.",
      "Lo convierte permanentemente en una Integración de Aplicación.",
      "Omite todas las asignaciones.",
      "Deshabilita la monitorización."
    ],
    "whyEs": [
      "Un operador puede iniciar un flujo de estilo programado configurado bajo demanda sin redefinir su estilo.",
      "Una ejecución manual no cambia el estilo de integración de forma permanente.",
      "Las asignaciones y acciones siguen siendo parte del flujo durante la ejecución manual.",
      "Una ejecución iniciada manualmente todavía aparece en el monitoreo operativo."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Batch design": {
    "optionsEs": [
      "Para el trabajo por lotes, diseñe para procesamiento limitado, idempotencia cuando corresponda y recuperación observable en lugar de asumir una única ejecución ilimitada.",
      "Procese siempre una carga útil ilimitada en una llamada sincrónica.",
      "Nunca utilice identificadores de seguimiento.",
      "Eliminar errores sin investigar."
    ],
    "whyEs": [
      "Los fragmentos acotados y la recuperación idempotente hacen que las fallas parciales del lote sean diagnosticables y repetibles.",
      "Un lote ilimitado puede exceder los límites de tiempo o de memoria sincrónicos.",
      "Los identificadores de seguimiento ayudan a investigar el progreso parcial y el procesamiento duplicado.",
      "Los errores deben diagnosticarse y recuperarse, no descartarse sin pruebas."
    ],
    "extraEs": "La idempotencia es importante cuando se vuelve a ejecutar un lote parcialmente completado.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "File polling": {
    "optionsEs": [
      "Una integración programada puede sondear o procesar archivos utilizando conexiones de archivos apropiadas y acciones de Stage File.",
      "El sondeo de archivos requiere un Trigger REST.",
      "El sondeo convierte SFTP en FTP.",
      "Significa que no se necesita ninguna configuración de programación."
    ],
    "whyEs": [
      "Un flujo de trabajo de archivos basado en el tiempo puede inspeccionar repetidamente una fuente configurada y procesar archivos elegibles.",
      "El sondeo normalmente está impulsado por una programación o un Trigger de archivo compatible, no necesariamente un Trigger REST.",
      "Sondear una fuente SFTP segura no cambia su transporte a FTP.",
      "Un proceso de sondeo aún necesita una recurrencia configurada o un mecanismo de eventos compatible."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Failure response": {
    "optionsEs": [
      "Una ejecución programada fallida debe investigarse mediante monitoreo y manejarse de acuerdo con la estrategia de recuperación documentada y la idempotencia comercial.",
      "Repita ciegamente cada transacción fallida.",
      "Desactive todas las notificaciones de errores.",
      "Supongamos que el objetivo no se vio afectado."
    ],
    "whyEs": [
      "Las comprobaciones de monitorización y de idempotencia revelan si una ejecución fallida se puede reanudar de forma segura.",
      "La repetición ciega puede duplicar transacciones si el objetivo se comprometió antes de que se observara la falla.",
      "Desactivar la notificación hace que una programación fallida sea menos visible para los operadores.",
      "Una instancia OIC fallida no prueba que no se haya realizado ningún trabajo en el lado objetivo."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "iCal": {
    "optionsEs": [
      "Utilice una expresión iCal válida solo cuando la configuración del horario la admita; revisarlo contra la recurrencia prevista.",
      "iCal es una política de autenticación del Adaptador.",
      "iCal asigna cargas útiles JSON.",
      "iCal es un protocolo TLS."
    ],
    "whyEs": [
      "La sintaxis del calendario representa recurrencia en lugar de conexión, seguridad o comportamiento de mapeo.",
      "iCal expresa la recurrencia del calendario y no es una política de seguridad del Adaptador.",
      "La transformación de la carga útil pertenece a las acciones de mapeo, no a las expresiones de recurrencia.",
      "TLS asegura el transporte; iCal configura la hora."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Nightly processing": {
    "optionsEs": [
      "Un lote nocturno es un caso de uso común de integración de programación cuando no se requiere una respuesta inmediata del cliente que invoca.",
      "Requiere una respuesta sincrónica a un cliente web.",
      "Debe ejecutarse en paralelo sin dependencias.",
      "No puede utilizar un destino de base de datos."
    ],
    "whyEs": [
      "El trabajo por lotes sin una persona que llama en espera se alinea naturalmente con el inicio programado.",
      "Un lote nocturno no tiene un llamador web que deba esperar sincrónicamente hasta que finalice.",
      "El paralelo no es obligatorio; las dependencias y la capacidad objetivo deciden la simultaneidad.",
      "Una integración programada puede utilizar operaciones de base de datos admitidas donde se configura la conectividad."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Run calendar": {
    "optionsEs": [
      "Utilice la información de monitoreo de ejecución programada para confirmar el tiempo, el estado y las fallas en lugar de confiar en una supuesta recurrencia.",
      "Un calendario reemplaza cada prueba.",
      "Un calendario almacena secretos del cliente.",
      "Un calendario solo está disponible para llamadas de REST Trigger."
    ],
    "whyEs": [
      "Los registros de ejecución reales verifican si la recurrencia configurada produjo las ejecuciones previstas.",
      "Un calendario ayuda a inspeccionar las ejecuciones reales pero no reemplaza las pruebas funcionales.",
      "Los secretos del cliente pertenecen a la seguridad de la conexión, no a los metadatos del calendario de ejecución.",
      "Un calendario de ejecución se refiere a ejecuciones programadas, no únicamente a llamadas de disparador REST."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Activity and observability": {
    "optionsEs": [
      "Utilice las vistas de observabilidad y monitoreo de Oracle Integration para investigar el comportamiento del tiempo de ejecución y los datos operativos.",
      "Utilice Map Editor para reemplazar el monitoreo.",
      "Desactive el seguimiento para un diagnóstico más rápido.",
      "Confíe únicamente en una captura de pantalla del cliente."
    ],
    "whyEs": [
      "La evidencia en tiempo de ejecución identifica qué instancia y acción tuvieron éxito o fracasaron.",
      "Map Editor transforma datos y no puede reemplazar el monitoreo de instancias en tiempo de ejecución.",
      "Deshabilitar el seguimiento elimina una forma útil de correlacionar y diagnosticar mensajes comerciales.",
      "La ​​captura de pantalla de un cliente carece de evidencia a nivel de acción disponible en Observability."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Business tracking": {
    "optionsEs": [
      "Los identificadores comerciales ayudan a los operadores a encontrar mensajes utilizando campos comerciales significativos, como un número de pedido.",
      "Reemplazan las credenciales de servicio.",
      "Corrigen automáticamente los fallos de mapeo.",
      "Son solo comentarios en tiempo de diseño."
    ],
    "whyEs": [
      "Una clave comercial estable hace que se pueda buscar una instancia sin conocer los identificadores internos del tiempo de ejecución.",
      "Los identificadores comerciales son valores de búsqueda y correlación, no credenciales de servicio.",
      "El seguimiento de un identificador no repara automáticamente una asignación fallida.",
      "Se utilizan durante búsquedas operativas, no solo como comentarios de diseño."
    ],
    "extraEs": "Es preferible un valor comercial estable y no sensible para localizar una instancia.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "HTTP 401": {
    "optionsEs": [
      "Una respuesta HTTP 401 normalmente indica que se requiere autenticación o que falló; verificar las credenciales o la configuración del token.",
      "Siempre significa que el recurso no existe.",
      "Acredita que se otorgó la autorización.",
      "Es una respuesta asincrónica exitosa."
    ],
    "whyEs": [
      "El objetivo rechazó o solicitó autenticación antes de permitir la operación protegida.",
      "Un recurso faltante es más consistente con 404 que un desafío de autenticación.",
      "401 no prueba que se haya concedido la autorización; la autenticación no ha tenido éxito.",
      "Una respuesta 401 es un error, no un reconocimiento asincrónico exitoso."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "HTTP 403": {
    "optionsEs": [
      "Una respuesta HTTP 403 indica que el servidor entendió la solicitud, pero se niega a atenderla; comprueba los permisos del cliente que invoca.",
      "Siempre es una falla de DNS.",
      "Indica un error de sintaxis en una carga útil JSON.",
      "Garantiza un certificado caducado."
    ],
    "whyEs": [
      "El objetivo entendió la solicitud pero no autorizó al cliente que invoca para ese recurso u operación.",
      "La resolución de DNS falla antes de que el destino pueda devolver una respuesta HTTP 403.",
      "Un cuerpo JSON con formato incorrecto generalmente justifica un análisis de validación de solicitud, a menudo alrededor de 400, no un diagnóstico automático 403.",
      "La ​​caducidad del certificado puede causar una falla de TLS, pero 403 por sí solo no establece esa causa."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "HTTP 429": {
    "optionsEs": [
      "Una respuesta HTTP 429 indica limitación de velocidad; aplicar la guía del proveedor de endpoints y una estrategia controlada de reintento/retraso cuando corresponda.",
      "Envíe inmediatamente reintentos ilimitados en paralelo.",
      "Trátelo como una carga útil exitosa.",
      "Reemplácelo con Autenticación básica."
    ],
    "whyEs": [
      "El proveedor está indicando que la tasa de solicitudes excedió su umbral permitido.",
      "Los reintentos paralelos ilimitados empeoran la limitación de velocidad y pueden crear una tormenta de reintentos.",
      "429 es una respuesta de falla de un límite de velocidad, no una carga comercial aceptada.",
      "Cambiar el modo de autenticación no elimina el límite de solicitudes del proveedor."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "HTTP 503": {
    "optionsEs": [
      "Una respuesta HTTP 503 comúnmente indica una indisponibilidad temporal del servicio; evaluar el comportamiento de reintento transitorio, la idempotencia y la escalada.",
      "Siempre significa un WSDL no válido.",
      "Se puede solucionar cambiando solo una variable de seguimiento.",
      "Demuestra que el objetivo procesó la solicitud."
    ],
    "whyEs": [
      "La indisponibilidad del servicio puede ser transitoria, pero la seguridad del reintento depende de la operación y el estado objetivo.",
      "Un servicio no disponible no prueba por sí solo que un WSDL no sea válido.",
      "Cambiar un campo de seguimiento mejora el diagnóstico pero no puede restaurar un objetivo no disponible.",
      "Un 503 no puede probar si se realizó una escritura anterior; comprobar la evidencia del lado del objetivo."
    ],
    "extraEs": "Las decisiones de reintento deben considerar si el objetivo ya ha comprometido el trabajo.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "Payload logging": {
    "optionsEs": [
      "Utilice el registro de carga útil de forma cuidadosa, equilibrando el valor del diagnóstico con los datos confidenciales y las consideraciones de retención.",
      "Registre todas las credenciales para simplificar el soporte.",
      "El registro de carga útil elimina la necesidad de realizar pruebas.",
      "Convierte un Trigger en un Invoke."
    ],
    "whyEs": [
      "La visibilidad del diagnóstico debe equilibrarse con la exposición de datos comerciales confidenciales.",
      "Las credenciales en los registros de carga útil crean exposición; enmascarar u omitir valores sensibles.",
      "Los registros ayudan al diagnóstico pero no reemplazan las pruebas funcionales controladas.",
      "La configuración de registro no convierte un Trigger en un Invoke."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Connection failure": {
    "optionsEs": [
      "Cuando falla una conexión, primero aísle la accesibilidad del punto final, la configuración del adaptador, las credenciales, los certificados y la ruta de red.",
      "Comience cambiando las asignaciones no relacionadas.",
      "Supongamos que la activación lo reparará.",
      "Eliminar todos los registros de seguimiento."
    ],
    "whyEs": [
      "El punto final, la ruta, TLS y la seguridad son las capas que deben funcionar antes de que el mapeo de carga útil importe.",
      "Un cambio de mapeo no puede reparar una falla que ocurre antes de alcanzar el objetivo.",
      "La activación no corrige automáticamente la configuración del terminal, la red o las credenciales.",
      "Eliminar la evidencia de monitoreo dificulta la investigación de la causa raíz."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Transformation diagnostics": {
    "optionsEs": [
      "Para una carga útil mapeada incorrecta, inspeccione los datos de origen, el contrato de destino, la lógica de mapeo y la evidencia de prueba antes de cambiar el diseño.",
      "Cambie únicamente la contraseña de destino.",
      "Supongamos que Map Editor ignora los valores de origen.",
      "Desactivar la validación permanentemente."
    ],
    "whyEs": [
      "El valor objetivo incorrecto es evidencia sobre los datos de origen, las reglas de mapeo o la interpretación del contrato.",
      "Una contraseña de destino afecta la autenticación, no el significado de un campo asignado; primero inspeccione la fuente y el mapeo.",
      "Map Editor evalúa valores y expresiones de origen; asumir lo contrario oscurece la falla de transformación.",
      "Deshabilitar la validación puede ocultar datos incorrectos y no repara el contrato de mapeo."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Resubmit decision": {
    "optionsEs": [
      "Antes de volver a enviar una instancia fallida, confirme la causa del error y si volver a intentarlo podría duplicar una transacción comercial.",
      "Vuelva a enviar cada falla sin revisión.",
      "Un nuevo envío elimina el historial de auditoría.",
      "Reenviar es una operación de certificado."
    ],
    "whyEs": [
      "Un estatus OIC fallido no prueba que el objetivo haya revertido su efecto secundario.",
      "Un reenvío ciego puede repetir una escritura que el objetivo ya confirmó.",
      "La nueva presentación debe preservar la evidencia operativa en lugar de borrar la pista de auditoría.",
      "El reenvío se refiere al procesamiento fallido de mensajes, no a la gestión de certificados."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "AI Assistant scope": {
    "optionsEs": [
      "Oracle Integration AI Assistant puede acelerar las tareas operativas y de diseño admitidas, pero sus resultados aún requieren la revisión del desarrollador.",
      "Hace que cada integración generada sea segura para la producción de forma automática.",
      "Almacena secretos públicamente.",
      "Elimina todos los requisitos de prueba."
    ],
    "whyEs": [
      "El contenido generado acelera la redacción, pero no puede verificar el contrato comercial o los controles de implementación por sí solo.",
      "Los diseños generados aún necesitan revisión para contratos, seguridad, mapeos y controles de producción.",
      "La asistencia de la IA no justifica el almacenamiento de secretos en artefactos públicos.",
      "Las pruebas siguen siendo necesarias incluso cuando un diseño fue generado por IA."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Natural language creation": {
    "optionsEs": [
      "Utilice funciones de lenguaje natural compatibles para ayudar a crear proyectos o integraciones y luego valide el diseño, las conexiones, las asignaciones y la seguridad resultantes.",
      "Implementar sin revisión porque el mensaje era claro.",
      "Úselo solo para cambiar un certificado.",
      "Supongamos que accede a todos los puntos finales privados."
    ],
    "whyEs": [
      "Un mensaje de texto es una entrada para el diseño, no una prueba de que el flujo resultante esté listo para producción.",
      "Un mensaje claro no demuestra que el flujo generado cumpla con todos los requisitos de seguridad y tiempo de ejecución.",
      "El diseño de lenguaje natural es más amplio que el mantenimiento de certificados por sí solo.",
      "No se puede suponer que los diseños generados lleguen a recursos privados sin una conectividad configurada."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "AI mapping recommendations": {
    "optionsEs": [
      "Las recomendaciones de mapeo de IA pueden acelerar el trabajo de mapeo, pero el desarrollador sigue siendo responsable de revisar la exactitud del origen y el destino.",
      "Las recomendaciones sustituyen a los esquemas de destino.",
      "Activan automáticamente una integración.",
      "Son una subvención de OAuth."
    ],
    "whyEs": [
      "La similitud estadística entre campos no establece corrección semántica o de tipo.",
      "Las recomendaciones aún deben cotejarse con el esquema objetivo real.",
      "Una sugerencia de mapeo no activa ni implementa una integración.",
      "Las concesiones de OAuth autorizan a los clientes; no están relacionados con las sugerencias de mapeo."
    ],
    "extraEs": "El desarrollador debe verificar el significado semántico, el tipo de datos y la cardinalidad.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "AI troubleshooting": {
    "optionsEs": [
      "El análisis asistido por IA puede ayudar a investigar el comportamiento y los errores en tiempo de ejecución, mientras que la evidencia operativa y los controles siguen siendo esenciales.",
      "El análisis de IA elimina los datos de seguimiento.",
      "La IA garantiza la causa raíz sin pruebas.",
      "La IA convierte los errores en éxitos."
    ],
    "whyEs": [
      "Una causa sugerida debe compararse con la instancia real y la evidencia del objetivo.",
      "El análisis de IA depende de pruebas como los registros de instancias y el flujo de actividad.",
      "Una explicación plausible de la IA es una hipótesis hasta que la evidencia en tiempo de ejecución la confirma.",
      "La ​​asistencia de IA no convierte una instancia fallida en una transacción exitosa."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "OCI Generative AI": {
    "optionsEs": [
      "Las acciones de IA generativa de OCI se pueden utilizar dentro de una integración para tareas de IA admitidas después de las decisiones de seguridad y configuración requeridas.",
      "Requieren colocar claves API en un repositorio público de GitHub.",
      "Reemplazan todos los Adaptadores.",
      "Son una característica exclusiva del navegador."
    ],
    "whyEs": [
      "Una acción de IA es una capacidad de integración que aún necesita seguridad y configuración de servicio aprobadas.",
      "Se requiere una configuración de servicio aprobada; publicar claves API no es seguro e innecesario.",
      "Las acciones de IA realizan tareas específicas y no reemplazan todos los adaptadores de conectividad.",
      "Las acciones generativas de IA se ejecutan en diseños de integración compatibles, no solo en un navegador."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "RAG action": {
    "optionsEs": [
      "Una acción RAG de agentes de IA generativa tiene como objetivo hacer preguntas y recibir respuestas basadas en datos empresariales actuales de acuerdo con sus fuentes de conocimiento configuradas.",
      "Es un reemplazo de una conexión SFTP.",
      "Es una acción genérica de cifrado de archivos.",
      "Expone todos los datos sin controles de acceso."
    ],
    "whyEs": [
      "El conocimiento empresarial recuperado fundamenta una respuesta sólo cuando la fuente es relevante, actual y autorizada.",
      "Una acción del GAR utiliza fuentes de conocimiento; no es un reemplazo de SFTP.",
      "La respuesta con recuperación aumentada es diferente a cifrar un archivo.",
      "El acceso al conocimiento todavía requiere controles explícitos de seguridad y gobernanza de datos."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Agentic AI": {
    "optionsEs": [
      "Las capacidades del agente de IA deben evaluarse en función de los requisitos de función, edición, región, permisos y control humano documentados.",
      "Supongamos que todas las funciones de IA están habilitadas en cada arrendamiento.",
      "Utilice la salida del agente como una instrucción de pago de producción no revisada.",
      "Trate a un agente como un cliente de OAuth."
    ],
    "whyEs": [
      "Un agente puede elegir acciones consecuentes, por lo que sus permisos y controles humanos deben ser explícitos.",
      "La edición, la región, la configuración de arrendamiento y los permisos pueden afectar la disponibilidad de las funciones.",
      "Una instrucción de pago de un agente necesita validación y controles humanos o de políticas.",
      "Un agente de IA no es simplemente una credencial de cliente de OAuth."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "AI security": {
    "optionsEs": [
      "Aplique privilegios mínimos, clasificación de datos, revisión de mensajes/salidas y configuración de servicios aprobada al diseñar integraciones habilitadas para IA.",
      "Envíe secretos en indicaciones para mejorar las respuestas.",
      "Omitir controles de acceso porque un modelo es interno.",
      "Deshabilite los registros de auditoría para los flujos de IA."
    ],
    "whyEs": [
      "Los flujos habilitados por modelos pueden procesar datos confidenciales y, por lo tanto, necesitan mínimos privilegios y auditabilidad.",
      "El envío de secretos en mensajes conlleva el riesgo de divulgación y no es necesario para la calidad de la respuesta.",
      "La colocación del modelo interno no elimina los requisitos de autorización y clasificación de datos.",
      "Los registros de auditoría son importantes para investigar decisiones comerciales basadas en IA."
    ],
    "extraEs": "El acceso a datos protegidos debe seguir controles de privilegios mínimos.",
    "translationStatus": "draft-needs-human-proofread"
  },
  "AI descriptions": {
    "optionsEs": [
      "Las descripciones y la documentación asistidas por IA pueden mejorar la claridad, pero los propietarios deben verificar la precisión técnica antes de su publicación.",
      "Cambian el comportamiento del tiempo de ejecución por sí mismos.",
      "Son manejadores de fallas.",
      "Eliminan la necesidad de control de fuente."
    ],
    "whyEs": [
      "Las descripciones generadas ayudan a los humanos sólo cuando reflejan con precisión el diseño implementado.",
      "La documentación generada es descriptiva y en sí misma no altera la lógica del tiempo de ejecución.",
      "La generación de documentación no detecta ni recupera una falla de tiempo de ejecución.",
      "El control y la revisión de fuentes aún son necesarios para los diseños de integración implementados."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  },
  "Feature availability": {
    "optionsEs": [
      "No presentar una capacidad de IA como un objetivo de certificación confirmado únicamente porque aparece en la documentación del producto; distinguir evidencia y disponibilidad.",
      "Cada característica documentada es automáticamente un objetivo del examen.",
      "Las funciones de IA nunca tienen requisitos previos.",
      "La disponibilidad no puede diferir según la región."
    ],
    "whyEs": [
      "Puede existir una capacidad documentada sin estar disponible en cada arrendamiento o confirmada en un plan de examen.",
      "La documentación del producto y el modelo del examen son pruebas diferentes del alcance de la certificación.",
      "Las funciones de IA pueden requerir requisitos previos como edición, permisos o configuración del servicio.",
      "Las regiones y la configuración de arrendamiento pueden afectar lo que está disponible."
    ],
    "extraEs": null,
    "translationStatus": "draft-needs-human-proofread"
  }
};
