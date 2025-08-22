import React from "react";
import classes from "./Marks.module.css";
import {
  biglight,
  bilight,
  primarylight,
  secarkdark,
  secmarklight,
  topmarkdark,
} from "../../../../../../public/assets/images";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
const SecondaryMark = () => {
  const icons = [primarylight, topmarkdark];
  const secicons = [secmarklight, secarkdark];
  const mainsecicons = [bilight, biglight];
  return (
    <div className={classes.lestsec}>
      <div className={classes.subsrc}>
        <h2 className={classes.subtxt}>Primary Mark</h2>
        <div className={classes.smallicons}>
          {icons.map((value, index) => {
            return (
              <div key={index} className={classes.smallico}>
                <Image
                  src={value}
                  fill
                  alt={staticAlt}
                  sizes={responsiveImageSizes}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.subsrc}>
        <h2 className={classes.subtxt}>Secondary Mark</h2>
        <div className={classes.smallicons}>
          {secicons.map((value, index) => {
            return (
              <div key={index} className={classes.smallico}>
                <Image
                  src={value}
                  fill
                  alt={staticAlt}
                  sizes={responsiveImageSizes}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.bigicons}>
        {mainsecicons.map((value, index) => {
          return (
            <div key={index} className={classes.bigico}>
              <Image
                src={value}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondaryMark;
