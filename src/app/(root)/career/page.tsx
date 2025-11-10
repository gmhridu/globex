import BenefitsSection from "@/components/career/BenefitsSection";
import HeroSection from "@/components/career/HeroSection";
import ImpactSection from "@/components/career/ImpactSection";
import OpenPosition from "@/components/career/OpenPosition";
import ContactForm from "@/components/contact-form/ContactForm";
export const metadata = {
  title: "Careers - Join the Team at Globex",
  description: "Explore career opportunities at Globex. Join our team and be part of a dynamic company shaping the future of manufacturing and distribution.",
  keywords: "careers, join the team, Globex, job opportunities, manufacturing, distribution",
  openGraph: {
    title: "Careers - Join the Team at Globex",
    description: "Explore career opportunities at Globex and join our team shaping the future of manufacturing and distribution.",
    url: "/career",
    siteName: "Globex",
    images: [
      {
        url: "/assests/home/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Careers Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers - Join the Team at Globex",
    description: "Explore career opportunities at Globex and join our team shaping the future of manufacturing and distribution.",
    images: ["/assests/home/hero.jpg"],
  },
};


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
