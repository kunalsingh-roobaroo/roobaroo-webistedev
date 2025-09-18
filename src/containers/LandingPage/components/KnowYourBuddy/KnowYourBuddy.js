"use client";
import React, { useEffect, useState } from "react";
import classes from "./KnowYourBuddy.module.css";
import Image from "next/image";
import {
  arrow_down,
  brush_border,
  linktree,
  quotes,
} from "../../../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import {
  bhaskar,
  foundertags,
  singh,
} from "../../../../../public/assets/images";
import PinkBox from "@/components/Boxes/PinkBox";
import BlueBox from "@/components/Boxes/BlueBox";
import PurpleBox from "@/components/Boxes/PurpleBox";
import { motion, AnimatePresence } from "framer-motion";
import {
  amrita,
  colorinstagram,
  colorlinkedin,
  colorlinktree,
  cppr,
  dron_study,
  favcy,
  google_for_startups,
  iitkgp_black,
  iitkgp_white,
  mesa,
  metadome,
  MoHUA,
  niti,
  paytm,
  red,
  rishihood,
  stanford_seed,
  tanishq,
  titan,
  titaneye,
  topmate,
  unilever,
  whatsapp,
  zepto,
} from "../../../../../public/assets/logos";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { foundertag } from "../../../../../public/assets/animations";
import {
  amritanew,
  atal,
  cpr,
  dron,
  dubuddy,
  favcynew,
  iitkwhite,
  mesanew,
  metadomewhite,
  ministry,
  nitinew,
  paytmnew,
  set,
  tanishqnew,
  titaneyeplus,
  titannew,
  unilevernew,
  zeptonew,
} from "../../../../../public/assets/workwith";
import { X } from "lucide-react";
const KnowYourBuddy = () => {
  const links = [
    { icon: colorlinkedin, link: "https://linkedin.com/in/yourpage" },
    { icon: colorinstagram, link: "https://instagram.com/yourpage" },
    { icon: colorlinktree, link: "https://linktr.ee/yourpage" },
  ];

  const redBoxData = [
    {
      title: "Worked with:",
      brands: [
        metadomewhite,
        ministry,
        titaneyeplus,
        dron,
        atal,
        nitinew,
        iitkwhite,
        cpr,
        unilevernew,
        mesanew,
        titannew,
        set,
        amritanew,
        favcynew,
        zeptonew,
        dubuddy,
        tanishqnew,
        paytmnew,
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);


  const value = redBoxData[0];

  const testimonialData = [
    {
      icon: colorinstagram,
      content:
        "Bhaskar was there when I was at the lowest in life and he stayed through the entire time and helped me bounce back.",
      writer: "-Chandana, 24",
      designation: "Working Professional",
    },
    {
      icon: red,
      content:
        "Have found Bhaskar to be a caring professional who strives to provide real value for the growth of others.",
      writer: "-Ron, 32",
      designation: "Working Professional",
    },
    {
      icon: colorinstagram,
      content:
        "Bhaskar helped us transform our website, nail down our marketing channels, and establish B2B vertical.",
      writer: "-Sumit, 24",
      designation: "Startup Founder",
    },
    {
      icon: whatsapp,
      content:
        "Loved your energy and enthusiasm in solving problems. Thanks for helping me find the right college!",
      writer: "-Khush, 18",
      designation: "School Student",
    },
    {
      icon: whatsapp,
      content:
        "Grateful for your help in creating my resume from scratch, prepping for interviews, and finally getting into PWC",
      writer: "-Muskan, 21",
      designation: "College Student",
    },
  ];
    useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialData.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, [testimonialData.length]);

  return (
    <section id="team" className={classes.container}>
      <div className={classes.heatop}>
        <h2 className={classes.headtxt}>
          Know your <span className={classes.cake}>Founder</span>
        </h2>
        <div className={classes.arrowframe}>
          <div className={classes.arrow}>
            <Image
              src={arrow_down}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </div>
      </div>
      <div className={classes.mobarrowframe}>
        <div className={classes.arrow}>
          <Image
            src={arrow_down}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.central}>
        <div className={classes.top}>
          <div className={classes.toplhs}>
            <div className={classes.mainImage}>
              <Image src={bhaskar} fill alt={staticAlt} />
            </div>
            <div className={classes.pinkbox}>
              <PinkBox />
            </div>
            <div className={classes.bluebox}>
              <BlueBox />
            </div>
            <div className={classes.purplebox}>
              <PurpleBox />
            </div>
            <div className={classes.name}>
              <Image
                src={singh}
                fill
                alt={staticAlt}
                sizes={responsiveImageSizes}
              />
            </div>
            {/* <div className={classes.tags}>
              <div className={classes.founderTags}>
                <Image src={foundertag} fill unoptimized alt={staticAlt} />
              </div>
            </div> */}
          </div>
          <div className={classes.toprhs}>
            <div className={classes.subtop}>
              <div className={classes.subtopdiv}>
                <h3 className={classes.title}>
                  Bhaskar <br />
                  Singhania
                </h3>
                <h4 className={classes.subtxt}>
                  Entrepreneur | Ex-Chief of Staff | Startup Advisor |
                  Consultant | Career Coach
                </h4>
              </div>
              <div className={classes.brandwrapper}>
                <div className={classes.brands}>
                  <div className={classes.google}>
                    <Image
                      src={google_for_startups}
                      fill
                      alt={staticAlt}
                      sizes={responsiveImageSizes}
                    />
                    <div className={classes.atended}>Attended</div>
                  </div>
                  <div className={classes.stanford}>
                    <Image
                      src={stanford_seed}
                      fill
                      alt={staticAlt}
                      sizes={responsiveImageSizes}
                    />
                  </div>
                </div>
                <div className={classes.mob}>
                  <div className={classes.mobbottomlhs}>
                    <div className={classes.clgivo}>
                      <Image
                        src={iitkgp_black}
                        fill
                        alt={staticAlt}
                        sizes={staticAlt}
                      />
                    </div>
                    <div className={classes.rishiclgivo}>
                      <Image
                        src={rishihood}
                        fill
                        alt={staticAlt}
                        sizes={staticAlt}
                      />
                      <div className={classes.mobatended}>Attended</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.rhsbottom}>
              <div className={classes.subbottomlhs}>
                <div className={classes.bottomlhs}>
                  <div className={classes.clgivo}>
                    <Image
                      src={iitkgp_black}
                      fill
                      alt={staticAlt}
                      sizes={staticAlt}
                    />
                  </div>
                  <div className={classes.rishiclgivo}>
                    <Image
                      src={rishihood}
                      fill
                      alt={staticAlt}
                      sizes={staticAlt}
                    />
                  </div>
                </div>
                <div id="socialmedia" className={classes.sociallinks}>
                  <p className={classes.knotxt}>Know more</p>
                  <div className={classes.links}>
                    {links.map((value, index) => {
                      return (
                        <Link
                          key={index}
                          className={classes.linkimage}
                          href={value.link}
                        >
                          <Image
                            src={value.icon}
                            fill
                            alt={staticAlt}
                            sizes={responsiveImageSizes}
                          />
                        </Link>
                      );
                    })}
                  </div>
                  <div className={classes.clickhere}>Click here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.middle}>
          <div className={classes.middlelhs}>
            <div className={classes.middletop}>
              <div
                // triggers animation on index change
                className={classes.box}
              >
                <p className={classes.boxtxt}>{value.title}</p>
                <div className={classes.brandsbox}>
                  <Marquee speed={30}>
                    <div className={classes.brandparent}>
                      {[...value.brands, ...value.brands].map((brand, i) => (
                        <div key={i} className={classes.brandframe}>
                          <Image src={brand} fill alt={staticAlt} />
                        </div>
                      ))}
                    </div>
                  </Marquee>
                  <Marquee speed={30} direction="right">
                    <div className={classes.brandparent}>
                      {[...value.brands, ...value.brands].map((brand, i) => (
                        <div key={i} className={classes.brandframe}>
                          <Image src={brand} fill alt={staticAlt} />
                        </div>
                      ))}
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
            <div className={classes.middlemid}>
              <div className={classes.middlemidlhs}>
                <Image
                  src={brush_border}
                  fill
                  alt={staticAlt}
                  sizes={responsiveImageSizes}
                />
              </div>
              <div className={classes.middlemidrhs}>
                <AnimatePresence mode="wait">
                  <div className={classes.testimonialBox}>
                    <div className={classes.testtop}>
                      {/* Quote Icon (Static) */}
                      <div className={classes.quoteIcon}>
                        <Image
                          src={quotes}
                          fill
                          alt={staticAlt}
                          sizes={responsiveImageSizes}
                        />
                      </div>

                      {/* Everything else (Animated) */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          initial={{ opacity: 0, y: 0 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 0 }}
                          transition={{ duration: 1, ease: "easeInOut" }} // slower & smoother
                          className={classes.testimonialAnimated}
                        >
                          <div className={classes.testimonialIcon}>
                            <Image
                              src={testimonialData[activeIndex].icon}
                              fill
                              alt={staticAlt}
                              sizes={responsiveImageSizes}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Animate Text Section */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`text-${activeIndex}`}
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={classes.koko}
                      >
                        <p className={classes.testimonialContent}>
                          {testimonialData[activeIndex].content}
                        </p>
                        <p className={classes.testimonialWriter}>
                          {testimonialData[activeIndex].writer}
                        </p>
                        <p className={classes.testimonialDesignation}>
                          {testimonialData[activeIndex].designation}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className={classes.middlerhs}>
            <div className={classes.sec}>
              <p className={classes.rhshead}>600+</p>
              <p className={classes.rhssubhead}>
                students and professionals coached.
              </p>
            </div>
            <div className={classes.sec}>
              <p className={classes.rhshead}>5/5</p>
              <p className={classes.rhssubhead}>
                Rating on{" "}
                <span className={classes.spanimg}>
                  <Image
                    src={topmate}
                    width={92}
                    height={19}
                    sizes={responsiveImageSizes}
                    className={classes.spanimg}
                    alt={staticAlt}
                  />
                </span>
                + Top-Rated Expert 2024.
              </p>
            </div>
            <div className={classes.sec}>
              <p className={classes.rhshead}>10M+</p>
              <p className={classes.rhssubhead}>
                Fundraising Experience - Bootstrapped to Series A
              </p>
            </div>
          </div>
        </div>
        <div className={classes.click}>Click Here</div>
      </div>
    </section>
  );
};

export default KnowYourBuddy;
