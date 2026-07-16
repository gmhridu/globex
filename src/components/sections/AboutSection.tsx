"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
                Built for Manufacturing,
                <br />
                <span className="text-primary">Scaled for Success</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                We&apos;re not just another business consultancy. We&apos;re
                manufacturing specialists who understand the unique challenges
                of scaling production-based businesses in global markets.
              </p>

              <p>
                Our proven methodology combines deep industry expertise with
                data-driven strategies to help manufacturers expand their reach,
                optimize their operations, and accelerate growth.
              </p>

              <p>
                From startups looking to scale to established manufacturers
                seeking new markets, we provide the strategic guidance and
                practical support needed to succeed in today&apos;s competitive
                landscape.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 text-sm">
                  Manufacturers Helped
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 text-sm">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                <div className="text-gray-600 text-sm">Revenue Generated</div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/about-us" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-primary/10 rounded-3xl p-8">
              <Image
                src="/images/about-manufacturing.jpg"
                alt="Manufacturing Team"
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-dark-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-dark-900">
                    Proven Results
                  </div>
                  <div className="text-sm text-gray-600">
                    Industry-leading growth rates
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
