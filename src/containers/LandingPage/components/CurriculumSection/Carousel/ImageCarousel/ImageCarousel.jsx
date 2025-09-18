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
import "./carousel.css";

const ImageCarousel = () => {
  const images = [
    { desktop: car1, mobile: mob1 },
    { desktop: car2, mobile: mob2 },
    { desktop: car3, mobile: mob3 },
    { desktop: car4, mobile: mob4 },
    { desktop: car5, mobile: mob5 },
    { desktop: car6, mobile: mob6 },
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
      >
        {images.map((value, index) => {
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
                src={value.desktop}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
                className={classes.mobile}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
