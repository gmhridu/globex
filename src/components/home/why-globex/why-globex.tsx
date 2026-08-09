import { sans, serif } from "@/lib/utils";

const differentiators = [
  {
    title: "Execution Over Advice",
    body: "We build the route. We make the calls. We close the relationships.",
  },
  {
    title: "Market Qualification",
    body: "Only the right markets for your product category and margin structure.",
  },
  {
    title: "Europe & Middle East Focus",
    body: "Deep regional expertise — not a generalist with a map.",
  },
  {
    title: "Ongoing Follow-Through",
    body: "We stay engaged until the distributor is active and reordering.",
  },
  {
    title: "Selective Intake",
    body: "We only take on manufacturers we can genuinely move the needle for.",
  },
  {
    title: "Reporting Transparency",
    body: "You see every contact, every conversation, every outcome.",
  },
];

export function WhyGlobex() {
  return (
    <section className="py-24 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020]"
            style={sans(500)}
          >
            Why Globex
          </span>
        </div>
        <h2
          className="text-6xl md:text-7xl uppercase leading-none mb-16"
          style={serif()}
        >
          Execution
          <br />
          <span className="text-[#e8a020]">Over Advice.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="bg-card p-8 group hover:bg-[#0d0f14] transition-colors"
            >
              <div className="w-6 h-px bg-[#e8a020]/30 group-hover:bg-[#e8a020] transition-colors mb-6" />
              <h3
                className="text-xl uppercase mb-3 text-[#f0ede8] group-hover:text-[#e8a020] transition-colors"
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
