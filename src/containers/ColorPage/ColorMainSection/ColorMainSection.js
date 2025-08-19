import React from "react";
import classes from "./ColorMainSection.module.css";
import {
  black,
  blue,
  coral,
  purple,
  verticalpallete,
  volume,
  white,
} from "../../../../public/assets/BrandKit";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
const ColorMainSection = () => {
  const data = [
    {
      tile: coral,
      description:
        "A warm, emotionally resonant coral tone used to reflect compassion, safety, and wellness. It communicates care and will represent the “wellness” stream of Roobaroo’s offerings.",
    },
    {
      tile: purple,
      description:
        "A rich purple tone that acts as a visual bridge between blue and coral. It embodies emotional intelligence and thoughtful transitions, useful in moments of balance, metaphorically as well as literally as we get purple by mixing blues and reds (shades of coral).",
    },
    {
      tile: blue,
      description:
        "Represents clarity, momentum, and expansive thinking. This bright modern blue anchors the brand’s identity and will also signify the “growth” aspect across platforms.",
    },
    {
      tile: white,
      description:
        "A soft off-white used for clean, breathable UI backgrounds. Keeps the interface modern and spacious without the starkness of pure white.",
    },
    {
      tile: black,
      description:
        "Used for all core typography. High contrast ensures readability while providing a strong, grounded tone of credibility and structure.",
    },
  ];
  const colorCodes = [
    {
      title: "Primary",
      colors: [
        { code: "D2F1FF", type: "Lightest", txtcolor: "#090A0A" },
        { code: "AADFF7", type: "Lighter", txtcolor: "#090A0A" },
        { code: "57C2F3", type: "Light", txtcolor: "#090A0A" },
        { code: "27AAE7", type: "Base", txtcolor: "#fff" },
        { code: "0091D5", type: "Darkest", txtcolor: "#fff" },
      ],
    },
    {
      title: "Primary",
      colors: [
        { code: "FFE5E5", type: "Lightest", txtcolor: "#090A0A" },
        { code: "FFC5C5", type: "Lighter", txtcolor: "#090A0A" },
        { code: "FFA6A6", type: "Light", txtcolor: "#090A0A" },
        { code: "FB7D7D", type: "Base", txtcolor: "#fff" },
        { code: "FF5656", type: "Darkest", txtcolor: "#090A0A" },
      ],
    },
    {
      title: "Primary",
      colors: [
        { code: "DFC4FF", type: "Lightest", txtcolor: "#090A0A" },
        { code: "BC9CE2", type: "Lighter", txtcolor: "#090A0A" },
        { code: "9D7FC1", type: "Light", txtcolor: "#090A0A" },
        { code: "815FAA", type: "Base", txtcolor: "#fff" },
        { code: "684C8A", type: "Darkest", txtcolor: "#fff" },
      ],
    },
    {
      title: "Whites",
      colors: [
        { code: "FFFFFF", type: "Base", txtcolor: "#090A0A" },
        { code: "F2F4F5", type: "Dark", txtcolor: "#090A0A" },
        { code: "E3E5E5", type: "Darker", txtcolor: "#090A0A" },
        { code: "CDCFD0", type: "Darker", txtcolor: "#090A0A" },
        { code: "979C9E", type: "Darkest", txtcolor: "#090A0A" },
      ],
    },
    {
      title: "Ink",
      colors: [
        { code: "828689", type: "Lightest", txtcolor: "#fff" },
        { code: "6C7072", type: "Lighter", txtcolor: "#fff" },
        { code: "404446", type: "Lighter", txtcolor: "#fff" },
        { code: "303437", type: "Lighter", txtcolor: "#fff" },
        { code: "202325", type: "Light", txtcolor: "#fff" },
        { code: "0C0C0C", type: "Base", txtcolor: "#fff" },
      ],
    },
  ];
  const boxes = [
    {
      text: "BASE PURPLE OPACITY 33%",
      color: "rgba(129, 95, 170, 0.33)",
    },
    {
      text: "BASE BLUE OPACITY 33%",
      color: "rgba(39, 170, 231, 0.33)",
    },
    {
      text: "BASE CORAL OPACITY 33%",
      color: "rgba(251, 125, 125, 0.33)",
    },
    {
      text: "BASE BLACK OPACITY 33%",
      color: "rgba(12, 12, 12, 0.33)",
    },
  ];
  return (
    <section className={classes.mainsection}>
      <div className={classes.top}>
        <h2 className={classes.headtxt}>
          The chosen color palette balances
          <span className={classes.clarity}> clarity</span>,
          <span className={classes.warmth}> warmth</span>, and
          <span className={classes.emotionalSafety}> emotional safety </span>—
          reflecting Roobaroo&apos;s dual focus on growth and well-being.
        </h2>
      </div>
      <div className={classes.colors}>
        {data.map((value, index) => {
          return (
            <div key={index} className={classes.tile}>
              <div className={classes.colorimg}>
                <Image src={value.tile} fill alt={staticAlt} />
              </div>
              <h3 className={classes.ttx}>{value.description}</h3>
            </div>
          );
        })}
      </div>
      <div className={classes.volume}>
        <Image src={volume} fill alt={staticAlt} />
      </div>
      <div className={classes.middle}>
        <h2 className={classes.title}>
          Hexes of shades and tints of color palette (only where needed)
        </h2>
        <div className={classes.palletes}>
          {colorCodes.map((palette, index) => {
            const nonBaseCount = palette.colors.filter(
              (c) => c.type !== "Base"
            ).length;
            return (
              <>
                <div key={index} className={classes.pallete}>
                  <h4 className={classes.palletetxt}>{palette.title}</h4>
                  <div className={classes.colorsRow}>
                    {palette.colors.map((c, i) => {
                      const isBase = c.type === "Base";

                      return (
                        <div
                          key={i}
                          className={`${classes.colorBox} ${
                            isBase ? classes.base : classes.fixed
                          }`}
                          style={{
                            backgroundColor: `#${c.code}`,
                            color: c.txtcolor,
                          }}
                        >
                          <span className={classes.code}>{c.code}</span>
                          <span className={classes.type}>{c.type}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={classes.palleteimg}>
          <Image
            src={verticalpallete}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.boxes}>
        {boxes.map((box, i) => (
          <div
            key={i}
            className={classes.box}
            style={{ backgroundColor: box.color }}
          >
            <p className={classes.botxt}>{box.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorMainSection;
