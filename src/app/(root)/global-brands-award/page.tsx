"use client";

import { useEffect, useState } from "react";

const eventReception = "/global-brands-event-01.png";
const eventPerformance = "/global-brands-event-02.png";
const eventLightDancers = "/global-brands-event-03.png";
const eventSaxophonist = "/global-brands-event-05.png";
const eventGuests = "/global-brands-event-06.png";
const awardTrophy = "/global-brands-award-trophy.png";
const groupPhoto = "/global-brands-awards-group.png";
const stagePhoto = "/global-brands-awards-stage.jpg";

const dubaiImage =
  "https://images.unsplash.com/photo-1638180940769-bc94c1ffc9cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1800";

const eventPhotos = [
  {
    src: eventReception,
    alt: "Guests networking at the Global Brand Awards reception",
    caption: "Awards Reception · Guests Arrive",
    gridClass: "md:col-span-5",
  },
  {
    src: eventPerformance,
    alt: "Dancers performing on stage at the Global Brand Awards",
    caption: "Opening Performance · Global Brand Awards",
    gridClass: "md:col-span-7",
  },
  {
    src: eventLightDancers,
    alt: "Illuminated wing dancers performing against a starry backdrop",
    caption: "Evening Entertainment · Light Performance",
    gridClass: "md:col-span-7",
  },
  {
    src: eventSaxophonist,
    alt: "Saxophonist performing during the Global Brand Awards ceremony",
    caption: "Live Music · Awards Night",
    gridClass: "md:col-span-5",
  },
  {
    src: eventGuests,
    alt: "Guests seated at the Global Brand Awards ceremony",
    caption: "The Ceremony · Dubai",
    gridClass: "md:col-span-7",
  },
  {
    src: awardTrophy,
    alt: "We Are Globex trophy and certificate for International Manufacturing Growth Partner of the Year",
    caption: "International Manufacturing Growth Partner of the Year",
    gridClass: "md:col-span-5",
  },
];

const criteria = [
  {
    number: "01",
    title: "Achievements",
    description:
      "How the brand has excelled in its field and translated expertise into meaningful commercial outcomes.",
  },
  {
    number: "02",
    title: "Presence in the Submitted Region",
    description:
      "The strength, relevance, and development of the brand’s operational and market presence in the specified region.",
  },
  {
    number: "03",
    title: "Customer Satisfaction",
    description:
      "Evidence of trusted relationships, customer satisfaction, loyalty, and consistent service delivery.",
  },
  {
    number: "04",
    title: "Innovation & Performance",
    description:
      "Commitment to innovation, a differentiated approach, and strong overall business performance.",
  },
  {
    number: "05",
    title: "Other Relevant Factors",
    description:
      "Wider contributions such as social responsibility, sustainability, and positive industry impact.",
  },
];

interface Props {
  onBack: () => void;
  onHome: () => void;
  onContact: () => void;
}

