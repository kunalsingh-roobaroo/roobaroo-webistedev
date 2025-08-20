"use client";
import React, { useState, useEffect } from "react";
import classes from "./IndividualModule.module.css";
import Link from "next/link";
import Image from "next/image";
import { backarrow, stroke } from "../../../public/assets/icons";
import { formatDate, staticAlt } from "@/lib/constants";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogCarousel from "../BlogPage/components/BlogHero/Carousel/BlogCarousel";
import BackgroundBoxesWrapper from "@/components/BackgroundWrapper/BackgroundWrapper";
import parse, { domToReact } from "html-react-parser";
import Share from "@/components/Share/Share";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "") // remove special chars
    .trim()
    .replace(/\s+/g, "-"); // replace spaces with -
}

const IndividualBlogPage = ({ data }) => {
  const blog = data?.[0];
  const [updatedHtml, setUpdatedHtml] = useState(blog?.blog_content || "");

  // ✅ Keep updatedHtml in sync with new blog content if data changes
  useEffect(() => {
    setUpdatedHtml(blog?.blog_content || "");
  }, [blog]);
  const headings = [];

  const options = {
    replace: (domNode) => {
      if (domNode.name && ["h1", "h2", "h3", "h4"].includes(domNode.name)) {
        const textContent = domToReact(domNode.children); // children = text inside heading
        const plainText = domNode.children
          .map((c) => c.data || "")
          .join(" ")
          .trim();

        const id = slugify(plainText || "section"); // fallback if empty
        headings.push({ id, text: plainText, level: domNode.name });

        return React.createElement(domNode.name, { id }, textContent);
      }
    },
  };

  const parsedContent = parse(blog?.blog_content, options);

  const [selectedId, setSelectedId] = useState("");
  const COLOR_CLASSES = ["color1", "color2", "color3", "color4"];

  function getRandomColorClass(prevClass) {
    const available = COLOR_CLASSES.filter((c) => c !== prevClass);
    return available[Math.floor(Math.random() * available.length)];
  }


  // const cssAppliedContent = (body) => {
  //   return `
  //     <div class="custom-style" style="width: 100%;">
  //       <style>
  //         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

  //         .custom-style {
  //           font-family: 'Montserrat', sans-serif;
  //           padding: 0;
  //           margin-top: 10px;
  //           color: #000;
  //         }
  //         .custom-style a {
  //           color: #000;
  //           font-family: 'Montserrat', sans-serif;
  //           font-size: 1.38888888889vw;
  //           font-weight: 300;
  //           line-height: 147%;
  //           text-align: left;
  //           margin-bottom: 16px;
  //           text-decoration: underline;
  //         }
  //         .custom-style table {
  //           margin: 0 auto 16px auto;
  //           border-collapse: collapse;
  //           width: 100%;
  //           font-size: 16px;
  //           text-align: center;
  //         }
  //         .custom-style th,
  //         .custom-style td {
  //           border: 1px solid black;
  //           padding: 8px;
  //           text-align: center;
  //           vertical-align: middle;
  //         }
  //         .custom-style img {
  //           display: block;
  //           max-width: 100%;
  //           height: auto;
  //           width: 100%;
  //           object-fit: cover;
  //           margin-bottom: 16px;
  //         }
  //         .custom-style p {
  //           color: #000;
  //           font-family: 'Montserrat', sans-serif;
  //           font-size: 1.38888888889vw;
  //           font-weight: 300;
  //           line-height: 147%;
  //           text-align: left;
  //           margin-bottom: 16px;
  //         }
  //         .custom-style h1,
  //         .custom-style h2,
  //         .custom-style h3,
  //         .custom-style h4,
  //         .custom-style h5,
  //         .custom-style h6 {
  //           color: #000 !important;
  //           font-family: 'Montserrat', sans-serif;
  //           font-size: 1.38888888889vw;
  //           font-weight: 700;
  //           line-height: 32.965px;
  //           text-align: left;
  //           margin-bottom: 16px;
  //         }
  //         .custom-style ul,
  //         .custom-style ol {
  //           text-align: left;
  //           font-family: 'Montserrat', sans-serif;
  //           color: #000;
  //           margin-bottom: 16px;
  //           padding-left: 20px;
  //         }
  //         .custom-style li {
  //           margin-bottom: 5px;
  //           list-style-position: inside;
  //           word-wrap: break-word;
  //           overflow-wrap: break-word;
  //         }
  //         .custom-style li p {
  //           display: inline;
  //           margin: 0;
  //           padding: 0;
  //         }
  //       </style>
  //       ${body}
  //     </div>
  //   `;
  // };

  return (
    <>
      <Navbar />
      <BackgroundBoxesWrapper invert={true}>
        <section className={classes.container}>
          <div className={classes.box}>
            <Link className={classes.back} href={"/blogs"}>
              <div className={classes.backarrow}>
                <Image src={backarrow} fill alt={staticAlt} />
              </div>
              <p className={classes.backbt}>Back</p>
            </Link>

            <div className={classes.titlesection}>
              <p className={classes.mobsubttx}>
                <span>{formatDate(blog?.blog_published_at)}</span>
                <span className={classes.separator}>|</span>
                <span>{blog?.category_name}</span>
                <span className={classes.separator}>|</span>
                <span>{blog?.sub_category_name}</span>
              </p>

              <h1 className={classes.title}>{blog?.blog_title}</h1>

              <div className={classes.thumbnail}>
                <Image src={blog?.blog_banner_image} fill alt={staticAlt} />
              </div>

              <div className={classes.subtop}>
                <p className={classes.subttx}>
                  <span>{formatDate(blog?.blog_published_at)}</span>
                  <span className={classes.separator}>|</span>
                  <span>{blog?.category_name}</span>
                  <span className={classes.separator}>|</span>
                  <span>{blog?.sub_category_name}</span>
                </p>
                <CopyBtn />
              </div>
            </div>
          </div>

          <div className={classes.parent}>
            {/* ✅ TOC injects heading IDs + sends updated HTML */}

            <div className={classes.toc}>
              <h2 className={classes.tocitem}>
                Overview{" "}
                <span>
                  {" "}
                  <div className={classes.dots}></div>
                </span>
              </h2>
              {headings.length > 0 ? (
                <ul className={classes.list}>
                  {headings
                    .filter((h) => h.text && h.text.length > 0) // only headings with text
                    .map((h, i) => (
                      <li
                        key={i}
                        className={`${classes[h.level]} ${classes.tocitem} ${
                          selectedId === h.id ? classes.activeToc : ""
                        }`}
                        onClick={() => setSelectedId(h.id)}
                      >
                        <a href={`#${h.id}`}>{h.text}</a>
                        <div className={classes.dots}></div>
                      </li>
                    ))}
                </ul>
              ) : (
                <p className={classes.noHeadings}>No sections available</p>
              )}
              <div className={classes.timeline}></div>
            </div>
            <div className={classes.cont}>
              <div className={` ${classes.customStyle}`}>{parsedContent}</div>

              <div className={classes.tags}>
                {(() => {
                  let prevClass = null; // track previous color class
                  return blog?.blog_tags.map((tag, index) => {
                    const colorClass = getRandomColorClass(prevClass);
                    prevClass = colorClass; // update prevClass for next iteration

                    return (
                      <div
                        key={index}
                        className={`${classes.tag} ${classes[colorClass]}`}
                      >
                        {tag}
                      </div>
                    );
                  });
                })()}
              </div>
              <Share />
            </div>
          </div>
        </section>

        <div className={classes.stroke}>
          <Image src={stroke} fill alt={staticAlt} />
        </div>

        <div className={classes.otherarticles}>
          <p className={classes.featuretxt}>Check out other articles :</p>
          <div className={classes.carousel}>
            <BlogCarousel related={true} />
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
      </BackgroundBoxesWrapper>
    </>
  );
};

export default IndividualBlogPage;
