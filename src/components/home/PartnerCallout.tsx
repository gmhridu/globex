"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { AnimatedText } from "../animated-text/AnimatedText";

const PartnerCallout = () => {
  const benefits = [
    "A consistent flow of qualified distributor introductions",
    "Exposure to key buyers and regional market influencers",
    "Scalable, strategic growth with built-in local insights",
    "Stronger, longer-lasting distributor relationships",
    "A competitive edge through curated market access",
    "More time focused on fulfilling orders, not chasing them",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image with Zoom In Animation */}
          <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/assests/home/bearded-business-man.jpg"
              width={500}
              height={500}
              alt="Manufacturing workers"
              className="w-full h-full object-cover rounded-2xl"
              priority={true}
            />
          </motion.div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
               Position{" "}
               <AnimatedText text="Your Brand" className="text-primary" /> with
               the <br />
               Right{" "}
               <AnimatedText text="Distributors," className="text-primary" delay={0.7} /> and
               Grow <br />
               with Confidence
             </h2>

            <p className="text-lg font-semibold mb-4">
              Partnering with We Are Globex means more than generating leads,
              it’s about building a strong, reliable presence in the markets
              that matter most. We lay the foundation for long-term distribution
              success by connecting you to partners who are ready to move.
            </p>

            <ul className="space-y-1 text-lg font-semibold mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">•</div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              className="group inline-flex w-[220px] items-center justify-center text-lg
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
        </div>
      </div>
    </section>
  );
};

export default PartnerCallout;
