"use client";
import React, { useMemo } from "react";
import classes from "./BuildingSection.module.css";
import {
  member1,
  member2,
  member3,
  member4,
  member5,
  member6,
  member7,
} from "../../../../../public/assets/team";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import {
  favcy,
  iitkgp_black,
  istart,
  master,
  metadome,
  techbillion,
} from "../../../../../public/assets/logos";
import BlueBox from "@/components/Boxes/BlueBox";
import PinkBox from "@/components/Boxes/PinkBox";
import PurpleBox from "@/components/Boxes/PurpleBox";
const BuildingSection = () => {
  const members = [
    member1,
    member2,
    member3,
    member4,
    member5,
    member6,
    member7,
  ];
  const [columns, setColumns] = React.useState([]);
  React.useEffect(() => {
    const newCols = Array.from({ length: 6 }, () => {
      const shuffled = [...members];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
    setColumns(newCols);
  }, []);
  const titles = [
    "Educators & Psychologists",
    "Tech & Product Experts",
    "Creators & Top 1% Professionals",
    "Exam Toppers & Career Coaches",
    "Startup Founders & Design Thinkers",
  ];
  const brands = [iitkgp_black, favcy, techbillion, metadome, istart, master];
  return (
    <section className={classes.container}>
      <div className={classes.txtdiv}>
        <h2 className={classes.headtxt}>Now building Roobaroo</h2>
        <h3 className={classes.subheading}>
          to help you grow without burning out
        </h3>
      </div>
      <div className={classes.central}>
        <p className={classes.maintxt}>
          with a <span className={classes.span}>dream team</span> of
        </p>
        <div className={classes.marqueesection}>
          {columns.map((col, i) => (
            <div
              key={i}
              className={`${classes.marqueeColumn} ${
                i % 2 === 0 ? classes.scrollUp : classes.scrollDown
              }`}
            >
              <div className={classes.marqueeInner}>
                {[...col, ...col].map((member, idx) => (
                  <div key={idx} className={classes.memberImage}>
                    <Image
                      src={member}
                      alt={staticAlt}
                      fill
                      sizes={responsiveImageSizes}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.marqueesectionMobile}>
          {columns.slice(0, 4).map((col, i) => (
            <div
              key={i}
              className={`${classes.marqueeColumn} ${
                i % 2 === 0 ? classes.scrollUp : classes.scrollDown
              }`}
            >
              <div className={classes.marqueeInner}>
                {[...col, ...col].map((member, idx) => (
                  <div key={idx} className={classes.memberImage}>
                    <Image
                      src={member}
                      alt={staticAlt}
                      fill
                      sizes={responsiveImageSizes}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={classes.titles}>
          {titles.map((title, index) => (
            <div
              key={index}
              className={`${classes.title} ${
                index !== titles.length - 1 ? classes.border : ""
              }`}
            >
              {title}
            </div>
          ))}
        </div>
        <div className={classes.brands}>
          {brands.map((value, index) => {
            return (
              <div key={index} className={classes.brand}>
                <Image
                  src={value}
                  alt={staticAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, (min-width: 769px) 33vw"
                  className={classes.filterBlack}
                />
              </div>
            );
          })}
          <div className={classes.from}>from</div>
        </div>
      </div>
      <div className={classes.bluebox}>
        <BlueBox />
      </div>
      <div className={classes.pinkbox}>
        <PinkBox />
      </div>
      <div className={classes.purplebox}>
        <PurpleBox />
      </div>
    </section>
  );
};

export default BuildingSection;
