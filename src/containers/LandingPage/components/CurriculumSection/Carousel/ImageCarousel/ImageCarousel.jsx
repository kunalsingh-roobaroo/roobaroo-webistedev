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
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const ImageCarousel = () => {
  const isMobile = useMediaQuery({ maxWidth: 450 });

  const images = [
    { desktop: car1, mobile: mob1 },
    { desktop: car2, mobile: mob2 },
    { desktop: car3, mobile: mob3 },
    { desktop: car4, mobile: mob4 },
    { desktop: car5, mobile: mob5 },
    { desktop: car6, mobile: mob6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <div className={classes.carouselwrapper}>
      <Slider {...settings}>
        {images.map((value, index) => (
          <div key={index} className={classes.tile}>
            <Image
              src={isMobile ? value.mobile : value.desktop}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
              className={isMobile ? classes.mobile : classes.desktop}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
