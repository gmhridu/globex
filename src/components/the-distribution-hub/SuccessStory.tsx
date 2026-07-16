"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const SuccessStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [startAnimation, setStartAnimation] = useState(false);
  const [showPatners, setShowPartners] = useState(false);
  const [showMarkets, setShowMarkets] = useState(false);

  useEffect(() => {
    if (inView && !startAnimation) {
      const timer = setTimeout(() => setStartAnimation(true), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, startAnimation]);

  return (
    <section className="bg-secondary text-white py-12" ref={ref}>
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-7xl leading-tight">
            {!startAnimation ? (
              <span className="text-primary inline">
                Find your next distributor.
              </span>
            ) : (
              <Typewriter
                string="Find your next distributor."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                className="text-primary inline"
                onComplete={() => setShowPartners(true)}
              />
            )}{" "}
            We’ll connect you
            <br />
            to the{" "}
            {!showPatners ? (
              <span className="text-primary inline">right partners</span>
            ) : (
              <Typewriter
                onComplete={() => {
                  setShowMarkets(true);
                }}
                string="right partners"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                className="text-primary inline"
                delay={100}
              />
            )}
            ,{" "}
            {!showMarkets ? (
              <span className="text-primary inline">right markets</span>
            ) : (
              <Typewriter
                string="right markets"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                className="text-primary inline"
                delay={100}
              />
            )}
            .
          </h2>

          <Button
          size="sm"
            className="group inline-flex whitespace-nowrap items-center justify-center text-lg
              bg-primary text-black transition-all duration-300
              hover:bg-white hover:text-black mt-6"
          >
            <Link href="/contact" className="inline-flex items-center">
              Start Building My Network
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
