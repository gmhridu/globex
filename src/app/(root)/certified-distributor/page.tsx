import AdvantagesSection from "@/components/certified-distributor/AdvantagesSection";
import BecomeCertifiedDistributorForm from "@/components/certified-distributor/BecomeCertifiedDistributorForm";
import GrowWithUsSection from "@/components/certified-distributor/GrowWithUsSection";
import HeroSection from "@/components/certified-distributor/HeroSection";
import MembershipSection from "@/components/certified-distributor/MembershipSection";
import ProcessSection from "@/components/certified-distributor/ProcessSection";
import WhyJoinGlobexNetwork from "@/components/certified-distributor/WhyJoinGlobexNetwork";
import ContactForm from "@/components/contact-form/ContactForm";
export const metadata = {
  title: "Certified Distributor - Join Our Global Distributor Network | Globex",
  description: "Join Globex's global distributor network. Connect with manufacturing partners, expand your catalog, and find high-demand products for your market.",
  keywords: "certified distributor, global distributor network, Globex, manufacturing partners, expand catalog, high-demand products",
  openGraph: {
    title: "Certified Distributor - Join Our Global Distributor Network",
    description: "Join Globex's global distributor network and connect with manufacturing partners to expand your catalog.",
    url: "/certified-distributor",
    siteName: "Globex",
    images: [
      {
        url: "/assests/home/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Certified Distributor Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Distributor - Join Our Global Distributor Network",
    description: "Join Globex's global distributor network and connect with manufacturing partners to expand your catalog.",
    images: ["/assests/home/hero.jpg"],
  },
};



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
