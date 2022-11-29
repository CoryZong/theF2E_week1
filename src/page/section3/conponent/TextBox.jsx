import React from "react";
import { Title } from "@/page/section3/conponent/Title";
import { Content } from "@/page/section3/conponent/Content";

export const TextBox = () => {
  return (
    <>
      <div className="text-box1">
        <Title cnText="報名時間" enText="SING UP" />
        <Content
          contentArray={[
            "開放報名",
            "10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59",
          ]}
        />
      </div>
      <div className="text-box2">
        <Title cnText="比賽開始" enText="STAR" />
        <Content
          contentArray={[
            "各組別開賽",
            "10/31(一) UI組、團體組開賽",
            "11/7 (一）前端組開賽",
          ]}
        />
      </div>
      <div className="text-box3">
        <Title cnText="登陸作品" enText="UPLOAD" />
        <Content
          contentArray={["10/31(一) 中午 12:00 -", " 11/28(一) 中午 12:00"]}
        />
      </div>
      <div className="text-box4">
        <Title cnText="線上直播" enText="STEAM" />{" "}
        <Content contentArray={["11/3 - 11/24（每週四)"]} />
      </div>
    </>
  );
};
