import React, { useState } from 'react';
import classes from './FAQ.module.css';
import { faqData } from './faqData';

const FAQ = () => {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [openItemIndex, setOpenItemIndex] = useState(null);

    const activeCategory = faqData[activeCategoryIndex];

    const toggleItem = (index) => {
        setOpenItemIndex(openItemIndex === index ? null : index);
    };

    return (
        <section className={classes.faqSection}>
            <div className={classes.container}>


                <div className={classes.contentWrapper}>
                    {/* Left Column - Header & Categories */}
                    <div className={classes.leftColumn}>
                        <div className={classes.faqHeader}>
                            <h2 className={classes.title}>Frequently</h2>
                            <div className={classes.scriptWrapper}>
                                <h3 className={classes.scriptTitle}>Asked</h3>
                                <h3 className={classes.scriptTitle}>Questions</h3>
                            </div>
                        </div>

                        <div className={classes.sidebar}>
                            {faqData.map((category, index) => (
                                <div
                                    key={index}
                                    className={`${classes.categoryItem} ${activeCategoryIndex === index ? classes.categoryActive : ''}`}
                                    onClick={() => {
                                        setActiveCategoryIndex(index);
                                        setOpenItemIndex(null); // Reset open item when switching categories
                                    }}
                                >
                                    {category.category}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Accordions */}
                    <div className={classes.accordionsWrapper}>
                        {activeCategory.items.map((item, index) => {
                            const isOpen = openItemIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`${classes.accordionItem} ${isOpen ? classes.accordionOpen : ''}`}
                                    onClick={() => toggleItem(index)}
                                >
                                    <div className={classes.accordionHeader}>
                                        <h4 className={classes.questionText}>{item.question}</h4>
                                        <span className={classes.toggleIcon}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {isOpen ? <polyline points="18 15 12 9 6 15"></polyline> : <polyline points="6 9 12 15 18 9"></polyline>}
                                            </svg>
                                        </span>
                                    </div>
                                    <div
                                        className={classes.accordionBody}
                                        style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
                                    >
                                        <p className={classes.answerText}>{item.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
