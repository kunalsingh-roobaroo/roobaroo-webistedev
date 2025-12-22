"use client";
import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { caret, cross, hamburger } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import Link from "next/link";
import { logo } from "../../../public/assets/images";
import HashLink from "@/lib/HashLink";
import { trackEvent } from "@/utils/ga4";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 450) return; // ✅ only run on mobile

    let lastScrollY = window.scrollY;
    let timeout;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true); // scrolling down → hide
      } else {
        setHidden(false); // scrolling up → show
      }
      lastScrollY = window.scrollY;

      clearTimeout(timeout);
      timeout = setTimeout(() => setHidden(false), 200); // stop scrolling → show
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div
      onClick={() => {
        if (isOpen) setIsOpen(false);
      }}
      className={`${classes.topwrapper} ${
        hidden && typeof window !== "undefined" && window.innerWidth <= 450
          ? classes.hidden
          : ""
      } ${isOpen === true ? classes.height : ""}`}
    >
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
            <HashLink hash="#bootcamp" className={classes.navitems}>
              Bootcamp{" "}
            </HashLink>
            <HashLink hash="#b2b" className={classes.navitems}>
              Consulting
            </HashLink>
            <HashLink hash="#team" className={classes.navitems}>
              Team
            </HashLink>
            <Link href={"/our-story"} className={`${classes.navitems} `}>
              Story
            </Link>
            <Link
              href="https://www.instagram.com/roobaroo.ai/"
              className={classes.navitems}
            >
              Community
            </Link>
            <Link href="https://www.challenge.roobaroo.ai/" target="_blank" className={classes.navitems}>
              Challenges
            </Link>

            <Link
              href={"https://calendly.com/bhaskar-roobaroo/30min"}
              target="_blank"
              className={`${classes.mobbtn} link`}
              onClick={() =>
                trackEvent({
                  category: "Navigation",
                  action: "On_click",
                  label: "Book Meeting",
                  value: "bookameet_calendly",
                })
              }
            >
              Book a Meeting
            </Link>
          </div>
        )}

        <div className={classes.links}>
          <HashLink hash="#bootcamp" className={classes.navitems}>
            Bootcamp{" "}
          </HashLink>
          <HashLink hash="#b2b" className={classes.navitems}>
            Consulting
          </HashLink>
          <HashLink hash="#team" className={classes.navitems}>
            Team
          </HashLink>
          <Link href={"/our-story"} className={`${classes.navitems} `}>
            Story
          </Link>
          <Link
            href="https://www.instagram.com/roobaroo.ai/"
            className={classes.navitems}
          >
            Community
          </Link>
          <Link href="https://www.challenge.roobaroo.ai/" target="_blank" className={classes.navitems}>
            Challenges
          </Link>
          {/* <div
            onMouseEnter={() => setIsDropdownOpen(true)}
            className={classes.resource}
          >
            <p className={classes.navitems}>Resources</p>
            <Image src={caret} width={8} height={4} alt={staticAlt} />
            {isDropdownOpen && (
              <div
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={classes.dropdown}
              >
                <Link href="#bootcamp" className={classes.navitems}>
                  Bootcamp{" "}
                </Link>
                <Link href="#newsletter" className={classes.navitems}>
                  Consulting
                </Link>
                <Link href="#team" className={classes.navitems}>
                  Team
                </Link>
                <Link href={"/story"} className={`${classes.navitems} `}>
                  Story
                </Link>
                <Link href="/brandkit" className={classes.navitems}>
                  Community
                </Link>
                <Link href="/blogs" className={classes.navitems}>
                  Blogs
                </Link>
              </div>
            )}
          </div> */}
        </div>
        <Link
          href={"https://calendly.com/bhaskar-roobaroo/30min"}
          target="_blank"
          className={`${classes.btn} link`}
          onClick={() =>
            trackEvent({
              category: "Navigation",
              action: "On_click",
              label: "Book Meeting",
              value: "bookameet_calendly",
            })
          }
        >
          Book a Meeting
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
