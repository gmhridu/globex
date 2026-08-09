"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const openPositions = [
  {
    title: "Market Entry Consultant",
    type: "Full-Time",
    location: "Dartford, Kent (Hybrid)",
    dept: "Consulting",
    desc: "Work directly with North American manufacturers to build their European and Middle East distribution strategy. You'll own client relationships from onboarding through to first active trading.",
    requirements: [
      "3+ years in international trade, export consulting, or B2B sales",
      "Strong commercial acumen and confident negotiator",
      "Experience working with European or GCC markets preferred",
    ],
  },
  {
    title: "Business Development Manager",
    type: "Full-Time",
    location: "Dartford, Kent (Hybrid)",
    dept: "Sales",
    desc: "Identify and convert new manufacturer clients across North America. You'll manage the full sales cycle — from outbound prospecting to signed engagement — for a growing pipeline of inbound leads.",
    requirements: [
      "5+ years B2B sales, ideally in manufacturing, logistics, or trade services",
      "Track record of hitting or exceeding revenue targets",
      "Confident presenting to C-suite decision makers",
    ],
  },
  {
    title: "Distribution Network Associate",
    type: "Full-Time",
    location: "Dartford, Kent",
    dept: "Operations",
    desc: "Build and maintain our distributor and buyer database across Europe and the GCC. You'll qualify new partners, manage relationship records, and support consultants with in-market research and introductions.",
    requirements: [
      "1–2 years in a research, operations, or commercial support role",
      "Detail-oriented with strong written communication",
      "Interest in international trade and export markets",
    ],
  },
];

export function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const inputCls =
    "w-full bg-[#0d0f14] border border-[#2a2f3d] px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3f4d] focus:border-[#e8a020] focus:outline-none transition-colors";
  return (
    <section
      id="careers-apply"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — image + copy */}
          <div className="relative min-h-125 bg-[#080b10] flex flex-col justify-end p-12 lg:p-16">
            <img
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?w=900&h=700&fit=crop&auto=format"
              alt="Team working together in a board meeting"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,11,16,0.95) 30%, rgba(8,11,16,0.3) 100%)",
              }}
            />
            <div className="relative">
              <span className="w-6 h-px bg-[#e8a020] block mb-6" />
              <h2
                className="text-5xl md:text-6xl uppercase leading-none mb-6"
                style={serif()}
              >
                Make Your
                <br />
                <span className="text-[#e8a020]">Application.</span>
              </h2>
              <p
                className="text-sm text-muted-foreground max-w-xs leading-relaxed"
                style={sans()}
              >
                Tell us who you are and what you're looking for. We read every
                application and respond to everyone.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0d0f14] p-12 lg:p-16">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-5xl mb-6 text-[#e8a020]">✦</div>
                <h3
                  className="text-4xl uppercase text-[#e8a020] mb-4"
                  style={serif()}
                >
                  Application Sent.
                </h3>
                <p
                  className="text-sm text-muted-foreground max-w-xs"
                  style={sans()}
                >
                  We'll be in touch. Thanks for your interest in Globex.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[0.65rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors border-b border-border pb-0.5"
                  style={sans(500)}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="w-6 h-px bg-[#e8a020] block mb-4" />
                  <h3 className="text-4xl uppercase" style={serif()}>
                    Your Details
                  </h3>
                </div>
                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                        style={sans(500)}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        className={inputCls}
                        style={sans()}
                        value={form.firstName}
                        onChange={(e) =>
                          setForm({ ...form, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                        style={sans(500)}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className={inputCls}
                        style={sans()}
                        value={form.lastName}
                        onChange={(e) =>
                          setForm({ ...form, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                        style={sans(500)}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@email.com"
                        className={inputCls}
                        style={sans()}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                        style={sans(500)}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7700 000000"
                        className={inputCls}
                        style={sans()}
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Role You're Applying For
                    </label>
                    <select
                      className={`${inputCls} appearance-none`}
                      style={sans()}
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                    >
                      <option value="">Speculative Application</option>
                      {openPositions.map((r) => (
                        <option key={r.title} value={r.title}>
                          {r.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Tell Us About Yourself
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Your background, what you're looking for, and why Globex…"
                      className={`${inputCls} resize-none`}
                      style={sans()}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>
                  <p className="text-[0.6rem] text-[#3a3f4d]" style={sans()}>
                    You can also attach a CV by emailing{" "}
                    <a
                      href="mailto:careers@weareglobex.com"
                      className="text-muted-foreground hover:text-[#e8a020] transition-colors"
                    >
                      careers@weareglobex.com
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
                    style={sans(600)}
                  >
                    Submit Application →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
