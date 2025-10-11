import BenefitsSection from "@/components/career/BenefitsSection";
import HeroSection from "@/components/career/HeroSection";
import ImpactSection from "@/components/career/ImpactSection copy";
import OpenPosition from "@/components/career/OpenPosition";
import ContactForm from "@/components/contact-form/ContactForm";

export default function CarrerPage() {
  return (
    <main>
      <HeroSection />
      <ImpactSection />
      <OpenPosition />
      <BenefitsSection />
      <ContactForm />
    </main>
  );
}
