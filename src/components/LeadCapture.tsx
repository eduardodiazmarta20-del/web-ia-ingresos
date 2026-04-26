export function LeadCapture() {
  return (
    <section id="lead" className="bg-ink py-16 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-mintbrand">Lead magnet</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Recibe el blueprint de 30 dias para monetizar IA</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Captura emails con una guia descargable, segmenta por subnicho y monetiza con secuencias de afiliados SaaS.
          </p>
        </div>
        <form className="glass grid gap-3 rounded-lg p-4">
          <input className="rounded-lg border border-line px-4 py-3 text-ink outline-none" placeholder="tu@email.com" type="email" />
          <button className="rounded-lg bg-cyanbrand px-5 py-3 font-semibold text-white transition hover:bg-sky-600" type="button">
            Descargar blueprint
          </button>
          <p className="text-xs text-slate-300">Conecta este formulario a Beehiiv, ConvertKit, Brevo o tu CRM.</p>
        </form>
      </div>
    </section>
  );
}
