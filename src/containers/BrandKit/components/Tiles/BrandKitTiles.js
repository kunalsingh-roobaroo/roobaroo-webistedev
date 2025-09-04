import React from "react";
import classes from "./BrandKitTiles.module.css";
import Image from "next/image";
import {
  colornew,
  colors,
  donew,
  dos,
  heading,
  headingnew,
  robaroomain,
  robaroomainnew,
  robaroosub,
} from "../../../../../public/assets/images";
import { icons } from "lucide-react";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import Link from "next/link";

const BrandKitTiles = () => {
  const tiles = [
    {
      heading: "Logo",
      subheading: "Multiple formats with usage rules for consistent branding",
      colorClass: "blueTile",
      icons: robaroomainnew,
      link: "logo",
    },
    {
      heading: "Typography",
      subheading: "Brand fonts with styles, usage rules, and download links.",
      colorClass: "redTile",
      icons: headingnew,
      link: "typography",
    },
    {
      heading: "Color",
      subheading: "Official palette with multiple codes and usage guidelines.",
      colorClass: "blueTile",
      icons: colornew,
      link: "color",
    },
    {
      heading: "Usage Guidelines",
      subheading: "Clear rules on how to use our brand assets",
      colorClass: "redTile",
      icons: donew,
      link: "usage-guidelines",
    },
  ];

  return (
    <section className={classes.container}>
      {tiles.map((value, index) => (
        <Link
          href={`/brandkit/${value.link}`}
          key={index}
          className={`${classes.tile} ${classes[value.colorClass]}`}
        >
          <h3 className={classes.heading}>{value.heading}</h3>
          <p className={classes.subheading}>{value.subheading}</p>
          <p className={classes.subheading}>
            View Guide <span className={classes.gt}>&gt;</span>
          </p>

          {/* Bottom section */}

          {index === 0 && (
            <>
              <div className={classes.robaroosub}>
                <div className={classes.ico}>
                  <Image
                    src={robaroosub}
                    fill
                    alt={staticAlt}
                    sizes={responsiveImageSizes}
                  />
                </div>
              </div>

              <div className={classes.robaroomain}>
                <div className={classes.ico}>
                  <Image
                    src={value.icons}
                    fill
                    alt={staticAlt}
                    sizes={responsiveImageSizes}
                  />
                </div>
              </div>
            </>
          )}
          {index === 1 && (
            <div className={classes.rtpo}>
              <div className={classes.ico}>
                <Image
                  src={value.icons}
                  fill
                  alt={staticAlt}
                  sizes={responsiveImageSizes}
                />
              </div>
            </div>
          )}
          {index === 2 && (
            <div className={classes.colors}>
              <div className={classes.ico}>
                <Image
                  src={value.icons}
                  fill
                  alt={staticAlt}
                  sizes={responsiveImageSizes}
                />
              </div>
            </div>
          )}
          {index === 3 && (
            <div className={classes.dos}>
              <div className={classes.ico}>
                <Image
                  src={value.icons}
                  fill
                  alt={staticAlt}
                  sizes={responsiveImageSizes}
                />
              </div>
            </div>
          )}
        </Link>
      ))}
    </section>
  );
};

export default BrandKitTiles;
