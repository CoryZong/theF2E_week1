import React from "react";
import "./index.scss";
import { Section5Slider } from "./component/Section5Slider";
import { Section5Body } from "./component/Section5Body";
import { Section5Footer } from "./component/Section5Footer";

export default () => {
  return (
    <div className="section5">
      <Section5Slider />
      <Section5Body />
      <Section5Footer />
    </div>
  );
};
