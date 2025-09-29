'use client'
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import Link from "next/link";

const SuccessStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      className="bg-secondary text-white py-20 md:py-28 relative overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary rounded-full animate-pulse [animation-delay:0.5s]"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-primary rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 border-2 border-primary rounded-full animate-pulse [animation-delay:1.5s]"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>

      <div className="container relative z-10" ref={ref}>
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50, rotateX: -20, z: -50 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0, z: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12 max-w-7xl leading-tight"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The Right{" "}
                <motion.span
                  className="text-primary relative"
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(59, 130, 246, 1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  Partners
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-primary to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </motion.span>
                . The Right{" "}
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span
                  className="text-primary relative"
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(59, 130, 246, 1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  Markets
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-primary to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.span>
                . The Right{" "}
              </motion.span>

              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30, rotateX: -30 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.span
                  className="text-primary relative"
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(59, 130, 246, 1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  Time
                  <motion.div
                    className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-primary to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.0 }}
                  />
                </motion.span>
                .
              </motion.span>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Schedule a call and let{" "}
                <motion.span
                  className="text-primary text-4xl md:text-5xl lg:text-6xl font-black relative"
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 40px rgba(59, 130, 246, 1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  Globex
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  />
                </motion.span>
              </motion.div>

              <motion.span
                className="block mt-4 text-2xl md:text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                take your distribution to the next level.
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -45, z: -50 }}
              animate={inView ? { opacity: 1, scale: 1, rotateY: 0, z: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 200 }}
              whileHover={{
                scale: 1.1,
                rotateY: 5,
                rotateX: -5,
                z: 100,
                boxShadow: '0 30px 60px rgba(59, 130, 246, 0.5)',
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.9 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl"
                style={{
                  transform: 'translateZ(-20px) translateY(20px) translateX(10px)',
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 0.5,
                  transition: { duration: 0.4 }
                }}
              />

              <Button
                className="group relative inline-flex w-full sm:w-[280px] items-center justify-center text-xl md:text-2xl
          bg-primary text-black transition-all duration-500
          hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-primary/50
          focus:ring-4 focus:ring-primary/50 overflow-hidden rounded-3xl py-6 px-8"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                <Link href="/contact" className="inline-flex items-center relative z-10">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    LETS TALK
                  </motion.span>
                  <motion.div
                    className="ml-3"
                    whileHover={{ x: 8, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            y: 100
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [100, 0, 0, -100],
            rotateZ: [0, 360]
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        />
      ))}
    </section>
  );
};

export default SuccessStory;
