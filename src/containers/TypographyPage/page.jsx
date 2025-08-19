import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import TypoHero from "./HeroSection/TypoHero";
import TypoMainSection from "./MainSection/MainSection";

const TypographyPage = () => {
  return (
    <>
      <Navbar />
      <TypoHero />
      <TypoMainSection />
      <Footer />
    </>
  );
};

export default TypographyPage;
