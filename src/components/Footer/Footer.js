"use client";
import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
import { footerings } from "../../../public/assets/images";
import { staticAlt } from "@/lib/constants";
import {
  call,
  heart,
  instagram,
  linkedin,
  linktree,
  location,
  mail,
  x,
} from "../../../public/assets/icons";
import { wework, whitelogo } from "../../../public/assets/logos";
import Link from "next/link";
import NewsLetter from "./components/NewsLetter";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/utils/ga4";
const Footer = () => {
  const gridItems = [
    {
      name: "Consulting",
      link: "#b2b",
      label: "Consulting",
      analvalue: "footer_consulting",
    },
    {
      name: "What’s Roobaroo.ai?",
      link: "https://drive.google.com/file/d/1Il8CZBei-JceUYO33BKW-qhptZtFD2ME/view",
      label: "About Article",
      analvalue: "footer_about",
    },
    {
      name: "Student Bootcamp",
      link: "#bootcamp",
      label: "Bootcamp",
      analvalue: "footer_bootcamp",
    },
    {
      name: "The Problem",
      link: "https://drive.google.com/file/d/1mXr9Y2P323s2yCePFlZPHPMg8T0X0qJY/view?usp=drive_link",
      label: "PS Article",
      analvalue: "footer_ps",
    },
    {
      name: "Our Brand Story",
      link: "/our-story",
      label: "Story Page",
      analvalue: "footer_brandstory",
    },
    {
      name: "Guiding Principle",
      link: "https://drive.google.com/file/d/1gAGl-xI4nm7g7nM5fFLuHStKjo6O6gEA/view?usp=drive_link",
      label: "Matrix Article",
      analvalue: "footer_matrix",
    },
    {
      name: "Know the Team",
      link: "#team",
      label: "Team",
      analvalue: "footer_knowtheteam",
    },
    {
      name: "Brand Identity",
      link: "/brand-assets",
      label: "Brand Identity",
      analvalue: "footer_brandidentity",
    },
    {
      name: "Talk to Us",
      link: "https://calendly.com/bhaskar-roobaroo/30min",
      label: "Book Meeting",
      analvalue: "footer_calendly",
    },
    {
      name: "Read our Blog",
      link: "/blog",
      label: "Blog",
      analvalue: "footer_blog",
    },
  ];
  const socials = [
    {
      icon: linktree,
      link: "https://linktr.ee/roobaroo.ai",
      label: "Linktree",
      analvalue: "footer_linktree",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/roobaroo.ai/",
      label: "Instagram",
      analvalue: "footer_instagram",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/company/roobaroo-ai",
      label: "LinkedIn",
      analvalue: "footer_linkedin",
    },
    {
      icon: x,
      link: "https://x.com/roobaroo_ai",
      label: "X",
      analvalue: "footer_x",
    },
  ];
  const contacts = [
    {
      icon: mail,
      detail: "contact@roobaroo.ai",
      link: "mailto:contact@roobaroo.ai",
    },
    {
      icon: call,
      detail: "9211611614",
      link: "tel:9211611614",
    },
    {
      icon: location,
      detail: "WeWork, DLF 2 Horizon Centre, Gurgaon- 122002",
      link: "#",
    },
  ];

  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        {/* <div className={classes.actual}>
          <div className={classes.actualframe}>
            <Image src={footerings} fill alt={staticAlt} />
          </div>
        </div> */}
        <div className={classes.top}>
          <div className={classes.lhs}>
            <div className={classes.lhstop}>
              <p className={classes.made}>Made with </p>
              <div className={classes.heart}>
                <Image src={heart} fill alt={staticAlt} />
              </div>
            </div>
            <Link href={"/"} className={classes.whitelogo}>
              <Image src={whitelogo} fill alt={staticAlt} />
            </Link>
            <div className={classes.gridSection}>
              {gridItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${classes.gridItem} `}
                  onClick={() =>
                    trackEvent({
                      category: "Footer",
                      action: "On_click",
                      label: item?.label,
                      value: item?.analvalue,
                    })
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href={"#bootcamp"} className={classes.rhs}>
            <p className={classes.headtxt}>
              Helping you grow without burning out!
            </p>
            <div
              onClick={() =>
                trackEvent({
                  category: "Footer",
                  action: "On_click",
                  label: "Bootcamp",
                  value: "footer_bootcamp",
                })
              }
              className={classes.purplebox}
            >
              <div className={classes.txtdiv}>
                <p className={classes.sub}>The 21st Century Bootcamp</p>
                <p className={classes.small}>
                  Your gateway to become future-ready in an AI-first world
                </p>
              </div>
              <ArrowUpRight
                color="white"
                size={28}
                rotate={-45}
                strokeWidth={3}
                className={classes.rotate}
                style={{
                  flexShrink: 0,
                }}
              />
            </div>
          </Link>
        </div>
        <div className={classes.middle}>
          <div className={classes.midlhs}>
            <p className={classes.part}>part of</p>
            <div className={classes.wework}>
              <Image src={wework} fill alt={staticAlt} />
            </div>
          </div>
          <div className={classes.icons}>
            {socials.map((value, index) => {
              return (
                <Link
                  target="_blank"
                  key={index}
                  className={`${classes.socialicons} link`}
                  href={value.link}
                  onClick={() =>
                    trackEvent({
                      category: "Footer",
                      action: "On_click",
                      label: value?.label,
                      value: value?.analvalue,
                    })
                  }
                >
                  <Image src={value.icon} fill alt={staticAlt} />
                </Link>
              );
            })}
          </div>
          <div className={classes.contacts}>
            {contacts.map((value, index) => {
              return (
                <Link
                  key={index}
                  href={value.link}
                  target={value.link.startsWith("http") ? "_blank" : "_self"}
                  className={classes.detail}
                >
                  <div className={classes.ico}>
                    <Image src={value.icon} fill alt={staticAlt} />
                  </div>
                  <p className={classes.dertail}>{value.detail}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <hr className={classes.rule} />
        <div className={classes.bottom}>
          <p className={classes.coptxtx}>
            © 2025 Rooobaroo.ai All Rights Reserved.
          </p>
          <div className={classes.subbottom}>
            <Link href={"terms-of-service"} className={`${classes.linkl} link`}>
              Terms of Service
            </Link>
            <Link href={"/privacy-policy"} className={`${classes.linkl} link`}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
