import React from "react";
import classes from "./GuidingFunda.module.css";
import Image from "next/image";
import {
  blackbrush,
  flick,
  rightbrush,
} from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import GrowthWellnessMatrix from "./Matrix/Matrix";
import KnowMore from "@/components/KnowMore/KnowMore";
import MarqueeSection from "../MarqueeSection/marquee";
import { LostSection } from "../LostSection/LostSection";
import { roobaroomatrix } from "../../../../../public/assets/images";
const GuidingFunda = () => {
  return (
    <section id="framework" className={classes.container}>
      <div className={classes.sub}>
        <div className={classes.matrixlogo}>
          <Image
            src={roobaroomatrix}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
            className={classes.roobaroomatrix}
          />
        </div>
        <div className={classes.txtdiv}>
          <h2 className="subheading">Our Guiding</h2>
          <div className={classes.subtop}>
            <div className={`${classes.stroke} ${classes.leftstroke}`}>
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
      </div>
      <div className={classes.centralmain}>
        <div className={classes.matrix}>
          <GrowthWellnessMatrix />
        </div>

        <div className={classes.marquee}>
          <MarqueeSection />
        </div>
        <div className={classes.central}></div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.subbottom}>
          <div className={classes.subbox}>
            <p className={classes.thriving}>Thriving</p>
            <div className={classes.flick}>
              <Image src={flick} fill alt={staticAlt} />
            </div>
          </div>
          <p className={classes.subtxt}>is where you wanna be</p>
        </div>
        <KnowMore />
      </div>
      <div className={classes.mobmarquee}>
        <MarqueeSection />
        <MarqueeSection reverse={true} />
      </div>
      <LostSection />
    </section>
  );
};

export default GuidingFunda;
