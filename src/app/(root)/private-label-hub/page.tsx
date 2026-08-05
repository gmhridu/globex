import { Capabilities } from "@/components/private-label-hub/capabilities/capabilities";
import { CaseStudy } from "@/components/private-label-hub/case-study/case-study";
import { Cta } from "@/components/private-label-hub/cta/cta";
import { Faq } from "@/components/private-label-hub/faq/faq";
import { Hero } from "@/components/private-label-hub/hero/hero";
import { Process } from "@/components/private-label-hub/process/process";
import { ProductLaunch } from "@/components/private-label-hub/product-launch/product-launch";

import { WhyPrivateLabel } from "@/components/private-label-hub/why-private-label/why-private-label";
export const metadata = {
  title:
    "Private Label Hub - Connecting Manufacturers with Brands Ready to Scale | Globex",
  description:
    "We connect private label manufacturers with brands ready to scale — creating the perfect match, every time. Discover opportunities in private labeling.",
  keywords:
    "private label, manufacturers, brands, scaling, Globex, private labeling, manufacturing partnerships",
  openGraph: {
    title:
      "Private Label Hub - Connecting Manufacturers with Brands Ready to Scale",
    description:
      "Connect private label manufacturers with brands ready to scale through Globex's Private Label Hub.",
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
    title:
      "Private Label Hub - Connecting Manufacturers with Brands Ready to Scale",
    description:
      "Connect private label manufacturers with brands ready to scale through Globex's Private Label Hub.",
    images: ["/assests/tailored-solutions/private-label-hub/hero.jpg"],
  },
};

export default function PrivateLabelPage() {
  return (
    <>
      <main>
        <Hero />
        <Capabilities />
        <WhyPrivateLabel />
        <Process />
        <ProductLaunch />
        <CaseStudy />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
