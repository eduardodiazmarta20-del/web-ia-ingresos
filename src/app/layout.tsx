import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://iaparaganar.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IAparaGanar | IA para ganar dinero, automatizar y crear SaaS",
    template: "%s | IAparaGanar"
  },
  description: "Web automatizada sobre IA para ganar dinero: herramientas IA, automatizacion, SaaS, ingresos online, SEO programatico y afiliados.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "IAparaGanar",
    description: "Playbooks, comparativas y automatizaciones para monetizar inteligencia artificial.",
    url: siteUrl,
    siteName: "IAparaGanar",
    locale: "es_ES",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="es" className={inter.variable}>
      <body>
        {adsenseClient ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
