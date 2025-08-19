import React from "react";
import classes from "./MonteSerrat.module.css";
import Image from "next/image";
import { monteserrat, simple } from "../../../../../public/assets/BrandKit";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
const MonteSerrat = () => {
  return (
    <div className={classes.sec}>
      <div className={classes.container}>
        <div className={classes.lhs}>
          <p className={classes.headtxt}>Primary typeface</p>
          <div className={classes.bottom}>
            <p className={classes.title}>Montserrat</p>
            <p className={classes.subtitle}>
              A clean, geometric sans-serif that embodies clarity, trust, and
              modernity. It&apos;s used across headings, body text, and UI
              elements to ensure visual consistency and a confident, polished
              tone throughout the product experience.
            </p>
          </div>
        </div>
        <div className={classes.rhs}>
          <Image
            src={monteserrat}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.lhs}>
          <p className={classes.headtxt}>accent typeface</p>
          <div className={classes.bottom}>
            <p className={classes.caketitle}>Simple Cakes</p>
            <p className={classes.subtitle}>
              It introduces a hand-drawn, expressive quality. Its imperfect,
              human touch brings intimacy to key moments, allowing the brand to
              connect emotionally.
            </p>
          </div>
        </div>
        <div className={classes.rhs}>
          <Image
            src={simple}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.lhs}>
          <p className={classes.headtxt}>logo typeface</p>
          <div className={classes.bottom}>
            <p className={classes.quicltitle}>Quicksand</p>
            <p className={classes.subtitle}>
              It is used exclusively for the{" "}
              <span className={classes.span}>Roobaroo logo</span>. Its rounded
              geometry and approachable character help establish a sense of
              warmth and flow, while the custom infinity mark integrated into
              the logotype reinforces our themes of continuity and balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonteSerrat;
