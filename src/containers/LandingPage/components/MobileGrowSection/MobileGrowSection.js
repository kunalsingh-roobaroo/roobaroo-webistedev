import React from "react";
import classes from "./MobileModule.module.css";
import Image from "next/image";
import {
  grow,
  hand_doodle,
  hands,
  infinity,
  infinity_doodle,
  mobpipe,
  paper,
  torn_paper_doodle,
} from "../../../../../public/assets/images";
import { responsiveImageSizes, staticAlt } from "@/lib/constants";
import { pagestroke, underline } from "../../../../../public/assets/icons";
const MobileGrowSection = () => {
  return (
    // <section className={classes.section}>
    //   <div className={classes.right}>
    //     <p className={classes.txt}>
    //       We&apos;ve been sold growth & wellness in isolation — but life
    //       isn&apos;t split like that. It&apos;s messy layered and integrated.
    //     </p>
    //     <div className={classes.image}>
    //       <Image src={paper} fill alt={staticAlt} />
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       marginTop: "62px",
    //     }}
    //     className={classes.left}
    //   >
    //     <div className={classes.infinty}>
    //       <Image src={infinity} fill alt={staticAlt} />
    //     </div>
    //     <p
    //       style={{
    //         textAlign: "left",
    //       }}
    //       className={classes.txt}
    //     >
    //       Roobaroo is about bringing balance back to the centre - where ambition
    //       & inner stability grow together.
    //     </p>
    //   </div>
    //   <div
    //     style={{
    //       marginTop: "92px",
    //     }}
    //     className={classes.right}
    //   >
    //     <p className={classes.txt}>
    //       We&apos;ve been sold growth & wellness in isolation — but life
    //       isn&apos;t split like that. It&apos;s messy layered and integrated.
    //     </p>
    //     <div className={classes.handDooodle}>
    //       <Image src={hands} fill alt={staticAlt} />
    //     </div>
    //   </div>
    //   <div className={classes.background}>
    //     <div className={classes.backgroundframe}>
    //       <Image src={mobpipe} fill alt={staticAlt} />
    //     </div>
    //   </div>
    //   {/* <div className={classes.lines}>
    //     <div className={classes.underline}>
    //       <Image
    //         src={underline}
    //         fill
    //         alt={staticAlt}
    //         sizes={responsiveImageSizes}
    //       />
    //     </div>
    //   </div> */}
    // </section>
    <div className={classes.img}>
      <Image src={grow} fill alt={staticAlt} sizes={responsiveImageSizes}/>
    </div>
  );
};

export default MobileGrowSection;
