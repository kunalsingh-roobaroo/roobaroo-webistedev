import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import GuidelinesHero from "./HeroSection/GuidelinesHero";
import GuideLinesMainSection from "./MainSection/MainSection";

const UsageGuidelines = () => {
  return (
    <>
      <Navbar />
      <GuidelinesHero />
      <GuideLinesMainSection />
      <Footer />
    </>
  );
};

export default UsageGuidelines;
