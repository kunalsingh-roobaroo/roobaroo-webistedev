import React from "react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import { rocket } from "../../../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
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
            sizes="(max-width: 768px) 47.526px, (max-width: 1200px) 144.024px, 144.024px"
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
