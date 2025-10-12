import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { AnimatedText } from "../animated-text/AnimatedText";

const SuccessStory = () => {
  return (
    <section className="bg-secondary text-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-7xl">
            The Right <AnimatedText text="Partners" className="text-primary" />.
            The Right{" "}
            <AnimatedText text="Markets" className="text-primary" delay={0.6} />
            . The Right{" "}
            <AnimatedText text="Time" className="text-primary" delay={1.2} />.
            <br />
            Schedule a call and let{" "}
            <AnimatedText
              text="Globex"
              delay={1.3}
              className="text-primary"
            ></AnimatedText>{" "}
            take your distribution to the next level.
          </h2>

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
    </section>
  );
};

export default SuccessStory;
