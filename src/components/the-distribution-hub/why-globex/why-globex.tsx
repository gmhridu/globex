import { sans, serif } from "@/lib/utils";

const whyItems = [
  {
    n: "01",
    title: "We Don't Sell Databases",
    body: "No generic distributor lists. Every introduction is a qualified, active conversation with a buyer who fits your product.",
  },
  {
    n: "02",
    title: "We Stay in the Room",
    body: "We attend meetings, join calls, and support negotiations. Not a warm introduction — a working partnership.",
  },
  {
    n: "03",
    title: "Regional Depth",
    body: "Relationships built over years in Europe and the GCC — not a first-time call from a CRM.",
  },
  {
    n: "04",
    title: "Commercial Alignment",
    body: "We only take on products we believe we can move. Our success is measured in active trading relationships.",
  },
];

export function WhyGlobex() {
  return (
    <section
      id="dh-why-globex"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-12"
              style={serif()}
            >
              Distributor Development.
              <br />
              <span className="text-[#e8a020]">Not Database Delivery.</span>
            </h2>

            <div className="space-y-0">
              {whyItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-7 border-b border-border last:border-0"
                >
                  <span
                    className="text-[#e8a020]/30 text-4xl shrink-0 w-10"
                    style={serif(700)}
                  >
                    {item.n}
                  </span>
                  <div>
                    <h3
                      className="text-xl uppercase mb-2 text-[#f0ede8]"
                      style={serif(700)}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      style={sans()}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative min-h-125 bg-[#080b10]">
            <img
              src="https://images.unsplash.com/photo-1606964212858-c215029db704?w=900&h=800&fit=crop&auto=format"
              alt="Shipping containers at port representing global distribution network"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to left, transparent 50%, rgba(13,15,20,0.95) 100%)",
              }}
            />
            <div className="absolute bottom-8 right-8 text-right">
              <div className="text-5xl text-[#e8a020]" style={serif()}>
                60–90
              </div>
              <div
                className="text-[0.65rem] uppercase tracking-widest text-muted-foreground mt-1"
                style={sans(500)}
              >
                Days to First Introduction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
