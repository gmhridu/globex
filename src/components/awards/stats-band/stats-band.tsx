import { AWARDS_STATS } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function StatsBand() {
  return (
    <section className="border-y border-[#2a2f3d] bg-[#151820]">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-3 gap-12">
        {AWARDS_STATS.map((stat) => (
          <div
            key={stat.label}
            className="md:border-l md:border-[#2a2f3d] md:pl-8 first:border-l-0 first:pl-0"
          >
            <p
              className="text-6xl md:text-7xl text-[#e8a020] leading-none mb-3"
              style={serif(800)}
            >
              {stat.value}
            </p>
            <p
              className="text-[0.65rem] uppercase tracking-[0.2em] text-[#7a7f8e]"
              style={sans(500)}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
