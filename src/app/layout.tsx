import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "We Are Globex | A Growth Agency Built for Manufacturing",
    template: "%s | We Are Globex",
  },
  description:
    "We help businesses expand, scale, and succeed in international markets with a results-driven strategy. Connecting manufacturers with distributors, private label partners, and contract manufacturing opportunities.",
  keywords: [
    "manufacturing",
    "distribution",
    "private label",
    "contract manufacturing",
    "international expansion",
    "business growth",
    "global partners",
    "industrial services",
    "automation solutions",
    "manufacturing growth",
  ],
  authors: [{ name: "We Are Globex", url: "https://weareglobex.com" }],
  creator: "We Are Globex",
  publisher: "We Are Globex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "We Are Globex | A Growth Agency Built for Manufacturing",
    description:
      "We help businesses expand, scale, and succeed in international markets with a results-driven strategy.",
    url: "/",
    siteName: "We Are Globex",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "We Are Globex - Growth Agency for Manufacturing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Are Globex | A Growth Agency Built for Manufacturing",
    description:
      "We help businesses expand, scale, and succeed in international markets with a results-driven strategy.",
    images: ["/images/twitter-image.jpg"],
    creator: "@weareglobex",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
  category: "business",
  classification: "Business Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} data-arp="">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f0be3b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Globex" />
        <meta name="application-name" content="Globex" />
        <meta name="msapplication-TileColor" content="#f0be3b" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "We Are Globex",
              url: "https://weareglobex.com",
              logo: "https://weareglobex.com/images/logo.png",
              description:
                "A Growth Agency Built for Manufacturing. We help businesses expand, scale, and succeed in international markets.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-XXX-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: ["https://www.linkedin.com/company/weareglobex/"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "",
                addressRegion: "",
                postalCode: "",
                addressCountry: "US",
              },
              foundingDate: "2020",
              industry: "Manufacturing Support Services",
              serviceArea: {
                "@type": "Place",
                name: "Global",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900`}
        cz-shortcut-listen="true"
      >
        <div id="page-container" className="min-h-screen flex flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
