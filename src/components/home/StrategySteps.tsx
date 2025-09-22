'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const StrategySteps = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const steps = [
    {
      number: "01",
      title: "Chat With Us",
      description:
        "Let's discuss your growth challenges, explore your goals, and show how our solutions can drive your business forward.",
    },
    {
      number: "02",
      title: "Establish a Growth Plan",
      description:
        "We'll develop a customized plan tailored to your goals. Review it with your team and take the first step toward driving measurable growth.",
    },
    {
      number: "03",
      title: "Go to Market",
      description:
        "Launch your tailored strategies and begin connecting with the right prospects. Our team handles the execution so you can focus on results.",
    },
    {
      number: "04",
      title: "Optimize and Thrive",
      description:
        "Refine your strategies with ongoing insights and adjustments, keeping your pipeline strong and your business on track for thriving growth.",
    },
  ];

  return (
    <section className="bg-secondary text-white py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
        >
          {/* Left side */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Extraordinary growth starts with a plan.
            </h2>
            <p className="text-lg mb-6">Your path to thrive in 4 steps:</p>

            <div className="relative mt-8">
              <Image
                src="/assests/home/mail.png"
                width={500}
                height={500}
                alt="Blueprint illustration"
                className="max-w-80 w-80 opacity-70"
                priority={true}
              />
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 col-span-2 md:col-span-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-3"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySteps;
