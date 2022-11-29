import React from "react";
import { Star } from "@/component/star";

export const RightPage = () => {
  return (
    <div className="homepage__rightPage">
      <div className="webDesign">WEB DESIGN</div>
      <Star top={120} marginLeft={500} />
      <div className="rect" />
      <div className="bug" />
    </div>
  );
};
