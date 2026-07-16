import GrowthChallenges from "@/components/advanced-manufacturing-industry/GrowthChallenges";
import HeroSection from "@/components/advanced-manufacturing-industry/HeroSection";
import SuccessStory from "@/components/advanced-manufacturing-industry/SuccessStory";
import TrustedPartner from "@/components/advanced-manufacturing-industry/TrustedPartner";
import ValueProposition from "@/components/advanced-manufacturing-industry/ValueProposition";
import ContactForm from "@/components/contact-form/ContactForm";
export const metadata = {
  title:
    "Advanced Manufacturing Industry - Collaborate with Manufacturers Shaping Tomorrow’s Industry | Globex",
  description:
    "From IoT to manufacturing software, We Are Globex supports advanced manufacturing and Industry 4.0 solution providers in growing their pipeline and securing high-value opportunities.",
  keywords:
    "advanced manufacturing, Industry 4.0, IoT, manufacturing software, Globex, solution providers, innovations, sustainable business growth",
  openGraph: {
    title:
      "Advanced Manufacturing Industry - Collaborate with Manufacturers Shaping Tomorrow’s Industry",
    description:
      "Support advanced manufacturing and Industry 4.0 solution providers through Globex to grow pipeline and secure high-value opportunities.",
    url: "/advanced-manufacturing-industry",
    siteName: "Globex",
    images: [
      {
        url: "/assests/industries/advance-manufacturing/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Advanced Manufacturing Industry Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Advanced Manufacturing Industry - Collaborate with Manufacturers Shaping Tomorrow’s Industry",
    description:
      "Support advanced manufacturing and Industry 4.0 solution providers through Globex to grow pipeline and secure high-value opportunities.",
    images: ["/assests/industries/advance-manufacturing/hero.jpg"],
  },
};

export default function AdvancedManufacturingIndustryPage() {
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
