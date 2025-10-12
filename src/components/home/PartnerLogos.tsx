"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface Partner {
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  { name: "Slack", logo: "/assests/home/slack.webp" },
  { name: "Samsung", logo: "/assests/home/samsung.png" },
  { name: "Anthropic", logo: "/assests/home/anthropic.png" },
  { name: "MSI", logo: "/assests/home/msi.png" },
  { name: "HubSpot", logo: "/assests/home/hubspot.png" },
  { name: "Toast", logo: "/assests/home/toast.svg" },
];

// Duplicate partners for seamless infinite scroll
const DUPLICATED_PARTNERS = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

const PartnerLogos: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      className="py-10"
      aria-label="Partner logos marquee"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Partners</h2>

          {/* Marquee Container */}
          <div className="w-full py-4">
            <Marquee
              speed={60}
              gradient={true}
              className="overflow-hidden"
              style={{
                gap: '3rem',
              }}
            >
              {DUPLICATED_PARTNERS.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] p-2 md:p-4 flex justify-center items-center flex-shrink-0"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={180}
                    height={80}
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;
