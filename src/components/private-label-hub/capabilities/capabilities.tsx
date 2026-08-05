import { sans, serif } from "@/lib/utils";

const capabilities = [
  {
    icon: "◈",
    title: "Product Development",
    body: "From brief to specification. We scope the product, define tolerances, and align the manufacturer to buyer requirements.",
  },
  {
    icon: "◉",
    title: "Packaging & Branding",
    body: "Connecting buyers with packaging partners and managing the brand handoff from concept to shelf-ready unit.",
  },
  {
    icon: "⬡",
    title: "Quality Assurance",
    body: "Independent QA frameworks so the buyer gets what they commissioned — every run, not just the first.",
  },
  {
    icon: "◫",
    title: "Compliance & Certification",
    body: "EU, GCC, and retail-specific compliance handled in-house. No guesswork, no delays at the border.",
  },
  {
    icon: "◎",
    title: "Logistics Coordination",
    body: "We manage the handoff from factory gate to in-market delivery — including bonded warehousing where needed.",
  },
  {
    icon: "⬢",
    title: "Buyer Matching",
    body: "A vetted network of private label buyers across European retail, foodservice, and GCC wholesale channels.",
  },
];

export function Capabilities() {
  return (
    <section id="pl-capabilities" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Private Label
              <br />
              <span className="text-[#e8a020]">Capabilities.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs" style={sans()}>
            End-to-end — from matching you to the right buyer, to managing the
            first order and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300"
            >
              <span className="text-3xl text-[#e8a020]/30 group-hover:text-[#e8a020]/60 transition-colors block mb-6">
                {c.icon}
              </span>
              <h3
                className="text-2xl uppercase mb-3 group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {c.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={sans()}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
