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
              src="/assests/industries/advance-manufacturing/empowring.png"
              alt="Empowring"
              width={300}
              height={300}
              className="w-[650px] h-[305px] object-cover object-center rounded-2xl"
              priority={true}
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Empowering the technologies <br />
              shaping the future.
            </h2>
            <p className="text-md mb-4 font-semibold">
              As leaders in Industry 4.0, your solutions are at the forefront of
              manufacturing’s digital transformation. We Are Globex partners
              with businesses like yours to craft customized strategies in lead
              generation, sales development, and marketing, connecting you with
              manufacturers eager to embrace advanced technologies.
            </p>
            <div className="mt-2">
              <Button
                className="group mt-4 inline-flex w-[180px] whitespace-nowrap items-center justify-center text-lg
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
