import React from "react";
import { Sponsor } from "./Sponsor";
import sponsor1 from "../../../assets/sponsor1.png";
import sponsor2 from "../../../assets/sponsor2.png";
import sponsor3 from "../../../assets/sponsor3.png";

export const Section6Body = () => {
  return (
    <div className="section6__body">
      <Sponsor imgSrc={sponsor1} />
      <Sponsor imgSrc={sponsor2} />
      <Sponsor imgSrc={sponsor3} />
    </div>
  );
};
