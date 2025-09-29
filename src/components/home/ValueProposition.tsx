"use client";
import { motion, easeOut } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import Link from "next/link";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const ValueProposition = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      className="bg-gradient-to-br from-white via-gray-50/50 to-white py-20 md:py-24 relative overflow-hidden"
      ref={ref}
      style={{ perspective: '1200px' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - 3D Image Card */}
          <motion.div
            className="relative group"
            variants={zoomInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* 3D Card container */}
            <motion.div
              className="relative"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                z: 50,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Card shadow */}
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

              {/* Main image */}
              <motion.div
                className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl"
                whileHover={{
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                >
                  <Image
                    src="/assests/home/struggling.jpg"
                    alt="Manufacturing professional smiling"
                    width={500}
                    height={300}
                    className="w-full h-[300px] md:h-[400px] object-cover object-center rounded-2xl"
                    priority={true}
                  />
                </motion.div>

                {/* Gradient overlay with 3D effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 rounded-2xl"
                  whileHover={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)',
                    transition: { duration: 0.3 }
                  }}
                />

                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, scale: 0, rotateZ: -10 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
                    transition: { duration: 0.2 }
                  }}
                >
                  Premium Partner
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Enhanced 3D Text Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, rotateX: -20, z: -30 }}
              animate={inView ? { opacity: 1, rotateX: 0, z: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight text-gray-900"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30, rotateX: -45 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Struggling to{" "}
                  <motion.span
                    className="text-primary relative"
                    whileHover={{
                      scale: 1.05,
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    Attract
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    />
                  </motion.span>{" "}
                  the Right
                </motion.span>

                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30, rotateX: -45 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.span
                    className="text-primary relative"
                    whileHover={{
                      scale: 1.05,
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    Distributors
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    />
                  </motion.span>{" "}
                  for your
                </motion.span>

                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 30, rotateX: -45 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.span
                    className="text-primary relative"
                    whileHover={{
                      scale: 1.05,
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    Products
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    />
                  </motion.span>
                  ?
                </motion.span>
              </motion.h2>

              <motion.div
                className="space-y-6 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.p
                  className="text-lg md:text-xl font-semibold leading-relaxed text-gray-700 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  If your growth is tied to just a handful of clients or markets,
                  it's only a matter of time before things stall. Without fresh,
                  qualified distributor interest, scaling becomes unpredictable —
                  and risky.
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl font-semibold leading-relaxed text-gray-700 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  At{" "}
                  <motion.span
                    className="font-black text-primary text-2xl"
                    whileHover={{
                      scale: 1.1,
                      textShadow: '0 0 15px rgba(59, 130, 246, 0.8)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    We Are Globex
                  </motion.span>
                  , we help manufacturers diversify their pipeline by connecting them directly
                  to pre-vetted distributors across Europe, North America, and
                  beyond — reducing dependency and unlocking steady, scalable
                  growth.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 2,
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
