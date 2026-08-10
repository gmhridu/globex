import type { Metadata } from "next";
import { ApplicationForm } from "@/components/certified-distributor/application-form/application-form";
import { Benefits } from "@/components/certified-distributor/benefits/benefits";
import { CtaBanner } from "@/components/certified-distributor/cta-banner/cta-banner";
import { Hero } from "@/components/certified-distributor/hero/hero";
import { Process } from "@/components/certified-distributor/process/process";
import { WhyJoin } from "@/components/certified-distributor/why-join/why-join";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1200&h=630&fit=crop&auto=format";

const description =
  "Become a certified Globex distributor and get tailored introductions to 340+ North American manufacturers expanding into Europe and the Middle East. Free to apply, dedicated account support, and product samples before you commit.";

export const metadata: Metadata = {
  title: "Certified Distributor | Join the Globex Global Distributor Network",
  description,
  keywords: [
    "certified distributor",
    "global distributor network",
    "become a distributor",
    "distributor for North American manufacturers",
    "European distribution partners",
    "Middle East distribution partners",
    "private label suppliers for distributors",
    "distributor sourcing partnerships",
    "Globex distributor programme",
    "distribution network membership",
  ],
  alternates: {
    canonical: "/certified-distributor",
  },
  openGraph: {
    title: "Certified Distributor | Join the Globex Global Distributor Network",
    description,
    url: `${SITE_URL}/certified-distributor`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Certified Distributor Programme - Join the Globex global distributor network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Distributor | Join the Globex Global Distributor Network",
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
  classification: "Distributor Partnerships",
};

export default function CarrerPage() {
  return (
    <main>
      <Hero />
      <WhyJoin />
      <Benefits />
      <ApplicationForm />
      <CtaBanner />
      <Process />
    </main>
  );
}