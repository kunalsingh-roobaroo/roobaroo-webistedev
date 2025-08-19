import React from "react";
import classes from "./LogoHero.module.css";
import Image from "next/image";

import { staticAlt } from "@/lib/constants";

import { typohero } from "../../../../public/assets/BrandKit";
import BackBtn from "@/containers/LogoPage/components/Back/Back";
const TypoHero = () => {
  return (
    <>
    <section className={classes.container}>
      <BackBtn />
      <div className={classes.txtdiv}>
        <h1 className={classes.h1}>Typography</h1>
        <h2 className={classes.h2}>
         Go through our Brand fonts with styles and download links.
        </h2>
      </div>
      <div className={classes.roobaroomain}>
        <div className={classes.ico}>
          <Image src={typohero} fill alt={staticAlt} sizes={staticAlt} />
        </div>
      </div>
    </section>
    <div className={classes.background}></div>
    </>
  );
};

export default TypoHero;
