"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);


  const resources = [
    {
      id: 1,
      category: "Recruitment",
      title:
        "The Importance of Internships for Progressive Companies and Students: Bridging the Gap Between Education and Industry",
      excerpt:
        "In today's rapidly evolving job market, internships have become an essential stepping stone...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/Internships-1024x449.jpg",
      author: "Globex Team",
      date: "2024-11-15",
      body: "Detailed content about internships...",
    },
    {
      id: 2,
      category: "Food & Hospitality",
      title:
        "Top Hospitality Trends to Watch in 2024: How Globex Can Help You Stay Ahead",
      excerpt:
        "Stay ahead in the hospitality industry with the latest trends and insights...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/HOSPITALITY-980x551.jpg",
      author: "Globex Team",
      date: "2024-11-10",
      body: "Detailed content about hospitality trends...",
    },
    {
      id: 3,
      category: "Assistive Technology",
      title:
        "The Evolution of Education in 2024: Embracing Edtech with Globex Support",
      excerpt:
        "EdTech is transforming education. Learn how Globex supports this innovation...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/Benefits-Of-EdTech-In-The-Classroom.avif",
      author: "Globex Team",
      date: "2024-11-05",
      body: "Detailed content about education evolution...",
    },
    {
      id: 4,
      category: "Assistive Technology",
      title:
        "Empowering Accessibility: How Globex Navigates Europe's Assistive Technology Trends",
      excerpt:
        "The assistive technology industry is rapidly growing. Explore the trends...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/10/pexels-thisisengineering-3912959-980x653.jpg",
      author: "Globex Team",
      date: "2024-10-30",
      body: "Detailed content about assistive technology...",
    },
  ];

  const visibleResources = showAll ? resources : resources.slice(0, 3);

  return (
    <section className="bg-white py-12">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            RESOURCES
          </h2>
          <h3 className="text-4xl md:text-4xl font-bold">Featured Resources</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <Link href={`/blogs/${resource.id}`}>
                <div className="relative h-44 md:h-48">
                  <Image
                    width={500}
                    height={500}
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-primary  px-2 py-0.5 rounded-full text-xs font-semibold">
                    {resource.category}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <h4 className="text-md md:text-lg font-semibold mb-2 line-clamp-2">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-3">
                    {resource.excerpt}
                  </p>
                  <div>
                    <div className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium text-sm md:text-base transition-colors cursor-pointer">
                      Read More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          {loading ? (
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-400"></div>
            </div>
          ) : (
            <Link
              href="/blogs"
              className="px-6 py-2 rounded-full bg-primary font-semibold hover:bg-secondary transition-all inline-block"
            >
              {showAll ? "See Few" : "See More"}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resources;
