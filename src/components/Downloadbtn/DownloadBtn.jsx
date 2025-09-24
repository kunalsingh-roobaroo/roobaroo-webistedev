import React from "react";
import classes from "./DownloadBtn.module.css";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { carertslant } from "../../../public/assets/BrandKit";
import Link from "next/link";

const DownloadBtn = () => {
  return (
    <Link
      href="https://drive.google.com/drive/u/2/folders/1J3DmOVk4UbNXydPSIrd3juzZ4jw8Poz1" // <-- replace with your file path or link
      download // forces download instead of opening
      className={classes.bluebox}
    >
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
    </Link>
  );
};

export default DownloadBtn;
