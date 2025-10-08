"use client";
import React, { useState, useEffect, useRef } from "react";
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
  // console.log('----data',data);
  const [timelineStyle, setTimelineStyle] = useState({ top: 0, height: 0 });
  const tocRef = useRef(null);
  const blog = data?.[0];
  const [updatedHtml, setUpdatedHtml] = useState(blog?.blog_content || "");
  // console.log("----blog", blog);

  // ✅ Keep updatedHtml in sync with new blog content if data changes
  useEffect(() => {
    setUpdatedHtml(blog?.blog_content || "");
  }, [blog]);
  const headings = [];

  const options = {
    replace: (domNode) => {
      // ✅ Check if it's a heading (h1–h4)
      if (domNode.name && ["h1", "h2", "h3", "h4"].includes(domNode.name)) {
        // Convert children (may include <strong>)
        const textContent = domToReact(domNode.children);

        // Extract plain text (including text inside <strong>)
        const plainText = domNode.children
          .map((c) => {
            if (c.type === "text") return c.data;
            if (c.name === "strong" && c.children) {
              return c.children.map((cc) => cc.data || "").join(" ");
            }
            return "";
          })
          .join(" ")
          .trim();

        const id = slugify(plainText || "section");
        headings.push({ id, text: plainText, level: domNode.name });

        // ✅ Now also style/handle <strong> tags inside headings
        const updatedChildren = domToReact(domNode.children, {
          replace: (childNode) => {
            if (childNode.name === "strong") {
              return (
                <strong style={{ color: "#d4af37" }}>
                  {domToReact(childNode.children)}
                </strong>
              );
            }
          },
        });

        return React.createElement(domNode.name, { id }, updatedChildren);
      }
    },
  };

  const parsedContent = parse(blog?.blog_content, options);

  const [selectedId, setSelectedId] = useState("");
  const COLOR_CLASSES = ["color1", "color2", "color3", "color4"];
  function getDeterministicColor(tag, prevClass) {
    // Simple hash based on string
    const hash = [...tag].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

    // Ensure we don’t repeat previous class
    const available = COLOR_CLASSES.filter((c) => c !== prevClass);

    return available[hash % available.length];
  }
  useEffect(() => {
    if (!tocRef.current) return;

    const listItems = tocRef.current.querySelectorAll("li");
    if (listItems.length === 0) return;

    const firstItem = listItems[0];
    const lastItem = listItems[listItems.length - 1];

    // Get the dot elements if they exist
    const firstDot = firstItem.querySelector(`.${classes.dots}`);
    const lastDot = lastItem.querySelector(`.${classes.dots}`);

    if (!firstDot || !lastDot) return;

    const tocRect = tocRef.current.getBoundingClientRect();
    const firstDotRect = firstDot.getBoundingClientRect();
    const lastDotRect = lastDot.getBoundingClientRect();

    const top = firstDotRect.top - tocRect.top;
    const height = lastDotRect.top - firstDotRect.top;

    setTimelineStyle({ top, height });
  }, [headings.length]);

  return (
    <>
      <Navbar />
      <BackgroundBoxesWrapper invert={true}>
        <section className={classes.container}>
          <div className={classes.box}>
            <Link className={classes.back} href={"/blog"}>
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
                <CopyBtn data={blog} />
              </div>
            </div>
          </div>

          <div className={classes.parent}>
            {/* ✅ TOC injects heading IDs + sends updated HTML */}

            <div className={classes.toc} ref={tocRef}>
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
              <div
                style={{
                  top: `${timelineStyle.to + 1}px`,
                  height: `${timelineStyle.height}px`,
                }}
                className={classes.timeline}
              ></div>
            </div>
            <div className={classes.cont}>
              <div className={` ${classes.customStyle}`}>{parsedContent}</div>

              <div className={classes.tags}>
                {
                  blog?.blog_tags?.reduce(
                    (acc, tag, index) => {
                      const colorClass = getDeterministicColor(
                        tag,
                        acc.lastColor
                      );

                      acc.elements.push(
                        <div
                          key={index}
                          className={`${classes.tag} ${classes[colorClass]}`}
                        >
                          {tag}
                        </div>
                      );

                      acc.lastColor = colorClass;
                      return acc;
                    },
                    { elements: [], lastColor: null }
                  ).elements
                }
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
