"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const DESCRIBES = [
  "North American Manufacturer",
  "Established Regional Distributor",
  "Importer / Wholesale Buyer",
  "Retail Chain or Buying Group",
  "Private Label Buyer",
  "Other",
];

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  describes: z.string().min(1, "Please select an option"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      describes: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit");
      }
      setSubmitted(true);
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-[#0d0f14] border border-[#2a2f3d] px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3f4d] focus:border-[#e8a020] focus:outline-none transition-colors";

  return (
    <section
      id="contact-form"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — context */}
          <div className="relative bg-card py-16 px-8 lg:px-14 flex flex-col justify-center">
            <img
              src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?w=800&h=600&fit=crop&auto=format"
              alt="Global network"
              className="absolute inset-0 w-full h-full object-cover opacity-5"
            />
            <div className="relative">
              <span className="w-6 h-px bg-[#e8a020] block mb-6" />
              <h2
                className="text-5xl md:text-6xl uppercase leading-none mb-8"
                style={serif()}
              >
                Send Us
                <br />
                <span className="text-[#e8a020]">a Message.</span>
              </h2>
              <p
                className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-12"
                style={sans()}
              >
                Fill in the form and we'll match you with the right person on
                our team. Every enquiry is reviewed personally.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: "Manufacturers",
                    desc: "Looking to export to Europe or the Middle East?",
                  },
                  {
                    title: "Distributors",
                    desc: "Seeking new product lines from North American suppliers?",
                  },
                  {
                    title: "Buyers",
                    desc: "Exploring private label or strategic supply partnerships?",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 pb-8 border-b border-border last:border-0 last:pb-0"
                  >
                    <span className="text-[#e8a020] text-xs mt-1 shrink-0">
                      →
                    </span>
                    <div>
                      <p
                        className="text-sm uppercase text-[#f0ede8] mb-1"
                        style={serif(700)}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm text-muted-foreground"
                        style={sans()}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#0d0f14] py-16 px-8 lg:px-14">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="text-6xl mb-6 text-[#e8a020]">✦</div>
                <h3
                  className="text-5xl uppercase text-[#e8a020] mb-4"
                  style={serif()}
                >
                  Message Sent.
                </h3>
                <p
                  className="text-sm text-muted-foreground max-w-xs"
                  style={sans()}
                >
                  We'll be in touch within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[0.65rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors border-b border-border pb-0.5"
                  style={sans(500)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="w-6 h-px bg-[#e8a020] block mb-4" />
                  <h3 className="text-4xl uppercase" style={serif()}>
                    Your Enquiry
                  </h3>
                </div>
                <form
                  className="space-y-5"
                  noValidate
                  onSubmit={form.handleSubmit(onSubmit)}
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
                        placeholder="Jane"
                        className={inputCls}
                        style={sans()}
                        {...form.register("firstName")}
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
                        placeholder="Smith"
                        className={inputCls}
                        style={sans()}
                        {...form.register("lastName")}
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
                        placeholder="jane@company.com"
                        className={inputCls}
                        style={sans()}
                        {...form.register("email")}
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
                        placeholder="+1 555 000 0000"
                        className={inputCls}
                        style={sans()}
                        {...form.register("phone")}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Ltd"
                      className={inputCls}
                      style={sans()}
                      {...form.register("company")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Which best describes you?
                    </label>
                    <select
                      className={`${inputCls} appearance-none`}
                      style={sans()}
                      {...form.register("describes")}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {DESCRIBES.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1.5"
                      style={sans(500)}
                    >
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what you're working on and how we can help…"
                      className={`${inputCls} resize-none`}
                      style={sans()}
                      {...form.register("message")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    style={sans(600)}
                  >
                    {isSubmitting ? "Sending…" : "Send Message →"}
                  </button>
                  <p
                    className="text-[0.6rem] text-[#3a3f4d] text-center"
                    style={sans()}
                  >
                    By submitting this form you agree to our Privacy Policy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
