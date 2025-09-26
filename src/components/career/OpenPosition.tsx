"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OpenPosition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Open Positions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Join us in shaping the future! Whether you&apos;re looking to advance
            your career or bring fresh ideas to the table, we provide the
            platform and support to make it happen. Be part of a team where your
            contributions truly matter, and together, let&apos;s create lasting
            impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenPosition;
