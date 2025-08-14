import BackgroundBoxesWrapper from "@/components/BackgroundWrapper/BackgroundWrapper";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import classes from "./Tnc.module.css";
import Link from "next/link";

const Tnc = () => {
  const privacySections = [
    {
      title: "1. Use of the Site",
      content: [
        {
          // section: "Personal Information You Provide",
          description:
            "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to::",
          items: [
            "Engage in any conduct that could disable, damage, or impair the Site",
            "Attempt to gain unauthorized access to any part of the Site",
            "Use the Site for fraudulent, deceptive, or unlawful activity",
            // "Any other details you provide",
          ],
        },
      ],
    },
    {
      title: "2.  Intellectual Property",
      content: [
        {
          // section: "",
          description:
            "All content on the Site — including text, graphics, images, videos, logos, and design — is owned by or licensed to us and protected under applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written consent.",
          // items: [
          //   "Operate, maintain, and improve the Site",
          //   "Analyze usage and optimize content",
          //   "Communicate with you (if you’ve contacted us or subscribed)",
          //   "Detect and prevent fraud or abuse",
          //   "Comply with legal obligations",
          // ],
        },
      ],
    },
    {
      title: "3. User Content",
      content: [
        {
          // section: "",
          description:
            "If we allow user-generated content (e.g., comments, submissions) in the future, you retain ownership of your content but grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute it in connection with the Site.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "4. Disclaimer",
      content: [
        {
          // section: "",
          description:
            "The Site and its content are provided “as is” and without warranties of any kind, express or implied. We do not warrant that the Site will be error-free, secure, or uninterrupted.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "5. Limitation of Liability",
      content: [
        {
          // section: "",
          description:
            "TTo the maximum extent permitted by law, we shall not be liable for any damages arising from your use of the Site, including but not limited to direct, indirect, incidental, or consequential damages.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },

    {
      title: "6. Indemnification",
      content: [
        {
          // section: "",
          description:
            "You agree to defend, indemnify, and hold harmless the Company from any claims, damages, or expenses arising from your violation of these Terms or misuse of the Site",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "7. Third-Party Links and Services",
      content: [
        {
          // section: "",
          description:
            "We may link to third-party websites or use third-party tools. We do not endorse and are not responsible for their content, policies, or practices.",
          // items: [
          //   "Access, correct, or delete personal data",
          //   "Restrict or object to data processing",
          //   "Withdraw consent to marketing communications",
          // ],
          // contactEmail: " contact@roobaroo.ai",
        },
      ],
    },
    {
      title: "8. Modification of Terms",
      content: [
        {
          // section: "",
          description:
            "We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the Site",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "9. Governing Law",
      content: [
        {
          // section: "",
          description:
            "These Terms are governed by the laws of [Insert Jurisdiction], without regard to its conflict of law principles",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "10. Contact Us",
      content: [
        {
          // section: "",
          description:
            "For questions about this Privacy Policy, contact us at:",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
          Email: "contact@roobaroo.ai",
          address:
            "ROOBAROO PRODUCTIONS PRIVATE LIMITED, INNOV8 ORCHID CENTER, 3RD FLOOR, NEAR IIIM INSTITUTE, DLF QE, GURUGRAM- 122002, HARYANA",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <BackgroundBoxesWrapper>
        <div className={classes.section}>
          <h1 className={classes.headtxt}>Terms of Service</h1>
          <h3 className={classes.subtxt}>
            These Terms of Service (“Terms”) govern your access to and use of
            [www.roobaroo.ai] (the “Site”), operated by [Roobaroo.ai]
            (“Company,” “we,” “our,” or “us”). <br /> <br /> By accessing or
            using the Site, you agree to be bound by these Terms and our Privacy
            Policy. If you do not agree, please do not use the Site.
          </h3>
          {privacySections.map((mainSection, idx) => (
            <div key={idx} className={classes.mainSection}>
              <h2 className={classes.h2}>{mainSection.title}</h2>
              {mainSection.content.map((info, i) => (
                <div key={i} className={classes.infoBlock}>
                  <h3 className={classes.h3}>{info.section}</h3>
                  <h4 className={classes.subtxt}>{info.description}</h4>
                  <ul className={classes.ul}>
                    {info?.items?.map((item, j) => (
                      <li key={j} className={classes.subtxt}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {info.contactEmail && (
                    <h4
                      style={{
                        marginTop: "12px",
                      }}
                      className={classes.subtxt}
                    >
                      Requests may be sent to
                      <Link
                        href={`mailto:${info.contactEmail}`}
                        className={classes.emailLink}
                      >
                        {info.contactEmail}
                      </Link>
                    </h4>
                  )}
                  {info.Email && (
                    <h4
                      style={{
                        marginTop: "12px",
                      }}
                      className={classes.subtxt}
                    >
                      Email:
                      <Link
                        href={`mailto:${info.email}`}
                        className={classes.emailLink}
                      >
                        {info.Email}
                      </Link>
                    </h4>
                  )}
                  {info.address && (
                    <h4
                      style={{
                        marginTop: "12px",
                      }}
                      className={classes.subtxt}
                    >
                      Address: {info.address}
                    </h4>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </BackgroundBoxesWrapper>
      <Footer />
    </>
  );
};

export default Tnc;
