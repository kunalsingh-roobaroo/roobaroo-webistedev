import LogoPage from "@/containers/LogoPage/Logo";
import React from "react";

const LogoRoute = () => {
  return <LogoPage />;
};

export default LogoRoute;

export async function generateMetadata() {
  // read route params

  return {
    title: "Official Logos",
    description: " Download Primary & Secondary Brand Logos of Roobaroo.ai",
    keywords:
      "Roobaroo.ai Logo, roobaroo official assets, brand identity, logo download, media kit, logo guidelines, brand mark, design assets, roobaroo branding, visual identity",
    alternates: {
      canonical: "http://www.roobaroo.ai/brand-assets/logos",
    },
    openGraph: {
      title: "Roobaroo.ai | Official Logos",
      description:
        "Download primary and secondary Roobaroo.ai brand logos.",
      url: "http://www.roobaroo.ai/brand-assets/logos",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
             url: "/assets/opengraph/metalogos.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Official Logos",
          type: "image/png",
        },
      ],
    },
  };
}
