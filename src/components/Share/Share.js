"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";
import styles from "./Share.module.css";
import Image from "next/image";
import {
  email,
  facebook,
  linkedinshare,
  twitter,
} from "../../../public/assets/icons";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { trackEvent } from "@/utils/ga4";

const Share = ({ title }) => {
  const pathname = usePathname();
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // construct full URL
      const currentUrl = window.location.origin + pathname;
      setUrl(currentUrl);
    }
  }, [pathname]);

  if (!url) return null; // wait until URL is available

  return (
    <div className={styles.container}>
      <p className={styles.share}>Share:</p>
      <div className={styles.buttons}>
        <EmailShareButton url={url} subject={title}>
          <div
            onClick={() =>
              trackEvent({
                category: "Blog",
                action: "On_click",
                label: "Share Blog",
                value: `Blog shared ${title}`,
              })
            }
            className={styles.imgcontainer}
          >
            <Image
              src={email}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </EmailShareButton>
        <FacebookShareButton url={url} quote={title}>
          <div
            onClick={() =>
              trackEvent({
                category: "Blog",
                action: "On_click",
                label: "Share Blog",
                value: `Blog shared ${title}`,
              })
            }
            className={styles.imgcontainer}
          >
            <Image
              src={facebook}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <div
            onClick={() =>
              trackEvent({
                category: "Blog",
                action: "On_click",
                label: "Share Blog",
                value: `Blog shared ${title}`,
              })
            }
            className={styles.imgcontainer}
          >
            <Image
              src={twitter}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <div
            onClick={() =>
              trackEvent({
                category: "Blog",
                action: "On_click",
                label: "Share Blog",
                value: `Blog shared ${title}`,
              })
            }
            className={styles.imgcontainer}
          >
            <Image
              src={linkedinshare}
              fill
              alt={staticAlt}
              sizes={responsiveImageSizes}
            />
          </div>
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default Share;
