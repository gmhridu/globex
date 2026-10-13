import { GLOBAL_BRANDS_CRITERIA } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function Criteria() {
  return (
    <section className="border-y border-[#2a2f3d] bg-[#11141b]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-14 lg:gap-24">
          {/* Left Column / Heading & Overview */}
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
              style={sans(600)}
            >
              Independent Assessment
            </p>
            <h2
              className="text-5xl md:text-7xl uppercase leading-[0.9] mb-7 text-[#f0ede8]"
              style={serif(800)}
            >
              The Award
              <br />
              <span className="text-[#e8a020]">Criteria.</span>
            </h2>
            <p
              className="text-sm text-[#7a7f8e] leading-relaxed max-w-sm"
              style={sans(400)}
            >
              Global Brand Awards are assessed by an independent jury against five
              broad criteria. Together, they consider both market performance and
              the quality of the brand behind it.
            </p>
          </div>

          {/* Right Column / Criteria Items */}
          <div className="border-t border-[#2a2f3d]">
            {GLOBAL_BRANDS_CRITERIA.map((item) => (
              <article
                key={item.number}
                className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-5 py-7 border-b border-[#2a2f3d]"
              >
                <p className="text-sm text-[#e8a020]" style={serif(700)}>
                  {item.number}
                </p>
                <div>
                  <h3
                    className="text-2xl md:text-3xl uppercase mb-2 text-[#f0ede8]"
                    style={serif(700)}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-[#7a7f8e] leading-relaxed"
                    style={sans(400)}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
