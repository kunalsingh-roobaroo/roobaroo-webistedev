import ColorPage from "@/containers/ColorPage/ColorPage";
import React from "react";

const ColorRoute = () => {
  return <ColorPage />;
};

export default ColorRoute;

export async function generateMetadata() {
  // read route params

  return {
    title: "Brand Colors",
    description:
      " Explore Roobaroo.ai’s color palette — shades of blue, coral pink, and purple representing growth, wellness, and balance.",
    keywords:
      "Roobaroo.ai colors, brand palette, brand identity, visual design, color codes, branding palette, design colors, emotional palette, design system",
    alternates: {
      canonical: "http://www.roobaroo.ai/brand-assets/colors",
    },
    openGraph: {
      title: "Roobaroo.ai | Brand Colors",
      description:
        "Explore Roobaroo.ai’s color palette symbolizing growth and balance.",
      url: "http://www.roobaroo.ai/brand-assets/colors",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
              url: "/assets/opengraph/metacolor.png",  // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Brand Colors",
          type: "image/png",
        },
      ],
    },
  };
}
