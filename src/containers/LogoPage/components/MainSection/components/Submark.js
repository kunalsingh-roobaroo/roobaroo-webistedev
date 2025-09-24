import React from "react";
import classes from "./Marks.module.css";
import {
  sub1,
  sub2,
  sub3,
  sub4,
} from "../../../../../../public/assets/BrandKit";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import Link from "next/link";
const Submark = () => {
  const icons = [sub1, sub2, sub3, sub4];
  return (
    <div className={classes.sec}>
      <h2 className={classes.subtxt}>Sub Mark</h2>
      <div className={classes.icons}>
        {icons.map((value, index) => {
          return (
            <Link href={value.src} download key={index} className={classes.ico}>
              <Image
                src={value}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Submark;
