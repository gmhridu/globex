"use client";
import { motion, easeOut } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
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
              src="/assests/home/struggling.jpg"
              alt="Manufacturing professional smiling"
              width={500}
              height={300}
              className="w-full h-[400px] object-cover object-center rounded-2xl"
              priority={true}
            />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Struggling to <span className="text-primary">Attract</span> the
              Right <br />
              <span className="text-primary">Distributors</span> for your{" "}
              <span className="text-primary">Products</span>?
            </h2>

            <p className="text-lg mb-6 font-semibold">
              If your growth is tied to just a handful of clients or markets,
              it’s only a matter of time before things stall. Without fresh,
              qualified distributor interest, scaling becomes unpredictable —
              and risky.
            </p>

            <p className="text-lg mb-8 font-semibold">
              At <span className="font-black">We Are Globex</span>, we help
              manufacturers diversify their pipeline by connecting them directly
              to pre-vetted distributors across Europe, North America, and
              beyond — reducing dependency and unlocking steady, scalable
              growth.
            </p>

            <div className="mt-8 ">
              <Button
                className="group mt-8 inline-flex w-[220px] items-center justify-center text-lg
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
