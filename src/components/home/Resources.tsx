'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll(!showAll);
      setLoading(false);
    }, 600); // simulate loading
  };

  const resources = [
    {
      category: "Recruitment",
      title:
        "The Importance of Internships for Progressive Companies and Students: Bridging the Gap Between Education and Industry",
      excerpt:
        "In today's rapidly evolving job market, internships have become an...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/Internships-1024x449.jpg",
    },
    {
      category: "Food & Hospitality",
      title:
        "Top Hospitality Trends to Watch in 2024: How Globex Can Help You Stay Ahead",
      excerpt:
        "Top Hospitality Trends to Watch in 2024: How Globex Can Help You Stay Ahead...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/HOSPITALITY-980x551.jpg",
    },
    {
      category: "Assistive Technology",
      title:
        "The Evolution of Education in 2024: Embracing Edtech with Globex Support",
      excerpt:
        "The Evolution of Education in 2024: Embracing Edtech with Globex Support As...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/Benefits-Of-EdTech-In-The-Classroom.avif",
    },
    {
      category: "Assistive Technology",
      title:
        "Empowering Accessibility: How Globex Navigates Europe’s Assistive Technology Trends",
      excerpt:
        "The assistive technology (AT) industry is an essential and rapidly growing sector...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/10/pexels-thisisengineering-3912959-980x653.jpg",
    },
  ];

  const visibleResources = showAll ? resources : resources.slice(0, 3);

  return (
    <section
      className="bg-gradient-to-br from-white via-gray-50/30 to-white py-20 md:py-28 relative overflow-hidden"
      style={{ perspective: '1400px' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-primary rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm md:text-base uppercase tracking-wider text-gray-500 mb-4 font-semibold">
              RESOURCES
            </h2>
            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
              whileHover={{
                scale: 1.02,
                textShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.2 }
              }}
            >
              Featured{" "}
              <motion.span
                className="text-primary relative"
                whileHover={{
                  textShadow: '0 0 25px rgba(59, 130, 246, 0.8)',
                  transition: { duration: 0.2 }
                }}
              >
                Resources
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-primary to-blue-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.span>
            </motion.h3>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {visibleResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                rotateX: -25,
                z: -100
              }}
              animate={inView ? {
                opacity: 1,
                y: 0,
                rotateX: 0,
                z: 0
              } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              whileHover={{
                y: -20,
                rotateY: index % 2 === 0 ? 8 : -8,
                rotateX: -5,
                z: 100,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
            >
              {/* Card shadow */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl"
                style={{
                  transform: 'translateZ(-25px) translateY(25px) translateX(15px)',
                }}
                whileHover={{
                  scale: 1.1,
                  opacity: 0.3,
                  transition: { duration: 0.4 }
                }}
              />

              {/* Main card */}
              <motion.div
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200/50"
                whileHover={{
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.15)',
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  transition: { duration: 0.4 }
                }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-50/50 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image section */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Enhanced category badge */}
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ opacity: 0, scale: 0, rotateZ: -10 }}
                    animate={inView ? { opacity: 1, scale: 1, rotateZ: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.4, type: "spring" }}
                    whileHover={{
                      scale: 1.1,
                      rotateZ: 5,
                      boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                      {resource.category}
                    </span>
                  </motion.div>

                  {/* Image overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"
                    whileHover={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.1) 100%)',
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>

                {/* Content section */}
                <div className="p-8 relative z-10">
                  <motion.h4
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                    whileHover={{
                      color: '#3b82f6',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {resource.title}
                  </motion.h4>

                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
                    whileHover={{
                      color: '#374151',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {resource.excerpt}
                  </motion.p>

                  <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 + 1.0 }}
                  >
                    <motion.a
                      href="#contact"
                      className="group inline-flex items-center justify-center w-full text-lg px-8 py-4
                   bg-primary text-black transition-all duration-500
                   hover:bg-secondary hover:text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)',
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        Read More
                      </motion.span>

                      <motion.span
                        className="ml-2 transform translate-x-[-8px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:opacity-100"
                        whileHover={{ x: 5, rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.span>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Card reflection */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Loader or Button */}
        <div className="flex justify-center mt-16">
          {loading ? (
            <motion.div
              className="flex space-x-3 p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </motion.div>
          ) : (
            <motion.button
              onClick={handleToggle}
              className="px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg hover:bg-secondary transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/30"
              whileHover={{
                scale: 1.08,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
            >
              {showAll ? "See Few" : "See More"}
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;
