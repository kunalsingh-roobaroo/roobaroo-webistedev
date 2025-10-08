import BrandKit from "@/containers/BrandKit/BrandKit";
import React from "react";

const BrandKitRoute = () => {
  return <BrandKit />;
};

export default BrandKitRoute;

export async function generateMetadata() {
  // read route params

  return {
    title: "Brand Resource Center",
    description:
      "Access our official logos, colors, fonts, and usage guidelines for media, collaborators, and partners.",
    keywords:
      "Roobaroo.ai brand assets, Roobaroo.ai logo, Roobaroo.ai media kit, Roobaroo.ai branding, Roobaroo brand guidelines, Roobaroo media kit, Roobaroo.ai colors, Roobaroo.ai press kit",
    alternates: {
      canonical: "https://www.roobaroo.ai/brand-assets",
    },
    openGraph: {
      title: "Roobaroo.ai | Brand Resource Center",
      description:
        "Access Roobaroo’s official logos, colors, fonts, and usage guidelines.",
      url: "http://www.roobaroo.ai/brand-assets",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/images/metalogo.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Brand Resource Center",
          type: "image/png",
        },
      ],
    },
  };
}
