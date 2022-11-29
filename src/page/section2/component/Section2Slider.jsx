import React from "react";
import { Slider } from "@/component/slider";
import thef2e_colorful from "../../../assets/thef2e_colorful.png";

export const Section2Slider = () => {
  return (
    <Slider
      firstContent={<img src={thef2e_colorful} alt="" />}
      secondContent={<img src={thef2e_colorful} alt="" />}
      animationDuration={40}
      animationDelay={-20}
    />
  );
};
