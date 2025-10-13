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
import Link from "next/link";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { newdark, newlight, secdark, secmark } from "../../../../../../public/assets/BrandKit";

const SecondaryMark = () => {
  const icons = [newlight, newdark];
  const secicons = [secmarklight, secarkdark];
  const mainsecicons = [secmark, secdark];

  return (
    <div className={classes.lestsec}>
      {/* Primary Mark */}
      <div className={`${classes.subsrc} ${classes.mark}`}>
        <h2 className={classes.subtxt}>Primary Mark</h2>
        <div className={classes.smallicons}>
          {icons.map((value, index) => (
            <Link
              key={index}
              href={value.src}
              download
              className={classes.smallico}
            >
              <Image
                src={value}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Secondary Mark */}
      <div className={`${classes.subsrc} ${classes.submark}`}>
        <h2 className={classes.subtxt}>Secondary Mark</h2>
        <div className={classes.smallicons}>
          {secicons.map((value, index) => (
            <Link
              key={index}
              href={value.src}
              download
              className={classes.smallico}
            >
              <Image
                src={value}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Big Icons */}
      <div className={classes.bigicons}>
        {mainsecicons.map((value, index) => (
          <Link
            key={index}
            href={value.src}
            download
            className={classes.bigico}
          >
            <Image
              src={value}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SecondaryMark;
