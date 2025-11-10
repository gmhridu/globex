import ContactForm from "@/components/contact-form/ContactForm";
import HeroSection from "@/components/our-markets/HeroSection";
import ProductsCards from "@/components/our-markets/ProductsCards";
export const metadata = {
  title: "Our Markets - Manufacturing Industries Served by Globex",
  description: "Explore the manufacturing industries and markets served by Globex. Discover our expertise in various sectors and how we connect manufacturers with opportunities.",
  keywords: "manufacturing industries, markets, Globex, sectors, manufacturers, opportunities",
  openGraph: {
    title: "Our Markets - Manufacturing Industries Served by Globex",
    description: "Explore the manufacturing industries and markets served by Globex. Discover our expertise in various sectors.",
    url: "/our-markets",
    siteName: "Globex",
    images: [
      {
        url: "/assests/our-markets/agriculture.jpg", // Assuming a default image, adjust if needed
        width: 1200,
        height: 630,
        alt: "Our Markets Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Markets - Manufacturing Industries Served by Globex",
    description: "Explore the manufacturing industries and markets served by Globex. Discover our expertise in various sectors.",
    images: ["/assests/our-markets/agriculture.jpg"],
  },
};


export default function OurMarkets() {
  return (
    <main>
      <HeroSection />
      <ProductsCards />
      <ContactForm />
    </main>
  );
}
