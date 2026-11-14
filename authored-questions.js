/* Original editorial replacement items. No text or answer key from private sources is copied here. */
window.OIC_AUTHORED_QUESTIONS = [
  {
    replaces:'gen-orchestration-01-03', categoryId:'orchestration', topic:'B2B document version migration', type:'fundamentals', difficulty:'basic',
    question:'A partner will start sending X12 5010 810 invoices next month, while another partner still sends 4010 810. What should the OIC B2B designer prepare before the new feed goes live?',
    questionEs:'Un socio comenzará a enviar facturas X12 5010 810 el próximo mes, mientras otro seguirá enviando 4010 810. ¿Qué debe preparar el diseñador de OIC B2B antes de activar el nuevo flujo?',
    options:[
      ['One agreement using only the existing 4010 document; X12 versions are ignored','The B2B document includes the EDI version, so the 4010 contract does not automatically validate 5010.','Un solo Agreement con el Document 4010 existente; las versiones X12 se ignoran','El B2B Document incluye la versión EDI; el contrato 4010 no valida automáticamente 5010.'],
      ['A 5010 810 document and an agreement for the new partner, while retaining the 4010 route until its partner migrates','The document defines version and type; each partner agreement selects the document and route that applies to that partner.','Un Document 5010 810 y un Agreement para el socio nuevo, conservando la ruta 4010 hasta que el otro migre','El Document define versión y tipo; cada Agreement selecciona el documento y la ruta que corresponden a su socio.'],
      ['Only a new tracking variable that changes 4010 to 5010 at runtime','Tracking variables help locate messages but do not change EDI parsing or agreement configuration.','Solo una Tracking Variable nueva que cambie 4010 por 5010 durante la ejecución','Las Tracking Variables ayudan a localizar mensajes, pero no cambian el análisis EDI ni la configuración del Agreement.'],
      ['A new FTP password without any B2B document or agreement change','Transport authentication is separate from the version-specific EDI document contract.','Una contraseña FTP nueva sin cambiar Document ni Agreement de B2B','La autenticación del transporte es independiente del contrato EDI específico de cada versión.']
    ], correct:['B'], referenceTitle:'Using B2B for Oracle Integration 3', referenceEdition:'Current online guide', reference:'Trading Partner Mode Concepts: B2B Documents and Schemas; Agreements', supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integration-b2b/trading-partner-mode-concepts.html', verification:'verified'
  },
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
    replaces:'gen-scheduled-07-03', categoryId:'scheduled', topic:'Schedule backlog',
    question:'Several long-running Scheduled Integrations begin at the same minute and later jobs start late. Which change follows Oracle’s scheduler guidance?',
    questionEs:'Varias Scheduled Integrations de larga duración comienzan en el mismo minuto y los trabajos posteriores arrancan tarde. ¿Qué cambio sigue la guía de Oracle?',
    options:[
      ['Spread start times and avoid long-running schedule work','Oracle recommends avoiding schedule clusters and long runs that occupy scheduler resources.'],
      ['Move all schedules to the same minute','This increases the contention that delays scheduled starts.'],
      ['Increase every schedule frequency to once per minute','More frequent runs can increase the backlog.'],
      ['Disable Observability to free scheduler capacity','Monitoring is not identified as the cause or fix for scheduler contention.']
    ], correct:['A'], reference:'Best Practices: Create Schedule Integrations Mindfully', manualPdfPage:190, verification:'verified'
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
    ], correct:['B'], reference:'HTTP Semantics: Idempotent Methods and 503 Service Unavailable', referenceTitle:'RFC 9110: HTTP Semantics', referenceEdition:'June 2022', supplementalUrl:'https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.2', verification:'verified'
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
    ], correct:['A'], reference:'AI Innovation: Automate with Agentic AI', manualPdfPage:173, supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/human-loop/human-loop-agentic-ai-oracle-integration.html', verification:'verified'
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
  },
  {
    replaces:'gen-started-09-03', categoryId:'started', topic:'Project access control',
    question:'A compliance team must grant one group permission to observe an automation solution without letting it edit every integration in the tenancy. Which design boundary supports that?',
    questionEs:'Un equipo de cumplimiento debe permitir que un grupo observe una solución sin autorizarle a editar todas las integraciones de la tenancy. ¿Qué límite de diseño lo permite?',
    options:[
      ['Put the solution in a Project and assign the appropriate project role','Project RBAC controls who may edit, view, or monitor the contained solution.','Colocar la solución en un Project y asignar el rol de Project adecuado','Project RBAC controla quién puede editar, ver o monitorear la solución.'],
      ['Give the group tenancy-wide administrator access','That is broader than the requested observation permission.','Dar al grupo acceso de administrador de toda la tenancy','Ese permiso es más amplio que la observación solicitada.'],
      ['Create a Business Identifier for the group','Business Identifiers track message fields, not user permissions.','Crear un Business Identifier para el grupo','Business Identifiers siguen campos de mensajes; no conceden permisos de usuario.'],
      ['Change the REST Adapter URL','An endpoint URL does not define role-based project access.','Cambiar el URL del REST Adapter','El URL de un endpoint no define acceso a Project por roles.']
    ], correct:['A'], reference:'Get Started with Projects: About Projects - fine-grained access control', manualPdfPage:100, verification:'verified'
  },
  {
    replaces:'gen-started-10-03', categoryId:'started', topic:'Business Identifier limit',
    question:'An order Integration needs runtime search by order number and two additional fields. How many Business Identifiers can the designer define?',
    questionEs:'Una Integration de pedidos necesita búsqueda en runtime por número de pedido y otros dos campos. ¿Cuántos Business Identifiers puede definir el diseñador?',
    options:[
      ['Up to three, with one designated as primary','The manual permits up to three and requires a primary field for tracking.','Hasta tres, con uno designado como primario','La documentación permite hasta tres y exige designar un campo primario para el seguimiento.'],
      ['Exactly one, with no secondary fields','The manual allows two additional identifiers beyond the primary.','Exactamente uno, sin campos secundarios','La documentación permite dos identificadores adicionales al primario.'],
      ['Unlimited identifiers for every payload field','The documented limit is three, not the entire payload.','Identificadores ilimitados para cada campo del payload','El límite documentado es tres, no todo el payload.'],
      ['None, because Business Identifiers work only in design time','The Instances and Errors pages expose their runtime values.','Ninguno, porque Business Identifiers solo funcionan en design time','Las páginas Instances y Errors muestran sus valores en runtime.']
    ], correct:['A'], reference:'Integration Concepts: About Business Identifiers for Tracking Fields in Messages', manualPdfPage:157, verification:'verified'
  },
  {
    replaces:'gen-connections-09-03', categoryId:'connections', topic:'Connectivity Agent group size',
    question:'A team plans four on-premises Connectivity Agents in one agent group. What does the documented group limit require?',
    questionEs:'Un equipo planea cuatro Connectivity Agents on-premises en un solo agent group. ¿Qué exige el límite documentado del grupo?',
    options:[
      ['Redesign the grouping because one agent group supports up to two agents','The manual states that each agent group supports at most two agents.','Rediseñar los grupos porque uno admite hasta dos agents','La documentación indica que cada agent group admite como máximo dos agents.'],
      ['Keep all four because there is no per-group limit','The manual specifies a two-agent per-group limit.','Mantener los cuatro porque no hay límite por grupo','La documentación establece un límite de dos agents por grupo.'],
      ['Replace the agents with four Business Identifiers','Tracking fields do not provide private-network connectivity.','Sustituir los agents por cuatro Business Identifiers','Los campos de seguimiento no proporcionan conectividad con la red privada.'],
      ['Install every agent in the browser','The on-premises agent runs in the private environment, not a browser extension.','Instalar todos los agents en el navegador','El on-premises agent se ejecuta en el entorno privado, no como extensión del navegador.']
    ], correct:['A'], reference:'Understand Hybrid Integrations: About the Connectivity Agent', manualPdfPage:124, verification:'verified'
  },
  {
    replaces:'gen-connections-10-03', categoryId:'connections', topic:'Connection test interpretation',
    question:'A REST Adapter Connection test succeeds, but the first order fails because the target rejects a mapped field. What did the test establish?',
    questionEs:'Un Connection test de REST Adapter pasa, pero el primer pedido falla porque el destino rechaza un campo mapeado. ¿Qué comprobó la prueba?',
    options:[
      ['The Connection configuration passed its test, not that every business payload is valid','The documented test result concerns Connection configuration; mapping and target contract need separate validation.','La configuración de Connection pasó su prueba, no que todo payload comercial sea válido','El resultado documentado se refiere a la configuración; el mapeo y contrato del destino requieren validación aparte.'],
      ['Every future target payload is guaranteed valid','A Connection test does not execute every mapping or business-data case.','Que todo payload futuro del destino está garantizado','Un Connection test no ejecuta todos los casos de mapeo ni de datos comerciales.'],
      ['The Integration was activated automatically','Testing a Connection does not activate an Integration.','Que la Integration se activó automáticamente','Probar una Connection no activa una Integration.'],
      ['The target ignored schema validation','A successful configuration test says nothing about the target rejecting a later mapped field.','Que el destino omitió la validación del esquema','Una prueba de configuración correcta no explica el rechazo posterior de un campo mapeado.']
    ], correct:['A'], reference:'Create Connections: Test the Connection', manualPdfPage:397, verification:'verified'
  },
  {
    replaces:'gen-orchestration-09-03', categoryId:'orchestration', topic:'Parallel branch limit',
    question:'A design proposes six independent supplier calls inside one Parallel action. Which constraint changes that design?',
    questionEs:'Un diseño propone seis llamadas independientes a proveedores dentro de una sola Parallel action. ¿Qué restricción cambia el diseño?',
    options:[
      ['One Parallel action permits at most five branches','The sixth branch cannot be added to that Parallel action.','Una Parallel action admite como máximo cinco ramas','No se puede agregar una sexta rama a esa Parallel action.'],
      ['Parallel permits only one branch','The action supports multiple branches, up to the documented limit.','Parallel permite solo una rama','La action admite varias ramas hasta el límite documentado.'],
      ['Parallel is prohibited in application integrations','The manual supports Parallel in both application and schedule integrations.','Parallel está prohibido en application integrations','La documentación admite Parallel en application y schedule integrations.'],
      ['Six branches are required for every Parallel action','The limit is a maximum, not a minimum.','Toda Parallel action requiere seis ramas','El límite es un máximo, no un mínimo.']
    ], correct:['A'], reference:'Add Actions to an Integration: Process Tasks in Parallel - Guidelines and Restrictions', manualPdfPage:531, verification:'verified'
  },
  {
    replaces:'gen-orchestration-10-03', categoryId:'orchestration', topic:'Stage File whole-file limit',
    question:'A Stage File action must process a 150 MB file. Which operation avoids loading the whole file in one read?',
    questionEs:'Una acción Stage File debe procesar un archivo de 150 MB. ¿Qué operación evita cargar todo el archivo en una sola lectura?',
    options:[
      ['Read File in Segments with an appropriate segment size','Segmented reading processes logical chunks; a 150 MB file exceeds the whole-file limits stated in both Oracle references.','Read File in Segments con un tamaño de segmento adecuado','La lectura segmentada procesa bloques; 150 MB supera los límites de lectura completa indicados en ambas referencias de Oracle.'],
      ['Stage File cannot process files larger than the whole-file limit','The segmented operation exists for files that should not be read entirely in one operation.','Stage File no puede procesar archivos mayores que el límite de lectura completa','Existe la operación segmentada para archivos que no deben leerse completos en una sola operación.'],
      ['Only a Business Identifier can raise the read limit','A tracking field does not change file-read limits.','Solo un Business Identifier puede aumentar el límite','Un campo de seguimiento no cambia los límites de lectura de archivos.'],
      ['The file must be renamed to XML before reading','Changing the extension does not change the operation limit or parse the content.','Debe renombrarse el archivo a XML antes de leerlo','Cambiar la extensión no modifica el límite ni analiza el contenido.']
    ], correct:['A'], reference:'Add Actions to an Integration: Configure Stage File Operations - Read File in Segments', manualPdfPage:451, supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/oracle-integration-oci/component-integrations.html', verification:'verified'
  },
  {
    replaces:'gen-scheduled-09-03', categoryId:'scheduled', topic:'Scheduler resource contention',
    question:'A Scheduled Integration routinely runs for more than an hour and later schedules wait to start. Which redesign does Oracle recommend when many schedules are required?',
    questionEs:'Una Scheduled Integration suele durar más de una hora y los schedules posteriores esperan para iniciar. ¿Qué rediseño recomienda Oracle cuando hacen falta muchos schedules?',
    options:[
      ['Use a short Scheduled Integration to invoke an application Integration asynchronously','The scheduler can release its resource promptly while the long work continues in the child Integration.','Usar una Scheduled Integration breve que invoque de forma asíncrona una application Integration','El planificador libera su recurso pronto mientras el trabajo largo continúa en la Integration hija.'],
      ['Keep all long work inside the scheduled parent','Long schedule runs occupy scheduler resources and can delay other starts.','Mantener todo el trabajo largo dentro del schedule principal','Las ejecuciones largas ocupan recursos del planificador y pueden retrasar otros inicios.'],
      ['Start all schedules at the same second','A cluster of starts increases scheduler contention.','Iniciar todos los schedules en el mismo segundo','Agrupar los inicios aumenta la contención del planificador.'],
      ['Replace scheduling with a Business Identifier','A tracking field cannot launch or distribute work.','Reemplazar la programación por un Business Identifier','Un campo de seguimiento no puede iniciar ni distribuir trabajo.']
    ], correct:['A'], reference:'Best Practices: Create Schedule Integrations Mindfully', manualPdfPage:190, verification:'verified'
  },
  {
    replaces:'gen-scheduled-10-03', categoryId:'scheduled', topic:'Project future runs calendar',
    question:'A release manager wants to see all future scheduled runs across a Project. Which project view provides that calendar?',
    questionEs:'Un responsable de despliegue quiere ver todas las ejecuciones programadas futuras de un Project. ¿Qué vista del Project muestra ese calendario?',
    options:[
      ['Observe > Future runs','This view shows the calendar of future runs for schedules that have started in the Project.','Observe > Future runs','Esta vista muestra el calendario de ejecuciones futuras de los schedules iniciados en el Project.'],
      ['Design > Map Editor','Map Editor defines transformations rather than a future-run calendar.','Design > Map Editor','Map Editor define transformaciones, no el calendario de ejecuciones futuras.'],
      ['Connections > Certificates','Certificates manage security material, not schedule timing.','Connections > Certificates','Certificates administra material de seguridad, no horarios de ejecución.'],
      ['Observe > Subscriptions','Subscriptions shows event subscriptions, not the schedule-run calendar.','Observe > Subscriptions','Subscriptions muestra suscripciones a eventos, no el calendario de schedules.']
    ], correct:['A'], reference:'Monitor Integrations in a Project: View the Schedule Integration Runs Calendar in a Project', manualPdfPage:342, verification:'verified'
  },
  {
    replaces:'gen-monitoring-09-03', categoryId:'monitoring', topic:'Resubmit attempt limit',
    question:'An operator has repeatedly resubmitted the same recoverable failed instance. What maximum number of resubmissions does Oracle document for one instance?',
    questionEs:'Un operador ha ejecutado Resubmit varias veces sobre la misma instancia fallida recuperable. ¿Qué máximo documenta Oracle para una instancia?',
    options:[
      ['Ten','The manual states a maximum of ten resubmissions per instance.','Diez','La documentación establece un máximo de diez Resubmit por instancia.'],
      ['One','The documented maximum is higher than one.','Uno','El máximo documentado es mayor que uno.'],
      ['Unlimited','Oracle sets a finite maximum.','Ilimitado','Oracle establece un máximo finito.'],
      ['Exactly fifty','Fifty is the practice-exam question count per category, not the resubmission limit.','Exactamente cincuenta','Cincuenta es la cantidad de preguntas por categoría en esta aplicación, no el límite de Resubmit.']
    ], correct:['A'], reference:'Manage Errors: Resubmit Failed Messages', manualPdfPage:804, verification:'verified'
  },
  {
    replaces:'gen-monitoring-10-03', categoryId:'monitoring', topic:'Discard versus resubmit',
    question:'Support wants to preserve the ability to Resubmit a recoverable failed message tomorrow. What must they avoid today?',
    questionEs:'Soporte quiere conservar la posibilidad de ejecutar Resubmit mañana para un mensaje fallido recuperable. ¿Qué debe evitar hoy?',
    options:[
      ['Discarding that message','The manual warns that a discarded message cannot later be resubmitted.','Descartar ese mensaje','La documentación advierte que un mensaje descartado no puede enviarse de nuevo con Resubmit.'],
      ['Inspecting the Errors page','Inspecting errors helps diagnosis and does not itself discard the message.','Inspeccionar la página Errors','Inspeccionar errores ayuda al diagnóstico y no descarta el mensaje.'],
      ['Reading its Business Identifier','A tracking value helps locate the instance and does not remove it.','Leer su Business Identifier','El valor de seguimiento ayuda a localizar la instancia y no la elimina.'],
      ['Downloading the activity stream','Downloading diagnostic evidence is different from discarding the instance.','Descargar el activity stream','Descargar evidencia diagnóstica no equivale a descartar la instancia.']
    ], correct:['A'], reference:'Manage Errors: Resubmit Failed Messages', manualPdfPage:804, verification:'verified'
  },
  {
    replaces:'gen-ai-09-03', categoryId:'ai', topic:'RAG request mapping',
    question:'A Generative AI Agents RAG Action is configured but receives no question text. Which mapper link is required to pass the user question?',
    questionEs:'Una Generative AI Agents RAG Action está configurada, pero no recibe el texto de la pregunta. ¿Qué enlace del mapper transmite la consulta?',
    options:[
      ['Source User Prompt to target User Message','The manual specifies this mapping for the question or request in the payload body.','Source User Prompt hacia target User Message','La documentación especifica ese mapeo para la pregunta o solicitud del payload.'],
      ['Source Business Identifier to target Session Id','Session Id controls conversation continuity; it is not the user question.','Source Business Identifier hacia target Session Id','Session Id controla la continuidad de la conversación; no es la pregunta del usuario.'],
      ['Source File Name to target Region','Region is selected in configuration and a file name is not the prompt.','Source File Name hacia target Region','Region se elige en la configuración y el nombre de archivo no es el prompt.'],
      ['No mapping because the action invents a question','The action needs the request text supplied in User Message.','Ningún mapeo porque la action inventa una pregunta','La action necesita recibir el texto de la solicitud en User Message.']
    ], correct:['A'], reference:'Add Actions to an Integration: Invoke Oracle Cloud Infrastructure Generative AI Agents RAG from an Integration', manualPdfPage:516, verification:'verified'
  },
  {
    replaces:'gen-ai-10-03', categoryId:'ai', topic:'RAG stream configuration',
    question:'During the mapper setup for the documented OCI Generative AI Agents RAG Action, which value should be assigned to target Should Stream?',
    questionEs:'Durante la configuración del mapper de la OCI Generative AI Agents RAG Action documentada, ¿qué valor debe asignarse a target Should Stream?',
    options:[
      ['false','The documented configuration sets target Should Stream to false in the expression builder.','false','La configuración documentada establece target Should Stream en false mediante el expression builder.'],
      ['true for every integration','The documented steps do not require true; they explicitly say false.','true para toda Integration','Los pasos documentados no exigen true; indican expresamente false.'],
      ['The previous Session Id','Session Id is a separate mapper input for continuing a conversation.','El Session Id anterior','Session Id es otra entrada del mapper para continuar una conversación.'],
      ['The agent endpoint URL','The endpoint is chosen in the action configuration, not as a Boolean Should Stream value.','El URL del agent endpoint','El endpoint se selecciona en la configuración de la action; no es un valor Boolean de Should Stream.']
    ], correct:['A'], reference:'Add Actions to an Integration: Invoke Oracle Cloud Infrastructure Generative AI Agents RAG from an Integration', manualPdfPage:516, verification:'verified'
  },
  {
    replaces:'gen-connections-01-01', categoryId:'connections', topic:'Connection test scope', type:'fundamentals', difficulty:'basic',
    question:'A SOAP Connection passes Validate and Test against its WSDL. A developer concludes that the purchase-order operation and every mapping have been exercised. Which assessment is accurate?',
    questionEs:'Una Connection SOAP supera Validate and Test con su WSDL. Un desarrollador concluye que ya se ejecutaron la operación de pedidos y todos los mapeos. ¿Qué evaluación es correcta?',
    options:[
      ['Yes; Validate and Test sends a sample request to every WSDL operation','Oracle says the WSDL validation does not send requests to its exposed operations.','Sí; Validate and Test envía una solicitud de ejemplo a cada operación del WSDL','Oracle indica que esa validación no envía solicitudes a las operaciones expuestas.'],
      ['No; it validates connection configuration and WSDL material, but the integration must be tested separately','The documented connection test validates WSDL and connection setup, not business execution or mapper results.','No; valida la configuración de la Connection y el WSDL, pero la Integration debe probarse por separado','La prueba documentada valida WSDL y Connection, no la ejecución de negocio ni los resultados del mapper.'],
      ['Yes; a successful connection test automatically activates dependent integrations','Saving a tested Connection is distinct from activating its dependent Integrations.','Sí; una prueba exitosa activa automáticamente las Integrations dependientes','Guardar una Connection probada es distinto de activar sus Integrations dependientes.'],
      ['No; Validate and Test checks only the spelling of the Connection name','For a WSDL, Oracle performs full WSDL validation, including imported schemas and WSDLs.','No; Validate and Test solo revisa la ortografía del nombre de la Connection','Para un WSDL, Oracle realiza una validación completa, incluidos esquemas y WSDL importados.']
    ], correct:['B'], reference:'Test the Connection: WSDL Validate and Test versus Test', supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/test-connection.html', verification:'verified'
  },
  {
    replaces:'gen-connections-02-01', categoryId:'connections', topic:'Connectivity Agent active-passive setup', type:'fundamentals', difficulty:'basic',
    question:'A production File Adapter polls an on-premises directory through an agent group with two agents. Which agent-group setting meets Oracle’s adapter-specific requirement?',
    questionEs:'Un File Adapter de producción sondea un directorio local mediante un Agent Group con dos agentes. ¿Qué configuración cumple el requisito específico de Oracle para este adapter?',
    options:[
      ['Enable Use only one agent at a time so one agent polls and the other stands by','Oracle requires this setting for File and FTP Adapters; the passive agent can take over after failure.','Activar Use only one agent at a time para que uno sondee y el otro quede en espera','Oracle exige esta opción para File y FTP Adapters; el agente pasivo puede tomar el relevo si falla el activo.'],
      ['Leave both agents active because File Adapter always needs concurrent polling','The documented File Adapter guidance requires one active agent at a time, even though other adapters may prefer two active agents.','Dejar ambos agentes activos porque File Adapter siempre necesita sondeo concurrente','La guía de File Adapter exige un solo agente activo, aunque otros adapters puedan preferir dos.'],
      ['Install three agents in the same group and rotate the poller each hour','Oracle permits at most two connectivity agents per agent group.','Instalar tres agentes en el mismo grupo y rotar el sondeo cada hora','Oracle permite como máximo dos Connectivity Agents por Agent Group.'],
      ['Use no agent group because the folder is on premises','The on-premises File Adapter route uses a connectivity-agent group; omitting it does not establish the documented access path.','No usar Agent Group porque la carpeta está en la red local','La ruta local de File Adapter utiliza un Agent Group; omitirlo no establece el acceso documentado.']
    ], correct:['A'], reference:'Plan the Connectivity Agent Setup: Adapter-Specific Guidance; Number of Active Connectivity Agents', supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/plan-connectivity-agent-setup.html', verification:'verified'
  },
  {
    replaces:'gen-connections-04-01', categoryId:'connections', topic:'Trust certificate for outbound TLS', type:'application',
    question:'An outbound HTTPS Connection fails because Oracle Integration does not trust the endpoint’s root CA. The endpoint does not require a client certificate. Which certificate action addresses this failure?',
    questionEs:'Una Connection HTTPS saliente falla porque Oracle Integration no confía en la CA raíz del endpoint. El endpoint no exige certificado de cliente. ¿Qué acción sobre certificados resuelve este fallo?',
    options:[
      ['Upload an Identity certificate with a client private key','Identity is for two-way SSL client identity, which the scenario does not require.','Subir un certificado Identity con la clave privada del cliente','Identity sirve para la identidad del cliente en SSL bidireccional, que este caso no requiere.'],
      ['Replace the OAuth scope with the CA name','An OAuth scope controls authorization; it does not establish TLS trust in a server CA.','Reemplazar el alcance OAuth por el nombre de la CA','Un alcance OAuth controla autorización; no establece confianza TLS en la CA del servidor.'],
      ['Upload the appropriate root or intermediate CA certificate as Trust','Oracle instructs uploading a Trust certificate when the needed root is absent from its trust store.','Subir el certificado de CA raíz o intermedia correspondiente como Trust','Oracle indica subir un certificado Trust cuando falta la raíz necesaria en su almacén de confianza.'],
      ['Disable certificate validation permanently for the Connection','The documented remedy is to import the appropriate certificate, not disable server authentication.','Desactivar permanentemente la validación de certificados en la Connection','La solución documentada es importar el certificado correspondiente, no desactivar la autenticación del servidor.']
    ], correct:['C'], reference:'Manage Security Certificates: Upload a Certificate to Connect with External Services; Trust category', supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/manage-security-certificates.html', verification:'verified'
  },
  {
    replaces:'gen-connections-08-01', categoryId:'connections', topic:'SFTP private-key authentication', type:'scenario',
    question:'A partner’s SFTP server accepts a user name and SSH key, but no account password. How should the FTP Adapter Connection authenticate?',
    questionEs:'El servidor SFTP de un socio acepta nombre de usuario y clave SSH, pero no contraseña de cuenta. ¿Cómo debe autenticarse la Connection del FTP Adapter?',
    options:[
      ['FTP Server Access Policy with an empty password; upload the key as a Trust certificate','The password policy is not the documented key-only SFTP policy, and TLS Trust is not the SSH private key field.','FTP Server Access Policy con contraseña vacía; subir la clave como certificado Trust','La política de contraseña no es la opción SFTP de solo clave; Trust no es el campo de clave privada SSH.'],
      ['FTP Multi Level Authentication with a fictitious password','That policy combines independent credentials, including a password, which this server does not accept.','FTP Multi Level Authentication con una contraseña ficticia','Esa política combina credenciales independientes, incluida una contraseña que este servidor no acepta.'],
      ['Basic Authentication on a REST Adapter pointed at the SFTP URL','Basic Authentication on REST does not implement the SFTP protocol or its SSH key handshake.','Basic Authentication en un REST Adapter apuntado al URL SFTP','Basic Authentication en REST no implementa SFTP ni su intercambio de claves SSH.'],
      ['FTP Public Key Authentication with the user name and private-key file, plus passphrase if needed','Oracle documents this policy specifically for SFTP key authentication without an account password.','FTP Public Key Authentication con usuario y archivo de clave privada, más frase de paso si procede','Oracle documenta esta política para SFTP con clave sin contraseña de cuenta.']
    ], correct:['D'], reference:'FTP Adapter Create a Connection: Configure Connection Security, FTP Public Key Authentication', supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/ftp-adapter/create-connection.html', verification:'verified'
  },
  {
    replaces:'gen-connections-09-01', categoryId:'connections', topic:'REST custom security headers', type:'expert', difficulty:'expert',
    question:'A REST invoke must send client_id and client_secret as two proprietary HTTP headers to a gateway. The same credentials are used by several integrations. Which connection-level design matches Oracle’s documented capability?',
    questionEs:'Un REST Invoke debe enviar client_id y client_secret como dos encabezados HTTP propios de un gateway. Varias Integrations usan esas credenciales. ¿Qué diseño a nivel de Connection corresponde a la función documentada por Oracle?',
    options:[
      ['Use OAuth Authorization Code even though the gateway has no OAuth authorization endpoint','Authorization Code needs an OAuth authorization flow; it does not by itself create these proprietary headers.','Usar OAuth Authorization Code aunque el gateway no tenga endpoint de autorización OAuth','Authorization Code requiere un flujo OAuth; por sí mismo no crea esos encabezados propios.'],
      ['Put the secret in a Business Identifier so every Invoke can read it','Business Identifiers are tracking values, not a security-header store; this would also expose a secret in tracking.','Poner el secreto en un Business Identifier para que cada Invoke lo lea','Los Business Identifiers son valores de seguimiento, no un almacén de encabezados secretos; además expondría el secreto.'],
      ['Select Multi Key Authentication on the REST invoke Connection and map each required header to a security-header field','Oracle documents this policy for custom security headers set once on a REST invoke Connection and sent at runtime.','Seleccionar Multi Key Authentication en la Connection REST Invoke y vincular cada encabezado al campo de seguridad correspondiente','Oracle documenta esta política para encabezados de seguridad personalizados configurados en la Connection y enviados en ejecución.'],
      ['Add literal secrets to every mapper expression instead of configuring Connection security','Mapper expressions are not the documented connection-level security fields and would replicate sensitive values.','Añadir secretos literales a cada expresión del mapper en vez de configurar la seguridad de Connection','Las expresiones del mapper no son los campos de seguridad documentados y duplicarían valores sensibles.']
    ], correct:['C'], reference:'Specify Custom Header Security Values to Authenticate with Endpoint Applications: Multi Key Authentication', supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/use-custom-header-based-authentication.html', verification:'verified'
  },
  {
    replaces:'gen-started-08-01', categoryId:'started', topic:'Integration version activation', type:'scenario', difficulty:'professional',
    question:'A team needs to run its current integration version 1.00.0000 alongside a redesigned version. Which versioning choice preserves the ability to keep both active?',
    questionEs:'Un equipo necesita ejecutar la versión actual 1.00.0000 de una Integration junto con una versión rediseñada. ¿Qué elección de versión permite mantener ambas activas?',
    options:[
      ['Create 1.10.0000 and activate it; a minor version keeps 1.00.0000 active','Oracle documents that activating the new minor version deactivates 1.00.0000.','Crear y activar 1.10.0000; una versión menor mantiene activa 1.00.0000','Oracle documenta que activar la nueva versión menor desactiva 1.00.0000.'],
      ['Create 2.00.0000 as a new major version and activate it after testing','Oracle documents a new major version as the way to allow both versions to remain active.','Crear 2.00.0000 como nueva versión mayor y activarla después de probarla','Oracle documenta que una nueva versión mayor permite mantener activas ambas versiones.'],
      ['Keep the same 1.00.0000 version number for the new draft','Oracle rejects a new version that retains the existing version number.','Conservar el mismo número 1.00.0000 para el nuevo borrador','Oracle rechaza una versión nueva que conserva el número existente.'],
      ['Change only the Connection display name and skip integration versioning','Renaming a Connection does not create an independently active integration version.','Cambiar solo el nombre visible de la Connection y omitir el versionado','Renombrar una Connection no crea otra versión de Integration que pueda activarse por separado.']
    ],correct:['B'],reference:'Create a Draft Version of an Integration: version activation behavior',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/create-draft-integration.html',verification:'verified'
  },
  {
    replaces:'gen-scheduled-08-01', categoryId:'scheduled', topic:'Exact iCal minute', type:'scenario', difficulty:'professional',
    question:'An iCal schedule must run at exactly 14:00 and 15:00 each day. The expression already has BYHOUR=14,15. Which extra component removes ambiguity about the minute?',
    questionEs:'Un schedule iCal debe ejecutarse exactamente a las 14:00 y 15:00 cada día. La expresión ya contiene BYHOUR=14,15. ¿Qué componente adicional elimina la ambigüedad del minuto?',
    options:[
      ['BYMINUTE=0','Oracle recommends explicitly setting BYMINUTE=0 for exact hourly times; otherwise the start time can determine the minute.','BYMINUTE=0','Oracle recomienda indicar BYMINUTE=0 para horas exactas; de lo contrario, la hora de inicio puede determinar el minuto.'],
      ['BYDAY=MO,FR','Weekday filtering does not set the minute to zero and would change which days run.','BYDAY=MO,FR','Filtrar días de la semana no fija el minuto en cero y cambiaría los días de ejecución.'],
      ['INTERVAL=15','An interval changes recurrence spacing; it does not force both runs to the top of the hour.','INTERVAL=15','Un intervalo cambia la separación entre ejecuciones; no fija ambas al inicio de cada hora.'],
      ['COUNT=0','A count is not the minute selector and would not express the required daily run times.','COUNT=0','Un contador no selecciona el minuto ni expresa las horas diarias requeridas.']
    ],correct:['A'],reference:'Define the Integration Schedule: Understand How to Use iCal Expressions',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/define-integration-schedule.html',verification:'verified'
  },
  {
    replaces:'gen-monitoring-08-01', categoryId:'monitoring', topic:'Synchronous failure recovery', type:'scenario', difficulty:'professional',
    question:'An operator sees a failed synchronous REST request and wants to use Resubmit on that instance. What should the recovery plan say?',
    questionEs:'Un operador ve una solicitud REST síncrona fallida y quiere usar Resubmit sobre esa instancia. ¿Qué debe indicar el plan de recuperación?',
    options:[
      ['Resubmit it automatically; all failed synchronous instances are recoverable','Oracle states that synchronous flows cannot be resubmitted.','Ejecutar Resubmit automáticamente; todas las instancias síncronas fallidas son recuperables','Oracle indica que los flujos síncronos no admiten Resubmit.'],
      ['First discard it, then Resubmit the discarded instance','Discard is not a path to Resubmit and a discarded message cannot later be resubmitted.','Primero descartarla y después ejecutar Resubmit sobre la instancia descartada','Descartar no habilita Resubmit; un mensaje descartado no puede reenviarse así.'],
      ['Diagnose the error and have the caller issue a new request if retry is safe','A synchronous instance cannot be resubmitted; a fresh request requires a separate retry decision and duplicate-effect check.','Diagnosticar el error y pedir al cliente una solicitud nueva si es seguro repetirla','Una instancia síncrona no admite Resubmit; una solicitud nueva exige evaluar el reintento y los posibles efectos duplicados.'],
      ['Change a Business Identifier to make the failed request asynchronous','A tracking field does not change the integration interaction style or recovery rule.','Cambiar un Business Identifier para volver asíncrona la solicitud fallida','Un campo de seguimiento no cambia el estilo de interacción ni la regla de recuperación.']
    ],correct:['C'],reference:'Resubmit Failed Messages: synchronous flows cannot be resubmitted',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/resubmit-failed-messages.html',verification:'verified'
  },
  {
    replaces:'gen-ai-08-01', categoryId:'ai', topic:'Document table extraction', type:'scenario', difficulty:'professional',
    question:'An English PDF receipt contains an itemized table. Downstream logic needs the row and column relationships, not just a flat transcript. Which Document Understanding feature should be configured?',
    questionEs:'Un recibo PDF en inglés contiene una tabla de artículos. La lógica posterior necesita la relación entre filas y columnas, no solo texto plano. ¿Qué función de Document Understanding debe configurarse?',
    options:[
      ['Text extraction alone','Text extraction returns words and lines, but does not by itself provide the table cell relationships requested.','Solo Text extraction','Text extraction devuelve palabras y líneas, pero por sí sola no aporta las relaciones entre celdas solicitadas.'],
      ['Document classification alone','Classification identifies a document type; it does not extract the receipt table structure.','Solo Document classification','Classification identifica el tipo de documento; no extrae la estructura de la tabla del recibo.'],
      ['OCI Speech transcription','Speech transcribes audio, while the source here is a PDF table.','Transcripción con OCI Speech','Speech transcribe audio, mientras que la fuente aquí es una tabla en PDF.'],
      ['Table extraction','Oracle documents table extraction for receipts, returning rows, columns, and cell content; the pretrained feature is English-only.','Table extraction','Oracle documenta la extracción de tablas en recibos y devuelve filas, columnas y contenido de celdas; la función preentrenada admite inglés.']
    ],correct:['D'],reference:'Document Understanding: Table Extraction',supplementalUrl:'https://docs.oracle.com/en-us/iaas/Content/document-understanding/using/pretrained_doc_table_extraction.htm',verification:'verified'
  },
  {
    replaces:'gen-started-09-01', categoryId:'started', topic:'System event subscription', type:'expert', difficulty:'expert',
    question:'A team wants an integration to react to an Oracle Integration system event. Which design constraint applies?',
    questionEs:'Un equipo quiere que una Integration reaccione a un evento del sistema de Oracle Integration. ¿Qué restricción de diseño se aplica?',
    options:[
      ['Create and publish the system event yourself before subscribing','Oracle creates system events; customers subscribe to supported ones rather than creating or publishing them.','Crear y publicar el evento del sistema antes de suscribirse','Oracle crea los eventos del sistema; se permite suscribirse a los admitidos, no crearlos ni publicarlos.'],
      ['Subscribe within a Project to a supported system event','Oracle documents system-event subscriptions only in Projects; the system supplies the event.','Suscribirse dentro de un Project a un evento del sistema admitido','Oracle documenta las suscripciones a eventos del sistema solo en Projects; el sistema proporciona el evento.'],
      ['Use a REST Adapter Trigger as the event subscription','An event integration has a Subscribe to event trigger; it does not use an adapter connection as its trigger.','Usar un REST Adapter Trigger como suscripción al evento','Una Event Integration tiene un trigger Subscribe to event; no usa una Connection de adaptador como trigger.'],
      ['Set a Schedule recurrence; every schedule tick is a system event','A scheduled start is not the documented subscription to a system event.','Definir una recurrencia Schedule; cada ejecución es un evento del sistema','Un inicio programado no equivale a la suscripción documentada a un evento del sistema.']
    ],correct:['B'],reference:'Subscribe to Events in an Integration: System events',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/subscribe-event-integration.html',verification:'verified'
  },
  {
    replaces:'gen-connections-03-01', categoryId:'connections', topic:'Private VCN route', type:'application', difficulty:'professional',
    question:'An OIC invoke must reach a service in one private OCI VCN subnet without installing a VM on the customer premises. Which documented network route fits?',
    questionEs:'Un Invoke de OIC debe acceder a un servicio en una subred privada de una VCN de OCI sin instalar una VM en las instalaciones del cliente. ¿Qué ruta de red documentada corresponde?',
    options:[
      ['Private endpoint, subject to supported adapter and network setup','Oracle describes a private endpoint for resources in a VCN subnet; adapter support and VCN prerequisites still matter.','Private endpoint, sujeto a la compatibilidad del adaptador y la configuración de red','Oracle describe private endpoint para recursos en una subred VCN; importan la compatibilidad del adaptador y los requisitos de la VCN.'],
      ['Connectivity agent installed on a customer-premises VM','The agent route is designed for on-premises resources and requires a maintained host; the scenario explicitly avoids that setup.','Connectivity agent instalado en una VM local del cliente','La ruta con agente sirve para recursos locales y requiere mantener una VM; el caso evita expresamente esa instalación.'],
      ['A Business Identifier containing the subnet address','A tracking identifier cannot establish network connectivity or route adapter traffic.','Un Business Identifier con la dirección de la subred','Un identificador de seguimiento no establece conectividad de red ni enruta el tráfico del adaptador.'],
      ['An inbound REST Trigger in place of the outbound Invoke','An inbound trigger receives requests; it is not the private outbound route to the target service.','Un REST Trigger entrante en lugar del Invoke saliente','Un trigger entrante recibe solicitudes; no es la ruta privada saliente hacia el servicio destino.']
    ],correct:['A'],reference:'Private Endpoint vs. Connectivity Agent: Usage and adapter support',supplementalUrl:'https://docs.oracle.com/en-us/iaas/application-integration/doc/private-endpoint-vs-connectivity-agent.html',verification:'verified'
  },
  {
    replaces:'gen-orchestration-08-01', categoryId:'orchestration', topic:'Agent invoke fault handling', type:'scenario', difficulty:'professional',
    question:'A Scope contains an Invoke that uses a connectivity agent. The designer plans to catch a named fault from that Invoke in the Scope. What does Oracle require?',
    questionEs:'Un Scope contiene un Invoke que usa connectivity agent. El diseñador planea capturar un fallo con nombre de ese Invoke dentro del Scope. ¿Qué exige Oracle?',
    options:[
      ['Use the named fault handler; agent-based Invokes always process it','Oracle specifically says named fault handlers are not processed for connectivity-agent-based Invokes.','Usar el manejador de fallos con nombre; los Invokes con agente siempre lo procesan','Oracle indica expresamente que no se procesan los manejadores con nombre para Invokes basados en connectivity agent.'],
      ['Remove the Scope because no local fault handling is possible','A Scope still provides a default fault handler; the limitation concerns named handlers for agent-based Invokes.','Eliminar el Scope porque no es posible manejar fallos localmente','Scope conserva un manejador por defecto; la limitación afecta a los manejadores con nombre de Invokes con agente.'],
      ['Handle the agent-based Invoke fault in the Scope default fault handler','Oracle documents that all fault handling for connectivity-agent-based Invokes must be done in the default handler.','Manejar el fallo del Invoke con agente en el manejador por defecto del Scope','Oracle documenta que todo manejo de fallos de Invokes con connectivity agent debe hacerse en el manejador por defecto.'],
      ['Convert the named fault into a Business Identifier','Business Identifiers support tracking and do not replace the Scope fault handler.','Convertir el fallo con nombre en Business Identifier','Business Identifiers permiten seguimiento; no reemplazan el manejador de fallos del Scope.']
    ],correct:['C'],reference:'Manage a Group of Actions and Fault Handlers with a Scope Action: connectivity-agent note',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/manage-group-actions-scope-action.html',verification:'verified'
  },
  {
    replaces:'gen-ai-03-01', categoryId:'ai', topic:'OCI Language PII masking', type:'application', difficulty:'professional',
    question:'A support flow receives free-text notes that may contain phone numbers and bank accounts. It must identify and mask that private data before passing notes downstream. Which OCI Language action fits?',
    questionEs:'Un flujo de soporte recibe notas de texto libre que pueden contener teléfonos y cuentas bancarias. Debe identificar y enmascarar esos datos privados antes de enviarlas al siguiente sistema. ¿Qué acción de OCI Language corresponde?',
    options:[
      ['Sentiment analysis','Sentiment analysis measures positive, negative, neutral, or mixed tone; it does not perform PII masking.','Sentiment analysis','Sentiment analysis evalúa el tono positivo, negativo, neutro o mixto; no enmascara datos personales.'],
      ['Text translation','Translation changes the language of text; it is not the documented PII detection and masking action.','Text translation','Translation cambia el idioma del texto; no es la acción documentada para detectar y enmascarar PII.'],
      ['Key phrase extraction','Key phrase extraction finds important phrases; it does not provide the requested PII masking controls.','Key phrase extraction','Key phrase extraction identifica frases importantes; no proporciona los controles de enmascaramiento de PII solicitados.'],
      ['PII/PHI detection with configured masking','Oracle documents PII/PHI identification and configurable masking for entities including bank account and telephone number.','Detección de PII/PHI con enmascaramiento configurado','Oracle documenta la identificación de PII/PHI y el enmascaramiento configurable de entidades como cuentas bancarias y teléfonos.']
    ],correct:['D'],reference:'Perform Text Analysis and Translation with a Language Action: PII/PHI',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/perform-text-analysis-translation-language-action.html',verification:'verified'
  },
  {
    replaces:'gen-connections-05-01', categoryId:'connections', topic:'Rotating an mTLS identity certificate', type:'application', difficulty:'professional',
    question:'An outbound integration uses an Identity certificate for two-way SSL. The certificate is expiring and the administrator opens its Update action. What should the runbook say?',
    questionEs:'Una Integration saliente usa un certificado Identity para SSL bidireccional. Está por vencer y el administrador abre la acción Update. ¿Qué debe indicar el procedimiento?',
    options:[
      ['Update the Identity certificate in place by changing only its alias','Oracle states that an Identity certificate cannot be updated in place.','Actualizar Identity en el mismo registro cambiando solo el alias','Oracle indica que un certificado Identity no puede actualizarse en el mismo registro.'],
      ['Upload the server CA as Trust and assume it replaces client identity','Trust establishes confidence in the remote certificate; it does not replace the client Identity certificate required for two-way SSL.','Subir la CA del servidor como Trust y asumir que reemplaza la identidad del cliente','Trust establece confianza en el certificado remoto; no reemplaza Identity cuando se exige SSL bidireccional.'],
      ['Plan to delete the old Identity certificate and upload the replacement keystore, then validate the connection','Oracle documents delete-and-reupload for Identity certificates, which use a JKS keystore in the X.509 SSL transport category.','Planear eliminar el certificado Identity anterior y subir el nuevo keystore; después validar la Connection','Oracle documenta eliminar y volver a subir Identity mediante un keystore JKS en la categoría X.509 SSL transport.'],
      ['Convert the Identity certificate to a PGP public key','PGP file encryption is a different certificate category and does not provide the TLS client identity.','Convertir Identity en una clave pública PGP','El cifrado de archivos PGP es otra categoría y no aporta la identidad TLS del cliente.']
    ],correct:['C'],reference:'Manage Security Certificates: X.509 Identity and Update or Delete a Certificate',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/manage-security-certificates.html',verification:'verified'
  },
  {
    replaces:'gen-orchestration-03-01', categoryId:'orchestration', topic:'Variable visibility outside Scope', type:'application', difficulty:'professional',
    question:'A string variable is created inside a Scope, but a later action outside that Scope must use its final value. Which documented design addresses the visibility boundary?',
    questionEs:'Una variable de cadena se crea dentro de un Scope, pero una acción posterior fuera de él debe usar su valor final. ¿Qué diseño documentado resuelve el límite de visibilidad?',
    options:[
      ['Reference the local variable directly from outside; Scope never limits visibility','Oracle says local variables created inside a Scope are not directly accessible outside it.','Referenciar directamente la variable local desde fuera; Scope nunca limita la visibilidad','Oracle indica que las variables locales creadas dentro de Scope no son accesibles directamente desde fuera.'],
      ['Create a global variable with Assign above the Scope and copy the local value into it before leaving','Oracle documents this pattern for exposing a local Scope or loop value to later actions.','Crear una variable global con Assign encima del Scope y copiarle el valor local antes de salir','Oracle documenta este patrón para hacer disponible un valor local de Scope o de un bucle a acciones posteriores.'],
      ['Replace Assign with a Trust certificate','A certificate manages security material; it has no role in variable scope or value assignment.','Reemplazar Assign por un certificado Trust','Un certificado gestiona material de seguridad; no controla el alcance ni la asignación de variables.'],
      ['Delete the Scope fault handler so the variable becomes global','Fault-handler configuration does not change lexical visibility of a variable created inside the Scope.','Eliminar el manejador de fallos de Scope para volver global la variable','La configuración del manejador de fallos no cambia la visibilidad de una variable creada dentro del Scope.']
    ],correct:['B'],reference:'Assign Values to Scalar Variables in an Assign Action: local scope and loop variables',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/assign-values-scalar-variables-assign-action.html',verification:'verified'
  },
  {
    replaces:'gen-scheduled-03-01', categoryId:'scheduled', topic:'Persisted schedule cursor', type:'application', difficulty:'professional',
    question:'A scheduled batch stores its last processed offset in a schedule parameter. At the end of a run, an Assign action updates that parameter. What happens on the next scheduled run?',
    questionEs:'Un proceso por lotes guarda el último desplazamiento procesado en un schedule parameter. Al final de una ejecución, Assign actualiza el parámetro. ¿Qué ocurre en la siguiente ejecución programada?',
    options:[
      ['The parameter always resets to its original design-time default','Oracle says the updated value is saved as the current value for the next run.','El parámetro siempre vuelve al valor predeterminado de diseño','Oracle indica que el valor actualizado se guarda como valor actual para la siguiente ejecución.'],
      ['The value persists as the current parameter value for the next run','Oracle documents schedule parameters as cross-run state; an Assign update becomes the next run’s current value.','El valor persiste como valor actual del parámetro para la siguiente ejecución','Oracle documenta schedule parameters como estado entre ejecuciones; la actualización con Assign pasa a ser el valor actual siguiente.'],
      ['The parameter is converted into a Connection password','A schedule parameter used as a batch cursor is not a security credential or Connection property.','El parámetro se convierte en una contraseña de Connection','Un schedule parameter usado como cursor de lote no es una credencial ni una propiedad de Connection.'],
      ['The integration becomes a synchronous application integration','Updating a parameter does not change the integration style or make it an inbound request-response flow.','La Integration se convierte en una Application Integration síncrona','Actualizar un parámetro no cambia el estilo ni crea un flujo entrante de solicitud-respuesta.']
    ],correct:['B'],reference:'Create and Update Parameters in Schedule Integrations: Update Parameters',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/create-update-parameters-scheduled-integrations.html',verification:'verified'
  },
  {
    replaces:'gen-ai-04-01', categoryId:'ai', topic:'OCI Language detection result', type:'application', difficulty:'professional',
    question:'An integration receives customer comments in an unknown language and must route them by detected language. Which OCI Language action provides both the detected language and a confidence score?',
    questionEs:'Una Integration recibe comentarios de clientes en un idioma desconocido y debe enrutarlos según el idioma detectado. ¿Qué acción de OCI Language devuelve el idioma y un nivel de confianza?',
    options:[
      ['Text translation','Translation produces text in a target language; the required first decision is to detect the input language with confidence.','Text translation','Translation produce texto en un idioma destino; primero se requiere detectar el idioma de entrada con un nivel de confianza.'],
      ['Sentiment analysis','Sentiment classifies tone, not the language identity needed for routing.','Sentiment analysis','Sentiment clasifica el tono, no el idioma necesario para enrutar.'],
      ['Language detection','Oracle documents that Language detection returns the language and its confidence score from zero to one.','Language detection','Oracle documenta que Language detection devuelve el idioma y su puntuación de confianza entre cero y uno.'],
      ['Named entity recognition','Entity recognition finds names, places, and similar entities; it is not the action that reports detected language.','Named entity recognition','Entity recognition identifica nombres, lugares y entidades similares; no es la acción que informa el idioma detectado.']
    ],correct:['C'],reference:'Perform Text Analysis and Translation with a Language Action: Language detection',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/perform-text-analysis-translation-language-action.html',verification:'verified'
  },
  {
    replaces:'gen-connections-10-01', categoryId:'connections', topic:'Dynamic REST endpoint restriction', type:'expert', difficulty:'expert',
    question:'A REST Invoke currently connects through an OIC private endpoint. A developer proposes mapping AbsoluteEndpointUri at runtime to switch among target hosts. What should the design review conclude?',
    questionEs:'Un REST Invoke se conecta mediante un private endpoint de OIC. Un desarrollador propone mapear AbsoluteEndpointUri en ejecución para alternar entre hosts destino. ¿Qué debe concluir la revisión del diseño?',
    options:[
      ['This is supported for any private endpoint if the host names share a domain','Oracle explicitly excludes dynamic REST endpoints when the connection uses a private endpoint.','Se admite en cualquier private endpoint si los hosts comparten dominio','Oracle excluye expresamente los endpoints REST dinámicos cuando la conexión usa un private endpoint.'],
      ['Map a Business Identifier instead; it changes the target host at runtime','Business Identifiers are tracking fields, not REST connectivity overrides.','Mapear un Business Identifier; cambiará el host destino en ejecución','Business Identifiers son campos de seguimiento, no controles para cambiar la conectividad REST.'],
      ['Do not use this dynamic-endpoint feature with a private endpoint; redesign the routing using supported connections','The REST Adapter documentation states that dynamic REST endpoints cannot be used through a private endpoint.','No usar esta función de endpoint dinámico con private endpoint; rediseñar la ruta con Connections admitidas','La documentación del REST Adapter indica que los endpoints REST dinámicos no pueden usarse mediante private endpoint.'],
      ['Change the HTTP verb in ConnectivityProperties instead of the URI','The dynamic feature also does not permit changing the configured HTTP verb; this does not solve the private-endpoint restriction.','Cambiar el verbo HTTP en ConnectivityProperties en vez del URI','La función tampoco permite cambiar el verbo HTTP configurado y no resuelve la restricción del private endpoint.']
    ],correct:['C'],reference:'REST Adapter: Support for Dynamic REST Endpoints, private-endpoint restriction',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/support-dynamic-rest-endpoints.html',verification:'verified'
  },
  {
    replaces:'gen-orchestration-09-01', categoryId:'orchestration', topic:'Parallel fault-handling boundary', type:'expert', difficulty:'expert',
    question:'Two independent Invokes run in separate Parallel branches. The designer wants an independent fault handler inside each branch. Which statement matches the documented limitation?',
    questionEs:'Dos Invokes independientes se ejecutan en ramas Parallel separadas. El diseñador quiere un manejador de fallos independiente dentro de cada rama. ¿Qué afirmación coincide con la limitación documentada?',
    options:[
      ['Each branch supports its own independent fault handler without restriction','Oracle explicitly says independent branch-specific fault handling is not supported.','Cada rama admite sin restricciones su propio manejador de fallos independiente','Oracle indica expresamente que no se admite el manejo independiente de fallos específico de cada rama.'],
      ['Parallel branches cannot contain Invoke Connections','The supported actions list includes Invoke Connections in Parallel branches.','Las ramas Parallel no pueden contener Invoke Connections','La lista de acciones permitidas incluye Invoke Connections en las ramas Parallel.'],
      ['Adding a sixth branch enables branch-specific handlers','Oracle limits one Parallel action to five branches, and more branches would not alter fault-handler support.','Agregar una sexta rama habilita manejadores específicos','Oracle limita una acción Parallel a cinco ramas; añadir ramas no cambiaría el soporte de fallos.'],
      ['Independent branch-specific handlers are unsupported; plan integration-level handling such as a Global Fault Handler','Oracle lists this restriction and identifies the Global Fault Handler as an integration-level option.','No se admiten manejadores independientes por rama; planear manejo a nivel de Integration, como Global Fault Handler','Oracle enumera esa restricción y señala Global Fault Handler como alternativa a nivel de Integration.']
    ],correct:['D'],reference:'Process Tasks in Parallel with a Parallel Action: Guidelines and Restrictions',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/process-tasks-parallel-parallel-action.html',verification:'verified'
  },
  {
    replaces:'gen-monitoring-04-01', categoryId:'monitoring', topic:'HTTP 403 triage', type:'application', difficulty:'professional',
    question:'A REST Invoke reaches the target API and receives HTTP 403 Forbidden. The target confirms the request was authenticated. Which check should support prioritize?',
    questionEs:'Un REST Invoke llega a la API destino y recibe HTTP 403 Forbidden. El destino confirma que la solicitud fue autenticada. ¿Qué comprobación debe priorizar soporte?',
    options:[
      ['Check whether the authenticated principal has permission for that API operation','Oracle troubleshooting says a 403 usually implies insufficient API permissions; authentication alone does not establish authorization.','Comprobar si la identidad autenticada tiene permiso para esa operación de API','La guía de Oracle indica que 403 suele implicar falta de permisos de API; autenticarse no equivale a estar autorizado.'],
      ['Change an unrelated Map expression before checking permissions','A Map change does not address the target authorization decision indicated by this response.','Cambiar una expresión Map no relacionada antes de revisar permisos','Un cambio de Map no resuelve la decisión de autorización del destino indicada por la respuesta.'],
      ['Treat 403 as evidence that the target did not receive the request','The target returned the 403 response, so network reachability is not the immediate missing step.','Interpretar 403 como prueba de que el destino no recibió la solicitud','El destino devolvió 403, por lo que la conectividad no es la carencia inmediata.'],
      ['Blindly retry the same request indefinitely','Repeated retries without changing authorization are unlikely to resolve a permission denial and can add load.','Reintentar ciegamente la misma solicitud sin límite','Reintentar sin corregir la autorización difícilmente resuelve la denegación de permisos y añade carga.']
    ],correct:['A'],reference:'Troubleshoot Integration Runtime: HTTP 403 and API permissions',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/troubleshoot-integration-runtime.html',verification:'verified'
  },
  {
    replaces:'gen-ai-05-01', categoryId:'ai', topic:'Semantic-search embeddings', type:'application', difficulty:'professional',
    question:'A catalog search must compare short product descriptions by meaning rather than exact keywords. It needs numeric representations for similarity calculations, not prose answers. Which OCI Generative AI action fits?',
    questionEs:'Una búsqueda de catálogo debe comparar descripciones breves de productos por significado y no por palabras exactas. Necesita representaciones numéricas para calcular similitud, no respuestas en prosa. ¿Qué acción de OCI Generative AI corresponde?',
    options:[
      ['Chat','Chat produces a text response to a prompt; the case requires numeric representations for semantic comparison.','Chat','Chat produce texto como respuesta a un prompt; el caso requiere representaciones numéricas para comparación semántica.'],
      ['Rerank','Rerank scores and reorders supplied documents against a query; it is not the action that creates text embeddings.','Rerank','Rerank puntúa y reordena documentos según una consulta; no es la acción que crea embeddings de texto.'],
      ['EmbedText','Oracle documents EmbedText as producing numeric text embeddings useful for semantic similarity and search.','EmbedText','Oracle documenta que EmbedText produce embeddings numéricos útiles para similitud y búsqueda semántica.'],
      ['Document classification','Classification labels document types; it does not provide the requested numeric text vectors for similarity calculations.','Document classification','Classification etiqueta tipos de documentos; no proporciona los vectores numéricos requeridos para calcular similitud.']
    ],correct:['C'],reference:'Generate, Embed, or Rerank Text with a Generative AI Action: EmbedText',supplementalUrl:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/generate-embed-or-rerank-text-generative-ai-action.html',verification:'verified'
  }
].map(item=>({
  id:item.replaces,categoryId:item.categoryId,topic:item.topic,question:item.question,questionEs:item.questionEs,
  options:item.options.map(([text,why,textEs,whyEs],i)=>({id:String.fromCharCode(65+i),text,textEs:textEs||null,correct:item.correct.includes(String.fromCharCode(65+i)),why,whyEs:whyEs||null})),
  correct:item.correct,multi:false,difficulty:item.difficulty||(/-(09|10)-/.test(item.replaces)?'expert':'professional'),type:item.type||(/-(09|10)-/.test(item.replaces)?'expert':'scenario'),
  source:'Original editorial practice',sourceType:'original',verification:item.verification||'editorial draft',
  reference:{title:item.referenceTitle||'Oracle Cloud Using Integrations in Oracle Integration 3',edition:item.referenceEdition||'G36915-54, October 2026',section:item.reference,pdfPage:item.manualPdfPage||null,url:item.manualPdfPage?null:item.supplementalUrl||null,supplementalUrl:item.supplementalUrl||null,status:item.verification==='verified'?'item-level verified':'section pointer; item-level review pending'},
  explanation:item.options.find((_,i)=>item.correct.includes(String.fromCharCode(65+i)))?.[1],
  createdFor:'OIC Certification Academy 2026'
}));

