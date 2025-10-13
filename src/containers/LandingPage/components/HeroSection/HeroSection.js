"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import classes from "./HeroSection.module.css";
import NewsLetter from "@/components/Footer/components/NewsLetter";
import { heroarrow, leaves } from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { bigpink } from "../../../../../public/assets/images";
import Link from "next/link";
import { trackEvent } from "@/utils/ga4";
const HeroSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.subcontainer}>
        <div className={classes.txtdiv}>
          <h1 className={classes.headttx}>growth. wellness.</h1>
          <div className={classes.arrowframe}>
            <div className={classes.arrow}>
              <Image src={heroarrow} fill alt={staticAlt} />
            </div>
          </div>
          <h2 className={classes.subtxt}>
            Take charge of your future, with purpose, career clarity, and
            holistic wellness, with tools to succeed in the 21st century
          </h2>
          <div className={classes.leaves}>
            <div className={classes.leaveframe}>
              <Image
                src={leaves}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
          </div>
          <div className={classes.txtnox}>
            <p className={classes.cakes}>do you have both?</p>
          </div>
        </div>
        <div className={classes.actions}>
          <div className={classes.upperaction}>
            <Link
              onClick={() =>
                trackEvent({
                  category: "Hero Banner",
                  action: "On_click",
                  label: "Bootcamp",
                  value: "hero_bootcamp",
                })
              }
              href={"#bootcamp"}
              className={classes.bluebox}
            >
              <div className={classes.top}>
                <ArrowUpRight
                  color="white"
                  size={28}
                  rotate={-45}
                  strokeWidth={3}
                />
              </div>
              <h4 className={classes.boxttx}>Student Bootcamp</h4>
            </Link>
            <Link
              onClick={() =>
                trackEvent({
                  category: "Hero Banner",
                  action: "On_click",
                  label: "Consulting",
                  value: "hero_consulting",
                })
              }
              href={"#b2b"}
              className={classes.redbox}
            >
              <div className={classes.top}>
                <ArrowUpRight
                  color="white"
                  size={28}
                  rotate={-45}
                  strokeWidth={3}
                />
              </div>
              <h4 className={classes.boxttx}>Consulting</h4>
            </Link>
          </div>
          <NewsLetter homepage={true} />
        </div>
      </div>
      <div className={classes.pinkbox}></div>
      <div className={classes.bluebig}></div>
      <div className={classes.purple}></div>
    </section>
  );
};

export default HeroSection;
