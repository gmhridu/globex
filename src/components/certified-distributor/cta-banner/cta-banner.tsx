import { sans, serif } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#080b10]">
        <img
          src="https://images.unsplash.com/photo-1692154600992-463fa9b27abd?w=1800&h=400&fit=crop&auto=format"
          alt="City at night"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#e8a020]/5" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2
            className="text-5xl md:text-6xl uppercase leading-none"
            style={serif()}
          >
            Ready to Grow
            <br />
            <span className="text-[#e8a020]">With Us?</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm" style={sans()}>
            Join a global network of trusted distributors working with
            world-class manufacturers.
          </p>
        </div>
        <a
          href="#cd-apply"
          className="shrink-0 px-10 py-5 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
          style={sans(700)}
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
