import AgencySection from "@/components/the-distribution-hub/AgencySection";
import ClientChallenges from "@/components/the-distribution-hub/ClientChallenges";
import ContactForm from "@/components/the-distribution-hub/ContactForm";
import HeroSection from "@/components/the-distribution-hub/HeroSection";
import PartnerCallout from "@/components/the-distribution-hub/PartnerCallout";
import StrategySteps from "@/components/the-distribution-hub/StrategySteps";
import SuccessStory from "@/components/the-distribution-hub/SuccessStory";
import ValueProposition from "@/components/the-distribution-hub/ValueProposition";

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
