import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import MarqueeSection from "./components/MarqueeSection/marquee";
import GrowSection from "./components/GrowSection/GrowSection.";
import GuidingFunda from "./components/GuidingFunda/GuidingFunda";
import classes from "./LandingPage.module.css";
import Footer from "@/components/Footer/Footer";
import { LostSection } from "./components/LostSection/LostSection";
import KnowMore from "@/components/KnowMore/KnowMore";
import PinkBox from "@/components/Boxes/PinkBox";
import BlueBox from "@/components/Boxes/BlueBox";
import GrowthAndWellness from "./components/GrowthAndWellness/GrowthAndWellness";
import KnowYourBuddy from "./components/KnowYourBuddy/KnowYourBuddy";
import BuildingSection from "./components/BuildingSection/BuildingSection";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.hero}>
          <HeroSection />
          <div className={classes.bigcircle}></div>
        </div>
        <div className={classes.guding}>
          <GuidingFunda />
          <div className={classes.knowmore}>
            <KnowMore />
          </div>
          <div className={classes.circle}></div>
          <div className={classes.pinkbox}>
            <PinkBox />
          </div>
          <div className={classes.blueBox}>
            <BlueBox/>
          </div>
        </div>
        <div className={classes.mobilestroke}></div>
        <GrowSection />
        <div className={classes.mobilecircles}></div>
        <GrowthAndWellness/>
        <KnowYourBuddy/>
        <BuildingSection />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
