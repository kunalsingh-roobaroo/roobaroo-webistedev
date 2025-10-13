import React from "react";
import classes from "./ColorPageHero.module.css";

import Image from "next/image";
import { staticAlt } from "@/lib/constants";
import { colorhero } from "../../../../public/assets/BrandKit";
import BackBtn from "@/containers/LogoPage/components/Back/Back";
import { kit } from "../../../../public/assets/images";
const ColorHero = () => {
  return (
    <>
    <div className={classes.background}></div>
      <section className={classes.container}>
        <BackBtn />
        <div className={classes.txtdiv}>
          <h1 className={classes.h1}>Color</h1>
          <h2 className={classes.h2}>
            Go through our Official palette with HEX, RGB, CMYK codes.
          </h2>
        </div>

        <div className={classes.roobaroomain}>
          <div className={classes.ico}>
            <Image src={colorhero} fill alt={staticAlt} sizes={staticAlt} />
          </div>
          <div className={classes.mobico}>
            <Image src={kit} fill alt={staticAlt} sizes={staticAlt} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorHero;
