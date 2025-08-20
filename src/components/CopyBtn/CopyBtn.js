"use client";
import React from "react";
import classes from "./CopyBtn.module.css";
import Image from "next/image";
import { copy } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";

const CopyBtn = () => {
  const handleCopy = () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        // Optional: add feedback (like toast or alert)
        console.log("URL copied:", url);
      });
    }
  };

  return (
    <button className={classes.btn} onClick={handleCopy}>
      Copy Link
      <span className={classes.copy}>
        <Image src={copy} alt={staticAlt} width={16} height={16} />
      </span>
    </button>
  );
};

export default CopyBtn;
