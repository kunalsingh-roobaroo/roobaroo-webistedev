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
  Quote,
  CheckCircle2,
  PencilRuler,
  UserPlus,
  Atom,
  Calculator,
  Scale
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

        {/* Lived Experience */}
        <section className={classes.livedExpOuterSection}>
          <div className={classes.livedExpHeader}>
            <h2 className={classes.livedExpTitle}>
              This Program Was Built <br />
              From <span className={`${classes.livedExpScript} ${classes.livedExpScriptCoral}`}>Lived Experience <img src="/assets/images/clock-svg lived experience.svg" alt="Clock" className={classes.clockIconImg} /></span>
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

        {/* Program Schedule Header */}
        <section className={classes.scheduleHeaderSection}>
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
          <div className={classes.timelineDaysWrap}>
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
          </div>

          {/* Certification Section */}
          <div className={classes.certSectionWrapper}>
            <div className={classes.certHeader}>
              <img src="/assets/images/Badge Verification - iconSvg.co.svg" alt="Certification Badge" className={classes.certIcon} />
              <h2>Certification & Recognition</h2>
            </div>
            <p className={classes.certSub}>A stamp of credibility for the skills and expertise you master here</p>

            <div className={classes.certBox}>
              <div className={classes.certLeftText}>
                <h3 className={classes.certTitleGold}>Completion Certificate</h3>
                <p className={classes.certDescSmall}>A credible & verifiable proof that can also be added to LinkedIn</p>
              </div>
              <div className={classes.certRightImage}>
                <div className={classes.certImageMockup}></div>
              </div>
            </div>

            <div className={classes.certMiniCardsRow}>
              <div className={`${classes.certMiniCard} ${classes.certMiniCard1}`}>
                <img src="/assets/images/Letter Of Recommendation - iconSvg.co.svg" alt="Letter of Recommendation" className={classes.certMiniImg} />
                <div>
                  <h4 className={classes.certMiniTitleBlue}>Letter Of Recommendation</h4>
                  <p className={classes.certMiniDesc}>Reserved upon request for exceptional participants from the Summer Camp</p>
                </div>
              </div>
              <div className={`${classes.certMiniCard} ${classes.certMiniCard2}`}>
                <img src="/assets/images/Certificate Program - iconSvg.co.svg" alt="Startup Certificate" className={classes.certMiniImg} />
                <div>
                  <h4 className={classes.certMiniTitleCoral}>Startup Certificate</h4>
                  <p className={classes.certMiniDesc}>Presented to members from all teams of the Startup Challenge</p>
                </div>
              </div>
              <div className={`${classes.certMiniCard} ${classes.certMiniCard3}`}>
                <div>
                  <h4 className={classes.certMiniTitlePurple}>Talent Show & Open Mic</h4>
                  <p className={classes.certMiniDesc}>Share your talents & exchange learnings, takeaways, and parting thoughts from the Camp</p>
                </div>
                <img src="/assets/images/Spotlight Mic - iconSvg.co.svg" alt="Talent Show Spotlight" className={classes.certMiniImgRight} />
              </div>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className={classes.expertsSectionWrapper}>
          <div className={classes.expertsTitleRow}>
            <div className={classes.expertsLine} />
            <h2 className={classes.expertsTitleMain}>
              <span className={classes.textPurpleDark}>Experts</span> you will
            </h2>
            <div className={classes.expertsLine} />
          </div>
          <div className={classes.expertsTitleSubRow}>
            <h2 className={classes.expertsTitleSub}>
              learn from
              <img src="/assets/icons/underline.svg" className={classes.expertsUnderline} alt="underline" />
            </h2>
            <div className={classes.expertsSparkle}>✨</div>
          </div>

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

        {/* Admission Process */}
        <section className={classes.admissionProcessSection}>
          <div className={classes.admissionProcessHeaderRow}>
            <h2 className={classes.admissionProcessTitle}>Admission</h2>
            <h2 className={classes.admissionProcessScript}>Process</h2>
          </div>
          <div className={classes.admissionProcessTimeline}>
            <div className={`${classes.admissionStepNode} ${classes.admissionStepNode1}`}>
              <div className={classes.admissionStepCircle}>
                <img src="/assets/images/Ellipse 96.svg" className={classes.admissionStepBg} alt="" />
                <span>1</span>
              </div>
              <h4>1. Apply Online</h4>
              <p>
                Reserve your spot with basic details, batch preference, and booking fees(INR 2499)
              </p>
            </div>
            <img src="/assets/images/Arrow 5.svg" className={classes.admissionStepArrow} alt="" />
            <div className={`${classes.admissionStepNode} ${classes.admissionStepNode2}`}>
              <div className={classes.admissionStepCircle}>
                <img src="/assets/images/Ellipse 96.svg" className={classes.admissionStepBg} alt="" />
                <span>2</span>
              </div>
              <h4>2. Personal Interview</h4>
              <p>
                Our team will reach out <strong>within 48 hours</strong> to understand the student's motivation
              </p>
            </div>
            <img src="/assets/images/Arrow 6.svg" className={classes.admissionStepArrow} alt="" />
            <div className={`${classes.admissionStepNode} ${classes.admissionStepNode3}`}>
              <div className={classes.admissionStepCircle}>
                <img src="/assets/images/Ellipse 96.svg" className={classes.admissionStepBg} alt="" />
                <span>3</span>
              </div>
              <h4>3. Final Selection</h4>
              <p>
                Receive final confirmation along with request for the remaining fees
              </p>
            </div>
          </div>
        </section>


        {/* Getting Future-Ready Is Everyone's Right */}
        <section className={`${classes.section} ${classes.futureReadySection}`}>
          <div className={classes.futureReadyWrapper}>
            <div className={classes.futureReadyHeader}>
              <h2 className={classes.futureReadyTitle}>Getting Future-Ready Is</h2>
              <h2 className={classes.futureReadyScript}>Everyone's Right <Sparkles size={24} className={classes.sparklesIcon} /></h2>
            </div>

            <div className={classes.futureReadyGrid}>
              <div className={`${classes.frCard} ${classes.frCard1}`}>
                <div className={classes.frCardHeader}>
                  <PencilRuler className={classes.frIconPurple} size={28} />
                  <h3 className={classes.frCardTitle}>All School Stages</h3>
                </div>
                <div className={classes.frPillContainer}>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>Class 8</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}>Class 9</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}>Class 10</span>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>Class 11</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}>Class 12</span>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>Gap Year Students</span>
                </div>
              </div>

              <div className={`${classes.frCard} ${classes.frCard2}`}>
                <div className={classes.frCardHeader}>
                  <GraduationCap className={classes.frIconBlue} size={32} />
                  <h3 className={classes.frCardTitle}>All Academic Streams</h3>
                </div>
                <div className={classes.frPillContainer}>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}><Atom size={14} className={classes.pillIconGray} /> Science</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}><Calculator size={14} className={classes.pillIconGray} /> Commerce</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}><Scale size={14} className={classes.pillIconGray} /> Humanities</span>
                </div>
              </div>

              <div className={`${classes.frCard} ${classes.frCard3}`}>
                <div className={classes.frCardHeader}>
                  <UserPlus className={classes.frIconCoral} size={28} />
                  <h3 className={classes.frCardTitle}>All Career Aspirations</h3>
                </div>
                <div className={classes.frPillContainer}>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>Doctor</span>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>IAS</span>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>CA</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}>Engineer</span>
                  <span className={`${classes.frPill} ${classes.borderBlue}`}>Entrepreneur</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}>Designer</span>
                  <span className={`${classes.frPill} ${classes.borderPink}`}>Creator</span>
                </div>
              </div>
            </div>
            <div className={classes.futureReadyFooter}>
              ...and those still exploring
            </div>
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



        {/* Lived Experience */}
        <section className={classes.livedExpOuterSection}>
          <div className={classes.livedExpHeader}>
            <h2 className={classes.livedExpTitle}>
              This Program Was Built <br />
              From <span className={`${classes.livedExpScript} ${classes.livedExpScriptCoral}`}>Lived Experience <span className={classes.clockIcon}>⏰</span></span>
            </h2>
          </div>
          <div className={classes.livedExpCardsWrapper}>
            {/* Card 1: Blue */}
            <div className={classes.livedExpBlueCard}>
              <div className={classes.blueCardTop}>
                <div className={classes.founderImagePlaceholder}></div>
                <div className={classes.founderInfo}>
                  <h3 className={classes.founderName}>Bhaskar<br />Singhania</h3>
                  <p className={classes.founderTitle}>Founder & CEO, Roobaroo.ai</p>
                  <div className={classes.socialIconsRow}>
                    <div className={classes.socialIconInsta}></div>
                    <div className={classes.socialIconLinked}></div>
                    <div className={classes.socialIconLinktree}></div>
                  </div>
                </div>
              </div>
              <div className={classes.blueCardBottom}>
                <div className={classes.blueCardQuote}>
                  <p>" I've seen both<br />sides of the system —<br /><strong>what works, and what<br />quietly fails students</strong> "</p>
                </div>
                <div className={classes.blueCardMentor}>
                  <p className={classes.mentorTitle}>Mentor at :</p>
                  <div className={classes.mentorLogosGrid}>
                    <div className={classes.mentorLogoItem}><span className={classes.mentorInitial}>m</span> Mesa<br />School</div>
                    <div className={classes.mentorLogoItem}>NITI<br />Aayog</div>
                    <div className={classes.mentorLogoItem}><strong>masters'</strong><br /><strong>union</strong></div>
                    <div className={classes.mentorLogoItem}>IIT<br />Kharagpur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Purple */}
            <div className={classes.livedExpPurpleCard}>
              <div className={classes.purpleCardTop}>
                <div className={classes.alumniHeader}>
                  <span className={classes.alumniIcon}>🎓</span> Alumni of IIT Kharagpur
                </div>
                <div className={classes.alumniLogosRow}>
                  <span className={classes.alumniLogoItemText}><span style={{ color: '#E03C31' }}>Stanford</span></span> |
                  <span className={classes.alumniLogoItemText}><span style={{ color: '#4285F4' }}>G</span><span style={{ color: '#EA4335' }}>o</span><span style={{ color: '#FBBC05' }}>o</span><span style={{ color: '#4285F4' }}>g</span><span style={{ color: '#34A853' }}>l</span><span style={{ color: '#EA4335' }}>e</span> for Startups</span>
                </div>
              </div>
              <div className={classes.purpleCardBottom}>
                <div className={classes.purpleCardImage}>
                  <img src="/assets/images/thumbnail.png" alt="Classroom" className={classes.pupleImg} />
                </div>
                <div className={classes.purpleCardStats}>
                  <h3>1000+</h3>
                  <p>Students &<br />professionals<br />Coached</p>
                </div>
              </div>
            </div>
          </div>
        </section>


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
