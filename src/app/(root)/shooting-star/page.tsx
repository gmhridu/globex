import type { Metadata } from "next";
import { Hero } from "@/components/shooting-star/hero/hero";
import { HowGlobexHelps } from "@/components/shooting-star/how-globex-helps/how-globex-helps";
import { InTheDrive } from "@/components/shooting-star/in-the-drive/in-the-drive";
import { Partners } from "@/components/shooting-star/partners/partners";
import { ShootingStarBadge } from "@/components/shooting-star/shooting-star-badge/shooting-star-badge";
import { WhatShootingStarDoes } from "@/components/shooting-star/what-shooting-star-does/what-shooting-star-does";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=1200&h=630&fit=crop&auto=format";

const description =
  "We Are Globex's charity partnership with Shooting Star Children's Hospices — supporting babies, children, and young people with life-limiting conditions across Surrey and South West London. Discover how we help and how to donate.";

export const metadata: Metadata = {
  title: "Shooting Star Charity Partnership | We Are Globex",
  description,
  keywords: [
    "Shooting Star Children's Hospices",
    "Globex charity partnership",
    "children's hospice charity",
    "Surrey hospice charity",
    "South West London children's hospice",
    "corporate charity giving",
    "We Are Globex CSR",
    "children's hospice donation",
    "business charity partnership",
  ],
  alternates: {
    canonical: "/shooting-star",
  },
  openGraph: {
    title: "Shooting Star Charity Partnership | We Are Globex",
    description,
    url: `${SITE_URL}/shooting-star`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "We Are Globex and Shooting Star Children's Hospices charity partnership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shooting Star Charity Partnership | We Are Globex",
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
  category: "charity",
  classification: "Charity Partnership",
};

export default function ShootingStartPage() {
  return (
    <main>
      <Hero />
      <Partners />
      <WhatShootingStarDoes />
      <HowGlobexHelps />
      <InTheDrive />
      <ShootingStarBadge />
    </main>
  );
}