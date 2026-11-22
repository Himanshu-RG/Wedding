import type { Metadata } from "next";
import Invitation from "@/components/sites/bibek-weds-ruchika/Invitation";
import { OG_IMAGE, TRANSLATIONS } from "@/components/sites/bibek-weds-ruchika/content";

const seo = TRANSLATIONS.mai.seo;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/m" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: "ne_NP",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: seo.title }],
  },
};

/** Maithili version of the invitation. */
export default function MaithiliHome() {
  return <Invitation initialLanguage="mai" />;
}
