/* Five distinct scheduled-integration cases checked against current Oracle pages. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-scheduled-02-01',topic:'Minimum recurrence frequency',
      question:'A scheduler must run every five minutes. Which statement about OIC schedule types is documented?',
      questionEs:'Un planificador debe ejecutarse cada cinco minutos. ¿Qué afirma la documentación sobre los tipos de Schedule de OIC?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — Simple and iCal frequency limits',
      options:[
        ['Simple has a ten-minute minimum; an iCal expression can use a supported interval of at least one minute.','Simple tiene un mínimo de diez minutos; iCal admite un intervalo compatible de al menos un minuto.','Five minutes is below the Simple minimum but above the documented one-minute iCal floor.','Cinco minutos es menor que el mínimo de Simple, pero mayor que el mínimo documentado de iCal.',true],
        ['Simple and iCal both require at least ten minutes.','Simple e iCal exigen ambos un mínimo de diez minutos.','Oracle gives the ten-minute minimum for Simple, but a one-minute limit for iCal.','Oracle fija diez minutos para Simple, pero un minuto para iCal.',false],
        ['Simple supports seconds, while iCal starts at one hour.','Simple admite segundos e iCal comienza en una hora.','Neither limit matches the documented ten-minute Simple and one-minute iCal rules.','Ninguno coincide con los límites documentados de diez minutos en Simple y un minuto en iCal.',false],
        ['Any interval below one minute is allowed if the expression validates.','Se permite cualquier intervalo inferior a un minuto si la expresión valida.','Oracle explicitly does not support an iCal frequency below one minute.','Oracle no admite una frecuencia iCal inferior a un minuto.',false]
      ]
    },
    {
      id:'gen-scheduled-02-03',topic:'iCal recurrence count',
      question:'An engineer combines six separate recurrences in one OIC iCal schedule expression. What is the documented limit to check?',
      questionEs:'Un ingeniero combina seis recurrencias en una expresión iCal de OIC. ¿Qué límite documentado debe comprobar?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — iCal recurrence limit',
      options:[
        ['One expression supports up to five recurrences.','Una expresión admite hasta cinco recurrencias.','Oracle documents a five-recurrence maximum for an iCal expression.','Oracle documenta un máximo de cinco recurrencias por expresión iCal.',true],
        ['The maximum is six when each recurrence has BYHOUR.','El máximo es seis si cada recurrencia incluye BYHOUR.','The five-recurrence limit is not waived by adding BYHOUR.','Añadir BYHOUR no elimina el límite de cinco recurrencias.',false],
        ['There is no recurrence limit, only a payload-size limit.','No hay límite de recurrencias, solo de tamaño de payload.','The schedule documentation states a recurrence count limit independently of payload size.','La documentación establece un límite de recurrencias independiente del tamaño del payload.',false],
        ['Only one recurrence is allowed in every iCal expression.','Solo se permite una recurrencia en cada expresión iCal.','Oracle allows multiple recurrences, up to five.','Oracle permite varias recurrencias, hasta cinco.',false]
      ]
    },
    {
      id:'gen-scheduled-03-03',topic:'Schedule parameter limits',
      question:'A batch designer proposes six persisted schedule parameters, with one containing a 300-character JSON document. Which documented constraint blocks this design?',
      questionEs:'Un diseñador propone seis Schedule Parameters persistentes, uno con un documento JSON de 300 caracteres. ¿Qué restricción documentada impide este diseño?',
      url:guide+'create-update-parameters-scheduled-integrations.html',title:'Create and Update Parameters in Schedule Integrations — count and value limits',
      options:[
        ['OIC supports up to five scalar parameters and each persisted value is limited to 256 characters.','OIC admite hasta cinco parámetros escalares y cada valor persistente tiene un límite de 256 caracteres.','Both the six-parameter count and 300-character value exceed the documented schedule-parameter limits.','Tanto los seis parámetros como el valor de 300 caracteres superan los límites documentados.',true],
        ['Only the number of parameters is limited; values have no length limit.','Solo se limita el número de parámetros; los valores no tienen límite de longitud.','Oracle also limits a parameter value to 256 characters.','Oracle también limita el valor de un parámetro a 256 caracteres.',false],
        ['A JSON document makes the parameter complex, which raises the limit to ten.','El documento JSON lo vuelve complejo y eleva el límite a diez.','Scheduled parameters are scalar and the documented count remains five.','Los Schedule Parameters son escalares y el límite documentado sigue siendo cinco.',false],
        ['Six parameters are valid if none is assigned as a Business Identifier.','Se permiten seis si ninguno se asigna como Business Identifier.','Business Identifier assignment does not change the five-parameter configuration limit.','Asignarlos o no como Business Identifiers no cambia el límite de cinco parámetros.',false]
      ]
    },
    {
      id:'gen-scheduled-04-03',topic:'Manual run sequencing',
      question:'A scheduled integration has a stored cursor. An operator wants an immediate run that joins the schedule sequence and shares its parameters, not an independent execution. Which Run choice fits?',
      questionEs:'Una Integration programada tiene un cursor guardado. Un operador quiere una ejecución inmediata que entre en la secuencia y comparta sus parámetros, no una ejecución independiente. ¿Qué opción Run corresponde?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — Ad hoc request versus As part of schedule',
      options:[
        ['As part of schedule.','As part of schedule.','Oracle says this choice runs in sequence with the schedule and shares schedule parameters.','Oracle indica que esta opción se ejecuta en secuencia con el Schedule y comparte sus parámetros.',true],
        ['Ad hoc request.','Ad hoc request.','An ad-hoc request is processed independently of any scheduled run.','Una solicitud ad hoc se procesa independientemente de las ejecuciones programadas.',false],
        ['Delete the schedule and use a REST Trigger.','Eliminar el Schedule y usar un REST Trigger.','The Run dialog already provides the requested scheduled-sequence option.','El diálogo Run ya ofrece la opción de entrar en la secuencia programada.',false],
        ['Change the Business Identifier to the cursor name.','Cambiar el Business Identifier al nombre del cursor.','Tracking configuration does not choose how a manual run joins the schedule.','La configuración de seguimiento no determina cómo entra una ejecución manual en el Schedule.',false]
      ]
    },
    {
      id:'gen-scheduled-08-04',topic:'AI-generated iCal review',
      question:'A team enters an English recurrence description in the AI-assisted iCal field and receives a valid expression. What should it do before relying on that schedule?',
      questionEs:'Un equipo describe una recurrencia en inglés en el campo iCal asistido por AI y recibe una expresión válida. ¿Qué debe hacer antes de confiar en ese Schedule?',
      url:guide+'define-integration-schedule.html',title:'Define the Integration Schedule — AI-generated iCal validation',
      options:[
        ['Review the generated expression against the intended times and edit and Validate again if needed.','Comparar la expresión generada con los horarios previstos; corregirla y usar Validate de nuevo si hace falta.','Oracle warns the generated iCal can be close but still require changes, followed by another validation.','Oracle advierte que el iCal generado puede aproximarse sin ser exacto y puede requerir cambios y nueva validación.',true],
        ['Assume a valid expression always matches the business recurrence exactly.','Suponer que una expresión válida siempre coincide exactamente con la recurrencia empresarial.','Syntax validation does not guarantee the generated schedule matches the intended timing.','La validación sintáctica no garantiza que el horario generado coincida con el deseado.',false],
        ['Switch to Simple without checking the generated expression.','Cambiar a Simple sin revisar la expresión generada.','Changing schedule type avoids reviewing neither the desired timing nor the generated result.','Cambiar el tipo de Schedule no sustituye revisar el horario requerido y el resultado generado.',false],
        ['Use a Business Identifier as the iCal validator.','Usar un Business Identifier como validador de iCal.','Business Identifiers track messages, while the schedule editor provides Validate for iCal.','Los Business Identifiers rastrean mensajes; el editor de Schedule ofrece Validate para iCal.',false]
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
