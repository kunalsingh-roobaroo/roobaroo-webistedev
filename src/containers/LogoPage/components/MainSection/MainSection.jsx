import DownloadBtn from "@/components/Downloadbtn/DownloadBtn";
import React from "react";
import classes from "./MainSection.module.css";
import Image from "next/image";
import { enter } from "../../../../../public/assets/BrandKit";
import { staticAlt } from "@/lib/constants";
import Submark from "./components/Submark";
import SecondaryMark from "./components/SecondaryMark";
const MainSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes.top}>
        <h2 className={classes.subtxt}>Logo Types</h2>
        <DownloadBtn />
      </div>
      <div className={classes.grid}>
      <SecondaryMark />

      </div>

      <Submark />
      <div className={classes.typo}>
        <div className={classes.sec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <h4 className={classes.txt}>
            "Roobaroo" means face-to-face / becoming aware.
          </h4>
        </div>
        <div className={classes.sec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <h4 className={classes.txt}>
            The typeface used for the logo is Quicksand, because of its rounded
            geometric edges, giving a friendly, minimal, and emotionally
            accessible feel.
          </h4>
        </div>
        <div className={classes.sec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <h4 className={classes.txt}>
            The typeface used for the logo is Quicksand, because of its rounded
            geometric edges, giving a friendly, minimal, and emotionally
            accessible feel.
          </h4>
        </div>
        <div className={classes.subsec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <div className={classes.pop}>
            <h3 className={classes.sub}>Primary Logo</h3>
            <h4 className={classes.txt}>
              The Primary Logo consists of the submark + brand name + tagline +
              ™. <br />
              This version is fixed and must not be altered in any way—neither
              the elements nor their arrangement. <br />
              Specific usage guidelines define where and how this logo should be
              used.
            </h4>
          </div>
        </div>
        <div className={classes.subsec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <div className={classes.pop}>
            <h3 className={classes.sub}>Secondary Logo</h3>
            <h4 className={classes.txt}>
              The Secondary Logo includes the submark + brand name, and exists
              in two concrete forms. <br />
              We allow flexibility in how the submark and brand name are
              positioned relative to each other, as long as:
            </h4>
            <ul className={classes.list}>
              <li className={classes.txt}>Both elements are present</li>
              <li className={classes.txt}>
                Each follows its individual usage guidelines
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.subsec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <div className={classes.pop}>
            <h3 className={classes.sub}>Submark</h3>
            <h4 className={classes.txt}>
              Our submark visually represents the integration of wellness and
              growth—core to our brand philosophy.
            </h4>
            <ul className={classes.list}>
              <li className={classes.txt}>
                The leaf symbolizes wellness, grounding us in care, vitality,
                and sustainable living.
              </li>
              <li className={classes.txt}>
                The arrow, carved from the negative space within the leaf,
                represents growth—a forward, upward movement toward potential.
              </li>

              <li className={classes.txt}>
                The design harmony between the leaf and the arrow reflects our
                mission: <br />
                to bring wellness and growth together, in balance.
              </li>
            </ul>
            <h4 className={classes.txt}>
              This interplay is not just aesthetic—it&apos;s conceptual. The
              submark is a quiet yet powerful emblem of our belief that true
              progress happens when growth is nurtured, not rushed.
            </h4>
          </div>
        </div>
        <div className={classes.subsec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <div className={classes.pop}>
            <h3 className={classes.sub}>Brand Name: Roobaroo.ai</h3>
            <h4 className={classes.txt}>
              Our official brand name is Roobaroo.ai, not just Roobaroo. <br />
              The “.ai” signifies our connection with technology and
              intelligence—it positions us clearly in a forward-looking space
              where human connection meets digital evolution. <br />
              It also sets us apart in a crowded landscape, establishing us as a
              human-first, tech-enabled brand.
            </h4>
          </div>
        </div>
        <div className={classes.subsec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <div className={classes.pop}>
            <h3 className={classes.sub}>Tagline</h3>
            <h4 className={classes.txt}>
              Our tagline reads like a natural sentence, fitting seamlessly into
              the brand&apos;s voice and mental model. It feels like we&apos;re
              talking to the user, not labeling something. It&apos;s also
              structured like a subtitle to the brand name, offering context,
              intent, and tone at a glance.
            </h4>
          </div>
        </div>
        <div className={classes.subsec}>
          <div className={classes.enter}>
            <Image src={enter} fill alt={staticAlt} />
          </div>
          <div className={classes.pop}>
            <h3 className={classes.sub}>Word Play</h3>
            <h4 className={classes.txt}>
              When the brand name appears without the submark as Roobaroo, we
              allow creative liberties, provided they follow brand rules. Only
              the middle double &apos;O&apos;s in Roobaroo may serve as a
              creative canvas. Such treatments help bring personality to the
              name while maintaining consistency
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
