import type { Metadata } from "next";
import { Body } from "@/components/gdrp-statement/body/body";
import { Hero } from "@/components/gdrp-statement/hero/hero";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const BRAND_IMAGE =
  "https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1200&h=630&fit=crop&auto=format";

const description =
  "We Are Globex Ltd's GDPR statement: how we collect, process, and protect personal data under UK GDPR and EU GDPR. Includes your data rights, retention periods, international transfers, and how to contact us.";

export const metadata: Metadata = {
  title: "GDPR Statement | We Are Globex Data Protection",
  description,
  keywords: [
    "GDPR statement",
    "UK GDPR",
    "EU GDPR",
    "data protection policy",
    "We Are Globex data protection",
    "personal data rights",
    "data controller",
    "data processing lawful basis",
    "privacy compliance",
    "Data Protection Act 2018",
  ],
  alternates: {
    canonical: "/gdpr-statement",
  },
  openGraph: {
    title: "GDPR Statement | We Are Globex Data Protection",
    description,
    url: `${SITE_URL}/gdpr-statement`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: BRAND_IMAGE,
        width: 1200,
        height: 630,
        alt: "We Are Globex GDPR statement - data protection & compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Statement | We Are Globex Data Protection",
    description,
    images: [BRAND_IMAGE],
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
  category: "legal",
  classification: "Legal & Compliance",
};

export default function GDPRStatementPage() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}