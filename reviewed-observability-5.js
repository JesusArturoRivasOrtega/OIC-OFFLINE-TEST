/* Five distinct monitoring cases checked against current Oracle Integration guidance. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-monitoring-01-01',topic:'Global and project monitoring scope',
      question:'A support team must inspect both project and standalone integrations in the same tenancy. Which monitoring entry point covers both?',
      questionEs:'Soporte necesita inspeccionar Integrations de Projects y otras independientes en la misma instancia. ¿Qué vista cubre ambas?',
      url:guide+'observability-pages.html',title:'About the Observability Pages — global versus project scope',
      options:[
        ['The Observe page inside one project, because it aggregates all tenancy integrations.','La página Observe de un Project, porque reúne todas las Integrations de la instancia.','Project Observe is scoped to automation solutions in that project, not all integrations.','Observe del Project solo muestra las soluciones de ese Project, no todas las Integrations.',false],
        ['The global Observability pages opened from the navigation pane.','Las páginas globales Observability abiertas desde el panel de navegación.','Oracle says global Observability covers all components, including integrations inside and outside projects.','Oracle indica que Observability global cubre componentes dentro y fuera de Projects.',true],
        ['Only the Errors page, because successful integrations are included there.','Solo Errors, porque también incluye Integrations exitosas.','Errors lists failed instances, not the complete set of successful and failed activity.','Errors enumera instancias fallidas, no toda la actividad exitosa y fallida.',false],
        ['Only Design time audit, because runtime instances are listed as edits.','Solo Design time audit, porque las instancias aparecen como ediciones.','Design time audit records design actions, not the full runtime monitoring scope.','Design time audit registra cambios de diseño, no toda la supervisión de ejecución.',false]
      ]
    },
    {
      id:'gen-monitoring-01-03',topic:'Failed-only monitoring view',
      question:'An operator needs a list limited to failed integration instances and a filter for recoverable versus nonrecoverable errors. Which page is appropriate?',
      questionEs:'Un operador necesita solo instancias fallidas y filtrar errores recuperables y no recuperables. ¿Qué página corresponde?',
      url:guide+'observability-pages.html',title:'About the Observability Pages — Errors page',
      options:[
        ['Instances, because it excludes successful instances by default.','Instances, porque excluye por defecto las instancias exitosas.','Oracle describes Instances as the page listing all integration instances.','Oracle describe Instances como la página que enumera todas las instancias.',false],
        ['Future runs, because queued schedules are failures.','Future runs, porque las ejecuciones programadas en cola son fallos.','Future runs describes upcoming scheduled runs, not a failed-only error list.','Future runs describe próximas ejecuciones, no una lista de errores.',false],
        ['Errors, because it lists failed instances and supports recovery-state filtering.','Errors, porque enumera instancias fallidas y permite filtrar su estado de recuperación.','Oracle distinguishes Errors from all-instance monitoring and documents recoverable/nonrecoverable filters there.','Oracle distingue Errors de la vista general y documenta esos filtros de recuperación.',true],
        ['Design time audit, because it stores the runtime failure stack.','Design time audit, porque guarda el fallo de ejecución.','Design time audit reports design changes and actors, not a failed-instance queue.','Design time audit informa cambios de diseño y autores, no una cola de instancias fallidas.',false]
      ]
    },
    {
      id:'gen-monitoring-01-04',topic:'Agent availability drilldown',
      question:'The global dashboard indicates that a connectivity agent is unavailable. Where does Oracle direct the operator to identify the down agent?',
      questionEs:'El Dashboard global indica que un Connectivity Agent no está disponible. ¿Dónde indica Oracle identificar el agente caído?',
      url:guide+'observability-pages.html',title:'About the Observability Pages — Agents page',
      options:[
        ['The B2B tracking page, because it lists all network agents.','B2B tracking, porque enumera todos los agentes de red.','B2B tracking concerns trading-partner messages, not general agent availability.','B2B tracking trata mensajes entre socios comerciales, no la disponibilidad de agentes.',false],
        ['The Future runs page, because an unavailable agent becomes a queued schedule.','Future runs, porque un agente caído se convierte en ejecución programada.','Future runs shows scheduled integrations and times, not the identity of an unavailable agent.','Future runs muestra Integrations programadas y horarios, no qué agente está caído.',false],
        ['The Design time audit page, because agents are deployment edits.','Design time audit, porque los agentes son cambios de despliegue.','Design time audit identifies who changed components; it is not the agent-status drilldown.','Design time audit identifica cambios de componentes; no es la vista de estado de agentes.',false],
        ['The Agents page in Observability.','La página Agents de Observability.','Oracle explicitly directs operators from dashboard agent unavailability to the Agents page.','Oracle dirige desde el aviso del Dashboard hasta la página Agents.',true]
      ]
    },
    {
      id:'gen-monitoring-01-05',topic:'Design audit versus runtime evidence',
      question:'An integration behaved differently after a release. The team first needs to know who changed a component and when, not which instance failed. Which page answers that question?',
      questionEs:'Una Integration cambió su comportamiento tras una versión. Primero hay que saber quién modificó un componente y cuándo, no qué instancia falló. ¿Qué página responde?',
      url:guide+'observability-pages.html',title:'About the Observability Pages — Design time audit',
      options:[
        ['Design time audit, which records component actions, actors, and timestamps.','Design time audit, que registra acciones sobre componentes, autores y horas.','Oracle defines this page for design-change history and the people who made each change.','Oracle define esta página para el historial de cambios de diseño y sus autores.',true],
        ['Errors, because every component edit creates a failed instance.','Errors, porque cada edición crea una instancia fallida.','Errors is a failed-runtime-instance view; edits do not necessarily create failures.','Errors muestra instancias fallidas; una edición no implica necesariamente un fallo.',false],
        ['Future runs, because it records all design edits in calendar order.','Future runs, porque registra todas las ediciones en orden cronológico.','Future runs concerns upcoming schedule executions, not design-change authorship.','Future runs trata próximas ejecuciones programadas, no autores de cambios.',false],
        ['Activity Stream, because it names the designer who last saved the integration.','Activity Stream, porque identifica a quien guardó la Integration.','Activity Stream traces an execution; design-change attribution belongs in the audit page.','Activity Stream rastrea ejecuciones; la autoría de cambios pertenece a auditoría.',false]
      ]
    },
    {
      id:'gen-monitoring-02-04',topic:'Identifier validation after trigger edits',
      question:'A designer edits the trigger connection of an integration created in release 23.08 or later. What happens to its existing Business Identifier definitions?',
      questionEs:'Se edita la Connection Trigger de una Integration creada en la versión 23.08 o posterior. ¿Qué ocurre con sus Business Identifiers?',
      url:guide+'assign-business-identifiers-tracking-fields-messages.html',title:'Assign Business Identifiers — trigger changes from release 23.08',
      options:[
        ['They are always deleted immediately, even if the tracked field still exists.','Siempre se eliminan de inmediato aunque el campo todavía exista.','Automatic removal is documented for older integrations, not the newer retention behavior.','La eliminación automática corresponde a Integrations anteriores, no al comportamiento nuevo.',false],
        ['They are retained and validated; an invalid tracked field can raise a validation error.','Se conservan y validan; un campo inválido puede generar un error de validación.','Oracle documents retained-and-validated definitions for new integrations from release 23.08 onward.','Oracle documenta conservación y validación para nuevas Integrations desde la versión 23.08.',true],
        ['They are converted automatically into target-response tracking fields.','Se convierten automáticamente en campos de seguimiento de la respuesta destino.','Business Identifiers are assigned from source payloads, not target-response fields.','Los Business Identifiers proceden de payloads de origen, no de respuestas destino.',false],
        ['They become editable on an active integration without deactivation.','Se pueden editar en una Integration activa sin desactivarla.','An active integration allows viewing, not editing, its Business Identifier definitions.','Una Integration activa permite ver, pero no editar, sus Business Identifiers.',false]
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
