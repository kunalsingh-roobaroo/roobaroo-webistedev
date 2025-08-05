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
const Footer = () => {
  const gridItems = [
    { name: "The Problem Space", link: "/" },
    { name: "Book a Meeting", link: "/" },
    { name: "Our Guiding Principle", link: "/" },
    { name: "Company Brochure", link: "/" },
    { name: "Who We Serve", link: "/" },
    { name: "Our Dream Team", link: "/" },
    { name: "The Future We See", link: "/" },
  ];
  const socials = [
    {
      icon: linktree,
      link: "/",
    },
    {
      icon: instagram,
      link: "/",
    },
    {
      icon: linkedin,
      link: "/",
    },
    {
      icon: x,
      link: "/",
    },
  ];
  const contacts = [
    {
      icon: mail,
      detail: "contact@roobaroo.ai",
    },
    {
      icon: call,
      detail: "+91 90399 74840",
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
                  className={`${classes.gridItem} link`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={classes.rhs}>
            <p className={classes.headtxt}>
              Helping your grow without burning out!
            </p>
            <NewsLetter />
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
            <Link href={"/"} className={`${classes.linkl} link`}>
              terms of service
            </Link>
            <Link href={"/"} className={`${classes.linkl} link`}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
