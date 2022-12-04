import React from "react";
import { Dot } from "../../../component/dot";

export const ContentBox = ({ children, title, position }) => {
  const style = {
    left: position === "left" ? 0 : null,
    right: position === "right" ? 0 : null,
  };
  return (
    <div className="content">
      <div className="content__bg" style={style} />
      <div className="content__block">
        <Dot top={-100} />
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};
