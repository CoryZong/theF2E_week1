import "./index.scss";
import React from "react";
import { TextBox } from "@//page/section3/conponent/TextBox";
import { Background } from "@//page/section3/conponent/Background";

export default () => {
  return (
    <div className="section3">
      <Background />
      <TextBox />
    </div>
  );
};
