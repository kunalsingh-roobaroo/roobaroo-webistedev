import React from "react";
import classes from "./Navbar.module.css";
import Image from "next/image";
import { caret, logo } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={classes.topwrapper}>
      <nav className={classes.nav}>
        <div className={classes.icon}>
          <Image src={logo} fill alt={staticAlt} />
        </div>
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
          <div className={classes.resource}>
            <p className={classes.navitems}>Resources</p>
            <Image src={caret} width={8} height={4} alt={staticAlt} />
          </div>
        </div>
        <button className={classes.btn}>Book a Meeting</button>
      </nav>
    </div>
  );
};

export default Navbar;
