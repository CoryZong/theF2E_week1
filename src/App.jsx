import "./index.scss";
import React from "react";
import { HashRouter } from "react-router-dom";
import Nav from "/src/component/nav";
import Homepage from "/src/page/homepage";
import Section1 from "/src/page/section1";
import Section2 from "/src/page/section2";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <Homepage />
        <Section1 />
        <Section2 />
      </div>
    </HashRouter>
  );
}

export default App;
