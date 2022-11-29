import React from "react";
import "./index.scss";

export const Slider = ({
  firstContent,
  secondContent,
  animationDuration,
  animationDelay,
}) => {
  const firstStyle = {
    animationDuration: `${animationDuration}s`,
  };
  const secondStyle = {
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
  };
  return (
    <div className="slider">
      <div className="first-content" style={firstStyle}>
        {firstContent}
      </div>
      <div className="second-content" style={secondStyle}>
        {secondContent}
      </div>
    </div>
  );
};
