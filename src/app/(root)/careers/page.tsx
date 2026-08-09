import { Apply } from "@/components/careers/apply/apply";
import { Hero } from "@/components/careers/hero/hero";
import { OpenPostions } from "@/components/careers/open-positions/open-positions";
import { PerksAndBenefits } from "@/components/careers/perks-and-benefits/perks-and-benefits";
import { ReadyToMakeImpact } from "@/components/careers/ready-to-make-impact/ready-to-make-impact";
export const metadata = {
  title: "Careers - Join the Team at Globex",
  description:
    "Explore career opportunities at Globex. Join our team and be part of a dynamic company shaping the future of manufacturing and distribution.",
  keywords:
    "careers, join the team, Globex, job opportunities, manufacturing, distribution",
  openGraph: {
    title: "Careers - Join the Team at Globex",
    description:
      "Explore career opportunities at Globex and join our team shaping the future of manufacturing and distribution.",
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
    description:
      "Explore career opportunities at Globex and join our team shaping the future of manufacturing and distribution.",
    images: ["/assests/home/hero.jpg"],
  },
};

export default function CarrerPage() {
  return (
    <main>
      <Hero />
      <ReadyToMakeImpact />
      <OpenPostions />
      <PerksAndBenefits />
      <Apply />
    </main>
  );
}
