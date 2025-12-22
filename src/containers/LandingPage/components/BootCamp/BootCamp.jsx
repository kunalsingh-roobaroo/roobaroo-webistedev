"use client";
import React from "react";
import classes from "./BootCamp.module.css";
import { ArrowUpRight } from "lucide-react";
import NewsLetter from "@/components/Footer/components/NewsLetter";
import {
  badge,
  calendar,
  contract,
  expertdrop,
  jobtarget,
  laptop,
  online,
  sat,
  spotlight,
  web,
} from "../../../../../public/assets/BootCamp";
import Image from "next/image";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import Link from "next/link";
import { bootcamplogo } from "../../../../../public/assets/images";
import { trackEvent } from "@/utils/ga4";
const BootCamp = () => {
  const tiles = [
    {
      icon: contract,
      title: "Job-worthy Portfolio Creation",
    },
    {
      icon: expertdrop,
      title: "Expert Masterclasses",
    },
    {
      icon: jobtarget,
      title: "Get Internship Opportunities",
    },
    {
      icon: web,
      title: "Master 20+ AI Tools",
    },
    {
      icon: spotlight,
      title: "The Career Show (20+ Fields)",
    },
    {
      icon: online,
      title: "Holistic Wellbeing Sessions",
    },
  ];
  const data = [
    {
      icon: calendar,
      text: "Starts 11 March",
    },
    {
      icon: laptop,
      text: "Online Mode",
    },
    {
      icon: sat,
      text: "Weekend Sessions",
    },
    {
      icon: badge,
      text: "Grade 8 Onwards",
    },
  ];
  return (
    <section id="bootcamp" className={classes.container}>
      <div className={classes.op}>
        <div className={classes.boxtop}>
          <div className={classes.toplhs}>
            <Image
              src={bootcamplogo}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
          <div className={classes.toprhs}>
            <div className={classes.actions}>
              <div className={classes.upperaction}>
                <Link
                  href="https://api.whatsapp.com/send/?phone=919211611614&text&type=phone_number&app_absent=0"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  className={classes.bluebox} // Move the box class here
                  onClick={() =>
                    trackEvent({
                      category: "Bootcamp",
                      action: "On_click",
                      label: "Message Us",
                      value: "bootcamp_whatsapp",
                    })
                  }
                >
                  <div className={classes.top}>
                    <ArrowUpRight
                      color="white"
                      size={28}
                      rotate={-45}
                      strokeWidth={3}
                    />
                  </div>
                  <p className={classes.boxttx}>Message Us</p>
                </Link>
                <Link
                  href="https://calendly.com/bhaskar-roobaroo/30min"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  className={classes.redbox}
                  onClick={() =>
                    trackEvent({
                      category: "Bootcamp",
                      action: "On_click",
                      label: "Book Meeting",
                      value: "bootcamp_calendly",
                    })
                  }
                >
                  <div className={classes.top}>
                    <ArrowUpRight
                      color="white"
                      size={28}
                      rotate={-45}
                      strokeWidth={3}
                    />
                  </div>
                  <h4 className={classes.boxttx}>Book a Meeting</h4>
                </Link>
              </div>
              <NewsLetter
                label={"Register Interest"}
                register={true}
                homepage={true}
              />
            </div>
            <p className={classes.txt}>
              Your gateway to become future-ready in an AI-first world
            </p>
          </div>
        </div>
        <div className={classes.bottom}>
          {tiles.map((value, index) => {
            return (
              <div key={index} className={classes.tile}>
                <div className={classes.imageframe}>
                  <Image
                    src={value.icon}
                    fill
                    alt={staticAlt}
                    sizes={responsiveImageSizes}
                  />
                </div>
                <p className={classes.cardtxt}>{value.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.containerbottom}>
        <div className={classes.titles}>
          {data.map((value, index) => {
            return (
              <div key={index} className={classes.badge}>
                <div className={classes.icoframe}>
                  <Image
                    src={value.icon}
                    fill
                    alt={staticAlt}
                    sizes={responsiveImageSizes}
                  />
                </div>
                <p className={classes.jojo}>{value.text}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.batch}>Limited Batch Size</div>
      </div>
    </section>
  );
};

export default BootCamp;
