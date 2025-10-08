import BlogPage from "@/containers/BlogPage/BlogPage";
import React from "react";

const BlogRoute = () => {
  return <BlogPage />;
};

export default BlogRoute;

export async function generateMetadata() {
  // read route params

  return {
    title:
      "Roobaroo.ai Blog | Insights on Growth, Wellness, & Holistic Development",
    description:
      "Explore thoughtful articles on growth, wellness, and holistic development.",
    keywords:
      "Roobaroo.ai blog, holistic education, emotional wellbeing, youth development, student success, career clarity, school innovation, personal growth, Roobaroo insights",
    alternates: {
      canonical: "https://www.roobaroo.ai/blog",
    },
    openGraph: {
      title: "Roobaroo.ai | Blog – Insights on Growth & Wellness",
      description:
        "Explore thoughtful articles on growth, wellness, and holistic living.",
      url: "https://www.roobaroo.ai/blog",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/images/metalogo.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Blog – Insights on Growth & Wellness",
          type: "image/png",
        },
      ],
    },
  };
}
