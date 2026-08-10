import type { Metadata } from "next";
import { Capabilities } from "@/components/private-label-hub/capabilities/capabilities";
import { CaseStudy } from "@/components/private-label-hub/case-study/case-study";
import { Cta } from "@/components/private-label-hub/cta/cta";
import { Faq } from "@/components/private-label-hub/faq/faq";
import { Hero } from "@/components/private-label-hub/hero/hero";
import { Process } from "@/components/private-label-hub/process/process";
import { ProductLaunch } from "@/components/private-label-hub/product-launch/product-launch";

import { WhyPrivateLabel } from "@/components/private-label-hub/why-private-label/why-private-label";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=1200&h=630&fit=crop&auto=format";

const description =
  "Launch or scale your own brand without the marketing spend. We match manufacturers with private label buyers, brand owners, and retailers across Europe and the Middle East — from product audit to pilot and scale.";

export const metadata: Metadata = {
  title: "Private Label Hub | Launch Your Brand in Europe & Middle East",
  description,
  keywords: [
    "private label manufacturing",
    "private label suppliers",
    "launch a private label brand",
    "private label Europe",
    "private label Middle East",
    "white label manufacturing",
    "private label buyers",
    "manufacturer private label partnership",
    "own brand retail supply",
    "private label product development",
  ],
  alternates: {
    canonical: "/private-label-hub",
  },
  openGraph: {
    title: "Private Label Hub | Launch Your Brand in Europe & Middle East",
    description,
    url: `${SITE_URL}/private-label-hub`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Private Label Hub - launch your brand with European and Middle East buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Label Hub | Launch Your Brand in Europe & Middle East",
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
  category: "private label",
  classification: "Private Label Solutions",
};

export default function PrivateLabelPage() {
  return (
    <>
      <main>
        <Hero />
        <Capabilities />
        <WhyPrivateLabel />
        <Process />
        <ProductLaunch />
        <CaseStudy />
        <Faq />
        <Cta />
      </main>
    </>
  );
}