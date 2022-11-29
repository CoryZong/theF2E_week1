import React from "react";
import { Star } from "@/component/star";

export const LeftPage = () => {
  return (
    <div className="homepage__leftPage">
      <div className="book-box" />
      <div className="star-left" />
      <Star top={350} marginLeft={-800} rotateDeg={-25} />
      <div className="fontEnd">FRONT END</div>
    </div>
  );
};
