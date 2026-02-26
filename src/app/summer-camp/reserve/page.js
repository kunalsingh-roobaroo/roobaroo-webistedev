import ReserveNowPage from "@/containers/ReserveNowPage/ReserveNowPage";
import React from "react";

export default function ReserveNowRoute() {
    return <ReserveNowPage />;
}

export async function generateMetadata() {
    return {
        title: "Reserve Your Seat | The 21st Century Summer Camp",
        description:
            "Reserve your spot for The 21st Century Summer Camp. Limited to 60 students per batch. Early bird pricing available.",
        alternates: {
            canonical: "https://www.roobaroo.ai/summer-camp/reserve",
        },
        openGraph: {
            title: "Reserve Your Seat | The 21st Century Summer Camp",
            description:
                "Reserve your spot for The 21st Century Summer Camp by Roobaroo.ai.",
            url: "https://www.roobaroo.ai/summer-camp/reserve",
            siteName: "Roobaroo.ai",
            locale: "en_US",
            type: "website",
        },
    };
}
