import AdvantagesSection from "@/components/certified-distributor/AdvantagesSection";
import BecomeCertifiedDistributorForm from "@/components/certified-distributor/BecomeCertifiedDistributorForm";
import GrowWithUsSection from "@/components/certified-distributor/GrowWithUsSection";
import HeroSection from "@/components/certified-distributor/HeroSection";
import MembershipSection from "@/components/certified-distributor/MembershipSection";
import ProcessSection from "@/components/certified-distributor/ProcessSection";
import WhyJoinGlobexNetwork from "@/components/certified-distributor/WhyJoinGlobexNetwork";
import ContactForm from "@/components/contact-form/ContactForm";


export default function CarrerPage() {
  return (
    <main>
      <HeroSection />
      <WhyJoinGlobexNetwork />
      <AdvantagesSection />
      <MembershipSection />
      <BecomeCertifiedDistributorForm />
      <GrowWithUsSection />
      <ProcessSection />
      <ContactForm />
    </main>
  );
}
