import React from "react";
import { Dot } from "../../../component/dot";
import { Slash } from "../../../component/slash";

export const Section5Footer = () => {
  return (
    <div className="section5__footer">
      <Dot top={-100} />
      <Slash rotate={-36.5} />
      <button>立即報名</button>
      <Slash rotate={36.5} />
    </div>
  );
};
