import "./index.scss";
import React from "react";
import { HashRouter } from "react-router-dom";
import Homepage from "@/page/homepage";
import Section1 from "@/page/section1";
import Section2 from "@/page/section2";
import Section3 from "@/page/section3";
import Section4 from "@/page/section4";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Homepage />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </HashRouter>
  );
}

export default App;
