import React from "react";
import classes from "./Curriculum.module.css";
import BookCall from "@/components/BookCall/BookCall";
import {
  develop,
  dps,
  du,
  expert,
  goal,
  iim,
  iitpur,
  ipu,
  konnect,
  masterb,
  partner,
  phyb,
  support,
} from "../../../../../public/assets/B2B";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { dubuddy } from "../../../../../public/assets/workwith";
import Marquee from "react-fast-marquee";
import TileCarousel from "./Carousel/TileCarousel/TileCarousel";
import ImageCarousel from "./Carousel/ImageCarousel/ImageCarousel";
const CurriculumSection = () => {
  const tiles = [
    {
      image: goal,
      title: "Outcome ",
      subbot: "Oriented",
      subtitle: "Real-world simulations, projects, and ready-to-use tools",
      background: "#AADFF7",
    },
    {
      image: expert,
      title: "Top 1% ",
      subbot: "Experts",
      subtitle:
        "Leaders from academia & industry for credible, rigorous delivery",
      background: "#FFC5C5",
    },
    {
      image: partner,
      title: "Your NEP ",
      subbot: "Partner",
      subtitle: "Helping you implement the latest curriculum framework",

      background: "#B9A8CE",
    },
    {
      image: develop,
      title: "All-Round",
      subbot: "Development",
      subtitle: "Every program integrates career growth with wellness",
      background: "#AADFF7",
    },
    {
      image: support,
      title: "Comprehensive ",
      subbot: "Support",
      subtitle: "Solutions catering to your unique environment",
      background: "#FFC5C5",
    },
  ];

  const brands = [iitpur, phyb, konnect, masterb, dps, du, ipu, iim];
  const chips = [
    "Online Workshops",
    "Consulting Projects",
    "On-Campus Seminars",
    "Faculty Training Programs",
  ];
  return (
    <section id="b2b" className={classes.container}>
      <div className={classes.top}>
        <h2 className={classes.headtxt}>
          What&apos;s missing
          <br />
          <span className={classes.span}>in your curriculum today?</span>
        </h2>
        <div className={classes.subtop}>
          <h4 className={classes.subtxt}>
            With Roobaroo.ai, deliver programs that empower your students to
            succeed with stability
          </h4>
          <BookCall />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.tiles}>
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={`${classes.tile} ${
                index % 2 === 0 ? classes.evenTile : classes.oddTile
              }`}
              style={{ background: tile.background }}
            >
              <div
                className={`${classes.tiletop} ${
                  index % 2 === 0 ? classes.eventop : classes.oddtop
                }`}
              >
                <div className={classes.imageframe}>
                  <Image
                    src={tile.image}
                    fill
                    alt={staticAlt}
                    sizes={responsiveImageSizes}
                  />
                </div>
                <p className={classes.boxtxt}>
                  {tile.title} <br /> <span>{tile.subbot}</span>
                </p>
              </div>
              <div
                className={`${classes.tilebottom} ${
                  index % 2 === 0 ? classes.evenbottom : classes.oddbottom
                }`}
              >
                {" "}
                <p className={classes.text}>{tile.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.subbottom}>
          <div className={classes.box}>
            <div className={classes.marqueewrapper}>
              <Marquee
                gradient={false}
                speed={30}
                // className={classes.marquee}
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
            </div>
            <div className={classes.carousel}>
              <TileCarousel />
              <ImageCarousel />
            </div>
            <div className={classes.mobcarousel}>
              {" "}
              <TileCarousel />
            </div>
          </div>
          <div className={classes.boxes}>
            <div className={classes.mobcarousel}>
              <ImageCarousel />
            </div>
            <div className={classes.purplebox}>
              {chips.map((value, index) => {
                return (
                  <div key={index} className={classes.chip}>
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
