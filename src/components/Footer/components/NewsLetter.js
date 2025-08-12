"use client";
import React from "react";
import classes from "./NewsLetter.module.css";
import Image from "next/image";
import { newsarrow, success, upright } from "../../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
const NewsLetter = ({ homepage }) => {
  const [step, setStep] = React.useState(1);
  return (
    <>
      {step === 1 ? (
        <div className={classes.purplebox}>
          <div className={classes.top}>
            <ArrowUpRight
              color="white"
              size={28}
              rotate={-45}
              className={classes.rotate}
            />
          </div>
          <h4
            style={{
              width: "98px",
            }}
            className={classes.boxttx}
          >
            Join Our Community
          </h4>
        </div>
      ) : step === 2 ? (
        <div className={`${classes.purplebox} ${homepage ? classes.homebox : ""}`}>
          <div className={classes.inputwrapper}>
            <input
              type="email"
              placeholder="Enter your email"
              className={classes.input}
              spellCheck="false"
            />
            <div className={classes.ico}>
              <Image src={newsarrow} fill alt={staticAlt} />
            </div>
          </div>
          <p className={classes.subs}>Subscribe to our Weekly Newsletter</p>
        </div>
      ) : (
        <div className={classes.purplebox}>
        <div className={classes.successtop}>
        <p className={classes.sucsub}>Thank You!</p>
        <Image src={success} width={29} height={29}/>
        </div>
        <p className={classes.boxttx}>{`You’ll hear from us soon :)`}</p>
        </div>
      )}
    </>
  );
};

export default NewsLetter;
