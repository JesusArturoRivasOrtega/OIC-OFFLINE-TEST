/* Original editorial replacement items. No text or answer key from private sources is copied here. */
window.OIC_AUTHORED_QUESTIONS = [
  {
    replaces:'gen-started-06-03', categoryId:'started', topic:'Asynchronous design',
    question:'A storefront sends an order to OIC, but fulfillment may take twenty minutes. The storefront only needs an immediate receipt. Which interaction is most suitable?',
    questionEs:'Una tienda envía un pedido a OIC, pero su preparación puede tardar veinte minutos. La tienda solo necesita un acuse inmediato. ¿Qué interacción conviene?',
    options:[
      ['A synchronous request that keeps the storefront waiting until fulfillment ends','This couples a long-running process to the caller response window.'],
      ['An asynchronous design that acknowledges receipt and tracks later fulfillment','The caller can receive a timely acknowledgment while fulfillment continues and is monitored.'],
      ['A Connection test that confirms the order has been fulfilled','A Connection test checks configuration, not completion of a business transaction.'],
      ['A mapping-only integration with no operational tracking','Mapping alone neither establishes the interaction pattern nor provides recovery evidence.']
    ], correct:['B'], reference:'Understand Integration Styles: Differences Between Synchronous and Asynchronous Integrations', manualPdfPage:121, verification:'verified'
  },
  {
    replaces:'gen-started-07-03', categoryId:'started', topic:'Projects',
    question:'A team owns related order integrations, their Connections, and deployment work. They want one design-time workspace with deployment and observation views. What should they use?',
    questionEs:'Un equipo administra integraciones de pedidos, sus Connections y el despliegue. Quiere un espacio de diseño con vistas de despliegue y observación. ¿Qué debe utilizar?',
    options:[
      ['A Project for the related integration resources','Projects organize related resources and expose design, deployment, and observation workflows.'],
      ['A single Trust Certificate as the workspace','A certificate supplies trust material; it does not group integration designs.'],
      ['An Invoke Connection in place of every integration','An Invoke calls a target and cannot contain the team’s orchestration.'],
      ['A Business Identifier as a deployment container','A Business Identifier supports tracking, not resource organization.']
    ], correct:['A'], reference:'Get Started with Projects: About Projects', manualPdfPage:100, verification:'verified'
  },
  {
    replaces:'gen-connections-06-03', categoryId:'connections', topic:'OAuth client credentials',
    question:'A nightly integration calls an API using its own service identity; no person signs in during the run. Which OAuth 2.0 grant best matches that requirement?',
    questionEs:'Una integración nocturna llama a una API con su propia identidad de servicio; ninguna persona inicia sesión. ¿Qué flujo de OAuth 2.0 corresponde?',
    options:[
      ['Authorization Code, because every token requires a browser user','Authorization Code is designed around user authorization and redirection.'],
      ['Client Credentials, if supported by the API provider','Client Credentials is the service-to-service flow without interactive user authorization.'],
      ['A Business Identifier, because it is an access token','Business Identifiers are tracking fields, not OAuth grants.'],
      ['A TLS Trust Certificate alone, because it grants API authorization','TLS trust does not replace the API’s OAuth authorization policy.']
    ], correct:['B'], reference:'Use OAuth 2.0 in Oracle Integration: Use OAuth with Outbound Calls from Oracle Integration', manualPdfPage:368, supplementalUrl:'https://www.rfc-editor.org/rfc/rfc6749#section-4.4', verification:'verified'
  },
  {
    replaces:'gen-connections-07-03', categoryId:'connections', topic:'Authorization Code',
    question:'An API must access a user-owned resource only after that user authorizes access in a browser. Which grant is the closest fit?',
    questionEs:'Una API debe acceder a un recurso de un usuario solo después de que este autorice el acceso en el navegador. ¿Qué flujo corresponde?',
    options:[
      ['Client Credentials with no user context','Client Credentials represents the client application rather than an authorizing end user.'],
      ['Authorization Code with the provider’s redirect flow','Authorization Code is built around an explicit user authorization and redirect exchange.'],
      ['SFTP password authentication','SFTP credentials do not express the API’s user-delegated OAuth flow.'],
      ['A schedule parameter containing the user’s password','A schedule parameter is not an OAuth grant and is not a safe replacement for consent.']
    ], correct:['B'], reference:'Use OAuth 2.0 in Oracle Integration: Use OAuth with Outbound Calls from Oracle Integration', manualPdfPage:368, supplementalUrl:'https://www.rfc-editor.org/rfc/rfc6749#section-4.1', verification:'verified'
  },
  {
    replaces:'gen-orchestration-06-03', categoryId:'orchestration', topic:'While',
    question:'A polling branch must repeat while a status is pending, but stop after a bounded number of checks. Which design review question is essential?',
    questionEs:'Una rama de consulta debe repetirse mientras el estado esté pendiente, pero detenerse tras un número limitado de comprobaciones. ¿Qué se debe revisar?',
    options:[
      ['Can the loop condition change, and is there a termination bound?','A While loop needs a changing condition or explicit bound to avoid endless execution.'],
      ['Will Parallel force every poll to finish in sequence?','Parallel is for independent concurrent branches, not a termination control.'],
      ['Can a certificate make the condition false automatically?','Certificates provide security material, not loop-state management.'],
      ['Should the integration omit fault handling while it polls?','Polling still needs fault and timeout treatment.']
    ], correct:['A'], reference:'Add Actions to an Integration: Loop Over Actions or Invoke Connections While a Condition is Satisfied with a While Action', manualPdfPage:541, verification:'verified'
  },
  {
    replaces:'gen-orchestration-07-03', categoryId:'orchestration', topic:'Parallel',
    question:'An order flow must call tax and inventory services, and neither call needs the other’s response. What design can reduce elapsed time while preserving deliberate fault handling?',
    questionEs:'Un flujo de pedidos debe llamar a servicios de impuestos e inventario; ninguno necesita la respuesta del otro. ¿Qué diseño reduce el tiempo sin descuidar los errores?',
    options:[
      ['Parallel branches for the independent Invokes, with result comparison and a Global Fault Handler','The manual uses parallel branches for independent calls and notes that faults can be caught at the integration level.'],
      ['A For Each loop over a single customer record','For Each is for repeating payload elements, not independent service concurrency.'],
      ['A single Assign action instead of both service calls','Assign sets variables; it cannot obtain tax and inventory responses.'],
      ['Two dependent invocations that assume the first output is required by the second','That dependency is absent from the case and would serialize work unnecessarily.']
    ], correct:['A'], reference:'Add Actions to an Integration: Process Tasks in Parallel', manualPdfPage:531, verification:'verified'
  },
  {
    replaces:'gen-scheduled-06-03', categoryId:'scheduled', topic:'File polling',
    question:'A supplier places a nightly CSV on an SFTP server. No client calls OIC when the file arrives. Which starting pattern is most appropriate?',
    questionEs:'Un proveedor deposita cada noche un CSV en un servidor SFTP. Ningún cliente llama a OIC cuando llega el archivo. ¿Qué patrón de inicio conviene?',
    options:[
      ['A REST Trigger waiting for an HTTP request from the supplier','The case has file arrival and a nightly cadence, not an HTTP caller.'],
      ['A Scheduled Integration using an FTP Adapter Connection and Stage File processing','The schedule can initiate FTP Adapter retrieval; Stage File can then process the downloaded file without an inbound caller.'],
      ['A Business Identifier used as the file-transfer protocol','A tracking field cannot retrieve or parse a file.'],
      ['A Map Editor session that runs automatically at midnight','Map Editor defines mappings; it is not a scheduler.']
    ], correct:['B'], reference:'Understand Integration Styles: About Schedule Integrations; Process Files in Schedule Integrations with a Stage File Action', manualPdfPage:121, supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/process-files-scheduled-integrations-stage-file-action.html', verification:'verified'
  },
  {
    replaces:'gen-scheduled-07-03', categoryId:'scheduled', topic:'Failure response',
    question:'A nightly batch reports a fault after some records reached the target. Before rerunning, what should the operator establish?',
    questionEs:'Un proceso nocturno falla después de que algunos registros llegaron al destino. Antes de repetirlo, ¿qué debe comprobar el operador?',
    options:[
      ['Whether the target committed records and how duplicate processing is prevented','Partial success changes the safe recovery choice; reruns need idempotency or record-level reconciliation.'],
      ['That every failed run can be replayed without review','A failed overall status does not prove that no business record was committed.'],
      ['That tracking data should be deleted first','Deleting evidence impedes diagnosis and reconciliation.'],
      ['That a new REST Trigger will repair the batch history','A different trigger does not resolve partial commits or recovery.']
    ], correct:['A'], reference:'Monitoring Integrations and Error Management'
  },
  {
    replaces:'gen-monitoring-06-03', categoryId:'monitoring', topic:'HTTP 503',
    question:'An outbound call receives HTTP 503 after a payment request. The client cannot tell whether the target committed the payment. What should govern a retry?',
    questionEs:'Una llamada saliente recibe HTTP 503 tras solicitar un pago. No se sabe si el destino confirmó la operación. ¿Qué debe determinar el reintento?',
    options:[
      ['Immediate unlimited retries in parallel','Unbounded retries can amplify an outage and duplicate a payment.'],
      ['Target-side transaction evidence and an idempotent retry strategy','A 503 does not establish the transaction outcome; reconciliation and idempotency are necessary.'],
      ['Changing the Business Identifier to a random value','A tracking value does not resolve target availability or transaction status.'],
      ['Assuming the payment failed because the HTTP response was 503','The response alone does not prove whether the target committed the operation.']
    ], correct:['B'], reference:'Troubleshooting REST connections and fault management'
  },
  {
    replaces:'gen-monitoring-07-03', categoryId:'monitoring', topic:'Payload logging',
    question:'Support asks to log complete payloads for every production transaction, including personal identifiers. What is the defensible response?',
    questionEs:'Soporte pide registrar payloads completos de todas las transacciones de producción, incluidos identificadores personales. ¿Cuál es la respuesta adecuada?',
    options:[
      ['Enable unrestricted logging permanently to speed all future investigations','Permanent full logging can expose sensitive data and breach retention controls.'],
      ['Use time-limited tracing only when permitted, with access and retention controls','Oracle warns that payload tracing affects performance and can store sensitive information contrary to retention rules.'],
      ['Remove Business Identifiers so no transaction can be found','Removing tracking hinders support and does not itself control payload logging.'],
      ['Put service credentials inside the payload to correlate records','Credentials must not be placed in business payloads or logs.']
    ], correct:['B'], reference:'Activate and Deactivate Integrations: Manage Tracing Levels on Integrations', manualPdfPage:689, verification:'verified'
  },
  {
    replaces:'gen-ai-06-03', categoryId:'ai', topic:'RAG action',
    question:'An internal assistant must answer using only approved policy documents. Which architecture decision is essential before connecting it to OIC?',
    questionEs:'Un asistente interno debe responder solo con documentos de políticas aprobados. ¿Qué decisión de arquitectura es esencial antes de conectarlo a OIC?',
    options:[
      ['Select an approved knowledge-base agent endpoint in an available region and compartment, then review the answers','The RAG action uses an agent endpoint containing the knowledge base; the region and compartment must expose that endpoint.'],
      ['Send all documents to every prompt without access checks','This bypasses document permissions and creates unnecessary data exposure.'],
      ['Replace the document repository with an SFTP password','A file-transfer credential is not a governed retrieval source.'],
      ['Assume RAG proves every answer factually correct','Grounding reduces unsupported answers but does not guarantee correctness.']
    ], correct:['A'], reference:'Add Actions to an Integration: Ask Questions and Receive Answers Based on Current Enterprise Data with a Generative AI Agents RAG Action', manualPdfPage:515, verification:'verified'
  },
  {
    replaces:'gen-ai-07-03', categoryId:'ai', topic:'Agentic AI',
    question:'An AI agent is proposed to approve supplier payments automatically. Which requirement should be checked before production deployment?',
    questionEs:'Se propone un agente AI para aprobar automáticamente pagos a proveedores. ¿Qué requisito debe revisarse antes de desplegarlo en producción?',
    options:[
      ['Feature availability, permissions, controls, and a human approval boundary','High-impact actions require verified availability, least privilege, and explicit human-control design.'],
      ['Whether the agent can bypass all existing payment controls','Bypassing controls increases business risk and is not justified by using an agent.'],
      ['Whether a prompt can be treated as a certified payment policy','A prompt alone is not a validated control or policy.'],
      ['Whether an OAuth client can replace the payment approver','OAuth grants access; it does not provide business authorization.']
    ], correct:['A'], reference:'AI Innovation: Automate with Agentic AI'
  },
  {
    replaces:'gen-started-08-03', categoryId:'started', topic:'Project migration',
    question:'A team moves a standalone Integration into a Project. An external client still calls the old endpoint URL. What must the deployment plan account for?',
    questionEs:'Un equipo mueve una Integration independiente a un Project. Un cliente externo sigue llamando al URL anterior. ¿Qué debe contemplar el despliegue?',
    options:[
      ['The endpoint changes, so clients and routing configuration must be updated','Oracle warns that moving an Integration into a Project changes its endpoint.','El endpoint cambia; hay que actualizar clientes y configuración de rutas','Oracle advierte que mover una Integration a un Project cambia su endpoint.'],
      ['The endpoint remains identical because a Project is only a visual folder','A Project has deployment and access behavior; the manual warns about endpoint changes.','El endpoint queda idéntico porque Project solo es una carpeta visual','Project tiene comportamiento de despliegue y acceso; el manual advierte del cambio de endpoint.'],
      ['Only the Business Identifier changes automatically','Tracking fields are not the documented migration consequence.','Solo cambia automáticamente el Business Identifier','Los campos de seguimiento no son la consecuencia documentada de la migración.'],
      ['Every client is redirected to the new endpoint without configuration','The manual does not promise automatic redirection of external clients.','Todos los clientes se redirigen sin configuración al nuevo endpoint','El manual no promete redirección automática de los clientes externos.']
    ], correct:['A'], reference:'Get Started with Projects: Factors to Consider Before Importing Integrations into Projects', manualPdfPage:101, verification:'verified'
  },
  {
    replaces:'gen-connections-08-03', categoryId:'connections', topic:'Developer API security',
    question:'A service account must call Oracle Integration Developer APIs. The team notes that some Integration endpoints permit Basic Authorization. Which security decision applies to the Developer APIs?',
    questionEs:'Una cuenta de servicio debe llamar a las Oracle Integration Developer APIs. El equipo sabe que algunos endpoints de Integration permiten Basic Authorization. ¿Qué decisión de seguridad corresponde a las Developer APIs?',
    options:[
      ['Use OAuth with the required client application, scopes and roles','Oracle states that OAuth is required for the Developer APIs.','Usar OAuth con la aplicación cliente, scopes y roles requeridos','Oracle indica que OAuth es obligatorio para las Developer APIs.'],
      ['Use Basic Authorization because every Oracle Integration endpoint accepts it','The manual distinguishes Integration endpoints from Developer APIs; OAuth is required for the latter.','Usar Basic Authorization porque todos los endpoints de Oracle Integration lo aceptan','El manual distingue endpoints de Integration y Developer APIs; estas últimas requieren OAuth.'],
      ['Publish the account password as a schedule parameter','A schedule parameter is not an API security policy and would expose a secret.','Publicar la contraseña como schedule parameter','Un schedule parameter no es una política de seguridad de API y expondría un secreto.'],
      ['Replace authorization with a Business Identifier','Business Identifiers are tracking data, not API access tokens.','Sustituir autorización por un Business Identifier','Business Identifiers sirven para seguimiento, no son access tokens.']
    ], correct:['A'], reference:'Use OAuth 2.0 in Oracle Integration: You Must Use OAuth with the Oracle Integration Developer APIs', manualPdfPage:372, verification:'verified'
  },
  {
    replaces:'gen-orchestration-08-03', categoryId:'orchestration', topic:'Stage File large-file processing',
    question:'An FTP Adapter downloads a 100 MB CSV. The flow must parse records without loading the entire file into one Stage File read. Which operation fits?',
    questionEs:'Un FTP Adapter descarga un CSV de 100 MB. El flujo debe analizar registros sin cargar todo el archivo en una sola lectura de Stage File. ¿Qué operación corresponde?',
    options:[
      ['Read Entire File with a larger tracking field','The manual limits Read Entire File to files smaller than 10 MB; tracking does not change that.','Read Entire File con un campo de seguimiento más grande','El manual limita Read Entire File a archivos menores de 10 MB; el seguimiento no cambia ese límite.'],
      ['Read File in Segments with an appropriate Segment Size','The operation processes logical chunks to stay within memory constraints.','Read File in Segments con un Segment Size adecuado','La operación procesa segmentos lógicos para respetar los límites de memoria.'],
      ['A Switch action that divides the binary file automatically','Switch routes by an expression; it does not parse a file into chunks.','Un Switch que divida automáticamente el archivo binario','Switch enruta por una expresión; no analiza el archivo por segmentos.'],
      ['A Global Fault Handler that increases memory on each retry','Fault handling does not raise the file-read memory limit.','Un Global Fault Handler que aumente memoria en cada reintento','El manejo de fallos no aumenta el límite de memoria de lectura.']
    ], correct:['B'], reference:'Add Actions to an Integration: Configure Stage File Operations; Read File in Segments', manualPdfPage:451, verification:'verified'
  },
  {
    replaces:'gen-scheduled-08-03', categoryId:'scheduled', topic:'Parameterized schedule recovery',
    question:'A Scheduled Integration with schedule parameters fails after it starts. Which statement matches the documented Resubmit behavior?',
    questionEs:'Una Scheduled Integration con schedule parameters falla después de iniciar. ¿Qué afirmación coincide con el comportamiento documentado de Resubmit?',
    options:[
      ['Oracle automatically resubmits every failed schedule','Oracle explicitly states that it does not automatically resubmit failed messages.','Oracle ejecuta Resubmit automáticamente para cada schedule fallido','Oracle indica expresamente que no ejecuta Resubmit automáticamente.'],
      ['The parameterized scheduled instance is nonrecoverable; investigate before a controlled new run','The manual names scheduled flows with scheduled parameters as an exception to recoverable asynchronous flows.','La instancia programada con parámetros no es recuperable; hay que investigar antes de una nueva ejecución controlada','El manual señala a los flujos programados con parámetros como excepción de los flujos asíncronos recuperables.'],
      ['A synchronous flow can always be resubmitted from Observability','The manual says synchronous flows cannot be resubmitted.','Un flujo síncrono siempre admite Resubmit desde Observability','El manual indica que los flujos síncronos no admiten Resubmit.'],
      ['Deleting the failed instance makes it recoverable','Discarding a message prevents later resubmission.','Borrar la instancia fallida la vuelve recuperable','Descartar un mensaje impide ejecutar Resubmit posteriormente.']
    ], correct:['B'], reference:'Manage Errors: Resubmit Failed Messages', manualPdfPage:804, verification:'verified'
  },
  {
    replaces:'gen-monitoring-08-03', categoryId:'monitoring', topic:'Tracing on active integrations',
    question:'An active Integration needs temporary payload diagnostics. Which change is documented without first deactivating the Integration?',
    questionEs:'Una Integration activa necesita diagnóstico temporal de payloads. ¿Qué cambio está documentado sin desactivarla primero?',
    options:[
      ['Use Design > Integrations > Actions > Configure activation to adjust tracing, considering performance and retention','Oracle documents this path and warns about payload-trace performance and sensitive-data retention.','Usar Design > Integrations > Actions > Configure activation para ajustar tracing y considerar rendimiento y retención','Oracle documenta esa ruta y advierte sobre rendimiento y retención de datos sensibles.'],
      ['Restart the entire OCI tenancy to clear tracing settings','The documented action is on the active Integration; a tenancy restart is not the procedure.','Reiniciar toda la tenancy OCI para limpiar tracing','La acción documentada se realiza en la Integration activa; reiniciar la tenancy no es el procedimiento.'],
      ['Change the target password to enable payload logging','Credentials and tracing are separate configuration concerns.','Cambiar la contraseña del destino para activar payload logging','Credenciales y tracing son configuraciones diferentes.'],
      ['Enable Debug permanently in production without checking data policy','Oracle discourages debug or audit in production and warns about sensitive payload retention.','Mantener Debug en producción sin revisar la política de datos','Oracle desaconseja debug o audit en producción y advierte sobre retención de payloads sensibles.']
    ], correct:['A'], reference:'Activate and Deactivate Integrations: Manage Tracing Levels on Integrations', manualPdfPage:689, verification:'verified'
  },
  {
    replaces:'gen-ai-08-03', categoryId:'ai', topic:'RAG conversation sessions',
    question:'An OCI Generative AI Agents RAG Action should continue an earlier conversation rather than start a new one. What must the mapper provide?',
    questionEs:'Una OCI Generative AI Agents RAG Action debe continuar una conversación anterior en vez de iniciar otra. ¿Qué debe proporcionar el mapper?',
    options:[
      ['The previous response Session Id mapped to the request Session Id','The manual says to map the earlier response Session Id to continue that session.','El Session Id de la respuesta anterior mapeado al Session Id de la solicitud','El manual indica mapear el Session Id de la respuesta anterior para continuar esa sesión.'],
      ['No Session Id, because omission always resumes the latest chat','Without a Session Id the action creates a new session.','Ningún Session Id porque la omisión siempre reanuda el chat más reciente','Sin Session Id la acción crea una sesión nueva.'],
      ['A Business Identifier in place of Session Id','Business Identifiers track Integration instances and do not supply the RAG chat session.','Un Business Identifier en lugar de Session Id','Business Identifiers siguen instancias de Integration, no la sesión de chat RAG.'],
      ['A new knowledge base on every request','The agent endpoint supplies the knowledge base; replacing it does not resume a conversation.','Una knowledge base nueva en cada solicitud','El agent endpoint aporta la knowledge base; reemplazarla no reanuda la conversación.']
    ], correct:['A'], reference:'Add Actions to an Integration: Invoke Oracle Cloud Infrastructure Generative AI Agents RAG from an Integration', manualPdfPage:516, verification:'verified'
  }
].map(item=>({
  id:item.replaces,categoryId:item.categoryId,topic:item.topic,question:item.question,questionEs:item.questionEs,
  options:item.options.map(([text,why,textEs,whyEs],i)=>({id:String.fromCharCode(65+i),text,textEs:textEs||null,correct:item.correct.includes(String.fromCharCode(65+i)),why,whyEs:whyEs||null})),
  correct:item.correct,multi:false,difficulty:'professional',type:'scenario',
  source:'Original editorial practice',sourceType:'original',verification:item.verification||'editorial draft',
  reference:{title:'Oracle Cloud Using Integrations in Oracle Integration 3',edition:'G36915-54, October 2026',section:item.reference,pdfPage:item.manualPdfPage||null,supplementalUrl:item.supplementalUrl||null,status:item.verification==='verified'?'item-level verified':'section pointer; item-level review pending'},
  explanation:item.options.find((_,i)=>item.correct.includes(String.fromCharCode(65+i)))?.[1],
  createdFor:'OIC Certification Academy 2026'
}));
