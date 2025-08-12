import React from "react";
import classes from "./BlogHero.module.css";
import Image from "next/image";
import { blogthumbnail } from "../../../../../public/assets/images";
import { staticAlt } from "@/lib/constants";
import BlogCarousel from "./Carousel/BlogCarousel";
import BlueBox from "@/components/Boxes/BlueBox";
import PinkBox from "@/components/Boxes/PinkBox";
import BlogCards from "../BlogCards/BlogCards";
const BlogHero = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <div className={classes.heroimg}>
          <Image src={blogthumbnail} fill alt={staticAlt} />
        </div>
        <p className={classes.featuretxt}>Feature:</p>
      </div>
      <BlogCarousel />
        
    </section>
  );
};

export default BlogHero;
