import { ContactForm } from "@/components/contact/contact-form/contact-form";
import { HaveQuestions } from "@/components/contact/have-questions/have-questions";
import { Hero } from "@/components/contact/hero/hero";

export const metadata = {
  title: "Contact Us - Get in Touch with Globex",
  description:
    "We're here to help. Contact Globex for inquiries, partnerships, or support. Reach out to our team today.",
  keywords: "contact, Globex, get in touch, inquiries, partnerships, support",
  openGraph: {
    title: "Contact Us - Get in Touch with Globex",
    description:
      "Contact Globex for inquiries, partnerships, or support. We're here to help.",
    url: "/contact",
    siteName: "Globex",
    images: [
      {
        url: "/assests/home/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with Globex",
    description:
      "Contact Globex for inquiries, partnerships, or support. We're here to help.",
    images: ["/assests/home/hero.jpg"],
  },
};

export default function CarrerPage() {
  return (
    <main>
      <Hero />
      <HaveQuestions />
      <ContactForm />
    </main>
  );
}
