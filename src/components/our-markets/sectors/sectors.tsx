import { sans, serif } from "@/lib/utils";

const sectors = [
  {
    icon: "🌾",
    name: "Agriculture",
    desc: "Crop inputs, irrigation, agri-machinery, and processed food commodities.",
  },
  {
    icon: "💄",
    name: "Beauty & Cosmetics",
    desc: "Skincare, personal care, and wellness brands entering EU and GCC retail.",
  },
  {
    icon: "🌿",
    name: "Cannabis",
    desc: "CBD and hemp-derived products into licensed European markets.",
  },
  {
    icon: "🏗️",
    name: "Construction",
    desc: "Building materials, fixtures, and specialist construction products.",
  },
  {
    icon: "⚽",
    name: "Sports",
    desc: "Equipment, apparel, and nutrition into specialty and mass-market channels.",
  },
  {
    icon: "🍽️",
    name: "Food & Hospitality",
    desc: "Ambient, chilled, and foodservice products across European and GCC buyers.",
  },
  {
    icon: "🧸",
    name: "Toys & Baby",
    desc: "Consumer goods for infant and child categories, retail and e-commerce.",
  },
  {
    icon: "🐾",
    name: "Veterinary & Pet Care",
    desc: "Pet food, supplements, and veterinary consumables for EU and ME markets.",
  },
  {
    icon: "🚬",
    name: "Tobacco",
    desc: "Compliant nicotine and tobacco product distribution in licensed territories.",
  },
  {
    icon: "🛡️",
    name: "Defence",
    desc: "Dual-use and defence-adjacent supply chains into approved markets.",
  },
  {
    icon: "⛏️",
    name: "Mining",
    desc: "Equipment, consumables, and safety products for mining operations.",
  },
  {
    icon: "⚓",
    name: "Maritime",
    desc: "Marine equipment, safety products, and vessel consumables.",
  },
  {
    icon: "🛢️",
    name: "Oil & Gas",
    desc: "Specialist consumables and equipment for upstream and downstream sectors.",
  },
  {
    icon: "🏡",
    name: "Luxury Home Décor",
    desc: "Premium interiors, furnishings, and lifestyle goods into high-end retail.",
  },
];

export function Sectors() {
  return (
    <section id="mkt-sectors" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Industries
              <br />
              <span className="text-[#e8a020]">We Serve.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs" style={sans()}>
            Sector depth matters. We don't apply a generic export model — each
            industry has its own channel logic, buyer behaviour, and compliance
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
          {sectors.map((s) => (
            <div
              key={s.name}
              className="bg-card p-5 group hover:bg-secondary transition-colors duration-300 cursor-pointer relative"
              title={s.desc}
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200 inline-block">
                {s.icon}
              </div>
              <h3
                className="text-sm uppercase leading-tight text-secondary-foreground group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {s.name}
              </h3>
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-0 mb-2 w-52 bg-[#0d0f14] border border-border p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <p
                  className="text-[0.65rem] text-muted-foreground leading-relaxed"
                  style={sans()}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
