import React from "react";
import classes from "./DownloadBtn.module.css";
import { ArrowUpRight } from "lucide-react";
const DownloadBtn = () => {
  return (
    <div className={classes.bluebox}>
      <div className={classes.top}>
        <ArrowUpRight
          color="white"
          size={22}
          className={classes.rotate}
          strokeWidth={3}
        />
      </div>
      <h4 className={classes.boxttx}>Download Logo Assets</h4>
    </div>
  );
};

export default DownloadBtn;
