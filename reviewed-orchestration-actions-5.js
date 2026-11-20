/* Five distinct orchestration cases checked against current Oracle guidance. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const mapper='https://docs.oracle.com/en/cloud/paas/application-integration/mapper-user/';
  const cases=[
    {
      id:'gen-orchestration-01-01',topic:'Mapper test coverage',
      question:'A mapping passes with one generated sample. The target must receive every line from a repeating source list. What test best checks that requirement?',
      questionEs:'Un Mapping pasa con un ejemplo generado. El destino debe recibir todas las líneas de una lista repetible. ¿Qué prueba comprueba mejor el requisito?',
      url:mapper+'testing-your-mappings.html',title:'Test Your Mappings — supplied sample and target result',
      options:[
        ['Test only a source payload with no lines and assume the repetition works.','Probar solo un payload sin líneas y suponer que la repetición funciona.','An empty list does not exercise the iteration that must preserve multiple lines.','Una lista vacía no ejercita la iteración que debe conservar varias líneas.',false],
        ['Run Mapper Test with a supplied sample containing at least two lines and inspect the target result.','Ejecutar Mapper Test con una muestra de al menos dos líneas e inspeccionar el resultado destino.','Oracle supports supplied sample input and displays the mapped target, enabling a direct cardinality check.','Oracle admite muestras propias y muestra el destino, lo que permite comprobar la cardinalidad.',true],
        ['Change tracing to Production because tracing verifies XSLT cardinality.','Cambiar tracing a Production porque verifica cardinalidad XSLT.','Tracing level does not replace executing a representative mapping sample.','El nivel de tracing no sustituye probar el Mapping con datos representativos.',false],
        ['Test the Connection only, since successful authentication proves the mapping output.','Probar solo la Connection porque autenticar demuestra la salida del Mapping.','A connection test cannot establish that repeated source nodes appear in the mapped target.','La prueba de Connection no demuestra que los nodos repetidos lleguen al destino.',false]
      ]
    },
    {
      id:'gen-orchestration-02-01',topic:'Selective removal in Data Stitch',
      question:'A purchase order variable has several repeating lines. A Data Stitch Remove operation targets the repeating element without an index or predicate. What happens?',
      questionEs:'Una variable de pedido contiene varias líneas repetibles. Data Stitch Remove apunta al elemento repetible sin índice ni predicado. ¿Qué ocurre?',
      url:guide+'build-complex-assignments-stitch-action.html',title:'Build Complex Assignment Statements with a Data Stitch Action — Remove',
      options:[
        ['Only the first line is removed automatically.','Se elimina automáticamente solo la primera línea.','Oracle documents removal of all instances unless one is specifically selected.','Oracle documenta eliminación de todas las instancias salvo selección específica.',false],
        ['The action is converted into a Mapper full-payload replacement.','La acción se convierte en reemplazo total mediante Mapper.','Data Stitch has its own Remove operation; it is not a Mapper conversion.','Data Stitch tiene su operación Remove; no se convierte en Mapper.',false],
        ['All matching instances are removed unless a specific one is selected by index or predicate.','Se eliminan todas las instancias coincidentes salvo que se seleccione una por índice o predicado.','Oracle states this exact behavior for repeating or unbounded elements.','Oracle establece precisamente ese comportamiento para elementos repetibles.',true],
        ['No line can be removed because Data Stitch supports only scalar variables.','No se puede eliminar ninguna porque Data Stitch solo admite variables escalares.','Data Stitch supports complex variables and repeating elements, unlike scalar-only Assign.','Data Stitch admite variables complejas y repetibles, a diferencia de Assign.',false]
      ]
    },
    {
      id:'gen-orchestration-03-04',topic:'Assign versus complex variable',
      question:'An integration must replace an address object inside an existing complex payload without replacing the rest of the message. Which action matches the documented capability?',
      questionEs:'Una Integration debe reemplazar un objeto Address dentro de un payload complejo sin reemplazar el resto. ¿Qué acción tiene esa capacidad?',
      url:guide+'build-complex-assignments-stitch-action.html',title:'Build Complex Assignment Statements with a Data Stitch Action — complex assignment',
      options:[
        ['Assign, because it accepts any complex object as a scalar variable.','Assign, porque acepta cualquier objeto complejo como variable escalar.','Oracle limits Assign to scalar types; it does not support complex objects.','Oracle limita Assign a tipos escalares; no admite objetos complejos.',false],
        ['Mapper, because mapping into an existing payload preserves every untouched child.','Mapper, porque mapear sobre un payload existente conserva los demás hijos.','Oracle says Mapper generates a full payload and replaces the existing one.','Oracle indica que Mapper genera un payload completo y reemplaza el existente.',false],
        ['Business Identifier, because tracking fields edit nested payloads.','Business Identifier, porque los campos de seguimiento editan payloads anidados.','Tracking identifiers do not perform payload assignment.','Los identificadores de seguimiento no asignan datos al payload.',false],
        ['Data Stitch with Assign on the selected address child.','Data Stitch con Assign sobre el objeto Address seleccionado.','Data Stitch supports complex variables and partial replacement of a selected child.','Data Stitch admite variables complejas y reemplazo parcial de un hijo.',true]
      ]
    },
    {
      id:'gen-orchestration-04-01',topic:'Switch Otherwise path',
      question:'A Switch has a Route 1 expression and an Otherwise branch. For an input where Route 1 is false, which path is taken?',
      questionEs:'Un Switch tiene una expresión Route 1 y una rama Otherwise. Si Route 1 es falsa, ¿qué ruta se ejecuta?',
      url:guide+'route-expressions-switch-actions-branches.html',title:'Route Expressions with Switch Action Branches — Otherwise',
      options:[
        ['Otherwise, because it is the fallback when the routing expression is not true.','Otherwise, porque es la alternativa cuando la expresión no resulta verdadera.','Oracle documents Otherwise as the branch chosen when the initial route does not resolve to true.','Oracle documenta Otherwise como ruta cuando la primera condición no es verdadera.',true],
        ['Both Route 1 and Otherwise, because Switch executes branches in parallel.','Route 1 y Otherwise, porque Switch ejecuta ambas en paralelo.','Oracle describes Switch as single-threaded and taking the first true branch.','Oracle describe Switch como secuencial y con una sola primera ruta verdadera.',false],
        ['Route 1, because the first branch is always selected regardless of condition.','Route 1, porque siempre se selecciona la primera rama.','The first branch requires an expression and is not selected when it is false.','La primera rama necesita una expresión y no se selecciona si es falsa.',false],
        ['No path, because Otherwise must be defined as a separate Integration.','Ninguna, porque Otherwise debe ser otra Integration.','Oracle creates Otherwise as part of the Switch action.','Oracle crea Otherwise como parte de la acción Switch.',false]
      ]
    },
    {
      id:'gen-orchestration-05-01',topic:'Nested repeating collections',
      question:'A payload contains a repeating list of orders, and each order contains repeating lines. How should For Each process every line with the correct parent context?',
      questionEs:'Un payload contiene pedidos repetibles y cada pedido contiene líneas repetibles. ¿Cómo procesa For Each cada línea con su pedido correcto?',
      url:guide+'loop-over-repeating-elements-each-action.html',title:'Loop over Repeating Elements with a For-Each Action — nested lists',
      options:[
        ['Select the child lines directly in one top-level For Each and ignore the repeating parent.','Seleccionar las líneas directamente en un único For Each superior e ignorar el padre repetible.','Oracle requires first looping over the repeating parent to access its child list in context.','Oracle exige iterar primero el padre repetible para acceder a la lista hija en contexto.',false],
        ['Create an outer For Each over orders and an inner For Each over lines within each order.','Crear un For Each externo sobre pedidos y otro interno sobre las líneas de cada pedido.','Oracle documents nested For Each actions for a repeating child under a repeating parent.','Oracle documenta For Each anidados para hijos repetibles bajo padres repetibles.',true],
        ['Use a Business Identifier for each line; it automatically creates both loops.','Usar un Business Identifier por línea; crea automáticamente ambos bucles.','Business Identifiers track fields and do not create For Each actions.','Los Business Identifiers rastrean campos y no crean acciones For Each.',false],
        ['Use Switch Otherwise as the repeating-element selector.','Usar Switch Otherwise como selector de elementos repetibles.','Switch routes on conditions; it is not the documented nested-list iteration structure.','Switch elige rutas por condición; no es la estructura de iteración anidada.',false]
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
