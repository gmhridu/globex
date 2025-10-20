"use client";

import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import { useInView } from "react-intersection-observer";
import "react-typewriting-effect/dist/index.css";

const SuccessStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-secondary text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-7xl leading-tight">
            {inView ? (
              <Typewriter
                string="Let&apos;s Accelerate Your Growth."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary"
              />
            ) : (
              <span className="text-primary inline">
                Let&apos;s Accelerate Your Growth.
              </span>
            )}
            <br />
            Speak with a Globex Growth Expert
          </h2>

          <Button
            className="group inline-flex w-[180px] whitespace-nowrap items-center justify-center text-lg
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
    </section>
  );
};

export default SuccessStory;
