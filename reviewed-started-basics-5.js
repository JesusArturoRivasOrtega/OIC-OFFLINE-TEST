/* Five distinct getting-started cases checked against current Oracle guidance. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-started-02-01',topic:'Trigger connection role',
      question:'A mobile client must start an Application Integration by sending a REST request. Which connection role receives that inbound message?',
      questionEs:'Una app móvil debe iniciar una Application Integration mediante una solicitud REST. ¿Qué rol de Connection recibe ese mensaje entrante?',
      url:guide+'build-your-first-integration-from-scratch.html',title:'Build Your First Integration — Trigger connection role',
      options:[
        ['Invoke, because the client invokes Oracle Integration.','Invoke, porque el cliente invoca Oracle Integration.','In the integration canvas, Invoke is the outbound role used to call another endpoint.','En el canvas, Invoke es el rol saliente usado para llamar a otro endpoint.',false],
        ['Trigger, because an inbound application request starts the integration.','Trigger, porque una solicitud entrante inicia la Integration.','Oracle defines the Trigger connection as the inbound endpoint that can run the integration.','Oracle define Trigger como el endpoint entrante que puede iniciar la Integration.',true],
        ['Schedule, because all REST requests wait for a scheduled start.','Schedule, porque toda solicitud REST espera un inicio programado.','The documented REST application pattern uses a Trigger rather than a recurring schedule.','El patrón REST de Application Integration usa Trigger, no una recurrencia.',false],
        ['Business Identifier, because tracking fields accept inbound HTTP calls.','Business Identifier, porque los campos de seguimiento reciben HTTP.','Business Identifiers track payload fields; they are not connection roles.','Los Business Identifiers rastrean campos; no son roles de Connection.',false]
      ]
    },
    {
      id:'gen-started-04-01',topic:'Application versus schedule pattern',
      question:'An order arrives unpredictably and should start processing when the business event occurs, rather than at a fixed time. Which integration pattern fits?',
      questionEs:'Un pedido llega sin horario fijo y debe procesarse cuando ocurre el evento empresarial, no a una hora fija. ¿Qué patrón corresponde?',
      url:guide+'application-integrations.html',title:'About Application Integrations — business activity trigger',
      options:[
        ['Schedule Integration, because unpredictable arrivals require a fixed recurrence.','Schedule Integration, porque las llegadas imprevisibles exigen recurrencia fija.','A schedule starts by time or on demand; it is not the documented business-activity trigger pattern.','Schedule se inicia por tiempo o bajo demanda; no es el patrón de evento empresarial descrito.',false],
        ['A standalone Connection with no Integration.','Una Connection independiente sin Integration.','A Connection defines endpoint access; it does not implement the business flow by itself.','Una Connection define acceso al endpoint; por sí sola no implementa el flujo.',false],
        ['Application Integration triggered by the business activity.','Application Integration iniciada por la actividad empresarial.','Oracle describes application integrations as running when a business activity occurs, such as order submission.','Oracle describe Application Integrations que corren ante actividades como enviar un pedido.',true],
        ['Only a Project Deployment, with no trigger or integration flow.','Solo un Project Deployment sin Trigger ni flujo.','A deployment packages versions; it does not replace the event-triggered integration design.','Un Deployment agrupa versiones; no reemplaza el diseño iniciado por un evento.',false]
      ]
    },
    {
      id:'gen-started-05-01',topic:'Response configuration controls sync mode',
      question:'A REST Application Integration must return a result after its flow completes. During Trigger configuration, which choice makes it synchronous?',
      questionEs:'Una REST Application Integration debe responder cuando termine el flujo. Durante la configuración del Trigger, ¿qué opción la hace síncrona?',
      url:guide+'how-specify-if-integration-is-synchronous-or-asynchronous.html',title:'How to Specify if an Integration Is Synchronous or Asynchronous',
      options:[
        ['Configure the endpoint to receive a response.','Configurar el endpoint para recibir una respuesta.','Oracle says configuring a Trigger endpoint to receive a response makes the integration synchronous.','Oracle indica que configurar la respuesta del Trigger vuelve síncrona la Integration.',true],
        ['Omit the response configuration and rely on a Business Identifier.','Omitir la respuesta y confiar en un Business Identifier.','Without a configured response, Oracle classifies the integration as asynchronous.','Sin respuesta configurada, Oracle clasifica la Integration como asíncrona.',false],
        ['Set tracing to Debug, which changes the request mode.','Poner tracing en Debug, lo cual cambia el modo.','Tracing affects diagnostics, not the synchronous/asynchronous design choice.','Tracing afecta el diagnóstico, no la elección de modo.',false],
        ['Add an Invoke connection, which always makes the whole flow synchronous.','Añadir Invoke, que siempre vuelve síncrono todo el flujo.','The documented classification comes from the Trigger response choice, not merely an Invoke.','La clasificación depende de la respuesta del Trigger, no solo de tener Invoke.',false]
      ]
    },
    {
      id:'gen-started-06-01',topic:'Meaning of asynchronous acknowledgment',
      question:'An asynchronous Application Integration immediately returns HTTP 202 Accepted to a caller. What can the caller conclude at that moment?',
      questionEs:'Una Application Integration asíncrona devuelve inmediatamente HTTP 202 Accepted. ¿Qué puede concluir el cliente en ese momento?',
      url:guide+'differences-between-asynchronous-synchronous-integrations.html',title:'Differences Between Synchronous and Asynchronous Integrations — response',
      options:[
        ['All downstream systems have committed the business transaction.','Todos los sistemas destino ya confirmaron la transacción.','The immediate 202 acknowledges receipt, not completion of downstream processing.','El 202 inmediato confirma recepción, no finalización del procesamiento.',false],
        ['The flow completed successfully and produced its final payload.','El flujo terminó correctamente y produjo su payload final.','Oracle describes the asynchronous response as immediate and without a completion payload.','Oracle describe una respuesta asíncrona inmediata sin payload de finalización.',false],
        ['The request was rejected and must be sent again immediately.','La solicitud fue rechazada y debe reenviarse de inmediato.','HTTP 202 Accepted is the documented acknowledgment of receipt, not rejection.','HTTP 202 Accepted es el acuse documentado de recepción, no un rechazo.',false],
        ['Oracle Integration received the request; completion must be tracked separately.','Oracle Integration recibió la solicitud; el resultado debe seguirse por separado.','Oracle says 202 confirms receipt, while no finish response is sent unless a notification is designed.','Oracle indica que 202 confirma recepción; no envía respuesta final sin una notificación diseñada.',true]
      ]
    },
    {
      id:'gen-started-07-01',topic:'Project-scoped access control',
      question:'A team wants different groups to edit and monitor only their own automation solution. Why put the components inside a Project?',
      questionEs:'Un equipo quiere que distintos grupos editen y supervisen solo su solución. ¿Por qué ubicar los componentes en un Project?',
      url:guide+'integration-projects.html',title:'About Projects — fine-grained access control',
      options:[
        ['Projects provide fine-grained role-based access to the solution and its components.','Los Projects permiten acceso detallado por roles a la solución y sus componentes.','Oracle identifies project-based RBAC as the way to control who may edit, view, and monitor components.','Oracle identifica RBAC de Projects para controlar quién edita, ve y supervisa componentes.',true],
        ['Projects make all components public and remove role checks.','Los Projects vuelven públicos los componentes y eliminan los roles.','The documented benefit is finer access control, not bypassing authorization.','El beneficio documentado es mayor control de acceso, no omitir autorización.',false],
        ['Projects replace every Trigger and Invoke connection with one shared password.','Los Projects sustituyen Trigger e Invoke por una contraseña compartida.','Project access control does not eliminate the integration connection roles.','El control de acceso del Project no elimina los roles de Connection.',false],
        ['Projects ensure every asynchronous instance finishes before acknowledging it.','Los Projects garantizan que toda instancia asíncrona termine antes del acuse.','Project organization does not change asynchronous acknowledgment semantics.','Organizar en Projects no cambia la semántica del acuse asíncrono.',false]
      ]
    }
  ];
  const bank=window.OIC_DATA.questions;
  for(const item of cases){
    const target=bank.find(q=>q.id===item.id);
    if(!target||target.source!=='Generated practice')throw new Error(`Invalid target ${item.id}`);
    const options=item.options.map(([text,textEs,why,whyEs,correct],i)=>({id:'ABCD'[i],text,textEs,why,whyEs,correct}));
    if(options.filter(o=>o.correct).length!==1)throw new Error(`Invalid key ${item.id}`);
    Object.assign(target,{topic:item.topic,question:item.question,questionEs:item.questionEs,options,
      correct:[options.find(o=>o.correct).id],multi:false,source:'Original editorial practice',
      verification:'verified',translationStatus:'reviewed',
      reference:{title:item.title,section:item.title,edition:'Current online guide',url:item.url,status:'item-level verified'},
      explanation:options.find(o=>o.correct).why});
  }
})();
