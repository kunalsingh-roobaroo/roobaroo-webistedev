import BlueBox from "@/components/Boxes/BlueBox";
import PinkBox from "@/components/Boxes/PinkBox";
import KnowMore from "@/components/KnowMore/KnowMore";
import React from "react";
import { newcircle } from "../../../../../public/assets/images";
import classes from "./LostSectio.module.css";
import Image from "next/image";
import { staticAlt } from "@/lib/constants";

export const LostSection = () => {
  return (
    <section className={classes.lostSection}>
      <div className={classes.lostContainer}>
        <div className={classes.lostxttxdiv}>
          <h4 className={classes.subttx}>Silent Pains to Lost Dreams</h4>

          <h2 className="subheading">
            This is the<span className={classes.span}> India</span> <br />
            we refuse to ignore.
          </h2>
        </div>
        <div className={classes.knomore}>
          <KnowMore story={true} />
        </div>
      </div>
    </section>
  );
};
