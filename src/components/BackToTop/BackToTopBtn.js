import React from "react";
import classes from "./BackBtn.module.css";
import Image from "next/image";
import { back } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
const BackToTopBtn = () => {
  return (
    <button className={classes.btn}>
      <Image src={back} width={49} height={49} alt={staticAlt} />
      <span className={classes.bactct}>Back to Top</span>
    </button>
  );
};

export default BackToTopBtn;
