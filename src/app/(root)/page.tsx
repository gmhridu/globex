import { Metadata } from "next";
import Home from "./home/page.tsx";

export const metadata: Metadata = {
  title: "We Are Globex | Growth & Export Partner for Manufacturers",
  description:
    "Europe & Middle East Market Entry for U.S. & Canadian Manufacturers. We help manufacturers build distribution networks, enter new markets and accelerate international revenue across Europe and the Middle East.",
  openGraph: {
    title: "We Are Globex | Growth & Export Partner for Manufacturers",
    description:
      "Europe & Middle East Market Entry for U.S. & Canadian Manufacturers. We help manufacturers build distribution networks, enter new markets and accelerate international revenue across Europe and the Middle East.",
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
