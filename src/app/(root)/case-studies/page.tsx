import { Hero } from "@/components/case-studies/hero/hero";
import { CategoryFilter } from "@/components/case-studies/category-filter/category-filter";
import { CaseStudiesList } from "@/components/case-studies/case-studies-list/case-studies-list";
import { AddingMoreSoon } from "@/components/case-studies/adding-more-soon/adding-more-soon";
import { CtaBand } from "@/components/case-studies/cta-band/cta-band";

export default function CaseStudiesPage() {
  return (
    <main>
      <Hero />
      <CategoryFilter />
      <CaseStudiesList />
      <AddingMoreSoon />
      <CtaBand />
    </main>
  );
}
