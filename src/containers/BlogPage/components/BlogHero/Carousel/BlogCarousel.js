"use client";
import React from "react";
import Slider from "react-slick";
import classes from "./BlogCarousel.module.css";
import "./BlogCarousel.css";
import { featureimg } from "../../../../../../public/assets/images";
import Image from "next/image";
import { staticAlt } from "@/lib/constants";
import { leftarrow } from "../../../../../../public/assets/icons";

// Import your custom arrow images

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div className={`customArrow customNext`} onClick={onClick}>
      <Image
        src={leftarrow}
        alt="Next"
        width={28}
        height={28}
        priority
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div  className={`customArrow customPrev`} onClick={onClick}>
      <Image src={leftarrow} alt="Previous" width={28} height={28} priority />
    </div>
  );
};

const BlogCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const blogData = [
    {
      thumbnail: featureimg,
      date: "JULY 10    |    FOUNDING TEAM    |    GROWTH",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      description:
        "At Roobaroo, we believe that growth begins with being heard. Here's how we’re creating platforms where young people feel seen, safe, and empowered.",
    },
    {
      thumbnail: featureimg,
      date: "AUGUST 14    |    COMMUNITY    |    CHANGE",
      title: "Empowering Youth Through Conversation",
      description:
        "We’re building dialogue spaces that foster leadership and empathy among young changemakers.",
    },
    {
      thumbnail: featureimg,
      date: "SEPTEMBER 01    |    IMPACT    |    STORIES",
      title: "From Ideas to Action: The Roobaroo Journey",
      description:
        "Discover how our programs turn young voices into real, impactful initiatives in their communities.",
    },
  ];

  return (
    <div className={classes.carouselWrapper}>
      <Slider {...settings}>
        {blogData.map((blog, index) => (
          <div key={index} className={classes.slide}>
            <div className={classes.lhs}>
              <p className={classes.date}>{blog.date}</p>
              <h2 className={classes.title}>{blog.title}</h2>
              <p className={classes.description}>{blog.description}</p>
            </div>
            <div className={classes.rhs}>
              <div className={classes.imageWrapper}>
                <Image src={blog.thumbnail} alt={staticAlt} fill sizes="50vw" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
