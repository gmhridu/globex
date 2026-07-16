"use client";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import Link from "next/link";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// SVG Decorations (recreated based on image)
const DotGridSVG = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="12" cy="4" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="20" cy="4" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="28" cy="4" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="36" cy="4" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="44" cy="4" r="2" fill="#60A5FA" opacity="0.3" />

    <circle cx="4" cy="12" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="12" cy="12" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="20" cy="12" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="28" cy="12" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="36" cy="12" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="44" cy="12" r="2" fill="#60A5FA" opacity="0.3" />

    <circle cx="4" cy="20" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="12" cy="20" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="20" cy="20" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="28" cy="20" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="36" cy="20" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="44" cy="20" r="2" fill="#60A5FA" opacity="0.3" />

    <circle cx="4" cy="28" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="12" cy="28" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="20" cy="28" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="28" cy="28" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="36" cy="28" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="44" cy="28" r="2" fill="#60A5FA" opacity="0.3" />

    <circle cx="4" cy="36" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="12" cy="36" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="20" cy="36" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="28" cy="36" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="36" cy="36" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="44" cy="36" r="2" fill="#60A5FA" opacity="0.3" />

    <circle cx="4" cy="44" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="12" cy="44" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="20" cy="44" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="28" cy="44" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="36" cy="44" r="2" fill="#60A5FA" opacity="0.3" />
    <circle cx="44" cy="44" r="2" fill="#60A5FA" opacity="0.3" />
  </svg>
);

const WavyLineSVG = () => (
  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4C4 1 8 7 12 4C16 1 20 7 23 4" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CornerShapeSVG = ({ className = "" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M32 0H0V32" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 0H0V32" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const BlueTriangleSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0L0 24H24V0Z" fill="#06B6D4" />
  </svg>
);

const BrownQuarterCircleSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 0C10.745 0 0 10.745 0 24H24V0Z" fill="#A5532F" />
  </svg>
);

const GrowWithUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-12 bg-blue-50" ref={ref}>
      <div className="container">
        <motion.div
          className="bg-[#0F172A] rounded-2xl p-6 relative overflow-hidden"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Top Left - Dot Grid */}
          <div className="absolute top-6 left-6 z-10">
            <DotGridSVG />
          </div>

          {/* Top Right - Wavy Line */}
          <div className="absolute top-6 right-6 z-10">
            <WavyLineSVG />
          </div>

          {/* Bottom Left - Blue Triangle + Vertical Line */}
          <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-2">
            <BlueTriangleSVG />
            <div className="w-1 h-12 bg-blue-400 rounded-full"></div>
          </div>

          {/* Bottom Right - Corner Shape + Brown Quarter Circle */}
          <div className="absolute bottom-6 right-6 z-10 flex flex-col items-end gap-2">
            <CornerShapeSVG className="transform rotate-180" />
            <BrownQuarterCircleSVG />
          </div>

          {/* Center Content */}
          <div className="text-center z-20 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Grow with Us?
            </h2>
            <Button
              className="bg-yellow-500 hover:bg-yellow-400 w-[225px] whitespace-nowrap text-black font-semibold px-5 py-3 rounded-full transition-all duration-300"
            >
              <Link href="/contact">BOOK A CONSULTATION</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowWithUsSection;
