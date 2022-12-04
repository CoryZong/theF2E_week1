import "./index.scss";
import React from "react";
import sponsor1 from "/src/assets/sponsor1.png";
import sponsor2 from "/src/assets/sponsor2.png";
import sponsor3 from "/src/assets/sponsor3.png";
import { Sponsor } from "./component/Sponsor";

export default () => {
  return (
    <div className="section6">
      <div className="section6__title">
        <div className="star_white" />
        本次活動贊助單位 <div className="star_white" />
      </div>
      <div className="section6__body">
        <Sponsor imgSrc={sponsor1} />
        <Sponsor imgSrc={sponsor2} />
        <Sponsor imgSrc={sponsor3} />
      </div>
    </div>
  );
};
