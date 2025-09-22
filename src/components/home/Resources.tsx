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
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-md uppercase tracking-wider text-gray-500 mb-2">
            RESOURCES
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">Featured Resources</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-48">
                <Image
                  width={500}
                  height={500}
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {resource.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">{resource.title}</h4>
                <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                <div className="mt-8 ">
                  <a
                    href="#contact"
                    className="btn btn-primary group inline-flex items-center justify-center w-[220px] text-lg px-8 py-4 
               bg-primary text-black transition-all duration-300
               hover:bg-secondary hover:text-white"
                  >
                    <span className="relative z-10">Read More</span>

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
            </motion.div>
          ))}
        </div>

        {/* Loader or Button */}
        <div className="flex justify-center mt-10">
          {loading ? (
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          ) : (
            <button
              onClick={handleToggle}
              className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-all"
            >
              {showAll ? "See Few" : "See More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;
