"use client";

import { sans, serif } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "overview",
    title: "Our Commitment to GDPR",
    content: [
      {
        body: "The UK General Data Protection Regulation (UK GDPR), along with the Data Protection Act 2018 (DPA 2018), governs the collection, processing, and sharing of all personal data about individuals in the United Kingdom. The EU General Data Protection Regulation (EU GDPR) governs equivalent activities for individuals located within the European Economic Area (EEA).",
      },
      {
        body: "We Are Globex Ltd is committed to maintaining a culture of compliance, ensuring that the personal data of our clients, contacts, and website users is handled lawfully, fairly, and transparently at all times. This statement outlines our obligations under both UK GDPR and EU GDPR and explains how we fulfil them.",
      },
    ],
  },
  {
    id: "controller",
    title: "Data Controller",
    content: [
      {
        body: "We Are Globex Ltd acts as the Data Controller for the personal data it collects and processes. As Data Controller, we determine the purposes and means of processing personal data and are responsible for ensuring that processing activities comply with applicable data protection law.",
        list: [
          "<strong>Company name:</strong> We Are Globex Ltd",
          "<strong>Registered in:</strong> England and Wales, United Kingdom",
          "<strong>Contact:</strong> info@weareglobex.com",
        ],
      },
    ],
  },
  {
    id: "lawful-basis",
    title: "Lawful Basis for Processing",
    content: [
      {
        body: "We Are Globex processes personal data only where a lawful basis exists. The lawful bases we rely on include:",
        list: [
          "<strong>Consent:</strong> Where you have provided clear, informed consent for us to process your data for a specific purpose.",
          "<strong>Contract:</strong> Where processing is necessary for the performance of a contract to which you are a party, or to take steps at your request prior to entering into a contract.",
          "<strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate business interests, provided those interests are not overridden by your rights and freedoms. This includes processing data to improve our services, manage client relationships, and conduct business development activities.",
          "<strong>Legal Obligation:</strong> Where processing is required to comply with a legal obligation to which We Are Globex is subject.",
        ],
      },
    ],
  },
  {
    id: "data-collected",
    title: "Personal Data We Collect",
    content: [
      {
        body: "We collect and process the following categories of personal data:",
        list: [
          "<strong>Identity data:</strong> First name, last name, job title, and company name.",
          "<strong>Contact data:</strong> Email address, phone number, and business address.",
          "<strong>Communication data:</strong> Records of correspondence, enquiries, and meeting notes.",
          "<strong>Technical data:</strong> IP address, browser type and version, time zone, browser plug-in types and versions, operating system, and platform.",
          "<strong>Usage data:</strong> Information about how you interact with our website and services.",
          "<strong>Marketing preferences:</strong> Your preferences for receiving communications from us.",
        ],
      },
      {
        body: "We do not collect any special category data (such as data relating to health, ethnicity, religion, or political opinion) unless explicitly required and with your express consent.",
      },
    ],
  },
  {
    id: "rights",
    title: "Your Rights Under GDPR",
    content: [
      {
        body: "Under UK GDPR and EU GDPR, you have the following rights in relation to your personal data:",
        list: [
          "<strong>Right of access:</strong> You have the right to request a copy of the personal data we hold about you.",
          "<strong>Right to rectification:</strong> You have the right to request that we correct inaccurate or incomplete personal data.",
          "<strong>Right to erasure:</strong> You have the right to request that we delete your personal data where there is no legitimate reason for us to continue processing it.",
          "<strong>Right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.",
          "<strong>Right to data portability:</strong> You have the right to request that we transfer your personal data to you or to a third party in a structured, commonly used, machine-readable format.",
          "<strong>Right to object:</strong> You have the right to object to the processing of your personal data where we rely on legitimate interests as our lawful basis.",
          "<strong>Rights related to automated decision-making:</strong> You have the right not to be subject to decisions made solely by automated processing, including profiling, where those decisions produce a legal or similarly significant effect.",
        ],
      },
      {
        body: "To exercise any of these rights, please contact us at info@weareglobex.com. We will respond to all legitimate requests within one calendar month.",
      },
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    content: [
      {
        body: "We retain personal data only for as long as is necessary to fulfil the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements.",
        list: [
          "<strong>Client and prospect data:</strong> Retained for the duration of our business relationship and for up to 6 years thereafter in line with UK statutory requirements.",
          "<strong>Website enquiry data:</strong> Retained for up to 2 years from the date of the enquiry unless an ongoing relationship is established.",
          "<strong>Marketing data:</strong> Retained until consent is withdrawn or you opt out of communications.",
          "<strong>Legal and compliance records:</strong> Retained for the period required by applicable law.",
        ],
      },
    ],
  },
  {
    id: "transfers",
    title: "International Data Transfers",
    content: [
      {
        body: "As a business that facilitates market entry across Europe and the Middle East, We Are Globex may transfer personal data outside the United Kingdom or the EEA in the course of providing our services.",
        list: [
          "All international transfers are conducted in accordance with UK GDPR Chapter V requirements.",
          "Where transfers are made to countries without an adequacy decision, we implement appropriate safeguards including Standard Contractual Clauses (SCCs) or other approved transfer mechanisms.",
          "We do not transfer personal data to third parties for their own independent marketing purposes.",
        ],
      },
    ],
  },
  {
    id: "third-parties",
    title: "Third-Party Processors",
    content: [
      {
        body: "We may share your personal data with trusted third-party service providers who process data on our behalf. All processors are bound by data processing agreements that require them to handle data only in accordance with our instructions and applicable law. Categories of processors include:",
        list: [
          "CRM and business management platforms",
          "Email marketing and communications tools",
          "Website hosting and analytics providers",
          "Professional advisors (legal, accountancy, and compliance)",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Data Security",
    content: [
      {
        body: "We implement appropriate technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These measures are reviewed and updated regularly in line with best practice and evolving threat landscapes.",
        list: [
          "Access to personal data is restricted to authorised personnel on a need-to-know basis.",
          "All electronic data is stored on secure, encrypted systems.",
          "Physical access to data is controlled and monitored.",
          "Staff handling personal data receive regular data protection training.",
        ],
      },
    ],
  },
  {
    id: "breach",
    title: "Data Breach Procedures",
    content: [
      {
        body: "In the event of a personal data breach, We Are Globex will follow the procedures set out in our internal Data Breach Response Policy. Where a breach is likely to result in a risk to the rights and freedoms of individuals, we will notify the Information Commissioner's Office (ICO) within 72 hours of becoming aware of the breach, in accordance with Article 33 UK GDPR. Where the breach is likely to result in a high risk to individuals, we will also notify affected individuals without undue delay.",
      },
    ],
  },
  {
    id: "complaints",
    title: "Complaints and Regulatory Authority",
    content: [
      {
        body: "If you have concerns about how we handle your personal data, you have the right to lodge a complaint with the relevant supervisory authority:",
        list: [
          "<strong>UK residents:</strong> Information Commissioner's Office (ICO) — ico.org.uk — 0303 123 1113",
          "<strong>EU residents:</strong> Your national Data Protection Authority (DPA) within your member state.",
        ],
      },
      {
        body: "We would, however, appreciate the opportunity to address your concerns directly before you approach a supervisory authority. Please contact us at info@weareglobex.com.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        body: "For any questions, requests, or concerns relating to this GDPR Statement or our data protection practices, please contact us:",
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
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const inputCls =
    "w-full bg-[#0d0f14] border border-[#2a2f3d] px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3f4d] focus:border-[#e8a020] focus:outline-none transition-colors";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    const h = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(`gdpr-${s.id}`);
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
        {/* Sticky sidebar */}
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
                  href={`#gdpr-${s.id}`}
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

            {/* Related link */}
            <div className="mt-8 pt-8 border-t border-border">
              <p
                className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-3"
                style={sans(500)}
              >
                Related
              </p>
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-[#e8a020] transition-colors flex items-center gap-2"
                style={sans()}
              >
                <span className="text-[#e8a020]">→</span> Privacy Policy
              </Link>
            </div>
          </div>
        </aside>

        {/* Content + form */}
        <main className="min-w-0">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-16">
            {/* Sections */}
            <div>
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={`gdpr-${section.id}`}
                  className="pb-12 mb-12 border-b border-border last:border-0 last:mb-0 scroll-mt-24"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <span
                      className="text-[0.65rem] text-[#3a3f4d] mt-1.5 tabular-nums shrink-0"
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

            {/* Sticky contact form */}
            <aside className="hidden xl:block">
              <div className="sticky top-24">
                <div className="bg-card border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-4 h-px bg-[#e8a020]" />
                    <span
                      className="text-[0.6rem] uppercase tracking-widest text-[#e8a020]"
                      style={sans(500)}
                    >
                      Data Enquiries
                    </span>
                  </div>
                  <h3
                    className="text-2xl uppercase leading-tight mb-2"
                    style={serif()}
                  >
                    Speak to an
                    <br />
                    <span className="text-[#e8a020]">
                      International
                      <br />
                      Business Advisor
                    </span>
                  </h3>
                  <p
                    className="text-xs text-muted-foreground leading-relaxed mb-6"
                    style={sans()}
                  >
                    Questions about your data or our GDPR obligations? Contact
                    us directly.
                  </p>

                  {submitted ? (
                    <div className="py-8 text-center">
                      <span
                        className="text-[#e8a020] text-2xl block mb-3"
                        style={serif()}
                      >
                        Thank You.
                      </span>
                      <p
                        className="text-xs text-muted-foreground"
                        style={sans()}
                      >
                        We'll respond within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className={inputCls}
                        style={sans()}
                      />
                      <input
                        type="text"
                        placeholder="Company"
                        value={form.company}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, company: e.target.value }))
                        }
                        className={inputCls}
                        style={sans()}
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className={inputCls}
                        style={sans()}
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, phone: e.target.value }))
                        }
                        className={inputCls}
                        style={sans()}
                      />
                      <textarea
                        rows={3}
                        placeholder="Your enquiry"
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className={`${inputCls} resize-none`}
                        style={sans()}
                      />
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
                        style={sans(600)}
                      >
                        Send Enquiry →
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
