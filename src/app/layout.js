import { Montserrat, Lusitana, Quicksand, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const lusitana = Lusitana({
  variable: "--font-lusitana",
  subsets: ["latin"],
  weight: ["400", "700"], // Lusitana only supports 400 & 700
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Inter supports full range
});

export const metadata = {
  metadataBase: new URL("https://www.roobaroo.ai/"),
  title:
    "Grow Without Burning Out – Bootcamps, Masterclasses & Consulting for Students, Schools & Parents",
  description:
    "Holistic Programs that integrate career clarity, AI Mastery, Job Readiness, Startup Coaching, and 21st Century Skills with Emotional Resilience, Digital Wellbeing, Mental Health and Self-Coaching Mindset so that young minds can pursue success with stability.",
  keywords:
    "NEP Alignment, NEP 2020, Holistic Development, Teacher Training, Job Readiness, College Readiness, Startup Building, AI Mastery, Emotional Intelligence, Emotional Resilience, Digital Wellbeing, Self-Coaching, Leadership, New-age Schools, Student Bootcamps, Consulting, Grow without Burnout, student wellbeing, school consulting, holistic education, youth development, wellbeing bootcamp, masterclass for students, teacher wellbeing, parent workshops, student growth programs, mental wellness education, emotional wellbeing, holistic growth, parenting in 21st century, 21st century bootcamp",
  alternates: {
    canonical: "https://www.roobaroo.ai/",
  },
  openGraph: {
    title: "Roobaroo.ai I Grow without Burning out",
    description:
      "Holistic Programs that integrate career clarity, AI Mastery, Job Readiness, Startup Coaching, and 21st Century Skills with Emotional Resilience, Digital Wellbeing, Mental Health and Self-Coaching Mindset so that young minds can pursue success with stability.",
    url: "https://www.roobaroo.ai/",
    siteName: "Roobaroo.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/images/metalogo.png", // ✅ relative path to public folder
        width: 450, // recommended
        height: 118,
        alt: "Roobaroo.ai I Grow without Burning out",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-37KR3CQNGT"
        />
        <Script
          id="google-analytics"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
       window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-37KR3CQNGT');

            `,
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T7SVQGGP');

            `,
          }}
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body
        className={`${montserrat.variable} ${lusitana.variable} ${quicksand.variable} ${inter.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T7SVQGGP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
