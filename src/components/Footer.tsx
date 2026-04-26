export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-ink-soft sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-semibold text-ink">IAparaGanar</p>
          <p className="mt-3 max-w-md">
            Sistema editorial programatico para monetizar busquedas sobre IA, SaaS, automatizacion e ingresos online.
          </p>
        </div>
        <div>
          <p className="font-semibold text-ink">Legal</p>
          <div className="mt-3 grid gap-2">
            <a href="/politica-privacidad">Privacidad</a>
            <a href="/cookies">Cookies</a>
            <a href="/aviso-legal">Aviso legal</a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-ink">Monetizacion</p>
          <div className="mt-3 grid gap-2">
            <a href="#monetizacion">AdSense</a>
            <a href="#afiliados">Afiliados SaaS</a>
            <a href="#lead">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
