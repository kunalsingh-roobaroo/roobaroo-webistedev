"use client";
import React from "react";
import {
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  mob1,
  mob2,
  mob3,
  mob4,
  mob5,
  mob6,
} from "../../../../../../../public/assets/B2B";
import classes from "./ImageCarousel.module.css";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";

const ImageCarousel = () => {
  const images = [
    { desktop: car1, mobile: mob1 },
    { desktop: car2, mobile: mob2 },
    { desktop: car3, mobile: mob3 },
    { desktop: car4, mobile: mob4 },
    { desktop: car5, mobile: mob5 },
    { desktop: car6, mobile: mob6 },
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
    autoplaySpeed: 2000,
    arrows: false,
    cssEase:'linear'
  };
  return (
    <div className={classes.carouselwrapper}>
      <Slider
        {...settings}
        // showArrows={false}
        // showStatus={false}
        // showIndicators={false}
        // showThumbs={false}
        // infiniteLoop={true}
        // autoPlay={true}
      >
        {[...images].map((value, index) => {
          return (
            <div key={index} className={classes.tile}>
              <Image
                src={value.desktop}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
                className={classes.desktop}
              />
              <Image
                src={value.mobile}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
                className={classes.mobile}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
