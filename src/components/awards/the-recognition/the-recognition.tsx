import { sans, serif } from "@/lib/utils";

export function TheRecognition() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">
        {/* Sticky left title */}
        <div className="lg:sticky lg:top-28">
          <p
            className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
            style={sans(600)}
          >
            The Recognition
          </p>
          <h2
            className="text-5xl md:text-7xl uppercase leading-[0.88] mb-7"
            style={serif(800)}
          >
            More Than
            <br />
            A Moment
            <br />
            <span className="text-[#e8a020]">On Stage.</span>
          </h2>
        </div>

        {/* Narrative & Quote */}
        <div
          className="space-y-7 text-[#c4bfb8] text-base leading-relaxed"
          style={sans(400)}
        >
          <p>
            The International Manufacturing Growth Partner of the Year award
            recognises the work behind successful international expansion:
            rigorous market qualification, carefully selected commercial routes,
            and relationships that continue long after an introduction is made.
          </p>
          <p>
            For We Are Globex, the recognition reflects an execution-led model.
            We work alongside manufacturers to understand commercial readiness,
            identify the markets where a product can compete, engage the right
            distributors and buyers, and maintain the follow-through needed to
            turn conversations into sustainable growth.
          </p>
          <p>
            It also recognises the trust placed in us by manufacturers and
            international partners. Every market entry is different, but our
            standard remains the same: informed strategy, transparent activity,
            and a clear focus on outcomes.
          </p>
          <blockquote className="border-l-2 border-[#e8a020] pl-7 py-3 mt-10">
            <p
              className="text-2xl md:text-3xl uppercase leading-tight text-[#f0ede8]"
              style={serif(600)}
            >
              “Recognition of the discipline, relationships, and execution
              required to make international growth work.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
