import React from "react";
import { Cloud } from "@/component/cloud";

export const CircleBrown = () => {
  return (
    <div className="circle-brown">
      <div className="star" />
      <div className="title2">
        <div className="content">年度最強合作</div>
        <div className="content">三大主題來襲</div>
      </div>
      <div className="title3">
        <div className="content">各路廠商強強聯手！</div>
        <div className="content">共同設計出接地氣的網頁互動挑戰關卡</div>
      </div>
      <Cloud top={450} marginLeft={395} />
    </div>
  );
};
