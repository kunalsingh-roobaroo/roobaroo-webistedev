import React from "react";
import classes from "./MainSection.module.css";
import Image from "next/image";
import {
  arrow,
  cancel,
  color,
  color2,
  color3,
  colordont,
  ellipse,
  heading,
  logosdont,
  print,
  rulers,
  tick,
  title,
  typo,
  typodont,
  typopphone,
  visual,
  visual2,
  visual3,
  visualdont,
  windows,
} from "../../../../public/assets/BrandKit";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import BackToTopBtn from "@/components/BackToTop/BackToTopBtn";

const GuideLinesMainSection = () => {
  const LogoDodata = [
    {
      title: "LogoType",
      subtitle: "Clear Space",
      description: [
        "To allow our logotype to stand out, do not place any objects such as graphics or text in the clear space shown.",
      ],
      icon: ellipse,
    },
    {
      title: "LogoType",
      subtitle: "Minimum sizes",
      description: [
        "The logotype should always be legible. Never use it at sizes smaller than specified.",
      ],
      icon: print,
    },
    {
      title: "LogoType",
      subtitle: "General positioning",
      description: [
        "This general guidance applies to digital or print applications, including both portrait and landscape orientations.",
        "When creating a composition, place the logo in one of the four corners, or center it on the central vertical axis. Take advantage of the space and make the logo as large as possible. Remember: Be bold, be proud, make it big!",
        "Avoid using the logotype at sizes smaller than one-third of the canvas width.",
      ],
      icon: windows,
    },
    {
      title: "LogoType",
      subtitle: "Rotation",
      description: [
        "Typically, we place our logotype flat on a 0° angle. Horizontal is our default rotation state. Examples include use in our app, on our website, and most advertising formats",
        `Occasionally, we rotate our logotype 90° to make the best use of space with unusual formats. By rotating the logo vertically, we are able to display it at a larger scale. Examples include vertical ad spaces such as "skyscraper" banner ads, physical banners/flags, and playful applications like merchandise or stationery.`,
      ],
      icon: rulers,
    },
  ];
  const logoDonts = [
    "Change the colour of the logo.",
    "Squash the logo.",
    "Recreate the logo using a different font",
    "Fill the logo with images.",
    "Place the logo over a busy background.",
    "Skew the logo. Accepted rotations are 0° and 90°.",
    "Fill the logo with gradients.",
    `Change the logo's spacing or proportions.`,
  ];
  const TypoDodata = [
    {
      title: "Typeface Usage",
      //   subtitle: "Clear Space",
      description: [
        "Use Montserrat consistently across all headings, subheadings, body text, and UI components to establish a cohesive, modern visual identity",
        "Reserve Quicksand for the Roobaroo logo only. It’s an essential part of the brand mark and should not appear elsewhere.",
        "Introduce Simple Cakes selectively, in emotional or expressive moments like quotes, highlights, personal notes or emphasis on intimacy and creativity.",
      ],
      icon: heading,
    },
    {
      title: "Hierarchy & Layout",
      //   subtitle: "Minimum sizes",
      description: [
        "Follow the typography scale defined in the component library. Heading, subheading, title, and body text sizes have been pre-defined for both desktop and mobile for consistency across all screens.",
        "Adhere to the defined sizes and spacing for visual harmony across the product.",
        "Only define custom sizes in rare, extraordinary cases — such as marketing-led experimental layouts or special campaign visuals. Always justify and document such deviations.",
        "Maintain clear visual rhythm through adequate white space, padding, and line height..",
      ],
      icon: title,
    },
  ];
  const TypoDonts = [
    {
      title: "Don’t distort or stretch typefaces – ",
      subtitle:
        "maintain their natural proportions to uphold clarity and professionalism.",
    },
    {
      title: "Don’t use too many font sizes or weights on a single page – ",
      subtitle: "maintain a streamlined, intentional hierarchy.",
    },
    {
      title: "Don’t ignore context – match typeface tone to the moment:",
      subtitle:
        "formal sections require Montserrat, intimate moments invite Simple Cakes.",
    },
    {
      title: "Don’t default to system fonts in branded materials —",
      subtitle:
        "always use the defined typography system unless absolutely necessary for fallback scenarios.",
    },
  ];
  const ColorDodata = [
    {
      title: "Intent-Based Color Usage",
      //   subtitle: "Clear Space",
      description: [
        "Ensure all three primary colors are used in balanced proportions across the brand experience — this reflects the integrated nature of Roobaroo’s identity.",
        "Use Sky Blue (#27AAE7) as the dominant color in content or sections related to growth, clarity, learning, and productivity.",
        "Use Coral Blush (#FB7D7D) as the dominant color in content or flows related to wellness, care, emotional support, and safety.",
        "Use Bridge Purple (#815FAA) as the dominant color in themes of balance, transition, emotional intelligence, or neutrality.",
        "For general or neutral sections (e.g., homepage, shared spaces), ensure all three colors are used in roughly equal proportions to maintain harmony.",
        "When unsure which color to use for highlighting, default to Bridge Purple as a neutral yet emotionally intelligent middle ground.",
      ],
      icon: color,
    },
    {
      title: "Functional Application",
      //   subtitle: "Minimum sizes",
      description: [
        "Use Jet Black (#0C0C0C) for all core text content to ensure readability and establish a credible, grounded tone",
        "Use Pure White (#FFFFFF) or soft off-white as the primary background for a clean, breathable interface.",
        "Use lighter tints or reduce opacity of Base of Sky Blue, Coral Blush and Bridge Purple for:",
      ],
      list: [
        "Backgrounds of cards, containers, and overlays",
        "Hover states and UI feedback moments",
        "Illustrative depth and non-intrusive visual accents",
      ],
      icon: color2,
    },
    {
      title: "Accessibility & Design System Adherence",
      //   subtitle: "Minimum sizes",
      description: [
        "Follow WCAG 2.1 guidelines for contrast and accessibility, especially for text and buttons",
        "Use colors as defined in the component library to maintain consistency across screens, devices, and documents.",
        "Refer to design tokens when applying color in UI — avoid guessing or approximating shades.",
      ],
      icon: color3,
    },
  ];
  const ColorDonts = [
    {
      title: "Don’t use a single color excessively – ",
      subtitle:
        "maintain visual balance by using all three primary colors in proportion to reflect Roobaroo’s integrated identity.",
    },
    {
      title: "Don’t improvise shades –",
      subtitle:
        "use only the defined color values or tokens to ensure consistency across platforms and design touchpoints.",
    },
    {
      title: "Don’t apply colors inconsistently across platforms –",
      subtitle:
        "maintain color roles and combinations across web, mobile, and print to build trust and visual recognition.",
    },
  ];

  const VisualDodata = [
    {
      title: "General Guide:",
      //   subtitle: "Clear Space",
      description: [
        "Use visuals that feel human and relatable – illustrations, icons, and shapes should reflect warmth, inclusivity, and emotional safety.",
        "Maintain visual consistency across all assets – follow the same line weight, color palette, and style across icons, illustrations, and shapes.",
        "Use abstract shapes and patterns to guide flow – support hierarchy, transitions, or mood through subtle visual accents.",
        "Prioritize clarity and purpose in visuals – every visual should serve a clear function—either to explain, guide, or emotionally connect.",
        "For general or neutral sections (e.g., homepage, shared spaces), ensure all three colors are used in roughly equal proportions to maintain harmony.",
        "Anchor visuals in the brand palette – use Sky Blue, Coral Blush, and Bridge Purple in illustrations and icons to maintain brand continuity.",
      ],
      icon: color,
    },
    {
      title: "coloured Boxes :",
      //   subtitle: "Minimum sizes",
      description: [
        "Background boxes – The colours used should not overpower the content. For safe consistent use, keep the primary colour with 33% opacity. Even if one box is bigger than the other, the overall balanced should be achieved with by placing the boxes judiciously. The movement of the box should be slow and soothing.",
        "Boxes used in bento grids – The primary colours are directly used. The number of times the colours are used need to be consistent. In bento. The spacing between the boxes need to be same and aligned.",
      ],
      icon: color2,
    },
    {
      title: "BRUSH STROKES :",
      //   subtitle: "Minimum sizes",
      descObj: [
        {
          // title: "",
          subtitle:
            "The strokes used are FIGMA built-in brushes in the DRAW section.",
        },
        {
          title: "Vérité",
          subtitle:
            "is used to get a chalky effect; for example, in creating boxes and larger illustrations.",
        },
        {
          title: "Heist",
          subtitle:
            "is used for getting a textured stokes; for example, to highlight small textboxes, to draw arrows and lines.",
        },
        {
          title: "Blockbuster",
          subtitle:
            "is used for wherever cleaner strokes are required, to reduce eye strain; for example, in creating smaller illustrations and icons, to highlight bigger textboxes.",
        },
        {
          // title: "",
          subtitle:
            "Do not overuse the strokes, making the overall look cluttered. Keep minimal use with appropriate breathing room.",
        },
      ],
      icon: color3,
    },
  ];
  const VisualDonts = [
    {
      title: "Don’t mix multiple illustration styles – ",
      subtitle:
        "avoid using drastically different illustration types (e.g. flat + 3D + outline) in a single experience. Use the appropriate brush stroke only.",
    },
    {
      title: "Don’t use decorative visuals without meaning –",
      subtitle:
        "avoid filling space with visuals that don’t support the content or purpose.",
    },
    {
      title: "Do not use other brush strokes –",
      subtitle:
        "To maintain consistency, only use the Figma built-in strokes, and in that too, only the defined ones (Blockbuster, Vérité & Heist).",
    },
    {
      title: "Don’t overuse graphic elements –",
      subtitle:
        "our overall brand feeling is clean and creative. Do not put too much lines, illustrations etc, and compromise on the cleanliness part of the brand. .",
    },
    {
      title: "Don’t use clipart or generic stock visuals – ",
      subtitle:
        "they dilute Roobaroo’s unique tone and emotional connection. Always aim for custom or curated brand-aligned assets.",
    },
  ];
  return (
    <section className={classes.mainsection}>
 
      <h2 className={classes.title}>Logo</h2>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Do&apos;s</p>
        <div className={classes.ico}>
          <Image src={tick} fill alt={staticAlt} sizes={responsiveImageSizes} />
        </div>
      </div>
      <div className={classes.content}>
        {LogoDodata.map((value, index) => {
          return (
            <div key={index} className={classes.card}>
              {/* Title + Subtitle */}

              {/* Image rendering */}
              {index === 0 || index === 1 ? (
                // One common image div for both 0 and 1
                <div className={classes.sameImage}>
                  <Image
                    src={value.icon} // 👈 common image
                    alt={staticAlt}
                    fill
                    sizes={responsiveImageSizes}
                  />
                </div>
              ) : index === 2 ? (
                // Separate image for index 2
                <div className={classes.imageTwo}>
                  <Image
                    src={windows} // 👈 image for index 2
                    alt={staticAlt}
                    fill
                    sizes={responsiveImageSizes}
                  />
                </div>
              ) : (
                // Separate image for index 3
                <div className={classes.imageThree}>
                  <Image
                    src={rulers} // 👈 image for index 3
                    alt={staticAlt}
                    fill
                    sizes={responsiveImageSizes}
                  />
                </div>
              )}
              <div className={classes.txtdiv}>
                <h3>{value.title}</h3>
                <h4>{value.subtitle}</h4>

                {value.description.map((desc, i) => (
                  <p className={classes.desc} key={i}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.marginmob}></div>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Don&apos;ts</p>
        <div className={classes.ico}>
          <Image
            src={cancel}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.dontcontent}>
        <div className={classes.dontimg}>
          <Image src={logosdont} fill alt={staticAlt} />
        </div>
        <ul className={classes.list}>
          {logoDonts.map((value, index) => {
            return (
              <li className={classes.li} key={index}>
                <div className={classes.icoframe}>
                  <Image src={cancel} fill alt={staticAlt} />
                </div>
                <p>{value}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.secsec}>
        <h2 className={classes.title}>Typography</h2>
      </div>
      <div className={classes.tpofdiv}>
        <h4 className={classes.h4}>
          The Roobaroo typography system is crafted to feel both grounded and
          human, reflecting the brand&apos;s dual identity rooted in the Hero
          and Creator archetypes.
        </h4>
        <ul className={classes.typolist}>
          <li className={classes.item}>
            <span className={classes.boldh4}>
              Montserrat is our primary typeface:
            </span>{" "}
            a clean, geometric sans-serif that embodies clarity, trust, and
            modernity. It&apos;s used across headings, body text, and UI
            elements to ensure visual consistency and a confident, polished tone
            throughout the product experience
          </li>
          <li className={classes.item}>
            <span className={classes.boldh4}>Quicksand</span> is used
            exclusively for the{" "}
            <span className={classes.boldh4}>Roobaroo logo</span> . Its rounded
            geometry and approachable character help establish a sense of warmth
            and flow, while the custom infinity mark integrated into the
            logotype reinforces our themes of continuity and balance.
          </li>
          <li className={classes.item}>
            <span className={classes.boldh4}>
              Simple Cakes, our accent typeface,
            </span>{" "}
            is used , introduces a hand-drawn, expressive quality. Its
            imperfect, human touch brings intimacy to key moments, allowing the
            brand to connect emotionally.
          </li>
        </ul>
      </div>
      <div className={classes.typoframe}>
        <Image src={typo} fill alt={staticAlt} className={classes.desktypo} />
        <Image
          src={typopphone}
          fill
          alt={staticAlt}
          className={classes.mobtypo}
        />
      </div>
      <div className={classes.marginmob}></div>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Do&apos;s</p>
        <div className={classes.ico}>
          <Image src={tick} fill alt={staticAlt} sizes={responsiveImageSizes} />
        </div>
      </div>
      <div className={classes.content}>
        {TypoDodata.map((value, index) => (
          <div key={index} className={classes.typocard}>
            {/* Image rendering */}
            {index === 0 && (
              <div className={classes.sametypoImage}>
                <Image
                  src={heading}
                  alt={staticAlt}
                  fill
                  sizes={responsiveImageSizes}
                />
              </div>
            )}

            {index === 1 && (
              <div className={classes.imagetypoTwo}>
                <Image
                  src={title}
                  alt={staticAlt}
                  fill
                  sizes={responsiveImageSizes}
                />
              </div>
            )}

            {/* Text block */}
            <div className={classes.typotxtdiv}>
              <h3>{value.title}</h3>
              <h4>{value.subtitle}</h4>
              {value.description.map((desc, i) => (
                <p className={classes.desc} key={i}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={classes.marginmob}></div>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Don&apos;ts</p>
        <div className={classes.ico}>
          <Image
            src={cancel}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.dontcontent}>
        <div className={classes.typodontimg}>
          <Image src={typodont} fill alt={staticAlt} />
        </div>
        <ul className={classes.typelist}>
          {TypoDonts.map((value, index) => {
            return (
              <li className={classes.typeli} key={index}>
                <div className={classes.icoframe}>
                  <Image src={cancel} fill alt={staticAlt} />
                </div>
                <p>
                  <span className={classes.listspan}>{value.title}</span>
                  {value.subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.marging}></div>
      <h2 className={classes.title}>Colours</h2>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Do&apos;s</p>
        <div className={classes.ico}>
          <Image src={tick} fill alt={staticAlt} sizes={responsiveImageSizes} />
        </div>
      </div>
      <div className={classes.content}>
        {ColorDodata.map((value, index) => {
          return (
            <div key={index} className={classes.colorcard}>
              {index === 0 && (
                <div className={classes.firsimg}>
                  <Image src={color} fill alt={staticAlt} />
                </div>
              )}
              {index === 1 && (
                <div className={classes.secimg}>
                  <Image src={color2} fill alt={staticAlt} />
                </div>
              )}
              {index === 2 && (
                <div className={classes.thirdimg}>
                  <Image src={color3} fill alt={staticAlt} />
                </div>
              )}
              <div className={classes.txtdiv}>
                <h3>{value.title}</h3>
                {value.description &&
                  value.description.map((desc, i) => (
                    <p className={classes.desc} key={i}>
                      {desc}
                    </p>
                  ))}
                {value.list && (
                  <ul className={classes.colorlist}>
                    {value.list.map((item, i) => (
                      <li className={classes.li} key={i}>
                        <div className={classes.icoframe}>
                          <Image src={arrow} fill alt={staticAlt} />
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.marginmob}></div>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Don&apos;ts</p>
        <div className={classes.ico}>
          <Image
            src={cancel}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.colorcontent}>
        <div className={classes.colordontimg}>
          <Image src={colordont} fill alt={staticAlt} />
        </div>
        <ul className={classes.typelist}>
          {ColorDonts.map((value, index) => {
            return (
              <li className={classes.typeli} key={index}>
                <div className={classes.icoframe}>
                  <Image src={cancel} fill alt={staticAlt} />
                </div>
                <p>
                  <span className={classes.listspan}>{value.title}</span>
                  {value.subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.marging}></div>
      <div className={classes.marginmob}></div>
      <h2 className={classes.title}>Visual Elements</h2>
      <div className={classes.marginmob}></div>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Don&apos;s</p>
        <div className={classes.ico}>
          <Image src={tick} fill alt={staticAlt} sizes={responsiveImageSizes} />
        </div>
      </div>
      <div className={classes.content}>
        {VisualDodata.map((value, index) => {
          return (
            <div key={index} className={classes.colorcard}>
              {index === 0 && (
                <div className={classes.visualfirsimg}>
                  <Image src={visual} fill alt={staticAlt} />
                </div>
              )}
              {index === 1 && (
                <div className={classes.visualsecimg}>
                  <Image src={visual2} fill alt={staticAlt} />
                </div>
              )}
              {index === 2 && (
                <div className={classes.visualthirdimg}>
                  <Image src={visual3} fill alt={staticAlt} />
                </div>
              )}
              <div className={classes.valtxtdiv}>
                <h3>{value.title}</h3>
                {value.description &&
                  value.description.map((desc, i) => (
                    <p className={classes.desc} key={i}>
                      {desc}
                    </p>
                  ))}
                {value.descObj &&
                  value.descObj.map((desc, i) => (
                    <p key={i}>
                      <span className={classes.listspan}>{desc.title} </span>
                      {desc.subtitle}
                    </p>
                  ))}
                {value.list && (
                  <ul className={classes.colorlist}>
                    {value.list.map((item, i) => (
                      <li className={classes.li} key={i}>
                        <div className={classes.icoframe}>
                          <Image src={arrow} fill alt={staticAlt} />
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.marginmob}></div>
      <div className={classes.sec}>
        <p className={classes.subtitle}>Don&apos;ts</p>
        <div className={classes.ico}>
          <Image
            src={cancel}
            fill
            alt={staticAlt}
            sizes={responsiveImageSizes}
          />
        </div>
      </div>
      <div className={classes.visualcontent}>
        <div className={classes.visualdontimg}>
          <Image src={visualdont} fill alt={staticAlt} />
        </div>
        <ul className={classes.typelist}>
          {VisualDonts.map((value, index) => {
            return (
              <li className={classes.typeli} key={index}>
                <div className={classes.icoframe}>
                  <Image src={cancel} fill alt={staticAlt} />
                </div>
                <p>
                  <span className={classes.listspan}>{value.title}</span>
                  {value.subtitle}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className={classes.backtotop}>
        <BackToTopBtn />
      </div> */}
    </section>
  );
};

export default GuideLinesMainSection;
