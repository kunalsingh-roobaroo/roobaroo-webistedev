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

        <div className={classes.tiles}>
          <Tiles />
        </div>
        <div className={classes.imagecontianer}>
          {/* <div className={classes.image}>
            <Image src={pink} fill alt={staticAlt} />
          </div> */}
          <PinkBox />
        </div>
        <div className={classes.blueimagecontianer}>
          {/* <div className={classes.image}>
            <Image src={blue} fill alt={staticAlt} />
          </div> */}
          <BlueBox />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BrandStory;
