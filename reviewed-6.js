/* Original public cases checked against the linked current product pages. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-started-08-04',topic:'Activation',
      question:'Version 1.0.0 has in-progress instances when an engineer activates minor version 1.0.1. What happens to new requests under the documented minor-version behavior?',
      questionEs:'La versión 1.0.0 tiene instancias en curso cuando se activa la versión menor 1.0.1. ¿Qué sucede con las solicitudes nuevas según el comportamiento documentado?',
      url:guide+'activate-integration.html',title:'Activate an Integration — minor-version behavior',
      options:[
        ['They go to 1.0.1 while in-progress 1.0.0 instances complete.','Van a 1.0.1 mientras terminan las instancias 1.0.0 en curso.','Oracle routes new requests to the new minor version and lets older running instances complete.','Oracle dirige las solicitudes nuevas a la versión menor nueva y deja terminar las instancias anteriores.',true],
        ['They continue to enter 1.0.0 until every old instance ends.','Siguen entrando a 1.0.0 hasta que termina toda instancia antigua.','The old version stops receiving new requests after the minor version is activated.','La versión antigua deja de recibir solicitudes nuevas tras activar la versión menor.',false],
        ['All 1.0.0 instances are terminated immediately.','Todas las instancias 1.0.0 terminan de inmediato.','The documented zero-downtime path allows running instances to finish.','La ruta documentada sin interrupción permite terminar a las instancias en curso.',false],
        ['Activation only changes the design canvas, not runtime routing.','La activación solo cambia el diseño, no el enrutamiento de ejecución.','Activation deploys the integration to runtime and changes which version receives new work.','La activación despliega la Integration y cambia qué versión recibe trabajo nuevo.',false]
      ]
    },
    {
      id:'gen-connections-10-04',topic:'Dynamic endpoint changes',
      question:'One flow must call different eligible REST targets based on a tenant identifier, without maintaining one integration and Switch branch per tenant. Which documented capability addresses this?',
      questionEs:'Un flujo debe llamar a distintos destinos REST admitidos según el identificador del cliente, sin mantener una Integration y rama Switch por cada uno. ¿Qué capacidad documentada lo resuelve?',
      url:guide+'dynamically-update-invoke-connections-runtime.html',title:'Dynamically Update Invoke Connections at Runtime',
      options:[
        ['Dynamically update the REST Invoke connection at runtime.','Actualizar dinámicamente la Connection REST Invoke durante la ejecución.','The documented feature selects an eligible invoke target at runtime in one integration.','La función documentada selecciona un destino Invoke admitido durante la ejecución en una sola Integration.',true],
        ['Change the Trigger connection after each request.','Cambiar la Connection Trigger después de cada solicitud.','A Trigger receives the inbound call; the variable target here is outbound.','Un Trigger recibe la llamada entrante; aquí el destino variable es saliente.',false],
        ['Create a Business Identifier for each target URL.','Crear un Business Identifier para cada URL destino.','Business Identifiers support tracking, not runtime invoke endpoint selection.','Los Business Identifiers sirven para seguimiento, no para elegir el endpoint Invoke.',false],
        ['Use a Trust Certificate as the tenant router.','Usar un certificado Trust como enrutador de clientes.','A certificate establishes TLS trust; it does not choose the invoke endpoint.','El certificado establece confianza TLS; no elige el endpoint Invoke.',false]
      ]
    },
    {
      id:'gen-orchestration-10-04',topic:'Re-throw Fault',
      question:'A Scope fault handler catches an Invoke error, but the team wants the failed message sent through the global fault path and error hospital rather than treated as success. Which action belongs in that Scope handler?',
      questionEs:'Un manejador de fallos de Scope captura un error de Invoke, pero el equipo quiere enviar el mensaje fallido por la ruta global y al repositorio de errores, no tratarlo como éxito. ¿Qué acción va en ese manejador?',
      url:guide+'catch-faults-re-throw-fault-action.html',title:'Catch Faults with a Re-throw Fault Action',
      options:[
        ['Re-throw Fault.','Re-throw Fault.','Re-throw in the Scope fault handler propagates the failure to the global fault path, if defined, and then the error hospital.','Re-throw en el manejador de Scope propaga el fallo al manejador global, si existe, y luego al repositorio de errores.',true],
        ['Assign a scalar status of SUCCESS.','Asignar SUCCESS a una variable escalar.','Assign changes a value but does not propagate the caught fault.','Assign cambia un valor, pero no propaga el fallo capturado.',false],
        ['Use For Each without a repeating element.','Usar For Each sin elemento repetido.','For Each iterates data; it is not a fault-propagation action.','For Each itera datos; no propaga fallos.',false],
        ['Place Re-throw only outside every Scope.','Colocar Re-throw únicamente fuera de cualquier Scope.','Oracle restricts Re-throw Fault to the fault-handler section of a Scope.','Oracle limita Re-throw Fault a la sección del manejador de fallos de un Scope.',false]
      ]
    },
    {
      id:'gen-scheduled-10-04',topic:'Run calendar',
      question:'An operator sees a scheduled run at an unexpected hour in the Future runs page. Which time-zone rule should be checked before changing the schedule?',
      questionEs:'Un operador ve una ejecución programada a una hora inesperada en Future runs. ¿Qué regla de zona horaria debe comprobar antes de cambiar el horario?',
      url:guide+'view-future-scheduled-runs-calendar.html',title:'View the Calendar of Schedule Integration Runs',
      options:[
        ['Future runs uses the browser time zone, not the selected user Preferences time zone.','Future runs usa la zona horaria del navegador, no la elegida en Preferencias del usuario.','Oracle explicitly documents this browser-time-zone behavior for the Future runs view.','Oracle documenta expresamente este comportamiento de zona horaria del navegador en Future runs.',true],
        ['Future runs always shows UTC regardless of browser settings.','Future runs siempre muestra UTC sin importar el navegador.','The documented display follows the browser time zone, not a fixed UTC view.','La vista documentada sigue la zona horaria del navegador, no una UTC fija.',false],
        ['The Business Identifier determines the displayed time zone.','El Business Identifier determina la zona horaria mostrada.','Tracking values do not set the Future runs calendar time zone.','Los valores de seguimiento no establecen la zona horaria del calendario.',false],
        ['The FTP Adapter host key controls the displayed hour.','La clave de host del FTP Adapter controla la hora mostrada.','An SSH host key establishes server identity; it cannot change calendar display time.','Una clave de host SSH identifica al servidor; no cambia la hora mostrada.',false]
      ]
    },
    {
      id:'gen-monitoring-10-04',topic:'Resubmit decision',
      question:'A scheduled flow with scheduled parameters failed. The operator sees a Resubmit option used for other asynchronous flows. What is the documented recovery limitation for this instance?',
      questionEs:'Falló un flujo programado con parámetros de horario. El operador conoce Resubmit de otros flujos asíncronos. ¿Qué limitación de recuperación está documentada para esta instancia?',
      url:guide+'resubmit-failed-messages.html',title:'Resubmit Failed Messages — recoverability exceptions',
      options:[
        ['Scheduled flows with scheduled parameters are nonrecoverable by Resubmit.','Los flujos programados con parámetros de horario no se recuperan mediante Resubmit.','Oracle names this pattern as an exception to recoverable asynchronous flows.','Oracle identifica este patrón como excepción a los flujos asíncronos recuperables.',true],
        ['Every scheduled failure is resubmitted automatically without an operator.','Todo fallo programado se reenvía automáticamente sin operador.','Oracle states failed messages are not automatically resubmitted.','Oracle indica que los mensajes fallidos no se reenvían automáticamente.',false],
        ['A synchronous flow can always be resubmitted instead.','Un flujo síncrono siempre puede reenviarse en su lugar.','Synchronous flows also cannot be resubmitted.','Los flujos síncronos tampoco pueden reenviarse.',false],
        ['Discarding the instance preserves a later Resubmit option.','Descartar la instancia conserva la posibilidad de reenviarla después.','Oracle warns that a discarded message cannot be resubmitted.','Oracle advierte que un mensaje descartado no puede reenviarse.',false]
      ]
    },
    {
      id:'gen-ai-07-04',topic:'Agentic AI',
      question:'A project team wants an approved integration to be discoverable as an agentic tool by an external MCP-capable client. Which documented setup is relevant?',
      questionEs:'Un equipo quiere que una Integration aprobada se descubra como herramienta de agente desde un cliente externo compatible con MCP. ¿Qué configuración documentada corresponde?',
      url:guide+'automate-agentic-ai.html',title:'Automate with Agentic AI — invoke integrations from MCP clients',
      options:[
        ['Register the integration as an agentic AI tool and enable MCP for the project.','Registrar la Integration como herramienta de agente AI y habilitar MCP para el Project.','Oracle describes both the tool registration and project MCP switch for this use.','Oracle describe tanto el registro de la herramienta como la habilitación MCP del Project.',true],
        ['Only rename the integration to include the letters MCP.','Solo agregar las letras MCP al nombre de la Integration.','A name is not tool registration or project MCP enablement.','Un nombre no registra la herramienta ni habilita MCP en el Project.',false],
        ['Add a Stage File action to the integration.','Agregar una acción Stage File a la Integration.','Stage File processes staged content; it does not expose a tool to MCP clients.','Stage File procesa contenido temporal; no expone herramientas a clientes MCP.',false],
        ['Make the integration a Business Identifier.','Convertir la Integration en un Business Identifier.','A tracking identifier cannot register an integration as an agentic tool.','Un identificador de seguimiento no registra la Integration como herramienta de agente.',false]
      ]
    },
    {
      id:'gen-started-10-04',topic:'REST and SOAP',
      question:'A client proposes sending a SOAP request with an attachment to an OIC SOAP Adapter trigger. Which documented limitation must the design review flag?',
      questionEs:'Un cliente propone enviar una solicitud SOAP con un archivo adjunto a un Trigger de SOAP Adapter en OIC. ¿Qué limitación documentada debe señalar la revisión?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/soap-adapter/oracle-soap-adapter-capabilities.html',title:'SOAP Adapter Capabilities — trigger restrictions',
      options:[
        ['A SOAP Adapter trigger cannot accept attachments.','Un Trigger de SOAP Adapter no puede aceptar archivos adjuntos.','Oracle explicitly excludes attachments on integrations exposed as SOAP APIs through this trigger.','Oracle excluye expresamente los archivos adjuntos en Integrations expuestas como SOAP mediante este Trigger.',true],
        ['A SOAP Adapter trigger cannot receive XML.','Un Trigger de SOAP Adapter no puede recibir XML.','The SOAP trigger accepts structured XML payloads subject to service limits.','El Trigger SOAP acepta payloads XML estructurados sujetos a límites del servicio.',false],
        ['A SOAP Adapter trigger cannot use HTTPS.','Un Trigger de SOAP Adapter no puede usar HTTPS.','Oracle documents HTTPS-based inbound SOAP endpoints.','Oracle documenta endpoints SOAP entrantes basados en HTTPS.',false],
        ['A SOAP Adapter trigger cannot pass SOAP headers onward.','Un Trigger de SOAP Adapter no puede pasar encabezados SOAP.','The adapter exposes standard and custom SOAP or HTTP headers to later actions.','El Adapter pone encabezados SOAP o HTTP estándar y personalizados a disposición de acciones posteriores.',false]
      ]
    },
    {
      id:'gen-connections-09-04',topic:'REST Adapter',
      question:'One inbound REST endpoint must handle GET /orders and POST /orders in a single integration, routing each operation separately. Which documented REST Adapter capability supports this?',
      questionEs:'Un endpoint REST entrante debe atender GET /orders y POST /orders en una sola Integration, con rutas distintas. ¿Qué capacidad documentada de REST Adapter lo admite?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/rest-adapter-capabilities.html',title:'REST Adapter Capabilities — multiple operation entry points',
      options:[
        ['Multiple operation entry points on one REST Trigger, using resource URI and HTTP verb.','Varios puntos de entrada en un REST Trigger, mediante URI de recurso y verbo HTTP.','Oracle documents multiple resource and verb combinations as branches of one integration.','Oracle documenta varias combinaciones de recurso y verbo como ramas de una Integration.',true],
        ['One FTP Invoke for each HTTP method.','Un FTP Invoke por cada método HTTP.','FTP transfers files; it does not expose inbound HTTP operations.','FTP transfiere archivos; no expone operaciones HTTP entrantes.',false],
        ['A Business Identifier that changes the HTTP method.','Un Business Identifier que cambia el método HTTP.','Business Identifiers track values and cannot define REST entry points.','Los Business Identifiers sirven para seguimiento y no definen puntos de entrada REST.',false],
        ['A Trust Certificate that selects GET or POST.','Un certificado Trust que selecciona GET o POST.','TLS trust does not route requests by HTTP method.','La confianza TLS no enruta solicitudes por método HTTP.',false]
      ]
    },
    {
      id:'gen-orchestration-09-04',topic:'Stage File',
      question:'An FTP Adapter has downloaded a supplier file into OIC. The flow now needs to read its rows using a declared file format. Which action processes the staged content?',
      questionEs:'FTP Adapter descargó un archivo de proveedor en OIC. El flujo debe leer sus filas con un formato de archivo declarado. ¿Qué acción procesa el contenido temporal?',
      url:guide+'process-files-scheduled-integrations-stage-file-action.html',title:'Process Files in Schedule Integrations with a Stage File Action',
      options:[
        ['Stage File Read File.','Stage File Read File.','Stage File can read the downloaded file using its configured format after the FTP Adapter makes it available.','Stage File puede leer el archivo descargado con su formato configurado después de que FTP Adapter lo deja disponible.',true],
        ['A Business Identifier alone.','Solo un Business Identifier.','A tracking field neither reads nor parses staged file rows.','Un campo de seguimiento no lee ni analiza las filas del archivo.',false],
        ['An inbound REST Trigger without a request.','Un REST Trigger entrante sin solicitud.','A trigger starts a flow from an inbound call; the file has already been downloaded.','Un Trigger inicia un flujo por una llamada entrante; el archivo ya fue descargado.',false],
        ['A Trust Certificate in place of file parsing.','Un certificado Trust en vez de analizar el archivo.','A certificate handles transport trust, not the staged file format.','Un certificado atiende la confianza del transporte, no el formato del archivo temporal.',false]
      ]
    },
    {
      id:'gen-scheduled-09-04',topic:'Nightly processing',
      question:'A previously working nightly schedule stops running after its creator account is locked. Which documented scheduler dependency should operations inspect?',
      questionEs:'Un horario nocturno que funcionaba deja de ejecutarse después de bloquear la cuenta de quien lo creó. ¿Qué dependencia documentada debe revisar operaciones?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — schedule creator account',
      options:[
        ['The user that created and scheduled the integration must not be locked or deleted.','La cuenta que creó y programó la Integration no debe estar bloqueada ni eliminada.','Oracle documents that a schedule does not run when that user is locked or deleted.','Oracle documenta que el horario no se ejecuta si esa cuenta está bloqueada o eliminada.',true],
        ['The Map Editor must be reopened every night.','Hay que abrir Map Editor cada noche.','Mappings are design artifacts; an operator does not reopen the mapper to trigger each schedule.','Los mappings son artefactos de diseño; no hay que abrir el editor para cada ejecución.',false],
        ['The Business Identifier must change daily.','El Business Identifier debe cambiar cada día.','Tracking field values do not replace the scheduler account requirement.','Los valores de seguimiento no sustituyen el requisito de la cuenta programadora.',false],
        ['The FTP server must rotate its SSH host key nightly.','El servidor FTP debe rotar su clave SSH cada noche.','SSH host-key rotation is unrelated to this documented creator-account dependency.','Rotar la clave SSH no guarda relación con esta dependencia documentada de la cuenta.',false]
      ]
    },
    {
      id:'gen-monitoring-09-04',topic:'Transformation diagnostics',
      question:'A Map uses encodeReferenceToBase64 on a staged attachment and fails with “Maximum file size supported is 10 MB.” Which diagnosis matches the documented mapper function limit?',
      questionEs:'Un Map usa encodeReferenceToBase64 sobre un adjunto temporal y falla con “Maximum file size supported is 10 MB”. ¿Qué diagnóstico coincide con el límite documentado de la función?',
      url:guide+'map-data.html',title:'Map Data — encodeReferenceToBase64 limit',
      options:[
        ['The referenced file exceeds the 10 MB limit of encodeReferenceToBase64.','El archivo referenciado supera el límite de 10 MB de encodeReferenceToBase64.','Oracle documents this exact function limit and error; use a suitable file-processing pattern instead of the conversion.','Oracle documenta ese límite y error exactos; usa un patrón de procesamiento de archivos apropiado en vez de esa conversión.',true],
        ['The Business Identifier is too short.','El Business Identifier es demasiado corto.','Tracking field length is not the stated file-conversion exception.','La longitud del campo de seguimiento no explica esa excepción de conversión.',false],
        ['The REST Trigger requires an FTP password.','El REST Trigger requiere una contraseña FTP.','The failure occurs in the mapper function after a file reference exists.','El fallo ocurre en la función del mapper después de que existe la referencia al archivo.',false],
        ['The Schedule expression lacks BYMINUTE.','A la expresión Schedule le falta BYMINUTE.','Schedule timing cannot raise this named mapper file-size error.','La programación no produce este error concreto de tamaño de archivo en mapper.',false]
      ]
    },
    {
      id:'gen-ai-10-04',topic:'Feature availability',
      question:'A team cannot find an AI-assisted mapping feature in its OIC instance. Before treating the missing control as a mapping defect, what should it verify?',
      questionEs:'Un equipo no encuentra una función de mapeo asistido por AI en su instancia OIC. Antes de tratar la ausencia del control como defecto del Map, ¿qué debe comprobar?',
      url:'https://docs.oracle.com/en-us/iaas/application-integration/doc/ai-feature-availability.html',title:'AI Feature Availability',
      options:[
        ['The feature’s current region and edition availability and AI-assistant configuration.','La disponibilidad actual por región y edición y la configuración de AI Assistant.','Oracle lists region and edition restrictions for AI features; availability must be checked before debugging the mapper.','Oracle enumera restricciones por región y edición; hay que comprobar la disponibilidad antes de depurar el mapper.',true],
        ['Only whether the source field name is lowercase.','Solo si el campo origen está en minúsculas.','Field naming does not establish whether an AI feature is offered in that service instance.','El nombre del campo no determina si la función AI está disponible en esa instancia.',false],
        ['Whether a Business Identifier has been renamed to AI.','Si se renombró un Business Identifier como AI.','A tracking field cannot enable or reveal an AI Assistant capability.','Un campo de seguimiento no habilita ni muestra una capacidad de AI Assistant.',false],
        ['Whether an FTP Adapter has an SSH host key.','Si FTP Adapter tiene una clave de host SSH.','SFTP security is unrelated to AI feature availability in OIC.','La seguridad SFTP no guarda relación con la disponibilidad de la función AI en OIC.',false]
      ]
    }
  ];
  const bank=window.OIC_DATA.questions;
  for(const item of cases){
    const target=bank.find(q=>q.id===item.id);
    if(!target)throw new Error(`Missing target ${item.id}`);
    const options=item.options.map(([text,textEs,why,whyEs,correct],i)=>({id:'ABCD'[i],text,textEs,why,whyEs,correct}));
    if(options.filter(o=>o.correct).length!==1)throw new Error(`Invalid key ${item.id}`);
    Object.assign(target,{topic:item.topic,question:item.question,questionEs:item.questionEs,options,
      correct:[options.find(o=>o.correct).id],multi:false,source:'Original editorial practice',
      verification:'verified',translationStatus:'reviewed',
      reference:{title:item.title,section:item.title,edition:'Current online guide',url:item.url,status:'item-level verified'},
      explanation:options.find(o=>o.correct).why});
  }
})();
