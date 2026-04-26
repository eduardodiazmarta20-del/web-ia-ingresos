import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

const staticRoutes = [
  '/',
  '/articulos',
  '/comparativas',
  '/reviews',
  '/mejores-ia-ganar-dinero-2026',
  '/categoria/creadores-de-contenido',
  '/categoria/emprendedores',
  '/categoria/freelancers',
  '/sobre-nosotros',
  '/contacto',
  '/politica-privacidad',
  '/cookies',
  '/aviso-legal',
];

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const formatUrl = (base: string | URL, path: string) => new URL(path, base).toString();

export async function GET(context: APIContext) {
  const site = context.site ?? 'https://iaparaganar.com';
  const [articulos, comparativas, reviews] = await Promise.all([
    getCollection('articulos'),
    getCollection('comparativas'),
    getCollection('reviews'),
  ]);

  const entries = [
    ...staticRoutes.map((path) => ({
      loc: formatUrl(site, path),
      lastmod: undefined,
      changefreq: 'weekly',
      priority: path === '/' ? '1.0' : path === '/mejores-ia-ganar-dinero-2026' ? '0.95' : '0.75',
    })),
    ...articulos.map((entry) => ({
      loc: formatUrl(site, `/articulos/${entry.slug}`),
      lastmod: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
      changefreq: 'weekly',
      priority: '0.8',
    })),
    ...comparativas.map((entry) => ({
      loc: formatUrl(site, `/comparativas/${entry.slug}`),
      lastmod: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
      changefreq: 'weekly',
      priority: '0.78',
    })),
    ...reviews.map((entry) => ({
      loc: formatUrl(site, `/reviews/${entry.slug}`),
      lastmod: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
      changefreq: 'weekly',
      priority: '0.78',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (entry) => `  <url>\n` +
          `    <loc>${xmlEscape(entry.loc)}</loc>\n` +
          (entry.lastmod ? `    <lastmod>${entry.lastmod}</lastmod>\n` : '') +
          `    <changefreq>${entry.changefreq}</changefreq>\n` +
          `    <priority>${entry.priority}</priority>\n` +
          `  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
