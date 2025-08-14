import React from "react";
import classes from "./CopyBtn.module.css";
import Image from "next/image";
import { copy } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
const CopyBtn = () => {
  return (
    <button className={classes.btn}>
      Copy Link
      <span className={classes.copy}>
        <Image src={copy} alt={staticAlt} width={16} height={16} />
      </span>
    </button>
  );
};

export default CopyBtn;
