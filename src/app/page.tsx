import { AffiliateCard } from "@/components/AffiliateCard";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard, FeatureCard, StatCard } from "@/components/Cards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LeadCapture } from "@/components/LeadCapture";
import { clusters, featuredArticles, seoArticles } from "@/data/seo-plan";

const metrics = [
  ["100", "articulos SEO iniciales"],
  ["4", "clusters de alto RPM"],
  ["1000+", "URLs escalables"],
  ["3", "vias de monetizacion"]
];

const automations = [
  "Generacion de briefs con keyword, H2, FAQ y enlaces internos",
  "Publicacion programada por estado editorial",
  "Interlinking automatico por cluster, intencion y embudo",
  "Refresh trimestral con queries de Search Console"
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="premium-grid border-b border-line">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyanbrand">IA para ganar dinero</p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Una web 3D automatizada para convertir busquedas de IA en ingresos.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
                Arquitectura Next.js con contenido programatico, Three.js, AdSense, afiliados SaaS y captacion de leads para escalar de 100 a 1000 articulos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="rounded-lg bg-ink px-5 py-3 font-semibold text-white shadow-soft" href="/blog">
                  Ver blog SEO
                </a>
                <a className="rounded-lg border border-line bg-white px-5 py-3 font-semibold text-ink shadow-soft" href="#clusters">
                  Explorar clusters
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 shadow-premium">
              <div className="rounded-xl bg-ink p-5 text-white">
                <div className="grid grid-cols-3 gap-3">
                  {["SEO", "IA", "RPM", "CTR", "Leads", "SaaS", "Ads", "API", "CRM"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/10 p-4 text-center text-sm font-semibold"
                      style={{ transform: `translateY(${index % 2 === 0 ? 0 : 12}px)` }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-xl bg-white p-5 text-ink">
                  <p className="text-sm font-semibold text-cyanbrand">Motor programatico</p>
                  <p className="mt-2 text-2xl font-bold tracking-tight">100 URLs listas para indexar</p>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    Keywords, rutas, metadata, intencion, afiliados e interlinking generados desde una unica fuente de datos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {metrics.map(([value, label]) => (
              <StatCard key={label} value={value} label={label} />
            ))}
          </div>
        </section>

        <section id="clusters" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-cyanbrand">Topic clusters</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Estructura SEO completa para autoridad topical</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {clusters.map((cluster) => (
                <a key={cluster.slug} href={cluster.pillar}>
                  <FeatureCard
                    title={`${cluster.name} (${seoArticles.filter((article) => article.cluster === cluster.name).length} URLs)`}
                    description={cluster.description}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-cyanbrand">Contenido</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">Articulos prioritarios</h2>
              </div>
              <a href="/blog" className="text-sm font-semibold text-cyanbrand">
                Ver los 100 articulos
              </a>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.slice(0, 6).map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        <AdSlot slot="1234567890" label="AdSense home in-feed" />

        <section id="automatizacion" className="py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[0.8fr_1fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold text-cyanbrand">Automatizacion editorial</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">Pipeline preparado para contenido con IA</h2>
              <p className="mt-4 text-ink-soft">El sistema separa estrategia SEO, generacion, QA, interlinking y publicacion para crecer sin romper calidad.</p>
            </div>
            <div className="grid gap-3">
              {automations.map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white p-4 shadow-soft">
                  <p className="font-medium text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="monetizacion" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-cyanbrand">Monetizacion</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">AdSense, afiliados SaaS y leads en el mismo embudo</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <AffiliateCard name="SaaS de automatizacion" href="https://example.com/affiliate-automation" description="Promociona herramientas no-code, agentes IA y CRM para articulos MOFU y BOFU." />
              <AffiliateCard name="Builders de contenido IA" href="https://example.com/affiliate-content-ai" description="Oferta trials para creadores, freelancers y equipos de marketing." />
              <AffiliateCard name="Hosting y pagos para SaaS" href="https://example.com/affiliate-saas-stack" description="Monetiza guias de lanzamiento SaaS con stack tecnico recurrente." />
            </div>
          </div>
        </section>

        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
