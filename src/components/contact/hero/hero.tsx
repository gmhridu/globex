import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative h-[55vh] min-h-100 flex items-end pb-16 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#060810]">
        <img
          src="https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1800&h=800&fit=crop&auto=format"
          alt="City skyline at night"
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(6,8,16,0.85) 0%, rgba(6,8,16,0.3) 50%, rgba(6,8,16,0.9) 100%)",
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
            We're Here to Help
          </span>
        </div>
        <h1
          className="text-[5rem] md:text-[8rem] leading-[0.88] uppercase"
          style={serif()}
        >
          Contact
          <br />
          <span className="text-[#e8a020]">Us.</span>
        </h1>
      </div>
    </section>
  );
}
