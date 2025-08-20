"use client";

import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import {
  hand_doodle,
  infinity_doodle,
  torn_paper_doodle,
} from "../../../../../../public/assets/images";
import classes from "./GrowthWellnessSection.module.css";
import Image from "next/image";
import { useEffect } from "react";
import BlueBox from "@/components/Boxes/BlueBox";
import PurpleBox from "@/components/Boxes/PurpleBox";
import PinkBox from "@/components/Boxes/PinkBox";
import { underline } from "../../../../../../public/assets/icons";


export default function GrowthWellnessSection() {
  useEffect(() => {
    const handleScroll = () => {
      const fill = document.getElementById("verticalFill");
      const section = document.getElementById("growthWellnessSection");

      if (!fill || !section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max((windowHeight - rect.top+90) / (rect.height + windowHeight), 0),
        1
      );

      fill.style.height = `${scrollProgress * 100}%`;
      fill.style.maxWidth = `100%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="growthWellnessSection" className={classes.container}>
      <div className={classes.box}>
        <p className={classes.mainntxt}>
          We&apos;ve been sold growth & wellness in isolation — but life
          isn&apos;t split like that. It&apos;s messy, layered and integrated.
        </p>
        <div className={classes.leftdoodleimg}>
          <Image src={infinity_doodle} fill alt={staticAlt} />
        </div>
        <p className={classes.mainntxt}>
          We bridge this gap by integrating career growth and personal wellness
          into one unified journey.
        </p>
      </div>
      <div className={classes.line}>
        <div className={classes.verticalLineWrapper}>
          <div className={classes.verticalTrack}></div>
          <div className={classes.verticalFill} id="verticalFill"></div>
          <div
            className={classes.circle}
            style={{ top: "0%", background: "#57C2F3" }}
          ></div>
          <div
            className={classes.circle}
            style={{ top: "33.33%", background: "#FFA6A6" }}
          ></div>
          <div
            className={classes.circle}
            style={{ top: "66.66%", background: "#9D7FC1" }}
          ></div>
          {/* <div className={classes.circle} style={{ top: "100%" }}></div> */}
        </div>
        <div className={classes.underline}>
          <Image
            src={underline}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>

      <div className={classes.box}>
        <div className={classes.doodleimg}>
          <Image src={torn_paper_doodle} fill alt={staticAlt} />
        </div>
        <p className={classes.mainntxt}>
          Roobaroo is about bringing balance back to the centre - where ambition
          & inner stability grow together.
        </p>
        <div className={classes.doodleimg}>
          <Image src={hand_doodle} fill alt={staticAlt} />
        </div>
      </div>
      <div className={classes.bkuebox}>
        <BlueBox />
      </div>
      <div className={classes.purplebox}>
        <PurpleBox />
      </div>
      <div className={classes.redbox}>
        <PinkBox />
      </div>
    </section>
  );
}
