'use client'

import React, { useRef, useEffect, useState } from 'react';
import Container from '@/components/ui/container';
import Image from 'next/image';

const steps = [
    {
        icon: '/images/torn-paper-doodle.png',
        text: "We've been sold growth & wellness in isolation — but life isn't split like that. It's messy, layered and integrated.",
        color: 'bg-brand-primary',
    },
    {
        icon: '/images/infinity-doodle.png',
        text: 'Roobaroo is about bringing balance back to the centre - where ambition & inner stability grow together.',
        color: 'bg-brand-secondary',
    },
    {
        icon: '/images/hand-doodle.png',
        text: 'We bridge this gap by integrating career growth and personal wellness into one unified journey.',
        color: 'bg-brand-tertiary',
    },
];

const GrowthSection = () => {
    const barRef = useRef(null);
    const [fill, setFill] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!barRef.current) return;
            const rect = barRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const start = rect.top - windowHeight * 0.2;
            const end = rect.bottom - windowHeight * 0.8;
            const total = rect.height - windowHeight * 0.4;
            let progress = (windowHeight - start) / (total || 1);
            progress = Math.max(0, Math.min(1, progress));
            setFill(progress);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Container>
            <div className='flex items-center justify-center'>
                <section className="flex flex-col justify-center py-8 bg-white">
                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="text-[3rem] md:text-[6rem] font-bold text-brand-gray leading-tight">We help you <span className="text-brand-tertiary">Grow</span></h1>
                        <p className="text-[3rem] md:text-[6rem] font-simplecakes text-brand-gray leading-tight">Without burning out!</p>
                    </div>
                    {/* Desktop grid timeline */}
                    <div className="hidden md:block w-full max-w-5xl mx-auto relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-black rounded-full" ref={barRef}>
                            <div
                                className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-tertiary rounded-full transition-all duration-500"
                                style={{ height: `${fill * 100}%`, top: 0 }}
                            />
                            {/* Dots */}
                            {steps.map((step, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 ${step.color} rounded-full border-2 border-white`}
                                    style={{ top: `${(idx / (steps.length - 1)) * 100}%` }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-4">
                            {steps.map((step, idx) => (
                                <div key={idx} className="grid grid-cols-3 items-center w-full min-h-[180px]">
                                    {/* Left: text or image */}
                                    {idx % 2 === 0 ? (
                                        <div className="flex flex-col items-end">
                                            <p className="text-gray-700 text-sm md:text-base max-w-xs text-center">{step.text}</p>
                                        </div>
                                    ) : (
                                        <div className="flex justify-end">
                                            <Image src={step.icon} alt="growth" width={172} height={172} />
                                        </div>
                                    )}
                                    {/* Center: bar/dot (empty, bar is absolutely positioned) */}
                                    <div />
                                    {/* Right: image or text */}
                                    {idx % 2 === 0 ? (
                                        <div className="flex justify-start">
                                            <Image src={step.icon} alt="growth" width={172} height={172} />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-start">
                                            <p className="text-gray-700 text-sm md:text-base max-w-xs text-center">{step.text}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    );
};

export default GrowthSection; 