export default function GlobalBrandsAwardPage({
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
          src={dubaiImage}
          alt="Dubai skyline with the Burj Khalifa at golden hour"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(13,15,20,0.98) 0%, rgba(13,15,20,0.88) 44%, rgba(13,15,20,0.32) 76%, rgba(13,15,20,0.58) 100%), linear-gradient(0deg, rgba(13,15,20,0.92) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-[#e8a020]" />
              <span
                className="text-[0.65rem] uppercase tracking-[0.24em] text-[#e8a020]"
                style={body(600)}
              >
                Global Brands Magazine · Global Brand Awards 2026
              </span>
            </div>
            <h1
              className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] uppercase leading-[0.82] mb-8"
              style={display()}
            >
              International
              <br />
              Manufacturing Growth
              <br />
              <span className="text-[#e8a020]">Partner of the Year.</span>
            </h1>
            <p
              className="text-base md:text-lg text-[#c4bfb8] leading-relaxed max-w-2xl mb-10"
              style={body()}
            >
              International recognition for building sustainable distributor,
              buyer, and private-label relationships that help manufacturers
              grow beyond their home markets.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.globalbrandsmagazine.com/award-winners-2026/?id=458&cat_id=30204"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.65rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
                style={body(600)}
              >
                View Official Recognition ↗
              </a>
              <a
                href="#event"
                className="px-7 py-4 border border-white/20 text-[#f0ede8] text-[0.65rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
                style={body(500)}
              >
                See the Event
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2a2f3d] bg-[#151820]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3">
          {[
            ["2026", "Award year"],
            ["Global", "International recognition"],
            ["Independent", "Jury assessment"],
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

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <p
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
              style={body(600)}
            >
              The Recognition
            </p>
            <h2
              className="text-5xl md:text-7xl uppercase leading-[0.88] mb-7"
              style={display()}
            >
              More Than
              <br />A Moment
              <br />
              <span className="text-[#e8a020]">On Stage.</span>
            </h2>
          </div>
          <div
            className="space-y-7 text-[#c4bfb8] text-base leading-relaxed"
            style={body()}
          >
            <p>
              The International Manufacturing Growth Partner of the Year award
              recognises the work behind successful international expansion:
              rigorous market qualification, carefully selected commercial
              routes, and relationships that continue long after an introduction
              is made.
            </p>
            <p>
              For We Are Globex, the recognition reflects an execution-led
              model. We work alongside manufacturers to understand commercial
              readiness, identify the markets where a product can compete,
              engage the right distributors and buyers, and maintain the
              follow-through needed to turn conversations into sustainable
              growth.
            </p>
            <p>
              It also recognises the trust placed in us by manufacturers and
              international partners. Every market entry is different, but our
              standard remains the same: informed strategy, transparent
              activity, and a clear focus on outcomes.
            </p>
            <blockquote className="border-l-2 border-[#e8a020] pl-7 py-3 mt-10">
              <p
                className="text-2xl md:text-3xl uppercase leading-tight text-[#f0ede8]"
                style={display(600)}
              >
                “Recognition of the discipline, relationships, and execution
                required to make international growth work.”
              </p>
            </blockquote>
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
                Independent Assessment
              </p>
              <h2
                className="text-5xl md:text-7xl uppercase leading-[0.9] mb-7"
                style={display()}
              >
                The Award
                <br />
                <span className="text-[#e8a020]">Criteria.</span>
              </h2>
              <p
                className="text-sm text-[#7a7f8e] leading-relaxed max-w-sm"
                style={body()}
              >
                Global Brand Awards are assessed by an independent jury against
                five broad criteria. Together, they consider both market
                performance and the quality of the brand behind it.
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
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-28 h-28 border-l border-t border-[#e8a020]/50" />
            <img
              src={groupPhoto}
              alt="Global Brand Awards winners gathered at the 2026 ceremony"
              className="relative w-full aspect-3/2 object-cover"
            />
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
              Global Brands
              <br />
              <span className="text-[#e8a020]">Magazine.</span>
            </h2>
            <div
              className="space-y-5 text-sm text-[#c4bfb8] leading-relaxed"
              style={body()}
            >
              <p>
                Global Brands Magazine is an international publication focused
                on brands, leadership, innovation, and performance across
                industries and markets worldwide.
              </p>
              <p>
                Its Global Brand Awards programme recognises organisations that
                demonstrate distinction in their field. Winners are selected
                through an independent assessment process designed to identify
                strong performance, customer trust, market presence, and
                sustained brand value.
              </p>
              <p>
                Being recognised alongside organisations from around the world
                places We Are Globex within a global community of businesses
                committed to raising standards in their sectors.
              </p>
            </div>
            <a
              href="https://www.globalbrandsmagazine.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-2 hover:text-[#f0b030] transition-colors"
              style={body(600)}
            >
              Visit Global Brands Magazine ↗
            </a>
          </div>
        </div>
      </section>

      <section id="event" className="border-t border-[#2a2f3d] bg-[#151820]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p
                className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
                style={body(600)}
              >
                Event Gallery
              </p>
              <h2
                className="text-5xl md:text-7xl uppercase leading-[0.9]"
                style={display()}
              >
                From the
                <br />
                <span className="text-[#e8a020]">Awards Night.</span>
              </h2>
            </div>
            <p
              className="text-sm text-[#7a7f8e] leading-relaxed max-w-sm"
              style={body()}
            >
              A look inside the Global Brand Awards ceremony in Dubai, from the
              opening reception to the live performances and award presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <figure className="md:col-span-8 relative overflow-hidden bg-[#0d0f14]">
              <img
                src={groupPhoto}
                alt="Global Brand Awards 2026 winners"
                className="w-full aspect-[16/10] object-cover"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0d0f14] to-transparent text-[0.6rem] uppercase tracking-widest text-[#c4bfb8]"
                style={body(500)}
              >
                Global Brand Awards 2026 · Winners
              </figcaption>
            </figure>
            <figure className="md:col-span-4 relative overflow-hidden bg-[#0d0f14]">
              <img
                src={stagePhoto}
                alt="We Are Globex accepting the award"
                className="w-full h-full min-h-[28rem] object-cover"
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0d0f14] to-transparent text-[0.6rem] uppercase tracking-widest text-[#c4bfb8]"
                style={body(500)}
              >
                We Are Globex · Award Presentation
              </figcaption>
            </figure>
            {eventPhotos.map((photo) => (
              <figure
                key={photo.src}
                className={`${photo.gridClass} relative overflow-hidden bg-[#0d0f14]`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-80 md:h-96 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption
                  className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0d0f14] to-transparent text-[0.6rem] uppercase tracking-widest text-[#c4bfb8]"
                  style={body(500)}
                >
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2f3d]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-14 lg:gap-24">
            <div>
              <p
                className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
                style={body(600)}
              >
                Event Films
              </p>
              <h2
                className="text-5xl md:text-7xl uppercase leading-[0.9]"
                style={display()}
              >
                Watch the
                <br />
                <span className="text-[#e8a020]">Story.</span>
              </h2>
            </div>
            <div className="overflow-hidden border border-[#2a2f3d] bg-[#151820]">
              <iframe
                className="block w-full aspect-video"
                src="https://www.youtube-nocookie.com/embed/qfagpavEx0Y?rel=0"
                title="We Are Globex at the Global Brand Awards 2026"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#2a2f3d] bg-[#e8a020] text-[#0d0f14]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
          <p
            className="text-[0.65rem] uppercase tracking-[0.22em] mb-5"
            style={body(600)}
          >
            Build What Comes Next
          </p>
          <h2
            className="text-5xl md:text-8xl uppercase leading-[0.88] mb-8"
            style={display()}
          >
            International Growth
            <br />
            Is Built, Not Hoped For.
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
