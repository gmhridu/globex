"use client";

import {
  AlertTriangle,
  DollarSign,
  Clock,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Market Entry Barriers",
    description:
      "Complex regulations, cultural differences, and established competitors make international expansion challenging.",
    solution:
      "We navigate regulatory requirements and provide market intelligence to overcome entry barriers.",
  },
  {
    icon: DollarSign,
    title: "High Expansion Costs",
    description:
      "Setting up distribution networks and marketing in new markets requires significant upfront investment.",
    solution:
      "Our established partner network reduces costs by 70% compared to building from scratch.",
  },
  {
    icon: Clock,
    title: "Slow Time to Market",
    description:
      "Traditional expansion methods can take years to establish meaningful market presence.",
    solution:
      "Our proven processes and existing relationships accelerate market entry by 60%.",
  },
  {
    icon: Users,
    title: "Partner Verification",
    description:
      "Finding reliable distributors and partners without proper vetting can lead to costly mistakes.",
    solution:
      "Our comprehensive partner verification ensures you work with trusted, high-performing partners.",
  },
  {
    icon: Target,
    title: "Limited Market Knowledge",
    description:
      "Lack of local market insights often leads to misaligned strategies and missed opportunities.",
    solution:
      "We provide deep market intelligence and local expertise to guide strategic decisions.",
  },
  {
    icon: Lightbulb,
    title: "Resource Constraints",
    description:
      "Manufacturing businesses often lack dedicated resources for international expansion planning.",
    solution:
      "Our expert team becomes your international expansion department, handling all aspects.",
  },
];

export default function ChallengesSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Common Challenges
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Manufacturing Expansion
            <br />
            <span className="text-red-500">Challenges We Solve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            International expansion is complex, but you don&apos;t have to
            navigate it alone. We&apos;ve identified and solved the most common
            challenges manufacturers face.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-14 h-14 bg-red-50 group-hover:bg-red-100 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                  <challenge.icon className="w-7 h-7 text-red-500" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dark-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Solution */}
                  <div className="bg-primary/5 rounded-2xl p-4 border-l-4 border-primary">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 font-medium">
                        <span className="text-primary font-semibold">
                          Our Solution:
                        </span>{" "}
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-dark-900 text-center mb-8">
            The Cost of Delayed Expansion
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-2">$2M+</div>
              <div className="text-gray-600">
                Average annual revenue lost per delayed year
              </div>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-2">
                3-5 Years
              </div>
              <div className="text-gray-600">
                Time to recover from expansion mistakes
              </div>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-2">70%</div>
              <div className="text-gray-600">
                Of DIY international expansions fail
              </div>
            </div>
          </div>
        </div>

        {/* Solution CTA */}
        <div className="bg-gradient-to-r from-primary to-primary-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-dark-900 mb-6">
            Don&apos;t Let These Challenges Hold You Back
          </h3>
          <p className="text-dark-900/80 text-lg mb-8 max-w-2xl mx-auto">
            Our proven methodology and extensive network eliminate these common
            pitfalls, ensuring your expansion is successful from day one.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-dark">
              Schedule Free Consultation
            </a>
            <a
              href="/case-studies"
              className="btn btn-secondary bg-white text-primary hover:bg-gray-100"
            >
              See Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
