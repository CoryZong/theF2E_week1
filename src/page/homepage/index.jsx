import "./index.scss";
import React from "react";
import { HomepageNav } from "./component/HomepageNav";
import { HomepageTitle } from "./component/HomepageTitle";
import { HomepageBody } from "./component/HomepageBody";
import { HomepageFooter } from "./component/HomepageFooter";

export default () => {
  return (
    <div className="homepage">
      <HomepageNav />
      <HomepageTitle />
      <HomepageBody />
      <HomepageFooter />
    </div>
  );
};
