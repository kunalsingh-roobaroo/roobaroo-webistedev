"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import classes from "./BookCall.module.css";
import Link from "next/link";
import { trackEvent } from "@/utils/ga4";
const BookCall = () => {
  return (
    <Link
      href="https://calendly.com/bhaskar-roobaroo/30min"
      style={{
        textDecorationLine: "none",
      }}
      onClick={() =>
        trackEvent({
          category: "Consulting",
          action: "On_click",
          label: "Book Meeting",
          value: "consulting_calendly",
        })
      }
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
