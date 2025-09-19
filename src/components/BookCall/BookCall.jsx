import React from "react";
import { ArrowUpRight, Link } from "lucide-react";
import classes from "./BookCall.module.css";
const BookCall = () => {
  return (
    <Link
      href="https://calendly.com/bhaskar-roobaroo/30min"
      style={{
        textDecorationLine: "none",
      }}
      target="_blank"
      className={classes.bluebox}
    >
      <div className={classes.top}>
        <ArrowUpRight color="white" size={28} rotate={-45} strokeWidth={3} />
      </div>
      <h4 className={classes.boxttx}>
        Book a <br />
        Discovery Call
      </h4>
    </Link>
  );
};

export default BookCall;
