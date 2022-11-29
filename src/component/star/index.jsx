import "./index.scss";
import React from "react";

export const Star = ({ top, marginLeft, rotateDeg }) => {
  const style = {
    top: `${top}px`,
    marginLeft: `${marginLeft}px`,
    transform: `translateX(-50%) ${
      rotateDeg ? `rotate(${rotateDeg}deg)` : null
    }`,
  };

  return <div className="star" style={style} />;
};
