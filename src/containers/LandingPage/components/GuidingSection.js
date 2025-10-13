import React from "react";
import { ArrowUpRight } from "lucide-react";
import Dash from "@/components/svgs/dash";
import Circles from "@/components/svgs/circles";
import Container from "@/components/ui/container";
import Image from "next/image";

const createDashedGrid = (strokeColor = '#e5e7eb', strokeWidth = 1, dashArray = '10,10', gridSize = 120) => {
    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' width='${gridSize}' height='${gridSize}'>
        <defs>
          <pattern id='dashed-grid' width='${gridSize}' height='${gridSize}' patternUnits='userSpaceOnUse'>
            <path d='M 0 0 L 0 ${gridSize} M 0 0 L ${gridSize} 0' 
                  stroke='${strokeColor}' 
                  stroke-width='${strokeWidth}' 
                  stroke-dasharray='${dashArray}' 
                  fill='none'/>
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#dashed-grid)'/>
      </svg>
    `;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

const GuidingSection = () => {
    return (
        <div className="max-w-full h-screen relative">
            {/* Background with dashed grid and fade */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: createDashedGrid('#E3E5E5', 3, '10,10', 120),
                    maskImage: 'linear-gradient(to bottom, transparent 0%, white 96px, white calc(100% - 96px), transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, white 96px, white calc(100% - 96px), transparent 100%)'
                }}
            ></div>

            {/* Content layer - unaffected by fade */}
            <Container>
                <div className="relative z-10 flex flex-col gap-1 text-center">
                    <h1 className="text-[3rem] md:text-[5rem] font-bold capitalize text-brand-gray">Our guiding</h1>
                    <div className="flex gap-8 items-center justify-center">
                        <Dash />
                        <p className="text-[3rem] md:text-[6rem] text-brand-tertiary font-simplecakes">Funda</p>
                        <Dash />
                    </div>
                    <Circles className="absolute right-0" />
                </div>

                <div className="flex items-center z-10 relative w-[70%] mx-auto">
                    {/* Quadrant section: 75% */}
                    <section className="w-3/4 flex justify-center">
                        <div className="relative w-[600px] h-[600px] mx-auto">
                            {/* Axes */}
                            <Image
                                src="/chart-x.svg"
                                alt="guiding-1"
                                width={500}
                                height={10}
                                className="absolute top-0 left-0 w-full h-full"
                            />
                            <Image
                                src="/chart-y.svg"
                                alt="guiding-2"
                                width={10}
                                height={500}
                                className="absolute top-0 left-0 w-full h-full"
                            />
                            {/* Quadrant Texts */}
                            {/* Top Left Quadrant */}
                            <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 text-right">
                                <p>workoholism</p>
                                <p>Anxiety despite success</p>
                            </div>
                            {/* Top Right Quadrant */}
                            <div className="absolute left-3/4 top-1/4 -translate-x-1/2 -translate-y-1/2 text-brand-tertiary text-left">
                                <p>Centered</p>
                                <p>Future-ready</p>
                            </div>
                            {/* Bottom Left Quadrant */}
                            <div className="absolute left-1/4 top-3/4 -translate-x-1/2 -translate-y-1/2 text-right">
                                <p>Withdrawal</p>
                                <p>Helplessness</p>
                            </div>
                            {/* Bottom Right Quadrant */}
                            <div className="absolute left-3/4 top-3/4 -translate-x-1/2 -translate-y-1/2 text-left">
                                <p>Stagnation</p>
                                <p>Wellness without Direction</p>
                            </div>
                        </div>
                    </section>
                    {/* Know more section: 25% */}
                    <section className="w-1/4 flex flex-col items-center justify-center">
                        <p>This is where you wanna be</p>
                        <div className="bg-brand-tertiary rounded-3xl p-4 text-white min-w-28 w-30">
                            <ArrowUpRight size={32} className="justify-self-end" />
                            <h3 className="font-bold capitalize mr-8">know more</h3>
                        </div>
                    </section>
                </div>
            </Container>
        </div>
    );
};

export default GuidingSection;