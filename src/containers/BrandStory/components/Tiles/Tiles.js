import React from "react";
import classes from "./Tiles.module.css";
import {
  thumbnail,
  thumbnail2,
  thumbnail3,
} from "../../../../../public/assets/images";
import Image from "next/image";
import { staticAlt } from "@/lib/constants";
const Tiles = () => {
  const data = [
    {
      title: "Our Guiding Principle",
      subtitle:
        "The Growth–Wellness Balance Matrix is a simple but powerful tool to diagnose where you are — or where your team, institution or workplace sits.",
      thumbnail: thumbnail,
    },
    {
      title: "Problem We Are Solving",
      subtitle:
        "The Growth–Wellness Balance Matrix is a simple but powerful tool to diagnose where you are — or where your team, institution or workplace sits.",
      thumbnail: thumbnail2,
    },
    {
      title: "What is Roobaroo.ai?",
      subtitle:
        "The Growth–Wellness Balance Matrix is a simple but powerful tool to diagnose where you are — or where your team, institution or workplace sits.",
      thumbnail: thumbnail3,
    },
  ];
  return (
    <div className={classes.container}>
      {data.map((value, index) => {
        return (
          <div key={index} className={classes.tile}>
            <div className={classes.upper}>
              <Image src={value.thumbnail} fill alt={staticAlt} />
            </div>
            <div className={classes.bottom}>
              <p className={classes.headttx}>{value.title}</p>
              <p className={classes.subttx}>{value.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tiles;