/* Original, topic-specific feedback for provisional practice prompts. */
window.OIC_RATIONALES = {
  'Integration versus Connection':[
    'A Connection configures an endpoint and security; the Integration owns the orchestration actions.',
    'An Adapter supplies connectivity capabilities. It does not replace a running Integration.',
    'A Project can group Integrations as well as related Connections and other resources.'
  ],
  'Trigger direction':[
    'Outbound calls from a running flow are Invoke operations, not the role of an inbound Trigger.',
    'A Scheduled Integration starts from a schedule; a Trigger is not restricted to that style.',
    'Many inbound Trigger operations accept a request payload defined by their contract.'
  ],
  'Invoke direction':[
    'The Integration is started by its Trigger or schedule; the Invoke runs after execution has begun.',
    'An Invoke can have a response contract when the target operation supports one.',
    'A schedule starts a Scheduled Integration; an Invoke calls a target service.'
  ],
  'Application Integration':[
    'File polling is a separate scheduled or file-processing pattern, not the sole purpose of an Application Integration.',
    'A REST Adapter can be configured as a Trigger or Invoke in supported Application Integrations.',
    'An Integration uses Connections; it does not replace their endpoint and security configuration.'
  ],
  'Synchronous design':[
    'A long batch can exceed the caller response window; asynchronous or scheduled processing is safer.',
    'Synchronous flows have practical and documented time limits; they are not unlimited.',
    'A quick response does not remove the need to report target or mapping faults.'
  ],
  'Asynchronous design':[
    'Asynchronous work can still Invoke target services through supported Adapters.',
    'The pattern is not restricted to SOAP; the calling contract and processing time drive the decision.',
    'An acknowledgement need not mean the final business operation has already succeeded.'
  ],
  'Projects':[
    'Projects organize resources; they do not make every Connection globally unnecessary.',
    'A Project is an OIC design and deployment construct, not merely a local folder.',
    'Integrations are central resources that can be organized within a Project.'
  ],
  'Activation':[
    'Activation makes a version runnable; it does not delete its design resource.',
    'A later edit must be deployed or activated appropriately; saving is not an automatic live update.',
    'Integrations are activated; a Connection is configured and tested for use by them.'
  ],
  'Business Identifiers':[
    'Tracking a selected business field does not encrypt the complete payload.',
    'Business Identifiers help locate instances; they do not transform source data into target data.',
    'Adapter passwords are security properties, not business tracking values.'
  ],
  'REST and SOAP':[
    'SOAP messages and contracts commonly use XML; saying SOAP never uses it reverses the distinction.',
    'WSDL describes SOAP-style service contracts; REST APIs do not universally require it.',
    'Neither protocol removes the need to secure an endpoint and authorize callers.'
  ],
  'Connection test':[
    'Testing connectivity does not activate every Integration that references a Connection.',
    'A Connection test cannot prove that an Integration maps business payloads correctly.',
    'Certificate publication or rotation is a separate security-management task.'
  ],
  'Connectivity Agent':[
    'The agent is installed in a network environment for connectivity, not inside Map Editor as a browser plugin.',
    'An agent does not eliminate TLS trust and identity requirements for protected endpoints.',
    'The agent enables controlled outbound access; it should not expose its host to every internet client.'
  ],
  'Private Endpoint':[
    'A Private Endpoint is a network connectivity mechanism, not an FTP server.',
    'OAuth secrets belong in approved Connection security configuration, not in a Private Endpoint.',
    'Private routing does not convert an application protocol from SOAP to REST.'
  ],
  'Trust Certificate':[
    'Trusting a server certificate is different from presenting a client Identity Certificate for mTLS.',
    'SFTP password authentication is separate from TLS certificate trust.',
    'A schedule controls timing; a Trust Certificate controls certificate validation.'
  ],
  'Identity Certificate':[
    'An Identity Certificate participates in client authentication, not dashboard rendering.',
    'The endpoint URL identifies where to call; a certificate identifies the client during TLS when required.',
    'A Lookup maps business values and cannot substitute for client identity.'
  ],
  'OAuth client credentials':[
    'Client Credentials is intended for a non-interactive client; browser user login belongs to other flows.',
    'OAuth authorization still depends on TLS to protect token exchange and API traffic.',
    'A service-to-service token can secure supported outbound calls; the flow is not only for inbound Trigger calls.'
  ],
  'Authorization Code':[
    'Authorization Code involves an authorization server that issues an authorization code and tokens.',
    'A client private key should not be exposed in a browser URL.',
    'Basic Authentication presents credentials directly; Authorization Code is a different OAuth 2.0 grant.'
  ],
  'SFTP':[
    'SFTP is an SSH file-transfer protocol, not an HTTP method.',
    'SOAP over TLS is an application messaging pattern, not SFTP.',
    'SFTP may authenticate with a password or SSH key according to the server policy.'
  ],
  'REST Adapter':[
    'The REST Adapter can serve a supported outbound Invoke role as well as an inbound Trigger role.',
    'REST payloads are not limited to XML; JSON is common when defined by the API contract.',
    'An Adapter call does not automatically provision unrelated OCI infrastructure.'
  ],
  'Dynamic endpoint changes':[
    'Unvalidated runtime URLs can redirect calls to unintended hosts and violate security controls.',
    'Mapping expressions are not a safe substitute for approved secret storage.',
    'Connection tests remain useful after changing endpoint behavior or configuration.'
  ],
  'Map Editor':[
    'Map Editor transforms data; runtime monitoring is handled through Observability and instance views.',
    'Connectivity Agent installation is separate from data mapping.',
    'Schedule configuration controls recurrence, not source-to-target field mapping.'
  ],
  'Data Stitch':[
    'Data Stitch composes data; fault handlers still manage errors in their own scope.',
    'Authentication is configured through Connection security, not Data Stitch.',
    'A Project deployment is not activated merely by composing a complex assignment.'
  ],
  'Assign':[
    'Assign sets variable values; notification is a separate action or integration behavior.',
    'An Invoke can use a direct mapping without a mandatory preceding Assign.',
    'Switch branches on conditions; Assign does not replace control-flow routing.'
  ],
  'Switch':[
    'Switch selects a matching branch; Parallel is the construct for independent concurrent branches.',
    'Conditional routing can be useful beyond Scheduled Integrations.',
    'Certificates are managed in security configuration, not in a Switch action.'
  ],
  'For Each':[
    'For Each is driven by a repeated collection, not by endpoint availability.',
    'CSV parsing requires an appropriate file schema or Stage File operation; looping alone does not parse it.',
    'Iteration processes items; permanent file storage is a different responsibility.'
  ],
  'While':[
    'While can run zero, one or many times depending on its condition.',
    'Parallel runs independent branches concurrently; While repeats one path conditionally.',
    'Certificate upload is a security-management operation unrelated to looping.'
  ],
  'Parallel':[
    'If every step needs the prior output, concurrent branches would break the dependency.',
    'Parallel execution still needs fault handling and aggregation.',
    'Scheduling syntax controls start times, not parallel execution inside a flow.'
  ],
  'Scope fault handler':[
    'A Scope can define a local fault boundary; it is more than a visual grouping.',
    'A local handler does not cover every fault outside its Scope; global handling has a different reach.',
    'An OAuth scope is a token permission and not the same as an OIC Scope action.'
  ],
  'Stage File':[
    'Stage File is for transient file processing, not an external permanent repository.',
    'An HTTP status code describes a web response, not a file-processing action.',
    'FTP Adapter reaches a file endpoint; Stage File processes staged data and does not replace that Connection.'
  ],
  'Re-throw Fault':[
    'Re-throw Fault propagates a failure rather than silently making it successful.',
    'Field mapping is performed by Map or related transformation actions, not Re-throw Fault.',
    'Schedule timing is unrelated to propagating a caught fault.'
  ],
  'Schedule Integration':[
    'Its initiating event is the schedule, so a REST Trigger is not mandatory.',
    'A Scheduled Integration can use supported Invoke Connections to perform work.',
    'Runs can be observed and investigated after execution.'
  ],
  'Schedule timing':[
    'The configured schedule time zone must be checked; the browser time zone is not authoritative.',
    'A schedule is planned recurrence, not a reaction that exists only after a fault.',
    'Monitoring is necessary to verify actual start, completion and failure.'
  ],
  'Schedule parameters':[
    'Parameters supply run values; Connection security still manages credentials.',
    'Publishing secrets in a URL would create exposure and is not parameter design.',
    'Supported parameters can be updated or overridden for an authorized run.'
  ],
  'Manual run':[
    'A manual run does not change the Integration style permanently.',
    'Mappings and actions remain part of the flow during manual execution.',
    'A manually started run still appears in operational monitoring.'
  ],
  'Batch design':[
    'An unbounded batch can exceed synchronous time or memory limits.',
    'Tracking identifiers help investigate partial progress and duplicate processing.',
    'Errors should be diagnosed and recovered, not discarded without evidence.'
  ],
  'File polling':[
    'Polling is normally driven by a schedule or supported file trigger, not necessarily a REST Trigger.',
    'Polling a secure SFTP source does not change its transport to FTP.',
    'A polling process still needs a configured recurrence or supported event mechanism.'
  ],
  'Failure response':[
    'Blind replay can duplicate transactions if the target committed before the failure was observed.',
    'Disabling notification makes a failed schedule less visible to operators.',
    'A failed OIC instance does not prove that no target-side work occurred.'
  ],
  'iCal':[
    'iCal expresses calendar recurrence and is not an Adapter security policy.',
    'Payload transformation belongs in mapping actions, not recurrence expressions.',
    'TLS secures transport; iCal configures time.'
  ],
  'Nightly processing':[
    'A nightly batch has no web caller that must wait synchronously for completion.',
    'Parallel is not compulsory; dependencies and target capacity decide concurrency.',
    'A Scheduled Integration can use supported database operations where connectivity is configured.'
  ],
  'Run calendar':[
    'A calendar helps inspect actual runs but does not replace functional testing.',
    'Client secrets belong in Connection security, not run-calendar metadata.',
    'A run calendar concerns scheduled executions, not solely REST Trigger calls.'
  ],
  'Activity and observability':[
    'Map Editor transforms data and cannot replace runtime instance monitoring.',
    'Disabling tracking removes a useful way to correlate and diagnose business messages.',
    'A client screenshot lacks the action-level evidence available in Observability.'
  ],
  'Business tracking':[
    'Business Identifiers are search and correlation values, not service credentials.',
    'Tracking an identifier does not automatically repair a failed mapping.',
    'They are used during operational searches, not just as design comments.'
  ],
  'HTTP 401':[
    'A missing resource is more consistent with 404 than an authentication challenge.',
    '401 does not prove authorization was granted; authentication has not succeeded.',
    'A 401 response is an error, not a successful asynchronous acknowledgement.'
  ],
  'HTTP 403':[
    'DNS resolution fails before an HTTP 403 response can be returned by the target.',
    'A malformed JSON body usually warrants request validation analysis, often around 400, not an automatic 403 diagnosis.',
    'Certificate expiry can cause TLS failure, but 403 alone does not establish that cause.'
  ],
  'HTTP 429':[
    'Unlimited parallel retries worsen rate limiting and may create a retry storm.',
    '429 is a failure response from a rate limit, not an accepted business payload.',
    'Changing authentication mode does not remove the provider rate limit.'
  ],
  'HTTP 503':[
    'An unavailable service does not by itself prove that a WSDL is invalid.',
    'Changing a tracking field improves diagnosis but cannot restore an unavailable target.',
    'A 503 cannot prove whether a prior write committed; check target-side evidence.'
  ],
  'Payload logging':[
    'Credentials in payload logs create exposure; mask or omit sensitive values.',
    'Logs aid diagnosis but do not replace controlled functional tests.',
    'Logging configuration does not change a Trigger into an Invoke.'
  ],
  'Connection failure':[
    'A mapping change cannot repair a failure that occurs before the target is reached.',
    'Activation does not automatically fix endpoint, network or credential configuration.',
    'Deleting monitoring evidence makes root-cause investigation harder.'
  ],
  'Transformation diagnostics':[
    'A target password affects authentication, not the meaning of a mapped field; inspect source and mapping first.',
    'Map Editor evaluates source values and expressions; assuming otherwise obscures the transformation fault.',
    'Disabling validation can hide bad data and does not repair the mapping contract.'
  ],
  'Resubmit decision':[
    'A blind resubmit can repeat a write that the target already committed.',
    'Resubmission should preserve operational evidence rather than erase the audit trail.',
    'Resubmit concerns failed message processing, not certificate management.'
  ],
  'AI Assistant scope':[
    'Generated designs still need review for contracts, security, mappings and production controls.',
    'AI assistance does not justify storing secrets in public artifacts.',
    'Tests remain necessary even when a design was generated by AI.'
  ],
  'Natural language creation':[
    'A clear prompt does not prove the generated flow meets every runtime and security requirement.',
    'Natural-language design is broader than certificate maintenance alone.',
    'Generated designs cannot be assumed to reach private resources without configured connectivity.'
  ],
  'AI mapping recommendations':[
    'Recommendations must still be checked against the real target schema.',
    'A mapping suggestion does not activate or deploy an Integration.',
    'OAuth grants authorize clients; they are unrelated to mapping suggestions.'
  ],
  'AI troubleshooting':[
    'AI analysis depends on evidence such as instance logs and Activity Stream.',
    'A plausible AI explanation is a hypothesis until runtime evidence confirms it.',
    'AI assistance does not change a failed instance into a successful transaction.'
  ],
  'OCI Generative AI':[
    'Approved service configuration is required; publishing API keys is unsafe and unnecessary.',
    'AI Actions perform specific tasks and do not replace every connectivity Adapter.',
    'Generative AI Actions run in supported Integration designs, not only in a browser.'
  ],
  'RAG action':[
    'A RAG Action uses knowledge sources; it is not an SFTP replacement.',
    'Retrieval-augmented answering is different from encrypting a file.',
    'Knowledge access still requires explicit security and data-governance controls.'
  ],
  'Agentic AI':[
    'Edition, region, tenancy configuration and permissions can affect feature availability.',
    'A payment instruction from an agent needs validation and human or policy controls.',
    'An AI agent is not merely an OAuth client credential.'
  ],
  'AI security':[
    'Sending secrets in prompts risks disclosure and is not required for answer quality.',
    'Internal model placement does not remove authorization and data-classification requirements.',
    'Audit records are important for investigating AI-enabled business decisions.'
  ],
  'AI descriptions':[
    'Generated documentation is descriptive and does not itself alter runtime logic.',
    'Documentation generation does not catch or recover a runtime fault.',
    'Source control and review are still needed for deployed Integration designs.'
  ],
  'Feature availability':[
    'Product documentation and the exam blueprint are different evidence for certification scope.',
    'AI features may require prerequisites such as edition, permissions or service configuration.',
    'Regions and tenancy settings can affect what is available.'
  ]
};
window.OIC_CORRECT_WHY = {
  'Integration versus Connection':'The flow must own execution logic while the reusable endpoint configuration remains independently testable.',
  'Trigger direction':'The Trigger is the entry point that creates an instance when a supported inbound request or event arrives.',
  'Invoke direction':'The outbound call is made from within an already running instance, so it cannot be the event that starts that instance.',
  'Application Integration':'An external initiating request needs a Trigger, after which the flow can orchestrate target calls.',
  'Synchronous design':'The client must remain connected until a bounded response is available, so elapsed target time matters.',
  'Asynchronous design':'Decoupling completion from the caller avoids exhausting a synchronous response window.',
  'Projects':'Grouping related resources gives a team a coherent design, deployment and observation boundary.',
  'Activation':'Only an activated or deployed version is available to the runtime caller.',
  'Business Identifiers':'An indexed business value lets operators correlate a customer-visible event with its OIC instance.',
  'REST and SOAP':'The API contract determines message structure and operation semantics; REST and SOAP expose different contract models.',
  'Connection test':'A Connection can only be trusted for its configured endpoint and security after the relevant connectivity check passes.',
  'Connectivity Agent':'The agent offers a controlled path from OIC to services that are not directly reachable from the cloud.',
  'Private Endpoint':'Private networking reaches eligible resources without equating network routing with an installed agent.',
  'Trust Certificate':'The client needs a trusted chain to validate the server during TLS negotiation.',
  'Identity Certificate':'In mTLS the target must identify the client as well as the client validating the target.',
  'OAuth client credentials':'A machine client can obtain a token using its own credentials without an interactive human authorization step.',
  'Authorization Code':'This grant carries a user authorization step and redirect before tokens are issued.',
  'SFTP':'SSH provides the secure transport and host-authentication context used by SFTP.',
  'REST Adapter':'The configured role determines whether OIC exposes a REST endpoint or calls one.',
  'Dynamic endpoint changes':'A runtime-selected target must stay inside a validated, authorized connectivity boundary.',
  'Map Editor':'A source-to-target mapping is required to make the target payload conform to its schema and meaning.',
  'Data Stitch':'It assembles complex structures where a scalar assignment would lose shape or repeated elements.',
  'Assign':'A scalar variable can preserve a small computed value for later expressions or actions.',
  'Switch':'Conditional expressions determine which branch executes for the current business data.',
  'For Each':'A repeated element collection supplies the items for each iteration.',
  'While':'The condition must be reevaluated and eventually change to end the loop.',
  'Parallel':'Independent branches can run concurrently only when their side effects and dependencies permit it.',
  'Scope fault handler':'A Scope defines where its local handler can intercept faults from grouped actions.',
  'Stage File':'File-backed operations can bound memory consumption during suitable segmented processing.',
  'Re-throw Fault':'Propagation preserves the failed status after a local handler has added context or performed cleanup.',
  'Schedule Integration':'A configured recurrence supplies the initiating event for time-based work.',
  'Schedule timing':'A recurrence must match the business calendar and time zone to run at the intended moment.',
  'Schedule parameters':'Parameters separate a run-specific input from the deployed orchestration design.',
  'Manual run':'An operator can start a configured schedule-style flow on demand without redefining its style.',
  'Batch design':'Bounded chunks and idempotent recovery make partial batch failure diagnosable and repeatable.',
  'File polling':'A time-based file workflow can repeatedly inspect a configured source and process eligible files.',
  'Failure response':'Monitoring and idempotency checks reveal whether a failed run can be safely resumed.',
  'iCal':'Calendar syntax represents recurrence rather than connection, security or mapping behavior.',
  'Nightly processing':'Batch work without a waiting caller aligns naturally with scheduled initiation.',
  'Run calendar':'Actual run records verify whether configured recurrence produced the intended executions.',
  'Activity and observability':'Runtime evidence identifies which instance and action succeeded or failed.',
  'Business tracking':'A stable business key makes an instance searchable without knowing internal runtime identifiers.',
  'HTTP 401':'The target rejected or requested authentication before permitting the protected operation.',
  'HTTP 403':'The target understood the request but did not authorize the caller for that resource or operation.',
  'HTTP 429':'The provider is signaling that the request rate exceeded its allowed threshold.',
  'HTTP 503':'Service unavailability may be transient, but retry safety depends on the operation and target state.',
  'Payload logging':'Diagnostic visibility must be balanced against exposure of confidential business data.',
  'Connection failure':'Endpoint, route, TLS and security are the layers that must work before payload mapping matters.',
  'Transformation diagnostics':'The wrong target value is evidence about source data, mapping rules or contract interpretation.',
  'Resubmit decision':'A failed OIC status does not prove the target rolled back its side effect.',
  'AI Assistant scope':'Generated content accelerates drafting but cannot verify the business contract or deployment controls by itself.',
  'Natural language creation':'A text prompt is an input to design, not proof that the resulting flow is production-ready.',
  'AI mapping recommendations':'Statistical similarity between fields does not establish semantic or type correctness.',
  'AI troubleshooting':'A suggested cause must be checked against actual instance and target evidence.',
  'OCI Generative AI':'An AI Action is an integration capability that still needs approved service configuration and security.',
  'RAG action':'Retrieved enterprise knowledge grounds an answer only when the source is relevant, current and authorized.',
  'Agentic AI':'An agent can choose consequential actions, so its permissions and human controls must be explicit.',
  'AI security':'Model-enabled flows can process sensitive data and therefore need least privilege and auditability.',
  'AI descriptions':'Generated descriptions help humans only when they accurately reflect the deployed design.',
  'Feature availability':'A documented capability can exist without being available in every tenancy or confirmed in an exam blueprint.'
};
