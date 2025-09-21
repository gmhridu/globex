import { ChevronRight } from "lucide-react";

const SuccessStory = () => {
  return (
    <section className="bg-secondary text-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&aposs build your next success story.
            </h2>
            <p className="text-lg mb-6">
              Manufacturing businesses across industries trust We Are Globex to
              deliver results. With tailored strategies and a deep understanding
              of your market, we help businesses like your achieve lasting
              growth.
            </p>
          </div>

          {/* Right side - Steps */}
          <div className="col-span-1 md:col-span-1 flex justify-center">
            <div className="mt-8">
              <a
                href="#contact"
                className="btn btn-primary group inline-flex items-center justify-center w-[220px] text-lg px-8 py-4
               bg-transparent text-white border transition-all duration-300
               hover:bg-white/20 hover:text-white"
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
      </div>
    </section>
  );
};

export default SuccessStory;
