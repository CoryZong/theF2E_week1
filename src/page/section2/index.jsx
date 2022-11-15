import "./index.scss";
import React from "react";
import { Section2Slider } from "./component/Section2Slider";
import { CircleBrown } from "./component/CircleBrown";
import { CircleRice } from "./component/CircleRice";

export default () => {
  return (
    <section className="section2">
      <Section2Slider />
      <CircleRice />
      <CircleBrown />
      <Section2Slider />
    </section>
  );
};
