import "./index.scss";
import React from "react";
import arrow from "/src/assets/arrow.png";
import star from "/src/assets/star.png";
import rect from "/src/assets/rect.png";

export default () => {
  return (
    <div className="homepage">
      <div className="homepage__title" />
      <div className="homepage__titleBg" />
      <button className="homepage__applyBtn">
        <span>點擊立刻報名</span>
        <img src={arrow} alt="" />
      </button>
      <div className="homepage__rightPage">
        <div className="webDesign">WEB DESIGN</div>
        <img className="star-top" src={star} alt="" />
        <img className="rect" src={rect} alt="" />
        <div className="bug" />
      </div>
      <div className="homepage__leftPage">
        <div className="book-box" />
        <img className="star-left" src={star} alt="" />
        <div className="fontEnd">FRONT END</div>
      </div>
      <div className="homepage__bottom">
        <div className="thef2e">THEF2E</div>
        <div className="thef2e">THEF2E</div>
        <div className="thef2e">THEF2E</div>
        <div className="thef2e">THEF2E</div>
        <div className="thef2e">THEF2E</div>
        <div className="thef2e">THEF2E</div>
      </div>
    </div>
  );
};
