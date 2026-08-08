"use client";

import { sans, serif } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        body: "By accessing or using the We Are Globex website or any of our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should discontinue use of our website and services immediately.",
      },
      {
        body: "We may amend these terms at any time. Updated terms will be posted on this page with an updated \"Last Updated\" date, and continued use of our services following any change constitutes acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "services",
    title: "Our Services",
    content: [
      {
        body: "We Are Globex Ltd provides market entry and expansion services across Europe and the Middle East, including but not limited to:",
        list: [
          "<strong>Market research:</strong> Category, buyer, and channel analysis to support informed commercial decisions.",
          "<strong>Distribution services:</strong> Sourcing, qualification, and management of distributors and retail partners.",
          "<strong>Private label development:</strong> Facilitation of private label programmes between brands and buyers.",
          "<strong>Compliance support:</strong> Guidance on regulatory and compliance requirements for market entry.",
        ],
      },
      {
        body: "The precise scope of any engagement, including deliverables, timelines, and fees, will be set out in a separate written agreement between you and We Are Globex. Where such an agreement exists, it takes precedence over these Terms of Service to the extent of any conflict.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        body: "All content on this website, including text, graphics, logos, images, and software, is the property of We Are Globex Ltd or its licensors and is protected by applicable copyright and intellectual property laws.",
        list: [
          "You may view, download, and print content from this website for personal, non-commercial use only.",
          "You may not reproduce, distribute, modify, or republish any content without our prior written consent.",
          "You may not use our name, logo, or branding in any way without explicit authorisation.",
        ],
      },
    ],
  },
  {
    id: "user-obligations",
    title: "User Obligations",
    content: [
      {
        body: "When using our website or engaging our services, you agree to:",
        list: [
          "Provide accurate, current, and complete information when requested.",
          "Use the website and services only for lawful purposes and in accordance with these terms.",
          "Not attempt to gain unauthorised access to our systems, networks, or data.",
          "Not interfere with, disrupt, or overload the operation of our website.",
          "Not submit content that is unlawful, defamatory, or infringes the rights of third parties.",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      {
        body: "In the course of providing our services, we may share commercially sensitive information, including brand plans, pricing, and buyer intelligence. You agree to keep such information confidential and to use it solely for the purpose of evaluating or progressing the engagement for which it was shared.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: [
      {
        body: "Our services are provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied, including implied warranties of merchantability or fitness for a particular purpose.",
        list: [
          "We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.",
          "We will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.",
          "Our total liability to you in connection with any engagement shall not exceed the fees you have paid to us for that engagement.",
          "Nothing in these terms limits liability that cannot be excluded or limited under applicable law.",
        ],
      },
    ],
  },
  {
    id: "indemnity",
    title: "Indemnification",
    content: [
      {
        body: "You agree to indemnify and hold harmless We Are Globex Ltd, its officers, employees, and agents from any claims, losses, damages, liabilities, or expenses arising out of your breach of these Terms of Service or your misuse of our website or services.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: [
      {
        body: "Our website may contain links to third-party websites that are not owned or controlled by We Are Globex. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. Your use of any third-party website is at your own risk.",
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      {
        body: "We may suspend or terminate your access to our website or services at any time, with or without notice, if we reasonably believe you have breached these Terms of Service or for any other reason that we consider appropriate. Upon termination, the provisions of these terms which by their nature should survive termination — including intellectual property, confidentiality, limitation of liability, and indemnity — shall continue to apply.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      {
        body: "These Terms of Service are governed by and construed in accordance with the laws of England and Wales, and you agree to submit to the exclusive jurisdiction of the courts of England and Wales in relation to any disputes arising out of or in connection with these terms.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        body: "If you have any questions about these Terms of Service, please contact us:",
        list: [
          "<strong>By email:</strong> info@weareglobex.com",
          "<strong>By post:</strong> We Are Globex Ltd, Victory Way Admirals Park, Dartford, Kent DA2 6QD",
        ],
      },
    ],
  },
];

export function Body() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const h = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(`tos-${s.id}`);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = s.id;
        }
      }
      setActiveSection(current);
    };
    h();
    window.addEventListener("scroll", h, { passive: true });
    window.addEventListener("resize", h);
    return () => {
      window.removeEventListener("scroll", h);
      window.removeEventListener("resize", h);
    };
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">
        {/* Sticky sidebar nav */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p
              className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-5"
              style={sans(500)}
            >
              Contents
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#tos-${s.id}`}
                  className="block py-2 px-3 text-xs transition-colors border-l-2"
                  style={{
                    ...sans(activeSection === s.id ? 500 : 400),
                    color: activeSection === s.id ? "#e8a020" : "#7a7f8e",
                    borderLeftColor:
                      activeSection === s.id ? "#e8a020" : "transparent",
                  }}
                >
                  {s.title}
                </a>
              ))}
            </nav>

            {/* Related links */}
            <div className="mt-8 pt-8 border-t border-border">
              <p
                className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-3"
                style={sans(500)}
              >
                Related
              </p>
              <div className="space-y-3">
                <Link
                  href="/privacy-policy"
                  className="block text-xs text-muted-foreground hover:text-[#e8a020] transition-colors flex items-center gap-2"
                  style={sans()}
                >
                  <span className="text-[#e8a020]">→</span> Privacy Policy
                </Link>
                <Link
                  href="/gdpr-statement"
                  className="block text-xs text-muted-foreground hover:text-[#e8a020] transition-colors flex items-center gap-2"
                  style={sans()}
                >
                  <span className="text-[#e8a020]">→</span> GDPR Statement
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Policy content */}
        <main className="min-w-0">
          {/* Intro */}
          <div className="pb-12 mb-12 border-b border-border">
            <p
              className="text-sm text-secondary-foreground leading-relaxed"
              style={sans()}
            >
              These Terms of Service (\"Terms\") apply to your access to and use
              of the We Are Globex website and the market entry and expansion
              services we provide. Please read them carefully before using our
              website or engaging our services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-0">
            {sections.map((section, idx) => (
              <section
                key={section.id}
                id={`tos-${section.id}`}
                className="pb-12 mb-12 border-b border-border last:border-0 last:mb-0 scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className="text-[0.65rem] text-[#3a3f4d] mt-1.5 tabular-nums"
                    style={sans(500)}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="text-2xl md:text-3xl uppercase leading-tight"
                    style={serif()}
                  >
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6 pl-8">
                  {section.content.map((block, bi) => (
                    <div key={bi}>
                      {block.body && (
                        <p
                          className="text-sm text-secondary-foreground leading-relaxed mb-4"
                          style={sans()}
                        >
                          {block.body}
                        </p>
                      )}
                      {block.list && (
                        <ul className="space-y-2.5">
                          {block.list.map((item, li) => (
                            <li key={li} className="flex gap-3">
                              <span className="text-[#e8a020] text-xs mt-1 shrink-0">
                                →
                              </span>
                              <span
                                className="text-sm text-secondary-foreground leading-relaxed"
                                style={sans()}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
