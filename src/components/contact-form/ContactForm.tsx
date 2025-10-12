"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useTRPC } from "@/trpc/client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  company: z.string().min(1, {
    message: "Company is required.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  description: z.string().min(1, {
    message: "Please select an option.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      description: "",
      message: "",
    },
  });

  const submissionContact = trpc.contact.submitContact.mutationOptions({
    onSuccess: () => {
      setIsSubmitted(true);
      // Invalidate admin dashboard queries to update in real-time
      queryClient.invalidateQueries({
        queryKey: ["admin", "getAllSubmissions"],
      });
      queryClient.invalidateQueries({ queryKey: ["admin", "getStatusCounts"] });
      queryClient.invalidateQueries({ queryKey: ["admin", "getUnreadCount"] });
      // Broadcast to other tabs
      if (typeof window !== "undefined") {
        const bc = new BroadcastChannel("contact-submissions");
        bc.postMessage({ type: "new-submission" });
        bc.close();
      }
      form.reset();
    },
    onError: (error) => {
      console.error("Failed to submit contact form:", error);
    },
  });
  const submitContact = useMutation(submissionContact);

  const isLoading = submitContact.isPending;

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitContact.mutate(values);
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div
        className="container"
        style={{
          backgroundImage:
            "url('/assests/contact-form/white-map-background.jpg')",
          backgroundBlendMode: "overlay",
          opacity: 0.9,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Speak to an international business advisor
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch to find out how we can help you achieve your
              international expansion goals.
            </p>
            <Button
              className="group inline-flex w-[240px] items-center justify-center gap-2
             bg-primary text-black text-lg font-medium
             transition-all duration-300 hover:bg-white hover:text-black"
            >
              <Link href="/contact" className="inline-flex items-center">
                <span className="whitespace-nowrap">GET STARTED NOW!</span>
                <ChevronRight
                  className="h-5 w-5 -translate-x-2 opacity-0
                 transition-all duration-300 ease-in-out
                 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl border border-blue-200/50 p-8 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
              boxShadow:
                "0 25px 50px -12px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Glossy overlay effect */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
              }}
            />
            <Form {...form}>
              {isSubmitted ? (
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-green-600">
                    Thank you!
                  </h3>
                  <p className="text-gray-600">
                    Your message has been submitted successfully. We&apos;ll get
                    back to you soon.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Your First Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Your Last Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone/Mobile</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Mobile Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Which of these describes you best?
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new-idea">
                                The idea of going international is new to me and
                                I haven&apos;t given it much thought
                              </SelectItem>
                              <SelectItem value="actively-looking">
                                I&apos;m actively looking to expand
                                internationally
                              </SelectItem>
                              <SelectItem value="already-international">
                                We&apos;re already international but looking to
                                grow further
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us more</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-50"
                  >
                    {isLoading ? "Submitting..." : "Submit Form"}
                  </Button>
                </form>
              )}
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
