import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import GuidelinesHero from "./HeroSection/GuidelinesHero";
import GuideLinesMainSection from "./MainSection/MainSection";
import classes from "./UsageGuidelines.module.css";
import BackToTopBtn from "@/components/BackToTop/BackToTopBtn";
const UsageGuidelines = () => {
  return (
    <>
      <Navbar />
      <GuidelinesHero />
      <div className={classes.container}>
        <div className={classes.backtotop}>
          <BackToTopBtn />
        </div>
        <GuideLinesMainSection />
      </div>

      <Footer />
    </>
  );
};

export default UsageGuidelines;
