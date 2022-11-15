import "./index.scss";
import React from "react";
import { Section1Body } from "./component/Section1Body";
import { Section1Bar } from "./component/Section1Bar";

export default () => {
  return (
    <section className="section1">
      <Section1Bar />
      <Section1Body />
      <Section1Bar />
    </section>
  );
};
