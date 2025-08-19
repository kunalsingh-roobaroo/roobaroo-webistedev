import React from "react";
import classes from "./Back.module.css";
import Link from "next/link";
import { staticAlt } from "@/lib/constants";
import Image from "next/image";
import { backarrow } from "../../../../../public/assets/icons";
const BackBtn = () => {
  return (
    <Link className={classes.back} href={"/brandkit"}>
      <div className={classes.backarrow}>
        <Image src={backarrow} fill alt={staticAlt} />
      </div>
      <p className={classes.backbt}>Back</p>
    </Link>
  );
};

export default BackBtn;
