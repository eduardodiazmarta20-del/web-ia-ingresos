export type SearchIntent = "informacional" | "comercial" | "transaccional" | "comparativa";

export type SeoArticle = {
  id: number;
  cluster: string;
  subniche: string;
  keyword: string;
  slug: string;
  title: string;
  intent: SearchIntent;
  funnel: "TOFU" | "MOFU" | "BOFU";
  affiliateAngle: string;
};

export const clusters = [
  {
    name: "Herramientas IA",
    slug: "herramientas-ia",
    pillar: "/blog/mejores-herramientas-ia-para-ganar-dinero",
    description: "Reviews, comparativas y playbooks para elegir software de IA con potencial de afiliacion."
  },
  {
    name: "Automatizacion",
    slug: "automatizacion",
    pillar: "/blog/automatizar-negocios-con-ia",
    description: "Flujos de trabajo con agentes, no-code, APIs y sistemas recurrentes para empresas y creadores."
  },
  {
    name: "SaaS",
    slug: "saas",
    pillar: "/blog/crear-saas-con-ia-sin-equipo",
    description: "Ideas, validacion, pricing y growth de micro SaaS apoyados en IA."
  },
  {
    name: "Ingresos online",
    slug: "ingresos-online",
    pillar: "/blog/ganar-dinero-online-con-ia",
    description: "Modelos de monetizacion, servicios, productos digitales, afiliados y contenido programatico."
  }
] as const;

const tools = [
  ["mejores herramientas IA para ganar dinero en 2026", "mejores-herramientas-ia-para-ganar-dinero", "Las mejores herramientas IA para ganar dinero en 2026", "comercial"],
  ["herramientas IA para crear contenido rentable", "herramientas-ia-crear-contenido-rentable", "Herramientas IA para crear contenido rentable paso a paso", "comercial"],
  ["mejor IA para crear ebooks y venderlos online", "mejor-ia-crear-ebooks-vender-online", "Mejor IA para crear ebooks y venderlos online", "comercial"],
  ["herramientas IA para afiliados principiantes", "herramientas-ia-afiliados-principiantes", "Herramientas IA para afiliados principiantes", "comercial"],
  ["IA para hacer videos cortos monetizables", "ia-hacer-videos-cortos-monetizables", "IA para hacer videos cortos monetizables", "informacional"],
  ["mejores chatbots IA para captar leads", "mejores-chatbots-ia-captar-leads", "Mejores chatbots IA para captar leads", "comparativa"],
  ["herramientas IA para escribir newsletters", "herramientas-ia-escribir-newsletters", "Herramientas IA para escribir newsletters rentables", "comercial"],
  ["IA para crear landing pages que convierten", "ia-crear-landing-pages-convierten", "IA para crear landing pages que convierten", "comercial"],
  ["software IA para analizar keywords long tail", "software-ia-analizar-keywords-long-tail", "Software IA para analizar keywords long-tail", "comparativa"],
  ["herramientas IA para generar imagenes de producto", "herramientas-ia-generar-imagenes-producto", "Herramientas IA para generar imagenes de producto", "comercial"],
  ["mejor IA para crear cursos online", "mejor-ia-crear-cursos-online", "Mejor IA para crear cursos online", "comercial"],
  ["IA para transcribir y vender servicios", "ia-transcribir-vender-servicios", "IA para transcribir y vender servicios", "informacional"],
  ["herramientas IA para research de nichos", "herramientas-ia-research-nichos", "Herramientas IA para research de nichos rentables", "comercial"],
  ["IA para redactar anuncios de afiliados", "ia-redactar-anuncios-afiliados", "IA para redactar anuncios de afiliados", "informacional"],
  ["herramientas IA para crear marcas personales", "herramientas-ia-crear-marcas-personales", "Herramientas IA para crear marcas personales", "comercial"],
  ["mejores extensiones IA para productividad", "mejores-extensiones-ia-productividad", "Mejores extensiones IA para productividad monetizable", "comparativa"],
  ["IA para crear podcasts con poco presupuesto", "ia-crear-podcasts-poco-presupuesto", "IA para crear podcasts con poco presupuesto", "informacional"],
  ["herramientas IA para crear plantillas digitales", "herramientas-ia-crear-plantillas-digitales", "Herramientas IA para crear plantillas digitales", "comercial"],
  ["IA para mejorar conversiones de ecommerce", "ia-mejorar-conversiones-ecommerce", "IA para mejorar conversiones de ecommerce", "informacional"],
  ["mejores herramientas IA para freelancers", "mejores-herramientas-ia-freelancers", "Mejores herramientas IA para freelancers", "comercial"],
  ["IA para crear prompts que se venden", "ia-crear-prompts-que-se-venden", "IA para crear prompts que se venden", "informacional"],
  ["herramientas IA para hacer auditorias SEO", "herramientas-ia-hacer-auditorias-seo", "Herramientas IA para hacer auditorias SEO", "comercial"],
  ["IA para crear assets de videojuegos indie", "ia-crear-assets-videojuegos-indie", "IA para crear assets de videojuegos indie", "informacional"],
  ["mejor IA para traducir webs monetizadas", "mejor-ia-traducir-webs-monetizadas", "Mejor IA para traducir webs monetizadas", "comparativa"],
  ["herramientas IA baratas para emprendedores", "herramientas-ia-baratas-emprendedores", "Herramientas IA baratas para emprendedores", "comercial"]
] as const;

