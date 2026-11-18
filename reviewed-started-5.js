/* Five distinct lifecycle cases checked against current Oracle Integration pages. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-started-01-03',topic:'Connection change propagation',
      question:'An adapter Connection used by several active integrations is updated and tested. Which action applies the change to all active integrations using it?',
      questionEs:'Se actualiza y prueba una Connection de Adapter usada por varias Integrations activas. ¿Qué acción aplica el cambio a todas las que la usan?',
      url:guide+'activate-deactivate-integrations.html',title:'Reactivate Integrations after a Connection Update — Save & Reactivate',
      options:[
        ['Choose Save & Reactivate, after assessing the effect on every active consumer.','Elegir Save & Reactivate después de evaluar el efecto en todas las Integrations activas que la usan.','Oracle applies the updated Connection to all active dependent integrations; individual selection is not available.','Oracle aplica la Connection actualizada a todas las Integrations activas dependientes; no permite seleccionarlas individualmente.',true],
        ['Choose Save and assume all active integrations reactivate.','Elegir Save y suponer que se reactivan todas las Integrations activas.','Save stores the Connection change without reactivating dependent integrations.','Save guarda el cambio de Connection sin reactivar las Integrations dependientes.',false],
        ['Choose only one integration from the Save & Reactivate list.','Elegir una sola Integration de la lista Save & Reactivate.','Oracle does not allow selecting individual active integrations for that bulk reactivation.','Oracle no permite elegir Integrations activas individuales para esa reactivación masiva.',false],
        ['Change the Business Identifier instead of reactivating.','Cambiar el Business Identifier en lugar de reactivar.','Tracking-field changes do not propagate an updated adapter Connection.','Modificar campos de seguimiento no propaga una Connection de Adapter actualizada.',false]
      ]
    },
    {
      id:'gen-started-07-04',topic:'Project deployment selection',
      question:'A project contains a tested integration version and a newer draft version. Before creating a deployment, what should the release manager verify?',
      questionEs:'Un Project contiene una versión de Integration probada y otra más nueva en borrador. Antes de crear un Deployment, ¿qué debe verificar la persona responsable?',
      url:guide+'create-manage-project-deployment.html',title:'Create and Manage a Project Deployment — explicit version selection',
      options:[
        ['The integrations and exact versions selected, because the newest versions are preselected by default.','Las Integrations y versiones exactas elegidas, porque las más nuevas vienen preseleccionadas por defecto.','Oracle makes version selection part of deployment creation and defaults to the most recently created versions.','Oracle exige seleccionar versiones al crear el Deployment y propone por defecto las creadas más recientemente.',true],
        ['Only the project name; every artifact and version is deployed automatically.','Solo el nombre del Project; todos los artefactos y versiones se despliegan automáticamente.','The deployment requires explicit integration and version selection.','El Deployment requiere seleccionar Integrations y versiones explícitamente.',false],
        ['Only the active runtime URL; design versions cannot be chosen.','Solo la URL activa; las versiones de diseño no pueden elegirse.','The creation panel lists available integration versions for selection.','El panel de creación muestra versiones de Integrations para elegir.',false],
        ['The newest version is always mandatory and cannot be changed.','La versión más nueva es obligatoria y no puede cambiarse.','It is the default, but the release manager can select another available version.','Es la opción predeterminada, pero puede elegirse otra versión disponible.',false]
      ]
    },
    {
      id:'gen-started-08-02',topic:'Change active tracing',
      question:'Support needs to change tracing on an active integration for a short diagnostic window. What is the documented control path?',
      questionEs:'Soporte necesita cambiar temporalmente el tracing de una Integration activa. ¿Cuál es la ruta de control documentada?',
      url:guide+'activate-deactivate-integrations.html',title:'Manage Tracing Levels — active integration',
      options:[
        ['Use Actions > Configure activation and save the new tracing level without deactivating.','Usar Actions > Configure activation y guardar el nuevo nivel de tracing sin desactivar.','Oracle permits changing the tracing level on an active integration through Configure activation.','Oracle permite cambiar el tracing de una Integration activa mediante Configure activation.',true],
        ['Delete and recreate the integration to change tracing.','Eliminar y recrear la Integration para cambiar el tracing.','The active integration has a direct tracing control; deletion is unnecessary and destructive.','La Integration activa tiene un control directo de tracing; eliminarla es innecesario y destructivo.',false],
        ['Change a Business Identifier, which automatically selects Debug.','Cambiar un Business Identifier, que selecciona Debug automáticamente.','Tracking fields and tracing levels are separate settings.','Los campos de seguimiento y los niveles de tracing son configuraciones distintas.',false],
        ['Edit the REST Invoke endpoint to raise tracing.','Editar el endpoint REST Invoke para aumentar el tracing.','An Invoke endpoint controls the downstream call, not integration tracing.','El endpoint Invoke controla la llamada saliente, no el tracing de la Integration.',false]
      ]
    },
    {
      id:'gen-started-08-05',topic:'Deactivation risk',
      question:'A project deployment has asynchronous requests still queued. Why should operations not treat deactivation as a harmless pause?',
      questionEs:'Un Project Deployment tiene solicitudes asíncronas aún en cola. ¿Por qué operaciones no debe tratar la desactivación como una pausa inocua?',
      url:guide+'activate-deactivate-integrations.html',title:'Deactivate an Integration — pending asynchronous messages',
      options:[
        ['Its asynchronous queue is deleted and pending unprocessed requests can be lost.','Se elimina su cola asíncrona y pueden perderse solicitudes pendientes sin procesar.','Oracle documents deletion of the deactivated project queue and its associated pending messages.','Oracle documenta que se elimina la cola del Project desactivado y los mensajes pendientes asociados.',true],
        ['All queued messages remain guaranteed until a later restart.','Todos los mensajes en cola se conservan garantizados hasta un reinicio posterior.','Oracle warns that unprocessed queued requests are lost on deactivation.','Oracle advierte que las solicitudes en cola sin procesar se pierden al desactivar.',false],
        ['Only the design canvas closes; runtime keeps accepting new requests.','Solo se cierra el canvas; el runtime sigue aceptando solicitudes nuevas.','Deactivation stops processing new messages and undeploys runtime resources.','La desactivación detiene mensajes nuevos y retira recursos del runtime.',false],
        ['A Business Identifier automatically archives every queued payload.','Un Business Identifier archiva automáticamente cada payload en cola.','Business Identifiers are tracking fields, not a queue backup mechanism.','Los Business Identifiers son campos de seguimiento, no un respaldo de la cola.',false]
      ]
    },
    {
      id:'gen-started-10-05',topic:'REST inbound JSON validation',
      question:'A REST-triggered integration must reject inbound JSON containing duplicate keys. Which activation option addresses that requirement?',
      questionEs:'Una Integration con REST Trigger debe rechazar JSON entrante con claves duplicadas. ¿Qué opción de activación atiende ese requisito?',
      url:guide+'activate-integration.html',title:'Activate an Integration — Enable payload validation',
      options:[
        ['Select Enable payload validation for the REST Adapter trigger.','Seleccionar Enable payload validation para el REST Adapter Trigger.','Oracle says this activation option checks inbound JSON for duplicate keys.','Oracle indica que esta opción de activación comprueba claves duplicadas en el JSON entrante.',true],
        ['Select Allow to run again, which validates JSON keys.','Seleccionar Allow to run again, que valida claves JSON.','Allow to run again enables replay, not duplicate-key validation.','Allow to run again habilita replay, no la validación de claves duplicadas.',false],
        ['Set a Business Identifier for every JSON property.','Definir un Business Identifier por cada propiedad JSON.','Identifiers support tracking and cannot validate every JSON key.','Los Business Identifiers sirven para seguimiento y no validan todas las claves JSON.',false],
        ['Set Audit tracing, which rejects duplicate JSON keys automatically.','Activar Audit tracing, que rechaza automáticamente las claves JSON duplicadas.','Audit captures wire payloads; it is distinct from the payload-validation option.','Audit captura payloads transmitidos; es distinto de la opción de validación.',false]
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
