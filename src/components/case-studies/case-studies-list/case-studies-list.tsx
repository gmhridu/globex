"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const caseStudies = [
  {
    id: "market-entry-dach-gcc",
    category: "Market Entry",
    tag: "DACH · GCC · Levant",
    headline: "Three Active Markets.",
    subhead: "Nine Months.",
    eyebrow: "North American Manufacturer",
    img: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1200&h=800&fit=crop&auto=format",
    imgAlt: "Engineers working in manufacturing factory",
    featured: true,
    client:
      "Mid-size North American manufacturer with strong domestic sales and no export infrastructure.",
    objective:
      "Build active distributor and retail relationships across Western Europe and the GCC from a standing start.",
    approach:
      "Full market audit, channel strategy across DACH, Benelux, and GCC regions, distributor qualification, and in-market commercial negotiation.",
    outcome:
      "3 active trading markets established within 9 months of engagement. Ongoing expansion in progress.",
    stats: [
      { label: "Markets Active", value: "3" },
      { label: "Time to First Order", value: "9 months" },
      { label: "Regions", value: "Europe & GCC" },
      { label: "Status", value: "Active & Expanding" },
    ],
  },
  {
    id: "private-label-dog-grooming-scissors",
    category: "Private Label",
    tag: "UK · Germany · France · Netherlands · Sweden · Spain · Poland",
    headline: "Seven Brands.",
    subhead: "One Manufacturer.",
    eyebrow: "Dog Grooming Scissors — Private Label Europe",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Professional dog grooming representing the private label scissors case study",
    featured: false,
    client:
      "Dual-site manufacturer of professional dog grooming scissors operating production facilities in both the United States and China, with a strong domestic wholesale presence and ambitions to enter the European pet care and grooming trade market.",
    objective:
      "Identify and activate private label buyer relationships with professional grooming brands, pet trade wholesalers, and own-brand retailers across seven European markets — leveraging dual-origin manufacturing to meet both premium and mid-market price points.",
    approach:
      "Category mapping across the European professional grooming and pet trade sector. Buyer profiling against each market's brand positioning and price architecture — matching premium US-made product lines to higher-end grooming brands and China-origin lines to value-led private label buyers. Full packaging and compliance alignment to EU product safety standards. Coordinated brief management across all seven buyer relationships simultaneously, with first-order terms negotiated in parallel.",
    outcome:
      "Private label supply agreements secured with seven distinct brands across seven European countries. Each buyer operates under their own brand identity — the manufacturer supplies product, tooling, and packaging to spec. All seven accounts active and reordering within the first year of engagement.",
    stats: [
      { label: "Active Brand Partners", value: "7" },
      { label: "Countries", value: "UK, DE, FR, NL, SE, ES, PL" },
      { label: "Manufacturing", value: "Dual-Origin: US & China" },
      { label: "Status", value: "Active & Reordering" },
    ],
  },
  {
    id: "private-label-petfood-europe",
    category: "Private Label",
    tag: "UK · Germany · Poland · Netherlands · Sweden",
    headline: "From Factory",
    subhead: "to Five Markets.",
    eyebrow: "Private Label Petfood Launch",
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop&auto=format",
    imgAlt: "Premium private label pet food product packaging",
    featured: false,
    client:
      "Petfood manufacturer seeking European private label distribution under retailer and wholesale brands.",
    objective:
      "Launch a private label petfood range — Adult Complete — with retail and distributor partners across five European markets.",
    approach:
      "Buyer mapping, retailer and distributor introductions, packaging alignment with buyer brand requirements, and full launch coordination.",
    outcome:
      "Successfully launched with retail and distribution partners across all five target markets. Live and reordering.",
    stats: [
      { label: "Target Markets", value: "5" },
      { label: "Channel", value: "Retail & Wholesale" },
      { label: "Product", value: "Private Label Adult Complete" },
      { label: "Status", value: "Live & Reordering" },
    ],
  },
  {
    id: "distribution-paintbrush-arts-crafts",
    category: "Distribution",
    tag: "UK · Germany · France · Netherlands · Sweden",
    headline: "5 Distributors.",
    subhead: "12 Months.",
    eyebrow: "Paintbrush Manufacturer — Arts & Crafts",
    img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Artist paintbrushes and art supplies representing the arts and crafts distribution case study",
    featured: false,
    client:
      "North American paintbrush manufacturer specialising in professional and hobbyist-grade brushes, entering European arts and crafts distribution for the first time.",
    objective:
      "Secure active distribution partnerships with specialist arts and crafts wholesalers and trade distributors across key European markets within the first year of engagement.",
    approach:
      "Sector-specific distributor mapping across arts and crafts wholesale, independent art supply retailers, and hobby trade channels. Buyer profiling against product range and price positioning. Commercial terms negotiation and first-order coordination across all five target markets.",
    outcome:
      "5 active distributor partnerships secured within 12 months. Product now carried across UK, Germany, France, Netherlands, and Sweden through specialist arts trade channels. All five distributors reordering within the initial contract period.",
    stats: [
      { label: "Distributors Secured", value: "5" },
      { label: "Time to 5 Partners", value: "12 months" },
      { label: "Channel", value: "Arts & Crafts Trade Wholesale" },
      { label: "Status", value: "Active & Reordering" },
    ],
  },
  {
    id: "distribution-luxury-fire-pit-southern-europe-me",
    category: "Distribution",
    tag: "Spain · Italy · Portugal · Türkiye · Dubai · Israel",
    headline: "Luxury Outdoor.",
    subhead: "Six Markets.",
    eyebrow: "Fire Pit Table Manufacturer — Southern Europe & Middle East",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Luxury outdoor living space with fire feature representing the premium fire pit table case study",
    featured: false,
    client:
      "Manufacturer of premium fire pit tables targeting the high-end outdoor living and luxury garden furniture market, seeking distribution partners across warm-climate markets in Southern Europe and the Middle East where outdoor entertaining is a year-round lifestyle.",
    objective:
      "Appoint specialist luxury outdoor and garden furniture distributors across Southern Europe, Türkiye, Dubai, and Israel — markets with strong premium consumer demand, established outdoor hospitality culture, and growing appetite for statement garden and terrace products.",
    approach:
      "Luxury channel mapping across each target territory, identifying premium garden furniture retailers, outdoor living specialists, high-end interior design showrooms, and hospitality procurement buyers. Distributor qualification focused on existing brand positioning and premium retail presence — ensuring product placement aligned with the brand's price point and aesthetic. Commercial and logistics structures adapted for each market's import and compliance requirements, including CE marking for European markets and Dubai Municipality product registration.",
    outcome:
      "Active distribution partnerships secured across Spain, Italy, Portugal, Türkiye, Dubai, and Israel. Product now stocked and specified in premium outdoor living showrooms and luxury hospitality supply chains across all six markets.",
    stats: [
      { label: "Markets Active", value: "6" },
      { label: "Territories", value: "S. Europe, Türkiye & Middle East" },
      { label: "Channel", value: "Luxury Retail & Hospitality Supply" },
      { label: "Status", value: "Active & Reordering" },
    ],
  },
  {
    id: "distribution-minibar-refrigerator-middle-east",
    category: "Distribution",
    tag: "UAE · Saudi Arabia · Oman",
    headline: "Hotel Minibar.",
    subhead: "Three GCC Markets.",
    eyebrow: "Minibar Refrigerator Manufacturer — Middle East",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Luxury hotel room representing the minibar refrigerator distribution case study",
    featured: false,
    client:
      "Established manufacturer of hotel-grade minibar refrigeration units seeking to break into the Middle East hospitality sector — a high-growth market driven by large-scale hotel development programmes across the GCC.",
    objective:
      "Identify and activate commercial relationships with hotel equipment distributors, hospitality fit-out contractors, and procurement buyers across the UAE, Saudi Arabia, and Oman.",
    approach:
      "Sector-specific channel mapping across the GCC hospitality supply chain — targeting specialist hotel equipment distributors, FF&E (furniture, fixtures and equipment) procurement companies, and hotel group procurement teams. Distributor qualification against regional hospitality project pipelines and existing supplier relationships. Full compliance review for GCC energy efficiency standards and hotel equipment certifications. Commercial terms structured to accommodate project-based purchasing cycles typical of hospitality fit-outs.",
    outcome:
      "Active customer relationships established across UAE, Saudi Arabia, and Oman. Product now specified and supplied into hotel projects across all three markets through qualified hospitality distribution and procurement partners.",
    stats: [
      { label: "Markets Active", value: "3" },
      { label: "Region", value: "UAE, KSA & Oman" },
      { label: "Channel", value: "Hospitality Distribution & FF&E" },
      { label: "Status", value: "Active & Project Pipeline Growing" },
    ],
  },
  {
    id: "distribution-trail-cameras-nordic-eastern-europe",
    category: "Distribution",
    tag: "Sweden · Norway · Finland · Poland · Czech Republic · Hungary",
    headline: "One Importer.",
    subhead: "Six Countries.",
    eyebrow: "US Trail Camera Manufacturer — Nordic & Eastern Europe",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Forest trail and wildlife habitat representing the trail camera distribution case study",
    featured: false,
    client:
      "US-based manufacturer of professional trail cameras and wildlife surveillance equipment, with a strong domestic hunting and outdoor sports customer base and no existing European distribution infrastructure.",
    objective:
      "Appoint a master importer and activate an authorised dealer network across the Nordic region and Eastern Europe — targeting hunting, outdoor sports, and wildlife monitoring channels where trail camera adoption was growing fastest.",
    approach:
      "Market-by-market channel analysis across target territories, identifying the Nordic markets as premium-entry and Eastern Europe as a high-growth volume opportunity. Importer qualification and appointment across the full six-country territory, structured to handle compliance, customs, and regional distribution in a single relationship. Authorised dealer network built beneath the importer across specialist hunting retailers, outdoor trade wholesalers, and wildlife monitoring equipment suppliers. Full product compliance aligned to EU radio equipment and electromagnetic compatibility directives ahead of launch.",
    outcome:
      "Master importer appointed with territorial exclusivity across all six countries. Authorised dealer network activated across Sweden, Norway, Finland, Poland, Czech Republic, and Hungary within a single engagement period. Product now available through specialist hunting and outdoor retail across the full Nordic and Eastern European footprint.",
    stats: [
      { label: "Countries Active", value: "6" },
      { label: "Structure", value: "Master Importer + Dealer Network" },
      { label: "Channels", value: "Hunting, Outdoor & Wildlife Trade" },
      { label: "Status", value: "Active & Expanding" },
    ],
  },
  {
    id: "distribution-telecoms-europe",
    category: "Distribution",
    tag: "UK · Germany · France · Netherlands · Poland · Sweden · Spain · Italy",
    headline: "One Product.",
    subhead: "Eight Countries.",
    eyebrow: "US Telecoms Manufacturer — Europe",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Telecoms hardware and network equipment representing the US manufacturer European distribution case study",
    featured: false,
    client:
      "US-based telecoms product manufacturer with a proven domestic product range and no existing European distribution infrastructure.",
    objective:
      "Build a scalable, multi-country distribution network across Europe — targeting telecoms resellers, network equipment wholesalers, and B2B technology channels.",
    approach:
      "Market-by-market channel analysis across 8 target countries. Identification and qualification of specialist telecoms distributors, IT resellers, and managed service provider networks. CE marking and regulatory compliance aligned ahead of commercial launch. Staged roll-out beginning with UK and DACH before expanding to Southern and Eastern Europe.",
    outcome:
      "Active distribution established in 8 European countries within 14 months. Product now carried by qualified distribution partners across UK, Germany, France, Netherlands, Poland, Sweden, Spain, and Italy. Pipeline for further European expansion in progress.",
    stats: [
      { label: "Markets Active", value: "8" },
      { label: "Time to Full Coverage", value: "14 months" },
      { label: "Channel", value: "Telecoms Resellers & IT Wholesale" },
      { label: "Status", value: "Active & Expanding" },
    ],
  },
  {
    id: "distribution-cigar-brand-europe-me",
    category: "Distribution",
    tag: "UK · Spain · Germany · UAE · KSA",
    headline: "Premium Cigars.",
    subhead: "Two Continents.",
    eyebrow: "US Cigar Brand — Europe & Middle East",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Premium cigars representing the US cigar brand distribution case study",
    featured: false,
    client:
      "Established US cigar brand with strong domestic recognition seeking to break into European and Gulf premium tobacco distribution.",
    objective:
      "Identify and activate specialist tobacco distributors and premium retail partners across Western Europe and the GCC, navigating strict import compliance and duty structures in each market.",
    approach:
      "Category-specific distributor mapping across specialist tobacconists, luxury retail, and duty-free channels. Full compliance review for EU TPD regulations and GCC import requirements. Commercial negotiation and terms alignment across all five markets simultaneously.",
    outcome:
      "Active distribution secured across UK, Spain, Germany, UAE, and KSA. Brand now stocked in specialist tobacconists, cigar lounges, and select duty-free retail. Reordering across all five markets within the first year.",
    stats: [
      { label: "Markets Active", value: "5" },
      { label: "Time to First Order", value: "6 months" },
      { label: "Channel", value: "Specialist Retail, Duty-Free & Lounges" },
      { label: "Status", value: "Active & Reordering" },
    ],
  },
  {
    id: "distribution-baby-products-europe",
    category: "Distribution",
    tag: "UK · Germany · France · Netherlands · UAE",
    headline: "Five Markets.",
    subhead: "One Engagement.",
    eyebrow: "Baby Products Distribution Launch",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=800&fit=crop&auto=format",
    imgAlt:
      "Baby products representing the consumer goods distribution case study",
    featured: false,
    client:
      "North American baby products manufacturer entering Europe for the first time with no existing relationships.",
    objective:
      "Establish active distributor and retail relationships across key European markets and the UAE.",
    approach:
      "Full market audit, channel strategy, distributor qualification across independent retail and pharmacy chains, in-market commercial negotiation.",
    outcome:
      "Active trading relationships established across 5 markets within a single engagement period. Reordering underway.",
    stats: [
      { label: "Markets Active", value: "5" },
      { label: "Time to First Order", value: "5 months" },
      { label: "Channel", value: "Independent Retail & Pharmacy" },
      { label: "Status", value: "Active & Reordering" },
    ],
  },
];

