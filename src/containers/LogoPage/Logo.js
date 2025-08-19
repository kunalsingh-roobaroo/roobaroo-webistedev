import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import LogoHero from "./components/HeroSection/LogoHero";
import classes from "./Logo.module.css";
import DownloadBtn from "@/components/Downloadbtn/DownloadBtn";
import MainSection from "./components/MainSection/MainSection";
const LogoPage = () => {
  return (
    <>
      <Navbar />
      <LogoHero />
      <MainSection />
      <Footer />
    </>
  );
};

export default LogoPage;
