"use client";
import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { caret, cross, hamburger } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import Link from "next/link";
import { logo } from "../../../public/assets/images";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className={classes.topwrapper}>
      <nav className={`${classes.nav} ${isOpen ? classes.navopn : ""} `}>
        <div className={classes.topper}>
          <Link href={"/"} className={classes.icon}>
            <Image src={logo} fill alt={staticAlt} />
          </Link>
          <div
            className={classes.hamburgerIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={isOpen ? cross : hamburger}
              alt="menu"
              width={18}
              height={15}
            />
          </div>
        </div>
        {isOpen && <hr className={classes.ruler} />}

        {isOpen && (
          <div className={`${classes.menu} `}>
            <Link href={"#"} className={`${classes.navitems} link`}>
              Problem
            </Link>
            <Link href={"#"} className={`${classes.navitems} link`}>
              Framework
            </Link>
            <Link href={"#"} className={`${classes.navitems} link`}>
              Team
            </Link>
            <Link href={"/story"} className={`${classes.navitems} link`}>
              Story
            </Link>
            <Link href={"#"} className={`${classes.navitems} link`}>
              Community
            </Link>
            <div className={classes.resource}>
              <p className={classes.navitems}>Resources</p>

              <Image
                src={caret}
                width={8}
                height={4}
                alt={staticAlt}
                className={classes.caret}
              />
            </div>
            <button className={classes.mobbtn}>Book a Meeting</button>
          </div>
        )}

        <div className={classes.links}>
          <Link href={"#"} className={`${classes.navitems} link`}>
            Problem
          </Link>
          <Link href={"#"} className={`${classes.navitems} link`}>
            Framework
          </Link>
          <Link href={"#"} className={`${classes.navitems} link`}>
            Team
          </Link>
          <Link href={"/story"} className={`${classes.navitems} link`}>
            Story
          </Link>
          <Link href={"#"} className={`${classes.navitems} link`}>
            Community
          </Link>
          <div
            onMouseEnter={() => setIsDropdownOpen(true)}
     
            className={classes.resource}
          >
            <p className={classes.navitems}>Resources</p>
            <Image src={caret} width={8} height={4} alt={staticAlt} />
            {isDropdownOpen && (
              <div        onMouseLeave={() => setIsDropdownOpen(false)} className={classes.dropdown}>
                <Link href="/" className={classes.navitems}>
                  Social Media
                </Link>
                <Link href="/blogs" className={classes.navitems}>
                  Blogs
                </Link>
                <Link href="/" className={classes.navitems}>
                 Newsletter
                </Link>
                <Link href="/" className={classes.navitems}>
                  For Experts
                </Link>
                <Link href="/" className={classes.navitems}>
                  For Influencers
                </Link>
                <Link href="/" className={classes.navitems}>
                  For Press
                </Link>
              </div>
            )}
          </div>
        </div>
        <button className={classes.btn}>Book a Meeting</button>
      </nav>
    </div>
  );
};

export default Navbar;
