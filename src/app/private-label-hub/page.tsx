import ContactForm from "@/components/contact-form/ContactForm";
import AgencySection from "@/components/private-label-hub/AgencySection";
import ClientChallenges from "@/components/private-label-hub/ClientChallenges";
import HeroSection from "@/components/private-label-hub/HeroSection";
import PartnerCallout from "@/components/private-label-hub/PartnerCallout";
import StrategySteps from "@/components/private-label-hub/StrategySteps";
import SuccessStory from "@/components/private-label-hub/SuccessStory";
import ValueProposition from "@/components/private-label-hub/ValueProposition";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ValueProposition />
        <AgencySection />
        <StrategySteps />
        <PartnerCallout />
        <ClientChallenges />
        <SuccessStory />
        <ContactForm />
      </main>
    </>
  );
}
