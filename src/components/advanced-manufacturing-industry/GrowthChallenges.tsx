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
          Overcome Your Growth Challenges
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white text-lg md:text-xl text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Reaching forward-thinking manufacturers ready to embrace change comes
          with challenges. Here’s what might be holding you back:
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
                You’re struggling to connect with manufacturers ready to adopt
                new technologies.
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
                      The shift to advanced manufacturing demands
                      forward-thinking buyers. We Are Globex’s data-driven
                      outreach ensures your solutions connect with the right
                      audience, including facility managers and executives ready
                      to adopt innovative technologies.
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
                Your unique offerings aren’t getting the attention they deserve.
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
                      Standing out in the advanced manufacturing space can be
                      challenging. We craft messaging that emphasizes your
                      unique capabilities, whether it’s IoT integration, smart
                      manufacturing software, or automated solutions, ensuring
                      your value resonates with prospective clients.
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
                You want to grow into new markets and industries.
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
                      Manufacturers across various industries are embracing
                      Industry 4.0 technologies. We Are Globex’s research-driven
                      strategies help you uncover untapped opportunities and
                      build connections with clients eager to modernize their
                      operations.
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
