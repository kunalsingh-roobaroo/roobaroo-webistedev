"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import GuidelinesHero from "./HeroSection/GuidelinesHero";
import GuideLinesMainSection from "./MainSection/MainSection";
import classes from "./UsageGuidelines.module.css";
import BackToTopBtn from "@/components/BackToTop/BackToTopBtn";
const UsageGuidelines = () => {
  const containerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerBottom =
        containerRef.current.offsetTop + containerRef.current.offsetHeight;
      const scrollBottom = window.scrollY + window.innerHeight;

      setIsAtBottom(scrollBottom >= containerBottom - 10); // near the end
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar />
      <GuidelinesHero />
      <div ref={containerRef}  className={classes.container}>
        <div
          style={{
            position: isAtBottom ? "absolute" : "fixed",
            // bottom: "20px",
            // right: "20px",
          }}
          className={classes.backtotop}
        >
          <BackToTopBtn />
        </div>
        <GuideLinesMainSection />
      </div>

      <Footer />
    </>
  );
};

export default UsageGuidelines;
