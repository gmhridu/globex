import Link from "next/link";
import { sans, serif } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="w-6 h-px bg-[#e8a020]" />
        <span
          className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
          style={sans(500)}
        >
          The Work Continues
        </span>
        <span className="w-6 h-px bg-[#e8a020]" />
      </div>
      <h2
        className="text-5xl md:text-8xl uppercase leading-[0.88] mb-8"
        style={serif(800)}
      >
        Your Next Market
        <br />
        <span className="text-[#e8a020]">Starts Here.</span>
      </h2>
      <p
        className="text-sm text-[#7a7f8e] max-w-lg mx-auto leading-relaxed mb-10"
        style={sans(400)}
      >
        Awards matter. The right distributors, buyers, and revenue matter more.
        Let’s build your next stage of international growth.
      </p>
      <Link
        href="/contact"
        className="inline-block px-10 py-5 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors font-semibold shadow-[0_0_30px_rgba(232,160,32,0.2)] hover:shadow-[0_0_40px_rgba(232,160,32,0.35)]"
        style={sans(600)}
      >
        Start a Conversation
      </Link>
    </section>
  );
}
