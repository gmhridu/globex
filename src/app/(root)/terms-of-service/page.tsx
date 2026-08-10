import type { Metadata } from "next";
import { Body } from "@/components/terms-of-service/body/body";
import { Hero } from "@/components/terms-of-service/hero/hero";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const BRAND_IMAGE =
  "https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1200&h=630&fit=crop&auto=format";

const description =
  "The terms of service governing use of the We Are Globex website and our market entry, distribution, private label, and compliance services across Europe and the Middle East.";

export const metadata: Metadata = {
  title: "Terms of Service | We Are Globex",
  description,
  keywords: [
    "terms of service",
    "We Are Globex terms",
    "market entry services terms",
    "distribution agreement terms",
    "private label terms",
    "website terms of use",
    "user obligations",
    "limitation of liability",
    "UK business terms and conditions",
  ],
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | We Are Globex",
    description,
    url: `${SITE_URL}/terms-of-service`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: BRAND_IMAGE,
        width: 1200,
        height: 630,
        alt: "We Are Globex terms of service - market entry & distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | We Are Globex",
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

export default function TermsOfServicePage() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}