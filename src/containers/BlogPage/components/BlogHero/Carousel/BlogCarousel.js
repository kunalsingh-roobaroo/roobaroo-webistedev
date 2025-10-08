"use client";
import React from "react";
import Slider from "react-slick";
import classes from "./BlogCarousel.module.css";
import "./BlogCarousel.css";
import { featureimg } from "../../../../../../public/assets/images";
import Image from "next/image";
import { baseUrl, formatDate, staticAlt } from "@/lib/constants";
import { leftarrow } from "../../../../../../public/assets/icons";
import useFetchData from "@/hooks/useFetchData";
// import { api_Urls } from "@/lib/ApiUrls";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api_Urls } from "@/lib/apiUrls";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/utils/ga4";

// Import your custom arrow images

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div className={`customArrow customNext`} onClick={onClick}>
      <Image
        src={leftarrow}
        alt="Next"
        width={28}
        height={28}
        priority
        style={{ transform: "rotate(180deg)" }}
      />
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div className={`customArrow customPrev`} onClick={onClick}>
      <Image src={leftarrow} alt="Previous" width={28} height={28} priority />
    </div>
  );
};

const BlogCarousel = ({ related }) => {
  const { data, loading, error } = useFetchData(
    `${baseUrl}${api_Urls.GET_BLOG}?page=1&limit=${related ? 5 : 10000} ${
      related ? "" : "&featured=true"
    }`
  );

  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 450, // at 450px and below
        settings: {
          arrows: false,
          nextArrow: false,
          prevArrow: false, // hide arrows
          autoplay: true,
          autoplaySpeed: 3000,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={classes.carouselWrapper}>
      <Slider {...settings}>
        {data?.map((blog, index) => (
          <div key={index} className={classes.slide}>
            <div className={classes.lhs}>
              <p className={classes.date}>
                <span>{formatDate(blog?.blog_published_at)}</span>
                <span className={classes.separator}>|</span>
                <span>{blog?.category_name}</span>
                <span className={classes.separator}>|</span>
                <span>{blog?.sub_category_name}</span>
              </p>

              <Link
                href={`/blog/${blog?.blog_seo_title}`}
                className={classes.title}
                onClick={() =>
                  trackEvent({
                    category: "Blog",
                    action: "On_click",
                    label: "Blog Opened",
                    value: `Blog opened : ${blog?.blog_title}`,
                  })
                }
              >
                {blog?.blog_title}
              </Link>
              <div className={classes.imagewrapper}>
                <Image
                  src={blog?.blog_thumbnail_image}
                  alt={staticAlt}
                  fill
                  sizes="50vw"
                />
              </div>
              <p className={classes.description}>{blog?.blog_summary}</p>
            </div>
            <div
              onClick={() => {
                router.push(`/blog/${blog?.blog_seo_title}`);
              }}
              className={classes.rhs}
            >
              <Image
                src={blog?.blog_thumbnail_image}
                alt={staticAlt}
                fill
                sizes="50vw"
              />
              <div className={classes.overlay}>
                <p className={classes.readmore}>Read More </p>{" "}
                <ArrowUpRight
                  color="white"
                  size={28}
                  rotate={-45}
                  strokeWidth={3}
                />
              </div>
              {/* <div className={classes.boxshadow}>
                
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