export function CaseStudiesList() {
  const [activeCategory, _setActiveCategory] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(
    "market-entry-dach-gcc",
  );
  const filtered = caseStudies.filter(
    (c) => activeCategory === "All" || c.category === activeCategory,
  );

  const categoryColor: Record<string, string> = {
    "Market Entry": "#e8a020",
    "Private Label": "#00b4c8",
    Distribution: "#9b7fe8",
  };

  return (
    <>
      <section className="py-0">
        {filtered.map((study, idx) => {
          const isOpen = expanded === study.id;
          const accentColor = categoryColor[study.category] ?? "#e8a020";
          const isEven = idx % 2 === 0;

          return (
            <article
              key={study.id}
              className="border-b border-border overflow-hidden"
            >
              {/* Summary row — always visible */}
              <button
                className="w-full text-left"
                onClick={() => setExpanded(isOpen ? null : study.id)}
              >
                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center hover:bg-[#111318] transition-colors">
                  <div className="flex items-start gap-6 md:gap-10">
                    {/* Index number */}
                    <span
                      className="text-[2.5rem] leading-none text-border mt-1 hidden md:block"
                      style={serif()}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      {/* Category tag */}
                      <span
                        className="inline-block px-2.5 py-1 text-[0.55rem] uppercase tracking-widest mb-3"
                        style={{
                          ...sans(600),
                          background: accentColor + "18",
                          color: accentColor,
                        }}
                      >
                        {study.category}
                      </span>
                      <h2
                        className="text-3xl md:text-4xl uppercase leading-tight mb-1"
                        style={serif()}
                      >
                        {study.headline}{" "}
                        <span style={{ color: accentColor }}>
                          {study.subhead}
                        </span>
                      </h2>
                      <p
                        className="text-[0.65rem] uppercase tracking-widest text-[#3a3f4d]"
                        style={sans(500)}
                      >
                        {study.eyebrow} · {study.tag}
                      </p>
                    </div>
                  </div>

                  {/* Expand toggle */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="grid-cols-2 gap-px bg-border hidden lg:grid">
                      {study.stats.slice(0, 2).map((s) => (
                        <div key={s.label} className="bg-[#0d0f14] px-5 py-3">
                          <p
                            className="text-[0.55rem] uppercase tracking-widest text-[#3a3f4d] mb-1"
                            style={sans(500)}
                          >
                            {s.label}
                          </p>
                          <p
                            className="text-sm text-[#f0ede8]"
                            style={sans(600)}
                          >
                            {s.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div
                      className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <line
                          x1="7"
                          y1="1"
                          x2="7"
                          y2="13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <line
                          x1="1"
                          y1="7"
                          x2="13"
                          y2="7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded detail panel */}
              <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{
                  maxHeight: isOpen ? "5000px" : "0px",
                }}
              >
                <div className="border-t border-border">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:[direction:rtl]"}`}
                  >
                    {/* Image */}
                    <div
                      className="relative min-h-105 bg-[#080b10] overflow-hidden"
                      style={isEven ? {} : { direction: "ltr" }}
                    >
                      <img
                        src={study.img}
                        alt={study.imgAlt}
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(8,11,16,0.85) 0%, rgba(8,11,16,0.3) 60%, rgba(8,11,16,0.85) 100%)",
                        }}
                      />
                      {/* All 4 stats overlay */}
                      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px bg-border/50">
                        {study.stats.map((s) => (
                          <div
                            key={s.label}
                            className="bg-[#0d0f14]/80 backdrop-blur-sm px-6 py-4"
                          >
                            <p
                              className="text-[0.55rem] uppercase tracking-widest mb-1"
                              style={{ ...sans(500), color: "#3a3f4d" }}
                            >
                              {s.label}
                            </p>
                            <p
                              className="text-base text-[#f0ede8]"
                              style={sans(600)}
                            >
                              {s.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Detail */}
                    <div
                      className="bg-card p-10 lg:p-14 flex flex-col justify-center"
                      style={isEven ? {} : { direction: "ltr" }}
                    >
                      <div className="flex items-center gap-3 mb-8">
                        <span
                          className="w-6 h-px"
                          style={{ background: accentColor }}
                        />
                        <span
                          className="text-[0.65rem] uppercase tracking-[0.2em]"
                          style={{ ...sans(500), color: accentColor }}
                        >
                          {study.eyebrow}
                        </span>
                      </div>

                      <div className="space-y-6 mb-10">
                        {[
                          { label: "Client", value: study.client },
                          { label: "Objective", value: study.objective },
                          { label: "Approach", value: study.approach },
                          { label: "Outcome", value: study.outcome },
                        ].map((row) => (
                          <div
                            key={row.label}
                            className="flex gap-5 pb-6 border-b border-border last:border-0 last:pb-0"
                          >
                            <span
                              className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] w-20 shrink-0 pt-0.5"
                              style={sans(500)}
                            >
                              {row.label}
                            </span>
                            <p
                              className="text-sm text-secondary-foreground leading-relaxed"
                              style={sans()}
                            >
                              {row.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* EMPTY STATE*/}
      {filtered.length === 0 && (
        <div className="py-32 text-center">
          <p
            className="text-[0.7rem] uppercase tracking-widest text-[#3a3f4d]"
            style={sans(500)}
          >
            More case studies in this category coming soon.
          </p>
        </div>
      )}
    </>
  );
}
