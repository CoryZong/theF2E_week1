import "./index.scss";
import React from "react";
import { LinkButton } from "@/component/link-button";

export default () => {
  return (
    <div className="section4">
      <div className="section4__tab">
        <div className="black-star black-star--top" />
        <div className="black-star black-star--bottom" />
        <div className="tabs">
          <div className="week1">Week1</div>
          <div className="week2">Week2</div>
          <div className="week3">Week3</div>
        </div>
      </div>
      <div className="section4__body">
        <h3>/ The F2E 活動網站設計 /</h3>
        <p>#視差滾動 #版塊設計</p>
        <p>各組別投稿時間</p>
        <p>UI 組投稿區間：10/31(一) 12:00 PM ~ 11/7(一) 12:00 PM</p>
        <p>前端組投稿區間：11/7(一) 12:00 PM ~ 11/14(一) 12:00 PM</p>
        <LinkButton buttonText="更多關卡資訊" />
      </div>
    </div>
  );
};
