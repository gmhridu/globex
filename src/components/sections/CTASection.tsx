"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Ready to Scale?
            </span>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <br />
              Manufacturing
              <span className="text-primary"> Business</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of manufacturers who have accelerated their growth with our proven strategies, extensive network, and expert guidance.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                "Access to 1000+ verified partners globally",
                "Average 300% revenue growth in 18 months",
                "Comprehensive market intelligence and support",
                "Risk-free expansion with proven methodology"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn btn-primary inline-flex items-center">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/book-consultation" className="btn btn-secondary">
                Book Free Consultation
              </Link>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Call Us</div>
                  <div className="text-white font-medium">+44 20 7123 4567</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email Us</div>
                  <div className="text-white font-medium">hello@weareglobex.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Visit Us</div>
                  <div className="text-white font-medium">London, UK</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <Image
                src="/images/cta-manufacturing.jpg"
                alt="Global Manufacturing Success"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold text-secondary">$2B+</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-primary rounded-full opacity-80 animate-bounce-gentle"></div>
            <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-60 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Trusted by Leading Manufacturers Worldwide
            </h3>
            <p className="text-gray-400">
              Join companies that have achieved remarkable growth with our support
            </p>
          </div>

          {/* Logo Carousel Placeholder */}
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="w-24 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">LOGO</span>
            </div>
            <div className="w-24 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-400">LOGO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
