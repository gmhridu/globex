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
        className="absolute inset-0 bg-cover bg-center z-0 hero-background"
        style={{
          backgroundImage: "url('/assests/industries/manufacturing/hero.webp')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Unlock Growth in Manufacturing <br />
            <Typewriter
              string="With Vetted Distributors"
              cursor="_"
              cursorClassName="text-primary"
              stopBlinkinOnComplete={true}
              className="text-primary"
            />
          </h1>
          <p className="text-lg mt-4 mb-6 text-white leading-relaxed">
            We connect manufacturers with pre-vetted distributors, helping them
            scale operations and enter new markets. From consumer goods to
            industrial equipment, we match you with trusted partners that align
            with your goals, minimizing overhead and streamlining distribution
            for long-term growth.
          </p>
          <Button
          size="md"
            className="group mt-6 inline-flex whitespace-nowrap items-center justify-center text-lg
        bg-primary text-black transition-all duration-300
        hover:bg-white hover:text-black"
          >
            <Link href="/contact" className="inline-flex items-center">
              Find Distributors for Your Products
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
