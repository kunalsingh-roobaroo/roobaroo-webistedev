import React from "react";
import classes from "./GrowthAndWellness.module.css";
import Image from "next/image";
import {
  arrowstroke,
  bluestroke,
  curvestroke,
  fluencyloop,
} from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import Marquee from "react-fast-marquee";
import {
  initialBlue,
  initialCoral,
  initialPurple,
  renderedBlue,
  renderedCoral,
  renderedPurple,
} from "../../../../../public/assets/icons/brushes";
import ChangingBrushes from "./components/changingBrushes";
const GrowthAndWellness = () => {
  const pillData = [
    { text: "Retreats", borderClass: "red" },
    { text: "1:1 Coaching", borderClass: "blue" },
    { text: "Actionable Tools", borderClass: "black" },
    { text: "Masterclasses", borderClass: "purple" },
    { text: "Bootcamps", borderClass: "red" },
    { text: "Curated Courses", borderClass: "blue" },
    { text: "B2B Consulting", borderClass: "purple" },
  ];

  // Create seamless loop by duplicating the data
  const seamlessPillData = [...pillData, ...pillData];

  const changingdata = [
    {
      text: "Career Confusion",
      initialImage: initialBlue,
      rendereImage: renderedBlue,
    },
    {
      text: " trading wellness for success",
      initialImage: initialCoral,
      rendereImage: "",
    },
    {
      text: "lack of emotional resilience",
      initialImage: initialPurple,
      rendereImage: "",
    },
    {
      text: " ignored personal branding",
      initialImage: initialCoral,
      rendereImage: renderedCoral,
    },
    {
      text: "giving control to screens",
      initialImage: initialPurple,
      rendereImage: renderedPurple,
    },
    {
      text: "losing to inner critique",
      initialImage: initialBlue,
      rendereImage: renderedBlue,
    },
    {
      text: "struggle leveraging AI",
      initialImage: initialCoral,
      rendereImage: renderedCoral,
    },
    {
      text: "lack of emotional resilience",
      initialImage: initialPurple,
      rendereImage: renderedPurple,
    },
  ];
  return (
    <section className={classes.section}>
      <div className={classes.top}>
        <div className={classes.subtop}>
          <h2 className={classes.heading}>
            {" "}
            <span className={classes.groeth}>Growth </span>+{" "}
            <span className={classes.welness}>Wellness </span>={" "}
          </h2>
          <h3 className={classes.subheading}>The Roobaroo Way</h3>
        </div>
        <div className={classes.parasection}>
          <h4 className={classes.para}>
            We are building thoughtful programs that integrate career clarity,
            job readiness, startup building, & AI fluency for the 21st century
            with{" "}
            <span className={classes.emotional}>emotional resilience,</span>{" "}
            <span className={classes.health}> digital health, </span>& a
            <span className={classes.self}> self-coach mindset</span> — so
            students, professionals, creators, & founders can pursue success
            with stability.
          </h4>
          <div className={classes.arrowstroke}>
            <div className={classes.ico}>
              <Image
                src={arrowstroke}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
          </div>
          <div className={classes.bluestroke}>
            <div className={classes.ico}>
              <Image
                src={bluestroke}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
          </div>
          <div className={classes.curvestroke}>
            <div className={classes.ico}>
              <Image
                src={curvestroke}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
          </div>
          <div className={classes.fluencyloop}>
            <div className={classes.ico}>
              <Image
                src={fluencyloop}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.marqueewrapper}>
        <Marquee
          gradient={false}
          speed={30}
          className={classes.marquee}
          pauseOnHover={false}
        >
          <div className={classes.pillContainer}>
            {seamlessPillData.map(({ text, borderClass }, i) => (
              <span
                key={i}
                className={`${classes.pill} ${classes[borderClass]}`}
              >
                {text}
              </span>
            ))}
          </div>
        </Marquee>
        <div className={classes.leftgradient}></div>
        <div className={classes.rightgradient}></div>
      </div>
      <div className={classes.container}>
        <div className={classes.nomore}>so no more</div>
        <div className={classes.changif}>
          <ChangingBrushes changingdata={changingdata} />
        </div>
      </div>
    </section>
  );
};

export default GrowthAndWellness;
