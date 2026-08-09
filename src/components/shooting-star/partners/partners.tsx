import { sans, serif } from "@/lib/utils";

export function Partners() {
  return (
    <section className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left children statement */}
          <div className="relative min-h-125 bg-[#080b10] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?w=900&h=700&fit=crop&auto=format"
              alt="Young girl running and laughing, full of joy"
              className="absolute inset-0 w-full h-full object-cover opacity-65"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 50%, rgba(13,15,20,0.9) 100%)",
              }}
            />
            <div className="absolute bottom-8 left-8">
              <div
                className="inline-block px-4 py-2 text-[0.65rem] uppercase tracking-widest text-white font-semibold"
                style={{
                  background: "#00b4c8",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Charity Partner 2024–2026
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span
              className="w-6 h-px block mb-6"
              style={{ background: "#00b4c8" }}
            />

            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-8"
              style={serif()}
            >
              Partnering for <br />
              <span style={{ color: "#00b4c8" }}>a Brighter</span>
              <br />
              <span className="text-[#e8a020]">Future.</span>
            </h2>
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm"
              style={sans()}
            >
              We Are Globex is proud to partner with{" "}
              <strong className="text-[#f0ede8]">
                Shooting Star Children's Hospices
              </strong>{" "}
              — a charity dedicated to supporting babies, children, and young
              people with life-limiting conditions, and their families, across
              Surrey and South West London.
            </p>
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm"
              style={sans()}
            >
              Shooting Star provides care and support whenever and wherever
              families need it — in the hospice, at home, in hospital, and in
              the community — for as long as they need it, completely free of
              charge.
            </p>
            <a
              href="https://www.shootingstar.org.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-block w-fit px-8 py-4 text-[0.7rem] uppercase tracking-widest text-white hover:opacity-80 transition-opacity"
              style={{ ...sans(600), background: "#00b4c8" }}
            >
              Learn About Shooting Star →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
