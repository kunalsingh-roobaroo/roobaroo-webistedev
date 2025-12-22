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
            "If you voluntarily contact us, subscribe to a newsletter, create an account, purchase a product, or complete a form, we may collect information such as:",
          items: [
            "Name",
            "Email address",
            "Phone number",
            "Billing details (excluding full card numbers)",
            "Account information for subscriptions",
            "Any other details you provide voluntarily",
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
            "Usage patterns",
            "Cookies and other identifiers",
          ],
        },
        {
          section: "Cookies and Similar Technologies",
          description:
            "We use cookies, pixels, and similar tools to enhance user experience, measure performance, facilitate payments, support login sessions, and analyze traffic patterns. You can adjust your browser settings to refuse cookies, though this may impact site functionality.",
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          description: "We may use collected information to:",
          items: [
            "Operate, maintain, and improve the Site",
            "Process payments and deliver purchased digital products or subscriptions",
            "Enable account access and subscription management",
            "Analyze usage and optimize content",
            "Communicate with you for support, updates, or transactional notifications",
            "Detect and prevent fraud or unauthorized activity",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      title: "3. Disclosure of Information",
      content: [
        {
          description:
            "We do not sell, rent, or trade your personal data. We may share information with:",
          items: [
            "Service Providers who assist with payments (e.g., Cashfree), website hosting, analytics, communication tools, and subscription management",
            "Payment Processors for transaction verification and fraud prevention (we do not store your complete card details)",
            "Legal Authorities when required by applicable law",
            "Business Transfers, such as a merger, acquisition, or sale of assets",
          ],
        },
      ],
    },
    {
      title: "4. Payment Information (Cashfree)",
      content: [
        {
          description:
            "Payments made on Roobaroo.ai are processed securely through Cashfree Payments, which may collect:",
          items: [
            "Cardholder name",
            "Masked card details",
            "Transaction IDs",
            "Payment status",
          ],
        },
        {
          description:
            "We do not store or have access to your full card numbers, CVV, or sensitive financial information.",
        },
      ],
    },
    {
      title: "5. Data Retention",
      content: [
        {
          description:
            "We retain personal information only for as long as necessary to fulfill the purposes outlined in this Policy, or longer if required by law or for legitimate business interests (e.g., tax, compliance, anti-fraud).",
        },
      ],
    },
    {
      title: "6. Third-Party Links",
      content: [
        {
          description:
            "The Site may link to third-party websites. We are not responsible for the privacy practices or content of such sites.",
        },
      ],
    },
    {
      title: "7. Security",
      content: [
        {
          description:
            "We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no security system is impenetrable, and we cannot guarantee complete security.",
        },
      ],
    },
    {
      title: "8. Your Rights",
      content: [
        {
          description:
            "Depending on your jurisdiction, you may have the right to:",
          items: [
            "Access, correct, or delete personal data",
            "Restrict or object to data processing",
            "Request data portability",
            "Withdraw consent to marketing communications",
          ],
          contactEmail: " contact@roobaroo.ai",
        },
      ],
    },
    {
      title: "9. Changes to This Policy",
      content: [
        {
          description:
            "We may update this Privacy Policy from time to time. The updated version will be effective when posted on the Site.",
        },
      ],
    },
    {
      title: "10. Contact Us",
      content: [
        {
          description:
            "For questions about this Privacy Policy, contact us at:",
          Email: " contact@roobaroo.ai",
          company: "Roobaroo Productions Private Limited",
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
            Roobaroo.ai ("Company," "we," "our," or "us") respects your privacy
            and is committed to protecting it through this Privacy Policy. This
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website www.roobaroo.ai (the "Site")
            and when you purchase our digital products, tools, or subscription-based
            services. <br /> <br /> By accessing or using the Site, you agree to the
            terms of this Privacy Policy. If you do not agree, please
            discontinue use of the Site.
          </h3>
          {privacySections.map((mainSection, idx) => (
            <div key={idx} className={classes.mainSection}>
              <h2 className={classes.h2}>{mainSection.title}</h2>
              {mainSection.content.map((info, i) => (
                <div key={i} className={classes.infoBlock}>
                  {info.section && <h3 className={classes.h3}>{info.section}</h3>}
                  <h4 className={classes.subtxt}>{info.description}</h4>
                  {info.items && (
                    <ul className={classes.ul}>
                      {info.items.map((item, j) => (
                        <li key={j} className={classes.subtxt}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {info.contactEmail && (
                    <h4
                      style={{
                        marginTop: "12px",
                      }}
                      className={classes.subtxt}
                    >
                      Requests may be sent to
                      <Link
                        href={`mailto:${info.contactEmail.trim()}`}
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
                        href={`mailto:${info.Email.trim()}`}
                        className={classes.emailLink}
                      >
                        {info.Email}
                      </Link>
                    </h4>
                  )}
                  {info.company && (
                    <h4
                      style={{
                        marginTop: "12px",
                      }}
                      className={classes.subtxt}
                    >
                      Company: {info.company}
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
