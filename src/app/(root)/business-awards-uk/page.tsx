"use client";

import { useEffect, useState } from "react";

const londonImage =
  "https://images.unsplash.com/photo-1549483249-f0b359d1e289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800";

const criteria = [
  {
    number: "01",
    title: "Clear Differentiation",
    description:
      "Entries are assessed on what makes the organisation different from others in its sector and how clearly that distinction is demonstrated.",
  },
  {
    number: "02",
    title: "Relevant Evidence",
    description:
      "Judges look for specific examples, reviews, testimonials, or case studies that support the claims made in an entry.",
  },
  {
    number: "03",
    title: "Quality of Examples",
    description:
      "Evidence must do more than exist. Its quality, relevance to the category, and ability to demonstrate real outcomes are considered.",
  },
  {
    number: "04",
    title: "Validity & Clarity",
    description:
      "Supporting information is checked for validity, with concise and specific entries encouraged throughout the judging process.",
  },
  {
    number: "05",
    title: "Fair, Consistent Scoring",
    description:
      "Entries are assessed through a structured scoring process, with judges required to declare potential conflicts of interest.",
  },
];

interface Props {
  onBack: () => void;
  onHome: () => void;
  onContact: () => void;
}

export default function BusinessAwardsUKPage({
  onBack,
  onHome,
  onContact,
}: Props) {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const display = (weight = 800) => ({
    fontFamily: "Barlow Condensed, sans-serif",
    fontWeight: weight,
  });
  const body = (weight = 400) => ({
    fontFamily: "Inter, sans-serif",
    fontWeight: weight,
  });

  return (
    <main>
      <section className="relative min-h-screen flex items-end pt-32 pb-16 md:pb-24 overflow-hidden">
        <img
          src={londonImage}
          alt="The City of London skyline at golden hour"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,15,20,0.98) 0%, rgba(13,15,20,0.9) 46%, rgba(13,15,20,0.3) 78%), linear-gradient(0deg, rgba(13,15,20,0.94) 0%, transparent 58%)",
          }}
        />
        <div className="absolute right-[8%] top-28 hidden lg:flex w-48 h-48 rounded-full border border-[#e8a020]/50 items-center justify-center">
          <div className="w-36 h-36 rounded-full border border-[#e8a020]/30 flex flex-col items-center justify-center text-center">
            <span
              className="text-[0.55rem] uppercase tracking-[0.22em] text-[#e8a020]"
              style={body(600)}
            >
              Greater London
            </span>
            <span className="text-5xl text-[#f0ede8]" style={display()}>
              2026
            </span>
            <span
              className="text-[0.55rem] uppercase tracking-[0.22em] text-[#7a7f8e]"
              style={body(500)}
            >
              Winner
            </span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-[#e8a020]" />
              <span
                className="text-[0.65rem] uppercase tracking-[0.24em] text-[#e8a020]"
                style={body(600)}
              >
                Business Awards UK · Greater London Business Awards 2026
              </span>
            </div>
            <h1
              className="text-[4.5rem] sm:text-[6.5rem] md:text-[8.5rem] uppercase leading-[0.8] mb-8"
              style={display()}
            >
              Business
              <br />
              Consultancy
              <br />
              <span className="text-[#e8a020]">of the Year.</span>
            </h1>
            <p
              className="text-base md:text-lg text-[#c4bfb8] leading-relaxed max-w-2xl mb-10"
              style={body()}
            >
              Recognised for making international expansion more structured and
              commercially achievable for manufacturers entering Europe and the
              Middle East.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://business-awards.uk/2026-greater-london-business-awards-results/"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.65rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
                style={body(600)}
              >
                View Official Results ↗
              </a>
              <a
                href="#recognition"
                className="px-7 py-4 border border-white/20 text-[#f0ede8] text-[0.65rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
                style={body(500)}
              >
                Read the Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2a2f3d] bg-[#151820]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3">
          {[
            ["2,000+", "Commercial partners engaged"],
            ["2 Regions", "Europe & Middle East"],
            ["Hands-on", "Market-entry execution"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="py-9 sm:px-8 border-b sm:border-b-0 sm:border-l border-[#2a2f3d] first:border-l-0 first:pl-0"
            >
              <p
                className="text-3xl md:text-4xl uppercase text-[#e8a020] leading-none mb-2"
                style={display()}
              >
                {value}
              </p>
              <p
                className="text-[0.6rem] uppercase tracking-[0.2em] text-[#7a7f8e]"
                style={body(500)}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="recognition"
        className="max-w-7xl mx-auto px-6 py-24 md:py-32"
      >
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <p
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
              style={body(600)}
            >
              Why Globex Was Recognised
            </p>
            <h2
              className="text-5xl md:text-7xl uppercase leading-[0.88] mb-7"
              style={display()}
            >
              Practical
              <br />
              Expertise.
              <br />
              <span className="text-[#e8a020]">Real Execution.</span>
            </h2>
          </div>
          <div
            className="space-y-7 text-[#c4bfb8] text-base leading-relaxed"
            style={body()}
          >
            <p>
              Business Awards UK highlighted We Are Globex’s hands-on model for
              supporting manufacturers throughout the market-entry process—from
              identifying suitable distributors to facilitating introductions
              and commercial negotiations.
            </p>
            <p>
              The published recognition points to more than 2,000 commercial
              partners engaged across Europe and the Middle East. That network
              supports a repeatable framework designed to help clients reach
              overseas markets with greater focus, efficiency, and commercial
              confidence.
            </p>
            <p>
              The award reflects a consultancy model built around action.
              Strategy establishes where an opportunity exists; structured
              outreach, partner qualification, negotiation support, and
              continued follow-through are what turn that opportunity into a
              viable route to market.
            </p>
            <blockquote className="border-l-2 border-[#e8a020] pl-7 py-3 mt-10">
              <p
                className="text-2xl md:text-3xl uppercase leading-tight text-[#f0ede8]"
                style={display(600)}
              >
                “Making international expansion more structured and commercially
                achievable.”
              </p>
              <cite
                className="block mt-4 text-[0.6rem] not-italic uppercase tracking-[0.18em] text-[#7a7f8e]"
                style={body(500)}
              >
                Business Awards UK · Greater London Business Awards 2026
              </cite>
            </blockquote>
            <a
              href="https://business-awards.uk/greater-london-business-awards-2026-practical-innovation-people-led-growth-and-wider-opportunity/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-2 hover:text-[#f0b030] transition-colors"
              style={body(600)}
            >
              Read the Winner Profile ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2a2f3d] bg-[#11141b]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-14 lg:gap-24">
            <div>
              <p
                className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
                style={body(600)}
              >
                The Assessment
              </p>
              <h2
                className="text-5xl md:text-7xl uppercase leading-[0.9] mb-7"
                style={display()}
              >
                Evidence
                <br />
                <span className="text-[#e8a020]">That Stands Up.</span>
              </h2>
              <p
                className="text-sm text-[#7a7f8e] leading-relaxed max-w-sm"
                style={body()}
              >
                Business Awards UK documents a structured scoring process
                focused on differentiation, specific supporting evidence, and
                fair assessment within each category.
              </p>
            </div>
            <div className="border-t border-[#2a2f3d]">
              {criteria.map((item) => (
                <article
                  key={item.number}
                  className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-5 py-7 border-b border-[#2a2f3d]"
                >
                  <p className="text-sm text-[#e8a020]" style={display(700)}>
                    {item.number}
                  </p>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl uppercase mb-2"
                      style={display(700)}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-[#7a7f8e] leading-relaxed"
                      style={body()}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
              <a
                href="https://business-awards.uk/2026-greater-london-business-awards-results/"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-8 text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-2 hover:text-[#f0b030] transition-colors"
                style={body(600)}
              >
                Review the Published Process ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="relative min-h-[30rem] overflow-hidden">
            <img
              src={londonImage}
              alt="London’s commercial skyline"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#e8a020]/10" />
            <div className="absolute bottom-0 left-0 p-6 bg-[#0d0f14]/90 border-t border-r border-[#2a2f3d]">
              <p
                className="text-[0.6rem] uppercase tracking-[0.18em] text-[#e8a020]"
                style={body(600)}
              >
                Regional Programme
              </p>
              <p className="text-2xl uppercase mt-1" style={display(700)}>
                Greater London · 2026
              </p>
            </div>
          </div>
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
              style={body(600)}
            >
              About the Organisation
            </p>
            <h2
              className="text-5xl md:text-7xl uppercase leading-[0.9] mb-7"
              style={display()}
            >
              Business
              <br />
              <span className="text-[#e8a020]">Awards UK.</span>
            </h2>
            <div
              className="space-y-5 text-sm text-[#c4bfb8] leading-relaxed"
              style={body()}
            >
              <p>
                Business Awards UK runs national, regional, and sector-specific
                programmes that recognise organisations and individuals across
                the UK business community.
              </p>
              <p>
                Its Greater London Business Awards celebrate the breadth of
                enterprise across the capital. The 2026 programme spans
                international consultancy, technology, healthcare, education,
                logistics, community impact, and other fields.
              </p>
              <p>
                Judging uses internal staff and guest or external industry
                experts. Judges declare possible conflicts of interest, and
                entries follow a consistent scoring process within each
                category.
              </p>
            </div>
            <a
              href="https://business-awards.uk/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-2 hover:text-[#f0b030] transition-colors"
              style={body(600)}
            >
              Visit Business Awards UK ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2f3d] bg-[#e8a020] text-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <p
            className="text-[0.65rem] uppercase tracking-[0.22em] mb-5"
            style={body(600)}
          >
            Put Expertise to Work
          </p>
          <h2
            className="text-5xl md:text-8xl uppercase leading-[0.88] mb-8"
            style={display()}
          >
            Take Your Business
            <br />
            Into Its Next Market.
          </h2>
          <button
            onClick={onContact}
            className="px-10 py-5 bg-[#0d0f14] text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:bg-[#151820] transition-colors"
            style={body(600)}
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </main>
  );
}
