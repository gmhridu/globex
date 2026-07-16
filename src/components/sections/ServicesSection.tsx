"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Factory, Globe } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "The Distribution Hub",
    description:
      "Connect with verified distributors and expand your market reach across multiple territories with our curated network.",
    features: [
      "Global Network Access",
      "Verified Partners",
      "Market Intelligence",
      "Territory Mapping",
    ],
    href: "/the-distribution-hub",
    image: "/images/distribution-hub.jpg",
  },
  {
    icon: Factory,
    title: "The Private-Label Hub",
    description:
      "Scale your manufacturing capacity by partnering with brands looking for reliable private-label production.",
    features: [
      "Brand Partnerships",
      "Quality Standards",
      "Production Scaling",
      "Revenue Growth",
    ],
    href: "/private-label-hub",
    image: "/images/private-label-hub.jpg",
  },
  {
    icon: Users,
    title: "The Contract MFG Hub",
    description:
      "Access contract manufacturing opportunities and leverage your production capabilities for maximum efficiency.",
    features: [
      "Contract Opportunities",
      "Capacity Optimization",
      "Manufacturing Network",
      "Partnership Support",
    ],
    href: "/contract-manufacturing-hub",
    image: "/images/contract-manufacturing.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Three Hubs,
            <br />
            <span className="text-primary">Unlimited Possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;ve built specialized platforms to connect manufacturers with
            the right opportunities, partners, and markets for sustainable
            growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-dark-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary-dark transition-colors duration-200 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Image */}
              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-2xl w-full h-auto object-cover"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Ready to Scale Your Manufacturing Business?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of manufacturers who have accelerated their growth
              through our specialized hubs and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link href="/about-us" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
