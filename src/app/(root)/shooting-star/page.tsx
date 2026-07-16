import ContactForm from "@/components/contact-form/ContactForm";
import HeroSection from "@/components/shooting-star/HeroSection";
import Partner from "@/components/shooting-star/Partner";
export const metadata = {
  title: "Shooting Star - Globex Charity Initiative",
  description: "Join Globex's Shooting Star charity initiative. Learn about our partnership and how we're making a difference in the community.",
  keywords: "shooting star, charity, Globex, initiative, partnership, community",
  openGraph: {
    title: "Shooting Star - Globex Charity Initiative",
    description: "Join Globex's Shooting Star charity initiative and learn about our partnership making a difference.",
    url: "/shooting-star",
    siteName: "Globex",
    images: [
      {
        url: "/assests/charity/hero.png",
        width: 1200,
        height: 630,
        alt: "Shooting Star Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shooting Star - Globex Charity Initiative",
    description: "Join Globex's Shooting Star charity initiative and learn about our partnership making a difference.",
    images: ["/assests/charity/hero.png"],
  },
};


export default function ShootingStartPage() {
  return (
    <main>
      <HeroSection />
      <Partner />
      <ContactForm />
    </main>
  );
}
