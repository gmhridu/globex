import { Body } from "@/components/terms-of-service/body/body";
import { Hero } from "@/components/terms-of-service/hero/hero";
export const metadata = {
  title: "Terms of Service - Globex",
  description:
    "Read Globex's terms of service governing your use of our website and market entry and expansion services.",
  keywords: "terms of service, Globex, website use, services, conditions",
  openGraph: {
    title: "Terms of Service - Globex",
    description:
      "Read Globex's terms of service governing your use of our website and services.",
    url: "/terms-of-service",
    siteName: "Globex",
    images: [
      {
        url: "/assests/privacy-policy/heroImage.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Globex",
    description:
      "Read Globex's terms of service governing your use of our website and services.",
    images: ["/assests/privacy-policy/heroImage.jpg"],
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Hero />
      <Body />
    </>
  );
}
