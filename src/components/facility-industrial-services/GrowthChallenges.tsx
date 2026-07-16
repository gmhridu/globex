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
          Overcome The Difficulty Of Finding <br />
          Reliable Opportunities
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-lg md:text-md text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Facility services are critical for manufacturers, but finding the
          right decision-makers is challenging. Here’s what might be holding you
          back:
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
                You’re not reaching the manufacturers who need your services.
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
                      Finding the right clients in manufacturing takes time and
                      precision. We Are Globex uses a data-driven approach to
                      target key decision-makers—like facility managers and
                      procurement teams—bringing you qualified opportunities
                      that match your services.
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
                You’re struggling to stand out in a competitive market.
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
                      In a crowded industry, differentiation is critical. We
                      craft campaigns that highlight your expertise, whether
                      it’s energy efficiency, sustainable solutions, or reliable
                      contracting, ensuring your message resonates with the
                      right audience.
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
                You want to grow but need help finding the best opportunities.
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
                      From regional expansions to new industry sectors, Factur
                      helps you identify and target the right opportunities.
                      With our research-backed strategies, you’ll engage the
                      right prospects and grow your business sustainably.
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
