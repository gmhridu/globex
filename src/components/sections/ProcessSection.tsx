"use client";

import { CheckCircle, ArrowRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We start by understanding your manufacturing capabilities, current markets, and growth objectives through comprehensive analysis.",
    details: [
      "Manufacturing capability assessment",
      "Market analysis and research",
      "Competitive positioning review",
      "Growth opportunity identification",
    ],
  },
  {
    step: "02",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop a customized growth strategy tailored to your specific manufacturing sector and goals.",
    details: [
      "Custom growth strategy creation",
      "Market entry planning",
      "Partnership strategy development",
      "Resource allocation planning",
    ],
  },
  {
    step: "03",
    title: "Implementation & Execution",
    description:
      "We work alongside your team to execute the strategy, leveraging our network and expertise to drive results.",
    details: [
      "Strategic plan execution",
      "Partner network activation",
      "Market entry support",
      "Performance monitoring",
    ],
  },
  {
    step: "04",
    title: "Growth & Optimization",
    description:
      "We continuously optimize your approach based on results, ensuring sustained growth and market expansion.",
    details: [
      "Performance optimization",
      "Scaling support",
      "Continuous improvement",
      "Long-term growth planning",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            From Strategy to
            <br />
            <span className="text-primary">Sustainable Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures your manufacturing business scales
            efficiently and sustainably in global markets.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary/30 z-0 hidden lg:block"></div>
              )}

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step Number */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center relative z-10">
                      <span className="text-xl font-bold text-dark-900">
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Title & Description */}
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-dark-900 mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{
                                width: `${((index + 1) / processSteps.length) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">
                            Step {index + 1} of {processSteps.length}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="font-semibold text-dark-900 mb-4">
                          Key Activities:
                        </h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <h3 className="text-3xl font-bold text-dark-900 mb-4">
              Ready to Start Your Growth Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our proven process has helped hundreds of manufacturers scale
              successfully. Let&apos;s discuss how we can accelerate your
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn btn-primary inline-flex items-center"
              >
                Start Your Journey
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="/case-studies" className="btn btn-secondary">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
