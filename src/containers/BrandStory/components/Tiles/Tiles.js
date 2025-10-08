"use client";
import React from "react";
import classes from "./Tiles.module.css";
import {
  thumbnail,
  thumbnail2,
  thumbnail3,
} from "../../../../../public/assets/images";
import Image from "next/image";
import { staticAlt } from "@/lib/constants";
import { Download } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/utils/ga4";
const Tiles = () => {
  const data = [
    {
      title: "Our Guiding Principle",
      subtitle:
        "The Growth–Wellness Balance Matrix is a simple but powerful tool to diagnose where you are — or where your team, institution or workplace sits.",
      thumbnail: thumbnail,
      link: "https://drive.google.com/file/d/1gAGl-xI4nm7g7nM5fFLuHStKjo6O6gEA/view?usp=drive_link",
      label: "Matrix Article",
      analvalue: "brandstory_matrix",
    },
    {
      title: "Problem We Are Solving",
      subtitle:
        "The Growth–Wellness Balance Matrix is a simple but powerful tool to diagnose where you are — or where your team, institution or workplace sits.",
      thumbnail: thumbnail2,
      link: "https://drive.google.com/file/d/1mXr9Y2P323s2yCePFlZPHPMg8T0X0qJY/view?usp=drive_link",
      label: "PS Article",
      analvalue: "brandstory_ps",
    },
    {
      title: "What is Roobaroo.ai?",
      subtitle:
        "The Growth–Wellness Balance Matrix is a simple but powerful tool to diagnose where you are — or where your team, institution or workplace sits.",
      thumbnail: thumbnail3,
      link: "https://drive.google.com/file/d/1Il8CZBei-JceUYO33BKW-qhptZtFD2ME/view?usp=drive_link",
      label: "About Article",
      analvalue: "brandatory_about",
    },
  ];
  return (
    <div className={classes.container}>
      {data.map((value, index) => {
        return (
          <Link
            target="_blank"
            href={value.link}
            key={index}
            className={classes.tile}
            onClick={() =>
              trackEvent({
                category: "Brand Story",
                action: "On_click",
                label: value.label,
                value: value.analvalue,
              })
            }
          >
            <div className={classes.upper}>
              <Image src={value.thumbnail} fill alt={staticAlt} />
              <div className={classes.gradient}></div>
            </div>
            <div className={classes.bottom}>
              <div className={classes.headWrapper}>
                <p className={classes.headttx}>{value.title}</p>
                <Download
                  className={classes.downloadIcon}
                  size={18}
                  color="white"
                />
              </div>
              <p className={classes.subttx}>{value.subtitle}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Tiles;
