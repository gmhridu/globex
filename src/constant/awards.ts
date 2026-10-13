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
  link: string;
  story: AwardStory;
}

export interface AwardStat {
  value: string;
  label: string;
}

export interface AwardCriterion {
  number: string;
  title: string;
  description: string;
}

export interface EventPhoto {
  src: string;
  alt: string;
  caption: string;
  gridClass: string;
}

export const AWARD_IMAGES = {
  dubaiHero:
    "https://images.unsplash.com/photo-1638180940769-bc94c1ffc9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800",
  groupPhoto:
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85",
  stagePhoto:
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
  eventReception:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
  eventPerformance:
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=85",
  eventLightDancers:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85",
  eventSaxophonist:
    "https://images.unsplash.com/photo-1525994886773-080587e161c2?auto=format&fit=crop&w=1200&q=85",
  eventGuests:
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85",
  awardTrophy:
    "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=1200&q=85",
};

export const GLOBAL_BRANDS_AWARD_STATS: AwardStat[] = [
  { value: "2026", label: "Award year" },
  { value: "Global", label: "International recognition" },
  { value: "Independent", label: "Jury assessment" },
];

export const GLOBAL_BRANDS_CRITERIA: AwardCriterion[] = [
  {
    number: "01",
    title: "Achievements",
    description:
      "How the brand has excelled in its field and translated expertise into meaningful commercial outcomes.",
  },
  {
    number: "02",
    title: "Presence in the Submitted Region",
    description:
      "The strength, relevance, and development of the brand’s operational and market presence in the specified region.",
  },
  {
    number: "03",
    title: "Customer Satisfaction",
    description:
      "Evidence of trusted relationships, customer satisfaction, loyalty, and consistent service delivery.",
  },
  {
    number: "04",
    title: "Innovation & Performance",
    description:
      "Commitment to innovation, a differentiated approach, and strong overall business performance.",
  },
  {
    number: "05",
    title: "Other Relevant Factors",
    description:
      "Wider contributions such as social responsibility, sustainability, and positive industry impact.",
  },
];

export const EVENT_PHOTOS: EventPhoto[] = [
  {
    src: AWARD_IMAGES.eventReception,
    alt: "Guests networking at the Global Brand Awards reception",
    caption: "Awards Reception · Guests Arrive",
    gridClass: "md:col-span-5",
  },
  {
    src: AWARD_IMAGES.eventPerformance,
    alt: "Dancers performing on stage at the Global Brand Awards",
    caption: "Opening Performance · Global Brand Awards",
    gridClass: "md:col-span-7",
  },
  {
    src: AWARD_IMAGES.eventLightDancers,
    alt: "Illuminated wing dancers performing against a starry backdrop",
    caption: "Evening Entertainment · Light Performance",
    gridClass: "md:col-span-7",
  },
  {
    src: AWARD_IMAGES.eventSaxophonist,
    alt: "Saxophonist performing during the Global Brand Awards ceremony",
    caption: "Live Music · Awards Night",
    gridClass: "md:col-span-5",
  },
  {
    src: AWARD_IMAGES.eventGuests,
    alt: "Guests seated at the Global Brand Awards ceremony",
    caption: "The Ceremony · Dubai",
    gridClass: "md:col-span-7",
  },
  {
    src: AWARD_IMAGES.awardTrophy,
    alt: "We Are Globex trophy and certificate for International Manufacturing Growth Partner of the Year",
    caption: "International Manufacturing Growth Partner of the Year",
    gridClass: "md:col-span-5",
  },
];

export const AWARD_LINKS = {
  officialWinnerPage:
    "https://www.globalbrandsmagazine.com/award-winners-2026/?id=458&cat_id=30204",
  globalBrandsMagazine: "https://www.globalbrandsmagazine.com/",
  videoEmbed: "https://www.youtube-nocookie.com/embed/qfagpavEx0Y?rel=0",
};

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
    link: "/business-awards-uk",
    story: {
      headline:
        "Consultancy Built on Direct Commercial Execution, Not Theoretical Strategy",
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
    link: "/global-brands-award",
    badge: "Global Brand Awards Winner",
    story: {
      headline:
        "Connecting Manufacturers with Accredited Global Distribution & Private Label Channels",
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
