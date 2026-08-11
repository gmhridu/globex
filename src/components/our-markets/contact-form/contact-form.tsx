"use client";
import { sans, serif } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const SECTORS = [
  "Agriculture",
  "Beauty & Cosmetics",
  "Cannabis",
  "Construction",
  "Sports",
  "Food & Hospitality",
  "Toys & Baby",
  "Veterinary & Pet Care",
  "Tobacco",
  "Outdoor Living & Gardening",
  "Mining",
  "Maritime",
  "Oil & Gas",
  "Luxury Home Décor",
];

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  country: z.string().min(1, "Country is required"),
  sector: z.string().min(1, "Sector is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      sector: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/our-markets-contact/submit", {
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
      console.error("Market enquiry error:", error);
      toast.error("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="mkt-contact"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — image + copy */}
          <div className="relative min-h-125 bg-[#080b10] flex flex-col justify-end p-12 lg:p-16">
            <img
              src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=900&h=700&fit=crop&auto=format"
              alt="Global shipping and logistics operations"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,11,16,0.95) 30%, rgba(8,11,16,0.4) 100%)",
              }}
            />
            <div className="relative">
              <span className="w-6 h-px bg-[#e8a020] block mb-6" />
              <h2
                className="text-5xl md:text-6xl uppercase leading-none mb-6"
                style={serif()}
              >
                Let&apos;s Explore
                <br />
                <span className="text-[#e8a020]">
                  Your Next
                  <br />
                  Market.
                </span>
              </h2>
              <p
                className="text-sm text-muted-foreground max-w-xs leading-relaxed"
                style={sans()}
              >
                Tell us about your product and where you want to go. We&apos;ll
                respond within one business day.
              </p>
              <div className="mt-10 space-y-3">
                {[
                  {
                    icon: "📍",
                    text: "Victory Way Admirals Park, Dartford, Kent DA2 6QD",
                  },
                  { icon: "✉️", text: "info@weareglobex.com" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-sm">{item.icon}</span>
                    <span
                      className="text-xs text-muted-foreground"
                      style={sans()}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card p-12 lg:p-16 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-6">✦</div>
                <h3
                  className="text-4xl uppercase text-[#e8a020] mb-4"
                  style={serif()}
                >
                  Enquiry Received.
                </h3>
                <p className="text-sm text-muted-foreground" style={sans()}>
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="w-6 h-px bg-[#e8a020] block mb-4" />
                  <h3 className="text-4xl uppercase" style={serif()}>
                    Submit an
                    <br />
                    <span className="text-[#e8a020]">Enquiry.</span>
                  </h3>
                </div>

                <form
                  className="space-y-5"
                  noValidate
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                      style={sans(500)}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      {...form.register("name")}
                      className="w-full bg-[#0d0f14] border border-border px-4 py-3 text-sm text-[#f0ede8] focus:border-[#e8a020] focus:outline-none transition-colors"
                      style={sans()}
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                      style={sans(500)}
                    >
                      Country
                    </label>
                    <select
                      {...form.register("country")}
                      className="w-full bg-[#0d0f14] border border-border px-4 py-3 text-sm text-[#f0ede8] focus:border-[#e8a020] focus:outline-none transition-colors appearance-none"
                      style={sans()}
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      {[
                        "United States",
                        "Canada",
                        "United Kingdom",
                        "Germany",
                        "France",
                        "Netherlands",
                        "UAE",
                        "Saudi Arabia",
                        "Other",
                      ].map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                      style={sans(500)}
                    >
                      Select Sector
                    </label>
                    <select
                      {...form.register("sector")}
                      className="w-full bg-[#0d0f14] border border-border px-4 py-3 text-sm text-[#f0ede8] focus:border-[#e8a020] focus:outline-none transition-colors appearance-none"
                      style={sans()}
                    >
                      <option value="" disabled>
                        Select your sector
                      </option>
                      {SECTORS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                      style={sans(500)}
                    >
                      Brief Message
                    </label>
                    <textarea
                      rows={4}
                      {...form.register("message")}
                      className="w-full bg-[#0d0f14] border border-border px-4 py-3 text-sm text-[#f0ede8] focus:border-[#e8a020] focus:outline-none transition-colors resize-none"
                      style={sans()}
                      placeholder="Tell us about your product and where you'd like to sell it…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={sans(600)}
                  >
                    {isSubmitting ? "Submitting…" : "Submit Enquiry →"}
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