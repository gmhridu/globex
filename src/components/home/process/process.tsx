import { sans, serif } from "@/lib/utils";

const processSteps = [
  {
    n: "01",
    title: "Qualify",
    body: "We assess your product, margins, and market-readiness. Honest answers, fast.",
  },
  {
    n: "02",
    title: "Target",
    body: "We identify the right markets, the right routes, and the right buyers.",
  },
  {
    n: "03",
    title: "Build",
    body: "We develop distributor relationships in-market. Not introductions — active development.",
  },
  {
    n: "04",
    title: "Launch",
    body: "First orders placed, performance benchmarked, expansion mapped.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020]"
            style={sans(500)}
          >
            A Proven Process. Global Results.
          </span>
        </div>
        <h2
          className="text-6xl md:text-7xl uppercase leading-none mb-16"
          style={serif()}
        >
          Four Steps.
          <br />
          <span className="text-[#e8a020]">Real Markets.</span>
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
