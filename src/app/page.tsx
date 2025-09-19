import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PartnersSection from "@/components/sections/PartnersSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ChallengesSection from "@/components/sections/ChallengesSection";
import CTASection from "@/components/sections/CTASection";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "We Are Globex | A Growth Agency Built for Manufacturing",
  description:
    "Build Your Distribution. Accelerate Your Revenue. We help businesses expand, scale, and succeed in international markets with a results-driven strategy.",
  openGraph: {
    title: "We Are Globex | A Growth Agency Built for Manufacturing",
    description:
      "Build Your Distribution. Accelerate Your Revenue. We help businesses expand, scale, and succeed in international markets with a results-driven strategy.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "We Are Globex - Manufacturing Growth Agency",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PartnersSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <BenefitsSection />
        <ChallengesSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
