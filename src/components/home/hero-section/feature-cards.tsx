"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/icons/By_Page/Homepage/hero-award-winner.svg",
    title: "2020 Award Winner",
    subtitle: "International Business Excellence",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-europe-middle-east-focus.svg",
    title: "Europe & Middle East",
    subtitle: "Local Market Expertise",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-client-references.svg",
    title: "Client References",
    subtitle: "Available Upon Request",
  },
];

const FeatureCards = () => {
  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      {features.map((feature, index) => {
         return (
           <motion.div
             key={feature.title}
             initial={{
               opacity: 0,
               y: 40,
             }}
             animate={{
               opacity: 1,
               y: 0,
             }}
             transition={{
               delay: 0.8 + index * 0.15,
               duration: 0.7,
             }}
             whileHover={{
               y: -8,
             }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#11151D]/85
                backdrop-blur-xl
                p-2.5
                sm:p-3
                lg:p-2.5
                shadow-[0_15px_60px_rgba(0,0,0,.45)]
                transition-all
                duration-300

              "
          >
            {/* Gold Glow */}
            <div
              className="
                absolute
                -right-16
                -top-16
                size-6
                rounded-full
                bg-[#D9A441]/10
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-[#D9A441]/20
              "
            />

            {/* Shine Effect */}
            <div
              className="
                absolute
                inset-y-0
                -left-32
                w-20
                rotate-12
                bg-linear-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-all
                duration-1000
                group-hover:left-[120%]
              "
            />

            <div className="relative z-10 flex items-center gap-2 sm:gap-2.5 lg:gap-2 px-4">
              {/* Icon */}
              <div
                className="
                  relative
                  flex
                  size-11
                  sm:size-12
                  lg:size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  sm:rounded-xl
                  bg-[#D9A441]/15
                  border
                  border-[#D9A441]/30
                  text-[#D9A441]
                  shadow-[0_0_20px_rgba(217,164,65,.15)]
                "
              >
                <img src={feature.icon} alt={feature.title} className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              {/* Text */}
              <div className="relative min-w-0 flex-1 flex flex-col justify-center pt-3">
                <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-semibold text-white leading-[1.3]">
                  {feature.title}
                </h3>

                <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-gray-400 leading-[1.3]">
                  {feature.subtitle}
                </p>
              </div>
            </div>

            {/* Bottom Gold Line */}
            <motion.div
              layout
              className="
                absolute
                bottom-0
                left-0
                h-0.5
                w-0
                bg-[#D9A441]
                transition-all
                duration-500
                group-hover:w-full
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeatureCards;
