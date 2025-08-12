"use client";
import React, { useState } from "react";
import classes from "./BlogCards.module.css";
import { tilethumbnail } from "../../../../../public/assets/images";
import Image from "next/image";
import { staticAlt } from "@/lib/constants";
import { Pagination, Stack } from "@mui/material";
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

  // Handle page change
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Paginated data
  const paginatedBlogs = blogData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className={classes.container}>
      <p className={classes.headtxt}>All Blogs</p>
      <div className={classes.blogs}>
        {paginatedBlogs?.map((value, index) => (
          <div key={index} className={classes.blog}>
            <div className={classes.thumbnail}>
              <Image src={value.thumbnail} fill alt={staticAlt} />
            </div>
            <div className={classes.txtdiv}>
              <p className={classes.date}>{value.subtxt}</p>
              <p className={classes.title}>{value.title}</p>
              <p className={classes.subtite}>{value.subtitle}</p>
            </div>

            <div className={classes.tags}>
              {value.tags?.map((tag, idx) => (
                <span key={idx} className={classes.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Stack spacing={2} alignItems="center" alignSelf={'center'} marginTop={4}>
        <Pagination
         count={Math.ceil(blogData.length / itemsPerPage)}
  page={page}
  onChange={handleChange}
//   variant="outlined"
  shape="rounded"
    sx={{
      "& .MuiPaginationItem-root": {
        fontWeight: 600,
        fontSize: "1rem",
        color: "#7b5ca7", // purple text for inactive
      },
      "& .MuiPaginationItem-root.Mui-selected": {
        backgroundColor: "#7b5ca7", // purple background
        color: "#fff",
        borderRadius: "50%",
      },
      "& .MuiPaginationItem-root.Mui-selected:hover": {
        backgroundColor: "#6a4b94", // darker purple hover
      },
      "& .MuiPaginationItem-previousNext": {
        color: "#7b5ca7", // arrow color
      },
    }}
        />
      </Stack>
    </div>
  );
};

export default BlogCards;
