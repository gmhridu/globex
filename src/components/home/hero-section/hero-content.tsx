"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FeatureCards from "./feature-cards";

const HeroContent = () => {
  return (
    <>
      <div className="max-w-full pt-4 sm:pt-6 md:pt-8 lg:max-w-150">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 sm:mb-3 flex items-center gap-3 sm:gap-4 relative"
        >
          <span className="h-px w-8 sm:w-10 bg-[#D9A441]" />

          <p className="text-[11px] sm:text-[12px] md:text-[13px] font-semibold uppercase  text-[#D9A441]">
            Your North American Partner For International Growth
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
          text-white
          text-[26px]
          leading-[1.1]
          font-medium
          tracking-[-0.03em]
          sm:text-[32px]
          md:text-[40px]
          lg:text-[45px]
        "
        >
          Build Distribution Across Europe and the Middle East—
          <br />
          Without Building a Local Sales Team.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
           mt-2 sm:mt-3
           max-w-full
           text-[12px]
           sm:text-[13px]
           md:text-[14px]
           leading-5
           sm:leading-6
           md:leading-7
           lg:leading-8
           lg:max-w-147.5
           text-[#B9BEC8]
         "
        >
          We help U.S. and Canadian manufacturers identify, approach and qualify
          distributors, importers, retailers and private-label buyers across
          selected European and Middle Eastern markets.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4"
        >
          <Link
            href="/contact"
            className="
      group
      inline-flex
      h-11
      sm:h-12
      md:h-14
      items-center
      justify-center
      whitespace-nowrap
      rounded-xl
      bg-[#D9A441]
      px-5
      sm:px-6
      md:px-8
      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      font-semibold
      text-[#0B0B0B]
      shadow-[0_12px_35px_rgba(217,164,65,0.25)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-[#E6B34A]
      hover:shadow-[0_18px_45px_rgba(217,164,65,0.45)]
    "
          >
            <span className="whitespace-nowrap">
              Book a Market Entry Review
            </span>

            <ChevronRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="
      group
      inline-flex
      h-11
      sm:h-12
      md:h-14
      items-center
      justify-center
      whitespace-nowrap
      rounded-xl
      border
      border-[#D9A441]/50
      bg-[#11151C]/70
      px-5
      sm:px-6
      md:px-8
      text-[14px]
      sm:text-[15px]
      md:text-[16px]
      font-semibold
      text-[#D9A441]
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#D9A441]
      hover:bg-[#171C24]
    "
          >
            <span className="whitespace-nowrap">
              See How We Build Distribution
            </span>

            <ChevronRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#D9A441] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Small Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-2.5 sm:mt-3 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-6 text-[11px] sm:text-xs md:text-sm text-[#8C929D]"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D9A441]" />
            Trusted by manufacturers
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D9A441]" />
            Europe & Middle East Specialists
          </div>
        </motion.div>
      </div>

      <div className="mt-4 sm:mt-5">
        <FeatureCards />
      </div>
    </>
  );
};

export default HeroContent;
