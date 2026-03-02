"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { ArrowUpRight, Star, CheckCircle2, User, Users, GraduationCap } from "lucide-react";
import { trackEvent } from "@/utils/ga4";
import classes from "./ReserveNowPage.module.css";

export default function ReserveNowPage() {
    const [batch, setBatch] = useState(1);
    const [form, setForm] = useState({
        studentName: "",
        grade: "",
        schoolName: "",
        city: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar />
            <main className={classes.main}>
                {/* Decorative Circles */}
                <div className={classes.decoCircle1}></div>
                <div className={classes.decoCircle2}></div>
                <div className={classes.decoCircle3}></div>

                {/* Hero Section */}
                <section className={classes.heroSection}>
                    <div className={classes.heroLeft}>
                        <img
                            src="/assets/images/deco-stamp.svg"
                            alt=""
                            className={classes.decoStamp}
                            onError={(e) => (e.target.style.display = "none")}
                        />
                        <img
                            src="/assets/images/coral swirl - bootcamp.svg"
                            alt=""
                            className={classes.coralSwirl}
                            onError={(e) => (e.target.style.display = "none")}
                        />
                        <h1 className={classes.heroTitle}>
                            <span className={classes.heroWordRelative}>
                                <img src="/assets/images/leaves-bootcamp.svg" alt="" className={classes.heroPetalSvg} />
                                <span className={classes.heroTitlePink}>Reserve</span>
                            </span>{" "}
                            <span className={classes.heroWordRelative}>
                                Your
                                <img src="/assets/images/blue - bloom.svg" alt="" className={classes.heroBloomSvg} />
                            </span>{"\n"}
                            Seat Now
                        </h1>
                        <p className={classes.heroSubtext}>
                            This booking helps us{" "}
                            <span className={classes.subtextPurple}>understand your interest and</span>
                            <br />
                            <span className={classes.subtextPink}>
                                ensures you get{" "}
                                <span className={classes.svgWrapper}>
                                    priority access.
                                    <img src="/assets/images/Vector 1579.svg" alt="" className={classes.priorityUnderlineSvg} />
                                </span>
                            </span>
                        </p>
                        <img
                            src="/assets/images/deco-sparkle.svg"
                            alt=""
                            className={classes.decoSparkle}
                            onError={(e) => (e.target.style.display = "none")}
                        />
                    </div>

                    <div className={classes.heroRight}>
                        <div className={classes.bookingCard}>
                            <div className={classes.bookingHeader}>
                                <Star size={18} fill="white" stroke="white" />
                                <span>Booking Amount:</span>
                                <span className={classes.bookingPrice}>₹2,499</span>
                            </div>
                            <ul className={classes.bookingList}>
                                <li>
                                    <img src="/assets/images/tick-mark-reserve.svg" alt="check" className={classes.checkIcon} />
                                    <span>Fully adjustable against the final fee</span>
                                </li>
                                <li>
                                    <img src="/assets/images/tick-mark-reserve.svg" alt="check" className={classes.checkIcon} />
                                    <span>Secures early bird offer before it expires</span>
                                </li>
                                <li>
                                    <img src="/assets/images/tick-mark-reserve.svg" alt="check" className={classes.checkIcon} />
                                    <span>
                                        Fully refundable if you decide not to proceed
                                    </span>
                                </li>
                            </ul>
                            <div className={classes.seatsRow}>
                                <div className={classes.seatsContent}>
                                    <div className={classes.seatsIcon}>
                                        <User size={16} />
                                    </div>
                                    <span className={classes.seatsLabel}>Limited seats</span>
                                    <span className={classes.seatsCount}>
                                        Only <span className={classes.seatsCountNumber}>60 students</span>
                                    </span>
                                </div>
                            </div>
                            <button className={classes.reserveSeatBtn}>
                                Reserve Your Seat
                            </button>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className={classes.formSection}>
                    <img
                        src="/assets/images/deco-form.svg"
                        alt=""
                        className={classes.decoForm}
                        onError={(e) => (e.target.style.display = "none")}
                    />
                    <div className={classes.formCard}>
                        {/* Student Details */}
                        <div className={classes.formGroup}>
                            <h3 className={classes.formGroupTitle}>
                                <img src="/assets/images/student-details-form.svg" alt="Student Details" className={classes.formSectionIcon} /> Student
                                Details
                            </h3>
                            <div className={classes.formRow}>
                                <div className={classes.formField}>
                                    <label>Student Name*</label>
                                    <input
                                        type="text"
                                        name="studentName"
                                        placeholder="Enter name here"
                                        value={form.studentName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={classes.formField}>
                                    <label>Grade*</label>
                                    <select
                                        name="grade"
                                        value={form.grade}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        <option value="8">Grade 8</option>
                                        <option value="9">Grade 9</option>
                                        <option value="10">Grade 10</option>
                                        <option value="11">Grade 11</option>
                                        <option value="12">Grade 12</option>
                                    </select>
                                </div>
                            </div>
                            <div className={classes.formRow}>
                                <div className={classes.formField}>
                                    <label>School Name*</label>
                                    <input
                                        type="text"
                                        name="schoolName"
                                        placeholder="School name here"
                                        value={form.schoolName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={classes.formField}>
                                    <label>City*</label>
                                    <select name="city" value={form.city} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="bangalore">Bangalore</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="kolkata">Kolkata</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="pune">Pune</option>
                                        <option value="gurgaon">Gurgaon</option>
                                        <option value="noida">Noida</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className={classes.formGroup}>
                            <h3 className={classes.formGroupTitle}>
                                <img src="/assets/images/contact-details-form.svg" alt="Contact Details" className={classes.formSectionIcon} /> Contact
                                Details
                            </h3>
                            <div className={classes.formRow}>
                                <div className={classes.formField}>
                                    <label>Email ID*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter email here"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={classes.formField}>
                                    <label>Phone Number*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter phone number here"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Program Preference */}
                        <div className={classes.formGroup}>
                            <h3 className={classes.formGroupTitle}>
                                <img src="/assets/images/program-preference-forn.svg" alt="Program Preference" className={classes.formSectionIcon} /> Program
                                Preference
                            </h3>
                            <p className={classes.batchLabel}>Select Batch*</p>
                            <div className={classes.batchRow}>
                                <button
                                    className={`${classes.batchBtn} ${batch === 1 ? classes.batchBtnActive : ""
                                        }`}
                                    onClick={() => setBatch(1)}
                                >
                                    <span className={classes.batchRadio}></span>
                                    Batch 1: 2–7 June
                                </button>
                                <button
                                    className={`${classes.batchBtn} ${batch === 2 ? classes.batchBtnActive : ""
                                        }`}
                                    onClick={() => setBatch(2)}
                                >
                                    <span className={classes.batchRadio}></span>
                                    Batch 2: 23–28 June
                                </button>
                            </div>
                        </div>

                        <button
                            className={classes.payBtn}
                            onClick={() =>
                                trackEvent({
                                    category: "Reserve",
                                    action: "Click",
                                    label: "Pay & Reserve",
                                })
                            }
                        >
                            Pay ₹2,499 & Reserve Spot
                        </button>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className={classes.disclaimerSection}>
                    <div className={classes.quoteWrapper}>
                        <div className={classes.disclaimerContent}>
                            <p className={classes.disclaimerText}>
                                You're not committing yet, just reserving priority access.<br />
                                We review every booking to ensure the program is the right fit for the student.
                            </p>
                            <img
                                src="/assets/images/Rocket doodle 1.svg"
                                alt="Rocket Doodle"
                                className={classes.decoRocket}
                                onError={(e) => (e.target.style.display = "none")}
                            />
                        </div>
                        <div className={`${classes.quoteLine} ${classes.quoteLineBlue}`}></div>
                        <div className={`${classes.quoteLine} ${classes.quoteLinePurple}`}></div>
                        <div className={`${classes.quoteLine} ${classes.quoteLineCoral}`}></div>
                    </div>
                </section>

                {/* What Happens Next */}
                <section className={classes.nextSection}>
                    <h2 className={classes.nextTitle}>
                        What happens <em>next:</em>
                    </h2>
                    <div className={classes.nextTimeline}>
                        <div className={`${classes.nextStep} ${classes.nextStep1}`}>
                            <div className={classes.nextStepCircle}>
                                <img src="/assets/images/Ellipse 96.svg" className={classes.stepBg} alt="" />
                                <span>1</span>
                            </div>
                            <p>
                                Our team will reach out within <strong>24–48 hours</strong>
                            </p>
                        </div>
                        <img src="/assets/images/Arrow 5.svg" className={`${classes.nextArrow} ${classes.nextArrowUp}`} alt="" />
                        <div className={`${classes.nextStep} ${classes.nextStep2}`}>
                            <div className={classes.nextStepCircle}>
                                <img src="/assets/images/Ellipse 96.svg" className={classes.stepBg} alt="" />
                                <span>2</span>
                            </div>
                            <p>
                                We'll understand the student's motivation and{" "}
                                <strong>answer all questions</strong>
                            </p>
                        </div>
                        <img src="/assets/images/Arrow 6.svg" className={classes.nextArrow} alt="" />
                        <div className={`${classes.nextStep} ${classes.nextStep3}`}>
                            <div className={classes.nextStepCircle}>
                                <img src="/assets/images/Ellipse 96.svg" className={classes.stepBg} alt="" />
                                <span>3</span>
                            </div>
                            <p>
                                You'll receive a <strong>form</strong> to add details of your
                                peers for <strong>group discount</strong> if applicable
                            </p>
                        </div>
                        <img src="/assets/images/Arrow 7.svg" className={`${classes.nextArrow} ${classes.nextArrowUp}`} alt="" />
                        <div className={`${classes.nextStep} ${classes.nextStep4}`}>
                            <div className={classes.nextStepCircle}>
                                <img src="/assets/images/Ellipse 96.svg" className={classes.stepBg} alt="" />
                                <span>4</span>
                            </div>
                            <p>
                                <strong>Final confirmation</strong> &amp; remaining fee will be
                                requested only after the call
                            </p>
                        </div>
                    </div>
                </section>

                {/* What People Are Saying */}
                <section className={classes.testimonialSection}>
                    <div className={classes.decoEdgePink}></div>
                    <div className={classes.decoEdgeBlue}></div>


                    <div className={classes.testimonialContainer}>
                        <div className={classes.testimonialHeader}>
                            <h2 className={classes.testimonialTitle}>What people are</h2>
                            <h3 className={classes.testimonialScript}>Saying</h3>
                        </div>

                        <div className={classes.testimonialTabs}>
                            <button className={classes.testimonialTabActive}>All</button>
                            <button className={classes.testimonialTab}>Parents</button>
                            <button className={classes.testimonialTab}>Students</button>
                            <button className={classes.testimonialTab}>Educators</button>
                            <button className={classes.testimonialTab}>Experts</button>
                        </div>

                        <div className={classes.testimonialGrid}>
                            {/* 6 testimonial cards */}
                            <div className={classes.testimonialCard}>
                                <div className={classes.quoteIconPurple}>&ldquo;</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna ali
                                </p>
                                <div className={classes.testimonialFooter}>
                                    <div>
                                        <strong>Harsh Yadav</strong>
                                        <span>Student, Lorem Ipsum University</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.testimonialCard}>
                                <div className={classes.quoteIconBlue}>&ldquo;</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna ali
                                </p>
                                <div className={classes.testimonialFooter}>
                                    <div>
                                        <strong>Avinash Kumar</strong>
                                        <span>Student, Lorem Ipsum University</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.testimonialCard}>
                                <div className={classes.quoteIconOrange}>&ldquo;</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna ali
                                </p>
                                <div className={classes.testimonialFooter}>
                                    <div>
                                        <strong>Shivanshu</strong>
                                        <span>Student, Lorem Ipsum University</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.testimonialCard}>
                                <div className={classes.quoteIconPurple}>&ldquo;</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna ali
                                </p>
                                <div className={classes.testimonialFooter}>
                                    <div>
                                        <strong>Aleena</strong>
                                        <span>Student, Lorem Ipsum University</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.testimonialCard}>
                                <div className={classes.quoteIconOrange}>&ldquo;</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna ali
                                </p>
                                <div className={classes.testimonialFooter}>
                                    <div>
                                        <strong>Medhansh</strong>
                                        <span>Student, Lorem Ipsum University</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.testimonialCard}>
                                <div className={classes.quoteIconBlue}>&ldquo;</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna ali
                                </p>
                                <div className={classes.testimonialFooter}>
                                    <div>
                                        <strong>Naitik</strong>
                                        <span>Student, Lorem Ipsum University</span>
                                    </div>
                                </div>
                            </div>
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

                {/* Footer CTA Removed as requested */}
            </main>
            <div style={{ marginTop: '-8vw', position: 'relative', zIndex: 1 }}>
                <Footer />
            </div>
        </>
    );
}
