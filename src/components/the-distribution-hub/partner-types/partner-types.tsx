import { sans, serif } from "@/lib/utils";

const distributorTypes = [
  {
    icon: "◈",
    title: "Master Distributor",
    body: "Exclusive territory rights, full market coverage, and inventory commitment. The right fit for scalable, long-term market entry.",
  },
  {
    icon: "◉",
    title: "Channel Distributor",
    body: "Sector-specific reach — retail, foodservice, pharmacy, or industrial. Narrower scope, faster activation.",
  },
  {
    icon: "⬡",
    title: "Importer",
    body: "Handles customs, bonded warehousing, and local logistics. The route in for regulated or complex product categories.",
  },
  {
    icon: "◫",
    title: "Retail Buyer",
    body: "Direct to shelf. We access key retail buyers across European grocery, pharmacy, and specialist channels.",
  },
  {
    icon: "◎",
    title: "Strategic Account",
    body: "Pan-European accounts — buying groups, contract caterers, and national chains. High volume, structured terms.",
  },
  {
    icon: "⬢",
    title: "Private Label Buyer",
    body: "Buyers seeking manufacturing partners to supply under their own brand. Managed end-to-end with our Private Label Hub.",
  },
];

export function PartnerTypes() {
  return (
    <section id="dh-partner-types" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              The Right Partner
              <br />
              <span className="text-[#e8a020]">for the Right Role.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs" style={sans()}>
            Different markets and categories need different routes. We match you
            to the right distributor type — not just the nearest available
            contact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {distributorTypes.map((d) => (
            <div
              key={d.title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300"
            >
              <span className="text-3xl text-[#e8a020]/30 group-hover:text-[#e8a020]/60 transition-colors block mb-6">
                {d.icon}
              </span>
              <h3
                className="text-2xl uppercase mb-3 group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {d.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={sans()}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
