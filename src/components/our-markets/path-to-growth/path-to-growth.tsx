import { sans, serif } from "@/lib/utils";

export function PathToGrowth() {
  return (
    <section className="py-24 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="w-6 h-px bg-[#e8a020] block mx-auto mb-4" />
          <h2
            className="text-6xl md:text-7xl uppercase leading-none"
            style={serif()}
          >
            Building Your Path
            <br />
            <span className="text-[#e8a020]">to Global Growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {[
            {
              icon: "◎",
              title: "Market Entry",
              body: "We identify and validate the right markets for your specific product category — no generic targets, no wasted budget.",
              cta: "Explore Distribution Hub",
              page: "distribution-hub",
            },
            {
              icon: "◈",
              title: "Distribution & Export",
              body: "We build the full distribution infrastructure — channel strategy, partner qualification, and in-market commercial activation.",
              cta: "Explore Distribution Hub",
              page: "distribution-hub",
            },
            {
              icon: "⬢",
              title: "Commercial Routes",
              body: "From master distributor to retail buyer and private label, we match you to the right commercial model for your product and margin.",
              cta: "Explore Private Label Hub",
              page: "private-label",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card p-10 group hover:bg-[#0d0f14] transition-colors"
            >
              <span className="text-3xl text-[#e8a020]/30 group-hover:text-[#e8a020]/60 transition-colors block mb-6">
                {item.icon}
              </span>
              <h3
                className="text-2xl uppercase mb-4 group-hover:text-[#e8a020] transition-colors"
                style={serif(700)}
              >
                {item.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed mb-8"
                style={sans()}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
