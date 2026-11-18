/* Distinct OIC orchestration cases checked against current Oracle documentation. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-orchestration-02-03',topic:'Incremental payload edit',
      question:'An order payload already contains five line items. The flow must append a sixth without rebuilding the entire payload. Which action fits the documented operation?',
      questionEs:'Un payload de pedido ya contiene cinco líneas. El flujo debe agregar una sexta sin reconstruir todo el payload. ¿Qué acción corresponde a la operación documentada?',
      url:guide+'build-complex-assignments-stitch-action.html',title:'Build Complex Assignment Statements with a Data Stitch Action — Append',
      options:[
        ['Data Stitch with Append on the repeating line element.','Data Stitch con Append sobre el elemento repetible de líneas.','Append adds an item to an existing repeating target; Data Stitch supports incremental complex payload changes.','Append añade un elemento a un destino repetible existente; Data Stitch permite cambios incrementales en payloads complejos.',true],
        ['Map the sixth line into the existing payload without replacement.','Mapear la sexta línea en el payload existente sin reemplazarlo.','A Map produces a full message payload and replaces the existing one when mapped into it.','Map produce un payload completo y reemplaza el existente cuando se mapea sobre él.',false],
        ['Assign the full order object to a scalar variable.','Asignar el objeto pedido completo a una variable escalar.','Assign is limited to scalar variables, not the complex order payload.','Assign se limita a variables escalares, no al payload complejo del pedido.',false],
        ['Remove the line array and expect automatic regeneration.','Eliminar el arreglo de líneas y esperar que se regenere.','Remove deletes target content; it does not append a new line.','Remove elimina contenido del destino; no agrega una línea nueva.',false]
      ]
    },
    {
      id:'gen-orchestration-03-03',topic:'Variable scope across a loop',
      question:'A For Each creates a local scalar result, but a later action outside the loop must use it. What is the documented design approach?',
      questionEs:'For Each crea un resultado escalar local, pero una acción posterior fuera del bucle debe usarlo. ¿Cuál es el enfoque de diseño documentado?',
      url:guide+'assign-values-scalar-variables-assign-action.html',title:'Assign Values to Scalar Variables — variable scope',
      options:[
        ['Create a global variable with Assign above the loop, then assign the local value to it.','Crear una variable global con Assign antes del bucle y asignarle el valor local.','Variables created inside a loop are not directly accessible outside; Oracle documents the global-variable bridge.','Las variables creadas dentro del bucle no son directamente accesibles fuera; Oracle documenta usar una variable global.',true],
        ['Reference the local variable directly after the loop ends.','Referenciar directamente la variable local tras terminar el bucle.','A loop-local variable is not directly visible outside its loop scope.','Una variable local del bucle no es visible directamente fuera de su ámbito.',false],
        ['Use Assign to store the entire repeating complex object in one scalar.','Usar Assign para guardar todo el objeto complejo repetible en un escalar.','Assign cannot assign values to complex variable types.','Assign no puede asignar valores a variables de tipo complejo.',false],
        ['Replace For Each with a Business Identifier.','Sustituir For Each por un Business Identifier.','A Business Identifier is for tracking and does not iterate or bridge variable scope.','Un Business Identifier sirve para seguimiento; no itera ni amplía el ámbito de una variable.',false]
      ]
    },
    {
      id:'gen-orchestration-04-03',topic:'Switch branch priority',
      question:'A Switch has two conditions that both evaluate to true for one order. Which branch executes according to Oracle?',
      questionEs:'Un Switch tiene dos condiciones verdaderas para un pedido. ¿Qué rama se ejecuta según Oracle?',
      url:guide+'route-expressions-switch-actions-branches.html',title:'Route Expressions with Switch Action Branches — first matching branch',
      options:[
        ['Only the first true branch; later branches are ignored.','Solo la primera rama verdadera; las posteriores se ignoran.','Switch evaluates routes in order and takes the first true branch.','Switch evalúa las rutas en orden y toma la primera rama verdadera.',true],
        ['Both true branches in parallel.','Ambas ramas verdaderas en paralelo.','Switch selects one route; a Parallel action is a different construct.','Switch selecciona una ruta; Parallel es una acción diferente.',false],
        ['The Otherwise branch because conditions conflict.','La rama Otherwise porque las condiciones entran en conflicto.','Otherwise is taken only if no earlier routing expression resolves to true.','Otherwise se toma solo si ninguna expresión de ruta anterior resulta verdadera.',false],
        ['The last true branch, replacing the first result.','La última rama verdadera, que reemplaza el primer resultado.','Oracle specifies first-match behavior, not last-match precedence.','Oracle especifica que prevalece la primera coincidencia, no la última.',false]
      ]
    },
    {
      id:'gen-orchestration-05-03',topic:'For Each termination',
      question:'An engineer places Stop inside a For Each that should process many files. What happens when the first iteration reaches Stop?',
      questionEs:'Un ingeniero coloca Stop dentro de un For Each que debería procesar muchos archivos. ¿Qué ocurre cuando la primera iteración llega a Stop?',
      url:guide+'loop-over-repeating-elements-each-action.html',title:'Loop over Repeating Elements with a For-Each Action — Stop behavior',
      options:[
        ['The entire integration terminates, so later iterations do not run.','Termina toda la Integration y no se ejecutan las iteraciones posteriores.','Oracle warns that Stop inside For Each terminates the integration when reached in the first iteration.','Oracle advierte que Stop dentro de For Each termina la Integration al alcanzarse en la primera iteración.',true],
        ['Only the current file is skipped and the next iteration begins.','Solo se omite el archivo actual y comienza la siguiente iteración.','Stop is not a continue-to-next-item operation in this action.','Stop no equivale a continuar con el elemento siguiente en esta acción.',false],
        ['The loop waits for a new repeating element.','El bucle espera un nuevo elemento repetible.','The iteration set is selected from the repeating element; Stop terminates the integration.','Las iteraciones provienen del elemento repetible; Stop termina la Integration.',false],
        ['The loop retries the first file automatically.','El bucle reintenta automáticamente el primer archivo.','The documented Stop behavior is termination, not an automatic retry.','El comportamiento documentado de Stop es terminar, no reintentar automáticamente.',false]
      ]
    },
    {
      id:'gen-orchestration-07-04',topic:'Parallel branch limit',
      question:'A Parallel action already contains five independent validation branches. The designer tries to add a sixth. What does the current OIC design rule imply?',
      questionEs:'Una acción Parallel ya contiene cinco ramas independientes de validación. El diseñador intenta agregar una sexta. ¿Qué implica la regla actual de diseño de OIC?',
      url:guide+'process-tasks-parallel-parallel-action.html',title:'Process Tasks in Parallel with a Parallel Action — branch limit',
      options:[
        ['The sixth branch cannot be added to that Parallel action; five is the maximum.','No puede agregarse la sexta rama a esa acción Parallel; cinco es el máximo.','Oracle disables adding a sixth branch after the five-branch limit is reached.','Oracle deshabilita agregar una sexta rama cuando se alcanza el límite de cinco.',true],
        ['Parallel actions have no branch limit if the branches are independent.','Parallel no tiene límite de ramas si son independientes.','Independent work is appropriate for Parallel, but one action is limited to five branches.','El trabajo independiente es apropiado para Parallel, pero cada acción tiene máximo cinco ramas.',false],
        ['A sixth branch is allowed only in a synchronous integration.','La sexta rama se permite solo en una Integration síncrona.','The five-branch maximum does not change for synchronous integrations.','El máximo de cinco ramas no cambia en Integrations síncronas.',false],
        ['Nested Parallel inside a branch is the documented way to bypass the limit.','Anidar Parallel dentro de una rama es la forma documentada de evitar el límite.','Oracle does not support a Parallel action nested inside another Parallel action.','Oracle no admite anidar una acción Parallel dentro de otra.',false]
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
