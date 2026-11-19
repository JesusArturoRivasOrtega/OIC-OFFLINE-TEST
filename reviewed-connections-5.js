/* Five distinct adapter/security cases checked against current Oracle pages. */
(() => {
  const cases=[
    {
      id:'gen-connections-03-04',topic:'REST Private Endpoint direction',
      question:'A designer sets Private endpoint access type on a REST Adapter Connection and tries to use that Connection as an inbound trigger. What restriction applies?',
      questionEs:'Un diseñador elige Private endpoint como Access type de una Connection REST Adapter e intenta usarla como Trigger entrante. ¿Qué restricción se aplica?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/rest-adapter-restrctions.html',title:'REST Adapter Restrictions — private endpoints and trigger connections',
      options:[
        ['Private endpoint access is supported for REST invokes, not REST triggers.','Private endpoint se admite para REST Invoke, no para REST Trigger.','Oracle documents that a REST Connection with PrivateEndpoint access type cannot be used as a trigger.','Oracle documenta que una REST Connection con acceso PrivateEndpoint no puede usarse como Trigger.',true],
        ['Private endpoint access works only for triggers, not invokes.','Private endpoint funciona solo para Triggers, no para Invokes.','The documented direction is the reverse: invoke is supported and trigger is not.','La dirección documentada es la contraria: Invoke sí, Trigger no.',false],
        ['The restriction disappears when the trigger uses Basic Authentication.','La restricción desaparece si el Trigger usa Basic Authentication.','The trigger limitation concerns access type and is not waived by Basic Authentication.','La limitación del Trigger se refiere al Access type y no desaparece con Basic Authentication.',false],
        ['A Business Identifier enables the private trigger route.','Un Business Identifier habilita la ruta privada del Trigger.','Tracking fields cannot change REST Adapter network-direction support.','Los campos de seguimiento no cambian las direcciones de red admitidas por REST Adapter.',false]
      ]
    },
    {
      id:'gen-connections-05-03',topic:'Identity keystore keys',
      question:'An Identity JKS for two-way SSL contains two private keys protected by different passwords. What does Oracle document about importing it?',
      questionEs:'Un JKS Identity para SSL mutuo contiene dos claves privadas protegidas con contraseñas distintas. ¿Qué documenta Oracle sobre su importación?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/manage-security-certificates.html',title:'Manage Security Certificates — Identity JKS private-key passwords',
      options:[
        ['The private keys must have the same password or they cannot be extracted from the keystore.','Las claves privadas deben tener la misma contraseña o no podrán extraerse del keystore.','Oracle specifies a shared password for multiple private keys in an Identity JKS.','Oracle exige la misma contraseña para varias claves privadas en un JKS Identity.',true],
        ['Different passwords are required to distinguish the two aliases.','Se requieren contraseñas distintas para distinguir los dos alias.','Alias names do not remove Oracle’s same-password requirement for the private keys.','Los nombres de alias no eliminan el requisito de una contraseña común para las claves.',false],
        ['Upload the JKS as Trust to avoid the password rule for client identity.','Cargar el JKS como Trust para evitar la regla de contraseña de identidad cliente.','Trust is for trusting a peer; Identity is the category for two-way SSL client identity.','Trust sirve para confiar en el par; Identity es la categoría de identidad cliente para SSL mutuo.',false],
        ['A Business Identifier supplies the missing key password at runtime.','Un Business Identifier proporciona la contraseña de la clave durante la ejecución.','Business Identifiers track messages and do not unlock keystore private keys.','Los Business Identifiers rastrean mensajes y no desbloquean claves privadas del keystore.',false]
      ]
    },
    {
      id:'gen-connections-06-04',topic:'OAuth policy with connectivity agent',
      question:'A REST Invoke uses an on-premises connectivity agent. The team selects OAuth Authorization Code Credentials on its Connection. What should the design review flag?',
      questionEs:'Un REST Invoke usa un Connectivity Agent local. El equipo elige OAuth Authorization Code Credentials en su Connection. ¿Qué debe señalar la revisión?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/rest-adapter-restrctions.html',title:'REST Adapter Restrictions — agent-supported security policies',
      options:[
        ['That policy is not supported for REST Adapter Connections using the connectivity agent.','Esa política no se admite en REST Adapter Connections que usan Connectivity Agent.','Oracle lists OAuth Authorization Code Credentials among security policies unsupported with the on-premises agent.','Oracle incluye OAuth Authorization Code Credentials entre las políticas no admitidas con el agente local.',true],
        ['It is the only OAuth policy supported with the agent.','Es la única política OAuth admitida con el agente.','OAuth Client Credentials and some two-legged policies are supported; Authorization Code is not.','OAuth Client Credentials y algunas políticas de dos participantes sí se admiten; Authorization Code no.',false],
        ['It becomes supported if the integration is scheduled rather than application-driven.','Se admite si la Integration es programada en vez de iniciada por aplicación.','The restriction is on the REST Connection using the agent, not on the integration schedule style.','La restricción afecta a la REST Connection con agente, no al estilo Schedule o Application.',false],
        ['A Trust certificate changes Authorization Code into Client Credentials.','Un certificado Trust convierte Authorization Code en Client Credentials.','TLS trust and the selected OAuth grant are separate connection settings.','La confianza TLS y el grant OAuth elegido son configuraciones distintas.',false]
      ]
    },
    {
      id:'gen-connections-08-04',topic:'SFTP server identity',
      question:'An SFTP Connection needs to verify that it reached the intended server, while user login is already configured separately. Which key serves this server-identity check?',
      questionEs:'Una SFTP Connection debe verificar que llegó al servidor previsto; el inicio de sesión ya está configurado aparte. ¿Qué clave sirve para comprobar la identidad del servidor?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/ftp-adapter/create-connection.html',title:'Create an FTP Adapter Connection — sFTP Host Key',
      options:[
        ['The server Host Key uploaded in the sFTP Connection properties.','La Host Key del servidor cargada en las propiedades de la SFTP Connection.','Oracle says the Host Key verifies the server to the FTP Adapter and guards against man-in-the-middle attacks.','Oracle indica que Host Key verifica el servidor ante FTP Adapter y ayuda a evitar ataques de intermediario.',true],
        ['The client Private Key File used for public-key user authentication.','El Private Key File cliente usado para autenticar al usuario con clave pública.','That private key authenticates the client account; it does not identify the server host.','Esa clave privada autentica la cuenta cliente; no identifica al host servidor.',false],
        ['A PGP encryption key for file contents.','Una clave PGP para cifrar el contenido del archivo.','PGP protects file content, not the SSH server identity during connection establishment.','PGP protege el contenido del archivo, no la identidad SSH del servidor al conectar.',false],
        ['The Business Identifier selected in the integration.','El Business Identifier elegido en la Integration.','An OIC tracking field has no role in SSH host verification.','Un campo de seguimiento de OIC no participa en la verificación del host SSH.',false]
      ]
    },
    {
      id:'gen-connections-09-02',topic:'REST query encoding',
      question:'A REST Invoke receives an already URL-encoded query value from a mapping and the target sees double encoding. What input rule does Oracle give for the REST Adapter?',
      questionEs:'Un REST Invoke recibe del mapping un valor de consulta ya codificado y el destino ve doble codificación. ¿Qué regla de entrada da Oracle para REST Adapter?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/rest-adapter/rest-adapter-restrctions.html',title:'REST Adapter Restrictions — query parameter encoding',
      options:[
        ['Map the unencoded query value; REST Adapter encodes it before invoking the service.','Mapear el valor de consulta sin codificar; REST Adapter lo codifica antes de llamar al servicio.','Oracle warns that mapping a pre-encoded value makes the adapter encode it again.','Oracle advierte que mapear un valor ya codificado hace que el Adapter vuelva a codificarlo.',true],
        ['Pre-encode every value twice to compensate for the adapter.','Codificar cada valor dos veces antes de pasarlo al Adapter.','Additional pre-encoding worsens the documented double-encoding problem.','Codificarlo previamente otra vez agrava el problema documentado de doble codificación.',false],
        ['Disable Business Identifiers because they encode URL values.','Desactivar Business Identifiers porque codifican valores URL.','Business Identifiers are tracking fields, not the REST query encoder.','Los Business Identifiers son campos de seguimiento, no el codificador de consultas REST.',false],
        ['Convert the query parameter into a Trust certificate.','Convertir el parámetro de consulta en un certificado Trust.','A TLS trust certificate does not control URL query encoding.','Un certificado de confianza TLS no controla la codificación de consultas URL.',false]
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
