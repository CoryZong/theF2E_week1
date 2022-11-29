import React from "react";
import { Thef2eText } from "./Thef2eText";
import { Slider } from "@/component/slider";

export const HomepageFooter = () => {
  return (
    <Slider firstContent={<Thef2eText />} secondContent={<Thef2eText />} />
  );
};
