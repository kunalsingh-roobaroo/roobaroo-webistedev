"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import classes from "./DetailedSchedulePage.module.css";
import { ChevronDown, CheckCircle2 } from "lucide-react";

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

                {/* Header Section */}
                <section className={classes.headerSection}>
                    <div className={classes.headerTitleBox}>
                        <h1 className={classes.pageTitle}>Program</h1>
                        <div className={classes.pageTitleScriptWrapper}>
                            <h1 className={classes.pageTitleScript}>Schedule</h1>
                            <div className={classes.bulbIcon}></div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className={classes.timelineSection}>
                    <div className={classes.timelinePath}></div>

                    {/* Day 1 */}
                    <div className={classes.dayBlock}>
                        <div className={classes.dayHeader}>
                            <h2 className={classes.dayNumber}>Day 1</h2>
                            <div className={classes.dayArrow}></div>
                        </div>
                        <div className={classes.dayTitleRow}>
                            <h3 className={classes.dayMainTitle}>The <span className={classes.textPurple}>Career Lab</span></h3>
                        </div>
                        <p className={classes.dayDesc}>Students experience the full journey of building a startup, from identifying a problem to creating, testing, & pitching a solution.</p>

                        <div className={classes.cardsRow}>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage1}></div>
                                <div className={classes.cardContent}>
                                    <p><span className={classes.textBlue}>Icebreaking activities</span> to build comfort and peer connections</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage2}></div>
                                <div className={classes.cardContent}>
                                    <p>Keynote on the Present & Future of <span className={classes.textPurple}>Career, Work, & Wellbeing</span></p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage3}></div>
                                <div className={classes.cardContent}>
                                    <p><span className={classes.textCoral}>Immersive Workshops</span> on self-awareness & career thinking</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardsRow2}>
                            <div className={`${classes.infoCardHorizontal} ${classes.mentorshipCard}`}>
                                <div className={classes.cardImage4}></div>
                                <div className={classes.cardContentHorizontal}>
                                    <p><span className={classes.textPurple}>1:1 Career Mentorship</span> with the Founder for personal guidance</p>
                                </div>
                            </div>
                            <div className={`${classes.infoCardHorizontal} ${classes.toolsCard}`}>
                                <div className={classes.toolsContent}>
                                    <p className={classes.toolsTitle}><span className={classes.textPurple}>Exclusive Career Tools:</span></p>
                                    <p className={classes.toolsScript}>Beyond ChatGPT, Google Search, or Wiki</p>
                                </div>
                                <ul className={classes.toolsList}>
                                    <li><CheckCircle2 size={16} className={classes.checkIcon} /> Career Studio to explore <strong>2,500+</strong> roles with real examples and context</li>
                                    <li><CheckCircle2 size={16} className={classes.checkIcon} /> <strong>AI Career Companion</strong> with insights from top founders, mentors & thinkers</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className={classes.dayBlock}>
                        <div className={classes.dayHeader}>
                            <h2 className={classes.dayNumber}>Day 2</h2>
                        </div>
                        <div className={classes.dayTitleRow}>
                            <h3 className={classes.dayMainTitle}><span className={classes.textBlue}>Emotional Resilience</span><br />& Communication Day</h3>
                        </div>
                        <p className={classes.dayDesc}>Learn to manage stress, emotions, and express yourself confidently in academics, relationships, and real life.</p>

                        <div className={classes.cardsRow}>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage5}></div>
                                <div className={classes.cardContent}>
                                    <p><span className={classes.textBlue}>Understand Emotions</span> & learn ways to bounce back from difficulties in life</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage6}></div>
                                <div className={classes.cardContent}>
                                    <p>Learn how to <span className={classes.textPurple}>manage stress</span>, manage anxiety, FOMO, and <span className={classes.textBlue}>peer pressure</span></p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage7}></div>
                                <div className={classes.cardContent}>
                                    <p><span className={classes.textCoral}>Practical guide</span> on time management, prioritization, and increasing productivity</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardsRow2}>
                            <div className={`${classes.infoCardHorizontal} ${classes.stageCard}`}>
                                <div className={classes.cardImage8}></div>
                                <div className={classes.cardContentHorizontal}>
                                    <p>Build a strong stage presence with <span className={classes.textPurple}>verbal & non-verbal communication</span></p>
                                </div>
                            </div>
                            <div className={`${classes.infoCardHorizontal} ${classes.tedCard}`}>
                                <div className={classes.cardContentHorizontalWrapper}>
                                    <p>Learn <span className={classes.textCoral}>Ted-style story telling</span> and how to present yourself with confidence</p>
                                    <div className={classes.cardImage9}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 3 */}
                    <div className={classes.dayBlock}>
                        <div className={classes.dayHeader}>
                            <h2 className={classes.dayNumber}>Day 3</h2>
                        </div>
                        <div className={classes.dayTitleRow}>
                            <h3 className={classes.dayMainTitle}><span className={classes.textCoral}>AI</span> Innovation Lab</h3>
                        </div>
                        <p className={classes.daySubtitle}><em>No Coding</em> <strong>required</strong></p>
                        <p className={classes.dayDesc}>Learn how to think clearly, break problems, and confidently use AI tools to build real solutions</p>

                        <div className={classes.cardsRowSmall}>
                            <div className={`${classes.infoCardHorizontal} ${classes.consultantCard}`}>
                                <div className={classes.cardImage10}></div>
                                <div className={classes.cardContentHorizontal}>
                                    <p>Learn how top consultants from <span className={classes.textPurple}>BCG, Bain, Mckinsey</span> solve problems</p>
                                </div>
                            </div>
                            <div className={`${classes.infoCardHorizontal} ${classes.interactiveCard}`}>
                                <div className={classes.cardImage11}></div>
                                <div className={classes.cardContentHorizontal}>
                                    <p><span className={classes.textCoral}>Interactive activities</span> on how to break complex problems and find solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardsRow2}>
                            <div className={classes.aiToolsBox}>
                                <p><strong>Master the best AI tools</strong> for productivity, creativity, and <span className={classes.textCoral}>problem solving</span></p>
                                <div className={classes.toolsLogos}></div>
                            </div>
                            <div className={classes.aiProjectsBox}>
                                <div className={classes.aiProjectsHeader}>
                                    <p><strong>Build live projects</strong> using AI for a <strong>standout profile</strong></p>
                                    <div className={classes.projectBadges}>
                                        <span>No coding required</span>
                                        <span>Beginner friendly</span>
                                    </div>
                                </div>
                                <div className={classes.projectCardsRow}>
                                    <div className={classes.miniProject}><div className={classes.miniProj1}></div><p>Create your own App</p></div>
                                    <div className={classes.miniProject}><div className={classes.miniProj2}></div><p>Create Short Film & AI Content</p></div>
                                    <div className={classes.miniProject}><div className={classes.miniProj3}></div><p>Create AI Agents to automate tasks</p></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 4 */}
                    <div className={classes.dayBlock}>
                        <div className={classes.dayHeader}>
                            <h2 className={classes.dayNumber}>Day 4</h2>
                        </div>
                        <div className={classes.dayTitleRow}>
                            <h3 className={classes.dayMainTitle}><span className={classes.textBlue}>Finance & Startup</span><br />Fundamentals Day</h3>
                        </div>
                        <p className={classes.dayDesc}>Build money confidence, smart habits, and a founder's mindset early — while you're still in school.</p>

                        <div className={classes.cardsRow}>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage12}></div>
                                <div className={classes.cardContent}>
                                    <p>Understand the <span className={classes.textCoral}>psychology of money</span> to build the right mindset</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage13}></div>
                                <div className={classes.cardContent}>
                                    <p><span className={classes.textPurple}>Live activities</span> on budgeting, saving, investing, and compounding</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage14}></div>
                                <div className={`${classes.cardContent} ${classes.founderBox}`}>
                                    <p>Learn how to find ideas, how to explore them, and <span className={classes.textBlue}>unlock founder mindset</span></p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardsRow2}>
                            <div className={`${classes.infoCardHorizontal} ${classes.earningCard}`}>
                                <div className={classes.cardImage15}></div>
                                <div className={classes.cardContentHorizontal}>
                                    <p>Understand ways to <span className={classes.textBlue}>start earning</span> while you are <span className={classes.textCoral}>still in school</span></p>
                                </div>
                            </div>
                            <div className={`${classes.infoCardHorizontal} ${classes.summitCard}`}>
                                <div className={classes.cardContentHorizontalWrapper}>
                                    <p>Case stories & insights from real stories and <span className={classes.textPurple}>global best practices</span></p>
                                    <div className={classes.cardImage16}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 5 */}
                    <div className={classes.dayBlock}>
                        <div className={classes.dayHeader}>
                            <h2 className={classes.dayNumber}>Day 5</h2>
                        </div>
                        <div className={classes.dayTitleRow}>
                            <h3 className={classes.dayMainTitle}><span className={classes.textPurple}>The Startup</span> Challenge</h3>
                        </div>
                        <p className={classes.dayDesc}>Experience the full journey of building a startup, from identifying a problem to creating, testing, and pitching a solution.</p>
                        <p className={classes.daySubtitleScript}>* no experience required * beginner friendly</p>

                        <div className={classes.cardsRow}>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage17}></div>
                                <div className={classes.cardContent}>
                                    <p><strong className={classes.textPurple}>Team Ideation</strong><br />Collaborate with peers and shape breakthrough ideas.</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage18}></div>
                                <div className={classes.cardContent}>
                                    <p><strong className={classes.textCoral}>Create Solutions</strong><br />Turn your concepts into basic products & solutions</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage19}></div>
                                <div className={classes.cardContent}>
                                    <p><strong className={classes.textPurpleDark}>Pitch & Prizes</strong><br />Present to experts with a chance to win support and rewards.</p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardsRow2}>
                            <div className={classes.incubationBox}>
                                <p><strong>Top startups get assistance for...</strong><br />Incorporation, Govt. Grants, Incubation</p>
                                <div className={classes.incubationLogos}></div>
                            </div>
                            <div className={classes.chequeBox}>
                                <div className={classes.chequeImage}></div>
                                <div className={classes.chequeContent}>
                                    <p className={classes.chequeTitle}>Cheque <strong>Prize</strong></p>
                                    <p>The best startup will get a cheque prize of</p>
                                    <div className={classes.chequeAmount}>INR 50,000/-</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 6 */}
                    <div className={classes.dayBlock}>
                        <div className={classes.dayHeader}>
                            <h2 className={classes.dayNumber}>Day 6</h2>
                            <div className={classes.rocketIconSmall}>🚀</div>
                        </div>
                        <div className={classes.dayTitleRow}>
                            <h3 className={classes.dayMainTitle}><span className={classes.textBlue}>Mindfulness</span> &<br />Digital Detox Day</h3>
                        </div>
                        <p className={classes.dayDesc}>Slow down, reset, and learn to use technology mindfully without burnout or distraction.</p>

                        <div className={classes.cardsRow}>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage20}></div>
                                <div className={classes.cardContent}>
                                    <p>Immerse in a <span className={classes.textPurple}>guided art activities</span> to let go of your past burden</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage21}></div>
                                <div className={classes.cardContent}>
                                    <p><span className={classes.textBlue}>Develop mindfulness and calm</span> to live with ease and balance</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage22}></div>
                                <div className={classes.cardContent}>
                                    <p>Live activities to reorganise your digital life for <span className={classes.textCoral}>focus and productivity</span></p>
                                </div>
                            </div>
                        </div>

                        <div className={classes.cardsRow}>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage23}></div>
                                <div className={classes.cardContent}>
                                    <p>Master tools to setup <span className={classes.textBlue}>healthier digital boundaries</span> for study & rest</p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage24}></div>
                                <div className={classes.cardContent}>
                                    <p>Live demonstration on radiations and the <span className={classes.textPurple}>health impacts of our phone</span></p>
                                </div>
                            </div>
                            <div className={classes.infoCard}>
                                <div className={classes.cardImage25}></div>
                                <div className={classes.cardContent}>
                                    <p>Learn about cyber safety, privacy, and <span className={classes.textCoral}>responsible internet usage</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certification Section */}
                    <div className={classes.certSectionWrapper}>
                        <div className={classes.certHeader}>
                            <span className={classes.certIcon}>🎯</span>
                            <h2>Certification & Recognition</h2>
                        </div>
                        <p className={classes.certSub}>A stamp of credibility for the skills and expertise you master here</p>

                        <div className={classes.certBox}>
                            <div className={classes.certLeft}>
                                <h3 className={classes.certTitleGold}>Completion Certificate</h3>
                                <div className={classes.certImageMockup}></div>
                                <p className={classes.certDescSmall}>A credible & verifiable proof that can also be added to LinkedIn</p>
                            </div>
                            <div className={classes.certRight}>
                                <div className={classes.certMiniCard}>
                                    <div className={classes.certMiniIconBlue}>✉️</div>
                                    <div>
                                        <h4 className={classes.certMiniTitleBlue}>Letter Of Recommendation</h4>
                                        <p className={classes.certMiniDesc}>Reserved upon request for exceptional participants from the Summer Camp</p>
                                    </div>
                                </div>
                                <div className={classes.certMiniCard}>
                                    <div className={classes.certMiniIconCoral}>📜</div>
                                    <div>
                                        <h4 className={classes.certMiniTitleCoral}>Startup Certificate</h4>
                                        <p className={classes.certMiniDesc}>Presented to members from all teams of the Startup Challenge</p>
                                    </div>
                                </div>
                                <div className={classes.certMiniCard}>
                                    <div className={classes.certMiniIconPurple}>🎤</div>
                                    <div>
                                        <h4 className={classes.certMiniTitlePurple}>Talent Show & Open Mic</h4>
                                        <p className={classes.certMiniDesc}>Share your talents & exchange learnings, takeaways, and parting thoughts from the Camp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
