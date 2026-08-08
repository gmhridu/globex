import { ContactForm } from "@/components/contact/contact-form/contact-form";
import { Body } from "@/components/gdrp-statement/body/body";
import Complaint from "@/components/gdrp-statement/complaint";
import { Hero } from "@/components/gdrp-statement/hero/hero";
import HeroSection from "@/components/gdrp-statement/HeroSection";
export const metadata = {
  title: "GDPR Statement - Globex",
  description:
    "Read Globex's GDPR statement to understand our compliance with data protection regulations and how we handle personal data.",
  keywords:
    "GDPR statement, Globex, data protection, personal data, compliance",
  openGraph: {
    title: "GDPR Statement - Globex",
    description:
      "Read Globex's GDPR statement to understand our compliance with data protection regulations.",
    url: "/gdpr-statement",
    siteName: "Globex",
    images: [
      {
        url: "/assests/privacy-policy/heroImage.jpg",
        width: 1200,
        height: 630,
        alt: "GDPR Statement Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Statement - Globex",
    description:
      "Read Globex's GDPR statement to understand our compliance with data protection regulations.",
    images: ["/assests/privacy-policy/heroImage.jpg"],
  },
};

export default function GDPRStatementPage() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}
