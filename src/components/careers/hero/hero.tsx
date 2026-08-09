import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-[75vh] min-h-125 flex items-end pb-16 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#050709]">
        <img
          src="https://images.unsplash.com/photo-1692154600992-463fa9b27abd?w=1800&h=900&fit=crop&auto=format"
          alt="City skyline at night"
          className="w-full h-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(5,7,9,0.85) 0%, rgba(5,7,9,0.2) 50%, rgba(5,7,9,0.92) 100%)",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
            style={sans(500)}
          >
            Careers
          </span>
        </div>
        <h1
          className="text-[5.5rem] md:text-[9rem] leading-[0.88] uppercase"
          style={serif()}
        >
          Join
          <br />
          <span className="text-[#e8a020]">The Team.</span>
        </h1>
      </div>
    </section>
  );
}
