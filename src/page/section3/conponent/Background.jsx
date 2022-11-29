import React from "react";
import { Star } from "@//component/star";
import { Cloud } from "@//component/cloud";

export const Background = () => {
  return (
    <>
      <div className="circle-green" />
      <Star top={160} marginLeft={150} rotateDeg={-15} />
      <Star top={2500} marginLeft={-850} rotateDeg={0} />
      <Cloud top={1900} marginLeft={600} />
    </>
  );
};
