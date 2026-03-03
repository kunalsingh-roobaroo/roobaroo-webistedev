"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FAQ from "../FAQ/FAQ";
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
  Scale,
  ArrowRight
} from "lucide-react";
import { trackEvent } from "@/utils/ga4";
import campScheduleImage from "../../../public/assets/images/camp schedule - bootcamp.svg";
import rocketDoodle from "../../../public/assets/images/Rocket doodle 1.svg";
import yourImaginationImg from "../../../public/assets/images/your-imagination.svg";
import sparklesBootcamp from "../../../public/assets/images/sparkles bootcamp.svg";
import livedUnderline from "../../../public/assets/images/lived underline bootcamp.svg";
import day1TickMark from "../../../public/assets/images/day 1 tick mark.svg";
import classes from "./SummerCampPage.module.css";

export default function SummerCampPage() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

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
                  Your gateway to build the right <span className={classes.heroDescSkills}>skills</span>, <span className={classes.heroDescPortfolio}>portfolio</span> and <span className={classes.heroDescConfidence}>confidence</span> to stand out in the AI world.{" "}
                  <Image src={rocketDoodle} alt="Rocket" className={classes.heroDescRocket} />
                </p>
                <div className={classes.tags}>
                  {tags.map((t, i) => (
                    <span key={i} className={classes.tag}>{t}</span>
                  ))}
                </div>
                {/* Mobile scrolling marquee */}
                <div className={classes.tagsMarqueeWrapper}>
                  <div className={classes.tagsMarqueeTrack}>
                    {[...tags, ...tags].map((t, i) => (
                      <span key={i} className={classes.tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={classes.batchCard}>
                <div className={classes.batchInfoSingle}>
                  <CalendarDays size={18} className={classes.batchCalendarIcon} />
                  <span>Batch 1 : 2-7 June</span>
                  <span className={classes.batchDivider}>|</span>
                  <span>Batch 2 : 16-21 June</span>
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
                  <p className={classes.residential}>*Residential Option Available</p>
                </div>
                <div className={classes.cardActions}>
                  <Link href="#schedule" className={classes.btnOutline}>
                    Camp Schedule <Image src={campScheduleImage} alt="Camp Schedule" width={24} height={24} />
                  </Link>
                  <div className={classes.btnPrimaryWrapper}>
                    <div className={classes.seats}>
                      <span className={classes.seatsNumber}>60</span>
                      <span className={classes.seatsText}>seats only!</span>
                    </div>
                    <Link
                      href="https://calendly.com/bhaskar-roobaroo/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.btnPrimary}
                      onClick={() => trackEvent({ category: "Summer Camp", action: "Click", label: "Reserve Now" })}
                    >
                      Reserve Seat <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
                <Link href="#" className={classes.downloadBrochure}>
                  Download brochure <Download size={16} />
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
              <p className={classes.sectionSub}>
                A world of possibilities beyond{" "}
                <span className={classes.imaginationWrapper}>
                  your imagination
                  <Image src={yourImaginationImg} alt="underline" className={classes.imaginationUnderline} />
                </span>
                .
              </p>
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
                    <img src="/assets/images/blue card 1.svg" alt="Startup" className={classes.blueCardIcon} />
                    <div>
                      <p className={classes.iconBoxTitle}><span className={classes.iconBoxHighlight}>Startup Competition</span> - ₹50,000 prize</p>
                      <p className={classes.iconBoxSub}>(No experience needed)</p>
                    </div>
                  </div>
                  <div className={classes.iconBox}>
                    <img src="/assets/images/blue card 2.svg" alt="Research" className={classes.blueCardIcon} />
                    <div>
                      <p className={classes.iconBoxTitle}><span className={classes.iconBoxHighlight}>Research Internship Opportunity</span></p>
                      <p className={classes.iconBoxSub}>with <img src="/assets/images/iit kgp.svg" alt="IIT Kharagpur" className={classes.iitkgpLogo} /> <span className={classes.iconBoxHighlight}>IIT Kharagpur</span></p>
                    </div>
                  </div>
                  <div className={classes.iconBox}>
                    <img src="/assets/images/blue card 3.svg" alt="Startups" className={classes.blueCardIcon} />
                    <div>
                      <p className={classes.iconBoxTitle}><span className={classes.iconBoxHighlight}>Chance to work with startups like :</span></p>
                      <div className={classes.logoRowSmall}>
                        <span className={classes.startupLogoPill}><img src="/assets/images/icon 1.svg" alt="Icon" className={classes.startupLogoIcon} /></span>
                        <span className={classes.startupLogoPill}><img src="/assets/images/digigo.svg" alt="DigiGo" className={classes.startupLogoIcon} /></span>
                        <span className={classes.startupLogoPill}><img src="/assets/images/roobaroo logo.svg" alt="Roobaroo" className={classes.startupLogoIcon} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${classes.card} ${classes.cardWhite}`}>
                <h3 className={classes.cardTitle}>Strong Foundation for Wellbeing</h3>
                <div className={classes.foundationMarqueeWrapper}>
                  <div className={classes.foundationMarqueeTrack}>
                    {[1, 2, 3, 4, 1, 2, 3, 4].map((n, i) => (
                      <img
                        key={i}
                        src={`/assets/images/foundation ${n}.svg`}
                        alt={`Foundation ${n}`}
                        className={classes.foundationImg}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className={classes.exploreCol}>
              <div className={`${classes.card} ${classes.cardGreen}`}>
                <h3 className={classes.cardTitle}>Build with skills that actually matter</h3>
                <div className={classes.skillsMarqueeWrapper}>
                  <div className={classes.skillsMarqueeTrack}>
                    {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((n, i) => (
                      <img
                        key={i}
                        src={`/assets/images/skills ${n}.svg`}
                        alt={`Skill ${n}`}
                        className={classes.skillPillImg}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className={`${classes.card} ${classes.cardPurple}`}>
                <h3 className={classes.cardTitle}>Create stand out profile</h3>
                <div className={classes.cardContentWrapper}>
                  <div className={classes.imageBox}>
                    <img src="/assets/images/purple card 1.svg" alt="AI Projects" className={classes.purpleCardImg} />
                    <p className={classes.imageBoxText}><span className={classes.imageBoxHighlight}>AI Projects:</span> Website, Agents, Application (no coding)</p>
                  </div>
                  <div className={classes.imageBox}>
                    <img src="/assets/images/purple card 2.svg" alt="Publishing" className={classes.purpleCardImg} />
                    <p className={classes.imageBoxText}>Path to <span className={classes.imageBoxHighlight}>publishing your first book</span></p>
                  </div>
                  <div className={classes.imageBox}>
                    <img src="/assets/images/purple card 3.svg" alt="Ted Talk" className={classes.purpleCardImg} />
                    <p className={classes.imageBoxText}>Assistance towards your own <span className={classes.imageBoxHighlight}>Ted Talk</span></p>
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
                    <img src="/assets/images/row 2 coral card.svg" alt="Connect with students from New-Age Colleges" className={classes.coralCardRowImg} />
                  </div>
                  <div className={classes.whiteBox}>
                    Direct 1:1 Mentorship with the Founder
                  </div>
                  <div className={classes.whiteBox}>
                    <img src="/assets/images/row 4 coral card.svg" alt="Mentorship Opportunity by experts from Wharton, NYU, Google, Amazon, PWC" className={classes.coralCardRowImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {(() => {
          const totalPeople = 6;
          return null; // state is managed via useState above
        })()}

        <div className={classes.testimonialsSection}>
          <button
            className={classes.navArrow}
            onClick={() => setTestimonialIndex(i => (i - 1 + 6) % 6)}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          <div className={classes.testimonialsGradientBox}>
            <h2 className={classes.testimonialsTitle}><span className={classes.sayingTitleFirstLine}>What people <span className={classes.sayingAreWrapper}>are<img src="/assets/images/saying.svg" alt="" className={classes.sayingAccentImg} /></span></span> <span className={classes.testimonialsScript}>Saying</span></h2>

            <div className={classes.testimonialsInner}>
              <div className={classes.testimonialsGrid}>
                {[0, 1, 2].map(offset => {
                  const idx = (testimonialIndex + offset) % 6;
                  return (
                    <img
                      key={idx}
                      src={`/assets/images/people ${idx + 1}.svg`}
                      alt={`Testimonial ${idx + 1}`}
                      className={classes.peopleCard}
                    />
                  );
                })}
              </div>
            </div>

            <div className={classes.dotsContainer}>
              {[0, 1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className={`${classes.dot} ${i === testimonialIndex ? classes.dotActive : ''}`}
                  onClick={() => setTestimonialIndex(i)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>

          <button
            className={classes.navArrow}
            onClick={() => setTestimonialIndex(i => (i + 1) % 6)}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Lived Experience */}
        <section className={classes.livedExpOuterSection}>
          <div className={classes.livedExpHeader}>
            <div className={classes.livedExpTitleWrapper}>
              <div className={classes.livedExpSparklesWrapper}>
                <Image src={sparklesBootcamp} alt="Sparkles" />
              </div>
              <h2 className={classes.livedExpTitle}>
                This Program Was Built From
                <span className={`${classes.livedExpScript} ${classes.livedExpScriptCoral}`}>
                  <span style={{ position: "relative", display: "inline-block" }}>
                    Lived
                    <Image src={livedUnderline} alt="underline" className={classes.underlineLived} />
                  </span>{" "}
                  Experience <img src="/assets/images/clock-svg lived experience.svg" alt="Clock" className={classes.clockIconImg} />
                </span>
              </h2>
            </div>
            <Link href="#learn-more" className={classes.btnLearnMore}>
              <span className={classes.btnLearnMoreText}>Learn more</span>
              <ArrowUpRight size={24} className={classes.btnLearnMoreArrow} />
            </Link>
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

              <div className={classes.day2TopRow}>
                <img src="/assets/images/card 1 day 1.svg" alt="Day 1 Card 1" className={classes.day1CardImgLeft} />
                <img src="/assets/images/card 2 day 1.svg" alt="Day 1 Card 2" className={classes.day1CardImgRight} />
              </div>

              <div className={classes.day2BottomRow}>
                <img src="/assets/images/card 3 day 1.svg" alt="Day 1 Card 3" className={classes.day1CardImgLeft} />
                <img src="/assets/images/card 4 day 1.svg" alt="Day 1 Card 4" className={classes.day1CardImgRight} />
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

              <div className={classes.day2TopRow}>
                <img src="/assets/images/card 1 day 2.svg" alt="Day 2 Card 1" className={classes.day2CardImgLeft} />
                <img src="/assets/images/card 2 day 2.svg" alt="Day 2 Card 2" className={classes.day2CardImgRight} />
              </div>

              <div className={classes.day2BottomRow}>
                <img src="/assets/images/card 3 day 2.svg" alt="Day 2 Card 3" className={classes.day2CardImgRight} />
                <img src="/assets/images/card 4 day 2.svg" alt="Day 2 Card 4" className={classes.day2CardImgLeft} />
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
              <p className={classes.daySubtitle}><span className={classes.day3NoCoding}>No Coding</span> <span className={classes.day3Required}>required</span></p>
              <p className={classes.dayDesc}>Learn how to think clearly, break problems, and confidently use AI tools to build real solutions</p>

              <div className={classes.day3TopRow}>
                <img src="/assets/images/card 1 day 3.svg" alt="Day 3 Card 1" className={classes.day3CardImg1} />
                <img src="/assets/images/card 2 day 3.svg" alt="Day 3 Card 2" className={classes.day3CardImg2} />
              </div>

              <div className={classes.day3BottomRow}>
                <div className={classes.day3CardBottom}>
                  <p className={classes.day3ProjectsTitle}><strong><span className={classes.textCoralHover}>Build live projects</span></strong> using AI for a<br /><strong>standout profile</strong></p>
                  <div className={classes.day3PillsRow}>
                    <span className={classes.day3Pill}>No coding required</span>
                    <span className={classes.day3Pill}>Beginner friendly</span>
                  </div>
                  <div className={classes.day3ProjectsGrid}>
                    <div className={classes.day3ProjectCard}>
                      <img src="/assets/images/card 3 day 3.svg" alt="Create your own App" className={classes.day3ProjectCardImg} />
                    </div>
                    <div className={classes.day3ProjectCard}>
                      <img src="/assets/images/card 4 day 3.svg" alt="Create Short Film & AI Content" className={classes.day3ProjectCardImg} />
                    </div>
                    <div className={classes.day3ProjectCard}>
                      <img src="/assets/images/card 5 day 3.svg" alt="Create AI Agents to automate tasks" className={classes.day3ProjectCardImg} />
                    </div>
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

              <div className={classes.day4TopRow}>
                <img src="/assets/images/card 1 day 4.svg" alt="Day 4 Card 1" className={classes.day4CardImg1} />
                <img src="/assets/images/card 2 day 4.svg" alt="Day 4 Card 2" className={`${classes.day4CardImg2} ${classes.day4CardSecond}`} />
              </div>

              <div className={classes.day4BottomRow}>
                <img src="/assets/images/card 3 day 4.svg" alt="Day 4 Card 3" className={classes.day4CardImg3} />
                <img src="/assets/images/card 4 day 4.svg" alt="Day 4 Card 4" className={classes.day4CardImg4} />
              </div>
            </div>

            {/* Day 5 */}
            <div className={classes.dayBlock}>
              <div className={classes.dayHeader}>
                <h2 className={classes.dayNumber}>Day 5</h2>
                <img src="/assets/images/Rocket doodle 1.svg" alt="Rocket" className={classes.rocketDoodleDay5} />
              </div>
              <div className={classes.dayTitleRow}>
                <h3 className={classes.dayMainTitle}><span className={classes.textPurple}>The Startup</span> Challenge</h3>
              </div>
              <p className={classes.day5Subtitle}><span className={classes.day5NoExperience}>No experience</span> <span className={classes.day5Required}>required</span></p>
              <p className={classes.dayDesc}>Experience the full journey of building a startup, from identifying a problem to creating, testing, and pitching a solution.</p>

              <div className={classes.day5TopRow}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/day%205%20card%201%20mobile.svg" />
                  <img src="/assets/images/card 1 day 5.svg" alt="Day 5 Card 1" className={classes.day5CardImg1} />
                </picture>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/day%205%20card%202%20mobile.svg" />
                  <img src="/assets/images/card 2 day 5.svg" alt="Day 5 Card 2" className={classes.day5CardImg2} />
                </picture>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/day%205%20card%203%20mobile.svg" />
                  <img src="/assets/images/card 3 day 5.svg" alt="Day 5 Card 3" className={classes.day5CardImg3} />
                </picture>
              </div>

              <div className={classes.day5BottomRow}>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/day%205%20card%204%20mobile.svg" />
                  <img src="/assets/images/card 4 day 5.svg" alt="Day 5 Card 4" className={classes.day5CardImg4} />
                </picture>
                <picture>
                  <source media="(max-width: 768px)" srcSet="/assets/images/day%205%20card%205%20mobile.svg" />
                  <img src="/assets/images/card 5 day 5.svg" alt="Day 5 Card 5" className={classes.day5CardImg5} />
                </picture>
              </div>
            </div>

            {/* Day 6 */}
            <div className={classes.dayBlock} style={{ position: 'relative' }}>
              <img src="/assets/images/FloatingBoxes.svg" alt="Floating Boxes" className={classes.floatingBoxesDay6} />
              <div className={classes.dayHeader}>
                <h2 className={classes.dayNumber}>Day 6</h2>
              </div>
              <div className={classes.dayTitleRow}>
                <h3 className={classes.dayMainTitle}><span className={classes.textBlue}>Mindfulness</span> &<br />Digital Detox Day</h3>
              </div>
              <p className={classes.dayDesc}>Slow down, reset, and learn to use technology mindfully without burnout or distraction.</p>

              <div className={classes.day6TopRow}>
                <img src="/assets/images/card 1 day 6.svg" alt="Day 6 Card 1" className={classes.day6CardImg1} />
                <img src="/assets/images/card 2 day 6.svg" alt="Day 6 Card 2" className={classes.day6CardImg2} />
                <img src="/assets/images/card 3 day 6.svg" alt="Day 6 Card 3" className={classes.day6CardImg3} />
              </div>

              <div className={classes.day6BottomRow}>
                <img src="/assets/images/card 4 day 6.svg" alt="Day 6 Card 4" className={classes.day6CardImg4} />
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className={classes.certSectionWrapper}>
            {/* Mobile: single SVG for whole section */}
            <div className={classes.certSectionMobile}>
              <img src="/assets/images/certificate mobile.svg" alt="Certification & Recognition" className={classes.certMobileImg} />
            </div>
            {/* Desktop: full content */}
            <div className={classes.certSectionDesktop}>
            <img src="/assets/images/Container.svg" alt="" className={classes.certDivider} />
            <img src="/assets/images/Vector 1555.svg" alt="" className={classes.certVectorIcon} />
            <img src="/assets/images/leaves-bootcamp.svg" alt="" className={classes.certLeavesIcon} />
            <div className={classes.certHeader}>
              <img src="/assets/images/Badge Verification - iconSvg.co.svg" alt="Certification Badge" className={classes.certIcon} />
              <h2><span className={classes.certTitleRed}>Certification</span> <span className={classes.certTitleBlack}>& Recognition</span></h2>
            </div>
            <p className={classes.certSub}>A stamp of credibility for the skills and expertise<br />you master here</p>

            <div className={classes.certBox}>
              <div className={classes.certLeftText}>
                <h3 className={classes.certTitleGold}>Completion Certificate</h3>
                <p className={classes.certDescSmall}>A credible & verifiable proof that can also<br />be added to LinkedIn</p>
              </div>
              <div className={classes.certRightImage}>
                <img src="/assets/images/certificate rectangle.svg" alt="Certificate Background" className={classes.certRectangleImg} />
                <img src="/assets/images/certificate.svg" alt="Certificate Foreground" className={classes.certForegroundImg} />
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
          </div>
        </section>

        {/* Experts Section */}
        <section className={classes.expertsSectionWrapper}>
          <div className={classes.expertsTitleRow}>
            <div className={classes.expertsLine} />
            <h2 className={classes.expertsTitleMain}>
              <span className={classes.expertsHighlight}>Experts</span> you will
              <img src="/assets/images/sparkles bootcamp.svg" className={classes.expertsSparkleWill} alt="" />
            </h2>
            <div className={classes.expertsLine} />
          </div>
          <div className={classes.expertsTitleSubRow}>
            <h2 className={classes.expertsTitleSub}>
              learn from
              <img src="/assets/images/Vector 1579.svg" className={classes.expertsUnderline} alt="underline" />
            </h2>
          </div>

          <div className={classes.expertFilters}>
            {["Practical insights", "Interactive", "Beginner-friendly", "Doubt-clearing"].map((label, i) => (
              <button key={i} className={classes.expertFilterBtn}>{label}</button>
            ))}
          </div>
          <div className={classes.expertsGridWrapper}>
            <div className={classes.expertMarqueeContainer}>
              <div className={classes.expertMarqueeTrack}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, i) => (
                  <img key={i} src={`/assets/images/expert ${num}.svg`} alt={`Expert ${num}`} className={classes.expertCardImg} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className={classes.admissionProcessSection}>
          {/* Mobile: single asset */}
          <div className={classes.admissionSectionMobile}>
            <img src="/assets/images/admission process.svg" alt="Admission Process" className={classes.admissionMobileImg} />
          </div>
          {/* Desktop: full content */}
          <div className={classes.admissionSectionDesktop}>
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
                  Reserve your spot with basic<br />details, batch preference, and<br />booking fees(INR 899)
                </p>
              </div>
              <img src="/assets/images/Arrow admission.svg" className={classes.admissionStepArrow} alt="" />
              <div className={`${classes.admissionStepNode} ${classes.admissionStepNode2}`}>
                <div className={classes.admissionStepCircle}>
                  <img src="/assets/images/Ellipse 96.svg" className={classes.admissionStepBg} alt="" />
                  <span>2</span>
                </div>
                <h4>2. Personal Interview</h4>
                <p>
                  Our team will reach out <strong>within<br />48 hours</strong> to understand the<br />student's motivation
                </p>
              </div>
              <img src="/assets/images/Arrow admission 2.svg" className={classes.admissionStepArrow2} alt="" />
              <div className={`${classes.admissionStepNode} ${classes.admissionStepNode3}`}>
                <div className={classes.admissionStepCircle}>
                  <img src="/assets/images/Ellipse 96.svg" className={classes.admissionStepBg} alt="" />
                  <span>3</span>
                </div>
                <h4>3. Final Selection</h4>
                <p>
                  Receive final confirmation along<br />with request for the remaining fees
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Getting Future-Ready Is Everyone's Right */}
        <section className={classes.futureReadySection}>
          <div className={classes.futureReadyWrapper}>
            <img src="/assets/images/Vector 1568.svg" className={classes.futureReadyTopRightVector} alt="" />
            <div className={classes.futureReadyHeader}>
              <h2 className={classes.futureReadyTitle}>Getting Future-Ready Is</h2>
              <h2 className={classes.futureReadyScript}>Everyone's Right <img src="/assets/images/sparkles bootcamp.svg" className={classes.sparklesIcon} alt="" /></h2>
            </div>

            <div className={classes.futureReadyGrid}>
              <div className={`${classes.frCard} ${classes.frCard1}`}>
                <div className={classes.frCardHeader}>
                  <img src="/assets/images/getting future ready card 1.svg" alt="Icon" style={{ width: 36, height: 36, objectFit: 'contain' }} />
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
                  <img src="/assets/images/getting future ready card 2.svg" alt="Icon" style={{ width: 36, height: 36, objectFit: 'contain' }} />
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
                  <img src="/assets/images/getting future ready card 3.svg" alt="Icon" style={{ width: 36, height: 36, objectFit: 'contain' }} />
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

        {/* Program Fees */}
        <section className={classes.feesSection}>
          <div className={classes.feesLeft}>
            <div className={classes.feesDoodleWrapper}>
              <div className={classes.feesTitleStack}>
                <h2 className={classes.feesScript}>Program Fees</h2>
                <img src="/assets/images/Vector 1579.svg" className={classes.feesUnderline} alt="" />
              </div>
              <img src="/assets/images/program fees tick.svg" className={classes.feesArrowIcon} alt="" />
            </div>
            <div className={classes.feesQuoteCard}>
              <p>
                "The best investment you can<br />
                make is in your own abilities"
              </p>
              <span className={classes.quoteAuthor}>~Warren Buffett</span>
              <img
                src="/assets/images/warren-buffet - reserve.svg"
                alt="Warren Buffett"
                className={classes.warrenImg}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className={classes.feesQuoteCardBlue}>
              <p>
                "Become future-ready by<br />
                spending a small fraction of<br />
                what you do for entire education"
              </p>
              <img
                src="/assets/images/Space-launch.svg"
                alt="Space Launch"
                className={classes.spacelaunchIcon}
              />
            </div>
          </div>

          <div className={classes.feesRight}>
            {/* Early Bird */}
            <div className={classes.feeCardEarly}>
              <div className={classes.feeCardEarlyInner}>
                <div className={classes.feeCardIcon}>
                  <img src="/assets/images/early-bird.svg" alt="Early Bird" className={classes.earlyBirdIcon} />
                </div>
                <div className={classes.feeCardText}>
                  <h3>EARLY BIRD</h3>
                  <p>(TILL 31ST MARCH)</p>
                </div>
                <div className={classes.feeAmountWhite}>INR 41,999</div>
              </div>
            </div>
            {/* Standard */}
            <div className={classes.feeCardStandard}>
              <div className={classes.feeCardStandardInner}>
                <img src="/assets/images/standard.svg" alt="Standard" className={classes.standardIcon} />
                <div className={classes.feeCardText}>
                  <h3>STANDARD</h3>
                  <p>(FROM 1ST APRIL)</p>
                </div>
                <div className={classes.feeAmountStandard}>INR 47,999</div>
              </div>
            </div>
            {/* Group Discount & Residential */}
            <div className={classes.feeExtrasRow}>
              <div className={`${classes.feeExtraCard} ${classes.feeExtraBlue}`}>
                <div className={classes.feeExtraInnerWhite}>
                  <div className={classes.feeExtraIconBlue}>
                    <img src="/assets/images/group of students.svg" alt="Group of Students" className={classes.groupStudentsIcon} />
                  </div>
                  <div className={classes.feeExtraText}>
                    <h4>GROUP DISCOUNT</h4>
                    <p>(MINIMUM 4 STUDENTS)</p>
                  </div>
                </div>
                <div className={classes.feeExtraPrice}>
                  INR 5,999 <span>(PER PERSON)</span>
                </div>
              </div>
              <div className={`${classes.feeExtraCard} ${classes.feeExtraPurple}`}>
                <div className={classes.feeExtraInnerWhite}>
                  <img src="/assets/images/residential.svg" alt="Residential" className={classes.residentialIcon} />
                  <div className={classes.feeExtraText}>
                    <h4>RESIDENTIAL</h4>
                    <p>(OPTION AVAILABLE)</p>
                  </div>
                </div>
                <div className={classes.feeExtraPrice}>
                  INR 2,500 <span>(PER DAY)</span>
                </div>
              </div>
            </div>
            <div className={classes.feesNoteContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" width="111" height="2" viewBox="0 0 111 2" fill="none" className={classes.feesNoteLineSvg}>
                <path d="M0 1H110.5" stroke="#815FAA" strokeWidth="2" />
              </svg>
              <p className={classes.feesNote}>
                *Fees includes{" "}
                <span className={classes.textPink}>Lunch</span>,{" "}
                <span className={classes.textPurple}>Snacks</span>, and other<br />
                program related{" "}
                <span className={classes.textBlue}>materials</span>'
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="111" height="2" viewBox="0 0 111 2" fill="none" className={classes.feesNoteLineSvg}>
                <path d="M0 1H110.5" stroke="#815FAA" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </section>
        <section className={classes.bonusSection}>
          {/* Mobile: parents mobile asset only */}
          <div className={classes.bonusSectionMobile}>
            <img src="/assets/images/parents mobile.svg" alt="Bonus Sessions for Parents" className={classes.bonusParentsMobileImg} />
          </div>
          {/* Desktop: full content */}
          <div className={classes.bonusSectionDesktop}>
          <div className={classes.bonusHeader}>
            <div className={classes.bonusTitleRow}>
              <img src="/assets/images/space - launch bonus.svg" className={classes.bonusRocket} alt="" />
              <h2 className={classes.bonusTitleText}>
                <span className={classes.bonusPurpleText}>Bonus Sessions</span> for Parents
              </h2>
              <img src="/assets/images/parents design.svg" className={classes.bonusParentsDesign} alt="" />
            </div>
            <div className={classes.bonusSubtitleRow}>
              <h3 className={classes.bonusSubtitleText}>First of Its Kind in India</h3>
              <img src="/assets/images/kind in india.svg" className={classes.bonusCurlLine} alt="" />
            </div>
          </div>

          <div className={classes.bonusCard}>
            <img src="/assets/images/clip-bonus.svg" className={classes.bonusClip} alt="" />

            <div className={classes.bonusCardList}>
              <div className={classes.bonusListItem}>
                <img src="/assets/images/star bonus.svg" className={classes.bonusStar} alt="" />
                <p>
                  <strong>We recognize parents</strong> as the most important partners in a <strong>child's journey</strong>.
                </p>
              </div>
              <div className={classes.bonusListItem}>
                <img src="/assets/images/star bonus.svg" className={classes.bonusStar} alt="" />
                <p>
                  These sessions are designed to equip parents with the right awareness, clarity, and tools to support their <strong>child's academic, career, and wellbeing decisions.</strong>
                </p>
              </div>
              <div className={classes.bonusListItem}>
                <img src="/assets/images/star bonus.svg" className={classes.bonusStar} alt="" />
                <p>
                  Parents also get a direct opportunity to ask questions, address concerns, and plan their <strong>child's next steps</strong> with confidence.
                </p>
              </div>
            </div>

            <div className={classes.bonusCardFooter}>
              <div className={classes.bonusFooterSessions}>
                <img src="/assets/images/number.svg" className={classes.bonusNumberAsset} alt="" />
                <span className={classes.bonusCursiveLabel}>Number of Sessions:</span>
                <div className={classes.bonusSessionCountWrapper}>
                  <img src="/assets/images/2.svg" className={classes.bonusCountAsset} alt="" />
                  <div className={classes.bonusSessionCount}>2</div>
                </div>
              </div>
              <div className={classes.bonusFooterMode}>
                <span>Mode:</span>
                <div className={classes.bonusModePill}>
                  Online <span className={classes.bonusModeDot}></span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>



        <section className={`${classes.section} ${classes.beyondSection}`}>
          <div className={classes.beyondHeaderRow}>
            <div className={classes.beyondTitleLeft}>
              <h2 className={classes.beyondTitle}>Beyond the</h2>
              <h2 className={classes.beyondTitleScript}>
                <span className={classes.summerCircleWrapper}>
                  Summer
                  <img src="/assets/images/summer camp circle.svg" className={classes.summerCircleImg} alt="" />
                </span> Camp
              </h2>
            </div>
            <div className={classes.beyondTextRight}>
              <p className={classes.beyondPara}>We understand that learning is a lifelong process and students would need support after the program as well, and hence we will</p>
              <img src="/assets/images/beyond doodle.svg" className={classes.beyondDoodle} alt="Bulb doodle" />
            </div>
          </div>

          <div className={classes.beyondCardsRow}>
            <img src="/assets/images/beyond card 1.svg" className={classes.beyondImageCard} alt="Create an exclusive alumni group for students who enroll with us" />
            <img src="/assets/images/beyond card 2.svg" className={classes.beyondImageCard} alt="Keep sharing resources & inviting them for online/offline events" />
            <img src="/assets/images/beyond card 3.svg" className={classes.beyondImageCard} alt="Even support them with their doubts after the program to the extent possible" />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main >
      <Footer />
    </>
  );
}
