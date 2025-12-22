import RefundPolicy from "@/containers/RefundPolicy/RefundPolicy";
import React from "react";

const RefundPolicyRoute = () => {
  return <RefundPolicy />;
};

export default RefundPolicyRoute;

export async function generateMetadata() {
  return {
    title: "Refund & Cancellation Policy",
    description:
      "Read our Refund & Cancellation Policy. All purchases on Roobaroo.ai including digital products, courses, and subscriptions are non-refundable.",
    keywords:
      "Roobaroo.ai refund policy, cancellation policy, no refund policy, digital products refund, subscription cancellation",
    alternates: {
      canonical: "https://www.roobaroo.ai/refund-policy",
    },
    openGraph: {
      title: "Roobaroo.ai | Refund Policy",
      description:
        "Understand Roobaroo.ai's refund, cancellation, and return terms.",
      url: "https://www.roobaroo.ai/refund-policy",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/assets/opengraph/metahome.png",
          width: 450,
          height: 118,
          alt: "Roobaroo.ai | Refund Policy",
          type: "image/png",
        },
      ],
    },
  };
}
