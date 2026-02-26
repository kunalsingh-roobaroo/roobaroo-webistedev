import DetailedSchedulePage from "@/containers/DetailedSchedulePage/DetailedSchedulePage";
import React from "react";

export default function DetailedScheduleRoute() {
    return <DetailedSchedulePage />;
}

export async function generateMetadata() {
    return {
        title: "Detailed Program Schedule | The 21st Century Summer Camp",
        description:
            "Explore the day-by-day detailed schedule for The 21st Century Summer Camp. From Career Lab to Startup Challenge and Digital Detox.",
        alternates: {
            canonical: "https://www.roobaroo.ai/summer-camp/schedule",
        },
        openGraph: {
            title: "Detailed Program Schedule | The 21st Century Summer Camp",
            description:
                "Explore the day-by-day detailed schedule for The 21st Century Summer Camp.",
            url: "https://www.roobaroo.ai/summer-camp/schedule",
            siteName: "Roobaroo.ai",
            locale: "en_US",
            type: "website",
        },
    };
}
