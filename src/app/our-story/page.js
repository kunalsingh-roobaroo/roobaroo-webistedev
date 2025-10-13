import BrandStory from "@/containers/BrandStory/BrandStory";
import React from "react";

const BrandStoryRoute = () => {
  return <BrandStory />;
};

export default BrandStoryRoute;

export async function generateMetadata() {
  // read route params

  return {
    title: "Our Story",
    description:
      " Learn the story behind Roobaroo.ai — why we started, the problem we’re solving, and the guiding principles shaping our mission to help people grow without burning out.",
    keywords:
      "Roobaroo.ai story, Roobaroo.ai origin, Roobaroo.ai brand story, What’s Roobaroo.ai, The Roobaroo Matrix, Roobaroo.ai philosophy, Roobaroo.ai Mission, Roobaroo.ai Vision, youth empowerment, Roobaroo.ai guiding principles, startup story, social impact brand",
    alternates: {
      canonical: "https://www.roobaroo.ai/our-story",
    },
    openGraph: {
      title: "Roobaroo.ai | Our Story",
      description:
        "Discover the story, purpose, and guiding principles behind Roobaroo.ai.",
      url: "https://www.roobaroo.ai/our-story",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: "/assets/opengraph/metastory.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Our Story",
          type: "image/png",
        },
      ],
    },
  };
}
