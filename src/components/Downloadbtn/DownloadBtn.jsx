import React from "react";
import classes from "./DownloadBtn.module.css";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
// import { carertslant } from "../../../public/assets/BrandKit";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { carertslant } from "../../../public/assets/BrandKit";
const DownloadBtn = () => {
  return (
    <div className={classes.bluebox}>
      <div className={classes.top}>
        <div className={classes.ico}>
          <Image
            src={carertslant}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
            className={classes.rotate}
          />
        </div>
      </div>
      <h4 className={classes.boxttx}>Download Logo Assets</h4>
    </div>
  );
};

export default DownloadBtn;
