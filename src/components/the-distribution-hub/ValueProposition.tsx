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
            <img
              src="/assests/tailored-solutions/distributor-hub/factory-worker.jpg"
              alt="Manufacturing professional smiling"
              width={400}
              height={300}
              className="w-[650px] h-[350px] object-cover object-center rounded-2xl"
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Expanding Into New Markets Without
              <br />
              the Right Network Can Stall Growth
            </h2>
            <p className="text-md mb-3 font-semibold">
              We Are <span className="font-bold">Globex</span>,we help
              manufacturers accelerate expansion by building robust distributor
              ecosystems across Europe and the Middle East. Through our curated
              network, structured onboarding, and performance-based strategies,
              we transform distribution from a challenge into a competitive
              advantage.
            </p>
            <p className="text-md mb-4 font-semibold">
              Our experts guide you from market selection to active sales,
              ensuring every partner is aligned with your brand’s goals and
              capable of driving long-term results.
            </p>

            <div className="">
              <Button className="group  inline-flex w-[180px] whitespace-nowrap items-center justify-center text-lg bg-primary text-black transition-all duration-300 hover:bg-white hover:text-black">
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
