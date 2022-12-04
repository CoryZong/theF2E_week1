import React from "react";
import { ContentBox } from "./ContentBox";

export const Section5Body = () => {
  return (
    <div className="section5__body">
      <ContentBox title="評審機制" position="left">
        <p>初選</p>
        <li>將由六角學院前端、UI 評審進行第一波篩選。</li>
        <p>決選</p>
        <li>
          由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五)
          由評審進行直播公布名單！
        </li>
      </ContentBox>
      <ContentBox title="比賽獎項" position="right">
        <p>1. 初選佳作 共六十位 數位獎狀</p>
        <p>2. 個人企業獎 共六位 NTD 3,000/位</p>
        <p>3. 團體企業獎 共三組 NTD 10,000/組</p>
        <p>4. 以上皆提供完賽數位獎狀</p>
      </ContentBox>
    </div>
  );
};
