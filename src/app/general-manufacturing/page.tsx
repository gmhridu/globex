import ContactForm from "@/components/general-manufacturing/ContactForm";
import GrowthChallenges from "@/components/general-manufacturing/GrowthChallenges";
import HeroSection from "@/components/general-manufacturing/HeroSection";
import SuccessStory from "@/components/general-manufacturing/SuccessStory";
import TrustedPartner from "@/components/general-manufacturing/TruestedPartner";
import ValueProposition from "@/components/general-manufacturing/ValueProposition";

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
