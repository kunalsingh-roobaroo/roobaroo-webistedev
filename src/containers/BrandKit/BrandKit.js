import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import classes from "./BrandKit.module.css";
import BrandKitHeroSection from "./components/HeroSection/HeroSection";
import BrandKitTiles from "./components/Tiles/BrandKitTiles";
import PurpleBox from "@/components/Boxes/PurpleBox";
const BrandKit = () => {
  return (
    <>
      <Navbar />
      <div className={classes.parent}>
        <BrandKitHeroSection />
        <BrandKitTiles />
        <div className={classes.background}></div>
        <div className={classes.purplemain}>
          {/* <PurpleBox/> */}
        </div>
        <div className={classes.secpurplemain}>
          {/* <PurpleBox/> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandKit;
