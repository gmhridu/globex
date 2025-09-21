'use client'
import { motion, easeOut } from "framer-motion";
import { ChevronRight } from "lucide-react";
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

const ValueProposition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Charts and Image */}
          <motion.div
            className="relative"
            variants={zoomInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Image
              src="https://weareglobex.com/wp-content/uploads/2025/04/Service-Page-Images-17.png.webp"
              alt="Manufacturing professional smiling"
              width={600}
              height={400}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Struggling to win more ideal manufacturing clients?
            </h2>

            <p className="text-lg mb-6">
              Stagnant sales, dependence on a small group of clients, and a lack
              of prospects can make scaling your business challenging.
            </p>

            <p className="text-lg mb-8">
              At We Are Globex, we assist manufacturing suppliers in developing
              and maintaining pipelines that foster steady growth.
            </p>

            <div className="mt-8 ">
              <a
                href="#contact"
                className="btn btn-primary group inline-flex items-center justify-center w-[220px] text-lg px-8 py-4 
               bg-primary text-black transition-all duration-300
               hover:bg-secondary hover:text-white"
              >
                <span className="relative z-10">LETS TALK</span>

                <span
                  className="transform translate-x-[-10px] opacity-0 
                 transition-all duration-300 ease-in-out 
                 group-hover:translate-x-3 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
