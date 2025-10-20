"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../../types/blog";

const BlogsClient = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll((prev) => !prev);
      setLoading(false);
    }, 600);
  };

  const blogs: Blog[] = [
    {
      id: 1,
      category: "Recruitment",
      title:
        "The Importance of Internships for Progressive Companies and Students",
      excerpt:
        "Discover how internships bridge the gap between education and industry for both students and businesses...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/Internships-1024x449.jpg",
      author: "Globex Team",
      date: "2024-11-15",
      body: `
        Internships have become essential in today's rapidly changing job market.
        They provide students with practical exposure while giving companies access to fresh perspectives and future-ready talent.
        At Globex, we help businesses design meaningful internship programs that build real skills and foster innovation.
      `,
    },
    {
      id: 2,
      category: "Food & Hospitality",
      title:
        "Top Hospitality Trends to Watch in 2024: How Globex Can Help You Stay Ahead",
      excerpt:
        "Explore key trends shaping hospitality in 2024 and how Globex empowers businesses to adapt and thrive...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/HOSPITALITY-980x551.jpg",
      author: "Globex Team",
      date: "2024-11-10",
      body: `
        Hospitality is evolving faster than ever with technology, personalization, and sustainability leading the way.
        Globex works closely with hotels and restaurants to modernize their operations and align with guest expectations.
      `,
    },
    {
      id: 3,
      category: "Assistive Technology",
      title:
        "The Evolution of Education in 2024: Embracing EdTech with Globex Support",
      excerpt:
        "Technology is revolutionizing learning. See how Globex supports EdTech adoption across institutions...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/11/Benefits-Of-EdTech-In-The-Classroom.avif",
      author: "Globex Team",
      date: "2024-11-05",
      body: `
        The education sector is undergoing a digital transformation with EdTech leading the charge.
        Globex partners with educational organizations to integrate smart tools that improve student engagement and outcomes.
      `,
    },
    {
      id: 4,
      category: "Assistive Technology",
      title:
        "Empowering Accessibility: How Globex Navigates Europe's Assistive Tech Trends",
      excerpt:
        "Assistive technology is reshaping accessibility in Europe. Learn how Globex supports this vital growth...",
      image:
        "https://weareglobex.com/wp-content/uploads/2024/10/pexels-thisisengineering-3912959-980x653.jpg",
      author: "Globex Team",
      date: "2024-10-30",
      body: `
        Assistive technology enables inclusivity and independence.
        At Globex, we collaborate with innovators to make technology accessible for everyone, promoting equality through innovation.
      `,
    },
  ];

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Our Insights
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest Blog Posts
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <Link href={`/blogs/${blog.id}`}>
                <div className="relative h-52">
                  <Image
                    width={500}
                    height={500}
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>By {blog.author}</span>
                    <span>
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Read More <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-10">
          {loading ? (
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-400"></div>
            </div>
          ) : (
            <button
              onClick={handleToggle}
              className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-secondary transition-all"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsClient;
