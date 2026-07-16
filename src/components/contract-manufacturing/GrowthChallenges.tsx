"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GrowthChallenges = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="bg-[#04182b] container rounded-3xl py-12 px-4 mx-auto my-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-3xl md:text-[45px] font-bold text-[#f5b332] mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Overcome Your Growth Challenges
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-lg md:text-md text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          From CNC machining to injection molding, we help contract
          manufacturers and job shops win high-value opportunities, expand into
          new markets, and foster lasting client relationships. At We Are
          Globex, we drive consistent growth—without increasing your overhead.
        </motion.p>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {/* Main Content Box - Now Expandable */}
          <div className="border border-gray-600 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("main")}
              className="w-full p-6 text-left bg-transparent hover:bg-[#04182b]/30 transition-colors duration-300 flex justify-between items-center group"
            >
              <span
                className={`text-white text-xl font-medium transition-colors duration-300 ${
                  expandedSection === "main" ? "text-primary" : "text-white"
                }`}
              >
                Your pipeline is inconsistent and unpredictable
              </span>
              <motion.span
                className="text-[#f5b332] text-2xl"
                animate={{ rotate: expandedSection === "main" ? 45 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {expandedSection === "main" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <motion.p
                      className="text-lg leading-relaxed transition-colors duration-300"
                      animate={{
                        color:
                          expandedSection === "main" ? "#ffffff" : "#9ca3af",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Contract manufacturers frequently face challenges with
                      unreliable referrals and outdated sales methods. At We Are
                      Globex, our dedicated team uses data-driven targeting to
                      deliver a steady stream of high-quality leads. We craft
                      campaigns that resonate with your ideal buyers, helping
                      you build strong, long-term partnerships.
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Distribution Partners Section */}
          <div className="border border-gray-600 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("distribution")}
              className="w-full p-6 text-left bg-transparent hover:bg-[#04182b]/30 transition-colors duration-300 flex justify-between items-center group"
            >
              <span
                className={`text-white text-xl font-medium transition-colors duration-300 ${
                  expandedSection === "distribution"
                    ? "text-primary"
                    : "text-white"
                }`}
              >
                Having trouble cutting through the noise in a competitive
                market?
              </span>
              <motion.span
                className="text-[#f5b332] text-2xl"
                animate={{
                  rotate: expandedSection === "distribution" ? 45 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {expandedSection === "distribution" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <motion.p
                      className="text-base leading-relaxed transition-colors duration-300"
                      animate={{
                        color:
                          expandedSection === "distribution"
                            ? "#ffffff"
                            : "#9ca3af",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      In a market full of manufacturers competing for attention,
                      it’s essential to stand out. At We Are Globex, we position
                      your business as an industry leader by creating
                      personalized outreach that highlights your unique
                      strengths, whether it’s exceptional precision, fast
                      turnaround times, or specialized expertise.
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regional Demand Section */}
          <div className="border border-gray-600 rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("regional")}
              className="w-full p-6 text-left bg-transparent hover:bg-[#04182b]/30 transition-colors duration-300 flex justify-between items-center group"
            >
              <span
                className={`text-white text-xl font-medium transition-colors duration-300 ${
                  expandedSection === "regional" ? "text-primary" : "text-white"
                }`}
              >
                Your reach is restricted to familiar or regional markets.
              </span>
              <motion.span
                className="text-[#f5b332] text-2xl"
                animate={{ rotate: expandedSection === "regional" ? 45 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {expandedSection === "regional" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="px-6 pb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <motion.p
                      className="text-base leading-relaxed transition-colors duration-300"
                      animate={{
                        color:
                          expandedSection === "regional"
                            ? "#ffffff"
                            : "#9ca3af",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Expand beyond geographic and industry limitations. Our
                      data-driven strategy enables you to enter new markets,
                      whether through regional growth or tapping into new
                      sectors. We pinpoint the right prospects, qualify them,
                      and ensure your sales team focuses on leads that are ready
                      to take the next step.
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthChallenges;
