"use client";
import React from "react";
import classes from "./NewsLetter.module.css";
import Image from "next/image";
import { newsarrow, success, upright } from "../../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { trackEvent } from "@/utils/ga4";
const NewsLetter = ({ homepage, label, register }) => {
  const [step, setStep] = React.useState(1);
  return (
    <>
      {step === 1 ? (
        <Link
          onClick={() =>
            trackEvent({
              category: register ? "Bootcamp" : "Hero Banner",
              action: "On_click",
              label: register ? "Register Interest" : "Community",
              value: register ? "bootcamp_googleform" : "hero_instagram",
            })
          }
          target="_blank"
          href={
            register
              ? "https://forms.gle/gf4BcnFZ7Vq9Y9DW7"
              : "https://www.instagram.com/roobaroo.ai/"
          }
          className={classes.purplebox}
        >
          <div className={classes.top}>
            <ArrowUpRight
              color="white"
              size={28}
              // rotate={-45}
              className={classes.rotate}
              strokeWidth={3}
            />
          </div>
          <h4
            style={{
              width: "98px",
            }}
            className={classes.boxttx}
            id="newsletter"
          >
            {label ? "Register Interest" : "Join Our Community"}
          </h4>
        </Link>
      ) : step === 2 ? (
        <div
          className={`${classes.purplebox} ${homepage ? classes.homebox : ""}`}
        >
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
            <Image src={success} width={29} height={29} alt={staticAlt} />
          </div>
          <p className={classes.boxttx}>{`You’ll hear from us soon :)`}</p>
        </div>
      )}
    </>
  );
};

export default NewsLetter;
