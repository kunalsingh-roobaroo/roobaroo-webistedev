import React from "react";
import classes from "./GuidingFunda.module.css";
import Image from "next/image";
import { blackbrush, rightbrush } from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import GrowthWellnessMatrix from "./Matrix/Matrix";
import KnowMore from "@/components/KnowMore/KnowMore";
import MarqueeSection from "../MarqueeSection/marquee";
import { LostSection } from "../LostSection/LostSection";
const GuidingFunda = () => {
  return (
    <section className={classes.container}>
      <div className={classes.txtdiv}>
        <h2 className="subheading">Our Guiding</h2>
        <div className={classes.subtop}>
          <div className={classes.stroke}>
            <Image
              src={blackbrush}
              fill
              sizes={responsiveImageSizes}
              alt={staticAlt}
            />
          </div>
          <h2 className={classes.cake}>Funda</h2>
          <div className={classes.stroke}>
            <Image
              src={rightbrush}
              fill
              sizes={responsiveImageSizes}
              alt={staticAlt}
            />
          </div>
        </div>
      </div>
      <div className={classes.central}>
        <div className={classes.matrix}>
          <GrowthWellnessMatrix />
        </div>
        <MarqueeSection />
      </div>
      <LostSection/>
    </section>
  );
};

export default GuidingFunda;
