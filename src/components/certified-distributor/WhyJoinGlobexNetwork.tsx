"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const WhyJoinGlobexNetwork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-12 mt-8" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            className="relative"
            variants={zoomInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            {/* Dots Pattern Background */}
            {/* <div className="absolute -top-24 -left-30 w-[600px] h-[600px] z-0 overflow-hidden">
              <Image
                alt="Dot pattern"
                width={329}
                height={320}
                src="/assests/distributors/dots.png"
                className="object-cover"
              />
            </div> */}

            {/* Main Image Container with Mask */}
            <div className="relative z-10 overflow-hidden">
              <img
                src="/assests/distributors/business.jpeg" // Update path as needed
                alt="Team collaborating in a modern office"
                width={500}
                height={400}
                className="w-full h-[400px] object-cover object-center rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-sm uppercase text-blue-600 font-semibold mb-2">
              OVERVIEW
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Join the Globex Distribution Network?
            </h2>
            <p className="mb-6">
              At Globex, we&apos;re always expanding our platform to include
              high-quality distributors who understand their local markets and
              know exactly what products are in demand.
            </p>
            <p className="mb-6">
              By joining our network, you&apos;ll have the opportunity to tell
              us what you need, whether it&apos;s a specific category, brand, or
              product type, and we&apos;ll connect you with manufacturers
              actively looking for distribution partners in your region.
            </p>
            <p className="mb-6">
              We believe successful distribution starts with understanding
              demand at a local level. That&apos;s why we prioritise two-way
              collaboration, allowing our partners to shape the product mix
              based on real market insights. We&apos;re not just here to connect
              manufacturers with distributors, we&apos;re here to build
              long-term, profitable partnerships that make sense for everyone
              involved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinGlobexNetwork;
