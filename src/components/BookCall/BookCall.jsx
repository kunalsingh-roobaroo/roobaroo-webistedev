import React from "react";
import { ArrowUpRight } from "lucide-react";
import classes from "./BookCall.module.css";
const BookCall = () => {
  return (
    <div className={classes.bluebox}>
      <div className={classes.top}>
        <ArrowUpRight color="white" size={28} rotate={-45} strokeWidth={3} />
      </div>
      <h4 className={classes.boxttx}>
        Book a <br />
        Discovery Call
      </h4>
    </div>
  );
};

export default BookCall;
