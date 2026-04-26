import { seoArticles } from "../data/seo-plan";

type RefreshTask = {
  slug: string;
  action: string;
  reason: string;
};

function buildRefreshQueue(): RefreshTask[] {
  return seoArticles
    .filter((article) => article.funnel !== "TOFU" || article.id % 5 === 0)
    .map((article) => ({
      slug: article.slug,
      action: "Actualizar intro, FAQs, tabla de herramientas y CTAs",
      reason: `${article.intent} / ${article.funnel} / ${article.cluster}`
    }));
}

const queue = buildRefreshQueue();

console.table(queue.slice(0, 25));
console.log(`Refresh queue ready: ${queue.length} priority URLs`);
