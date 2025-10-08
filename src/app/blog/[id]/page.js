import IndividualBlogPage from "@/containers/IndividualBlogPage/IndividualBlogPage";
import { getData } from "@/functions/getData";
import { api_Urls } from "@/lib/apiUrls";
import { baseUrl, slugify } from "@/lib/constants";
import React from "react";

const INDIVIDUALBLOGROUTE = async ({ params }) => {
  const id = (await params)?.id;
  const data = await getData(`${baseUrl}${api_Urls.GET_INDIVIDUAL_BLOG}${id}`);

  return <IndividualBlogPage data={data} />;
};

export default INDIVIDUALBLOGROUTE;

export async function generateMetadata({ params }) {
  // read route params
  const id = (await params)?.id;
  const data = await getData(`${baseUrl}${api_Urls.GET_INDIVIDUAL_BLOG}${id}`);
  const blog = data?.[0];
  return {
    title: blog?.blog_page_title,
    description: blog?.blog_meta_description,
    keywords: `Roobaroo.ai blog, holistic education, youth development, career clarity, school innovation, personal growth, Roobaroo insights,${blog?.blog_meta_keywords}`,
    alternates: {
      canonical: `https://www.roobaroo.ai/blog/${slugify(
        blog?.blog_seo_title
      )}`,
    },
    openGraph: {
      title: `Roobaroo.ai | Blog – ${blog?.blog_page_title}`,
      description: blog?.blog_meta_description,
      url: `https://www.roobaroo.ai/blog/${slugify(blog?.blog_seo_title)}`,
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: blog?.blog_thumbnail_image, // ✅ relative path to public folder
          width: 530, // recommended
          height: 278,
          alt: blog?.blog_page_title,
          type: "image/png",
        },
      ],
    },
  };
}
