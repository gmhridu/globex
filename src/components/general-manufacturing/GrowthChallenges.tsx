"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GrowthChallenges = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="bg-[#04182b] container rounded-3xl py-12 px-8 mx-auto my-4">
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
          We assist manufacturers in securing international opportunities,
          entering new markets, and fostering long-term distributor
          relationships. Let Globex drive your business toward sustainable
          growth while keeping your overhead low.
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
                Overcoming Challenges in Expanding International Dealer Networks
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
                      Manufacturers frequently face challenges when expanding
                      their dealer networks in international markets, from
                      inconsistent referrals to outdated sales strategies. At
                      Globex, we understand these struggles and provide a
                      dedicated team that uses data-driven insights to
                      continuously generate high-quality leads. We create
                      tailored campaigns that directly engage your target
                      audience, helping you build strong, long-lasting
                      partnerships in new markets.
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
                Securing Reliable and Trusted Distribution Partners
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
                      Finding trustworthy distribution partners is crucial for
                      international expansion. We leverage our extensive network
                      and rigorous vetting process to connect you with reliable
                      partners who share your commitment to quality and customer
                      satisfaction. Our proven methodology ensures long-term
                      success in new markets.
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
                Aligning Product Offerings with Regional Demand
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
                      Understanding regional preferences and adapting your
                      product offerings accordingly is key to market success. We
                      conduct comprehensive market research to identify local
                      trends, consumer behaviors, and competitive landscapes,
                      enabling you to tailor your products and marketing
                      strategies for maximum impact in each region.
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
