"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Ribbon.module.css";

const Ribbon = () => {
  const pathRef = useRef(null);
  const textRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    const text = textRef.current;

    const length = path.getTotalLength();
    setPathLength(length);
    let offset = 0;
    const step = 0.5;
    

    const animate = () => {
      offset = (offset + step) % length;
      text.setAttribute("startOffset", `${offset}`);
    };

    const interval = setInterval(() => {
      animate();
    }, 16); // roughly 60fps

    const resetInterval = setInterval(() => {
      offset = 0;
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };

    animate();
  }, []);

  const baseText =
    "Helping you grow without burnout • Helping you grow without burnout ";
  const repeatedText = baseText.repeat(100); // ensure very long seamless text

  return (
    <div className={styles.ribbonWrapper}>
      <svg
        className={styles.ribbonPath}
        viewBox="0 0 1440 487"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id="ribbonCurve"
            ref={pathRef}
            d="M-24 463C-24 463 518.739 133.634 782.733 284.559C1046.73 435.484 1204.74 246.412 1246.73 176.847C1288.73 107.281 1248.75 31.3191 1179.7 28.1207C1110.65 24.9223 1059.36 85.6922 1059.36 162.854C1059.36 240.015 1161.81 501.451 1552 284.559"
            fill="none"
          />
        </defs>

        <path
          d="M-24 463C-24 463 518.739 133.634 782.733 284.559C1046.73 435.484 1204.74 246.412 1246.73 176.847C1288.73 107.281 1248.75 31.3191 1179.7 28.1207C1110.65 24.9223 1059.36 85.6922 1059.36 162.854C1059.36 240.015 1161.81 501.451 1552 284.559"
          stroke="#815FAA"
          strokeWidth="56"
          fill="none"
        />

        <text className={styles.ribbonText}>
          <textPath
            href="#ribbonCurve"
            ref={textRef}
            startOffset="0"
            method="align"
            spacing="auto"
          >
            {repeatedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Ribbon;
