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
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
  email: z.string().email({
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <section
      className="bg-gradient-to-br from-white via-blue-50/20 to-white py-20 md:py-28 relative overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Enhanced Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assests/contact-form/white-map-background.jpg')",
          backgroundBlendMode: "overlay",
          opacity: 0.85,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-48 h-48 border-2 border-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 border-2 border-primary rounded-full animate-pulse [animation-delay:0.5s]"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-primary rounded-full animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -80, rotateY: -20, z: -50 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0, z: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Speak to an{" "}
              <motion.span
                className="text-primary relative"
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 25px rgba(59, 130, 246, 0.8)',
                  transition: { duration: 0.2 }
                }}
              >
                international
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.span>
            </motion.h2>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.span
                className="text-primary relative"
                whileHover={{
                  scale: 1.05,
                  textShadow: '0 0 25px rgba(59, 130, 246, 0.8)',
                  transition: { duration: 0.2 }
                }}
              >
                business advisor
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed p-6 bg-white/30 backdrop-blur-sm rounded-2xl border border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                transition: { duration: 0.3 }
              }}
            >
              Get in touch to find out how we can help you achieve your
              international expansion goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
            >
              <Button
                className="group inline-flex w-full sm:w-[280px] items-center justify-center gap-3
               bg-primary text-black text-xl font-bold py-6 px-8
               transition-all duration-500 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-primary/40 rounded-3xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                <Link href="/contact" className="inline-flex items-center text-nowrap relative z-10">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    GET STARTED NOW!
                  </motion.span>
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5, rotate: 45 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: 80, rotateY: 20, z: -50 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0, z: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{
              rotateY: -5,
              rotateX: 2,
              z: 50,
              transition: { duration: 0.4 }
            }}
          >
            {/* Form card shadow */}
            <motion.div
              className="absolute inset-0 bg-primary/30 rounded-3xl blur-3xl"
              style={{
                transform: 'translateZ(-30px) translateY(30px) translateX(20px)',
              }}
              whileHover={{
                scale: 1.05,
                opacity: 0.4,
                transition: { duration: 0.4 }
              }}
            />

            {/* Enhanced form container */}
            <motion.div
              className="bg-white rounded-3xl shadow-2xl border border-blue-200/50 p-10 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)",
                boxShadow:
                  "0 40px 80px -12px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
              whileHover={{
                boxShadow: '0 50px 100px rgba(59, 130, 246, 0.25)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                transition: { duration: 0.4 }
              }}
            >
              {/* Enhanced glossy overlay effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                }}
                whileHover={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                  transition: { duration: 0.3 }
                }}
              />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">First Name</FormLabel>
                          <FormControl>
                            <motion.div
                              whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' }}
                              transition={{ duration: 0.2 }}
                            >
                              <Input
                                placeholder="Enter Your First Name"
                                className="border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl py-4 px-6 text-lg transition-all duration-300"
                                {...field}
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: -10 }}
                    animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-semibold">Last Name</FormLabel>
                          <FormControl>
                            <motion.div
                              whileFocus={{ scale: 1.02, boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)' }}
                              transition={{ duration: 0.2 }}
                            >
                              <Input
                                placeholder="Enter Your Last Name"
                                className="border-2 border-gray-200 focus:border-primary focus:ring-0 rounded-xl py-4 px-6 text-lg transition-all duration-300"
                                {...field}
                              />
                            </motion.div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
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
                      <FormLabel>Which of these describes you best?</FormLabel>
                      <FormControl>
                        <Select {...field}>
                          <option value="">Select an option...</option>
                          <option value="new-idea">
                            The idea of going international is new to me and I
                            haven&apos;t given it much thought
                          </option>
                          <option value="actively-looking">
                            I&apos;m actively looking to expand internationally
                          </option>
                          <option value="already-international">
                            We&apos;re already international but looking to grow
                            further
                          </option>
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

                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: 15 }}
                  animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -2,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
                    style={{
                      transform: 'translateZ(-10px) translateY(10px) translateX(5px)',
                    }}
                    whileHover={{
                      scale: 1.1,
                      opacity: 0.3,
                      transition: { duration: 0.3 }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/40"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Submit Form
                    </motion.span>
                  </Button>
                </motion.div>
              </form>
            </Form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
