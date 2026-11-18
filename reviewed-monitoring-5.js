/* Distinct observability cases checked against current Oracle Integration pages. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-monitoring-02-01',topic:'Business Identifier limits',
      question:'An integration needs to track order number, customer code, and region. What is the documented Business Identifier design limit?',
      questionEs:'Una Integration necesita rastrear número de pedido, código de cliente y región. ¿Cuál es el límite documentado de Business Identifiers?',
      url:guide+'assign-business-identifiers-tracking-fields-messages.html',title:'Assign Business Identifiers — three fields and one primary',
      options:[
        ['Use up to three source fields and designate one as primary.','Usar hasta tres campos de origen y designar uno como principal.','Oracle permits up to three tracking fields and requires one primary Business Identifier.','Oracle permite hasta tres campos de seguimiento y exige un Business Identifier principal.',true],
        ['Use three fields but leave all of them secondary.','Usar tres campos y dejar todos como secundarios.','One field must be selected as the primary Business Identifier.','Uno de los campos debe elegirse como Business Identifier principal.',false],
        ['Use four fields if the fourth is a target response field.','Usar cuatro campos si el cuarto procede de la respuesta destino.','The limit is three, and Business Identifiers are assigned from source payload fields, not target payloads.','El límite es tres y los Business Identifiers se asignan desde campos de origen, no del destino.',false],
        ['Use an unlimited number of fields once tracing is Debug.','Usar campos ilimitados si el tracing está en Debug.','Tracing level does not remove the design-time three-field limit.','El nivel de tracing no elimina el límite de tres campos durante el diseño.',false]
      ]
    },
    {
      id:'gen-monitoring-02-03',topic:'Changing tracking fields',
      question:'An active integration tracks the wrong payload field. What must a designer account for before editing its Business Identifiers?',
      questionEs:'Una Integration activa rastrea el campo equivocado. ¿Qué debe considerar el diseñador antes de editar sus Business Identifiers?',
      url:guide+'assign-business-identifiers-tracking-fields-messages.html',title:'Assign Business Identifiers — active integration restriction',
      options:[
        ['Business Identifiers can be edited only while the integration is not active.','Los Business Identifiers solo se editan cuando la Integration no está activa.','Oracle allows viewing identifiers on an active integration but restricts editing to inactive integrations.','Oracle permite verlos en una Integration activa, pero solo editarlos en Integrations inactivas.',true],
        ['Edit them live from the Instances page for prior runs.','Editarlos en vivo desde Instances para ejecuciones anteriores.','Instances shows tracking results; it is not the design editor for existing Business Identifiers.','Instances muestra resultados de seguimiento; no es el editor de diseño de Business Identifiers.',false],
        ['Change the target response field because only targets can be tracked.','Cambiar el campo de respuesta destino porque solo se rastrean destinos.','Oracle assigns Business Identifiers from source payload fields, not target response fields.','Oracle asigna Business Identifiers desde campos de origen, no desde respuestas destino.',false],
        ['Raise tracing to Debug to rewrite the active identifier definition.','Subir tracing a Debug para reescribir la definición activa.','Tracing changes diagnostic detail, not the rule that active integrations cannot edit identifier definitions.','Tracing cambia el detalle diagnóstico, no la restricción de edición en Integrations activas.',false]
      ]
    },
    {
      id:'gen-monitoring-09-05',topic:'Resubmission tracing scope',
      question:'Support wants extra diagnostic detail for one recoverable failed instance without changing the integration-wide activation level. Which recovery operation permits that?',
      questionEs:'Soporte necesita más detalle diagnóstico para una instancia fallida recuperable sin cambiar el nivel de tracing de toda la Integration. ¿Qué operación lo permite?',
      url:guide+'resubmit-failed-messages.html',title:'Resubmit Failed Messages — tracing for a single resubmission',
      options:[
        ['Resubmit that single instance and choose its tracing level in the resubmission panel.','Reenviar esa instancia individual y elegir su tracing en el panel de Resubmit.','Oracle allows a per-instance tracing choice for a single failed-message resubmission.','Oracle permite elegir el nivel de tracing de una instancia cuando se reenvía un solo mensaje fallido.',true],
        ['Bulk-resubmit several errors and assign Debug separately to only one.','Reenviar varios errores juntos y asignar Debug solo a uno.','Bulk resubmission uses the tracing level selected when the integration was activated.','El reenvío masivo usa el nivel de tracing elegido al activar la Integration.',false],
        ['Discard the instance and then resubmit it with Debug.','Descartar la instancia y después reenviarla con Debug.','A discarded message cannot be resubmitted.','Un mensaje descartado no puede reenviarse.',false],
        ['Change the primary Business Identifier to Debug.','Cambiar el Business Identifier principal a Debug.','Identifiers are tracking fields; they are not tracing-level controls.','Los Business Identifiers son campos de seguimiento, no controles del nivel de tracing.',false]
      ]
    },
    {
      id:'gen-monitoring-10-01',topic:'Recovery restart point',
      question:'A recoverable asynchronous instance failed after a Wait action. What should the operator know before assuming Resubmit always starts at the trigger?',
      questionEs:'Una instancia asíncrona recuperable falló después de una acción Wait. ¿Qué debe saber el operador antes de asumir que Resubmit siempre comienza en el Trigger?',
      url:guide+'resubmit-failed-messages.html',title:'Resubmit Failed Messages — restart location',
      options:[
        ['The restart point depends on the design; after a prior Wait it can resume just after Wait.','El punto de reinicio depende del diseño; tras un Wait previo puede reanudarse justo después de Wait.','Oracle documents both start-from-beginning and design-dependent restart locations, including just after Wait.','Oracle documenta reinicios desde el inicio o desde otro punto según el diseño, incluido justo después de Wait.',true],
        ['Every resubmission necessarily starts at the original trigger.','Todo Resubmit comienza necesariamente en el Trigger original.','Oracle explicitly describes cases that restart from another location.','Oracle describe expresamente casos que reinician desde otro punto.',false],
        ['Resubmit is automatic whenever a Wait completes.','Resubmit se ejecuta automáticamente cuando termina Wait.','Failed messages are not automatically resubmitted.','Los mensajes fallidos no se reenvían automáticamente.',false],
        ['Wait makes every asynchronous instance nonrecoverable.','Wait vuelve no recuperable toda instancia asíncrona.','A preceding Wait can affect restart position; it is not a blanket nonrecoverable rule.','Un Wait previo puede afectar el punto de reinicio; no es una regla general de no recuperabilidad.',false]
      ]
    },
    {
      id:'gen-monitoring-07-01',topic:'Activity Stream payload display',
      question:'An instance processed a ZIP attachment, but support cannot view that binary attachment inline in Activity Stream. What does Oracle document?',
      questionEs:'Una instancia procesó un adjunto ZIP, pero soporte no puede verlo en línea en Activity Stream. ¿Qué documenta Oracle?',
      url:guide+'understand-supported-activity-stream-payloads.html',title:'Learn About the Payloads in the Activity Stream — attachments and binary content',
      options:[
        ['Attachments are not displayed inline in Activity Stream; supported payloads may be downloaded when needed.','Los adjuntos no se muestran en línea en Activity Stream; los payloads compatibles pueden descargarse si hace falta.','Oracle distinguishes attachments from message payloads and says binary content such as ZIP is not viewable inline.','Oracle distingue adjuntos de payloads e indica que contenido binario como ZIP no se ve en línea.',true],
        ['ZIP content is always displayed inline if tracing is Production.','El contenido ZIP siempre se muestra en línea con tracing Production.','Binary ZIP is not among the inline-viewable media types, regardless of that claim.','ZIP binario no está entre los tipos visibles en línea, independientemente de esa afirmación.',false],
        ['Activity Stream proves the attachment was never processed.','Activity Stream demuestra que nunca se procesó el adjunto.','Lack of inline attachment display does not prove the adapter failed to process it.','La ausencia de visualización en línea no prueba que el Adapter no lo procesara.',false],
        ['Business Identifiers convert the ZIP into readable JSON automatically.','Los Business Identifiers convierten automáticamente el ZIP en JSON legible.','Business Identifiers track selected fields; they do not transform binary attachments.','Los Business Identifiers rastrean campos; no transforman adjuntos binarios.',false]
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
