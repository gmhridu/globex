"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const benefits = [
  "Falling behind competitors already partnered with active global distributors",
  "Missing critical windows to expand into high-potential markets",
  "Wasting time on cold leads instead of warm introductions",
  "Watching growth stall without the right partners on the ground",
];

const ClientChallenges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      className="bg-gradient-to-br from-white via-gray-50/50 to-white py-20 md:py-24 relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-16 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 border-2 border-primary rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left side - Enhanced 3D Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Break Free from the{" "}
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span
                  className="text-primary relative"
                  whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                    transition: { duration: 0.2 }
                  }}
                >
                  Challenges
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.span>{" "}
                That Hold
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Most{" "}
                <motion.span
                  className="text-primary relative"
                  whileHover={{
                    scale: 1.05,
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
                    transition: { duration: 0.2 }
                  }}
                >
                  Manufacturers
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  />
                </motion.span>{" "}
                Back
              </motion.span>
            </motion.h2>

            <motion.ul
              className="space-y-4 text-lg md:text-xl font-semibold mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start p-4 bg-white/30 backdrop-blur-sm rounded-2xl border border-gray-200/50"
                  initial={{
                    opacity: 0,
                    x: -50,
                    rotateX: -10
                  }}
                  animate={inView ? {
                    opacity: 1,
                    x: 0,
                    rotateX: 0
                  } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 1.0 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 10,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    className="flex-shrink-0 mr-4 w-3 h-3 bg-primary rounded-full mt-3"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.3,
                      backgroundColor: '#3b82f6',
                      boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
                      transition: { duration: 0.2 }
                    }}
                  />
                  <span className="leading-relaxed text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{
                scale: 1.05,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
            >
              <Button
                className="group inline-flex w-full sm:w-[220px] items-center justify-center text-lg
          bg-primary text-black transition-all duration-500
          hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-primary/40
          focus:ring-4 focus:ring-primary/50 relative overflow-hidden rounded-2xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Link href="/contact" className="inline-flex items-center relative z-10">
                  LETS TALK
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced 3D Image */}
          <motion.div
            ref={ref}
            className="relative group"
            initial={{ scale: 0.7, opacity: 0, rotateY: 20, z: -100 }}
            animate={inView ? { scale: 1, opacity: 1, rotateY: 0, z: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              rotateX: 3,
              z: 50,
              transition: { duration: 0.4 }
            }}
          >
            {/* Image shadow */}
            <motion.div
              className="absolute inset-0 bg-primary/30 rounded-3xl blur-2xl"
              style={{
                transform: 'translateZ(-25px) translateY(25px) translateX(15px)',
              }}
              whileHover={{
                scale: 1.1,
                opacity: 0.4,
                transition: { duration: 0.4 }
              }}
            />

            {/* Main image container */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-white p-3 shadow-2xl"
              whileHover={{
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.4 }
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              >
                <Image
                  src="/assests/home/warehouse-manager.jpg"
                  width={500}
                  height={500}
                  alt="Manufacturing facility"
                  className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
                  priority={true}
                />
              </motion.div>

              {/* Gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 rounded-2xl"
                whileHover={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)',
                  transition: { duration: 0.3 }
                }}
              />

              {/* Floating badge */}
              <motion.div
                className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0, rotateZ: -15 }}
                animate={inView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
                whileHover={{
                  scale: 1.1,
                  rotateZ: 5,
                  boxShadow: '0 10px 25px rgba(239, 68, 68, 0.4)',
                  transition: { duration: 0.2 }
                }}
              >
                CHALLENGE
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientChallenges;
