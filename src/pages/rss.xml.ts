import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('articulos');
  return rss({
    title: 'IAparaGanar',
    description: 'Guía en español para ganar dinero online con inteligencia artificial',
    site: context.site ?? 'https://iaparaganar.com',
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/articulos/${post.slug}`,
      })),
    customData: `<language>es-ES</language>`,
  });
}
