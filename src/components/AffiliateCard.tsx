type AffiliateCardProps = {
  name: string;
  description: string;
  href: string;
  cta?: string;
};

export function AffiliateCard({ name, description, href, cta = "Ver herramienta" }: AffiliateCardProps) {
  return (
    <a
      id="afiliados"
      href={href}
      rel="sponsored nofollow"
      className="block rounded-lg border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">{name}</h3>
        <span className="rounded-md bg-mintbrand/12 px-3 py-1 text-xs font-semibold text-emerald-700">Afiliado</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-ink-soft">{description}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-cyanbrand">{cta}</span>
    </a>
  );
}
