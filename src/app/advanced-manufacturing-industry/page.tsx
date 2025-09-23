import GrowthChallenges from "@/components/advanced-manufacturing-industry/GrowthChallenges";
import HeroSection from "@/components/advanced-manufacturing-industry/HeroSection";
import SuccessStory from "@/components/advanced-manufacturing-industry/SuccessStory";
import TrustedPartner from "@/components/advanced-manufacturing-industry/TrustedPartner";
import ValueProposition from "@/components/advanced-manufacturing-industry/ValueProposition";
import ContactForm from "@/components/contact-form/ContactForm";

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
