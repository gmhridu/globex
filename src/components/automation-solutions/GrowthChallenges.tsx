"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GrowthChallenges = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section className="bg-[#04182b] container rounded-3xl py-16 px-8 mx-auto my-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#f5b332] mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Solve The Struggle To Connect With <br />
          The Right Manufacturers
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Finding manufacturers ready for automation can feel overwhelming. We
          identify decision-makers who are eager to adopt innovative solutions.
          Here’s what might be holding you back:
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
                You’re struggling to find qualified prospects.
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
                      Identifying the right clients for your automation
                      solutions can be a challenge. We Are Globex combines
                      industry expertise with advanced tools to pinpoint and
                      engage manufacturers that align with your ideal customer
                      profile. Whether it’s robotic automation or PLC systems,
                      we connect you with businesses eager to invest in your
                      expertise.
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
                Your outreach efforts aren’t delivering results.
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
                      Generic outreach doesn’t work for advanced automation
                      solutions. We design targeted campaigns that address your
                      audience’s specific challenges, emphasizing the ROI your
                      systems deliver—whether it’s boosting efficiency,
                      minimizing waste, or enhancing production capabilities.
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
                You’re missing opportunities in untapped markets.
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
                      Manufacturers everywhere are embracing automation, and we
                      help you connect with them. Whether you’re entering new
                      regions or exploring industries outside your comfort zone,
                      our data-driven approach ensures you’re targeting the
                      right prospects with precision.
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
