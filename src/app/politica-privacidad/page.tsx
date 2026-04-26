import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-ink">Politica de privacidad</h1>
        <p className="mt-5 leading-8 text-ink-soft">
          Esta web puede usar analitica, formularios de email, enlaces afiliados y publicidad contextual. Sustituye este texto por tu aviso legal definitivo antes de publicar.
        </p>
      </main>
      <Footer />
    </>
  );
}
