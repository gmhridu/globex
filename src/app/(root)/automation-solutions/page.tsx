import GrowthChallenges from "@/components/automation-solutions/GrowthChallenges";
import HeroSection from "@/components/automation-solutions/HeroSection";
import SuccessStory from "@/components/automation-solutions/SuccessStory";
import TrustedPartner from "@/components/automation-solutions/TrustedPartner";
import ValueProposition from "@/components/automation-solutions/ValueProposition";
import ContactForm from "@/components/contact-form/ContactForm";

export default function AutomationSolutionsPage() {
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
