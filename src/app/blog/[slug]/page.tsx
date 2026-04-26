import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AffiliateCard } from "@/components/AffiliateCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getArticleBySlug, relatedArticles, seoArticles } from "@/data/seo-plan";
import { articleDescription, buildArticleSections } from "@/lib/article-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: articleDescription(article),
    alternates: { canonical: `/blog/${article.slug}` },
    keywords: [article.keyword, article.cluster, article.subniche, "IA para ganar dinero"]
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const sections = buildArticleSections(article);
  const related = relatedArticles(article);

  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <a href="/blog" className="text-sm font-semibold text-cyanbrand">
            Volver al blog
          </a>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyanbrand">{article.cluster}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink-soft">{articleDescription(article)}</p>

          <div className="mt-8 grid gap-3 rounded-lg border border-line bg-mist p-5 text-sm text-ink-soft sm:grid-cols-3">
            <div>
              <p className="font-semibold text-ink">Keyword</p>
              <p className="mt-1">{article.keyword}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Intencion</p>
              <p className="mt-1">{article.intent}</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Embudo</p>
              <p className="mt-1">{article.funnel}</p>
            </div>
          </div>

          <AdSlot slot="2345678901" label="AdSense articulo top" />

          <div className="prose prose-slate mt-10 max-w-none prose-headings:text-ink prose-a:text-cyanbrand">
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <h2>Plan rapido de ejecucion</h2>
            <ol>
              <li>Publica una respuesta directa en los primeros 120 palabras para capturar featured snippets.</li>
              <li>Añade una tabla con herramientas, precios, pros, contras y caso de uso ideal.</li>
              <li>Incluye captacion de email antes del ultimo tercio del articulo.</li>
              <li>Enlaza a tres articulos relacionados del mismo cluster y a una pagina pilar.</li>
            </ol>
          </div>

          <div className="mt-10">
            <AffiliateCard
              name="Stack recomendado para monetizar este tema"
              href="https://example.com/affiliate-stack"
              description={`Promociona herramientas alineadas con ${article.subniche}: ${article.affiliateAngle}.`}
              cta="Abrir recurso afiliado"
            />
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-ink">Enlaces internos automaticos</h2>
            <div className="mt-5 grid gap-3">
              {related.map((item) => (
                <a key={item.slug} href={`/blog/${item.slug}`} className="rounded-lg border border-line bg-mist p-4 text-sm font-semibold text-ink transition hover:bg-white hover:shadow-soft">
                  {item.title}
                </a>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
