"use client";

import { useState, useEffect } from "react";
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
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setFetchLoading(true);
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        // Transform data to match Blog interface
        const transformedBlogs: Blog[] = data.map(
          (blog: {
            id: string;
            category: string;
            title: string;
            excerpt: string;
            image?: string;
            author: string;
            date: string;
            body: string;
          }) => ({
            id: blog.id, // Use real database id
            category: blog.category || "General",
            title: blog.title,
            excerpt: blog.excerpt,
            image: blog.image || "https://via.placeholder.com/400x300",
            author: blog.author,
            date: blog.date
              ? new Date(blog.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0],
            body: blog.body,
          })
        );
        setBlogs(transformedBlogs);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching blogs:", err);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleToggle = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll((prev) => !prev);
      setLoading(false);
    }, 600);
  };

  // Display all blogs or first 3 based on showAll state
  const displayVisibleBlogs = showAll ? blogs : blogs.slice(0, 3);

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
          {displayVisibleBlogs.map((blog, index) => (
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

        {/* Loading State for Fetch */}
        {fetchLoading && (
          <div className="flex justify-center h-screen mt-10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center mt-10 text-red-600">
            <p>Failed to load blogs: {error}</p>
            <p className="text-sm mt-2">Showing static content instead.</p>
          </div>
        )}

        {/* Load More Button */}
        {!fetchLoading && blogs.length > 3 && (
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
        )}
      </div>
    </section>
  );
};

export default BlogsClient;
