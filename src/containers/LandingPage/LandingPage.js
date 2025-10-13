import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import GuidingFunda from "./components/GuidingFunda/GuidingFunda";
import classes from "./LandingPage.module.css";
import Footer from "@/components/Footer/Footer";
import GrowthAndWellness from "./components/GrowthAndWellness/GrowthAndWellness";
import KnowYourBuddy from "./components/KnowYourBuddy/KnowYourBuddy";
import BuildingSection from "./components/BuildingSection/BuildingSection";
import CurriculumSection from "./components/CurriculumSection/CurriculumSection";
import BootCamp from "./components/BootCamp/BootCamp";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.bigcircle}></div>
          <HeroSection />
        </div>
        <div className={classes.guding}>
          <GuidingFunda />
        </div>
        <CurriculumSection />
        <BootCamp />
        <div className={classes.bootcampcircle}></div>
        {/* <div className={classes.mobilestroke}></div>
        <GrowSection /> */}
        {/* <div className={classes.mobilecircles}></div> */}
        {/* <GrowthAndWellness /> */}
        <KnowYourBuddy />
        <BuildingSection />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
