"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import classes from "./DetailedSchedulePage.module.css";
import { ChevronDown, CheckCircle2, Sparkles, Microscope, BarChart2 } from "lucide-react";

export default function DetailedSchedulePage() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "Who can apply for the Wavepay credit card?", a: "Anyone 18 years or older with a valid government-issued ID and a stable source of income can apply." },
        { q: "How does the 1% cashback work?", a: "You earn 1% cashback on all eligible purchases." },
        { q: "Is the Wavepay card physical or digital?", a: "Both options are available." },
        { q: "How long does the approval process take?", a: "Usually within 5-7 business days." },
        { q: "How can I manage my Wavepay card?", a: "Through our mobile application." },
    ];

    return (
        <>
            <Navbar />
            <main className={classes.main}>


                {/* Why do you need this Camp */}
                <section className={classes.section}>
                    <div className={classes.whyHeader}>
                        <h2 className={classes.whyTitle}>Why do you need <span className={classes.whyScript}>this Camp?</span></h2>
                        <div className={classes.whyIntroTextWrapper}>
                            <div className={classes.whyIntroRow}>
                                <span className={classes.whyBurstLeft}></span>
                                If you are in school, you will likely <img src="/assets/images/Graduate-bootcamp.svg" alt="graduate" className={classes.graduateIconSvg} /> from college after <span className={classes.yearText}>2030</span>
                            </div>
                            <div className={classes.whyIntroRow}>
                                But the <span className={classes.circleText}>world</span> of work and wellbeing has already <span className={classes.wavyText}>transformed</span>
                                <span className={classes.whyNodesRight}></span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.whyBlocksGrid}>
                        <div className={classes.whyCircle1}></div>
                        <div className={classes.whyCircle2}></div>
                        {/* Card 1 */}
                        <div className={`${classes.whyCard} ${classes.whyBorderPurple}`}>
                            <div className={classes.whyCardLeft}>
                                <img src="/assets/images/asset-card1.svg" alt="card1" className={classes.whyCardIconBoxImg} style={{ left: "20px" }} />
                                <h3 className={classes.whyCardHeading}>The World Changed.<br /><span className={classes.svgWrapper}>Education<img src="/assets/images/Vector 1580.svg" className={classes.underlineSvg} alt="" /></span> Didn't.</h3>
                                <p className={classes.whyCardBody}>
                                    Employers now prioritise skills such as <span className={classes.textPink}>AI literacy</span>, <span className={classes.textPurpleMedium}>critical thinking</span>, <span className={classes.textBlueCyan}>communication</span>, and <span className={classes.textPink}>real-world exposure</span>
                                </p>
                            </div>
                            <div className={classes.whyCardDivider}></div>
                            <div className={classes.whyCardRight}>
                                <div className={classes.whyStatBlock}>
                                    <div className={classes.whyStatNumberPurple}>96%</div>
                                    <p className={classes.whyStatLabel}>of employers in India priorities hiring <span className={classes.svgWrapper}>AI-skilled talent<img src="/assets/images/Vector 562.svg" className={classes.wavySvg} alt="" /></span></p>
                                </div>
                                <div className={classes.whyStatBlock}>
                                    <div className={classes.whyStatNumberBlue}>84%</div>
                                    <p className={classes.whyStatLabel}>of Indian hiring managers prefer candidates with <strong>digital portfolios</strong></p>
                                </div>
                                <img src="/assets/images/blue - bloom.svg" alt="bloom" className={classes.blueBloomTopRight} />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={`${classes.whyCard} ${classes.whyBorderPink}`}>
                            <div className={classes.whyCardLeft}>
                                <img src="/assets/images/leaves-bootcamp.svg" alt="leaves" className={classes.whyCardIconBoxImg} style={{ transform: "rotate(60deg)", left: "-10px", top: "15px" }} />
                                <h3 className={classes.whyCardHeading}>Students Aren't Lost.<br /><span className={classes.svgWrapper}>The Path Is.<img src="/assets/images/Vector 1582.svg" className={classes.circleSvg} alt="" /></span></h3>
                                <p className={classes.whyCardBody}>
                                    Career clarity is not about counselling but an open ecosystem that enables <span className={classes.textPurpleDark}>self-awareness & exploration.</span>
                                </p>
                            </div>
                            <div className={classes.whyCardDivider}></div>
                            <div className={classes.whyCardRight}>
                                <div className={classes.whyStatBlock}>
                                    <div className={classes.whyStatNumberPink}>53%</div>
                                    <p className={classes.whyStatLabel}>of students find it hard to get a job in their <span className={classes.strikethroughText}>preferred role</span></p>
                                </div>
                                <div className={classes.whyStatBlock}>
                                    <div className={classes.whyStatNumberPink}>70%</div>
                                    <p className={classes.whyStatLabel}>of students feel their <strong>school doesn't help</strong> them explore careers</p>
                                </div>
                                <div className={classes.squigglyTopRight}>〰️</div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={`${classes.whyCard} ${classes.whyBorderPurpleDark}`}>
                            <div className={classes.whyCardLeft}>
                                <img src="/assets/images/recycle-bootcamp.svg" alt="recycle" className={classes.whyCardIconBoxImg} style={{ left: "10px" }} />
                                <h3 className={classes.whyCardHeading}>Success Without<br />Stability Is Breaking<br />Students</h3>
                                <p className={classes.whyCardBody}>
                                    Alongside career uncertainty is a growing wellbeing crisis. <span className={classes.textPink}>Academic performance</span> no longer guarantees <span className={classes.textPurpleDark}>emotional health</span>
                                    <img src="/assets/images/recycle-bootcamp.svg" alt="recycle" className={classes.recycleIconSvg} />
                                </p>
                            </div>
                            <div className={classes.whyCardDivider}></div>
                            <div className={classes.whyCardRightDetails}>
                                <div className={classes.alertListItem}>
                                    <img src="/assets/images/alert-bootcamp.svg" alt="alert" className={classes.alertIconTriangleImg} />
                                    <div className={classes.alertText}><strong>1 in 4</strong> toppers report feeling emotionally disconnected</div>
                                </div>
                                <div className={classes.alertListItem}>
                                    <img src="/assets/images/mobile-bootcamp.svg" alt="mobile" className={classes.alertIconPhoneImg} />
                                    <div className={classes.alertText}><strong>83%</strong> of Gen Z students struggle with phone addiction</div>
                                </div>
                                <div className={classes.greyAlertBox}>
                                    Student <span className={classes.textBlue}>suicide rates are rising</span> at twice the pace of the general population
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.quoteWrapper}>
                        <div className={classes.quoteBox}>
                            <img src="/assets/images/quotation bootcamp.svg" alt="quote" className={classes.bottomQuoteIcon} />
                            <p>In <strong className={classes.textPink}>2026</strong>, Students need more than isolated workshops or surface-level programs.</p>
                        </div>
                        <div className={classes.quoteLine + ' ' + classes.quoteLinePurple}></div>
                        <div className={classes.quoteLine + ' ' + classes.quoteLineCoral}></div>
                    </div>
                </section>

                {/* Lived Experience */}
                <section className={classes.livedExpOuterSection}>
                    <div className={classes.livedExpHeader}>
                        <h2 className={classes.livedExpTitle}>
                            This Program Was Built From <br />
                            <span className={`${classes.livedExpScript} ${classes.livedExpScriptCoral}`}>Lived Experience <img src="/assets/images/clock-svg lived experience.svg" alt="Clock" className={classes.clockIconImg} /></span>
                        </h2>
                    </div>
                    <div className={classes.livedExpCardsWrapper}>
                        {/* Card 1: Blue */}
                        <div className={classes.livedExpBlueCard}>
                            <div className={classes.blueCardTop}>
                                <img src="/assets/images/ellipse-bhaskar.svg" alt="" className={classes.bhaskarEllipse} />
                                <img src="/assets/images/bhaskar-lived experience.svg" alt="Bhaskar Singhania" className={classes.founderImage} />
                                <div className={classes.founderInfo}>
                                    <h3 className={classes.founderName}>Bhaskar<br />Singhania</h3>
                                    <p className={classes.founderTitle}>Founder & CEO, Roobaroo.ai</p>
                                    <div className={classes.socialIconsRow}>
                                        <img src="/assets/images/instagram-bootcamp.svg" alt="Instagram" className={classes.socialIconImg} />
                                        <img src="/assets/images/linkedin-bootcamp.svg" alt="LinkedIn" className={classes.socialIconImg} />
                                        <img src="/assets/images/linktree-bootcamp.svg" alt="Linktree" className={classes.socialIconImg} />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.blueCardBottom}>
                                <div className={classes.blueCardQuote}>
                                    <img src="/assets/images/coral inverted comma bootcamp.svg" alt="Quote" className={classes.quoteBootcampIcon} />
                                    <p>" I've seen both<br />sides of the system —<br /><strong>what works, and what<br />quietly fails students</strong> "</p>
                                </div>
                                <div className={classes.blueCardMentor}>
                                    <p className={classes.mentorTitle}>Mentor at :</p>
                                    <div className={classes.mentorLogosGrid}>
                                        <img src="/assets/images/mesa school bootcamp.svg" alt="Mesa School" className={classes.mentorLogoImg} />
                                        <img src="/assets/images/niti-aayog bootcamp.svg" alt="NITI Aayog" className={classes.mentorLogoImg} />
                                        <img src="/assets/images/master's union bootcamp.svg" alt="Masters Union" className={classes.mentorLogoImg} />
                                        <img src="/assets/images/iit-kharagpur bootcamp.svg" alt="IIT Kharagpur" className={classes.mentorLogoImg} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Purple */}
                        <div className={classes.livedExpPurpleCard}>
                            <div className={classes.purpleCardTop}>
                                <div className={classes.alumniHeader}>
                                    <img src="/assets/logos/iitkgp-black.svg" alt="IIT Kharagpur" className={classes.alumniIconImg} />
                                    Alumni of IIT Kharagpur
                                </div>
                                <div className={classes.alumniLogosRow}>
                                    <img src="/assets/logos/stanford.png" alt="Stanford" className={classes.alumniStanfordImg} />
                                    <span className={classes.alumniDivider}>|</span>
                                    <img src="/assets/images/google-for-startups-bootcamp.svg" alt="Google for Startups" className={classes.alumniGoogleImg} />
                                </div>
                            </div>
                            <div className={classes.purpleCardBottom}>
                                <div className={classes.purpleCardImageContainer}>
                                    <img src="/assets/images/bhaskar-bootcamp image.svg" alt="Classroom" className={classes.purpleImg} />
                                    <img src="/assets/images/Badge Verification - bhaskar.svg" alt="Badge" className={classes.purpleBadge} />
                                </div>
                                <div className={classes.purpleCardStats}>
                                    <div className={classes.statsContent}>
                                        <div className={classes.statsTopRow}>
                                            <h3>1000+</h3>
                                            <img src="/assets/BootCamp/badge.svg" alt="Verified" className={classes.statsBadgeIcon} />
                                        </div>
                                        <p>Students &<br />professionals<br />Coached</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={classes.builtWithOuterWrapper}>
                    {/* Built with students */}
                    <div className={classes.builtWithCardWrapper}>
                        <img src="/assets/images/built by students.svg" alt="Built With Students" className={classes.builtWithSvg} />
                    </div>
                </section>

                {/* Guiding Principles Section */}
                <section className={classes.guidingOuterWrapper}>
                    <div className={classes.guidingHeader}>
                        <h2 className={classes.guidingTitle}>
                            The Guiding Principles of
                        </h2>
                        <div className={classes.guidingScript}>our program</div>
                        <p className={classes.guidingSub}>
                            A hands-on, beginner-friendly learning led by real-world experts with focus on projects,
                            questions, and real growth.
                        </p>
                    </div>

                    <div className={classes.guidingCardsWrapper}>
                        {[
                            {
                                icon: "🌟",
                                titleBlack1: "Learn from Those",
                                titleColor: "Who've Lived It",
                                titleBlack2: "",
                                colorClass: classes.textCoral,
                                desc: <>Sessions are led by real-world experts who share<br />lived experiences, failures, and decisions — not<br />just textbook knowledge without exposure.</>,
                                img: "/assets/images/Rectangle 43914.svg"
                            },
                            {
                                icon: "🚀",
                                titleColor: "Learning by Doing,",
                                titleBlack2: "Not Listening",
                                titleBlack1: "",
                                colorClass: classes.textPurple,
                                desc: <>Live projects, hands-on activities, and open<br />discussions replace passive lectures and<br />slide-heavy classrooms.</>,
                                img: "/assets/images/Rectangle 43914 (1).svg"
                            },
                            {
                                icon: "🛠️",
                                titleColor: "Skills That Matter",
                                titleBlack2: "Across Any Path",
                                titleBlack1: "",
                                colorClass: classes.textBlue,
                                desc: <>We focus on future-proof skills that matter<br />whether a student chooses a job,<br />entrepreneurship, research, or higher education.</>,
                                img: "/assets/images/Rectangle 43914 (2).svg"
                            },
                            {
                                icon: "📊",
                                titleBlack1: "Growth Beyond",
                                titleColor: "Just Careers",
                                titleBlack2: "",
                                colorClass: classes.textCoral,
                                desc: <>The program integrates career clarity, skill-<br />building, and wellbeing — because success<br />without balance doesn't last.</>,
                                img: "/assets/images/Rectangle 43914 (3).svg"
                            },
                            {
                                icon: "🎯",
                                titleColor: "Outcomes",
                                titleBlack2: "Over Information",
                                titleBlack1: "",
                                colorClass: classes.textPurple,
                                desc: <>We go beyond knowledge to help students build<br />strong profiles, real capabilities, and confidence<br />for the 21st century.</>,
                                img: "/assets/images/Rectangle 43914 (4).svg"
                            },
                            {
                                icon: "🤝",
                                titleColor: "Access Students",
                                titleBlack2: "Can't Get Alone",
                                titleBlack1: "",
                                colorClass: classes.textBlue,
                                desc: <>Students gain exposure to opportunities, tools,<br />and networks that are otherwise difficult for<br />families to unlock independently.</>,
                                img: "/assets/images/Rectangle 43914 (5).svg"
                            }
                        ].map((card, index) => (
                            <div key={index} className={classes.guidingCard}>
                                <div className={classes.guidingCardText}>
                                    <div className={classes.guidingCardIcon}>{card.icon}</div>
                                    <h3 className={classes.guidingCardTitle}>
                                        {card.titleBlack1 && <span>{card.titleBlack1}<br /></span>}
                                        <span className={card.colorClass}>{card.titleColor}</span>
                                        {card.titleBlack2 && <><br /><span>{card.titleBlack2}</span></>}
                                    </h3>
                                    <p className={classes.guidingCardDesc}>{card.desc}</p>
                                </div>
                                <img src={card.img} alt={`Guiding Principle ${index + 1}`} className={classes.guidingCardImg} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* What Students Walk Away With */}
                <section className={classes.walkAwayWrapper}>
                    <div className={classes.walkAwayHeader}>
                        <h2 className={classes.walkAwayTitle}>What Students Walk Away With</h2>
                        <p className={classes.walkAwaySub}>More than learning - clarity, capability, and confidence for the years ahead</p>
                    </div>
                    <div className={classes.walkAwayGrid}>
                        <div className={classes.walkCard}>
                            <div className={classes.walkCardHeader}>
                                <div className={classes.walkIconPurple}><Microscope size={20} /></div>
                                <h3 className={classes.walkCardTitle}>Clarity About Careers & the<br /><span className={classes.textPurpleDark}>Future of Work</span></h3>
                            </div>
                            <ul className={classes.walkCardList}>
                                <li>Exposure to how careers are changing and what employers actually look for.</li>
                                <li>Self-awareness and direction around career, course, and college choices.</li>
                            </ul>
                        </div>

                        <div className={classes.walkCard}>
                            <div className={classes.walkCardHeader}>
                                <div className={classes.walkIconPink}><BarChart2 size={20} /></div>
                                <h3 className={classes.walkCardTitle}>Core Skills for <span className={classes.textPink}>College, Work,</span><br /><span className={classes.textPink}>and Life</span></h3>
                            </div>
                            <ul className={classes.walkCardList}>
                                <li>Exposure to how careers are changing and what employers actually look for.</li>
                                <li>Self-awareness and direction around career, course, and college choices.</li>
                            </ul>
                        </div>

                        <div className={classes.walkCard}>
                            <div className={classes.walkCardHeader}>
                                <div className={classes.walkIconBlue}><Sparkles size={20} /></div>
                                <h3 className={classes.walkCardTitle}>Create a <span className={classes.textBlue}>Standout Profile,</span><br /><span className={classes.textBlue}>Not Just Certificates</span></h3>
                            </div>
                            <ul className={classes.walkCardList}>
                                <li>Entrepreneurial mindset and capability to build startup ideas.</li>
                                <li>Confidence in using AI to learn and build real projects.</li>
                                <li>Building a profile that supports strong college applications and internships.</li>
                            </ul>
                        </div>

                        <div className={classes.walkCard}>
                            <div className={classes.walkCardHeader}>
                                <div className={classes.walkIconPurpleDark}><BarChart2 size={20} /></div>
                                <h3 className={classes.walkCardTitle}>Stability, Focus & Lifelong<br /><span className={classes.textPurpleDark}>Life Skills</span></h3>
                            </div>
                            <ul className={classes.walkCardList}>
                                <li>Emotional resilience and a bounce-back mindset</li>
                                <li>Tools to reduce mobile and screen addiction and improve focus</li>
                                <li>Practical money skills for lifelong financial wellbeing</li>
                            </ul>
                        </div>
                    </div>
                </section>



            </main>
            <Footer />
        </>
    );
}
