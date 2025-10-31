"use client";

import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hero-background3"
        style={{
          backgroundImage:
            "url('/assests/industries/automation-solution/hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Empowering automation <br />
            <Typewriter
              string="Innovators to drive growth"
              cursor="_"
              cursorClassName="text-primary"
              stopBlinkinOnComplete={true}
              className="text-primary"
            />
          </h1>
          <p className="text-lg mt-4 mb-6 text-white leading-relaxed">
            From robotic automation to custom machine building, We Are Globex
            helps automation solution providers connect with manufacturers eager
            to transform their operations. Whether you focus on automating
            production lines or designing custom systems, we provide the
            strategies you need to expand your pipeline and close more deals.
          </p>
          <Button
          size="md"
            className="group mt-3 inline-flex whitespace-nowrap items-center justify-center text-lg
        bg-primary text-black transition-all duration-300
        hover:bg-white hover:text-black"
          >
            <Link href="/contact" className="inline-flex items-center">
              Identify Ideal Manufacturing Partners
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

export default HeroSection;
