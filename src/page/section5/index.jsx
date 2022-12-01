import React from "react";
import "./index.scss";
import { Slider } from "@/component/slider";

export default () => {
  return (
    <div className="section5">
      <Slider
        firstContent={<h1>區區修煉已經無法滿足了嗎？還有比賽等著你！</h1>}
        secondContent={<h1>區區修煉已經無法滿足了嗎？還有比賽等著你！</h1>}
        animationDuration={40}
        animationDelay={-20}
      />
      <div className="section5__body">
        <div className="content">
          <div className="content__bg" />
          <div className="content__block">
            <h3>評審機制</h3>
            <p>初選</p>
            <li>將由六角學院前端、UI 評審進行第一波篩選。</li>
            <p>決選</p>
            <li>
              由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
              由評審進行直播公布名單！
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
