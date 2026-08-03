"use client";

import { motion } from "framer-motion";
import HeroContent from "./hero-section/hero-content";
import DashboardCards from "./hero-section/dashboard-cards";
import BottomInfoBar from "./hero-section/bottom-info-bar";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#07090D] pt-20 pb-0 md:pt-20 md:pb-0">
      <div className="relative min-h-150 sm:min-h-160 md:h-180 lg:h-180">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assests/home/home_banner.png')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#050608]/95 via-[#080B10]/75 to-[#050608]/30" />

        <div className="container relative z-20 mx-auto h-full px-4 sm:px-6 lg:px-10">
          <div className="grid h-full grid-cols-12 items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="col-span-12 lg:col-span-10"
            >
              <HeroContent />
            </motion.div>

            <div className="hidden lg:block">
              <DashboardCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
