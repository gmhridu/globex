import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/Navbar";
import Home from "./pages/home/page";

export const metadata: Metadata = {
  title: "We Are Globex | A Growth Agency Built for Manufacturing",
  description:
    "Build Your Distribution. Accelerate Your Revenue. We help businesses expand, scale, and succeed in international markets with a results-driven strategy.",
  openGraph: {
    title: "We Are Globex | A Growth Agency Built for Manufacturing",
    description:
      "Build Your Distribution. Accelerate Your Revenue. We help businesses expand, scale, and succeed in international markets with a results-driven strategy.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "We Are Globex - Manufacturing Growth Agency",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
