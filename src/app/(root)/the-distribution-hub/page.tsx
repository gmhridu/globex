import type { Metadata } from "next";
import { Hero } from "@/components/the-distribution-hub/hero/hero";
import { CaseStudy } from "@/components/the-distribution-hub/case-study/case-study";
import { PartnerTypes } from "@/components/the-distribution-hub/partner-types/partner-types";
import { Process } from "@/components/the-distribution-hub/process/process";
import { WhyGlobex } from "@/components/the-distribution-hub/why-globex/why-globex";
import { Faq } from "@/components/the-distribution-hub/faq/faq";
import { Cta } from "@/components/the-distribution-hub/cta/cta";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=1200&h=630&fit=crop&auto=format";

const description =
  "Find the right European or Middle East distribution partner. We build active trading relationships with qualified distributors, importers, retail buyers, and strategic accounts across 47 markets — not introductions, not databases.";

export const metadata: Metadata = {
  title: "The Distribution Hub | Europe & Middle East Distribution Partners",
  description,
  keywords: [
    "European distribution partners",
    "Middle East distributor",
    "find a distributor Europe",
    "master distributor",
    "importer partnership",
    "retail buyer access",
    "private label buyers Europe",
    "GCC distribution network",
    "manufacturer distributor matching",
    "channel distributor",
  ],
  alternates: {
    canonical: "/the-distribution-hub",
  },
  openGraph: {
    title: "The Distribution Hub | Europe & Middle East Distribution Partners",
    description,
    url: `${SITE_URL}/the-distribution-hub`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "The Distribution Hub - European & Middle East distribution partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Distribution Hub | Europe & Middle East Distribution Partners",
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
  category: "distribution",
  classification: "Distribution Solutions",
};

export default function TheDistributionHubPage() {
  return (
    <>
      <main>
        <Hero />
        <PartnerTypes />
        <WhyGlobex />
        <Process />
        <CaseStudy />
        <Faq />
        <Cta />
      </main>
    </>
  );
}