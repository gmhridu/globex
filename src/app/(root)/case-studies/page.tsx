import type { Metadata } from "next";
import { Hero } from "@/components/case-studies/hero/hero";
import { CategoryFilter } from "@/components/case-studies/category-filter/category-filter";
import { CaseStudiesList } from "@/components/case-studies/case-studies-list/case-studies-list";
import { AddingMoreSoon } from "@/components/case-studies/adding-more-soon/adding-more-soon";
import { CtaBand } from "@/components/case-studies/cta-band/cta-band";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const description =
  "Real manufacturers. Real markets. Real results. See how We Are Globex helps North American manufacturers secure European distribution, private label partnerships, and Middle East market entry — with active trading outcomes across 47+ markets.";

export const metadata: Metadata = {
  title: "Case Studies | Real Results for Manufacturers",
  description,
  keywords: [
    "manufacturing case studies",
    "market entry case studies",
    "European distribution case study",
    "private label case study",
    "Middle East market entry",
    "export strategy results",
    "manufacturer distribution network",
    "We Are Globex results",
    "manufacturing export success stories",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Real Results for Manufacturers",
    description,
    url: `${SITE_URL}/case-studies`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&h=630&fit=crop&auto=format",
        width: 1200,
        height: 630,
        alt: "We Are Globex case studies - real results for manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Real Results for Manufacturers",
    description,
    images: [
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1200&h=630&fit=crop&auto=format",
    ],
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
  category: "case-studies",
  classification: "Case Studies",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <Hero />
      <CategoryFilter />
      <CaseStudiesList />
      <AddingMoreSoon />
      <CtaBand />
    </main>
  );
}