import React from "react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import { rocket } from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
const BrandStoryHeroSection = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.headttx}>...where It All</h1>
      <h2 className={classes.subtxt}>
        Discover who we are, what drives us & the problem we are solving
      </h2>
      <div className={classes.rocketframe}>
        <div className={classes.rocket}>
          <Image
            src={rocket}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.began}>
        <p className={classes.begantxt}>Began</p>
      </div>
    </div>
  );
};

export default BrandStoryHeroSection;
