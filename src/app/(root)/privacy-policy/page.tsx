import ContactForm from "@/components/contact-form/ContactForm";
import HeroSection from "@/components/privacy-policy/HomeSection";
import Policies from "@/components/privacy-policy/Policies";
export const metadata = {
  title: "Privacy Policy - Globex",
  description: "Read Globex's privacy policy to understand how we collect, use, and protect your personal information.",
  keywords: "privacy policy, Globex, personal information, data protection",
  openGraph: {
    title: "Privacy Policy - Globex",
    description: "Read Globex's privacy policy to understand how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    siteName: "Globex",
    images: [
      {
        url: "/assests/privacy-policy/heroImage.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Globex",
    description: "Read Globex's privacy policy to understand how we collect, use, and protect your personal information.",
    images: ["/assests/privacy-policy/heroImage.jpg"],
  },
};


export default function PrivayPolicyPage() {
  return (
    <>
      <HeroSection />
      <Policies />
      <ContactForm />
    </>
  );
}
