import TypographyPage from "@/containers/TypographyPage/page";
import React from "react";

const TypographyPageRoute = () => {
  return <TypographyPage />;
};

export default TypographyPageRoute;

export async function generateMetadata() {
  // read route params

  return {
    title: "Typography",
    description:
      "Discover Roobaroo.ai’s typography system that expresses growth and wellness through type.",
    keywords:
      "Roobaroo.ai typography, brand fonts, font usage, design system, visual identity, brand consistency, text style, font pairing, ui design, communication design",
    alternates: {
      canonical: "http://www.roobaroo.ai/brand-assets/typography",
    },
    openGraph: {
      title: "Roobaroo.ai | Typography",
      description:
        "Discover the fonts and type principles behind Roobaroo.ai’s design.",
      url: "http://www.roobaroo.ai/brand-assets/typography",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
         url: "/assets/opengraph/metatypo.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Typography",
          type: "image/png",
        },
      ],
    },
  };
}
