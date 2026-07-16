import ContactForm from "@/components/contact-form/ContactForm";
import GrowthChallenges from "@/components/general-manufacturing/GrowthChallenges";
import HeroSection from "@/components/general-manufacturing/HeroSection";
import SuccessStory from "@/components/general-manufacturing/SuccessStory";
import TrustedPartner from "@/components/general-manufacturing/TruestedPartner";
import ValueProposition from "@/components/general-manufacturing/ValueProposition";
export const metadata = {
  title: "General Manufacturing - Unlock Growth with Vetted Distributors | Globex",
  description: "We connect manufacturers with pre-vetted distributors, helping them scale operations and enter new markets. From consumer goods to industrial equipment, we match you with trusted partners.",
  keywords: "general manufacturing, distributors, vetted distributors, scale operations, new markets, Globex, consumer goods, industrial equipment",
  openGraph: {
    title: "General Manufacturing - Unlock Growth with Vetted Distributors",
    description: "Connect manufacturers with pre-vetted distributors through Globex to scale operations and enter new markets.",
    url: "/general-manufacturing",
    siteName: "Globex",
    images: [
      {
        url: "/assests/industries/manufacturing/hero.webp",
        width: 1200,
        height: 630,
        alt: "General Manufacturing Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "General Manufacturing - Unlock Growth with Vetted Distributors",
    description: "Connect manufacturers with pre-vetted distributors through Globex to scale operations and enter new markets.",
    images: ["/assests/industries/manufacturing/hero.webp"],
  },
};


export default function GeneralManuFacturingPage() {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <GrowthChallenges />
      <TrustedPartner />
      <SuccessStory />
      <ContactForm />
    </main>
  );
}
