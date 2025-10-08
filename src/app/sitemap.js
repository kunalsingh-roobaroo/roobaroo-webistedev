import { api_Urls } from "@/lib/apiUrls";
import { baseUrl, slugify } from "@/lib/constants";
import { unstable_noStore as noStore } from "next/cache";
const fetchPaginatedData = async (url) => {
  const result = [];
  let page = 1;
  const limit = 100; // Adjust the limit as necessary

  while (true) {
    const response = await fetch(`${url}?page=${page}&limit=${limit}`);
    const data = await response.json();
    const items = data?.data || [];

    if (items.length === 0) {
      break; // Stop if no more items are available
    }

    result.push(...items); // Aggregate the fetched items
    page++; // Move to the next page
  }

  return result;
};

export default async function sitemap() {
  noStore();
  // Fetch stores data with pagination

  const BlogData = await fetchPaginatedData(`${baseUrl}${api_Urls.GET_BLOG}`);
  //   const Blogdata = await BlogData.json();
  //   const Blogitems = Blogdata?.data || [];

  const BlogEntries = BlogData?.map(({ blog_seo_title, createdAt }) => ({
    url: `https://www.roobaroo.ai/blog/${slugify(blog_seo_title)}`,
    lastModified: createdAt?.split("T")[0],
    changeFrequency: "daily",
    priority: 0.9,
  }));
  // Return the final sitemap with paginated data
  return [
    {
      url: "https://www.roobaroo.ai",
      lastModified: "2025-10-08",
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://www.roobaroo.ai/our-story",
      lastModified: "2025-10-08",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.roobaroo.ai/brand-assets",
      lastModified: "2025-10-08",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.roobaroo.ai/privacy-policy",
      lastModified: "2025-10-08",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.roobaroo.ai/terms-of-service",
      lastModified: "2025-10-08",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.roobaroo.ai/blog",
      lastModified: "2025-10-08",
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...BlogEntries,
  ];
}
