export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: '/private/',
    },
    sitemap: "https://www.roobaroo.ai/sitemap.xml",
  };
}
