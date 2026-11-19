/* Five scheduled-integration cases checked against current Oracle guidance. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-scheduled-01-01',topic:'Schedule creation order',
      question:'A designer has built a Schedule Integration but has not activated it yet. Must the integration be activated before a schedule can be defined?',
      questionEs:'Se diseñó una Schedule Integration que aún no está activa. ¿Es obligatorio activarla antes de definir el Schedule?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — decide when to create the schedule',
      options:[
        ['Yes; Add Schedule is available only after the first execution.','Sí; Add Schedule solo aparece después de la primera ejecución.','Oracle allows adding a schedule before designing and activating the integration later.','Oracle permite añadir el Schedule antes de completar el diseño y activar después.',false],
        ['No; the schedule can be added first, or activation can be combined with scheduling later.','No; puede añadirse primero, o activarse y programarse después.','Oracle documents both creation orders, including Add Schedule before later activation.','Oracle documenta ambos órdenes, incluido Add Schedule antes de activar.',true],
        ['Yes; an iCal expression must be exported separately before activation.','Sí; antes hay que exportar la expresión iCal por separado.','Oracle says an integration schedule cannot be exported separately.','Oracle indica que un Schedule no se exporta por separado.',false],
        ['No; every Schedule Integration runs automatically without defining a schedule.','No; toda Schedule Integration se ejecuta automáticamente sin Schedule.','A schedule must be configured and started for recurring runs; the pattern alone does not start it.','Debe configurarse e iniciarse el Schedule para repetir ejecuciones; el patrón por sí solo no lo inicia.',false]
      ]
    },
    {
      id:'gen-scheduled-02-04',topic:'Schedule time zone',
      question:'A schedule is intended to run at a local business hour in a different region from the designer. Which setting must be reviewed before saving?',
      questionEs:'Un Schedule debe ejecutarse a la hora local de otra región. ¿Qué ajuste debe revisarse antes de guardarlo?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — Time zone setting',
      options:[
        ['The Business Identifier, because it converts schedule time to local time.','El Business Identifier, porque convierte la hora del Schedule.','A tracking field does not establish the schedule time zone.','Un campo de seguimiento no establece la zona horaria del Schedule.',false],
        ['The REST Connection URL, because it controls the scheduler clock.','La URL de REST Connection, porque controla el reloj.','The endpoint URL does not select the schedule time zone.','La URL destino no selecciona la zona horaria del Schedule.',false],
        ['The Time zone list, whose default comes from the user Preferences page.','La lista Time zone, cuyo valor por defecto procede de Preferences.','Oracle documents a selectable schedule time zone and its Preferences-based default.','Oracle documenta la zona horaria seleccionable y su valor predeterminado de Preferences.',true],
        ['The Mapper target schema, because it determines schedule start time.','El esquema destino del Mapper, porque determina el inicio.','A mapping schema shapes data, not the scheduler time-zone setting.','Un esquema de mapping define datos, no la zona horaria del planificador.',false]
      ]
    },
    {
      id:'gen-scheduled-03-04',topic:'Parameter assignment in parallel loop',
      question:'A Schedule Parameter is updated by Assign inside a sequential For Each. The designer then enables Process items in parallel and sees a fault marker. What is the documented correction?',
      questionEs:'Assign actualiza un Schedule Parameter dentro de un For Each secuencial. Al activar Process items in parallel aparece un error. ¿Cuál es la corrección documentada?',
      url:guide+'create-update-parameters-scheduled-integrations.html',title:'Create and Update Parameters in Schedule Integrations — parallel For Each restriction',
      options:[
        ['Ignore the marker; parallel iterations will serialize the shared assignment automatically.','Ignorar el aviso; las iteraciones paralelas serializan Assign automáticamente.','Oracle says the impacted Assign must be corrected for the integration to be valid.','Oracle indica que debe corregirse Assign para que la Integration sea válida.',false],
        ['Increase the parameter limit from five to six.','Aumentar de cinco a seis el límite de parámetros.','The issue is parameter assignment inside a parallel loop, not the parameter count.','El problema es Assign dentro del bucle paralelo, no el número de parámetros.',false],
        ['Convert the Schedule Parameter into a target Business Identifier.','Convertir el Schedule Parameter en Business Identifier destino.','Business Identifier configuration does not resolve the parallel Assign restriction.','Configurar Business Identifiers no resuelve la restricción de Assign paralelo.',false],
        ['Disable parallel processing or move Assign outside the For Each.','Desactivar el procesamiento paralelo o mover Assign fuera del For Each.','Oracle explicitly offers these two ways to remove the invalid parallel parameter assignment.','Oracle ofrece expresamente ambas soluciones para eliminar esa asignación inválida.',true]
      ]
    },
    {
      id:'gen-scheduled-04-01',topic:'Immediate ad-hoc request',
      question:'An operator needs a one-time run now and must inspect its instance without editing the recurrence. Which documented path fits?',
      questionEs:'Un operador necesita una ejecución única ahora e inspeccionar su instancia sin editar la recurrencia. ¿Qué ruta documentada corresponde?',
      url:guide+'run-scheduled-integration-immediately.html',title:'Run a Schedule Integration Immediately — Ad hoc request and Track instances',
      options:[
        ['Open Run, select Ad hoc request, execute, and use Track instances.','Abrir Run, elegir Ad hoc request, ejecutar y usar Track instances.','Oracle documents this immediate-run flow and the filtered instance view afterward.','Oracle documenta esta ejecución inmediata y la vista filtrada de la instancia.',true],
        ['Delete the recurrence and recreate it after a manual run.','Eliminar la recurrencia y recrearla después de ejecutar.','An ad-hoc request does not require deleting or editing the schedule.','Una solicitud ad hoc no exige eliminar ni modificar el Schedule.',false],
        ['Start schedule and assume it runs exactly once, then stops permanently.','Iniciar el Schedule y suponer que corre una vez y se detiene.','Starting a recurring schedule is not the same as submitting an independent ad-hoc request.','Iniciar una recurrencia no equivale a enviar una solicitud ad hoc independiente.',false],
        ['Change the primary Business Identifier to Run.','Cambiar el Business Identifier principal a Run.','Tracking fields do not initiate an immediate run.','Los campos de seguimiento no inician una ejecución inmediata.',false]
      ]
    },
    {
      id:'gen-scheduled-10-01',topic:'Future instances table',
      question:'A newly saved schedule shows no rows in Future Instances. The integration schedule has not been started. Which explanation is supported?',
      questionEs:'Un Schedule recién guardado no muestra filas en Future Instances. Todavía no se ha iniciado. ¿Qué explicación está respaldada?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — Future Instances after start',
      options:[
        ['The schedule was necessarily deleted by a failed Mapper validation.','El Schedule necesariamente fue eliminado por un fallo del Mapper.','An empty future table before starting the schedule is documented normal behavior.','Una tabla vacía antes de iniciar el Schedule es el comportamiento documentado.',false],
        ['The table remains empty until the schedule is started.','La tabla permanece vacía hasta que se inicia el Schedule.','Oracle explicitly states that Future Instances has data only after starting the schedule.','Oracle señala expresamente que Future Instances contiene datos después de iniciarlo.',true],
        ['Future Instances never lists Schedule Integrations.','Future Instances nunca muestra Schedule Integrations.','Oracle describes a Future Instances table for schedule integrations after start.','Oracle describe esa tabla para Schedule Integrations una vez iniciadas.',false],
        ['A missing Business Identifier suppresses the entire future calendar.','La falta de Business Identifier oculta todo el calendario futuro.','The documented empty-table condition is schedule start state, not the identifier value.','La condición documentada es no haber iniciado el Schedule, no el identificador.',false]
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
