"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./TileCarousel.module.css";
import Slider from "react-slick";
import "./carousel.css";
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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <div className={classes.carouselwrapper}>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className={`${classes.tile} ${classes[`tile${index + 1}`]}`}
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
      </Slider>
    </div>
  );
};

export default TileCarousel;
