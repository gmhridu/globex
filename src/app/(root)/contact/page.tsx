import ContactForm from "@/components/contact-form/ContactForm";
import ContactSection from "@/components/contact/ContactSection";
import HeroSection from "@/components/contact/HeroSection";
import Locations from "@/components/contact/Location";


export default function CarrerPage() {
  return (
    <main>
      <HeroSection />
      <ContactSection />
      <Locations />
      <ContactForm />
    </main>
  );
}
