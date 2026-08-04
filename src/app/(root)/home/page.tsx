import { Hero } from "@/components/home/hero-section/hero";
import { TwoSolutions } from "@/components/home/two-solutions/two-solutions";
import { CommercialRoutes } from "@/components/home/commercial-routes/commercial-routes";
import { Markets } from "@/components/home/markets/markets";
import { Process } from "@/components/home/process/process";
import { WhyGlobex } from "@/components/home/why-globex/why-globex";
import { CaseStudy } from "@/components/home/case-study/case-study";
import { WhoWeWorkWith } from "@/components/home/who-we-work-with/who-we-work-with";
import { Faq } from "@/components/home/faq/faq";
import { Cta } from "@/components/home/cta/cta";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TwoSolutions />
        <CommercialRoutes />
        <Markets />
        <Process />
        <WhyGlobex />
        <CaseStudy />
        <WhoWeWorkWith />
        <Faq />
        <Cta />
      </main>
    </>
  );
}
