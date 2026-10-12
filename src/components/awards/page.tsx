import type { Metadata } from "next";
import { Hero } from "@/components/awards/hero/hero";
import { AwardsList } from "@/components/awards/awards-list/awards-list";
import { StatsBand } from "@/components/awards/stats-band/stats-band";
import { CtaBand } from "@/components/awards/cta-band/cta-band";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const description =
  "Independent recognition for We Are Globex: Business Consultancy of the Year (Business Awards UK) and International Manufacturing Growth Partner of the Year (Global Brands Magazine). Discover our 2026 award-winning work.";

export const metadata: Metadata = {
  title: "Awards & Recognition | 2026 Winner | We Are Globex",
  description,
  keywords: [
    "We Are Globex awards",
    "Business Consultancy of the Year 2026",
    "Greater London Business Awards",
    "Global Brand Awards 2026",
    "International Manufacturing Growth Partner",
    "manufacturing growth consultancy",
    "award-winning export partner",
    "manufacturing distribution recognition",
    "Business Awards UK winner",
    "Global Brands Magazine winner",
  ],
  alternates: {
    canonical: "/awards",
  },
  openGraph: {
    title: "Awards & Recognition | 2026 Winner | We Are Globex",
    description,
    url: `${SITE_URL}/awards`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logos/Globex_Logo_Reversed.png",
        width: 1200,
        height: 630,
        alt: "We Are Globex 2026 Awards and Independent Recognition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Recognition | 2026 Winner | We Are Globex",
    description,
    images: ["/logos/Globex_Logo_Reversed.png"],
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
  category: "awards",
  classification: "Awards & Recognition",
};

export default function AwardsPage() {
  return (
    <main>
      <Hero />
      <AwardsList />
      <StatsBand />
      <CtaBand />
    </main>
  );
}
