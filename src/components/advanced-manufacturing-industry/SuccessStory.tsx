import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

const SuccessStory = () => {
  return (
    <section className="bg-secondary text-white py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-8xl ">
            <span className="text-primary">Let’s accelerate your growth.</span> <br />
            Speak with a Globex Growth Expert
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
