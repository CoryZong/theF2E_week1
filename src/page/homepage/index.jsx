import "./index.scss";
import React from "react";

export default () => {
  return (
    <div className="homepage">
      <div className="homepage__title" />
      <div className="homepage__titleBg" />
      <button className="homepage__applyBtn">
        <span>點擊立刻報名</span>
      </button>
      <div className="homepage__rightPage">
        <div className="webDesign">WEB DESIGN</div>
        <div className="star-top" />
        <div className="rect" />
        <div className="bug" />
      </div>
      <div className="homepage__leftPage">
        <div className="book-box" />
        <div className="star-left" />
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
