import ContactForm from "@/components/contact-form/ContactForm";
import GrowthChallenges from "@/components/facility-industrial-services/GrowthChallenges";
import HeroSection from "@/components/facility-industrial-services/HeroSection";
import SuccessStory from "@/components/facility-industrial-services/SuccessStory";
import TrustedPartner from "@/components/facility-industrial-services/TrustedPartner";
import ValueProposition from "@/components/facility-industrial-services/ValueProposition";
export const metadata = {
  title: "Facility Industrial Services - Expand Your Reach and Grow Your Company | Globex",
  description: "From energy efficiency to facility contracting, We Are Globex helps service providers connect with manufacturers who value your expertise. We deliver tailored strategies for growth.",
  keywords: "facility industrial services, energy efficiency, facility contracting, Globex, service providers, manufacturers, pipeline enhancement, sustainable growth",
  openGraph: {
    title: "Facility Industrial Services - Expand Your Reach and Grow Your Company",
    description: "Connect service providers with manufacturers through Globex for tailored strategies in energy efficiency and facility contracting.",
    url: "/facility-industrial-services",
    siteName: "Globex",
    images: [
      {
        url: "/assests/industries/facility-industrial/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Facility Industrial Services Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facility Industrial Services - Expand Your Reach and Grow Your Company",
    description: "Connect service providers with manufacturers through Globex for tailored strategies in energy efficiency and facility contracting.",
    images: ["/assests/industries/facility-industrial/hero.jpg"],
  },
};


export default function FacilityIndustrialServicesPage() {
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
