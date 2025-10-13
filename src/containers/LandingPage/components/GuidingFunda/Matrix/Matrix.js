import React from "react";
import classes from "./Matrix.module.css";
import Image from "next/image";
import {
  chart_x,
  chart_y,
  comfortstroke,
  fire,
  flick,
  purplearrow,
  purplestroke,
  struggle,
  strugglestroke,
  think,
} from "../../../../../../public/assets/icons";
import { staticAlt } from "@/lib/constants";
import KnowMore from "@/components/KnowMore/KnowMore";

export default function GrowthWellnessMatrix() {
  return (
    <div className={classes.parent}>
      <div className={classes.container}>
        {/* Axes */}
        <div className={classes.verticalLine}>
          <div className={classes.lineframe}>
            <Image src={chart_y} fill alt={staticAlt} />
          </div>
        </div>
        <div className={classes.horizontalLine}>
          <div className={classes.lineframe}>
            <Image src={chart_x} fill alt={staticAlt} />
          </div>
        </div>

        {/* Labels */}
        <div className={classes.growthLabel}>Growth</div>
        <div className={classes.wellnessLabel}>Wellness</div>

        {/* Quadrant Titles */}
        <div className={`${classes.topLeft} ${classes.flexed}`}>
          <p className={classes.label}>Burning</p>
          <div className={classes.sublabel}>
            <div className={classes.fire}>
              <Image src={fire} fill alt={staticAlt} />
            </div>
            <div className={classes.brushed}>
              <p className={`${classes.label} ${classes.outtxt}`}>Out</p>
            </div>
          </div>
        </div>

        <div className={`${classes.bottomLeft} `}>
          <div className={`${classes.gip}`}>
            <div className={classes.struggleframe}>
              <Image src={struggle} fill alt={staticAlt} />
            </div>
            <div className={classes.op}>
              <p className={classes.label}>Struggling</p>
              <div className={classes.strokeframe}>
                <Image src={strugglestroke} fill alt={staticAlt} />
              </div>
            </div>
          </div>
        </div>
        <div className={` ${classes.bottomRight}`}>
          <div className={`${classes.reversegip}`}>
            <div className={classes.struggleframe}>
              <Image src={think} fill alt={staticAlt} />
            </div>
            <div className={classes.op}>
              <p className={classes.label}>Comfort Zone</p>
              <div className={classes.strokeframe}>
                <Image src={comfortstroke} fill alt={staticAlt} />
              </div>
            </div>
          </div>
        </div>

        {/* Center quadrant text */}
        <div className={`${classes.topRight}`}>
          <div className={`${classes.nop}  ${classes.thriverame}`}>
            <p className={`${classes.label} ${classes.thriving}`}>Thriving</p>
            <div className={classes.flick}>
              <div className={classes.flickframe}>
                <Image src={flick} fill alt={staticAlt} />
              </div>
            </div>
            <div className={classes.arrow}>
              <div className={classes.flickframe}>
                <Image src={purplearrow} fill alt={staticAlt} />
              </div>
            </div>
            <p className={classes.txt}>
              This is where you
              <br />
              wanna be
            </p>
            <div className={classes.strokesec}>
              <div className={classes.flickframe}>
                <Image src={purplestroke} fill alt={staticAlt} />
              </div>
            </div>
          </div>
        </div>

        {/* Inner quadrant details */}
        <div className={`${classes.text} ${classes.workaholism}`}>
          Workaholism
        </div>
        <div className={`${classes.text} ${classes.anxiety}`}>
          Anxiety despite <br /> Success
        </div>
        <div className={`${classes.text} ${classes.withdrawal}`}>
          Withdrawal
        </div>
        <div className={`${classes.text} ${classes.helplessness}`}>
          Helplessness
        </div>

        <div className={`${classes.text} ${classes.stagnation}`}>
          Stagnation
        </div>
        <div className={`${classes.text} ${classes.wellness}`}>
          Wellness without <br /> Direction
        </div>

        <div className={`${classes.textPurple} ${classes.centered}`}>
          Centered
        </div>
        <div className={`${classes.textPurple} ${classes.futureReady}`}>
          Future-ready
        </div>

        {/* Handwritten note */}
        {/* <div className={classes.note}>This is where you wanna be</div> */}

        {/* Know More Button */}
        {/* <div className={classes.knowMoreWrapper}>
        <button className={classes.knowMoreBtn}>Know More ↗</button>
      </div> */}
      </div>
      <div className={classes.knowmore}>
        <KnowMore />
      </div>
      <div className={classes.circle}></div>
    </div>
  );
}
