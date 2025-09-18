"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./BackgroundWrapper.module.css";
import PinkBox from "@/components/Boxes/PinkBox";
import PurpleBox from "@/components/Boxes/PurpleBox";
import BlueBox from "@/components/Boxes/BlueBox";

export default function BackgroundBoxesWrapper({ children,invert }) {
  const [repeatCount, setRepeatCount] = useState(3);
  const boxRef = useRef(null);
   const contentRef = useRef(null);

  useEffect(() => {
    const updateBoxCount = () => {
      if (!boxRef.current || !contentRef.current) return;

      const boxHeight = boxRef.current.offsetHeight;
      const contentHeight = contentRef.current.scrollHeight; // total height of children

      setRepeatCount(Math.ceil(contentHeight / boxHeight) + 1);
    };

    updateBoxCount();
    window.addEventListener("resize", updateBoxCount);
    return () => window.removeEventListener("resize", updateBoxCount);
  }, []);

  const leftBoxes = Array.from({ length: repeatCount }, (_, i) => (
    <div
      className={classes.boxWrapper}
      key={`l-${i}`}
      ref={i === 0 ? boxRef : null} // attach ref to first box
    >
      {i % 2 === 0 ? <PinkBox /> : <PurpleBox />}
    </div>
  ));

  const rightBoxes = Array.from({ length: repeatCount }, (_, i) => (
    <div className={classes.boxWrapper} key={`r-${i}`}>
      {i % 2 === 0 ? <BlueBox /> : <PurpleBox />}
    </div>
  ));

  return (
    <section className={classes.container}>
      <div className={classes.lhs}>{leftBoxes}</div>
      <div className={classes.rhs}>{rightBoxes}</div>
      <div className={classes.content} ref={contentRef}>{children}</div>
    </section>
  );
}
