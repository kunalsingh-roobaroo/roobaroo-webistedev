import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import MarqueeSection from "./components/MarqueeSection/marquee";
import GrowSection from "./components/GrowSection/GrowSection.";
import GuidingFunda from "./components/GuidingFunda/GuidingFunda";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <GrowSection />
      <GuidingFunda/>
    </>
  );
};

export default LandingPage;
