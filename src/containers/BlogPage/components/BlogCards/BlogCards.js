"use client";
import React, { useState } from "react";
import classes from "./BlogCards.module.css";
import { tilethumbnail } from "../../../../../public/assets/images";
import Image from "next/image";
import { baseUrl, formatDate, slugify, staticAlt } from "@/lib/constants";
import { Pagination, Stack } from "@mui/material";
import Link from "next/link";
import { api_Urls } from "@/lib/apiUrls";
import useFetchData from "@/hooks/useFetchData";
import { trackEvent } from "@/utils/ga4";
const BlogCards = () => {
  const blogData = [
    {
      thumbnail: tilethumbnail,
      subtxt: "JULY 10    |    FOUNDING TEAM    |    WELLNESS",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      subtitle: `Here's how we’re creating platforms where young people feel seen, safe, and empowered.`,
      tags: ["growth", "tips", "content"],
    },
    {
      thumbnail: tilethumbnail,
      subtxt: "JULY 10    |    FOUNDING TEAM    |    WELLNESS",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      subtitle: `Here's how we’re creating platforms where young people feel seen, safe, and empowered.`,
      tags: ["growth", "tips", "content"],
    },
    {
      thumbnail: tilethumbnail,
      subtxt: "JULY 10    |    FOUNDING TEAM    |    WELLNESS",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      subtitle: `Here's how we’re creating platforms where young people feel seen, safe, and empowered.`,
      tags: ["growth", "tips", "content"],
    },
    {
      thumbnail: tilethumbnail,
      subtxt: "JULY 10    |    FOUNDING TEAM    |    WELLNESS",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      subtitle: `Here's how we’re creating platforms where young people feel seen, safe, and empowered.`,
      tags: ["growth", "tips", "content"],
    },
    {
      thumbnail: tilethumbnail,
      subtxt: "JULY 10    |    FOUNDING TEAM    |    WELLNESS",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      subtitle: `Here's how we’re creating platforms where young people feel seen, safe, and empowered.`,
      tags: ["growth", "tips", "content"],
    },
    {
      thumbnail: tilethumbnail,
      subtxt: "JULY 10    |    FOUNDING TEAM    |    WELLNESS",
      title: "Why Young Voices Matter: we Build Safe Spaces for Expression",
      subtitle: `Here's how we’re creating platforms where young people feel seen, safe, and empowered.`,
      tags: ["growth", "tips", "content"],
    },
  ];
  const itemsPerPage = 3; // Number of blogs per page
  const [page, setPage] = useState(1);
  const { data, loading, error, count } = useFetchData(
    `${baseUrl}${api_Urls.GET_BLOG}?page=${page}&limit=${itemsPerPage}`
  );
  const COLOR_CLASSES = ["color1", "color2", "color3", "color4"];

  function getRandomColorClass(prevClass) {
    const available = COLOR_CLASSES.filter((c) => c !== prevClass);
    return available[Math.floor(Math.random() * available.length)];
  }
  // console.log('------data',data);

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Paginated data
  // const paginatedBlogs = blogData.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage
  // );
  const totalPages = Math.ceil(count / itemsPerPage);
  return (
    <div className={classes.container}>
      <p className={classes.headtxt}>All Blogs :</p>
      <div className={classes.blogs}>
        {data?.map((value, index) => (
          <Link
            href={`/blog/${value?.blog_seo_title}`}
            key={index}
            className={classes.blog}
            onClick={() =>
              trackEvent({
                category: "Blog",
                action: "On_click",
                label: "Blog Opened",
                value: `Blog opened : ${value?.blog_title}`,
              })
            }
          >
            <div className={classes.thumbnail}>
              <Image src={value?.blog_thumbnail_image} fill alt={staticAlt} />
            </div>
            <div className={classes.txtdiv}>
              <p className={classes.date}>{`${formatDate(
                value?.blog_published_at
              )} | ${value?.category_name} | ${value?.sub_category_name}`}</p>
              <p className={classes.title}> {value?.blog_title}</p>
              <p className={classes.subtite}>{value?.blog_summary}</p>
            </div>

            <div className={classes.tags}>
              {
                value?.blog_tags?.reduce(
                  (acc, tag, index) => {
                    const prevColor = acc.lastColor; // only track the color
                    const colorClass = getRandomColorClass(prevColor);

                    acc.elements.push(
                      <div
                        key={index}
                        className={`${classes.tag} ${classes[colorClass]}`}
                      >
                        {tag}
                      </div>
                    );

                    acc.lastColor = colorClass; // update last color
                    return acc;
                  },
                  { elements: [], lastColor: null }
                ).elements
              }
            </div>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <Stack
          spacing={2}
          alignItems="center"
          alignSelf={"center"}
          marginTop={4}
        >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                fontWeight: 600,
                fontSize: "1rem",
                color: "#7b5ca7",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#7b5ca7",
                color: "#fff",
                borderRadius: "50%",
              },
              "& .MuiPaginationItem-root.Mui-selected:hover": {
                backgroundColor: "#6a4b94",
              },
              "& .MuiPaginationItem-previousNext": {
                color: "#7b5ca7",
              },
            }}
          />
        </Stack>
      )}
    </div>
  );
};

export default BlogCards;
