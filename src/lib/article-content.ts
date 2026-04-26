import type { SeoArticle } from "@/data/seo-plan";

export function articleDescription(article: SeoArticle) {
  return `${article.title}: guia practica con estrategia SEO, automatizacion, monetizacion y pasos accionables para captar trafico organico.`;
}

export function buildArticleSections(article: SeoArticle) {
  return [
    {
      title: "Oportunidad del keyword",
      body: `La busqueda "${article.keyword}" pertenece al cluster ${article.cluster}. Su intencion es ${article.intent}, asi que la pagina debe resolver la duda principal, mostrar ejemplos concretos y guiar hacia una accion medible.`
    },
    {
      title: "Modelo de monetizacion",
      body: `El angulo recomendado es ${article.affiliateAngle}. En articulos TOFU conviene priorizar captacion de email; en MOFU, comparativas con tablas; en BOFU, llamadas a demos, trials y ofertas de afiliado.`
    },
    {
      title: "Estructura recomendada",
      body: "Usa una introduccion corta, pasos numerados, comparativa de herramientas, bloque de preguntas frecuentes, prueba de experiencia y enlaces internos hacia articulos del mismo cluster."
    },
    {
      title: "Checklist operativo",
      body: "Publica con schema Article y FAQ, añade un bloque AdSense tras la primera respuesta, coloca dos CTAs afiliados y revisa el contenido cada 60 dias con datos de Search Console."
    }
  ];
}
