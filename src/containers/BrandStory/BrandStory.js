import React from "react";
import classes from "./BrandStory.module.css";
import BrandStoryHeroSection from "./components/HeroSection/HeroSection";
import Ribbon from "./components/Ribbon/Ribbon";
import Tiles from "./components/Tiles/Tiles";
import Image from "next/image";
import {
  blue,
  mobline,
  mobstrip,
  pink,
  strip,
} from "../../../public/assets/images";
import { staticAlt } from "@/lib/constants";
import Navbar from "@/components/Navbar/Navbar";
import PinkBox from "@/components/Boxes/PinkBox";
import BlueBox from "@/components/Boxes/BlueBox";
import Footer from "@/components/Footer/Footer";
import { LostSection } from "../LandingPage/components/LostSection/LostSection";
import GrowSection from "../LandingPage/components/GrowSection/GrowSection.";
import MarqueeSection from "../LandingPage/components/MarqueeSection/marquee";
import KnowMore from "@/components/KnowMore/KnowMore";

const BrandStory = () => {
  return (
    <>
      <Navbar />
      <div className={classes.container}>
        <BrandStoryHeroSection />
        <div className={classes.circle}></div>
        {/* <Ribbon /> */}
        <div className={classes.ribbonframe}>
          <div className={classes.ribbon}>
            <Image src={strip} fill alt={staticAlt} />
          </div>
          <div className={classes.mobribbon}>
            <Image src={mobstrip} fill alt={staticAlt} />
          </div>
        </div>
        <div className={classes.boxes}>
          <div className={classes.marquee}>
            <MarqueeSection />
          </div>
          <div className={classes.mobmarquee}>
            <MarqueeSection />
            <MarqueeSection reverse={true} />
          </div>
          <LostSection />
        </div>
        <div className={classes.circlenew}></div>
        <div className={classes.knowmore}>
          <KnowMore story={true} />
        </div>
        <div className={classes.circle}></div>
        <div className={classes.pinkbox}>
          <PinkBox />
        </div>
        <div className={classes.blueBox}>
          <BlueBox />
        </div>

        <div className={classes.grow}>
          <div className={classes.mobilestroke}></div>
          <GrowSection />
        </div>

        <div className={classes.tiles}>
          <h2 className={classes.read}>
            Read more <span className={classes.here}>here</span>
          </h2>
          <Tiles />
        </div>

        <div className={classes.imagecontianer}>
      
          <PinkBox />
        </div>
        <div className={classes.blueimagecontianer}>
      
          <BlueBox />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandStory;
