"use client";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const industries = [
  "CNC Milling & Turning",
  "Metal Fabrication",
  "Pet Food",
  "Agricultural Equipment",
  "Cosmetics",
  "Pet Healthcare",
  "Electronic Manufacturing",
  "Automotive Manufacturing",
  "Packaging",
  "Consumer Goods",
  "Medical Device Manufacturing",
  "3D Printing",
];

const TrustedPartner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-gray-100 py-12 mt-12" ref={ref}>
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            A trusted partner for{" "}
            {inView ? (
              <Typewriter
                string="Contract Manufacturers"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary"
              />
            ) : (
              <span className="text-primary inline">Contract Manufacturers</span>
            )}
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl text-center mx-auto">
            We understand the unique challenges of contract manufacturers and
            job shops. Our sales and marketing solutions aren’t
            one-size-fits-all—they’re designed for:
          </p>
        </motion.div>

        {/* Industries grid */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-center"
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-full py-4 px-6 text-center font-medium text-gray-800 hover:shadow-md transition-all"
            >
              {industry}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartner;
