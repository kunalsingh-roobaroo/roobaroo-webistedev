"use client";
import React from "react";
import classes from "./BackBtn.module.css";
import Image from "next/image";
import { back } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";

const BackToTopBtn = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };

  return (
    <button className={classes.btn} onClick={handleScrollTop}>
      <div className={classes.box}>
        <Image src={back} fill alt={staticAlt} />
      </div>

      <span className={classes.bactct}>Back to Top</span>
    </button>
  );
};

export default BackToTopBtn;
