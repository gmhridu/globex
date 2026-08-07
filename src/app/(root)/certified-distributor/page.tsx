import { ApplicationForm } from "@/components/certified-distributor/application-form/application-form";
import { Benefits } from "@/components/certified-distributor/benefits/benefits";
import { CtaBanner } from "@/components/certified-distributor/cta-banner/cta-banner";
import { Hero } from "@/components/certified-distributor/hero/hero";
import { Process } from "@/components/certified-distributor/process/process";
import { WhyJoin } from "@/components/certified-distributor/why-join/why-join";
export const metadata = {
  title: "Certified Distributor - Join Our Global Distributor Network | Globex",
  description:
    "Join Globex's global distributor network. Connect with manufacturing partners, expand your catalog, and find high-demand products for your market.",
  keywords:
    "certified distributor, global distributor network, Globex, manufacturing partners, expand catalog, high-demand products",
  openGraph: {
    title: "Certified Distributor - Join Our Global Distributor Network",
    description:
      "Join Globex's global distributor network and connect with manufacturing partners to expand your catalog.",
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
    description:
      "Join Globex's global distributor network and connect with manufacturing partners to expand your catalog.",
    images: ["/assests/home/hero.jpg"],
  },
};

export default function CarrerPage() {
  return (
    <main>
      <Hero />
      <WhyJoin />
      <Benefits />
      <ApplicationForm />
      <CtaBanner />
      <Process />
    </main>
  );
}
