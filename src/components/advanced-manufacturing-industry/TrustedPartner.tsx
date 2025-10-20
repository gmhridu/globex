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
  "Industrial IoT (IIoT)",
  "Connected Devices",
  "Automation and Robotics",
  "Manufacturing Execution Systems",
  "Enterprise Resource Planning",
  "Simulation Software",
  "Additive Manufacturing",
  "AI & ML Solutions",
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
                string="Automation Solution Providers."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary"
              />
            ) : (
              <span className="text-primary inline">
                Automation Solution Providers.
              </span>
            )}
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl text-center mx-auto">
            We understand the unique challenges of advanced manufacturing and
            Industry 4.0 solution providers. We partner with providers
            specializing in:
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
