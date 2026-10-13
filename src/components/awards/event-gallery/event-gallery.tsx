import { AWARD_IMAGES, EVENT_PHOTOS } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function EventGallery() {
  return (
    <section id="event" className="border-t border-[#2a2f3d] bg-[#151820]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
              style={sans(600)}
            >
              Event Gallery
            </p>
            <h2
              className="text-5xl md:text-7xl uppercase leading-[0.9] text-[#f0ede8]"
              style={serif(800)}
            >
              From the
              <br />
              <span className="text-[#e8a020]">Awards Night.</span>
            </h2>
          </div>
          <p
            className="text-sm text-[#7a7f8e] leading-relaxed max-w-sm"
            style={sans(400)}
          >
            A look inside the Global Brand Awards ceremony in Dubai, from the
            opening reception to the live performances and award presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Winners Ceremony Photo */}
          <figure className="md:col-span-8 relative overflow-hidden bg-[#0d0f14]">
            <img
              src={AWARD_IMAGES.groupPhoto}
              alt="Global Brand Awards 2026 winners"
              className="w-full aspect-[16/10] object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption
              className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0d0f14] to-transparent text-[0.6rem] uppercase tracking-widest text-[#c4bfb8]"
              style={sans(500)}
            >
              Global Brand Awards 2026 · Winners
            </figcaption>
          </figure>

          {/* Award Stage Presentation Photo */}
          <figure className="md:col-span-4 relative overflow-hidden bg-[#0d0f14]">
            <img
              src={AWARD_IMAGES.stagePhoto}
              alt="We Are Globex accepting the award"
              className="w-full h-full min-h-[28rem] object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption
              className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0d0f14] to-transparent text-[0.6rem] uppercase tracking-widest text-[#c4bfb8]"
              style={sans(500)}
            >
              We Are Globex · Award Presentation
            </figcaption>
          </figure>

          {/* Event Moments Photo Grid */}
          {EVENT_PHOTOS.map((photo) => (
            <figure
              key={photo.caption}
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
                style={sans(500)}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
