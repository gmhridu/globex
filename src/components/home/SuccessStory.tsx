"use client";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const SuccessStory = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  // Control which word's animation should start
  const [startAnimation, setStartAnimation] = useState(false);
  const [showMarkets, setShowMarkets] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showGlobex, setShowGlobex] = useState(false);

  useEffect(() => {
    if (inView && !startAnimation) setStartAnimation(true);
  }, [inView, startAnimation]);

  return (
    <section ref={ref} className="bg-secondary text-white py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-7xl leading-tight">
            The Right{" "}
            {startAnimation ? (
              <Typewriter
                string="Partners"
                className="text-primary inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                onComplete={() => setShowMarkets(true)}
              />
            ) : (
              <span className="text-primary inline">Partners</span>
            )}
            . The Right{" "}
            {showMarkets ? (
              <Typewriter
                string="Strategy"
                className="text-primary inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                onComplete={() => setShowTime(true)}
              />
            ) : (
              <span className="text-primary inline">Strategy</span>
            )}
            . The Right{" "}
            {showTime ? (
              <Typewriter
                string="Markets"
                className="text-primary inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                onComplete={() => setShowGlobex(true)}
              />
            ) : (
              <span className="text-primary inline">Markets</span>
            )}
            . <br />
            Accelerate your global growth with We Are{" "}
            {showGlobex ? (
              <Typewriter
                onComplete={() => {}}
                string="Globex"
                className="text-primary inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
              />
            ) : (
              <span className="text-primary inline">Globex</span>
            )},{" "}
            <br />
            where strategy meets execution.
          </h2>

          <Button className="group inline-flex w-[180px] whitespace-nowrap items-center justify-center text-lg bg-primary text-black transition-all duration-300 hover:bg-white hover:text-black">
            <Link href="/contact" className="inline-flex items-center">
              LETS TALK
              <ChevronRight className="h-5 w-5 transform translate-x-[-10px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
