import HeroSection from "@/components/home/HeroSection";
import PartnerLogos from "@/components/home/PartnerLogos";
import ValueProposition from "@/components/home/ValueProposition";
import AgencySection from "@/components/home/AgencySection";
import StrategySteps from "@/components/home/StrategySteps";
import PartnerCallout from "@/components/home/PartnerCallout";
import ClientChallenges from "@/components/home/ClientChallenges";
import SuccessStory from "@/components/home/SuccessStory";
import Resources from "@/components/home/Resources";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PartnerLogos />
        <ValueProposition />
        <AgencySection />
        <StrategySteps />
        <PartnerCallout />
        <ClientChallenges />
        <SuccessStory />
        <Resources />
        <ContactForm />
      </main>
    </>
  );
}
