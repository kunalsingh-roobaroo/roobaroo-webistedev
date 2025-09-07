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
import {
  amazon,
  azim,
  bbc,
  deloitte,
  edbrand,
  justdial,
  nus,
  pratham,
  pwc,
  qualcomm,
  sebi,
  sharechat,
  tedx,
} from "../../../../../public/assets/two-one";
import {
  birla,
  calc,
  du,
  ey,
  iima,
  iitblue,
  kiit,
  kv,
  kvd,
  metadomeblue,
  nift,
  police,
  pragya,
  pw,
  stanford,
  tiss,
  ugc,
  unacademy,
  vedanta,
  wipro,
} from "../../../../../public/assets/one-one";
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
  const brands = [
    amazon,
    azim,
    bbc,
    deloitte,
    edbrand,
    justdial,
    nus,
    pratham,
    pwc,
    qualcomm,
    sebi,
    sharechat,
    tedx,
  ];
  const onebrand = [
    birla,
    calc,
    du,
    ey,
    iima,
    iitblue,
    kiit,
    kv,
    kvd,
    metadomeblue,
    nift,
    police,
    pragya,
    pw,
    stanford,
    tiss,
    ugc,
    unacademy,
    vedanta,
    wipro,
  ];
  return (
    <section id="team" className={classes.container}>
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
          <div className={classes.subbrand}>
            <Marquee
              gradient={false}
              speed={30}
              className={classes.marquee}
              pauseOnHover={false}
              direction="right"
            >
              <div className={classes.pillContainer}>
                {[...brands,...brands].map((value, index) => (
                  <div key={index} className={classes.biglogos}>
                    <Image
                      src={value}
                      fill
                      alt={staticAlt}
                      sizes={responsiveImageSizes}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
            <Marquee
              gradient={false}
              speed={30}
              className={classes.marquee}
              pauseOnHover={false}
              direction="left"
            >
              <div className={classes.pillContainer}>
                {[...onebrand,...onebrand].map((value, index) => (
                  <div key={index} className={classes.smalllogos}>
                    <Image
                      src={value}
                      fill
                      alt={staticAlt}
                      sizes={responsiveImageSizes}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

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
