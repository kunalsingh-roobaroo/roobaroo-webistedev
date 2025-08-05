import React from "react";
import classes from "./NewsLetter.module.css";
import Image from "next/image";
import { upright } from "../../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
const NewsLetter = ({ homepage }) => {
  return (
    <div className={`${classes.box} ${homepage ? classes.homebox : ""}`}>
      <div className={classes.inputwrapper}>
        <input
          type="email"
          placeholder="Enter your email"
          className={classes.input}
          spellCheck="false"
        />
        <div className={classes.ico}>
          <Image src={upright} fill alt={staticAlt} />
        </div>
      </div>
      <p className={classes.subs}>Subscribe to our Weekly Newsletter</p>
    </div>
  );
};

export default NewsLetter;
