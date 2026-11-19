/* Five REST diagnostic cases checked against current Oracle Integration guidance. */
(() => {
  const rest='https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/';
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-monitoring-03-01',topic:'401 after connection test',
      question:'A REST Connection test succeeds, but an Invoke to the configured resource repeatedly returns HTTP 401. What should the operator test next?',
      questionEs:'La prueba de una REST Connection pasa, pero el Invoke al recurso configurado devuelve HTTP 401 repetidamente. ¿Qué debe probarse ahora?',
      url:rest+'troubleshoot-rest-adapter.html',title:'REST Service Invoked by the REST Adapter Returns a 401 Unauthorized Status Response',
      options:[
        ['Assume the credentials are valid because Test Connection passed.','Suponer que las credenciales son válidas porque Test Connection pasó.','Oracle states that the connection test does not validate the application credentials for the invoked resource.','Oracle indica que esa prueba no valida las credenciales de aplicación del recurso invocado.',false],
        ['Test the endpoint configuration and recheck the application credentials used by the actual call.','Probar la configuración del endpoint y revisar las credenciales usadas por la llamada real.','Oracle recommends testing the endpoint configuration; a 401 can mean the Connection credentials are no longer valid.','Oracle recomienda probar el endpoint; un 401 puede indicar credenciales de Connection vencidas o inválidas.',true],
        ['Change the Business Identifier because it determines target authorization.','Cambiar el Business Identifier porque determina la autorización destino.','Business Identifiers support tracking and do not authorize the target API call.','Los Business Identifiers sirven para seguimiento, no autorizan la API destino.',false],
        ['Increase the Mapper sample size because 401 means payload overflow.','Aumentar el tamaño de muestra del Mapper porque 401 significa exceso de payload.','A 401 response concerns authorization or authentication, not proof of a sample-size limit.','Un 401 trata de autenticación o autorización; no demuestra un límite de muestra.',false]
      ]
    },
    {
      id:'gen-monitoring-03-03',topic:'Basic authentication with MFA',
      question:'An identity domain requires MFA, while a client still uses Basic authentication to invoke an Oracle Integration service and receives 401. Which documented remedy fits?',
      questionEs:'Un Identity Domain exige MFA, pero un cliente usa Basic Authentication para invocar un servicio de Oracle Integration y recibe 401. ¿Qué solución está documentada?',
      url:guide+'troubleshoot-integration-runtime.html',title:'Using Basic Authentication to Call Services When the Identity Domain is Configured With Multi-Factor Authentication Causes a 401-Unauthorized Error',
      options:[
        ['Enable Debug tracing so Basic authentication can complete the MFA challenge.','Activar tracing Debug para que Basic Authentication complete MFA.','Tracing adds diagnostics; it does not make Basic authentication perform an MFA challenge.','Tracing añade diagnóstico; no permite a Basic Authentication completar MFA.',false],
        ['Retry the same username and password until MFA is bypassed.','Reintentar el mismo usuario y contraseña hasta omitir MFA.','Repeating Basic authentication does not resolve the documented incompatibility.','Repetir Basic Authentication no resuelve la incompatibilidad documentada.',false],
        ['Use OAuth instead, or use an account without MFA where policy permits.','Usar OAuth o, si la política lo permite, una cuenta sin MFA.','Oracle lists OAuth or disabling MFA for the account used with Basic authentication as alternatives.','Oracle indica OAuth o desactivar MFA para la cuenta que usa Basic Authentication como alternativas.',true],
        ['Replace the Business Identifier with the one-time MFA code.','Sustituir el Business Identifier por el código MFA temporal.','A tracking field is not an authentication factor for the HTTP client.','Un campo de seguimiento no es un factor de autenticación del cliente HTTP.',false]
      ]
    },
    {
      id:'gen-monitoring-04-03',topic:'OAuth-protected API returns 403',
      question:'A target OAuth-protected API returns HTTP 403 even though a token was obtained. What is the most relevant documented investigation?',
      questionEs:'Una API destino protegida con OAuth devuelve HTTP 403 aunque se obtuvo un token. ¿Qué investigación documentada corresponde?',
      url:guide+'troubleshoot-integration-runtime.html',title:'403 Error When Accessing an API Protected Using OAuth',
      options:[
        ['Check the token scope, resource-owner consent, and permissions with the API owner.','Revisar scope del token, consentimiento del propietario y permisos con el dueño de la API.','Oracle says 403 usually indicates insufficient API permission and names scope and consent among possible causes.','Oracle indica que 403 suele señalar permisos insuficientes y cita scope y consentimiento como posibles causas.',true],
        ['Assume the network connection failed before any HTTP response.','Suponer que la conexión de red falló antes de toda respuesta HTTP.','The reported HTTP response shows the request reached a responder; authorization still needs investigation.','La respuesta HTTP muestra que hubo un servidor que respondió; falta investigar la autorización.',false],
        ['Increase the Schedule Parameter limit to obtain a broader token.','Aumentar el límite de Schedule Parameters para ampliar el token.','Schedule Parameters do not set OAuth scopes or API permissions.','Schedule Parameters no establecen scopes OAuth ni permisos de API.',false],
        ['Delete the failed instance because 403 proves it cannot be diagnosed.','Eliminar la instancia porque 403 demuestra que no puede diagnosticarse.','Oracle documents examining OAuth configuration and working with the API owner, not discarding evidence.','Oracle documenta revisar OAuth y colaborar con el dueño de la API, no descartar evidencia.',false]
      ]
    },
    {
      id:'gen-monitoring-05-01',topic:'Rate-limit response on REST Invoke',
      question:'A REST Invoke intermittently receives HTTP 429 from its target. Which Oracle REST Adapter best practice should be part of the recovery design?',
      questionEs:'Un REST Invoke recibe HTTP 429 intermitente del destino. ¿Qué buena práctica de Oracle REST Adapter debe incluirse en la recuperación?',
      url:rest+'best-practices-invoking-rest-endpoints.html',title:'Best Practices for Invoking REST Endpoints — instance retries',
      options:[
        ['Treat every 429 as proof that the Mapper selected the wrong XML node.','Tratar cada 429 como prueba de que el Mapper eligió un nodo XML equivocado.','The status is an HTTP error response and does not establish a mapping defect.','El estado es una respuesta HTTP y no demuestra un defecto del mapping.',false],
        ['Disable all recovery because 429 can never be retried.','Desactivar toda recuperación porque 429 nunca se puede reintentar.','Oracle explicitly includes 429 among REST Invoke errors for which instance retries should be employed.','Oracle incluye expresamente 429 entre errores de REST Invoke para los que recomienda reintentos de instancia.',false],
        ['Change the primary Business Identifier to the HTTP status.','Cambiar el Business Identifier principal al estado HTTP.','Tracking identifiers do not implement a retry or alter the target rate limit.','Los identificadores de seguimiento no implementan reintentos ni alteran el límite del destino.',false],
        ['Plan instance retries and check target-side effects before replaying a non-idempotent operation.','Planear reintentos de instancia y revisar efectos en el destino antes de repetir una operación no idempotente.','Oracle recommends instance retries for 429; checking side effects is needed to avoid duplicate business actions.','Oracle recomienda reintentos ante 429; revisar efectos evita duplicar acciones empresariales.',true]
      ]
    },
    {
      id:'gen-monitoring-06-01',topic:'5xx fault diagnosis',
      question:'An outbound REST Invoke fails and the inbound REST Trigger returns a 5xx response. What is the safest first diagnostic conclusion?',
      questionEs:'Falla un REST Invoke saliente y el REST Trigger entrante devuelve 5xx. ¿Cuál es la primera conclusión diagnóstica más segura?',
      url:rest+'troubleshoot-rest-adapter.html',title:'Error Handling with the REST Adapter — APIInvocationError and downstream 5xx',
      options:[
        ['The inbound caller necessarily sent an invalid query parameter.','El cliente entrante necesariamente envió un parámetro de consulta inválido.','Oracle associates invalid client requests with 4xx; a downstream error can surface as 5xx.','Oracle relaciona solicitudes cliente inválidas con 4xx; un error posterior puede mostrarse como 5xx.',false],
        ['The target definitely committed nothing, so repeating the request is always safe.','El destino no confirmó nada, por lo que repetir siempre es seguro.','A 5xx response alone does not establish whether a downstream side effect was committed.','Una respuesta 5xx no demuestra si el destino confirmó un efecto.',false],
        ['Inspect the nested APIInvocationError errorDetails and the fault path before assigning the cause.','Inspeccionar errorDetails anidado en APIInvocationError y la ruta de fallo antes de atribuir la causa.','Oracle documents errorDetails as the actual cause and says downstream errors can be returned as inbound 5xx.','Oracle documenta errorDetails como causa real y señala que errores posteriores pueden aparecer como 5xx.',true],
        ['A 5xx response proves the Business Identifier is missing.','Una respuesta 5xx demuestra que falta el Business Identifier.','A 5xx can result from several downstream or processing errors; it is not proof of that tracking defect.','Un 5xx puede tener varias causas posteriores o de proceso; no prueba ese defecto de seguimiento.',false]
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
