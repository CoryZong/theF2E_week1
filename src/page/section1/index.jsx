import "./index.scss";
import React from "react";

export default () => {
  return (
    <section className="section1">
      <div className="section1__bar" />
      <div className="section1__body">
        <div className="dots">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="card card-orange">“滿足不了同事的許願？”</div>
        <div className="card card-yellow">“羨慕別人的酷酷網頁動畫？”</div>
        <div className="card card-green">“動畫技能樹太雜無從下手？”</div>
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
