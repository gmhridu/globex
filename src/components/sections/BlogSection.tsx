"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Manufacturing: Industry 4.0 and Global Expansion",
    excerpt: "Discover how Industry 4.0 technologies are reshaping manufacturing and creating new opportunities for global growth.",
    image: "/images/blog/industry-4-0.jpg",
    author: "Sarah Johnson",
    date: "2024-03-15",
    category: "Industry Insights",
    slug: "future-of-manufacturing-industry-4-0",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Building Resilient Supply Chains: Lessons from Global Leaders",
    excerpt: "Learn how top manufacturers are building supply chain resilience and adapting to global market challenges.",
    image: "/images/blog/supply-chain.jpg",
    author: "Michael Chen",
    date: "2024-03-10",
    category: "Supply Chain",
    slug: "building-resilient-supply-chains",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Sustainable Manufacturing: Balancing Profit and Planet",
    excerpt: "Explore sustainable manufacturing practices that drive both environmental impact and business growth.",
    image: "/images/blog/sustainable-manufacturing.jpg",
    author: "Emma Rodriguez",
    date: "2024-03-05",
    category: "Sustainability",
    slug: "sustainable-manufacturing-profit-planet",
    readTime: "6 min read"
  }
];

export default function BlogSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Latest Insights
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Manufacturing
            <br />
            <span className="text-primary">Intelligence Hub</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of industry trends with expert insights, case studies, and actionable strategies for manufacturing growth.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`blog-card group cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <Link href={`/blog/${post.slug}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? "h-80" : "h-48"
                }`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary px-3 py-1 rounded-full text-xs font-semibold text-dark-900">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                  </div>

                  <h3 className={`font-bold text-dark-900 mb-3 group-hover:text-primary transition-colors duration-200 ${
                    index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                  }`}>
                    {post.title}
                  </h3>

                  <p className={`text-gray-600 mb-4 ${
                    index === 0 ? "text-lg" : "text-base"
                  }`}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-semibold group-hover:text-primary-dark transition-colors duration-200">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Stay Informed with Manufacturing Insights
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get weekly insights, industry reports, and exclusive content delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-input flex-1"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>

            <p className="text-sm text-gray-500">
              Join 5,000+ manufacturing professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* View All Blog Posts CTA */}
        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-secondary inline-flex items-center">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
