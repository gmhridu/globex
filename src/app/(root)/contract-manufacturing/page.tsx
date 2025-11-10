import ContactForm from "@/components/contact-form/ContactForm";
import GrowthChallenges from "@/components/contract-manufacturing/GrowthChallenges";
import HeroSection from "@/components/contract-manufacturing/HeroSection";
import SuccessStory from "@/components/contract-manufacturing/SuccessStory";
import TrustedPartner from "@/components/contract-manufacturing/TrustedPartner";
import ValueProposition from "@/components/contract-manufacturing/ValueProposition";
export const metadata = {
  title: "Contract Manufacturing - Powering Growth for Manufacturers | Globex",
  description:
    "Globex connects manufacturers with OEMs and brands seeking trusted production partners — delivering qualified opportunities that turn capacity into recurring business.",
  keywords:
    "contract manufacturing, manufacturers, OEMs, brands, production partners, Globex, recurring business",
  openGraph: {
    title: "Contract Manufacturing - Powering Growth for Manufacturers",
    description:
      "Connect manufacturers with OEMs and brands through Globex's contract manufacturing solutions.",
    url: "/contract-manufacturing",
    siteName: "WeAreGlobex",
    images: [
      {
        url: "/assests/tailored-solutions/contract-manufacturers-hub/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contract Manufacturing Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Manufacturing - Powering Growth for Manufacturers",
    description:
      "Connect manufacturers with OEMs and brands through Globex's contract manufacturing solutions.",
    images: ["/assests/tailored-solutions/contract-manufacturers-hub/hero.jpg"],
  },
};

export default function ContactManufacturingPage() {
  return (
    <>
      <main>
        <HeroSection />
        <ValueProposition />
        <GrowthChallenges />
        <TrustedPartner />
        <SuccessStory />
        <ContactForm />
      </main>
    </>
  );
}
