import type { SeoArticle } from "@/data/seo-plan";

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-5 shadow-soft">
      <p className="text-3xl font-bold tracking-tight text-ink">{value}</p>
      <p className="mt-2 text-sm text-ink-soft">{label}</p>
    </div>
  );
}

export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p>
    </div>
  );
}

export function ArticleCard({ article }: { article: SeoArticle }) {
  return (
    <a
      href={`/blog/${article.slug}`}
      className="block rounded-xl border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanbrand">{article.cluster}</p>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{article.title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink-soft">{article.keyword}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-md bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">{article.intent}</span>
        <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{article.funnel}</span>
      </div>
    </a>
  );
}
