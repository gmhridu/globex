"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeroSection from "@/components/blogs/Header";
import { Blog } from "../../../types/blog";

interface BlogDetailsProps {
  blog: Blog;
}

const BlogsDetailes = ({ blog }: BlogDetailsProps) => {
  return (
    <>
      <HeroSection />
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/blogs"
              className="inline-flex items-center text-primary hover:text-secondary mb-6 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>

            <div className="relative w-full h-64 md:h-96 mb-6 rounded-xl overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={1000}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            <span className="bg-primary text-white text-xs px-3 py-1 rounded-full mb-3 inline-block">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            <div className="text-gray-500 text-sm mb-8">
              By {blog.author} •{" "}
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {blog.body.split("\n").map((p, i) => (
                <p key={i} className="mb-4">
                  {p.trim()}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogsDetailes;
