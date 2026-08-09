"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

export function ApplicationForm() {
  const [appForm, setAppForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [appSubmitted, setAppSubmitted] = useState(false);

  const inputCls =
    "w-full bg-[#0d0f14] border border-[#2a2f3d] px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3f4d] focus:border-[#e8a020] focus:outline-none transition-colors";

  return (
    <section id="cd-apply" className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — copy */}
          <div className="relative bg-card p-12 lg:p-16 flex flex-col justify-center">
            <img
              src="https://images.unsplash.com/photo-1515868769-ad822a0c67e9?w=800&h=600&fit=crop&auto=format"
              alt="City aerial at night"
              className="absolute inset-0 w-full h-full object-cover opacity-8"
            />
            <div className="relative">
              <span className="w-6 h-px bg-[#e8a020] block mb-6" />
              <h2
                className="text-5xl md:text-6xl uppercase leading-none mb-8"
                style={serif()}
              >
                Become a<br />
                <span className="text-[#e8a020]">
                  Certified
                  <br />
                  Distributor.
                </span>
              </h2>
              <p
                className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-10"
                style={sans()}
              >
                Fill in the form and one of our team will reach out within one
                business day to discuss your application and the next steps.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "✦",
                    label: "No fees to apply",
                    sub: "The certification process is completely free.",
                  },
                  {
                    icon: "✦",
                    label: "Response within 24hrs",
                    sub: "We review every application personally.",
                  },
                  {
                    icon: "✦",
                    label: "Global manufacturer access",
                    sub: "340+ manufacturers across 14 categories.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <span className="text-[#e8a020] mt-0.5 text-xs shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p
                        className="text-sm font-medium text-[#f0ede8]"
                        style={sans(600)}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs text-muted-foreground mt-0.5"
                        style={sans()}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0d0f14] p-12 lg:p-16">
            {appSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-5xl mb-6 text-[#e8a020]">✦</div>
                <h3
                  className="text-4xl uppercase text-[#e8a020] mb-4"
                  style={serif()}
                >
                  Application Received.
                </h3>
                <p
                  className="text-sm text-muted-foreground max-w-xs"
                  style={sans()}
                >
                  We'll be in touch within one business day to discuss your
                  application.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <span className="w-6 h-px bg-[#e8a020] block mb-4" />
                  <h3 className="text-3xl uppercase" style={serif()}>
                    Your Application
                  </h3>
                </div>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setAppSubmitted(true);
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
                        value={appForm.firstName}
                        onChange={(e) =>
                          setAppForm({ ...appForm, firstName: e.target.value })
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
                        value={appForm.lastName}
                        onChange={(e) =>
                          setAppForm({ ...appForm, lastName: e.target.value })
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
                        placeholder="jane@company.com"
                        className={inputCls}
                        style={sans()}
                        value={appForm.email}
                        onChange={(e) =>
                          setAppForm({ ...appForm, email: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label
                        className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                        style={sans(500)}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 555 000 0000"
                        className={inputCls}
                        style={sans()}
                        value={appForm.phone}
                        onChange={(e) =>
                          setAppForm({ ...appForm, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Distribution enquiry — Germany"
                      className={inputCls}
                      style={sans()}
                      value={appForm.subject}
                      onChange={(e) =>
                        setAppForm({ ...appForm, subject: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your distribution business — regions, categories, and what you're looking for…"
                      className={`${inputCls} resize-none`}
                      style={sans()}
                      value={appForm.message}
                      onChange={(e) =>
                        setAppForm({ ...appForm, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors mt-2"
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
