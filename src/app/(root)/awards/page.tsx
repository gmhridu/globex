import type { Metadata } from "next";
import { Hero } from "@/components/awards/hero/hero";
import { StatsBand } from "@/components/awards/stats-band/stats-band";
import { TheRecognition } from "@/components/awards/the-recognition/the-recognition";
import { Criteria } from "@/components/awards/criteria/criteria";
import { AboutOrganisation } from "@/components/awards/about-organisation/about-organisation";
import { EventGallery } from "@/components/awards/event-gallery/event-gallery";
import { EventFilms } from "@/components/awards/event-films/event-films";
import { CtaBand } from "@/components/awards/cta-band/cta-band";
import { AWARD_IMAGES } from "@/constant/awards";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const description =
  "International recognition for We Are Globex: International Manufacturing Growth Partner of the Year at the Global Brand Awards 2026 (Global Brands Magazine). Discover our award-winning work building sustainable distributor, buyer, and private-label relationships.";

export const metadata: Metadata = {
  title:
    "International Manufacturing Growth Partner of the Year | Global Brand Awards 2026 | We Are Globex",
  description,
  keywords: [
    "We Are Globex awards",
    "Global Brand Awards 2026",
    "International Manufacturing Growth Partner of the Year",
    "Global Brands Magazine winner",
    "manufacturing growth consultancy",
    "award-winning export partner",
    "Dubai Global Brand Awards",
    "manufacturing distribution recognition",
    "distributor acquisition Europe Middle East",
  ],
  alternates: {
    canonical: "/awards",
  },
  openGraph: {
    title:
      "International Manufacturing Growth Partner of the Year | Global Brand Awards 2026 | We Are Globex",
    description,
    url: `${SITE_URL}/awards`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: AWARD_IMAGES.dubaiHero,
        width: 1200,
        height: 630,
        alt: "We Are Globex - International Manufacturing Growth Partner of the Year 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "International Manufacturing Growth Partner of the Year | Global Brand Awards 2026 | We Are Globex",
    description,
    images: [AWARD_IMAGES.dubaiHero],
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
    <main className="min-h-screen bg-[#0d0f14] text-[#f0ede8] overflow-x-hidden">
      <Hero />
      <StatsBand />
      <TheRecognition />
      <Criteria />
      <AboutOrganisation />
      <EventGallery />
      <EventFilms />
      <CtaBand />
    </main>
  );
}
