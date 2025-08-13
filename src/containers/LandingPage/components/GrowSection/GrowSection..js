import React from "react";
import classes from "./GrowSection.module.css";
import GrowthWellnessSection from "./components/GrowthWellnessSection";
import MobileGrowSection from "../MobileGrowSection/MobileGrowSection";
const GrowSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.txtdiv}>
        <p className={classes.maintxt}>
          We help you <span className={classes.spantxt}>Grow</span>
        </p>
        <p className={classes.subtxt}>Without burning out!</p>
      </div>

      <GrowthWellnessSection />

      <div className={classes.mobile}>
        <MobileGrowSection />
      </div>
    </section>
  );
};

export default GrowSection;
