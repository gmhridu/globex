import type { Metadata } from "next";
import { Body } from "@/components/privacy-policy/body/body";
import { Hero } from "@/components/privacy-policy/hero/hero";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const BRAND_IMAGE =
  "https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1200&h=630&fit=crop&auto=format";

const description =
  "How We Are Globex collects, uses, and protects your personal data. Covers the personal and usage data we gather, cookies and tracking, data retention, your data protection rights, and how to contact us.";

export const metadata: Metadata = {
  title: "Privacy Policy | We Are Globex",
  description,
  keywords: [
    "privacy policy",
    "We Are Globex privacy",
    "personal data collection",
    "data protection",
    "cookies policy",
    "usage data",
    "data retention policy",
    "data protection rights",
    "UK data privacy",
    "GDPR compliance",
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | We Are Globex",
    description,
    url: `${SITE_URL}/privacy-policy`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: BRAND_IMAGE,
        width: 1200,
        height: 630,
        alt: "We Are Globex privacy policy - how we protect your data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | We Are Globex",
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

export default function PrivayPolicyPage() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}