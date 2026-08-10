import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form/contact-form";
import { HaveQuestions } from "@/components/contact/have-questions/have-questions";
import { Hero } from "@/components/contact/hero/hero";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1200&h=630&fit=crop&auto=format";

const description =
  "Contact We Are Globex for manufacturing export, distribution, and private label partnerships. Email info@weareglobex.com or call (+44) 203 829 9510 — we respond within one business day.";

export const metadata: Metadata = {
  title: "Contact Us | We Are Globex - Export Partnerships",
  description,
  keywords: [
    "contact We Are Globex",
    "manufacturing export contact",
    "European distribution enquiry",
    "private label partnership contact",
    "Middle East market entry contact",
    "We Are Globex Dartford",
    "info@weareglobex.com",
    "factory export consultancy contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | We Are Globex - Export Partnerships",
    description,
    url: `${SITE_URL}/contact`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Contact We Are Globex - export & distribution partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | We Are Globex - Export Partnerships",
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
  category: "contact",
  classification: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <Hero />
      <HaveQuestions />
      <ContactForm />
    </main>
  );
}
