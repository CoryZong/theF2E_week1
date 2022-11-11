import "./index.scss";
import React from "react";
import Router from "./router/routes";
import { HashRouter } from "react-router-dom";
import Nav from "/src/component/nav";
import Section1 from "/src/page/section1";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <Router />
        <Section1 />
      </div>
    </HashRouter>
  );
}

export default App;
