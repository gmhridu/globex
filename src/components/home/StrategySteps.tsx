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
    <section
      className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, rotateX: -10 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Left side - Enhanced 3D Content */}
          <motion.div
            className="col-span-1 md:col-span-1 relative"
            initial={{ opacity: 0, x: -80, rotateY: -20 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Extraordinary{" "}
              <motion.span
                className="relative"
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 30px rgba(59, 130, 246, 1)',
                  transition: { duration: 0.2 }
                }}
              >
                growth
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.0 }}
                />
              </motion.span>{" "}
              starts with a plan.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              Your path to thrive in 4 steps:
            </motion.p>

            <div className="relative mt-12">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.7, rotateY: -15 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 5,
                  rotateX: -2,
                  transition: { duration: 0.4 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Image shadow */}
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl"
                  style={{
                    transform: 'translateZ(-20px) translateY(20px) translateX(10px)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.4,
                    transition: { duration: 0.4 }
                  }}
                />

                <motion.div
                  className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
                    transition: { duration: 0.4 }
                  }}
                >
                  <Image
                    src="/assests/home/mail.png"
                    width={500}
                    height={500}
                    alt="Blueprint illustration"
                    className="max-w-80 w-80 opacity-80 hover:opacity-100 transition-all duration-500"
                    priority={true}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Enhanced 3D Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 col-span-2 md:col-span-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 100,
                  y: 50,
                  rotateX: -20,
                  z: -50
                }}
                animate={inView ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotateX: 0,
                  z: 0
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3 + 0.5,
                  type: "spring",
                  stiffness: 120
                }}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{
                  scale: 1.05,
                  rotateY: index % 2 === 0 ? -8 : 8,
                  rotateX: -3,
                  z: 80,
                  transition: { duration: 0.4, type: "spring", stiffness: 200 }
                }}
              >
                {/* Step card shadow */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl"
                  style={{
                    transform: 'translateZ(-15px) translateY(15px) translateX(8px)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    opacity: 0.3,
                    transition: { duration: 0.4 }
                  }}
                />

                {/* Main step card */}
                <motion.div
                  className="relative p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(59, 130, 246, 0.4)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Step number with 3D effect */}
                  <motion.div
                    className="relative mb-6"
                    initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
                    animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3 + 0.7,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 15,
                      textShadow: '0 0 20px rgba(59, 130, 246, 1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary relative">
                      {step.number}
                      {/* Number glow effect */}
                      <motion.div
                        className="absolute inset-0 text-primary blur-sm opacity-50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut"
                        }}
                      >
                        {step.number}
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.9 }}
                    whileHover={{
                      x: 10,
                      color: '#3b82f6',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 + 1.1 }}
                    whileHover={{
                      y: -5,
                      color: '#d1d5db',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Progress line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 + 1.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySteps;
