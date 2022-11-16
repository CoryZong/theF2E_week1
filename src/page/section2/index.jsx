import "./index.scss";
import React, { useEffect } from "react";
import { Section2Slider } from "./component/Section2Slider";
import { CircleBrown } from "./component/CircleBrown";
import { CircleRice } from "./component/CircleRice";
import { helper } from "../../helper/helper";

export default () => {
  useEffect(() => {
    helper.handleGsap(".section2", ".circle-rice", 0, 0.5);
  }, []);

  return (
    <section className="section2">
      <Section2Slider />
      <CircleRice />
      <CircleBrown />
      <Section2Slider />
    </section>
  );
};
