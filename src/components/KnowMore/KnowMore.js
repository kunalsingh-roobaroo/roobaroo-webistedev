"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import classes from "./KnowMore.module.css";

const KnowMore = ({ story }) => {
  const handleClick = () => {
    window.open(
      `${
        story
          ? "https://drive.google.com/file/d/1gK6r7gB3PV9UlR6JOoApuCxDBh_AZUj6/view"
          : "https://drive.google.com/file/d/1gAGl-xI4nm7g7nM5fFLuHStKjo6O6gEA/view?usp=drive_link"
      }`
    ); // opens in a new tab
  };
  return (
    <div
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className={classes.bluebox}
    >
      <div className={classes.top}>
        <ArrowUpRight color="white" size={28} rotate={-45} strokeWidth={3} />
      </div>
      <h4 className={classes.boxttx}>
        Know <br />
        More
      </h4>
    </div>
  );
};

export default KnowMore;
