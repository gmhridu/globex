"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const testimonials = [
    {
      quote:
        "We were struggling with visibility and attending trade shows but seeing zero return, frustrated by our lack of progress. That's when We Are Globex came on board with something different. Within just three months, we secured our first private-label customer from France. Their constant support helped us break through and achieve real results, giving us the confidence to expand our footprint further.",
      author: "Abdul Rehman - CEO",
      company: "IK Sports",
      logo: "https://weareglobex.com/wp-content/uploads/2025/04/IK-Sports.png",
    },
    {
      quote:
        "We didn't have enough time or resources, so expanding to Europe was very difficult for us. Then, We Are Globex called and told us about opportunities in Europe. They helped us find the right distributors for our Tahini, cocoa beans, and hibiscus. Thanks to them, we've been able to grow our presence and attract many new customers in these regions.",
      author: "Tuncay Sigar - President",
      company: "Kaan Trading",
      logo: "https://weareglobex.com/wp-content/uploads/2025/04/logo.png",
    },
    {
      quote:
        "Expanding into the UK and European markets has always been a key focus for Royal Series, but finding the right entry points and partners proved challenging. That's where Globex has stepped in. Their market insight and proactive support are already helping us navigate the complexities of international expansion. While we're still early in the partnership, their structured approach has given us real confidence as we work to establish the Royal Series brand into new areas across the region",
      author: "Robert Nelson - CMO",
      company: "Royal Series",
      logo: "https://weareglobex.com/wp-content/uploads/2025/04/RS-logo-2.png",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-md uppercase tracking-wider text-gray-500 mb-2">
            Our Clients
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">What People Say</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-none"
            >
              <div className="mb-6">
                <div className="text-4xl text-center w-full flex items-center justify-center text-primary">
                  <span className="border-2 w-10 h-10 mb-4 p-1 border-primary rounded-full">
                    &quot;
                  </span>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                  <Image
                    src={testimonial.logo}
                    width={110}
                    height={100}
                    alt={testimonial.company}
                    className=" h-16 rounded-full mt-2"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
