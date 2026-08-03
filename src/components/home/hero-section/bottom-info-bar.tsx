"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    icon: "/icons/By_Page/Homepage/hero-award-winner.svg",
    title: "2026 Award Winner",
    subtitle: "International Business",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-europe-middle-east-focus.svg",
    title: "Europe & Middle East",
    subtitle: "Focus",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-client-references.svg",
    title: "Client References",
    subtitle: "Available",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-local-execution.svg",
    title: "Local Execution",
    subtitle: "On-the-Ground Partners",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-reporting-visibility.svg",
    title: "Reporting Visibility",
    subtitle: "Clear Activity Pipeline",
  },
];

const BottomInfoBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.7,
      }}
      className="w-full border-t border-white/10 bg-[#0B0F15]/90 backdrop-blur-2xl"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4 }}
              className={`
                group
                relative
                flex
                items-center
                gap-2
                sm:gap-2.5
                lg:gap-2
                py-3
                sm:py-3.5
                lg:py-3.5
                px-2.5
                sm:px-3
                lg:px-3
                transition-all
                duration-300
                ${
                  index !== items.length - 1
                    ? "lg:border-r border-white/10"
                    : ""
                }
              `}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-linear-to-r from-[#D9A441]/5 via-transparent to-transparent" />
              </div>

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
                  border
                  border-[#D9A441]/30
                  bg-[#D9A441]/10
                  transition-all
                  duration-300
                  group-hover:bg-[#D9A441]/20
                  group-hover:border-[#D9A441]
                  group-hover:shadow-[0_0_30px_rgba(217,164,65,.35)]
                "
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={22}
                  className="object-cover"
                />
              </div>

              {/* Text - Fixed centering */}
              <div className="relative  min-w-0 flex flex-col justify-center pt-3">
                <h4 className="text-[12px] sm:text-[13px] lg:text-[14px] font-semibold text-white leading-[1.3]">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-gray-400 leading-[1.3]">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Border */}
              <span
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
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BottomInfoBar;
