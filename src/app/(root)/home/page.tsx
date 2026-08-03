import HeroSection from "@/components/home/HeroSection";
import AwardsSection from "@/components/home/AwardsSection";
import PartnerLogos from "@/components/home/PartnerLogos";
import ValueProposition from "@/components/home/ValueProposition";
import AgencySection from "@/components/home/AgencySection";
import StrategySteps from "@/components/home/StrategySteps";
import DistributorProcess from "@/components/home/DistributorProcess";
import PartnerCallout from "@/components/home/PartnerCallout";
import ClientChallenges from "@/components/home/ClientChallenges";
import SuccessStory from "@/components/home/SuccessStory";
import Resources from "@/components/home/Resources";
import ContactForm from "@/components/contact-form/ContactForm";
import BottomInfoBar from "@/components/home/hero-section/bottom-info-bar";
import { InternationalGrowth } from "@/components/home/international-growth/international-growth";
import { OfferSection } from "@/components/home/offer-section/offer-section";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <BottomInfoBar />
        <InternationalGrowth/>
        <OfferSection />
        <DistributorProcess />
        <PartnerCallout />
        <ClientChallenges />
        <SuccessStory />
        <Resources />
        <ContactForm />
      </main>
    </>
  );
}
