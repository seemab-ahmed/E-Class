import React from "react";
import Footer from "../../component/Footer";
import { HeroSectionContent } from "../../component/heroSection/hero-section-content";
import Navbar from "../../component/Navbar";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <HeroSectionContent />
      <Footer />
    </div>
  );
}
