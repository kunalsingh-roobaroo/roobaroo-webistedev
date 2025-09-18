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
      text: "Starts Nov. 1st Week",
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
    <section  id="bootcamp" className={classes.container}>
      <div className={classes.op}>
        <div className={classes.boxtop}>
          <div className={classes.toplhs}>
            <div className={classes.lhstop}>
              <h2 className={classes.headtxt}>The 21</h2>
              <h2 className={classes.st}>ST</h2>
            </div>
            <div className={classes.lhsbottom}>
              <h2 className={classes.century}>Century</h2>
              <h2 className={classes.bootcamp}>Bootcamp</h2>
            </div>
          </div>
          <div className={classes.toprhs}>
            <div className={classes.actions}>
              <div className={classes.upperaction}>
                <div className={classes.bluebox}>
                  <div className={classes.top}>
                    <ArrowUpRight
                      color="white"
                      size={28}
                      rotate={-45}
                      strokeWidth={3}
                    />
                  </div>
                  <h4 className={classes.boxttx}>Message Us</h4>
                </div>
                <div className={classes.redbox}>
                  <div className={classes.top}>
                    <ArrowUpRight
                      color="white"
                      size={28}
                      rotate={-45}
                      strokeWidth={3}
                    />
                  </div>
                  <h4 className={classes.boxttx}>Book a Meeting</h4>
                </div>
              </div>
              <NewsLetter label={"Register Interest"} homepage={true} />
            </div>
            <p className={classes.txt}>
              Your child&apos;s gateway to become future-ready in an evolving AI
              world
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
