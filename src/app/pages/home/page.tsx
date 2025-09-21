import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import ValueProposition from "@/components/ValueProposition";
import AgencySection from "@/components/AgencySection";
import StrategySteps from "@/components/StrategySteps";
import CallToAction from "@/components/CallToAction";
import PartnerCallout from "@/components/PartnerCallout";
import ClientChallenges from "@/components/ClientChallenges";
import SuccessStory from "@/components/SuccessStory";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PartnerLogos />
        <ValueProposition />
        <AgencySection />
        <StrategySteps />
        {/* <CallToAction /> */}
        <PartnerCallout />
        <ClientChallenges />
        <SuccessStory />
        {/* <Testimonials /> */}
        <Resources />
        <ContactForm />
      </main>
    </>
  );
}
