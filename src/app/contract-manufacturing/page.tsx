import ContactForm from "@/components/contact-form/ContactForm";
import GrowthChallenges from "@/components/contract-manufacturing/GrowthChallenges";
import HeroSection from "@/components/contract-manufacturing/HeroSection";
import SuccessStory from "@/components/contract-manufacturing/SuccessStory";
import TrustedPartner from "@/components/contract-manufacturing/TrustedPartner";
import ValueProposition from "@/components/contract-manufacturing/ValueProposition";

export default function Home() {
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
