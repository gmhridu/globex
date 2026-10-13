import Link from "next/link";
import { sans, serif } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="border-t border-[#2a2f3d] bg-[#e8a020] text-[#0d0f14]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <p
          className="text-[0.65rem] uppercase tracking-[0.22em] mb-5"
          style={sans(600)}
        >
          Build What Comes Next
        </p>
        <h2
          className="text-5xl md:text-8xl uppercase leading-[0.88] mb-8"
          style={serif(800)}
        >
          International Growth
          <br />
          Is Built, Not Hoped For.
        </h2>
        <Link
          href="/contact"
          className="inline-block px-10 py-5 bg-[#0d0f14] text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:bg-[#151820] transition-colors"
          style={sans(600)}
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
