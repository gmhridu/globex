import ContactForm from "@/components/contact-form/ContactForm";
import AgencySection from "@/components/the-distribution-hub/AgencySection";
import HeroSection from "@/components/the-distribution-hub/HeroSection";
import PartnerCallout from "@/components/the-distribution-hub/PartnerCallout";
import StrategySteps from "@/components/the-distribution-hub/StrategySteps";
import SuccessStory from "@/components/the-distribution-hub/SuccessStory";
import ValueProposition from "@/components/the-distribution-hub/ValueProposition";
export const metadata = {
  title: "The Distribution Hub - Powering Distribution Across Europe & Middle East | Globex",
  description: "Welcome to the Distributor Hub, your gateway to connecting with qualified distributors, importers, and key market partners across Europe and the Middle East.",
  keywords: "distribution, distributors, Europe, Middle East, Globex, importers, market partners, supply chain",
  openGraph: {
    title: "The Distribution Hub - Powering Distribution Across Europe & Middle East",
    description: "Connect with qualified distributors and partners in Europe and the Middle East through Globex's Distributor Hub.",
    url: "/the-distribution-hub",
    siteName: "WeAreGlobex",
    images: [
      {
        url: "/assests/tailored-solutions/distributor-hub/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Distribution Hub Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Distribution Hub - Powering Distribution Across Europe & Middle East",
    description: "Connect with qualified distributors and partners in Europe and the Middle East through Globex's Distributor Hub.",
    images: ["/assests/tailored-solutions/distributor-hub/hero.jpg"],
  },
};


export default function TheDistributionHubPage() {
  return (
    <>
      <main>
        <HeroSection />
        <ValueProposition />
        <AgencySection />
        <StrategySteps />
        <PartnerCallout />
        <SuccessStory />
        <ContactForm />
      </main>
    </>
  );
}
