"use client";

import React, { useState } from "react";
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

  // State to trigger sequential typewriting
  const [showFit, setShowFit] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showPrivateLabel, setShowPrivateLabel] = useState(false);
  const [showManufacturing, setShowManufacturing] = useState(false);
  const [showBuyers, setShowBuyers] = useState(false);
  const [showScale, setShowScale] = useState(false);

  return (
    <section ref={ref} className="bg-secondary text-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-8xl">
            The Right{" "}
            {inView ? (
              <Typewriter
                string="Brands."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
                onComplete={() => setShowFit(true)}
              />
            ) : (
              <span className="text-primary inline">Brands.</span>
            )}{" "}
            The Right{" "}
            {showFit ? (
              <Typewriter
                string="Fit."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
                onComplete={() => setShowTime(true)}
              />
            ) : (
              <span className="text-primary inline">Fit.</span>
            )}{" "}
            The Right{" "}
            {showTime ? (
              <Typewriter
                string="Time."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
                onComplete={() => setShowPrivateLabel(true)}
              />
            ) : (
              <span className="text-primary inline">Time.</span>
            )}
            <br />
            Schedule a call and let Globex connect your{" "}
            {showPrivateLabel ? (
              <Typewriter
                string="private label"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
                onComplete={() => setShowManufacturing(true)}
              />
            ) : (
              <span className="text-primary inline">private label</span>
            )}{" "}
            <br />
            {showManufacturing ? (
              <Typewriter
                string="manufacturing"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
                onComplete={() => setShowBuyers(true)}
              />
            ) : (
              <span className="text-primary inline">manufacturing</span>
            )}{" "}
            business with{" "}
            {showBuyers ? (
              <Typewriter
                string="serious buyers"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
                onComplete={() => setShowScale(true)}
              />
            ) : (
              <span className="text-primary inline">serious buyers</span>
            )}{" "}
            ready to <br />{" "}
            {showScale ? (
              <Typewriter
                string="scale."
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary inline"
              />
            ) : (
              <span className="text-primary inline">scale.</span>
            )}
          </h2>

          <Button
            className="group inline-flex w-[220px] items-center justify-center text-lg
              bg-primary text-black transition-all duration-300
              hover:bg-white hover:text-black"
          >
            <Link href="/contact" className="inline-flex items-center">
              LET'S TALK
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
