import type { Metadata } from "next";
import { ContactForm } from "@/components/our-markets/contact-form/contact-form";
import { Hero } from "@/components/our-markets/hero/hero";
import { PathToGrowth } from "@/components/our-markets/path-to-growth/path-to-growth";
import { Regions } from "@/components/our-markets/regions/regions";
import { Sectors } from "@/components/our-markets/sectors/sectors";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=630&fit=crop&auto=format";

const description =
  "We connect North American manufacturers with trusted distributors and buyers across 47 markets — Western and Eastern Europe, the Nordics, the GCC, and the Levant. Serving 14 industries from agriculture to defence with local market entry expertise.";

export const metadata: Metadata = {
  title: "Our Markets | European & Middle East Manufacturing Export Markets",
  description,
  keywords: [
    "European market entry",
    "Middle East market entry",
    "manufacturing export markets",
    "GCC distribution",
    "Nordic market access",
    "Eastern Europe distributors",
    "manufacturer distribution Europe",
    "North American manufacturers export",
    "agriculture export Europe",
    "food and beverage distribution",
    "pet care export markets",
  ],
  alternates: {
    canonical: "/our-markets",
  },
  openGraph: {
    title: "Our Markets | European & Middle East Manufacturing Export Markets",
    description,
    url: `${SITE_URL}/our-markets`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Our Markets - European & Middle East manufacturing export markets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Markets | European & Middle East Manufacturing Export Markets",
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
  category: "markets",
  classification: "Markets & Sectors",
};

export default function OurMarkets() {
  return (
    <main>
      <Hero />
      <Regions />
      <Sectors />
      <PathToGrowth />
      <ContactForm />
    </main>
  );
}