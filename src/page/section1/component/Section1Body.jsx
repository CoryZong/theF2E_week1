import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { helper } from "../../../helper/helper";

export const Section1Body = () => {
  const orangeCard = useRef(null);
  const yellowCard = useRef(null);
  const greenCard = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    helper.handleGsap(".section1", ".card-orange", -400, 1);
    helper.handleGsap(".section1", ".card-yellow", -600, 0.5);
    helper.handleGsap(".section1", ".card-green", -800, 1.5);
  }, []);

  return (
    <div className="section1__body">
      <div className="dots">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div ref={orangeCard} className="card card-orange">
        “滿足不了同事的許願？”
      </div>
      <div ref={yellowCard} className="card card-yellow">
        “羨慕別人的酷酷網頁動畫？”
      </div>
      <div ref={greenCard} className="card card-green">
        “動畫技能樹太雜無從下手？”
      </div>
      <div className="yellowBall-box">
        <div className="q">
          <div className="q-1">?</div>
          <div className="q-2">?</div>
          <div className="q-3">?</div>
        </div>
        <div className="yellowBall" />
      </div>
    </div>
  );
};
