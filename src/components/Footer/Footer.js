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
    { name: "Our Brand Story", link: "/brandstory" },
    { name: "Collaborate With Us", link: "/" },
    { name: "Newsletter Archives", link: "/" },
    {
      name: "Join Our Community",
      link: "https://www.instagram.com/roobaroo.ai/",
    },
    { name: "Our Brand Identity", link: "/" },
    { name: "Press & Media", link: "/" },
    { name: "Read Our Blog", link: "/blogs" },
    { name: "Talk To Us", link: "/" },
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
                <p className={classes.sub}>Check out where you stand</p>
                <p className={classes.small}>
                  Take our assessment to know more!
                </p>
              </div>
              <ArrowUpRight
                color="white"
                size={28}
                rotate={-45}
                strokeWidth={3}
                className={classes.rotate}
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
