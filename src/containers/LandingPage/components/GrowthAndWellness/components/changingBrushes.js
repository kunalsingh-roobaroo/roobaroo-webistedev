"use client";
import { useState, useEffect } from "react";
import classes from "./changingBrushes.module.css";

export default function ChangingBrushes({ changingdata }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % changingdata.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [changingdata.length]);

  const item = changingdata[activeIndex];

  return (
    <div className={classes.changingWrapper}>
      <div
        key={activeIndex} // restart animation on index change
        className={classes.brushContainer}
        style={{
          "--brush-initial": `url(${item.initialImage.src})`,
          "--brush-rendered": item.rendereImage
            ? `url(${item.rendereImage.src})`
            : `url(${item.initialImage.src})`,
        }}
      >
        <span className={classes.brushText}>{item.text}</span>
      </div>
    </div>
  );
}
