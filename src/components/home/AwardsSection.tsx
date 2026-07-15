import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const AwardsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Award Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-125">
              <Image
                src="/assests/awards/awards.jpg"
                alt="Business Consultancy Awards - Winner 2026"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              Award-Winning Consultancy
            </p>
            <div className="w-16 h-0.5 bg-primary mb-6"></div>

            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-secondary leading-tight mb-6">
              Recognised for Excellence.
              <br />
              Proven by Results.
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              We Are Globex has been named Business Consultancy of the Year at
              the 2026 Greater London Business Awards.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              This award reflects our commitment to delivering exceptional
              strategies that drive growth, empower brands, and create lasting
              impact.
            </p>

            <div>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Read the Announcement
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
