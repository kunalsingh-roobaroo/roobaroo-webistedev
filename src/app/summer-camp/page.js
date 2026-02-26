import SummerCampPage from "@/containers/SummerCampPage/SummerCampPage";
import React from "react";

export default function SummerCampRoute() {
  return <SummerCampPage />;
}

export async function generateMetadata() {
  return {
    title: "The 21st Century Summer Camp | Roobaroo.ai",
    description:
      "Your gateway to build the right skills, portfolio and confidence to stand out in the AI world. Career Lab, Startup Competition, AI Innovation Lab, Wellbeing Workshops. Grade 8-12. IIT Delhi.",
    keywords:
      "summer camp, 21st century skills, career lab, startup competition, AI innovation, student bootcamp, Roobaroo, IIT Delhi, Grade 8-12, wellbeing workshops",
    alternates: {
      canonical: "https://www.roobaroo.ai/summer-camp",
    },
    openGraph: {
      title: "The 21st Century Summer Camp | Roobaroo.ai",
      description:
        "Your gateway to become future-ready in an evolving AI world.",
      url: "https://www.roobaroo.ai/summer-camp",
      siteName: "Roobaroo.ai",
      locale: "en_US",
      type: "website",
    },
  };
}
