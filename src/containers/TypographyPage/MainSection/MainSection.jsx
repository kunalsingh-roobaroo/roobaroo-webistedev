import React from "react";
import classes from "./MainSection.module.css";
import Image from "next/image";
import {
  typobluestroke,
  typocoralstroke,
} from "../../../../public/assets/BrandKit";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import MonteSerrat from "./MonteSerrat/MonteSerrat";
const TypoMainSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.top}>
        <h2 className={classes.headttx}>
          The Roobaroo typography system is crafted to feel both grounded and
          human, reflecting the brand&apos;s dual identity rooted in the Hero
          and Creator archetypes.
        </h2>
        <div className={classes.bluestroke}>
          <div className={classes.ico}>
            <Image
              src={typobluestroke}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </div>{" "}
        <div className={classes.coralstroke}>
          <div className={classes.ico}>
            <Image
              src={typocoralstroke}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </div>
      </div>
      <MonteSerrat />
    </section>
  );
};

export default TypoMainSection;
