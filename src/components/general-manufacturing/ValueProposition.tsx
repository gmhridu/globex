"use client";
import { motion, easeOut } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import Link from "next/link";

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
    <section className="bg-white py-12" ref={ref}>
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
              src="/assests/industries/manufacturing/engineer-finishing-bronze.jpeg"
              alt="Engineer Finishing Bronze"
              width={300}
              height={300}
              className="w-[650px] h-[330px] object-cover object-center rounded-2xl"
              priority={true}
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Growth strategies tailored <br />
              for manufacturers
            </h2>
            <p className="text-md mb-4 font-semibold">
              At We Are Globex, we offer customized solutions for manufacturers,
              helping you attract the right clients, identify reliable dealers,
              expand your pipeline, and simplify your sales process.
            </p>
            <p className="text-md mb-4 font-semibold">
              As your dedicated partner, we help you drive measurable results by
              expanding your reach and establishing strong, long-term
              relationships with the right distribution partners.
            </p>
            <div className="mt-2">
              <Button
                className="group mt-8 inline-flex w-[180px] whitespace-nowrap items-center justify-center text-lg
        bg-primary text-black transition-all duration-300
        hover:bg-white hover:text-black"
              >
                <Link href="/contact" className="inline-flex items-center">
                  LETS TALK
                  <ChevronRight
                    className="h-5 w-5 transform translate-x-[-10px] opacity-0
            transition-all duration-300 ease-in-out
            group-hover:translate-x-3 group-hover:opacity-100"
                  />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
