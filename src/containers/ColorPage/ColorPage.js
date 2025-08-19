import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import ColorHero from "./ColorPageHero/ColorPageHero";
import Footer from "@/components/Footer/Footer";
import ColorMainSection from "./ColorMainSection/ColorMainSection";

const ColorPage = () => {
  return (
    <>
      <Navbar />
      <ColorHero />
      <ColorMainSection />
      <Footer />
    </>
  );
};

export default ColorPage;
