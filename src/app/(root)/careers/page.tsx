import type { Metadata } from "next";
import { Apply } from "@/components/careers/apply/apply";
import { Hero } from "@/components/careers/hero/hero";
import { OpenPostions } from "@/components/careers/open-positions/open-positions";
import { PerksAndBenefits } from "@/components/careers/perks-and-benefits/perks-and-benefits";
import { ReadyToMakeImpact } from "@/components/careers/ready-to-make-impact/ready-to-make-impact";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1692154600992-463fa9b27abd?w=1800&h=900&fit=crop&auto=format";

const description =
  "Join the We Are Globex team. Open roles in international trade, export consulting, and business development — helping North American manufacturers expand into Europe and the Middle East from Dartford, Kent.";

export const metadata: Metadata = {
  title: "Careers at We Are Globex | Join the Export Strategy Team",
  description,
  keywords: [
    "careers",
    "jobs",
    "manufacturing export jobs",
    "international trade careers",
    "business development jobs",
    "market entry consultant",
    "distribution network jobs",
    "We Are Globex hiring",
    "Dartford Kent jobs",
    "export consulting careers",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at We Are Globex | Join the Export Strategy Team",
    description,
    url: `${SITE_URL}/careers`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Careers at We Are Globex - Join the export strategy team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at We Are Globex | Join the Export Strategy Team",
    description,
    images: [HERO_IMAGE],
    creator: "@weareglobex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "careers",
  classification: "Careers & Jobs",
};

export default function CarrerPage() {
  return (
    <main>
      <Hero />
      <ReadyToMakeImpact />
      <OpenPostions />
      <PerksAndBenefits />
      <Apply />
    </main>
  );
}