const automation = [
  ["como automatizar un negocio con IA", "como-automatizar-negocio-con-ia", "Como automatizar un negocio con IA", "informacional"],
  ["automatizacion IA para agencias pequeñas", "automatizacion-ia-agencias-pequenas", "Automatizacion IA para agencias pequeñas", "comercial"],
  ["flujos no-code con IA para vender servicios", "flujos-no-code-ia-vender-servicios", "Flujos no-code con IA para vender servicios", "informacional"],
  ["automatizar atencion al cliente con IA", "automatizar-atencion-cliente-ia", "Automatizar atencion al cliente con IA", "comercial"],
  ["automatizar generacion de leads con IA", "automatizar-generacion-leads-ia", "Automatizar generacion de leads con IA", "comercial"],
  ["automatizacion IA para inmobiliarias", "automatizacion-ia-inmobiliarias", "Automatizacion IA para inmobiliarias", "transaccional"],
  ["automatizar informes semanales con IA", "automatizar-informes-semanales-ia", "Automatizar informes semanales con IA", "informacional"],
  ["agentes IA para ventas B2B", "agentes-ia-ventas-b2b", "Agentes IA para ventas B2B", "comercial"],
  ["automatizar publicaciones en redes con IA", "automatizar-publicaciones-redes-ia", "Automatizar publicaciones en redes con IA", "informacional"],
  ["automatizacion IA para restaurantes", "automatizacion-ia-restaurantes", "Automatizacion IA para restaurantes", "transaccional"],
  ["automatizar captacion de clientes freelance", "automatizar-captacion-clientes-freelance", "Automatizar captacion de clientes freelance con IA", "informacional"],
  ["sistemas IA para responder emails", "sistemas-ia-responder-emails", "Sistemas IA para responder emails automaticamente", "comercial"],
  ["automatizar creacion de contenido SEO", "automatizar-creacion-contenido-seo", "Automatizar creacion de contenido SEO con IA", "informacional"],
  ["automatizacion IA con Zapier y Make", "automatizacion-ia-zapier-make", "Automatizacion IA con Zapier y Make", "comparativa"],
  ["automatizar facturas y cobros con IA", "automatizar-facturas-cobros-ia", "Automatizar facturas y cobros con IA", "comercial"],
  ["automatizar prospeccion en LinkedIn con IA", "automatizar-prospeccion-linkedin-ia", "Automatizar prospeccion en LinkedIn con IA", "informacional"],
  ["automatizacion IA para ecommerce", "automatizacion-ia-ecommerce", "Automatizacion IA para ecommerce", "transaccional"],
  ["automatizar soporte con base de conocimiento IA", "automatizar-soporte-base-conocimiento-ia", "Automatizar soporte con base de conocimiento IA", "comercial"],
  ["automatizacion IA para consultores", "automatizacion-ia-consultores", "Automatizacion IA para consultores", "transaccional"],
  ["crear agente IA para tareas repetitivas", "crear-agente-ia-tareas-repetitivas", "Crear un agente IA para tareas repetitivas", "informacional"],
  ["automatizar onboarding de clientes con IA", "automatizar-onboarding-clientes-ia", "Automatizar onboarding de clientes con IA", "comercial"],
  ["automatizacion IA para academias online", "automatizacion-ia-academias-online", "Automatizacion IA para academias online", "transaccional"],
  ["automatizar analisis de competencia con IA", "automatizar-analisis-competencia-ia", "Automatizar analisis de competencia con IA", "informacional"],
  ["automatizacion IA rentable para pymes", "automatizacion-ia-rentable-pymes", "Automatizacion IA rentable para pymes", "comercial"],
  ["servicio de automatizacion IA para vender", "servicio-automatizacion-ia-para-vender", "Servicio de automatizacion IA para vender", "transaccional"]
] as const;

