export interface AwardStory {
  headline: string;
  overview: string;
  criteria: string[];
  keyHighlights: string[];
  commercialImpact: string;
}

export interface AwardItem {
  id: string;
  number: string;
  title: string;
  organisation: string;
  programme: string;
  href: string;
  description: string;
  badge?: string;
  year: string;
  story: AwardStory;
}

export interface AwardStat {
  value: string;
  label: string;
}

export const AWARDS_DATA: AwardItem[] = [
  {
    id: "business-awards-uk",
    number: "01",
    title: "Business Consultancy of the Year",
    organisation: "Business Awards UK",
    programme: "Greater London Business Awards 2026",
    href: "https://business-awards.uk/2026-greater-london-business-awards-results/",
    description:
      "Awarded for consultancy that moves beyond recommendations to deliver focused commercial strategy and measurable execution.",
    year: "2026",
    badge: "Greater London Business Awards Winner",
    story: {
      headline: "Consultancy Built on Direct Commercial Execution, Not Theoretical Strategy",
      overview:
        "Recognised by Business Awards UK for redefining manufacturing consultancy. While traditional consultancies conclude their remit with advisory reports and slide decks, We Are Globex operates as an active commercial expansion partner, taking direct responsibility for distributor acquisition, market selection, and revenue outcomes.",
      criteria: [
        "Measurable client commercial outcomes across target export territories",
        "Hands-on execution model replacing conventional theoretical consulting",
        "Rigorous market selection and distributor qualification protocols",
        "Demonstrated speed-to-market for North American manufacturers entering Europe & the Middle East",
      ],
      keyHighlights: [
        "Active presence and trade execution across 47+ target markets",
        "Comprehensive contract and commercial negotiation support",
        "Dedicated in-market follow-through and distributor management",
      ],
      commercialImpact:
        "Clients achieved confirmed distributor appointments, sustainable repeat ordering cycles, and reduced market entry latency by an average of 65% compared to internal export attempts.",
    },
  },
  {
    id: "global-brands-magazine",
    number: "02",
    title: "International Manufacturing Growth Partner of the Year",
    organisation: "Global Brands Magazine",
    programme: "Global Brand Awards 2026",
    href: "https://www.globalbrandsmagazine.com/award-winners-2026/?id=458&cat_id=30204",
    description:
      "International recognition of our work building sustainable distributor, buyer, and private-label relationships for manufacturers.",
    year: "2026",
    badge: "Global Brand Awards Winner",
    story: {
      headline: "Connecting Manufacturers with Accredited Global Distribution & Private Label Channels",
      overview:
        "Awarded by Global Brands Magazine for excellence in creating resilient international trade channels. The award honours our cross-border representation of manufacturers across North America, Europe, and the GCC, facilitating qualified trade partnerships that generate long-term commercial value.",
      criteria: [
        "Excellence in international distribution network architecture",
        "High partner retention rate across appointed distributor networks",
        "Vetting and accreditation standards for wholesale and retail buyers",
        "Tailored private-label commercial frameworks driving manufacturer volume",
      ],
      keyHighlights: [
        "Vetted network of Tier-1 importers, master distributors, and retail buyers",
        "Bespoke private-label and contract manufacturing agreements",
        "End-to-end alignment between manufacturer production capacity and regional demand",
      ],
      commercialImpact:
        "Over 340 active commercial relationships established across key territories, sustaining a 94% partner retention rate and opening multi-million pound export channels for client manufacturers.",
    },
  },
];

export const AWARDS_STATS: AwardStat[] = [
  { value: "02", label: "Independent awards" },
  { value: "2026", label: "A landmark year" },
  { value: "01", label: "Execution-led partner" },
];
