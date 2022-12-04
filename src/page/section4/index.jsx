import "./index.scss";
import React from "react";
import { LinkButton } from "@/component/link-button";
import { Section4Tab } from "./component/Section4Tab";
import { Section4Body } from "./component/Section4Body";

export default () => {
  return (
    <div className="section4">
      <Section4Tab />
      <Section4Body />
    </div>
  );
};
