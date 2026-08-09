import { Hero } from "@/components/shooting-star/hero/hero";
import { HowGlobexHelps } from "@/components/shooting-star/how-globex-helps/how-globex-helps";
import { InTheDrive } from "@/components/shooting-star/in-the-drive/in-the-drive";
import { Partners } from "@/components/shooting-star/partners/partners";
import { ShootingStarBadge } from "@/components/shooting-star/shooting-star-badge/shooting-star-badge";
import { WhatShootingStarDoes } from "@/components/shooting-star/what-shooting-star-does/what-shooting-star-does";
export const metadata = {
  title: "Shooting Star - Globex Charity Initiative",
  description:
    "Join Globex's Shooting Star charity initiative. Learn about our partnership and how we're making a difference in the community.",
  keywords:
    "shooting star, charity, Globex, initiative, partnership, community",
  openGraph: {
    title: "Shooting Star - Globex Charity Initiative",
    description:
      "Join Globex's Shooting Star charity initiative and learn about our partnership making a difference.",
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
    description:
      "Join Globex's Shooting Star charity initiative and learn about our partnership making a difference.",
    images: ["/assests/charity/hero.png"],
  },
};

export default function ShootingStartPage() {
  return (
    <main>
      <Hero />
      <Partners />
      <WhatShootingStarDoes />
      <HowGlobexHelps />
      <InTheDrive />
      <ShootingStarBadge />
    </main>
  );
}
