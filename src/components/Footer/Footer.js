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
const Footer = () => {
  const gridItems = [
    { name: "Organisation Consulting", link: "#" },
    {
      name: "What’s Roobaroo.ai?",
      link: "https://drive.google.com/file/d/1Il8CZBei-JceUYO33BKW-qhptZtFD2ME/view",
    },
    { name: "Student Bootcamp", link: "#bootcamp" },
    {
      name: "The Problem",
      link: "https://www.instagram.com/roobaroo.ai/",
    },
    { name: "Our Brand Story", link: "/story" },
    {
      name: "Guiding Principle",
      link: "https://drive.google.com/file/d/1Bn1KPr1FO64-J5Auld-D70FpD-bRypXU/view?usp=drive_link",
    },
    { name: "Know the Team", link: "#team" },
    { name: "Brand Identity", link: "/brandkit" },
    { name: "Talk to Us", link: "https://calendly.com/bhaskar-roobaroo/30min" },
    { name: "Read our Blog", link: "/blogs" },
  ];
  const socials = [
    {
      icon: linktree,
      link: "https://linktr.ee/roobaroo.ai",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/roobaroo.ai/",
    },
    {
      icon: linkedin,
      link: "https://www.linkedin.com/company/roobaroo-ai",
    },
    {
      icon: x,
      link: "https://x.com/roobaroo_ai",
    },
  ];
  const contacts = [
    {
      icon: mail,
      detail: "contact@roobaroo.ai",
    },
    {
      icon: call,
      detail: "9211611614",
    },
    {
      icon: location,
      detail: "WeWork, DLF 2 Horizon Centre, Gurgaon- 122002",
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
            <div className={classes.whitelogo}>
              <Image src={whitelogo} fill alt={staticAlt} />
            </div>
            <div className={classes.gridSection}>
              {gridItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`${classes.gridItem} `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={classes.rhs}>
            <p className={classes.headtxt}>
              Helping you grow without burning out!
            </p>
            <div className={classes.purplebox}>
              <div className={classes.txtdiv}>
                <p className={classes.sub}>The 21st Century Bootcamp</p>
                <p className={classes.small}>
                  Your child&apos;s gateway to become future-ready in an
                  evolving AI world
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
          </div>
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
                >
                  <Image src={value.icon} fill alt={staticAlt} />
                </Link>
              );
            })}
          </div>
          <div className={classes.contacts}>
            {contacts.map((value, index) => {
              return (
                <div key={index} className={classes.detail}>
                  <div className={classes.ico}>
                    <Image src={value.icon} fill alt={staticAlt} />
                  </div>
                  <p className={classes.dertail}>{value.detail}</p>
                </div>
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
