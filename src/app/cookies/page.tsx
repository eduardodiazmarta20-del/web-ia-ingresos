import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-ink">Cookies</h1>
        <p className="mt-5 leading-8 text-ink-soft">
          Configura un gestor de consentimiento antes de activar AdSense, Analytics o pixels de afiliacion en produccion.
        </p>
      </main>
      <Footer />
    </>
  );
}
