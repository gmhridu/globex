import { sans, serif } from "@/lib/utils";

const howWeHelp = [
  { value: "£500+", label: "Raised per quarter through company giving" },
  { value: "12", label: "Team members participating in fundraising" },
  { value: "2,700", label: "Families supported by Shooting Star each year" },
  { value: "100%", label: "Free to families — funded entirely by donations" },
];

export function HowGlobexHelps() {
  return (
    <section className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-115 bg-[#080b10] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1627764940620-90393d0e8c34?w=900&h=700&fit=crop&auto=format"
              alt="Woman and child dancing on a field, joyful moment"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 40%, rgba(13,15,20,0.9) 100%)",
              }}
            />
          </div>

          {/* Stats */}
          <div className="bg-card py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-12"
              style={serif()}
            >
              How Globex
              <br />
              <span className="text-[#e8a020]">Contributes.</span>
            </h2>
            <div className="grid grid-cols-2 gap-px bg-border">
              {howWeHelp.map((s) => (
                <div key={s.label} className="bg-[#0d0f14] p-6 text-center">
                  <div
                    className="text-4xl mb-2"
                    style={{
                      ...serif(),
                      color:
                        s.label.includes("families") || s.label.includes("Free")
                          ? "#00b4c8"
                          : "#e8a020",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[0.6rem] uppercase tracking-widest text-muted-foreground leading-snug"
                    style={sans(500)}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
