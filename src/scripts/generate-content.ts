import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { seoArticles } from "../data/seo-plan";
import { buildArticleSections } from "../lib/article-content";

const outputDir = path.join(process.cwd(), "content", "generated");

function toMarkdown(slug: string) {
  const article = seoArticles.find((item) => item.slug === slug);

  if (!article) {
    throw new Error(`Article not found: ${slug}`);
  }

  const sections = buildArticleSections(article);
  const body = sections
    .map((section) => `## ${section.title}\n\n${section.body}\n`)
    .join("\n");

  return `---
title: "${article.title}"
keyword: "${article.keyword}"
cluster: "${article.cluster}"
intent: "${article.intent}"
funnel: "${article.funnel}"
status: "draft"
---

# ${article.title}

${body}
## Monetizacion

- Inserta un bloque AdSense despues de la respuesta principal.
- Añade dos CTAs afiliados relacionados con ${article.affiliateAngle}.
- Captura email con un lead magnet del cluster ${article.cluster}.

## Interlinking

${seoArticles
  .filter((item) => item.cluster === article.cluster && item.slug !== article.slug)
  .slice(0, 5)
  .map((item) => `- [${item.title}](/blog/${item.slug})`)
  .join("\n")}
`;
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const targetSlug = process.argv[2];
  const targets = targetSlug ? [targetSlug] : seoArticles.map((article) => article.slug);

  await Promise.all(
    targets.map(async (slug) => {
      const markdown = toMarkdown(slug);
      await writeFile(path.join(outputDir, `${slug}.md`), markdown, "utf8");
    })
  );

  console.log(`Generated ${targets.length} drafts in ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
