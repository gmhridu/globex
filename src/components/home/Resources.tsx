"use client";
import { useState, useEffect } from "react";
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

  const [blogs, setBlogs] = useState<{
    id: string;
    title: string;
    excerpt: string;
    image?: string;
    category: string;
    author: string;
    date: string;
  }[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.slice(0, 4)); // Limit to 4 blogs for homepage
      } catch (err) {
        setFetchError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const visibleBlogs = blogs.slice(0, 4);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-44 md:h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-4 md:p-5">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4"></div>
                </div>
              </motion.div>
            ))
          ) : fetchError ? (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-500">
                Failed to load blogs: {fetchError}
              </p>
            </div>
          ) : (
            visibleBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <Link href={`/blogs/${blog.id}`}>
                  <div className="relative h-44 md:h-48">
                    <Image
                      width={500}
                      height={500}
                      src={blog.image || "https://via.placeholder.com/400x300"}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-primary px-2 py-0.5 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-4 md:p-5">
                    <h4 className="text-md md:text-lg font-semibold mb-2 line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>By {blog.author}</span>
                      <span>
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium text-sm transition-colors cursor-pointer">
                      Read More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

        <div className="flex justify-center mt-6">
          <Link
            href="/blogs"
            className="px-6 py-2 rounded-full bg-primary font-semibold hover:bg-secondary transition-all inline-block"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Resources;
