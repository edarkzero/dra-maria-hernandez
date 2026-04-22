import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { PHONE_DISPLAY, INSTAGRAM_URL, MPPS_ID, COLEGIO_MEDICO_ID } from "@/lib/contact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://dra-maria-hernandez.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dra. Maria Hernandez N. — Consulta Médica Profesional",
    template: "%s | Dra. Maria Hernandez N.",
  },
  description:
    "Consultas médicas en línea con la Dra. Maria Hernandez N. Atención profesional y cercana para pacientes en Venezuela y el exterior por videollamada. Agenda tu cita por WhatsApp.",
  keywords: [
    "médico",
    "consulta médica online",
    "doctora Venezuela",
    "Maria Hernandez",
    "telemedicina",
    "consulta en línea",
    "salud",
    "videoconsulta",
  ],
  authors: [{ name: "Dra. Maria Hernandez N." }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: SITE_URL,
    siteName: "Dra. Maria Hernandez N.",
    title: "Dra. Maria Hernandez N. — Consulta Médica Profesional",
    description:
      "Consultas médicas en línea. Atención profesional y cercana por videollamada. Agenda por WhatsApp.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dra. Maria Hernandez N. — Consulta Médica Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Maria Hernandez N. — Consulta Médica Profesional",
    description:
      "Consultas médicas en línea. Agenda tu cita por WhatsApp.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#db2777",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Maria Hernandez N.",
  medicalSpecialty: "General Practice",
  telephone: PHONE_DISPLAY,
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
  address: {
    "@type": "PostalAddress",
    addressCountry: "VE",
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "MPPS",
      value: MPPS_ID,
    },
    {
      "@type": "PropertyValue",
      propertyID: "Colegio Médico",
      value: COLEGIO_MEDICO_ID,
    },
  ],
  availableService: {
    "@type": "MedicalTherapy",
    name: "Consulta médica en línea por videollamada",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-VE"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
