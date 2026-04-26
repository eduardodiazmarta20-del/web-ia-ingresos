const nav = [
  ["Clusters", "#clusters"],
  ["Blog", "/blog"],
  ["Monetizacion", "#monetizacion"],
  ["Automatizacion", "#automatizacion"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-mist/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-sm text-white">IA</span>
          <span>IAparaGanar</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#lead"
          className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-900"
        >
          Captar leads
        </a>
      </div>
    </header>
  );
}
