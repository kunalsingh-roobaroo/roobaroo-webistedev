import UsageGuidelines from "@/containers/UsageGuidelinesPage/UsageGuidelines";
import React from "react";

const UsageGuidelinesRoutes = () => {
  return <UsageGuidelines />;
};

export default UsageGuidelinesRoutes;

export async function generateMetadata() {
  // read route params

  return {
    title: "Brand Usage Guidelines",
    description:
      "Learn how to use Roobaroo.ai’s logos, colors, and typography consistently across platforms for brand alignment.",
    keywords:
      " Roobaroo.ai brand guidelines, brand usage, design manual, visual identity, assets, logo rules, brand standards, Roobaroo brandkit, design guide, brand consistency",
    alternates: {
      canonical: "https://www.roobaroo.ai/brand-assets/usage-guidelines",
    },
    openGraph: {
      title: "Roobaroo.ai | Brand Usage Guidelines",
      description:
        "Access Roobaroo’s official logos, colors, fonts, and usage guidelines.",
      url: "https://www.roobaroo.ai/brand-assets/usage-guidelines",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/images/metalogo.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Brand Usage Guidelines",
          type: "image/png",
        },
      ],
    },
  };
}
