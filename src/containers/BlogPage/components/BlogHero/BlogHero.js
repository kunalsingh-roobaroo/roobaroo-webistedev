import React from "react";
import classes from "./BlogHero.module.css";
import Image from "next/image";
import { blogthumbnail } from "../../../../../public/assets/images";
import { staticAlt } from "@/lib/constants";
import BlogCarousel from "./Carousel/BlogCarousel";
import BlueBox from "@/components/Boxes/BlueBox";
import PinkBox from "@/components/Boxes/PinkBox";
import BlogCards from "../BlogCards/BlogCards";
// import { desktopvideo } from "../../../../../public/assets/videos";
const BlogHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div className={classes.heroimg}>
          {/* <Image src={blogthumbnail} fill alt={staticAlt} /> */}
          <video
            className={classes.video}
            src="/assets/videos/desktopvideo.mov"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className={classes.mobvideo}
            src="/assets/videos/mobvideo.mov"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className={classes.op}>
        <p className={classes.featuretxt}>Featured :</p>
        <BlogCarousel />
      </div>
    </section>
  );
};

export default BlogHero;
