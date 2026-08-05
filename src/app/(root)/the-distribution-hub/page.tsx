import { Hero } from "@/components/the-distribution-hub/hero/hero";
import { CaseStudy } from "@/components/the-distribution-hub/case-study/case-study";
import { PartnerTypes } from "@/components/the-distribution-hub/partner-types/partner-types";
import { Process } from "@/components/the-distribution-hub/process/process";
import { WhyGlobex } from "@/components/the-distribution-hub/why-globex/why-globex";
import { Faq } from "@/components/the-distribution-hub/faq/faq";
import { Cta } from "@/components/the-distribution-hub/cta/cta";
export const metadata = {
  title:
    "The Distribution Hub - Powering Distribution Across Europe & Middle East | Globex",
  description:
    "Welcome to the Distributor Hub, your gateway to connecting with qualified distributors, importers, and key market partners across Europe and the Middle East.",
  keywords:
    "distribution, distributors, Europe, Middle East, Globex, importers, market partners, supply chain",
  openGraph: {
    title:
      "The Distribution Hub - Powering Distribution Across Europe & Middle East",
    description:
      "Connect with qualified distributors and partners in Europe and the Middle East through Globex's Distributor Hub.",
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
    title:
      "The Distribution Hub - Powering Distribution Across Europe & Middle East",
    description:
      "Connect with qualified distributors and partners in Europe and the Middle East through Globex's Distributor Hub.",
    images: ["/assests/tailored-solutions/distributor-hub/hero.jpg"],
  },
};

export default function TheDistributionHubPage() {
  return (
    <>
      <main>
        <Hero />
        <PartnerTypes />
        <WhyGlobex />
        <Process />
        <CaseStudy />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
