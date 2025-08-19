import React from "react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import { brandhand } from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
const BrandKitHeroSection = () => {
  return (
    <section className={classes.section}>
      <div className={classes.parent}>
        <h1 className={classes.headtxt}>
          Welcome to the <br /> Roobaroo{" "}
          <span className={classes.brand}>Brand</span>{" "}
          <span className={classes.kit}>Kit</span>
        </h1>
        <h2 className={classes.subtxt}>
          Find our official logo formats, color codes and palette, and approved
          typography — complete with downloadable font links and usage
          guidelines for consistent and correct application.
        </h2>
        <div className={classes.frame}>
          <div className={classes.img}>
            <Image
              src={brandhand}
              fill
              sizes={responsiveImageSizes}
              alt={staticAlt}
            />
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default BrandKitHeroSection;
