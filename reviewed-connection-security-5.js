/* Five connection-security cases checked against current Oracle guidance. */
(() => {
  const rest='https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/';
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-connections-01-03',topic:'REST Basic connection test scope',
      question:'A REST Connection using Basic Authentication passes Test Connection. Can the designer conclude that the target resource accepted the configured credentials?',
      questionEs:'Una REST Connection con Basic Authentication supera Test Connection. ¿Puede concluirse que el recurso destino aceptó las credenciales configuradas?',
      url:rest+'create-connection.html',title:'Create a Connection — Basic Authentication test limitation',
      options:[
        ['Yes; Test Connection always invokes the protected business operation.','Sí; Test Connection siempre invoca la operación empresarial protegida.','Oracle says this Basic connection test only opens a connection and does not validate credentials.','Oracle indica que esta prueba Basic solo abre una conexión y no valida credenciales.',false],
        ['No; invoke a suitable idempotent API to validate the endpoint and credentials.','No; hay que invocar una API idempotente adecuada para validar endpoint y credenciales.','Oracle explicitly recommends an idempotent API call to verify the endpoint and credentials.','Oracle recomienda expresamente una llamada idempotente para validar endpoint y credenciales.',true],
        ['Yes, if the Business Identifier was configured first.','Sí, si antes se configuró el Business Identifier.','Tracking configuration does not make Test Connection authenticate against the target resource.','El seguimiento no hace que Test Connection autentique contra el recurso destino.',false],
        ['No; the credentials can be checked only by activating every dependent integration.','No; solo se comprueban activando todas las Integrations dependientes.','A controlled idempotent target API call is the documented way to validate them.','Una llamada controlada a la API idempotente es la verificación documentada.',false]
      ]
    },
    {
      id:'gen-connections-02-05',topic:'Agent network path',
      question:'An on-premises target is reachable only inside a private network. In the public-internet agent pattern, what initiates the secure cloud connection?',
      questionEs:'Un destino local solo se alcanza dentro de una red privada. En el patrón público del agente, ¿qué inicia la conexión segura con la nube?',
      url:guide+'connection-patterns-hybrid-integrations.html',title:'Connection Patterns for Hybrid Integrations — Public Internet Pattern',
      options:[
        ['Oracle Integration opens a new inbound firewall port on the private target.','Oracle Integration abre un puerto entrante nuevo en el destino privado.','Oracle documents agent-initiated communication without opening private-network firewalls for this access.','Oracle documenta comunicación iniciada por el agente sin abrir el firewall privado para este acceso.',false],
        ['The private application must poll every Oracle Integration dashboard.','La aplicación privada debe consultar todos los Dashboards de Oracle Integration.','The connectivity agent, not the application or dashboard, handles the request path.','El Connectivity Agent, no la aplicación ni el Dashboard, gestiona esa ruta.',false],
        ['The on-premises connectivity agent initiates the secure connection and retrieves the request.','El Connectivity Agent local inicia la conexión segura y obtiene la solicitud.','Oracle describes the agent establishing the secure cloud path before invoking the local API.','Oracle describe al agente estableciendo la ruta segura antes de invocar la API local.',true],
        ['A Business Identifier creates a direct TCP tunnel to the application.','Un Business Identifier crea un túnel TCP directo a la aplicación.','A Business Identifier is tracking metadata and cannot provide network transport.','Un Business Identifier es metadato de seguimiento y no proporciona transporte.',false]
      ]
    },
    {
      id:'gen-connections-04-03',topic:'Trust certificate for server chain',
      question:'An outbound SSL connection fails because the external server root certificate is not trusted by Oracle Integration. Which certificate category addresses that gap?',
      questionEs:'Una conexión SSL saliente falla porque Oracle Integration no confía en el certificado raíz del servidor externo. ¿Qué categoría corresponde?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/erp-adapter/upload-ssl-certificate.html',title:'Upload a Certificate to Connect with External Services — X.509 Trust category',
      options:[
        ['Identity, because the missing server root must be uploaded as a private-key JKS.','Identity, porque la raíz del servidor debe cargarse como JKS con clave privada.','Oracle reserves Identity for two-way SSL identity material, not a missing trusted server root.','Oracle reserva Identity para material de dos vías, no para una raíz de servidor sin confianza.',false],
        ['Business Identifier, because it stores trusted certificate aliases.','Business Identifier, porque almacena alias de certificados confiables.','Business Identifiers track messages and are unrelated to SSL trust stores.','Los Business Identifiers rastrean mensajes y no son almacenes de confianza SSL.',false],
        ['PGP Private, because every TLS server certificate is a PGP key.','PGP Private, porque todo certificado TLS es una clave PGP.','PGP encryption keys are a separate certificate category from X.509 SSL transport trust.','Las claves PGP son una categoría distinta de la confianza X.509 para SSL.',false],
        ['X.509 SSL transport Trust, uploading the appropriate root or chain certificate.','X.509 SSL transport Trust, cargando el certificado adecuado de raíz o cadena.','Oracle documents Trust for this certificate and notes failure when the root is absent.','Oracle documenta Trust para ese certificado y el fallo cuando falta la raíz.',true]
      ]
    },
    {
      id:'gen-connections-06-01',topic:'Client credentials without user consent',
      question:'A service-to-service REST integration needs a token for the client application itself, with no resource-owner consent interaction. Which OAuth grant fits that requirement?',
      questionEs:'Una Integration REST entre servicios necesita un token para la propia aplicación cliente, sin consentimiento interactivo del usuario. ¿Qué grant OAuth corresponde?',
      url:rest+'oauth-protection.html',title:'OAuth-Protected Patterns — OAuth Client Credentials',
      options:[
        ['Authorization Code, because it always omits resource-owner consent.','Authorization Code, porque siempre omite el consentimiento del usuario.','Authorization Code is the flow associated with resource-owner approval, not this no-user scenario.','Authorization Code se asocia con aprobación del usuario, no con este escenario sin usuario.',false],
        ['OAuth Client Credentials, using the registered client identity and token endpoint.','OAuth Client Credentials, con la identidad del cliente registrado y el token endpoint.','Oracle describes this two-legged pattern as the client obtaining access on its own behalf.','Oracle describe este patrón de dos patas como acceso obtenido por el cliente para sí mismo.',true],
        ['A Business Identifier used as an access token.','Un Business Identifier usado como access token.','A tracking field does not replace an OAuth token or grant.','Un campo de seguimiento no sustituye un token ni un grant OAuth.',false],
        ['A Trust certificate that automatically provides an OAuth grant.','Un certificado Trust que proporciona automáticamente un grant OAuth.','TLS trust and OAuth token acquisition are distinct security functions.','La confianza TLS y la obtención de tokens OAuth son funciones distintas.',false]
      ]
    },
    {
      id:'gen-connections-07-01',topic:'Authorization Code consent step',
      question:'A REST Connection is configured with OAuth Authorization Code Credentials, but its connection test is not yet successful. Which required interaction may still be missing?',
      questionEs:'Una REST Connection usa OAuth Authorization Code Credentials, pero su prueba todavía no resulta exitosa. ¿Qué interacción requerida podría faltar?',
      url:rest+'create-connection.html',title:'Create a Connection — Provide Consent for Authorization Code',
      options:[
        ['Switch the Connection role to Trigger and Invoke to skip user approval.','Cambiar el rol a Trigger and Invoke para omitir aprobación.','Role selection does not replace the authorization-code consent step.','Elegir un rol no sustituye el paso de consentimiento de Authorization Code.',false],
        ['Enter the Business Identifier into the token endpoint field.','Escribir el Business Identifier en el campo token endpoint.','Tracking metadata is not the authorization endpoint or user consent.','El metadato de seguimiento no es el endpoint de autorización ni el consentimiento.',false],
        ['Click Provide Consent and complete the resource-owner authorization interaction.','Pulsar Provide Consent y completar la autorización del propietario del recurso.','Oracle says configuring the fields alone is insufficient; these policies need Provide Consent.','Oracle indica que completar campos no basta; estas políticas requieren Provide Consent.',true],
        ['Upload any server Trust certificate as an Identity keystore.','Cargar cualquier certificado Trust como keystore Identity.','A certificate category change is not the documented authorization-code consent requirement.','Cambiar la categoría del certificado no satisface el consentimiento requerido.',false]
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
