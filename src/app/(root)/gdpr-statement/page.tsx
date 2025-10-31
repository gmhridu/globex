import ContactForm from "@/components/contact-form/ContactForm";
import Complaint from "@/components/gdrp-statement/complaint";
import HeroSection from "@/components/gdrp-statement/HeroSection";

export default function GDPRStatementPage() {
  return (
    <>
      <HeroSection />
      <Complaint />
      <ContactForm />
    </>
  );
}
