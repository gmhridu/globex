import { ChevronRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-300/20">
      <div className="container">
        <div className="text-center max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal mb-8">
            <span className="text-primary">Don&apos;t let your growth plateau.</span>{" "}
            Connect with a Globex Growth Expert and shape a future designed for
            success.
          </h2>

          <div className="mt-8 ">
            <a
              href="#contact"
              className="btn btn-primary group inline-flex items-center justify-center w-[220px] text-lg px-8 py-4 
               bg-primary text-black transition-all duration-300
               hover:bg-secondary hover:text-white"
            >
              <span className="relative z-10">LETS TALK</span>

              <span
                className="transform translate-x-[-10px] opacity-0 
                 transition-all duration-300 ease-in-out 
                 group-hover:translate-x-3 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
