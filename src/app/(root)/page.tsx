import { Metadata } from "next";
import Home from "./home/page.tsx";

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
  return <Home />;
}
