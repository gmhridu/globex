import GrowthChallenges from "@/components/automation-solutions/GrowthChallenges";
import HeroSection from "@/components/automation-solutions/HeroSection";
import SuccessStory from "@/components/automation-solutions/SuccessStory";
import TrustedPartner from "@/components/automation-solutions/TrustedPartner";
import ValueProposition from "@/components/automation-solutions/ValueProposition";
import ContactForm from "@/components/contact-form/ContactForm";
export const metadata = {
  title:
    "Automation Solutions - Empowering Innovators to Drive Growth | Globex",
  description:
    "From robotic automation to custom machine building, We Are Globex helps automation solution providers connect with manufacturers eager to transform their operations.",
  keywords:
    "automation solutions, robotic automation, custom machine building, Globex, manufacturers, production lines, custom systems, pipeline expansion",
  openGraph: {
    title: "Automation Solutions - Empowering Innovators to Drive Growth",
    description:
      "Connect automation solution providers with manufacturers through Globex to transform operations and expand pipelines.",
    url: "/automation-solutions",
    siteName: "Globex",
    images: [
      {
        url: "/assests/industries/automation-solution/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Automation Solutions Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation Solutions - Empowering Innovators to Drive Growth",
    description:
      "Connect automation solution providers with manufacturers through Globex to transform operations and expand pipelines.",
    images: ["/assests/industries/automation-solution/hero.jpg"],
  },
};

export default function AutomationSolutionsPage() {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <GrowthChallenges />
      <TrustedPartner />
      <SuccessStory />
      <ContactForm />
    </main>
  );
}
