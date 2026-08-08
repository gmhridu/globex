import { sans } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[#0d0f14]" />
        <div style={{ background: "#00b4c8" }} />
      </div>

      {/* Radial glow at the split point */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,180,200,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col flex-1 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        {/* Two brand logos */}
        <div className="grid grid-cols-2 gap-8 mb-auto">
          <div />

          {/* Shooting Star */}
          <div className="flex items-start justify-end">
            <div className="text-right">
              <div
                className="text-[0.6rem] uppercase tracking-[0.2em] text-white/60 mb-2"
                style={sans(500)}
              >
                Our Charity Partner
              </div>
              <div
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                Shooting Star
              </div>
              <div
                className="text-lg md:text-xl text-white/80 tracking-widest uppercase"
                style={sans(300)}
              >
                children's hospices
              </div>
            </div>
          </div>
        </div>

        {/* Children photo — centred across both panels */}
        <div className="relative flex items-center justify-center my-10 md:my-16">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=640&h=640&fit=crop&auto=format"
              alt="Children playing together with a colourful parachute"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Star decoration */}
          <div
            className="absolute -top-2 -right-2 md:right-1/3 text-4xl opacity-60"
            style={{ color: "#e8a020" }}
          >
            ✦
          </div>
          <div
            className="absolute bottom-0 -left-2 md:left-1/3 text-2xl opacity-40"
            style={{ color: "#00b4c8" }}
          >
            ✦
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-[#e8a020]" />
            <span className="w-12 h-px" style={{ background: "#00b4c8" }} />
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl italic font-normal text-white text-center leading-tight"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}
          >
            Together, we shine for{" "}
            <span style={{ color: "#e8a020" }}>little stars.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
