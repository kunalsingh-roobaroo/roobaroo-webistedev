import React from "react";
import classes from "./BlogPage.module.css";
import Navbar from "@/components/Navbar/Navbar";
import BlogHero from "./components/BlogHero/BlogHero";
import BlueBox from "@/components/Boxes/BlueBox";
import PinkBox from "@/components/Boxes/PinkBox";
import BlogCards from "./components/BlogCards/BlogCards";
import Image from "next/image";
import { blogtop } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import Footer from "@/components/Footer/Footer";
import BackgroundBoxesWrapper from "@/components/BackgroundWrapper/BackgroundWrapper";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <BackgroundBoxesWrapper >
        <div className={classes.parent}>
          <div className={classes.box}>
            <BlogHero />
            {/* <div className={classes.bluebox}>
            <BlueBox />
          </div>
          <div className={classes.pinkbox}>
            <PinkBox />
          </div> */}
          </div>
          <div className={classes.blogcards}>
            <BlogCards />
            <div className={classes.blogbg}>
              <div className={classes.blogbgframe}>
                <Image src={blogtop} fill alt={staticAlt} />
              </div>
            </div>
            {/* <div className={classes.newbluebox}>
            <BlueBox />
          </div> */}
          </div>
          {/* <div className={classes.newpinkbox}>
          <PinkBox />
        </div> */}
          <Footer />
        </div>
      </BackgroundBoxesWrapper>
    </>
  );
};

export default BlogPage;
