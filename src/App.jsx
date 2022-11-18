import "./index.scss";
import React from "react";
import { HashRouter } from "react-router-dom";
import Homepage from "/src/page/homepage";
import Section1 from "/src/page/section1";
import Section2 from "/src/page/section2";
import Section3 from "/src/page/section3";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Homepage />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </HashRouter>
  );
}

export default App;
