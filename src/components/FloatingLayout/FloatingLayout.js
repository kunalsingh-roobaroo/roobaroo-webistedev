"use client";

import React, { useEffect, useState } from "react";
import styles from "./FloatingLayout.module.css";
import PinkBox from "../Boxes/PinkBox";
import PurpleBox from "../Boxes/PurpleBox";
import BlueBox from "../Boxes/BlueBox";

const FloatingLayout = ({ children }) => {
  const [leftBoxes, setLeftBoxes] = useState([]);
  const [rightBoxes, setRightBoxes] = useState([]);

  useEffect(() => {
    const total = 6;
    const left = [];
    const right = [];

    for (let i = 0; i < total; i++) {
      const topLeft = Math.random() * 100 + i * 80;
      const topRight = Math.random() * 100 + i * 80;

      const isBig = i % 2 === 0;

      const LeftComponent = isBig ? PinkBox : PurpleBox;
      const RightComponent = isBig ? BlueBox : PurpleBox;

      left.push(
        <div
          key={`left-${i}`}
          className={styles.boxWrapper}
          style={{
            top: `${topLeft}px`,
            left: isBig ? "0px" : "-30px",

            animationDelay: `${(i % 4) * 0.3}s`,
          }}
        >
          <div className={styles.innerBox}>
            <LeftComponent />
          </div>
        </div>
      );

      right.push(
        <div
          key={`right-${i}`}
          className={styles.boxWrapper}
          style={{
            top: `${topRight}px`,
            right: isBig ? "0px" : "-30px",

            animationDelay: `${(i % 4) * 0.3 + 0.2}s`,
          }}
        >
          <div className={styles.innerBox}>
            <RightComponent />
          </div>
        </div>
      );
    }

    setLeftBoxes(left);
    setRightBoxes(right);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.floatingLayer}>
        <div className={styles.lhs}>{leftBoxes}</div>
        <div className={styles.rhs}>{rightBoxes}</div>
      </div>

      <div className={styles.contentCard}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        {children}
      </div>
    </div>
  );
};

export default FloatingLayout;
