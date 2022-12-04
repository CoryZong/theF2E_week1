import "./index.scss";
import React from "react";

export const Dot = ({ top }) => {
  const style = {
    top: `${top}px`,
  };
  return <div className="dot" style={style} />;
};
