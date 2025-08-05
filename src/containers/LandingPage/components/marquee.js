import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Container from "@/components/ui/container";

const MarqueeSection = () => {
  return (
    <>
      <Marquee className="-rotate-6 p-8">
        <div className="min-h-42 max-w-112 mx-3 rounded-xl shadow-card border-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/images/ncrb-logo.png"
              alt="Startup Failure"
              width={100}
              height={100}
              className="w-12 h-12 rounded-full border-1 border-gray-300"
            />
            <div>
              <p className="text-2xl font-bold">NCRB</p>
              <p className="italic">@NCRBHQ</p>
            </div>
          </div>
          <h1 className="text-lg font-bold capitalize">
            Student suicide at peak.
          </h1>
          <p className="italic capitalize">
            Student suicide rate has taken over the general population suicide
            rate
          </p>
        </div>
        <div className="min-h-42 max-w-112 mx-3 rounded-xl shadow-card border-card p-4">
          <div className="flex justify-center gap-1 flex-col">
            <h1 className="text-brand-secondary text-2xl font-bold">
              Startup Failure Epidemic
            </h1>
            <p className="italic">
              &gt;90% of startups in India fail, mostly due to lack of clarity,
              resilience, or support.
            </p>
            <p className="italic text-brand-secondary opacity-50">
              Source: Startup India
            </p>
          </div>
        </div>
        <div className="min-h-42 max-w-112 mx-3 rounded-xl shadow-card border-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/images/tatva-logo.png"
              alt="Startup Failure"
              width={100}
              height={100}
              className="w-12 h-12 rounded-full border-1 border-gray-300"
            />
            <div>
              <p className="text-2xl font-bold capitalize">The Tatva</p>
              <p className="italic">@NCRBHQ</p>
            </div>
          </div>
          <h1 className="text-lg font-bold capitalize">
            Social Media Suicide:
          </h1>
          <p className="italic capitalize">
            24-year-old influencer dies after losing followers, showing mental
            health impacts of online validation.
          </p>
        </div>
        <div className="min-h-42 max-w-112 mx-3 rounded-xl shadow-card border-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/images/ijhsr-logo.png"
              alt="Startup Failure"
              width={100}
              height={100}
              className="w-12 h-12 rounded-full border-1 border-gray-300"
            />
            <div>
              <p className="text-2xl font-bold capitalize">IJHCR</p>
              <p className="italic">@NCRBHQ</p>
            </div>
          </div>
          <h1 className="text-lg font-bold capitalize">
            Back Pain Epidemic at Work
          </h1>
          <p className="italic capitalize">
            76% of Indian professionals in desk jobs report chronic lower back
            pain.
          </p>
        </div>
      </Marquee>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-left relative">
          <div className="absolute right-0 w-30 h-30 bg-brand-primary/30 rounded-3xl z-0"></div>
          <div className="absolute right-60 w-30 h-30 bg-brand-secondary/30 rounded-3xl z-0"></div>
          <div>
            <p>Silent Pains to Lost Dreams</p>
            <h1 className="text-[3rem] md:text-[6rem] font-bold text-brand-gray leading-tight">
              This is the{" "}
              <span className="text-brand-tertiary italic">India</span>
            </h1>
            <h1 className="text-[3rem] md:text-[6rem] font-bold text-brand-gray leading-tight">
              we refuse to ignore.
            </h1>
          </div>
          <div className="bg-brand-tertiary rounded-3xl p-4 text-white min-w-28 w-30">
            <ArrowUpRight size={32} className="justify-self-end" />
            <h3 className="font-bold capitalize mr-8">know more</h3>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MarqueeSection;
