import React from "react";
import classes from "./LogoHero.module.css";
import BackBtn from "../Back/Back";
import Image from "next/image";
import { robaroomain, robaroosub } from "../../../../../public/assets/images";
import { staticAlt } from "@/lib/constants";
import { logohero, updatedlogo } from "../../../../../public/assets/BrandKit";
const LogoHero = () => {
  return (
    <>
    <section className={classes.container}>
      <BackBtn />
      <div className={classes.txtdiv}>
        <h1 className={classes.h1}>Logo</h1>
        <h2 className={classes.h2}>
          Download our logos in PNG, SVG, and EPS formats, and notes on how to
          understand them correctly.
        </h2>
      </div>
      <div className={classes.roobaroosub}>
        <div className={classes.ico}>
          <Image src={updatedlogo} fill alt={staticAlt} sizes={staticAlt} />
        </div>
      </div>
      <div className={classes.roobaroomain}>
        <div className={classes.ico}>
          <Image src={logohero} fill alt={staticAlt} sizes={staticAlt} />
        </div>
      </div>
    
    </section>
      <div className={classes.background}>

      </div>
    </>
  );
};

export default LogoHero;
