import ContactForm from "@/components/contact-form/ContactForm";
import GrowthChallenges from "@/components/facility-industrial-services/GrowthChallenges";
import HeroSection from "@/components/facility-industrial-services/HeroSection";
import SuccessStory from "@/components/facility-industrial-services/SuccessStory";
import TrustedPartner from "@/components/facility-industrial-services/TrustedPartner";
import ValueProposition from "@/components/facility-industrial-services/ValueProposition";

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
