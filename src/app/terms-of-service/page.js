import Tnc from "@/containers/Tnc/Tnc";
import React from "react";

const TermsAndCondition = () => {
  return <Tnc />;
};

export default TermsAndCondition;

export async function generateMetadata() {
  // read route params

  return {
    title: "Terms of Service",
    description:
      "Review our Terms of Service that outline the use of our platform, programs, and services",
    keywords:
      "Roobaroo.ai terms of service, website terms, user agreement, service conditions",
    alternates: {
      canonical: "https://www.roobaroo.ai/terms-of-service",
    },
    openGraph: {
      title: "Roobaroo.ai | Terms of Service",
      description:
        "Review Roobaroo.ai’s service terms for platform and program use.",
      url: "https://www.roobaroo.ai/terms-of-service",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/images/metalogo.png", // ✅ relative path to public folder
           width: 450, // recommended
        height: 118,
          alt: "Roobaroo.ai | Terms of Service",
          type: "image/png",
        },
      ],
    },
  };
}