/* Individually translated option text and feedback for the first editorial batch. */
const OIC_EDITORIAL_SPANISH = {
  'gen-started-06-03':[
    ['Una solicitud síncrona que mantenga esperando a la tienda hasta terminar la preparación','Esto acopla un proceso largo al tiempo disponible para responder al cliente.'],
    ['Un diseño asíncrono que acuse recibo y permita seguir la preparación después','El cliente recibe un acuse oportuno mientras la preparación continúa y se monitorea.'],
    ['Un Connection test que confirme que el pedido ya se preparó','Un Connection test comprueba la configuración, no la finalización de una transacción comercial.'],
    ['Una Integration solo de mapeo y sin seguimiento operativo','El mapeo por sí solo no define el patrón de interacción ni aporta evidencia para la recuperación.']
  ],
  'gen-started-07-03':[
    ['Un Project para los recursos de integración relacionados','Projects organizan recursos relacionados y ofrecen flujos de diseño, despliegue y observación.'],
    ['Un único Trust Certificate como espacio de trabajo','Un certificado aporta material de confianza; no agrupa diseños de Integration.'],
    ['Una Invoke Connection en lugar de cada Integration','Invoke llama a un destino; no contiene la orquestación del equipo.'],
    ['Un Business Identifier como contenedor de despliegue','Business Identifier sirve para seguimiento, no para organizar recursos.']
  ],
  'gen-connections-06-03':[
    ['Authorization Code, porque todo token exige un usuario en el navegador','Authorization Code se basa en la autorización y redirección de un usuario.'],
    ['Client Credentials, si el proveedor de API lo admite','Client Credentials es un flujo entre servicios sin autorización interactiva de un usuario.'],
    ['Un Business Identifier, porque es un access token','Business Identifiers son campos de seguimiento, no flujos OAuth.'],
    ['Solo un TLS Trust Certificate, porque concede autorización de API','La confianza TLS no sustituye la política de autorización OAuth de la API.']
  ],
  'gen-connections-07-03':[
    ['Client Credentials sin contexto de usuario','Client Credentials representa a la aplicación cliente, no al usuario que autoriza.'],
    ['Authorization Code con el flujo de redirección del proveedor','Authorization Code incorpora autorización explícita del usuario e intercambio mediante redirección.'],
    ['Autenticación SFTP con contraseña','Las credenciales SFTP no expresan la autorización OAuth delegada por el usuario.'],
    ['Un schedule parameter que contenga la contraseña del usuario','Un schedule parameter no es un flujo OAuth ni un sustituto seguro del consentimiento.']
  ],
  'gen-orchestration-06-03':[
    ['¿Puede cambiar la condición del bucle y existe un límite de terminación?','While necesita una condición que cambie o un límite explícito para evitar una ejecución interminable.'],
    ['¿Hará Parallel que cada consulta termine secuencialmente?','Parallel sirve para ramas independientes concurrentes, no para controlar la terminación.'],
    ['¿Puede un certificado volver falsa la condición automáticamente?','Los certificados aportan material de seguridad, no administran el estado del bucle.'],
    ['¿Debe omitirse el manejo de fallos durante las consultas?','La consulta repetida también necesita tratamiento de fallos y tiempos de espera.']
  ],
  'gen-orchestration-07-03':[
    ['Ramas Parallel para los Invoke independientes, con comparación de resultados y Global Fault Handler','La documentación usa Parallel para llamadas independientes y permite capturar fallos a nivel de Integration.'],
    ['Un For Each sobre un solo registro de cliente','For Each repite elementos del payload; no proporciona concurrencia entre servicios independientes.'],
    ['Un único Assign en lugar de ambas llamadas','Assign establece variables; no obtiene las respuestas de impuestos e inventario.'],
    ['Dos Invoke dependientes que asumen que el segundo necesita la salida del primero','El caso no presenta esa dependencia y la serialización sería innecesaria.']
  ],
  'gen-scheduled-06-03':[
    ['Un REST Trigger que espere una solicitud HTTP del proveedor','El caso describe un archivo y una cadencia nocturna, no un cliente HTTP.'],
    ['Una Scheduled Integration con FTP Adapter Connection y procesamiento Stage File','El schedule puede iniciar la descarga con FTP Adapter; Stage File procesa el archivo sin cliente entrante.'],
    ['Un Business Identifier como protocolo de transferencia de archivos','Un campo de seguimiento no puede recuperar ni analizar un archivo.'],
    ['Una sesión de Map Editor que se ejecute automáticamente a medianoche','Map Editor define mapeos; no es un planificador.']
  ],
  'gen-scheduled-07-03':[
    ['Distribuir los horarios de inicio y evitar trabajos programados de larga duración','Oracle recomienda evitar grupos de schedules simultáneos y ejecuciones largas que ocupan recursos del planificador.'],
    ['Mover todos los schedules al mismo minuto','Esto aumenta la contención que retrasa los inicios programados.'],
    ['Aumentar la frecuencia de todos los schedules a una vez por minuto','Las ejecuciones más frecuentes pueden aumentar la acumulación de trabajos.'],
    ['Desactivar Observability para liberar capacidad del planificador','La documentación no identifica el monitoreo como causa ni solución de esa contención.']
  ],
  'gen-monitoring-06-03':[
    ['Reintentos paralelos ilimitados e inmediatos','Los reintentos sin límite pueden agravar la interrupción y duplicar el pago.'],
    ['Evidencia de la transacción en el destino y una estrategia de reintento idempotente','Un 503 no confirma el resultado de la transacción; hacen falta conciliación e idempotencia.'],
    ['Cambiar el Business Identifier por un valor aleatorio','Un campo de seguimiento no resuelve la disponibilidad ni el estado de la transacción en el destino.'],
    ['Suponer que el pago falló porque la respuesta HTTP fue 503','La respuesta por sí sola no demuestra si el destino confirmó la operación.']
  ],
  'gen-monitoring-07-03':[
    ['Activar el registro irrestricto permanentemente para acelerar investigaciones futuras','Registrar todo permanentemente puede exponer datos sensibles y vulnerar controles de retención.'],
    ['Usar tracing temporal solo cuando esté permitido, con controles de acceso y retención','Oracle advierte que el tracing de payload afecta el rendimiento y puede almacenar datos sensibles contra las reglas de retención.'],
    ['Eliminar Business Identifiers para que no se encuentre ninguna transacción','Quitar el seguimiento dificulta el soporte y no controla por sí solo el registro de payload.'],
    ['Poner credenciales de servicio en el payload para correlacionar registros','Las credenciales no deben colocarse en payloads comerciales ni en registros.']
  ],
  'gen-ai-06-03':[
    ['Seleccionar un agent endpoint con knowledge base aprobada en una región y compartment disponibles y revisar las respuestas','La RAG action usa un agent endpoint que contiene la knowledge base; región y compartment deben mostrarlo.'],
    ['Enviar todos los documentos en cada prompt sin comprobar accesos','Esto elude permisos documentales y expone datos innecesariamente.'],
    ['Sustituir el repositorio documental por una contraseña SFTP','Una credencial de transferencia no es una fuente de recuperación gobernada.'],
    ['Suponer que RAG demuestra que toda respuesta es correcta','El contexto recuperado no garantiza la exactitud de cada respuesta.']
  ],
  'gen-ai-07-03':[
    ['Disponibilidad de la función, permisos, controles y un límite de aprobación humana','Las acciones de alto impacto exigen comprobar disponibilidad, mínimo privilegio y control humano explícito.'],
    ['Si el agente puede eludir todos los controles de pago existentes','Eludir controles aumenta el riesgo comercial y el uso de un agente no lo justifica.'],
    ['Si un prompt puede considerarse una política de pago certificada','Un prompt por sí solo no es una política ni un control validado.'],
    ['Si un cliente OAuth puede reemplazar al aprobador de pagos','OAuth concede acceso; no proporciona aprobación comercial.']
  ]
};
for (const item of window.OIC_AUTHORED_QUESTIONS) {
  const translations = OIC_EDITORIAL_SPANISH[item.id];
  if (!translations) continue;
  item.options.forEach((option,index) => {
    [option.textEs,option.whyEs] = translations[index];
  });
}
