import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="page-container" className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
