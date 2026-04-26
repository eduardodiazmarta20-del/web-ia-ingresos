import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { clusters, seoArticles } from "@/data/seo-plan";

export const metadata: Metadata = {
  title: "Blog SEO sobre IA para ganar dinero",
  description: "100 articulos SEO long-tail sobre herramientas IA, automatizacion, SaaS e ingresos online."
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanbrand">100 URLs iniciales</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Mapa editorial SEO</h1>
          <p className="mt-5 text-lg leading-8 text-ink-soft">
            Cada URL incluye keyword long-tail, titulo, intencion de busqueda, cluster y angulo de monetizacion para publicar de forma programatica.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {clusters.map((cluster) => (
            <a key={cluster.slug} href={`#${cluster.slug}`} className="rounded-lg border border-line bg-white p-5 shadow-soft">
              <p className="text-lg font-semibold text-ink">{cluster.name}</p>
              <p className="mt-2 text-sm text-ink-soft">{seoArticles.filter((article) => article.cluster === cluster.name).length} articulos</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-12">
          {clusters.map((cluster) => (
            <section key={cluster.slug} id={cluster.slug}>
              <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-semibold text-ink">{cluster.name}</h2>
                  <p className="mt-2 text-sm text-ink-soft">{cluster.description}</p>
                </div>
                <a href={cluster.pillar} className="text-sm font-semibold text-cyanbrand">
                  Pilar del cluster
                </a>
              </div>
              <div className="grid gap-3">
                {seoArticles
                  .filter((article) => article.cluster === cluster.name)
                  .map((article) => (
                    <a key={article.slug} href={`/blog/${article.slug}`} className="grid gap-4 rounded-lg border border-line bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-premium md:grid-cols-[1fr_160px_130px] md:items-center">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyanbrand">{article.keyword}</p>
                        <h3 className="mt-2 font-semibold text-ink">{article.title}</h3>
                        <p className="mt-1 text-sm text-ink-soft">/blog/{article.slug}</p>
                      </div>
                      <span className="rounded-md bg-sky-50 px-3 py-2 text-center text-sm font-medium text-sky-700">{article.intent}</span>
                      <span className="rounded-md bg-emerald-50 px-3 py-2 text-center text-sm font-medium text-emerald-700">{article.funnel}</span>
                    </a>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
