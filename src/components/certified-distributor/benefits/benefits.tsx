import { sans, serif } from "@/lib/utils";

const benefits = [
  {
    icon: "◎",
    title: "Product Demand-Driven Sourcing",
    body: "Tell us what categories you need and we'll connect you with the right manufacturing partners.",
  },
  {
    icon: "◈",
    title: "Tailored Introductions",
    body: "Match with suppliers whose products fit your catalogue and market — no generic lists.",
  },
  {
    icon: "⬡",
    title: "First Look at New Products",
    body: "Get priority access to export-ready goods before they hit broader markets.",
  },
  {
    icon: "◉",
    title: "Dedicated Support Team",
    body: "Collaborate with a Globex account manager to handle samples, terms, and logistics.",
  },
  {
    icon: "◫",
    title: "Samples & Trials",
    body: "Access discounted or free product samples to evaluate before committing to an order.",
  },
  {
    icon: "⬢",
    title: "Strategic Market Alignment",
    body: "We match you with manufacturers that value your regional expertise and distribution reach.",
  },
];

export function Benefits() {
  return (
    <section id="cd-benefits" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Ready to Partner
              <br />
              <span className="text-[#e8a020]">
                with Leading
                <br />
                Manufacturers?
              </span>
            </h2>
          </div>
          <p
            className="text-sm text-muted-foreground max-w-xs leading-relaxed"
            style={sans()}
          >
            Become an approved distributor and gain exclusive access to our
            network of top manufacturers. Let's grow together through meaningful
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300"
            >
              <span className="text-3xl text-[#e8a020]/30 group-hover:text-[#e8a020]/60 transition-colors block mb-5">
                {b.icon}
              </span>
              <h3
                className="text-xl uppercase mb-3 group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {b.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={sans()}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
