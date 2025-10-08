import PrivacyPolicyPage from "@/containers/PrivacyPolicy/PrivacyPolicy";
import React from "react";

const PrivacyPolicyRoute = () => {
  return <PrivacyPolicyPage />;
};

export default PrivacyPolicyRoute;

export async function generateMetadata() {
  // read route params

  return {
    title: " Privacy Policy",
    description:
      "  Read our Privacy Policy to understand how we collect, use, and protect your information responsibly",
    keywords:
      " Roobaroo.ai privacy policy, data protection, user privacy, website privacy, data usage, data safety, privacy statement",
    alternates: {
      canonical: "https://www.roobaroo.ai/privacy-policy",
    },
    openGraph: {
      title: "Roobaroo.ai | Privacy Policy",
      description:
        "Learn how Roobaroo.ai collects, uses, and protects your data responsibly.",
      url: "https://www.roobaroo.ai/privacy-policy",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/images/metalogo.png", // ✅ relative path to public folder
          width: 450, // recommended
          height: 118,
          alt: "Roobaroo.ai | Privacy Policy",
          type: "image/png",
        },
      ],
    },
  };
}
