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
    ], correct:['B'], reference:'Understand Integration Styles: Synchronous and Asynchronous'
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
    ], correct:['A'], reference:'Get Started with Projects: About Projects'
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
    ], correct:['B'], reference:'Create Connections: Use OAuth with Outbound Calls'
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
    ], correct:['B'], reference:'Create Connections: Use OAuth 2.0'
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
    ], correct:['A'], reference:'Create Application Integrations: While Action'
  },
  {
    replaces:'gen-orchestration-07-03', categoryId:'orchestration', topic:'Parallel',
    question:'An order flow must call tax and inventory services, and neither call needs the other’s response. What design can reduce elapsed time while preserving deliberate fault handling?',
    questionEs:'Un flujo de pedidos debe llamar a servicios de impuestos e inventario; ninguno necesita la respuesta del otro. ¿Qué diseño reduce el tiempo sin descuidar los errores?',
    options:[
      ['Parallel branches with defined result and fault aggregation','Independent calls can run concurrently, but their outputs and failures still need explicit treatment.'],
      ['A For Each loop over a single customer record','For Each is for repeating payload elements, not independent service concurrency.'],
      ['A single Assign action instead of both service calls','Assign sets variables; it cannot obtain tax and inventory responses.'],
      ['Two dependent invocations that assume the first output is required by the second','That dependency is absent from the case and would serialize work unnecessarily.']
    ], correct:['A'], reference:'Create Application Integrations: Process Tasks in Parallel and Fault Aggregation'
  },
  {
    replaces:'gen-scheduled-06-03', categoryId:'scheduled', topic:'File polling',
    question:'A supplier places a nightly CSV on an SFTP server. No client calls OIC when the file arrives. Which starting pattern is most appropriate?',
    questionEs:'Un proveedor deposita cada noche un CSV en un servidor SFTP. Ningún cliente llama a OIC cuando llega el archivo. ¿Qué patrón de inicio conviene?',
    options:[
      ['A REST Trigger waiting for an HTTP request from the supplier','The case has file arrival and a nightly cadence, not an HTTP caller.'],
      ['A Scheduled Integration using a file Connection and Stage File processing','The schedule can initiate file retrieval and bounded file processing without an inbound caller.'],
      ['A Business Identifier used as the file-transfer protocol','A tracking field cannot retrieve or parse a file.'],
      ['A Map Editor session that runs automatically at midnight','Map Editor defines mappings; it is not a scheduler.']
    ], correct:['B'], reference:'Create Schedule Integrations and Stage File documentation'
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
      ['Use controlled diagnostics with masking, access, and retention decisions','Diagnostics must balance traceability with protection of sensitive payload data.'],
      ['Remove Business Identifiers so no transaction can be found','Removing tracking hinders support and does not itself control payload logging.'],
      ['Put service credentials inside the payload to correlate records','Credentials must not be placed in business payloads or logs.']
    ], correct:['B'], reference:'Observability strategy and security guidance'
  },
  {
    replaces:'gen-ai-06-03', categoryId:'ai', topic:'RAG action',
    question:'An internal assistant must answer using only approved policy documents. Which architecture decision is essential before connecting it to OIC?',
    questionEs:'Un asistente interno debe responder solo con documentos de políticas aprobados. ¿Qué decisión de arquitectura es esencial antes de conectarlo a OIC?',
    options:[
      ['Define the knowledge source, access permissions, and answer review','Grounding needs an approved source and governed access; generated answers still require evaluation.'],
      ['Send all documents to every prompt without access checks','This bypasses document permissions and creates unnecessary data exposure.'],
      ['Replace the document repository with an SFTP password','A file-transfer credential is not a governed retrieval source.'],
      ['Assume RAG proves every answer factually correct','Grounding reduces unsupported answers but does not guarantee correctness.']
    ], correct:['A'], reference:'Create Application Integrations: Generative AI Agents RAG Action'
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
  }
].map(item=>({
  id:item.replaces,categoryId:item.categoryId,topic:item.topic,question:item.question,questionEs:item.questionEs,
  options:item.options.map(([text,why],i)=>({id:String.fromCharCode(65+i),text,correct:item.correct.includes(String.fromCharCode(65+i)),why})),
  correct:item.correct,multi:false,difficulty:'professional',type:'scenario',
  source:'Original editorial practice',sourceType:'original',verification:'editorial draft',
  reference:{title:'Oracle Cloud Using Integrations in Oracle Integration 3',edition:'G36915-54, October 2026',section:item.reference,status:'section pointer; item-level review pending'},
  explanation:item.options.find((_,i)=>item.correct.includes(String.fromCharCode(65+i)))?.[1],
  createdFor:'OIC Certification Academy 2026'
}));
