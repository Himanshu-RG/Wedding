import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { OG_IMAGE } from "@/components/sites/bibek-weds-ruchika/content";

const SITE_URL = "https://ruchika-weds-bibek.vercel.app";
const TITLE = "Ruchika weds Bibek — Wedding Invitation";
const DESCRIPTION =
  "Together with their families, Ruchika Das & Bibek Karn cordially invite you to celebrate their sacred wedding ceremony and auspicious festivities on 30th November 2026 in Biratnagar, Nepal. Tap to open the digital wedding invitation, ceremony timeline, and venue locations.";

// Same Google Fonts request the source page makes.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Dancing+Script:wght@600;700&family=Great+Vibes&family=Kalam:wght@400;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Marcellus&family=Martel:wght@400;600;700;800&family=Noto+Serif+Devanagari:wght@400;500;600;700&family=Playball&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Rozha+One&family=Yatra+One&display=swap";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Ruchika & Bibek" }],
  keywords: [
    "Ruchika and Bibek Wedding",
    "Ruchika Das",
    "Bibek Karn",
    "Wedding Invitation",
    "Digital Wedding Card",
    "Indian Wedding Invitation",
    "Biratnagar Wedding",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/assets/favicon.png", sizes: "512x512", type: "image/png" }] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Ruchika & Bibek Wedding Invitation",
    locale: "en_US",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [OG_IMAGE] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#702C35",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Browser extensions (highlighters, cursor tools) add attributes to <html> and <body>
    // before React loads; suppressHydrationWarning ignores those attribute-only differences.
    <html lang="en" suppressHydrationWarning>
      <Analytics/>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      {/* The page starts scroll-locked behind the palace doors. */}
      <body className="locked" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
