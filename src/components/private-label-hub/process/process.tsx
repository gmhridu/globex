import { sans, serif } from "@/lib/utils";

const processSteps = [
  {
    n: "01",
    title: "Product Audit",
    body: "We assess your product range, capacity, certifications, and packaging capabilities against private label buyer expectations.",
  },
  {
    n: "02",
    title: "Buyer Matching",
    body: "We match you to the right buyer profile — retail, foodservice, e-commerce, or wholesale — based on your product and volume.",
  },
  {
    n: "03",
    title: "Brief & Specification",
    body: "We manage the brief from buyer to manufacturer. Specification, packaging, compliance, pricing — all aligned before first order.",
  },
  {
    n: "04",
    title: "Pilot & Scale",
    body: "First production run managed end-to-end. Performance benchmarked. Repeat order structure locked in before launch.",
  },
];

export function Process() {
  return (
    <section id="pl-process" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020]"
            style={sans(500)}
          >
            Our Private Label Process
          </span>
        </div>
        <h2
          className="text-6xl md:text-7xl uppercase leading-none mb-16"
          style={serif()}
        >
          Brief to
          <br />
          <span className="text-[#e8a020]">First Order.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {processSteps.map((s) => (
            <div
              key={s.n}
              className="bg-card p-8 group hover:bg-secondary transition-colors"
            >
              <div
                className="text-5xl text-border group-hover:text-[#e8a020]/20 transition-colors mb-6"
                style={serif(700)}
              >
                {s.n}
              </div>
              <h3
                className="text-2xl uppercase mb-3 group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {s.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={sans()}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
