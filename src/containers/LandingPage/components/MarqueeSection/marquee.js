import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Container from "@/components/ui/container";
import classes from "./MarqueeSection.module.css";
import PinkBox from "@/components/Boxes/PinkBox";
import BlueBox from "@/components/Boxes/BlueBox";
import PurpleBox from "@/components/Boxes/PurpleBox";
import KnowMore from "@/components/KnowMore/KnowMore";
import { backgroundcircles, newcircle } from "../../../../../public/assets/images";
import { staticAlt } from "@/lib/constants";

const MarqueeSection = () => {
  const marqueeItems = [
    {
      type: "card",
      image: "/assets/images/ncrb-logo.png",
      title: "NCRB",
      subtitle: "@NCRBHQ",
      heading: "Student suicide at peak.",
      text: "Student suicide rate has taken over the general population suicide rate",
    },
    {
      type: "highlight",
      color: "#FB7D7D",
      title: "Startup Failure Epidemic",
      text: ">90% of startups in India fail, mostly due to lack of clarity, resilience, or support.",
      source: "Source: Startup India",
    },
    {
      type: "card",
      image: "/assets/images/tatva-logo.png",
      title: "The Tatva",
      subtitle: "@NCRBHQ",
      heading: "Social Media Suicide:",
      text: "24-year-old influencer dies after losing followers, showing mental health impacts of online validation.",
    },
    {
      type: "card",
      image: "/assets/images/ijhsr-logo.png",
      title: "IJHCR",
      subtitle: "@NCRBHQ",
      heading: "Back Pain Epidemic at Work",
      text: "76% of Indian professionals in desk jobs report chronic lower back pain.",
    },
  ];

  return (
    <>
      <div className={classes.marqueeWrapper}>
        <Marquee className={classes.marquee}>
          {marqueeItems.map((item, idx) => {
            if (item.type === "highlight") {
              return (
                <div key={idx} className={classes.card}>
                  <div className={classes.highlightSection}>
                    <p
                      style={{ color: item.color }}
                      className={classes.cardTitle}
                    >
                      {item.title}
                    </p>
                    <p className={classes.cardText}>{item.text}</p>
                    <p style={{ color: item.color }} className={classes.src}>
                      {item.source}
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div key={idx} className={classes.card}>
                <div className={classes.cardHeader}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className={classes.cardImage}
                  />
                  <div className={classes.wraped}>
                    <p className={classes.cardTitle}>{item.title}</p>
                    <p className={classes.cardSubtitle}>{item.subtitle}</p>
                  </div>
                </div>
                <div className={classes.txtdiv}>
                  <p className={classes.cardHeading}>{item.heading}</p>
                  <p className={classes.cardText}>{item.text}</p>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeSection;
