import "./index.scss";
import React from "react";

export const Slash = ({ rotate }) => {
  const style = { rotate: `${rotate}deg` };
  return <div className="slash" style={style} />;
};
