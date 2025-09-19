"use client";

import { TrendingUp, Globe, Users, Zap, Shield, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    description:
      "Average 300% increase in revenue within 18 months through our proven strategies and network connections.",
    metric: "300%",
    metricLabel: "Revenue Growth",
  },
  {
    icon: Globe,
    title: "Global Market Access",
    description:
      "Expand into 50+ international markets with our extensive distributor and partner network.",
    metric: "50+",
    metricLabel: "Markets Accessible",
  },
  {
    icon: Users,
    title: "Verified Partners",
    description:
      "Connect with pre-vetted distributors, brands, and manufacturers to ensure quality partnerships.",
    metric: "1000+",
    metricLabel: "Verified Partners",
  },
  {
    icon: Zap,
    title: "Faster Time to Market",
    description:
      "Reduce market entry time by 60% with our streamlined processes and established connections.",
    metric: "60%",
    metricLabel: "Time Reduction",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description:
      "Minimize expansion risks with comprehensive market intelligence and partner verification.",
    metric: "95%",
    metricLabel: "Success Rate",
  },
  {
    icon: Award,
    title: "Expert Guidance",
    description:
      "Access industry specialists with deep manufacturing expertise and proven track records.",
    metric: "25+",
    metricLabel: "Years Experience",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Why Choose Globex
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            The Benefits of
            <br />
            <span className="text-primary">Partnership with Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&apos;t just offer services – we deliver measurable results
            that transform manufacturing businesses into global market leaders.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon & Metric */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary group-hover:text-dark-900 rounded-2xl flex items-center justify-center transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-primary group-hover:text-dark-900" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {benefit.metric}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {benefit.metricLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-dark-900 mb-8">
            Proven Results Across Industries
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-dark-900 mb-2">500+</div>
              <div className="text-dark-900/80 font-medium">
                Manufacturers Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dark-900 mb-2">$2B+</div>
              <div className="text-dark-900/80 font-medium">
                Revenue Generated
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dark-900 mb-2">50+</div>
              <div className="text-dark-900/80 font-medium">
                Countries Reached
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dark-900 mb-2">95%</div>
              <div className="text-dark-900/80 font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16">
          <div className="bg-gray-50 rounded-3xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl text-primary mb-6">&quot;</div>
              <blockquote className="text-2xl text-dark-900 font-medium mb-8 leading-relaxed">
                Globex transformed our manufacturing business from a regional
                player to a global force. Their expertise in international
                markets and strategic partnerships helped us achieve 400% growth
                in just two years.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-dark-900">JM</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-dark-900">
                    James Mitchell
                  </div>
                  <div className="text-gray-600">
                    CEO, TechManufacturing Ltd
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