const saas = [
  ["crear micro SaaS con IA", "crear-micro-saas-con-ia", "Crear un micro SaaS con IA desde cero", "informacional"],
  ["ideas SaaS con IA para 2026", "ideas-saas-con-ia-2026", "Ideas SaaS con IA para 2026", "informacional"],
  ["validar idea SaaS con inteligencia artificial", "validar-idea-saas-inteligencia-artificial", "Validar una idea SaaS con inteligencia artificial", "informacional"],
  ["SaaS IA para nichos locales", "saas-ia-nichos-locales", "SaaS IA para nichos locales", "informacional"],
  ["crear SaaS sin programar con IA", "crear-saas-sin-programar-con-ia", "Crear un SaaS sin programar con IA", "informacional"],
  ["pricing para micro SaaS con IA", "pricing-micro-saas-con-ia", "Pricing para micro SaaS con IA", "informacional"],
  ["SaaS de automatizacion para agencias", "saas-automatizacion-agencias", "SaaS de automatizacion para agencias", "comercial"],
  ["SaaS IA para creadores de contenido", "saas-ia-creadores-contenido", "SaaS IA para creadores de contenido", "informacional"],
  ["crear MVP SaaS con IA en 7 dias", "crear-mvp-saas-ia-7-dias", "Crear un MVP SaaS con IA en 7 dias", "informacional"],
  ["SaaS IA para analisis de reseñas", "saas-ia-analisis-resenas", "SaaS IA para analisis de reseñas", "informacional"],
  ["micro SaaS para afiliados con IA", "micro-saas-afiliados-ia", "Micro SaaS para afiliados con IA", "informacional"],
  ["SaaS IA para generar propuestas comerciales", "saas-ia-generar-propuestas-comerciales", "SaaS IA para generar propuestas comerciales", "comercial"],
  ["como vender un SaaS IA B2B", "como-vender-saas-ia-b2b", "Como vender un SaaS IA B2B", "informacional"],
  ["SaaS IA para SEO programatico", "saas-ia-seo-programatico", "SaaS IA para SEO programatico", "informacional"],
  ["crear dashboard SaaS con IA", "crear-dashboard-saas-con-ia", "Crear dashboard SaaS con IA", "informacional"],
  ["SaaS IA para resumes y CV", "saas-ia-resumes-cv", "SaaS IA para resumes y CV", "informacional"],
  ["SaaS IA para abogados pequeños", "saas-ia-abogados-pequenos", "SaaS IA para abogados pequeños", "transaccional"],
  ["SaaS IA para coaches online", "saas-ia-coaches-online", "SaaS IA para coaches online", "transaccional"],
  ["SaaS IA con Stripe y suscripciones", "saas-ia-stripe-suscripciones", "SaaS IA con Stripe y suscripciones", "comercial"],
  ["crear waitlist para SaaS IA", "crear-waitlist-saas-ia", "Crear waitlist para SaaS IA", "informacional"],
  ["growth loops para SaaS IA", "growth-loops-saas-ia", "Growth loops para SaaS IA", "informacional"],
  ["SaaS IA para generar contratos simples", "saas-ia-generar-contratos-simples", "SaaS IA para generar contratos simples", "transaccional"],
  ["SaaS IA vertical rentable", "saas-ia-vertical-rentable", "SaaS IA vertical rentable", "informacional"],
  ["SaaS IA para productividad de equipos", "saas-ia-productividad-equipos", "SaaS IA para productividad de equipos", "comercial"],
  ["plantilla para lanzar SaaS IA", "plantilla-lanzar-saas-ia", "Plantilla para lanzar SaaS IA", "transaccional"]
] as const;

