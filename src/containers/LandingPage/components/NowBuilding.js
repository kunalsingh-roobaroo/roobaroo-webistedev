import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";

const images = [
    { src: "/images/team/bhaskar.png", bg: "bg-brand-secondary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-primary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-tertiary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-secondary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-tertiary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-primary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-secondary" },
    { src: "/images/team/bhaskar.png", bg: "bg-brand-tertiary" },
];

const NUM_COLS = 6;
const IMAGES_PER_COL = 10;

const roles = [
    "Educators & Psychologists",
    "Tech & Product Experts",
    "Creators & Top 1% Professionals",
    "Exam Toppers & Career Coaches",
    "Startup Founders & Design Thinkers",
];

export default function NowBuilding() {
    // Build columns: each column is an array of images (repeating as needed)
    const columns = Array.from({ length: NUM_COLS }, (_, colIdx) =>
        Array.from({ length: IMAGES_PER_COL }, (_, rowIdx) => {
            const imgIdx = (colIdx * IMAGES_PER_COL + rowIdx) % images.length;
            return images[imgIdx];
        })
    );

    return (
        <Container>
            <section className="max-w-full flex flex-col items-center py-16 bg-white relative overflow-x-hidden">
                {/* Headline */}
                <div className="text-center mb-2">
                    <span className="block text-3xl md:text-4xl font-simplecakes text-brand-primary">Now building Roobaroo</span>
                    <span className="block text-2xl md:text-3xl text-brand-secondary mt-1">to help you grow without burning out</span>
                </div>
                {/* Subheadline */}
                <div className="text-4xl md:text-5xl font-bold text-center mt-8 mb-4">
                    with a <span className="font-simplecakes">dream team</span> of <span className="text-brand-gray"></span>
                </div>
                {/* Team grid: column-based */}
                <div className="w-full max-w-5xl rounded-3xl max-h-[300px] overflow-hidden border border-brand-tertiary/40 bg-white p-4 md:p-8 flex flex-col items-center">
                    <div className="flex w-full justify-center gap-4">
                        {columns.map((col, colIdx) => (
                            <div
                                key={colIdx}
                                className={`flex flex-col gap-4 ${colIdx % 2 === 0 ? "animate-float-up " : "animate-float-down"}`}
                            >
                                {col.map((img, rowIdx) => (
                                    <div
                                        key={rowIdx}
                                        className={`rounded-2xl overflow-hidden flex items-center justify-center aspect-square w-32 md:w-36 ${img.bg}`}
                                    >
                                        <Image src={img.src} alt={`Team member ${colIdx * IMAGES_PER_COL + rowIdx + 1}`} width={160} height={160} className="object-cover w-full h-full" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full max-w-5xl rounded-3xl p-4 md:p-8 flex flex-col items-center">
                    {/* Roles row */}
                    <div className="flex flex-wrap justify-between items-center w-full mt-8 text-lg md:text-xl font-medium text-center">
                        {roles.map((role, i) => (
                            <div key={i} className="flex-1 px-2 md:px-4 border-r last:border-none border-gray-300">
                                {role}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    );
}
