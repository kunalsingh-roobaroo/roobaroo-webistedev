import classes from "./PrivacyPolicy.module.css";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundBoxesWrapper from "@/components/BackgroundWrapper/BackgroundWrapper";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function PrivacyPolicyPage() {
  const privacySections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          section: "Personal Information You Provide",
          description:
            "If you voluntarily contact us, subscribe to a newsletter, or complete a form, we may collect information such as:",
          items: [
            "Name",
            "Email address",
            "Phone number",
            "Any other details you provide",
          ],
        },
        {
          section: "Automatically Collected Information",
          description:
            "When you access the Site, we automatically collect certain information via analytics and tracking technologies (including Google Analytics), such as:",
          items: [
            "IP address",
            "Browser type and version",
            "Pages viewed and time spent",
            "Referring website and exit pages",
            "Device information",
          ],
        },
        {
          section: "Cookies and Similar Technologies",
          description:
            "We use cookies, pixels, and similar tools to enhance user experience, measure performance, and analyze traffic patterns. You can adjust your browser settings to refuse cookies, though this may impact site functionality.",
          // items: [
          //   "IP address",
          //   "Browser type and version",
          //   "Pages viewed and time spent",
          //   "Referring website and exit pages",
          //   "Device information",
          // ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          // section: "",
          description: "We may use collected information to:",
          items: [
            "Operate, maintain, and improve the Site",
            "Analyze usage and optimize content",
            "Communicate with you (if you’ve contacted us or subscribed)",
            "Detect and prevent fraud or abuse",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      title: "3. Disclosure of Information",
      content: [
        {
          // section: "",
          description:
            "We do not sell, rent, or trade your personal data. We may share information with:",
          items: [
            "Service Providers who assist in website hosting, analytics, or communications",
            "Legal Authorities when required by applicable law",
            "Business Transfers in connection with a merger, acquisition, or sale of assets",
          ],
        },
      ],
    },
    {
      title: "4. Data Retention",
      content: [
        {
          // section: "",
          description:
            "We retain personal information only for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "5. Third-Party Links",
      content: [
        {
          // section: "",
          description:
            "The Site may link to third-party websites. We are not responsible for the privacy practices or content of such sites.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },

    {
      title: "6. Security",
      content: [
        {
          // section: "",
          description:
            "We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no security system is impenetrable, and we cannot guarantee complete security.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "7. Your Rights",
      content: [
        {
          // section: "",
          description:
            "Depending on your jurisdiction, you may have the right to:",
          items: [
            "Access, correct, or delete personal data",
            "Restrict or object to data processing",
            "Withdraw consent to marketing communications",
          ],
          contactEmail: " contact@roobaroo.ai",
        },
      ],
    },
    {
      title: "8. Changes to This Policy",
      content: [
        {
          // section: "",
          description:
            "We may update this Privacy Policy from time to time. The updated version will be effective when posted.",
          // items: [
          //   "Service Providers who assist in website hosting, analytics, or communications",
          //   "Legal Authorities when required by applicable law",
          //   "Business Transfers in connection with a merger, acquisition, or sale of assets",
          // ],
        },
      ],
    },
    {
      title: "9. Contact Us",
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
          Email: " contact@roobaroo.ai",
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
          <h1 className={classes.headtxt}>Privacy Policy</h1>
          <h3 className={classes.subtxt}>
            Roobaroo.ai (“Company,” “we,” “our,” or “us”) respects your privacy
            and is committed to protecting it through this Privacy Policy. This
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website [www.roobaroo.ai] (the
            “Site”). <br /> <br /> By accessing or using the Site, you agree to the
            terms of this Privacy Policy. If you do not agree, please
            discontinue use of the Site.
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
                        href={`mailto:${info.Email}`}
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
}
