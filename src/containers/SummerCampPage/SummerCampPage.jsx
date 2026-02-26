"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  ChevronDown,
  BarChart2,
  Microscope,
  Rocket,
  Leaf,
  Brain,
  CircleDollarSign,
  Sparkles,
  User,
  Share2,
  Zap,
  GraduationCap,
  Users,
  Home,
  Star,
  Paperclip,
  CheckCircle,
  CalendarDays,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";
import { trackEvent } from "@/utils/ga4";
import classes from "./SummerCampPage.module.css";

export default function SummerCampPage() {
  const [batch, setBatch] = useState(1);
  const [faqOpen, setFaqOpen] = useState(null);

  const tags = [
    "Career Lab",
    "Startup Competition",
    "AI Innovation Lab",
    "Wellbeing Workshops",
    "Expert-led",
    "Beginner-Friendly",
  ];

  const exploreCards = [
    {
      title: "Internships & Competition",
      items: [
        "Startup Competition - ₹50,000 prize",
        "Research opportunity",
        "Change with startups like Digi & roobaroo.ai",
      ],
      bg: "blue",
    },
    {
      title: "Build with skills that actually matter",
      items: ["Public Speaking", "Critical Thinking", "Financial Literacy", "AI Literacy"],
      bg: "green",
    },
    {
      title: "No more lack of Career Guidance",
      items: [
        "Career Workshop & Access to Tools for Career Exploration",
        "Connect with students from top colleges",
        "Direct 1:1 Mentorship with the Founder",
      ],
      bg: "pink",
    },
    {
      title: "Strong Foundation for Wellbeing",
      items: ["Emotional", "Digital Balance", "Mental Strength"],
      bg: "white",
    },
    {
      title: "Create stand out profile",
      items: [
        "Projects: Website, Agents, Application (no coding)",
        "Path to publishing your first book",
        "Assistance towards your own Ted Talk",
      ],
      bg: "white",
    },
    {
      title: "Mentorship by experts from",
      sub: "Wharton, NYU, Google, Amazon, PWC",
      bg: "pink",
    },
  ];

  const whyBlocks = [
    {
      heading: "The World Changed. Education Didn't.",
      body: "Employers now prioritise skills such as AI literacy, critical thinking, communication, and real-world exposure.",
      stat1: "96%",
      stat1Label: "of employers in India prioritise hiring AI-skilled talent",
      stat2: "84%",
      stat2Label: "of Indian hiring managers prefer candidates with digital portfolios",
      border: "purple",
    },
    {
      heading: "Students Aren't Lost. The Path Is.",
      body: "Career clarity is not about counselling but an open ecosystem that enables self-awareness & exploration.",
      stat1: "53%",
      stat1Label: "of students find it hard to get a job in their preferred role",
      stat2: "70%",
      stat2Label: "of students feel their school doesn't help them explore careers",
      border: "pink",
    },
    {
      heading: "Success Without Stability Is Breaking Students",
      body: "Alongside career uncertainty is a growing wellbeing crisis. Academic performance no longer guarantees emotional health.",
      points: [
        "1 in 4 toppers report feeling emotionally disconnected",
        "83% of Gen Z students struggle with phone addiction",
        "Student suicide rates are rising at twice the pace of the general population",
      ],
      border: "blue",
    },
  ];

  const walkAwayCards = [
    {
      title: "Clarity About Careers & the Future of Work",
      items: [
        "Exposure to how careers are changing and what employers actually look for.",
        "Self-awareness and direction around career, course, and college choices.",
      ],
    },
    {
      title: "Core Skills for College, Work, and Life",
      items: [
        "Exposure to how careers are changing and what employers actually look for.",
        "Self-awareness & direction around career, course, and college choices.",
      ],
    },
    {
      title: "Create a Standout Profile, Not Just Certificates",
      items: [
        "Entrepreneurial mindset and capability to build startup ideas.",
        "Confidence in using AI to learn and build real projects.",
        "Building a profile that supports strong college applications and internships.",
      ],
    },
    {
      title: "Stability, Focus & Lifelong Life Skills",
      items: [
        "Emotional resilience and a bounce-back mindset",
        "Tools to reduce mobile and screen addiction and improve focus",
        "Practical money skills for lifelong financial wellbeing",
      ],
    },
  ];

  const experts = [
    { name: "Sangam Mishra", roles: "Ex-Physics Wallah, Leading Launch Ops", aff: "Ex-Vedanta, IIT Kharagpur" },
    { name: "Ashish Mittal", roles: "Founder, DigiGo | Ex-Justdial, Deloitte", aff: "AI & Tech Expert" },
    { name: "Isha Jain", roles: "SEBI Registered Finance Expert", aff: "Trainer & Speaker, Founder, Soch Finance" },
  ];

  const scheduleDays = [
    { day: 1, title: "The Career Lab", desc: "Students experience the full journey of building a startup from identifying a problem to creating, testing, & pitching a solution." },
    { day: 2, title: "Emotional Intelligence & Communication Day", desc: "Learn to manage emotions, and express yourself confidently in academics, relationships, and real life." },
    { day: 3, title: "AI Innovation Lab", desc: "Learn how to think clearly, break problems, and confidently use AI tools to build real solutions.", note: "*No Coding required" },
    { day: 4, title: "Finance & Startup Fundamentals Day", desc: "Build money confidence, smart habits, and a founder's mindset early — while you're still in school." },
    { day: 5, title: "The Startup Challenge", desc: "Experience the full journey of building a startup, from identifying a problem to creating, testing, and pitching a solution.", note: "*beginner friendly" },
    { day: 6, title: "Mindfulness & Digital Detox Day", desc: "Slow down, reset, and learn to use technology mindfully without burnout or distraction." },
  ];

  const admissionSteps = [
    { num: 1, title: "Apply Online", desc: "Reserve your spot with basic details, batch preference, and booking fees (INR 2499)" },
    { num: 2, title: "Personal Interview", desc: "Our team will reach out within 48 hours to understand the student's motivation" },
    { num: 3, title: "Final Selection", desc: "Receive final confirmation along with request for the remaining fees" },
  ];

  const pricingTiers = [
    { name: "EARLY BIRD (TILL 31ST MARCH)", price: "INR 41,999", highlight: true },
    { name: "STANDARD (FROM 1ST APRIL)", price: "INR 47,999", highlight: false },
    { name: "GROUP DISCOUNT (MIN 4 STUDENTS)", price: "INR 5,999 (PER PERSON)", highlight: false },
    { name: "RESIDENTIAL (OPTION AVAILABLE)", price: "INR 2,500 (PER DAY)", highlight: false },
  ];

  const beyondCards = [
    { text: "Create an exclusive alumni group for students who enroll with us", border: "purple" },
    { text: "Keep sharing resources & inviting them for online/offline events", border: "blue" },
    { text: "Even support them with their doubts after the program to the extent possible", border: "coral" },
  ];

  const faqItems = [
    { q: "Who can apply for the program?", a: "Students in Grade 8–12 (and gap year students) from any stream can apply. No prior experience required." },
    { q: "Where is the camp held?", a: "The camp is held at IIT Delhi. A residential option is also available." },
    { q: "What is included in the fee?", a: "Fees include lunch, snacks, and other program-related materials." },
    { q: "How do I reserve a spot?", a: "Click Reserve Now, choose your batch, and complete the booking fee (INR 2499). Our team will contact you within 48 hours." },
  ];

  return (
    <>
      <Navbar />
      <main className={classes.main}>
        {/* Hero + Batch Card */}
        <div className={classes.heroWrapper}>
          <div className={classes.bigcircle}></div>
          <section className={classes.heroSection}>
            <div className={classes.heroGrid}>
              <div className={classes.heroLeft}>
                <div className={classes.heroHeading}>
                  <img src="/assets/images/arrow-bootcamp.svg" alt="Arrow" className={classes.heroArrow} />
                  <img src="/assets/images/leaves-bootcamp.svg" alt="Leaves" className={classes.heroLeaves} />
                  <h1 className={classes.heroTitle1}>The 21st Century</h1>
                  <h1 className={classes.heroTitle2}>Summer Camp</h1>
                  <p className={classes.heroSub}>Not just another camp</p>
                </div>
                <p className={classes.heroDesc}>
                  Your gateway to build the right <strong>skills</strong>, <strong>portfolio</strong> and <strong>confidence</strong> to stand out in the AI world.
                </p>
                <div className={classes.tags}>
                  {tags.map((t, i) => (
                    <span key={i} className={classes.tag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={classes.batchCard}>
                <div className={classes.batchTabs}>
                  <button
                    className={batch === 1 ? classes.batchTabActive : classes.batchTab}
                    onClick={() => setBatch(1)}
                  >
                    Batch 1 : 2-7 Jun
                  </button>
                  <button
                    className={batch === 2 ? classes.batchTabActive : classes.batchTab}
                    onClick={() => setBatch(2)}
                  >
                    Batch 2 : 23-28 Jun
                  </button>
                </div>
                <div className={classes.batchMeta}>
                  <span className={classes.batchMetaItem}>Location: IIT Delhi</span>
                  <span className={classes.batchMetaItemPurple}>For: Grade 8-12</span>
                </div>
                <div className={classes.sixDays}>
                  <div className={classes.sixDaysBadge}>6</div>
                  <div className={classes.sixDaysTextCol}>
                    <span className={classes.sixDaysTitle}>Days</span>
                    <span className={classes.sixDaysSub}>for a life long transformational <span className={classes.sixDaysScript}>journey</span></span>
                  </div>
                </div>
                <p className={classes.residential}>*Residential Option Available</p>
                <p className={classes.seats}>Limited seats only!</p>
                <div className={classes.cardActions}>
                  <Link href="#schedule" className={classes.btnOutline}>Camp Schedule</Link>
                  <Link
                    href="https://calendly.com/bhaskar-roobaroo/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.btnPrimary}
                    onClick={() => trackEvent({ category: "Summer Camp", action: "Click", label: "Reserve Now" })}
                  >
                    Reserve Now <ArrowUpRight size={18} />
                  </Link>
                </div>
                <Link href="#" className={classes.downloadBrochure}>
                  <Download size={16} /> Download brochure
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Partners */}
        <section className={classes.partnersSection}>
          <div className={classes.partnersFrame}>
            <p className={classes.partnersBadge}>Designed by experts from:</p>
            <div className={classes.marqueeContainer}>
              <div className={classes.marqueeTrack}>
                <img src="/assets/images/experts-bootcamp.svg" alt="Experts Logos" className={classes.expertSvg} />
                <img src="/assets/images/experts-bootcamp.svg" alt="Experts Logos" className={classes.expertSvg} />
              </div>
            </div>
          </div>
        </section>



        {/* Explore What Your Summer Could Become */}
        <section className={classes.section}>
          <div className={classes.exploreHeaderWrapper}>
            <div>
              <h2 className={classes.exploreTitle}>
                Explore What Your <br />
                Summer <span className={classes.exploreScript}>Could Become</span>
              </h2>
              <p className={classes.sectionSub}>A world of possibilities beyond your imagination.</p>
            </div>
            <div className={classes.rocketDoodleWrapper}>
              <img src="/assets/images/Rocket doodle 1.svg" alt="Rocket doodle" className={classes.rocketDoodle} />
            </div>
          </div>
          <div className={classes.exploreGrid}>
            {/* Column 1 */}
            <div className={classes.exploreCol}>
              <div className={`${classes.card} ${classes.cardBlue}`}>
                <h3 className={classes.cardTitle}>Internships & Competition</h3>
                <div className={classes.cardContentWrapper}>
                  <div className={classes.iconBox}>
                    <div className={classes.iconWrapperBlue}><BarChart2 size={16} /></div>
                    <div>
                      <p className={classes.iconBoxTitle}>Startup Competition - ₹50,000 prize</p>
                      <p className={classes.iconBoxSub}>(No experience needed)</p>
                    </div>
                  </div>
                  <div className={classes.iconBox}>
                    <div className={classes.iconWrapperBlue}><Microscope size={16} /></div>
                    <div>
                      <p className={classes.iconBoxTitle}>Research Internship Opportunity</p>
                      <p className={classes.iconBoxSub}>with <strong>IIT Kharagpur</strong></p>
                    </div>
                  </div>
                  <div className={classes.iconBox}>
                    <div className={classes.iconWrapperBlue}><Rocket size={16} /></div>
                    <div>
                      <p className={classes.iconBoxTitle}>Chance to work with startups like :</p>
                      <div className={classes.logoRowSmall}><span>Digi</span><span>roobaroo.ai</span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.card} ${classes.cardWhite}`}>
                <h3 className={classes.cardTitle}>Strong Foundation for Wellbeing</h3>
                <div className={classes.textGrid}>
                  <div className={classes.textItem}>❤️ Emotional Resilience</div>
                  <div className={classes.textItem}>📱 Digital Balance</div>
                  <div className={classes.textItem}>🧘‍♀️ Mental Strength</div>
                  <div className={classes.textItem}>⏱️ Mindfulness</div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className={classes.exploreCol}>
              <div className={`${classes.card} ${classes.cardGreen}`}>
                <h3 className={classes.cardTitle}>Build with skills that actually matter</h3>
                <div className={classes.pillWrapper}>
                  <span className={classes.pill}><Leaf size={14} className={classes.pillIconGreen} /> Public Speaking</span>
                  <span className={classes.pill}><Brain size={14} className={classes.pillIconGreen} /> Critical Thinking</span>
                </div>
                <div className={classes.pillMarqueeContainer}>
                  <div className={classes.pillMarqueeTrack}>
                    <div className={classes.pillGroup}>
                      <span className={classes.pill}><CircleDollarSign size={14} className={classes.pillIconGreen} /> Financial Literacy</span>
                      <span className={classes.pill}><Sparkles size={14} className={classes.pillIconGreen} /> AI Literacy</span>
                    </div>
                    <div className={classes.pillGroup}>
                      <span className={classes.pill}><CircleDollarSign size={14} className={classes.pillIconGreen} /> Financial Literacy</span>
                      <span className={classes.pill}><Sparkles size={14} className={classes.pillIconGreen} /> AI Literacy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.card} ${classes.cardPurple}`}>
                <h3 className={classes.cardTitle}>Create stand out profile</h3>
                <div className={classes.cardContentWrapper}>
                  <div className={classes.imageBox}>
                    <div className={classes.imgPlaceholderDark}>AI</div>
                    <p className={classes.imageBoxText}><strong>AI Projects:</strong> Website, Agents, Application (no coding)</p>
                  </div>
                  <div className={classes.imageBox}>
                    <div className={classes.imgPlaceholderBook}>📖</div>
                    <p className={classes.imageBoxText}>Path to <strong>publishing your first book</strong></p>
                  </div>
                  <div className={classes.imageBox}>
                    <div className={classes.imgPlaceholderTed}>TED</div>
                    <p className={classes.imageBoxText}>Assistance towards your own <strong>Ted Talk</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className={classes.exploreCol}>
              <div className={`${classes.card} ${classes.cardPink}`}>
                <h3 className={classes.cardTitle}>No more lack of Career Guidance</h3>
                <div className={classes.cardContentWrapper}>
                  <div className={classes.whiteBox}>
                    Immership Workshop & Access to Tools for Career Exploration
                  </div>
                  <div className={classes.whiteBox}>
                    <p>Connect with students from <strong>New-Age Colleges</strong></p>
                    <div className={classes.logoRow}>
                      <span>Masters' Union</span><span>Plaksha</span><span>Flame</span>
                    </div>
                  </div>
                  <div className={classes.whiteBox}>
                    Direct 1:1 Mentorship with the Founder
                  </div>
                  <div className={classes.whiteBox}>
                    <p>Mentorship Opportunity by experts from</p>
                    <div className={classes.logoRow}>
                      <span>Wharton</span><span>NYU</span><span>Google</span><span>Amazon</span><span>PWC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={classes.testimonialsSection}>
          <h2 className={classes.testimonialsTitle}>What people are <span className={classes.testimonialsScript}>Saying</span><span className={classes.quotesAccent}>"</span></h2>

          <div className={classes.testimonialsInner}>
            <button className={classes.navArrow}><ChevronLeft size={20} strokeWidth={1.5} /></button>

            <div className={classes.testimonialsGrid}>
              {/* Card 1 */}
              <div className={classes.testimonialCard}>
                <div className={`${classes.quoteIconMark} ${classes.quotePurple}`}>”</div>
                <p className={classes.testimonialText}>"Most programs either push academics or talk vaguely about careers. This camp stood out because it combines skill-building, guidance, and emotional support in a structured way."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Ankita Aggrawal</strong>
                  <span>Parent, GD Goenka School</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className={classes.testimonialCard}>
                <div className={`${classes.quoteIconMark} ${classes.quoteBlue}`}>”</div>
                <p className={classes.testimonialText}>"There is so much information online that it becomes overwhelming even for parents. We needed something structured and trustworthy to make sense of it. Happy that my child found this program."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Surbhi Jindal</strong>
                  <span>Parent, DPS RK Puram</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className={classes.testimonialCard}>
                <div className={`${classes.quoteIconMark} ${classes.quoteCoral}`}>”</div>
                <p className={classes.testimonialText}>"Everyone keeps talking about building a good profile, but no one tells you how. This program stood out because you actually create real projects instead of just talking about skills."</p>
                <div className={classes.testimonialAuthor}>
                  <strong>Shivam</strong>
                  <span>Student, OP Jindal School</span>
                </div>
              </div>
            </div>

            <button className={classes.navArrow}><ChevronRight size={20} strokeWidth={1.5} /></button>
          </div>

          <div className={classes.dotsContainer}>
            <div className={`${classes.dot} ${classes.dotActive}`}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
          </div>
        </div>

        <section className={classes.section} style={{ paddingTop: '20px' }}>
          <div className={classes.realExpertsFrame}>
            <p className={classes.realExpertsTitle}>Learn from real experts</p>
            <div className={classes.whiteMarqueeContainer}>
              <div className={classes.marqueeContainer}>
                <div className={classes.marqueeTrack}>
                  <img src="/assets/images/real-experts-bootcamp.svg" alt="Real Experts" className={classes.realExpertSvg} />
                  <img src="/assets/images/real-experts-bootcamp.svg" alt="Real Experts" className={classes.realExpertSvg} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Future-Ready Is Everyone's Right */}
        <section className={classes.section}>
          <div className={classes.futureReadyHeader}>
            <h2 className={classes.futureReadyTitle}>Getting Future-Ready Is</h2>
            <h2 className={classes.futureReadyScript}>Everyone's Right <Sparkles size={24} className={classes.sparklesIcon} /></h2>
          </div>

          <div className={classes.futureReadyGrid}>
            <img src="/assets/images/purple%20card.svg" alt="All School Stages" className={classes.futureReadyImgCard} />
            <img src="/assets/images/blue%20card.svg" alt="All Academic Streams" className={classes.futureReadyImgCard} />
            <img src="/assets/images/coral%20card.svg" alt="All Career Aspirations" className={classes.futureReadyImgCard} />
          </div>
          <div className={classes.futureReadyFooter}>
            ...and those still exploring
          </div>
        </section>

        {/* Why do you need this Camp */}
        <section className={classes.section}>
          <div className={classes.whyHeader}>
            <h2 className={classes.whyTitle}>Why do you need <span className={classes.whyScript}>this Camp?</span></h2>
            <p className={classes.whyIntroText}>
              If you are in school, you will likely <img src="/assets/images/Graduate-bootcamp.svg" alt="graduate" className={classes.graduateIconSvg} /> from college after <span className={classes.yearText}>2030</span>
              <br />
              But the <span className={classes.circleText}>world</span> of work and wellbeing has already <span className={classes.wavyText}>transformed</span>
            </p>
          </div>

          <div className={classes.whyBlocksGrid}>
            <div className={classes.whyCircle1}></div>
            <div className={classes.whyCircle2}></div>
            {/* Card 1 */}
            <div className={`${classes.whyCard} ${classes.whyBorderPurple}`}>
              <div className={classes.whyCardLeft}>
                <img src="/assets/images/asset-card1.svg" alt="card1" className={classes.whyCardIconBoxImg} />
                <h3 className={classes.whyCardHeading}>The World Changed.<br /><span className={classes.underlineThick}>Education</span> Didn't.</h3>
                <p className={classes.whyCardBody}>
                  Employers now prioritise skills such as <span className={classes.textPink}>AI literacy</span>, <span className={classes.textBlue}>critical thinking</span>, <span className={classes.textBlue}>communication</span>, and <span className={classes.textPink}>real-world exposure</span>
                </p>
              </div>
              <div className={classes.whyCardDivider}></div>
              <div className={classes.whyCardRight}>
                <div className={classes.whyStatBlock}>
                  <div className={classes.whyStatNumberPurple}>96%</div>
                  <p className={classes.whyStatLabel}>of employers in India priorities hiring <span className={classes.wavyTextPurple}>AI-skilled talent</span></p>
                </div>
                <div className={classes.whyStatBlock}>
                  <div className={classes.whyStatNumberBlue}>84%</div>
                  <p className={classes.whyStatLabel}>of Indian hiring managers prefer candidates with <strong>digital portfolios</strong></p>
                </div>
                <Sparkles className={classes.sparkleTopRight} size={24} />
              </div>
            </div>

            {/* Card 2 */}
            <div className={`${classes.whyCard} ${classes.whyBorderPink}`}>
              <div className={classes.whyCardLeft}>
                <img src="/assets/images/leaves-bootcamp.svg" alt="leaves" className={classes.whyCardIconBoxImg} />
                <h3 className={classes.whyCardHeading}>Students Aren't Lost.<br /><span className={classes.circlePink}>The Path Is.</span></h3>
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
                <img src="/assets/images/blue%20wave.svg" alt="wave" className={classes.whyCardIconBoxImg} />
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
              <div className={classes.quoteBoxInner}></div>
              <img src="/assets/images/quotation bootcamp.svg" alt="quote" className={classes.bottomQuoteIcon} />
              <p>In <strong className={classes.textPink}>2026</strong>, Students need more than isolated workshops or surface-level programs.</p>
            </div>
            <div className={classes.quoteLine + ' ' + classes.quoteLinePurple}></div>
            <div className={classes.quoteLine + ' ' + classes.quoteLineCoral}></div>
          </div>
        </section>

        {/* What Students Walk Away With */}
        <section className={classes.sectionLightSecondary}>
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

        {/* Lived Experience */}
        <section className={classes.section}>
          <div className={classes.livedExpHeader}>
            <h2 className={classes.livedExpTitle}>This Program Was Built From</h2>
            <h2 className={`${classes.livedExpScript} ${classes.livedExpScriptCoral}`}>Lived Experience <span className={classes.clockIcon}>⏰</span></h2>
          </div>
          <div className={classes.livedExpCenter}>
            {/* The complex center graphic will go here, simplified for now */}
            <div className={classes.livedExpFounder}>
              <div className={classes.founderImagePlaceholder}></div>
              <h3 className={classes.founderName}>Bhaskar<br />Singhania</h3>
            </div>
            <div className={classes.livedExpStats}>
              <div className={classes.livedExpStatCard}>
                <p>Alumni of IIT Kharagpur</p>
                <div className={classes.logoRowSmall}><span>Stanford</span><span>Google for Startups</span></div>
              </div>
              <div className={classes.livedExpStatCard}>
                <p><strong>Coached 1000+ students & professional</strong></p>
                <p className={classes.minorText}>Mentor at:</p>
                <div className={classes.logoRowSmall}><span>Masters' Union</span></div>
              </div>
            </div>
            <div className={classes.livedExpQuote}>
              <p>" I've seen both sides of the spectrum — what works and what constantly fails students "</p>
              <button className={classes.btnPlay}>▶ Watch Video</button>
            </div>
          </div>

          {/* Built with students */}
          <div className={classes.builtWithCard}>
            <h3 className={classes.builtWithTitle}>Built With <span className={classes.textPink}>Students</span>,<br />Not Assumptions</h3>
            <div className={classes.builtWithFlow}>
              <div className={classes.flowStep}>
                <p>I researched <span className={classes.textPink}>65+ student</span> programs globally</p>
                <div className={classes.arrowDown}>↓</div>
                <p>To understand what works and what doesn't</p>
              </div>
              <div className={classes.arrowRight}>→</div>
              <div className={classes.flowStepPink}>
                <p>I spoke directly to <strong>70+ students</strong> across <strong>grades 8-12</strong>, across streams, to hear what they actually want.</p>
              </div>
              <div className={classes.arrowRight}>✨</div>
              <div className={classes.flowStepBlue}>
                <p className={classes.flowStepSub}>What emerged was clear: students don't want pressure</p>
                <p>They want clarity, confidence, and capability.</p>
              </div>
            </div>
            <p className={classes.builtWithFooter}>That's how this became the <span className={classes.textPink}>most comprehensive summer program</span> of its kind</p>
          </div>

          {/* Guided by Those */}
          <div className={classes.guidedCard}>
            <div className={classes.guidedLeft}>
              <p className={classes.guidedScript}>Guided by Those</p>
              <h3 className={classes.guidedTitle}>Who've Shaped Education,<br />Technology & Wellbeing</h3>
              <button className={classes.btnPurple}>Our Mentors</button>
              <p className={classes.guidedStats}>Collectively, we've mentored, coached, and taught <span className={classes.textPink}>15,000+</span> students and professionals.</p>
            </div>
            <div className={classes.guidedRight}>
              <h4 className={classes.missionTitle}><span className={classes.textPink}>Our mission</span> is simple yet urgent:</h4>
              <p className={classes.missionBody}>To help students grow <strong>without burning out</strong>, pursue success <strong>with stability</strong>, and chase ambition <strong>with calm</strong>.</p>
            </div>
          </div>
        </section>


        {/* Experts */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Experts you will learn from</h2>
          <div className={classes.expertFilters}>
            {["Practical insights", "Interactive", "Beginner-friendly", "Doubt-clearing"].map((label, i) => (
              <button key={i} className={classes.expertFilterBtn}>{label}</button>
            ))}
          </div>
          <div className={classes.expertsGrid}>
            {experts.map((ex, i) => (
              <div key={i} className={classes.expertCard}>
                <div className={classes.expertAvatar} />
                <h4 className={classes.expertName}>{ex.name}</h4>
                <p className={classes.expertRoles}>{ex.roles}</p>
                <p className={classes.expertAff}>{ex.aff}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Program Schedule */}
        <section id="schedule" className={classes.section}>
          <h2 className={classes.sectionTitle}>Program</h2>
          <h2 className={classes.sectionTitleScript}>Schedule</h2>
          <div className={classes.scheduleHeader}>
            <Link href="/summer-camp/schedule" className={classes.btnDetailedSolid}>
              Check Detailed Schedule <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className={classes.scheduleGrid}>
            {scheduleDays.map((d, i) => (
              <div key={i} className={classes.scheduleCard}>
                <p className={classes.scheduleDay}>Day {d.day}</p>
                <h3 className={classes.scheduleTitle}>{d.title}</h3>
                <p className={classes.scheduleDesc}>{d.desc}</p>
                {d.note && <p className={classes.scheduleNote}>{d.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Admission Process */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Admission</h2>
          <h2 className={classes.sectionTitleScript}>Process</h2>
          <div className={classes.admissionFlow}>
            {admissionSteps.map((step, i) => (
              <React.Fragment key={i}>
                <div className={classes.admissionStep}>
                  <div className={classes.admissionNum}>{step.num}</div>
                  <h3 className={classes.admissionTitle}>{step.title}</h3>
                  <p className={classes.admissionDesc}>{step.desc}</p>
                </div>
                {i < admissionSteps.length - 1 && <div className={classes.admissionConnector} />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* What people are Saying */}
        <section className={classes.sectionLight}>
          <div className={classes.testimonialsHeader}>
            <h2 className={classes.testimonialsTitle}>What people are</h2>
            <h2 className={classes.testimonialsScript}>Saying</h2>
          </div>

          <div className={classes.testimonialTabs}>
            <button className={classes.testimonialTabActive}>All</button>
            <button className={classes.testimonialTab}>Parents</button>
            <button className={classes.testimonialTab}>Students</button>
            <button className={classes.testimonialTab}>Educators</button>
            <button className={classes.testimonialTab}>Experts</button>
          </div>

          <div className={classes.testimonialsGrid}>
            <div className={classes.testimonialCard}>
              <div className={classes.quoteIconOrange}>&ldquo;</div>
              <p className={classes.testimonialText}>Future careers demand adaptability and emotional strength. Roobaroo trains those muscles early, making students truly future-ready.</p>
              <div className={classes.testimonialFooter}>
                <div>
                  <p className={classes.testimonialAuthor}>Harsh Yadav</p>
                  <p className={classes.testimonialRole}>Scientist, Amazon</p>
                </div>
                <div className={classes.testimonialCompany}>amazon</div>
              </div>
            </div>

            <div className={classes.testimonialCard}>
              <div className={classes.quoteIconPurple}>&ldquo;</div>
              <p className={classes.testimonialText}>IIT gave me technical skills, but not clarity. The 21st century Bootcamp bridges this gap by blending hard skills with emotional & digital wellbeing.</p>
              <div className={classes.testimonialFooter}>
                <div>
                  <p className={classes.testimonialAuthor}>Avinash Kumar</p>
                  <p className={classes.testimonialRole}>Samsung, IIT Delhi</p>
                </div>
                <div className={classes.testimonialCompanyBlue}>SAMSUNG</div>
              </div>
            </div>

            <div className={classes.testimonialCard}>
              <div className={classes.quoteIconBlue}>&ldquo;</div>
              <p className={classes.testimonialText}>I've seen bright peers burn out. Roobaroo shows that success can be balanced, sustainable, and joyful.</p>
              <div className={classes.testimonialFooter}>
                <div>
                  <p className={classes.testimonialAuthor}>Shivanshu</p>
                  <p className={classes.testimonialRole}>Wipro, IIT BHU</p>
                </div>
                <div className={classes.testimonialCompany}>wipro</div>
              </div>
            </div>

            {/* Dummy cards to match the 2 row layout in Figma */}
            <div className={classes.testimonialCard}>
              <div className={classes.quoteIconPurple}>&ldquo;</div>
              <p className={classes.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className={classes.testimonialFooter}>
                <div>
                  <p className={classes.testimonialAuthor}>Aleena</p>
                  <p className={classes.testimonialRole}>Student, Lorem Ipsum University</p>
                </div>
              </div>
            </div>

            <div className={classes.testimonialCard}>
              <div className={classes.quoteIconBlue}>&ldquo;</div>
              <p className={classes.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className={classes.testimonialFooter}>
                <div>
                  <p className={classes.testimonialAuthor}>Medhansh</p>
                  <p className={classes.testimonialRole}>Student, Lorem Ipsum University</p>
                </div>
              </div>
            </div>

            <div className={classes.testimonialCard}>
              <div className={classes.quoteIconOrange}>&ldquo;</div>
              <p className={classes.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className={classes.testimonialFooter}>
                <div>
                  <p className={classes.testimonialAuthor}>Naitik</p>
                  <p className={classes.testimonialRole}>Student, Lorem Ipsum University</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond the Summer Camp */}
        <section className={classes.section}>
          <div className={classes.beyondHeaderRow}>
            <div className={classes.beyondTitleLeft}>
              <h2 className={classes.beyondTitle}>Beyond the</h2>
              <div className={classes.beyondScriptWrapper}>
                <h2 className={classes.beyondTitleScript}>Summer Camp</h2>
                <div className={classes.beyondCircle}></div>
              </div>
            </div>
            <div className={classes.beyondTextRight}>
              <p>We understand that learning is a lifelong process and students would need support after the program as well, and hence we will</p>
            </div>
          </div>

          <div className={classes.beyondCardsRow}>
            <div className={`${classes.beyondCard} ${classes.borderPurpleThin}`}>
              <div className={classes.beyondIconCirclePurple}><Users size={28} /></div>
              <p className={classes.beyondCardText}>Create an <strong>exclusive alumni group</strong> for students who enroll with us</p>
            </div>
            <div className={`${classes.beyondCard} ${classes.borderBlueThin}`}>
              <div className={classes.beyondIconCircleBlue}><CalendarDays size={28} /></div>
              <p className={classes.beyondCardText}>Keep sharing resources & inviting them for <strong>online/offline events</strong></p>
            </div>
            <div className={`${classes.beyondCard} ${classes.borderPinkThin}`}>
              <div className={classes.beyondIconCirclePink}><CheckCircle size={28} /></div>
              <p className={classes.beyondCardText}>Even <strong>support</strong> them with their doubts <strong>after the program</strong> to the extent possible</p>
            </div>
          </div>
        </section>

        {/* Learn More About the Bootcamp */}
        <section className={classes.section}>
          <div className={classes.learnMoreHeader}>
            <h2 className={classes.learnMoreTitle}>Learn More About the <span className={classes.learnMoreScript}>Bootcamp</span></h2>
            <div className={classes.decorativeLines}></div>
          </div>
          <div className={classes.learnMoreGrid}>
            <div className={classes.blogCard}>
              <div className={classes.blogImageWrapper}>
                <img src="/assets/blog1.jpg" alt="Phones" className={classes.blogImage} />
                <div className={classes.blogReadTime}>5 MIN READ</div>
              </div>
              <div className={classes.blogContent}>
                <h3 className={classes.blogTitle}>why young voices matter: we build safe spaces for</h3>
                <p className={classes.blogDesc}>Here's how we're creating platforms where young people feel seen, safe, and empowered.</p>
              </div>
            </div>

            <div className={classes.blogCard}>
              <div className={classes.blogImageWrapper}>
                <img src="/assets/blog2.jpg" alt="Box robot" className={classes.blogImage} />
                <div className={classes.blogReadTimeBlue}>5 MIN READ</div>
              </div>
              <div className={classes.blogContent}>
                <h3 className={classes.blogTitle}>why young voices matter: we build safe spaces</h3>
                <p className={classes.blogDesc}>Here's how we're creating platforms where young people feel seen, safe, and empowered.</p>
              </div>
            </div>

            <div className={classes.blogCard}>
              <div className={classes.blogImageWrapper}>
                <img src="/assets/blog3.jpg" alt="Hands together" className={classes.blogImage} />
                <div className={classes.blogReadTimePink}>5 MIN READ</div>
              </div>
              <div className={classes.blogContent}>
                <h3 className={classes.blogTitle}>why young voices matter: we build for expression</h3>
                <p className={classes.blogDesc}>Here's how we're creating platforms where young people feel seen, safe, and empowered.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={classes.section}>
          <div className={classes.faqHeaderWrapper}>
            <h2 className={classes.faqTitle}>Frequently</h2>
            <div className={classes.faqScriptWrapper}>
              <h2 className={classes.faqTitleScript}>Asked</h2>
              <h2 className={classes.faqTitleScript}>Questions</h2>
            </div>
          </div>

          <div className={classes.faqLayout}>
            <div className={classes.faqSidebar}>
              <button className={classes.faqTabActive}>Program & Curriculum</button>
              <button className={classes.faqTab}>Certification & Outcomes</button>
              <button className={classes.faqTab}>Application & Admission</button>
              <button className={classes.faqTab}>Fees & Payment</button>
              <button className={classes.faqTab}>Format & Delivery</button>
              <button className={classes.faqTab}>Mentorship & Faculty</button>
              <button className={classes.faqTab}>Well-being & Support</button>
            </div>

            <div className={classes.faqContentArea}>
              {faqItems.map((item, i) => (
                <div key={i} className={classes.faqItem}>
                  <button
                    className={classes.faqQuestion}
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className={classes.faqChevron}>
                      {faqOpen === i ? 'ʌ' : 'v'}
                    </span>
                  </button>
                  {faqOpen === i && (
                    <p className={classes.faqAnswer}>{item.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className={classes.ctaSection}>
          <div className={classes.ctaCard}>
            <h2 className={classes.ctaTitle}>The 21st Century Summer Camp</h2>
            <p className={classes.ctaSub}>Your child's gateway to become future-ready in an evolving AI world</p>
            <Link
              href="/summer-camp/reserve"
              className={classes.ctaButton}
              onClick={() => trackEvent({ category: "Summer Camp", action: "Click", label: "Footer CTA" })}
            >
              Reserve Now <ArrowUpRight size={20} />
            </Link>
          </div>
          <div className={classes.contactRow}>
            <a href="mailto:contact@roobaroo.ai">contact@roobaroo.ai</a>
            <a href="tel:+919039974840">+91 90399 74840</a>
            <span>WeWork, DLF 2 Horizon Centre, Gurgaon- 122002</span>
          </div>
        </section>
      </main >
      <Footer />
    </>
  );
}
