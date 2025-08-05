import React from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/container";
import Image from "next/image";

const HeroSection = () => {

  return (
    <Container variant="wide">
      <div className="flex lg:flex-row flex-col items-center h-screen gap-10">
        <section className="flex flex-col items-start justify-center z-10 relative">
          <Image src="/hero-arrow.svg" alt="growth-arrow" width={80} height={80} className="w-20 h-20 absolute -top-2 right-40" />
          <h1 className="text-[6rem] md:text-[10rem] font-montserrat-bold font-bold leading-[1] text-brand-gray">growth.</h1>
          <h1 className="text-[6rem] md:text-[10rem] font-montserrat-bold font-bold leading-[1] text-brand-gray">wellness.</h1>
          <Image src="/hero-flower.svg" alt="wellness-flower" width={80} height={80} className="w-20 h-20 absolute bottom-32 -left-20" />
          <Image src="/assets/images/white-stroke.png" alt="brush-stroke" width={300} height={100} className="self-end absolute bottom-20" />
          <p className="font-simplecakes text-5xl text-brand-tertiary transform -rotate-4 self-end relative bottom-10">
            do you have both?
          </p>
          <p className="text-lg">Take charge of your future, with purpose, career clarity, and holistic wellness, with tools to succeed in the 21st century</p>
        </section>
        <section className="text-white flex flex-col gap-4 z-10">
          <div className="flex gap-4">
            <div className="bg-brand-primary rounded-3xl p-4 min-w-28 w-30">
              <ArrowUpRight size={32} className="justify-self-end" />
              <h3 className="font-bold">Student Bootcamp</h3>
            </div>
            <div className="bg-brand-secondary rounded-3xl p-4 min-w-28 w-36">
              <ArrowUpRight size={32} className="justify-self-end" />
              <h3 className="font-bold">Organisation Consulting</h3>
            </div>
          </div>
          <div className="bg-brand-tertiary rounded-3xl p-5 min-w-28">
            <div className="flex gap-4 bg-white rounded-xl py-1 pl-4 text-black justify-between">
              <input type="email" placeholder="Enter your email" />
              <ArrowUpRight size={32} className="text-brand-tertiary" />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default HeroSection; 