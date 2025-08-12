import React from "react";
import Marquee from "react-fast-marquee";
import Container from "@/components/ui/container";

// Define the pill data structure with border classes directly



export default function GrowthAndWellness() {
  return (
    <Container>
      <section className="max-w-full flex flex-col items-center py-16">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-2">
          <span className="text-brand-primary">Growth</span>
          <span className="text-brand-gray"> + </span>
          <span className="text-brand-secondary">Wellness</span>
          <span className="text-brand-gray"> = </span>
        </h1>
        {/* Script subtitle */}
        <div className="text-4xl md:text-6xl font-simplecakes text-center mb-6 mt-2 text-brand-gray">
          The Roobaroo Way
        </div>
        {/* Paragraph with colored/underlined/marked words */}
        <p className="max-w-3xl text-center text-lg md:text-xl mb-8 mx-auto font-thin">
          We are building thoughtful programs that integrate{" "}
          <span className="underline decoration-brand-primary">
            career clarity
          </span>
          , job readiness,{" "}
          <span className="underline decoration-brand-tertiary">
            startup building
          </span>
          , &amp;{" "}
          <span className="underline decoration-brand-tertiary">
            AI fluency
          </span>{" "}
          for the 21st century with{" "}
          <span className="text-brand-primary underline">
            emotional resilience
          </span>
          , <span className="text-brand-secondary">digital health</span>, &amp;
          a <span className="text-brand-tertiary">self-coach mindset</span> — so
          students, professionals, creators, &amp; founders can pursue success
          with stability.
        </p>
        {/* Marquee pill buttons with fade overlays */}
        <div className="relative w-full max-w-5xl mb-12">
          {/* Left fade */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
            style={{
              background: "linear-gradient(to right, white 80%, transparent)",
            }}
          />
          {/* Right fade */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
            style={{
              background: "linear-gradient(to left, white 80%, transparent)",
            }}
          />
          <Marquee
            gradient={false}
            speed={30}
            className="overflow-visible"
            pauseOnHover={false}
          >
            <div className="flex gap-4 px-4">
              {seamlessPillData.map(({ text, borderClass }, i) => (
                <span
                  key={i}
                  className={`px-6 py-2 rounded-full border-2 font-thin ${borderClass}`}
                >
                  {text}
                </span>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* Outlined box with 'so no more' and brush-stroke text */}
      <div className="relative w-full mt-8 m-4">
        <div className="p-12 md:p-16 flex flex-col md:flex-row items-center bg-[url('/brush-border-2.svg')] bg-contain bg-no-repeat bg-center min-h-[250px] justify-center">
          <span className="text-6xl md:text-7xl font-simplecakes font-thin text-black whitespace-nowrap">
            so no
            <br />
            more
          </span>
          <span className="flex-1 flex items-center justify-center">
            <span className="relative inline-block">
              <span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-10 md:h-16 bg-brand-tertiary/60 rounded-full -z-10"
                style={{ filter: "blur(2px)" }}
              ></span>
              <span className="text-3xl md:text-5xl font-simplecakes text-white px-4">
                inertia for starting up
              </span>
            </span>
          </span>
        </div>
      </div>
    </Container>
  );
}
