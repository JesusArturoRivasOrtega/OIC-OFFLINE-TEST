/* Five distinct bilingual public cases checked against the linked Oracle pages. */
(() => {
  const guide='https://docs.oracle.com/en/cloud/paas/application-integration/integrations-user/';
  const cases=[
    {
      id:'gen-connections-02-03',topic:'Agent group capacity',
      question:'A team wants one connectivity agent group to tolerate a host outage. Which deployment stays within the documented group limit?',
      questionEs:'Un equipo quiere que un Agent Group resista la caída de un host. ¿Qué despliegue respeta el límite documentado del grupo?',
      url:guide+'connectivity-agent.html',title:'About the Connectivity Agent — components and agent groups',
      options:[
        ['Run two agents in the group on separate hosts.','Ejecutar dos agentes del grupo en hosts distintos.','Oracle permits up to two agents per group; separate hosts avoid one host becoming the single point of failure.','Oracle permite hasta dos agentes por grupo; hosts distintos evitan que un solo host sea el punto único de fallo.',true],
        ['Run three agents in one group.','Ejecutar tres agentes en un grupo.','The documented maximum is two agents per group.','El máximo documentado es de dos agentes por grupo.',false],
        ['Run two cloud agents manually on the same on-premises host.','Ejecutar manualmente dos agentes cloud en el mismo host local.','The cloud component runs in Oracle Integration; the installed on-premises agents form the local group.','El componente cloud se ejecuta en Oracle Integration; los agentes instalados localmente forman el grupo.',false],
        ['Use one agent but open an inbound firewall port as a standby.','Usar un agente y abrir un puerto entrante como reserva.','An open inbound port does not provide a second agent and is not required for agent communication.','Un puerto entrante no aporta un segundo agente y no se requiere para su comunicación.',false]
      ]
    },
    {
      id:'gen-connections-02-04',topic:'Agent network direction',
      question:'A security review rejects inbound ports from Oracle Integration into the data center. What does the documented connectivity-agent communication pattern require?',
      questionEs:'Seguridad rechaza puertos entrantes desde Oracle Integration al centro de datos. ¿Qué exige el patrón documentado de comunicación del Connectivity Agent?',
      url:guide+'connectivity-agent.html',title:'About the Connectivity Agent — network and communications security',
      options:[
        ['Outbound TLS connectivity from the on-premises agent, with proxy support if needed.','Conectividad TLS saliente desde el agente local, con proxy si hace falta.','The on-premises agent registers, pulls requests, and posts responses over TLS without opening an inbound communication port.','El agente local se registra, recibe solicitudes y publica respuestas sobre TLS sin abrir un puerto entrante de comunicación.',true],
        ['An inbound listener on every internal target for Oracle Integration.','Un listener entrante en cada destino interno para Oracle Integration.','Oracle documents that the agent opens no ports on the on-premises system for its cloud communication.','Oracle documenta que el agente no abre puertos en el sistema local para comunicarse con la nube.',false],
        ['Disabling TLS because OAuth replaces transport encryption.','Desactivar TLS porque OAuth sustituye el cifrado de transporte.','Agent registration uses OAuth over TLS; authentication does not replace TLS.','El registro del agente usa OAuth sobre TLS; la autenticación no reemplaza TLS.',false],
        ['Publicly exposing the database before installing the agent.','Exponer públicamente la base de datos antes de instalar el agente.','The agent exists to reach private systems without making them internet accessible.','El agente permite alcanzar sistemas privados sin hacerlos accesibles desde Internet.',false]
      ]
    },
    {
      id:'gen-connections-03-03',topic:'Private VCN connection',
      question:'An OIC integration must invoke a service inside an OCI VCN subnet without sending traffic over the public internet. Which connection pattern is documented?',
      questionEs:'Una Integration OIC debe invocar un servicio en una subred VCN de OCI sin enviar tráfico por Internet pública. ¿Qué patrón de Connection está documentado?',
      url:guide+'connecting-endpoints-using-private-virtual-cloud-network-vcn_.html',title:'About Connecting to Private Resources — outbound private connection',
      options:[
        ['Configure a private endpoint and select Private endpoint access type on a supported adapter.','Configurar un Private Endpoint y elegir ese Access type en un Adapter compatible.','Oracle documents a private outbound channel to VCN resources and the Private endpoint access option for supported adapters.','Oracle documenta un canal privado saliente hacia recursos de VCN y la opción Private endpoint para Adapters compatibles.',true],
        ['Make the VCN service public and use its internet URL.','Hacer público el servicio VCN y usar su URL de Internet.','That sends traffic through a public exposure path instead of the requested private channel.','Eso expone el servicio públicamente en vez de utilizar el canal privado solicitado.',false],
        ['Set a Business Identifier equal to the subnet address.','Igualar un Business Identifier a la dirección de subred.','Business Identifiers support instance tracking, not network connectivity.','Los Business Identifiers sirven para rastrear instancias, no para establecer conectividad.',false],
        ['Upload a trust certificate as the only network configuration.','Cargar un certificado de confianza como única configuración de red.','A certificate can establish TLS trust but does not create the VCN private route.','Un certificado puede establecer confianza TLS, pero no crea la ruta privada hacia la VCN.',false]
      ]
    },
    {
      id:'gen-ai-02-01',topic:'AI-created integration location',
      question:'A designer wants Ask Oracle to build an integration from a natural-language requirement. Where must the integration be created, and what should be expected initially?',
      questionEs:'Un diseñador quiere que Ask Oracle cree una Integration desde un requisito en lenguaje natural. ¿Dónde debe crearla y qué resultado inicial debe esperar?',
      url:guide+'use-ai-create-integration.html',title:'Use AI to Create an Integration — project and skeleton',
      options:[
        ['Inside a project; AI creates a skeleton that still needs configuration and review.','Dentro de un Project; AI crea un esqueleto que aún requiere configuración y revisión.','Oracle limits AI creation to projects and describes the generated result as a skeleton integration.','Oracle limita la creación con AI a Projects y describe el resultado como una Integration esqueleto.',true],
        ['Only outside projects; AI activates it immediately.','Solo fuera de Projects; AI la activa de inmediato.','Oracle says AI creation is only supported within a project, and activation follows configuration.','Oracle indica que solo se admite dentro de un Project y que la activación sigue a la configuración.',false],
        ['Inside a lookup; AI generates only lookup rows.','Dentro de un Lookup; AI genera solo filas de equivalencias.','The documented feature creates integration nodes, trigger/invoke structure, and possible draft connections.','La función documentada crea nodos, estructura Trigger/Invoke y posibles Connections provisionales.',false],
        ['In the monitoring console; AI rewrites completed instances.','En monitoreo; AI reescribe instancias terminadas.','The feature is used on the integration design canvas, not to alter completed runtime instances.','La función se usa en el canvas de diseño, no para alterar instancias terminadas.',false]
      ]
    },
    {
      id:'gen-ai-03-03',topic:'AI mapping recommendation limits',
      question:'In a project mapper, a designer asks AI for recommendations using four source structures at once. What is the documented correction?',
      questionEs:'En el Mapper de un Project, un diseñador pide recomendaciones de AI usando cuatro estructuras origen a la vez. ¿Cuál es la corrección documentada?',
      url:'https://docs.oracle.com/en/cloud/paas/application-integration/mapper-user/generate-mapping-recommendations.html',title:'Generate Mapping Recommendations — choose sources',
      options:[
        ['Select at least one but no more than three sources, then review the suggested mappings.','Seleccionar al menos un origen y no más de tres, y revisar los mappings sugeridos.','Oracle documents a one-to-three-source selection and a separate verification step before applying recommendations.','Oracle documenta elegir entre uno y tres orígenes y verificar las recomendaciones antes de aplicarlas.',true],
        ['Keep all four sources because there is no selection limit.','Mantener los cuatro orígenes porque no existe límite.','The Choose sources dialog limits a recommendation request to three sources.','Choose sources limita cada solicitud de recomendaciones a tres orígenes.',false],
        ['Choose no source so the mapper infers the complete schema.','No elegir ningún origen para que el Mapper infiera todo el esquema.','At least one source must be selected.','Debe seleccionarse al menos un origen.',false],
        ['Move the integration outside the project to remove the limit.','Sacar la Integration del Project para quitar el límite.','Mapping recommendations are supported only within a project; moving it out removes the feature.','Las recomendaciones de mapping solo se admiten dentro de un Project; sacarla elimina la función.',false]
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
