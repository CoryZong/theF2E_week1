import "./index.scss";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default () => {
  const orangeCard = useRef(null);
  const yellowCard = useRef(null);
  const greenCard = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".card-orange", {
      y: -400,
      duration: 2,
      ease: "back.out(1)",
      delay: 1,
      scrollTrigger: {
        trigger: ".section1",
      },
    });
    gsap.to(".card-yellow", {
      y: -600,
      duration: 2,
      ease: "back.out(1)",
      delay: 0.5,
      scrollTrigger: {
        trigger: ".section1",
      },
    });
    gsap.to(".card-green", {
      y: -800,
      duration: 2,
      ease: "back.out(1)",
      delay: 1.5,
      scrollTrigger: {
        trigger: ".section1",
      },
    });
  }, []);
  return (
    <section className="section1">
      <div className="section1__bar" />
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
      <div className="section1__bar" />
    </section>
  );
};
