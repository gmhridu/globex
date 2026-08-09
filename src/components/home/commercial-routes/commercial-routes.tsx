import { sans, serif } from "@/lib/utils";

const routes = [
  { title: "Master Distributor", icon: "◈" },
  { title: "Channel Distributor", icon: "◉" },
  { title: "Importer", icon: "⬡" },
  { title: "Retail Buyer", icon: "◫" },
  { title: "Strategic Account", icon: "◎" },
  { title: "Private Label Buyer", icon: "⬢" },
];

export function CommercialRoutes() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Commercial
              <br />
              <span className="text-[#e8a020]">Routes We Build</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs" style={sans()}>
            Distributor development — not database delivery. We build active
            trading relationships.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {routes.map((r) => (
            <div
              key={r.title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300 text-center flex flex-col items-center gap-4"
            >
              <span className="text-3xl text-[#e8a020]/40 group-hover:text-[#e8a020] transition-colors">
                {r.icon}
              </span>
              <span
                className="text-sm uppercase leading-tight text-secondary-foreground group-hover:text-[#f0ede8] transition-colors text-center"
                style={sans(500)}
              >
                {r.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
