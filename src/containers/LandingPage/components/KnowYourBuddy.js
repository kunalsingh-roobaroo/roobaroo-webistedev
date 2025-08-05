import React from "react";
import Image from "next/image";
import Container from "@/components/ui/container";


export default function KnowYourBuddy() {
    return (
        <Container>
            {/* Headline */}
            <h1 className="flex gap-4 text-5xl md:text-7xl font-bold ml-10 mb-2 justify-start items-center text-brand-gray">
                Know your <span className="font-simplecakes text-[96px] font-light">Buddy</span>
                <Image src="/arrow-down.svg" alt="Arrow Down" width={36} height={36} className="top-16 relative" />
            </h1>
            <section className="max-w-full flex flex-col items-center py-16">
                {/* Main content row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mt-8">
                    {/* Image and overlays */}
                    <div className="relative w-[260px] h-[320px] flex-shrink-0 flex items-center justify-center">
                        {/* Colored overlays */}
                        <div className="absolute w-[180px] h-[180px] bg-brand-tertiary/20 rounded-2xl left-0 top-0 -z-10" />
                        <div className="absolute w-[180px] h-[180px] bg-brand-primary/20 rounded-2xl right-0 top-10 -z-10" />
                        <div className="absolute w-[180px] h-[180px] bg-brand-secondary/20 rounded-2xl left-10 bottom-0 -z-10" />
                        {/* Profile image */}
                        <Image src="/images/team/bhaskar.png" alt="Bhaskar Singhania" width={260} height={320} className="rounded-2xl object-cover" />
                        {/* Career Coach brush label */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-24px]">
                            <span className="bg-brand-primary text-white font-simplecakes text-xl px-6 py-1 rounded-full shadow-lg" style={{ boxShadow: '0 4px 16px #27AAE7aa' }}>Career Coach</span>
                        </div>
                    </div>
                    {/* Info and badges */}
                    <div className="flex-1 flex flex-col items-center md:items-start gap-2">
                        <div className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight">Bhaskar<br />Singhania</div>
                        <div className="relative flex flex-wrap gap-2 items-center mt-2 mb-2">
                            <span className="absolute bottom-8 -left-4 bg-brand-tertiary text-white text-xs px-2 py-1 rounded-md -rotate-8">Attended</span>
                            <Image src="/logos/google-for-startups.svg" alt="LinkedIn" width={160} height={24} />
                            <Image src="/logos/stanford-seed.svg" alt="LinkedIn" width={160} height={24} />
                        </div>
                        <div className="flex gap-4 items-center mb-2">
                            {/* Placeholder logos */}
                            <Image src="/logos/iitkgp-black.svg" alt="IIT Kharagpur" width={80} height={80} />
                            <Image src="/logos/rishihood.svg" alt="Rishihood University" width={80} height={80} />
                            {/* Social links */}
                            <div className="relative px-8 py-4 flex flex-col gap-1 items-center mt-2 mb-2 min-h-[160px] min-w-[280px] justify-center">
                                {/* Brush border background */}
                                <div className="absolute inset-0 bg-[url('/brush-border.svg')] bg-contain bg-no-repeat bg-center opacity-100"></div>
                                {/* Content overlay */}
                                <div className="relative z-10 flex flex-col gap-1 items-center">
                                    <span className="font-simplecakes text-3xl">Know more</span>
                                    <div className="flex gap-4">
                                        <a href="#" className="text-brand-primary text-2xl">
                                            <Image src="/logos/linkedin.svg" alt="LinkedIn" width={48} height={48} />
                                        </a>
                                        <a href="#" className="text-brand-secondary text-2xl">
                                            <Image src="/logos/instagram.svg" alt="Instagram" width={48} height={48} />
                                        </a>
                                        <a href="#" className="text-green-600 text-2xl">
                                            <Image src="/logos/linktree.svg" alt="Linktree" width={48} height={48} />
                                        </a>
                                    </div>
                                </div>
                                <span className="absolute -bottom-2 -right-2 bg-brand-tertiary text-white text-xs px-2 py-1 rounded-md -rotate-10 z-20">Click here</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Worked with and stats row */}
                <div className="flex flex-col md:flex-row gap-6 mt-12 m-6 relative max-w-5xl">
                    <div>
                        {/* Worked with logos */}
                        <div className="bg-brand-secondary text-white rounded-2xl p-6 flex-1 min-w-[260px] flex flex-col gap-2">
                            <p className="font-bold mb-2">Worked with:</p>
                            <div className="flex flex-wrap gap-4 items-center">
                                {/* Placeholder logos */}
                                <Image src="/logos/metadome.svg" alt="Metadome" width={48} height={32} />
                                <Image src="/logos/iitkgp-white.svg" alt="IIT Kharagpur" width={48} height={32} />
                                <Image src="/logos/MoHUA.svg" alt="MoHUA" width={48} height={32} />
                                <Image src="/logos/dron-study.svg" alt="DrmsStudy" width={48} height={32} />
                                <Image src="/logos/cppr.svg" alt="PRR" width={48} height={32} />
                            </div>
                        </div>

                        {/* Invited Talks and Testimonial */}
                        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mt-6">
                            {/* Invited Talks */}
                            <div className="flex flex-col gap-4">
                                <div className="relative p-8 flex-1 flex flex-col gap-6 min-h-[280px] min-w-[400px] items-center justify-center">
                                    {/* Brush border background */}
                                    <div className="absolute inset-0 bg-[url('/brush-border.svg')] bg-contain bg-no-repeat bg-center opacity-100"></div>
                                    {/* Content overlay */}
                                    <div className="relative z-10 flex flex-col gap-6 items-center justify-center">
                                        <div className="font-simplecakes text-4xl text-center">Invited Talks</div>
                                        <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
                                            {/* Top Row */}
                                            <div className="flex flex-col items-center gap-2">
                                                <Image src="/logos/favcy.svg" alt="Favcy" width={120} height={80} />
                                            </div>
                                            <div className="flex flex-col items-center gap-2">
                                                <Image src="/logos/masters-union.svg" alt="Masters Union" width={120} height={80} />
                                            </div>
                                            {/* Bottom Row */}
                                            <div className="flex flex-col items-center gap-2">
                                                <Image src="/logos/istart-rajasthan.svg" alt="IStart" width={120} height={80} />
                                            </div>
                                            <div className="flex flex-col items-center gap-2">
                                                <Image src="/logos/techno-billion.svg" alt="Techno Billion AI" width={180} height={80} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Testimonial */}
                            <div className="bg-brand-tertiary text-white rounded-2xl p-6 flex-1 min-w-[220px] flex flex-col gap-2 relative">
                                <Image src="/quotes.svg" alt="Testimonial Quotes" width={48} height={32} />
                                <div className="absolute left-4 top-2 text-6xl text-brand-tertiary opacity-30 select-none">“</div>
                                <div className="text-base italic">Bhaskar was there when I was at the lowest in life and he stayed through the entire time and helped me bounce back.</div>
                                <div className="text-right text-sm font-semibold mt-2">-Chandana, 24<br />Working Professional</div>
                                <div className="absolute right-4 bottom-2 text-6xl text-brand-tertiary opacity-30 select-none">”</div>
                            </div>
                        </div>
                    </div>
                    {/* Stats */}
                    <div className="bg-brand-primary text-white rounded-2xl p-6 flex-1 min-w-[220px] flex flex-col gap-4 items-left justify-center">
                        <div className="text-3xl font-extrabold">600+</div>
                        <div className="text-base font-semibold">Students And Professionals Coached.</div>
                        <div className="text-2xl font-extrabold">5/5</div>
                        <div className="text-base font-semibold">Rating on topmate+<br />Top-Rated Expert 2024</div>
                        <div className="text-2xl font-extrabold">$10M+</div>
                        <div className="text-base font-semibold">Fundraising Experience -<br />Bootstrapped to Series A</div>
                    </div>

                </div>
            </section>
        </Container>
    );
}
