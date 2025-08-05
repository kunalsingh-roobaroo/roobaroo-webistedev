import React from "react";
import Marquee from "react-fast-marquee";

const pillData = [
    { text: "Retreats", color: "brand-secondary" },
    { text: "1:1 Coaching", color: "brand-primary" },
    { text: "Actionable Tools", color: "black" },
    { text: "Masterclasses", color: "brand-tertiary" },
    { text: "Bootcamps", color: "brand-secondary" },
    { text: "Curated Cohorts", color: "brand-primary" },
    { text: "B2B Consulting", color: "brand-tertiary" },
];

export default function Section4() {
    return (
        <section className="w-full flex flex-col items-center py-16">
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-2">
                <span className="text-brand-primary">Growth</span>
                <span className="text-black"> + </span>
                <span className="text-brand-secondary">Wellness</span>
                <span className="text-black"> = </span>
            </h1>
            {/* Script subtitle */}
            <div className="text-4xl md:text-6xl font-simplecakes text-center mb-6 mt-2">
                The Roobaroo Way
            </div>
            {/* Paragraph with colored/underlined/marked words */}
            <p className="max-w-3xl text-center text-lg md:text-xl mb-8 mx-auto">
                We are building thoughtful programs that integrate <span className="underline decoration-brand-primary">career clarity</span>, job readiness, <span className="underline decoration-brand-tertiary">startup building</span>, &amp; <span className="underline decoration-brand-tertiary">AI fluency</span> for the 21st century with <span className="text-brand-primary underline">emotional resilience</span>, <span className="text-brand-secondary">digital health</span>, &amp; a <span className="text-brand-tertiary">self-coach mindset</span> — so students, professionals, creators, &amp; founders can pursue success with stability.
            </p>
            {/* Marquee pill buttons with fade overlays */}
            <div className="relative w-full max-w-4xl mb-12">
                {/* Left fade */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{ background: "linear-gradient(to right, white 80%, transparent)" }} />
                {/* Right fade */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{ background: "linear-gradient(to left, white 80%, transparent)" }} />
                <Marquee gradient={false} speed={40} className="overflow-visible">
                    <div className="flex gap-4 px-8">
                        {pillData.map(({ text, color }, i) => (
                            <span
                                key={i}
                                className={`px-6 py-2 rounded-full border-2 border-${color} text-${color} bg-white font-semibold`}
                            >
                                {text}
                            </span>
                        ))}
                    </div>
                </Marquee>
            </div>
            {/* Outlined box with 'so no more' and brush-stroke text */}
            <div className="relative w-full max-w-4xl mt-8">
                <div className="border-4 border-brand-tertiary rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-4 md:gap-8" style={{ borderImage: 'linear-gradient(90deg, #5B6EE1 0%, #E15B8C 100%) 1' }}>
                    <span className="text-6xl md:text-7xl font-bold text-black whitespace-nowrap">so no<br />more</span>
                    <span className="flex-1 flex items-center justify-center">
                        <span className="relative inline-block">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-10 md:h-16 bg-brand-tertiary/60 rounded-full -z-10" style={{ filter: 'blur(2px)' }}></span>
                            <span className="text-3xl md:text-5xl font-simplecakes text-white px-4">inertia for starting up</span>
                        </span>
                    </span>
                </div>
            </div>
        </section>
    );
}