const onlineIncome = [
  ["ganar dinero online con IA desde casa", "ganar-dinero-online-ia-desde-casa", "Ganar dinero online con IA desde casa", "informacional"],
  ["como ganar dinero con ChatGPT en español", "como-ganar-dinero-chatgpt-espanol", "Como ganar dinero con ChatGPT en español", "informacional"],
  ["ingresos pasivos con IA para principiantes", "ingresos-pasivos-ia-principiantes", "Ingresos pasivos con IA para principiantes", "informacional"],
  ["vender servicios con IA sin experiencia", "vender-servicios-ia-sin-experiencia", "Vender servicios con IA sin experiencia", "informacional"],
  ["crear blog con IA y monetizarlo", "crear-blog-ia-monetizarlo", "Crear un blog con IA y monetizarlo", "informacional"],
  ["marketing de afiliados con IA", "marketing-afiliados-con-ia", "Marketing de afiliados con IA", "informacional"],
  ["ganar dinero con prompts de IA", "ganar-dinero-prompts-ia", "Ganar dinero con prompts de IA", "informacional"],
  ["crear productos digitales con IA", "crear-productos-digitales-con-ia", "Crear productos digitales con IA", "informacional"],
  ["ganar dinero con imagenes IA", "ganar-dinero-imagenes-ia", "Ganar dinero con imagenes IA", "informacional"],
  ["monetizar newsletter con IA", "monetizar-newsletter-con-ia", "Monetizar newsletter con IA", "informacional"],
  ["nicho rentable IA para blog", "nicho-rentable-ia-para-blog", "Nicho rentable IA para blog", "informacional"],
  ["ganar dinero con automatizaciones IA", "ganar-dinero-automatizaciones-ia", "Ganar dinero con automatizaciones IA", "informacional"],
  ["servicios IA que puedes vender a pymes", "servicios-ia-vender-pymes", "Servicios IA que puedes vender a pymes", "transaccional"],
  ["crear canal de YouTube con IA", "crear-canal-youtube-con-ia", "Crear canal de YouTube con IA", "informacional"],
  ["monetizar TikTok con herramientas IA", "monetizar-tiktok-herramientas-ia", "Monetizar TikTok con herramientas IA", "informacional"],
  ["ganar dinero con traducciones IA", "ganar-dinero-traducciones-ia", "Ganar dinero con traducciones IA", "informacional"],
  ["crear agencia IA rentable", "crear-agencia-ia-rentable", "Crear agencia IA rentable", "transaccional"],
  ["ingresos online con SEO programatico IA", "ingresos-online-seo-programatico-ia", "Ingresos online con SEO programatico IA", "informacional"],
  ["ganar dinero con cursos creados por IA", "ganar-dinero-cursos-creados-ia", "Ganar dinero con cursos creados por IA", "informacional"],
  ["monetizar comunidad con IA", "monetizar-comunidad-con-ia", "Monetizar comunidad con IA", "informacional"],
  ["ganar dinero con IA y Notion templates", "ganar-dinero-ia-notion-templates", "Ganar dinero con IA y Notion templates", "informacional"],
  ["crear comparativas afiliadas con IA", "crear-comparativas-afiliadas-ia", "Crear comparativas afiliadas con IA", "informacional"],
  ["ganar dinero con IA en Fiverr", "ganar-dinero-ia-fiverr", "Ganar dinero con IA en Fiverr", "informacional"],
  ["modelos de negocio IA rentables", "modelos-negocio-ia-rentables", "Modelos de negocio IA rentables", "informacional"],
  ["plan de 30 dias para ganar dinero con IA", "plan-30-dias-ganar-dinero-ia", "Plan de 30 dias para ganar dinero con IA", "transaccional"]
] as const;

const mapRows = (
  rows: readonly (readonly [string, string, string, string])[],
  cluster: string,
  subniche: string,
  start: number,
  affiliateAngle: string
): SeoArticle[] =>
  rows.map(([keyword, slug, title, intent], index) => ({
    id: start + index,
    cluster,
    subniche,
    keyword,
    slug,
    title,
    intent: intent as SearchIntent,
    funnel: intent === "transaccional" ? "BOFU" : intent === "comercial" || intent === "comparativa" ? "MOFU" : "TOFU",
    affiliateAngle
  }));

export const seoArticles: SeoArticle[] = [
  ...mapRows(tools, "Herramientas IA", "herramientas IA", 1, "comparativas de SaaS, trials y creditos promocionales"),
  ...mapRows(automation, "Automatizacion", "automatizacion", 26, "templates, consultoria operativa y software no-code"),
  ...mapRows(saas, "SaaS", "SaaS", 51, "builders, hosting, pagos recurrentes y analytics"),
  ...mapRows(onlineIncome, "Ingresos online", "ingresos online", 76, "afiliados, lead magnets, cursos y productos digitales")
];

export const featuredArticles = seoArticles.filter((article) => [1, 5, 13, 26, 38, 51, 59, 69, 76, 82, 92, 100].includes(article.id));

export const getArticleBySlug = (slug: string) => seoArticles.find((article) => article.slug === slug);

export const relatedArticles = (article: SeoArticle) =>
  seoArticles.filter((item) => item.cluster === article.cluster && item.slug !== article.slug).slice(0, 4);
