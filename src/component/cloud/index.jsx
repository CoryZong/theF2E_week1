import "./index.scss";
import React from "react";

export const Cloud = ({ top, marginLeft }) => {
  const style = {
    top: `${top}px`,
    marginLeft: `${marginLeft}px`,
  };
  return <div className="cloud" style={style} />;
};
