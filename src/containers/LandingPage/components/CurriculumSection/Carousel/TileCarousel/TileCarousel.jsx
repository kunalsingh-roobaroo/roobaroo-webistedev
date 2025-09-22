"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./TileCarousel.module.css";
const TileCarousel = () => {
  const data = [
    {
      title: "Job",
      subtitle: "Our sessions = Growth + Wellness",
      para: "Resume, Portfolio, Interview Mastery ",
      subpara: "Self-Coach Training",
      background: "#27AAE7",
    },
    {
      title: "Startup",
      subtitle: "Our sessions = Growth + Wellness",
      para: "From No Idea to MVP",
      subpara: "Building Emotional Resilience ",
      background: "#FB7D7D",
    },
    {
      title: "AI",
      subtitle: "Our sessions = Growth + Wellness",
      para: "Building AI Agents & Products",
      subpara: "Digital Wellbeing Hacks",
      background: "#815FAA",
    },
  ];
  return (
    <div className={classes.carouselwrapper}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000} // 5 seconds per slide
        // transitionTime={1000}
      >
        {data.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                background: value.background,
              }}
              className={classes.tile}
            >
              <div className={classes.top}>
                <p className={classes.headtxt}>
                  {value.title} <br /> Readiness
                </p>
                <p className={classes.subtxt}>{value.subtitle}</p>
              </div>
              <p className={classes.bottom}>
                {value.para}{" "}
                <span
                  style={{
                    color: value.background,
                  }}
                  className={classes.plus}
                >
                  +{" "}
                </span>
                {value.subpara}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TileCarousel;
