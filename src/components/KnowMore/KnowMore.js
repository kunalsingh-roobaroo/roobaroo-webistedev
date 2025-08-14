import React from "react";
import { ArrowUpRight } from "lucide-react";
import classes from './KnowMore.module.css'
const KnowMore = () => {
  return (
    <div className={classes.bluebox}>
      <div className={classes.top}>
        <ArrowUpRight color="white" size={22} rotate={-45}   strokeWidth={3} />
      </div>
      <h4 className={classes.boxttx}>Know More</h4>
    </div>
  );
};

export default KnowMore;
