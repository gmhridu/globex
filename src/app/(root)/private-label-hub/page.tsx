import ContactForm from "@/components/contact-form/ContactForm";
import AgencySection from "@/components/private-label-hub/AgencySection";
import ClientChallenges from "@/components/private-label-hub/ClientChallenges";
import HeroSection from "@/components/private-label-hub/HeroSection";
import PartnerCallout from "@/components/private-label-hub/PartnerCallout";
import StrategySteps from "@/components/private-label-hub/StrategySteps";
import SuccessStory from "@/components/private-label-hub/SuccessStory";
import ValueProposition from "@/components/private-label-hub/ValueProposition";
export const metadata = {
  title: "Private Label Hub - Connecting Manufacturers with Brands Ready to Scale | Globex",
  description: "We connect private label manufacturers with brands ready to scale — creating the perfect match, every time. Discover opportunities in private labeling.",
  keywords: "private label, manufacturers, brands, scaling, Globex, private labeling, manufacturing partnerships",
  openGraph: {
    title: "Private Label Hub - Connecting Manufacturers with Brands Ready to Scale",
    description: "Connect private label manufacturers with brands ready to scale through Globex's Private Label Hub.",
    url: "/private-label-hub",
    siteName: "WeAreGlobex",
    images: [
      {
        url: "/assests/tailored-solutions/private-label-hub/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Private Label Hub Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Label Hub - Connecting Manufacturers with Brands Ready to Scale",
    description: "Connect private label manufacturers with brands ready to scale through Globex's Private Label Hub.",
    images: ["/assests/tailored-solutions/private-label-hub/hero.jpg"],
  },
};


export default function PrivateLabelPage() {
  return (
    <>
      <main>
        <HeroSection />
        <ValueProposition />
        <AgencySection />
        <StrategySteps />
        <PartnerCallout />
        <ClientChallenges />
        <SuccessStory />
        <ContactForm />
      </main>
    </>
  );
}
