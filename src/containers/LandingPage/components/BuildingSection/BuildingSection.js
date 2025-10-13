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
  member8,
  member9,
  member10,
  member11,
  member12,
  member13,
  member14,
  member15,
  member16,
  member17,
  member18,
  member19,
  member20,
  member21,
  member22,
  member23,
  member25,
  member26,
  member27,
  member28,
  member29,
  member24,
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
import { logo } from "../../../../../public/assets/images";
import { useMediaQuery } from "react-responsive";
const BuildingSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 450 });
  // const members = [
  //   member1,
  //   member2,
  //   member3,
  //   member4,
  //   member5,
  //   member6,
  //   member7,
  //   member8,
  //   member9,
  //   member10,
  //   member11,
  //   member12,
  //   member13,
  //   member14,
  //   member15,
  //   member16,
  //   member17,
  //   member18,
  //   member19,
  //   member20,
  //   member21,
  // ];
  // const [columns, setColumns] = React.useState([]);
  // React.useEffect(() => {
  //   const newCols = Array.from({ length: 6 }, () => {
  //     const shuffled = [...members];
  //     for (let i = shuffled.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //     }
  //     return shuffled;
  //   });
  //   setColumns(newCols);
  // }, []);.

  const column1 = [member1, member2, member5, member3, member25];
  const column2 = [member22, member4, member7, member6, member26];
  const column3 = [member9, member10, member13, member19, member27];
  const column4 = [member11, member24, member17, member12, member28];
  const column5 = [member14, member20, member8, member23, member29];
  const mobcolumn1 = [member1, member2, member5, member3, member14, member25];
  const mobcolumn2 = [member22, member4, member7, member6, member20, member26];
  const mobcolumn3 = [member9, member10, member13, member19, member8, member27];
  const mobcolumn4 = [
    member11,
    member24,
    member17,
    member12,
    member23,
    member28,
    member29,
  ];

  const columns = isMobile
    ? [mobcolumn1, mobcolumn2, mobcolumn3, mobcolumn4]
    : [column1, column2, column3, column4, column5];

  const titles = [
    "Startup Founders & Career Coach",
    "Clinical Psychologists & Parenting Coach",
    "AI Experts & Product Leaders",
    "Educators & Life Skills Coach",
    "Digital Wellbeing & Mindfulness Experts",
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
    <section className={classes.container}>
      <div className={classes.txtdiv}>
        <div className={classes.subtop}>
          <h2 className={classes.headtxt}>Now building </h2>
          <div className={classes.logo}>
            <Image
              src={logo}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </div>

        <h3 className={classes.subheading}>
          to help you grow without burning out
        </h3>
      </div>
      <div className={classes.central}>
        <p className={classes.maintxt}>
          with a <span className={classes.span}> dream team </span> of
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

        <div className={classes.titles}>
          {titles.map((title, index) => {
            const isLast = index === titles.length - 1;
            const isThird = index === 2;

            // condition: no border on last (always), no border on 3rd (only on mobile)
            const shouldHaveBorder = !isLast && !(isMobile && isThird);

            return (
              <div
                key={index}
                className={`${classes.title} ${
                  shouldHaveBorder ? classes.border : ""
                }`}
              >
                {title}
              </div>
            );
          })}
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
                {[...brands, ...brands].map((value, index) => (
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
                {[...onebrand, ...onebrand].map((value, index) => (
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
