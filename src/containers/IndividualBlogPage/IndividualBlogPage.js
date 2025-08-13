"use client";
import React from "react";
import classes from "./IndividualModule.module.css";
import Link from "next/link";
import Image from "next/image";
import { backarrow } from "../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import { blogthumbnail } from "../../../public/assets/images";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const IndividualBlogPage = () => {
  return (
    <>
      <Navbar />
      <section className={classes.container}>
        <div className={classes.box}>
          <Link className={classes.back} href={"/blogs"}>
            <div className={classes.backarrow}>
              <Image src={backarrow} fill alt={staticAlt} />
            </div>
            <p className={classes.backbt}>Back</p>
          </Link>
          <div className={classes.titlesection}>
            <h1 className={classes.title}>
              Why Young Voices Matter: we Build Safe Spaces for Expression
            </h1>
            <div className={classes.thumbnail}>
              <Image src={blogthumbnail} fill alt={staticAlt} />
            </div>
            <div className={classes.subtop}>
              <p className={classes.subttx}>
                JULY 10 | FOUNDING TEAM | 5 MIN READ
              </p>
              <CopyBtn />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default IndividualBlogPage;
