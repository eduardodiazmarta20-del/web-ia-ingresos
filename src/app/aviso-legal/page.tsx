import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-ink">Aviso legal</h1>
        <p className="mt-5 leading-8 text-ink-soft">
          Completa razon social, contacto, jurisdiccion, condiciones de uso y disclosure de afiliados antes del lanzamiento publico.
        </p>
      </main>
      <Footer />
    </>
  );
}
