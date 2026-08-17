import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novasestruturas.com.br"),
  title: "Novas Estruturas | Estruturas para Eventos",
  description:
    "Novas Estruturas — soluções profissionais em estruturas e montagem para eventos.",
  keywords: [
    "estruturas para eventos",
    "montagem de estruturas",
    "coberturas para eventos",
    "palcos",
    "estruturas metálicas",
    "Recife",
  ],
  openGraph: {
    title: "Novas Estruturas | Estruturas para Eventos",
    description:
      "Montagem de estruturas, coberturas, palcos e soluções personalizadas para eventos.",
    url: "https://novasestruturas.com.br",
    siteName: "Novas Estruturas",
    locale: "pt_BR",
    type: "website",
    images: ["/images/hero-arco-fogo-publico.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novas Estruturas | Estruturas para Eventos",
    description: "Estruturas que transformam eventos em experiências.",
    images: ["/images/hero-arco-fogo-publico.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Novas Estruturas",
  description:
    "Empresa especializada em montagem de estruturas para eventos: coberturas, palcos, estruturas corporativas e soluções personalizadas.",
  url: "https://novasestruturas.com.br",
  logo: "https://novasestruturas.com.br/images/logo-novas-estruturas.jpg",
  areaServed: "BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-bg text-text-primary">
        {children}
      </body>
    </html>
  );
}
