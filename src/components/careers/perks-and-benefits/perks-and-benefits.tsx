import { sans, serif } from "@/lib/utils";

export function PerksAndBenefits() {
  const perks = [
    {
      icon: "💷",
      title: "Competitive Salary",
      body: "Benchmarked against market rates with annual reviews tied to performance.",
    },
    {
      icon: "🕐",
      title: "Flexible Working",
      body: "Hybrid working as standard — we trust you to manage your time and deliver.",
    },
    {
      icon: "📈",
      title: "Professional Development",
      body: "Dedicated L&D budget, access to trade courses, and international exposure built into the role.",
    },
    {
      icon: "🏥",
      title: "Health & Dental",
      body: "Company-funded private health and dental cover from day one.",
    },
    {
      icon: "⚡",
      title: "Fast Growth Environment",
      body: "We're scaling fast. The people who join now will shape how Globex operates at ten times our current size.",
    },
    {
      icon: "🎯",
      title: "Targeted Bonuses",
      body: "Performance bonuses tied to client outcomes — when we win, you win.",
    },
  ];
  return (
    <section
      id="careers-benefits"
      className="py-24 border-t border-border bg-card"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Perks &<br />
              <span className="text-[#e8a020]">Benefits.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs" style={sans()}>
            We build the conditions for people to do their best work and grow
            alongside the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {perks.map((p) => (
            <div
              key={p.title}
              className="bg-card p-8 group hover:bg-[#0d0f14] transition-colors"
            >
              <span className="text-2xl block mb-5">{p.icon}</span>
              <h3
                className="text-xl uppercase mb-3 group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {p.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={sans()}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
