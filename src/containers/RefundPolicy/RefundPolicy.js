import classes from "./RefundPolicy.module.css";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundBoxesWrapper from "@/components/BackgroundWrapper/BackgroundWrapper";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default function RefundPolicy() {
  const refundSections = [
    {
      title: "1. No Refunds (Digital Products & Services)",
      content: [
        {
          description:
            "All purchases made on Roobaroo.ai — including digital products, downloadable materials, online courses, tools, and subscription services — are non-refundable.",
        },
        {
          description:
            "Once payment is completed, we do not provide cancellations, refunds, or partial refunds under any circumstances.",
        },
        {
          description: "This includes situations such as:",
          items: [
            "Change of mind",
            "Accidental purchase",
            "Lack of usage",
            "Incorrect product selection",
            "Inability to access due to personal device or internet issues",
          ],
        },
      ],
    },
    {
      title: "2. Subscription Billing (For Future Plans)",
      content: [
        {
          description: "If you sign up for a subscription in the future:",
          items: [
            "All subscription fees are non-refundable, including charges for recurring billing cycles.",
            "Subscriptions may be cancelled anytime, but cancellation will only stop the next billing cycle.",
            "Access continues until the end of the paid period.",
          ],
        },
      ],
    },
    {
      title: "3. Payment Failures",
      content: [
        {
          description:
            "If a payment fails or is reversed, access to the product or service will be paused until the payment is successfully updated.",
        },
      ],
    },
    {
      title: "4. Duplicate Payments",
      content: [
        {
          description:
            "If you believe a duplicate payment was made, contact us within 7 days at contact@roobaroo.ai with transaction proof. We will verify with Cashfree and process a refund only for verified duplicate charges.",
          contactEmail: " contact@roobaroo.ai",
        },
      ],
    },
    {
      title: "5. Technical Issues",
      content: [
        {
          description:
            "If you face a genuine technical issue preventing access to a purchased product, we will provide support to restore access. This does not qualify for a refund.",
        },
      ],
    },
    {
      title: "6. Contact",
      content: [
        {
          description: "For refund-related questions or support, email:",
          Email: " contact@roobaroo.ai",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <BackgroundBoxesWrapper>
        <div className={classes.section}>
          <h1 className={classes.headtxt}>Refund & Cancellation Policy</h1>
          <h3 className={classes.subtxt}>
            Thank you for purchasing from Roobaroo.ai. Please read this Refund &
            Cancellation Policy carefully before completing a purchase.
          </h3>
          {refundSections.map((mainSection, idx) => (
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
                      Contact us at
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
                      <Link
                        href={`mailto:${info.Email.trim()}`}
                        className={classes.emailLink}
                      >
                        {info.Email}
                      </Link>
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
