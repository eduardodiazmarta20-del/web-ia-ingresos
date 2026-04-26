# Arquitectura

## Stack

- Next.js App Router para SSG/ISR, metadata, sitemap y rutas dinamicas.
- Tailwind CSS para un diseño premium, rapido y mantenible.
- Three.js con React Three Fiber para el hero 3D interactivo.
- Datos SEO centralizados en `src/data/seo-plan.ts`.
- Scripts editoriales en `src/scripts/`.

## Flujo editorial automatizado

1. `seoArticles` define keyword, URL, titulo, intencion, cluster, funnel y angulo de afiliado.
2. `/blog` lista los 100 articulos y agrupa por cluster.
3. `/blog/[slug]` genera paginas SEO estaticas con metadata, AdSense, afiliados e interlinking.
4. `npm run generate:content` crea borradores markdown para enriquecerlos con IA.
5. `npm run refresh:content` genera una cola de actualizacion de contenidos prioritarios.

## Escalabilidad a 1000+ articulos

- Convertir `seo-plan.ts` en fuente externa: Airtable, Google Sheets, Postgres o CMS headless.
- Generar briefs con IA por lotes y pasar cada borrador por QA editorial.
- Usar ISR o builds por segmentos si el volumen supera tiempos de build aceptables.
- Separar clusters por vertical para lanzar nichos derivados sin duplicar componentes.
- Medir posicion, CTR y RPM por URL para priorizar updates.

## Monetizacion

- AdSense: slots en home, top de articulo, in-content y sidebar futura.
- Afiliados SaaS: tarjetas con `rel="sponsored nofollow"` y CTAs por intencion.
- Leads: formulario base para conectar a Beehiiv, ConvertKit, Brevo o CRM.
- CRO: CTAs BOFU arriba, tablas comparativas, bloques de decision y enlaces internos.

## Automatizacion con IA

Pipeline recomendado:

1. Ingesta de keywords desde Search Console, Ahrefs, Semrush o scraping permitido.
2. Clasificacion por cluster, intencion y dificultad.
3. Generacion de brief con H2, FAQs, entidades, enlaces internos y oferta.
4. Redaccion asistida con IA y revision humana.
5. Publicacion programada.
6. Refresh cada 60-90 dias segun perdida de impresiones o CTR bajo.
