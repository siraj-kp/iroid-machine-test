import React from "react";
import About from "../../pages/about/About";
import NavTree from "./NavTree";

function Content() {
  return (
    <div className="container">
      <NavTree title="About Us" />
      <div className="row justify-content-center mt-3">
        <About />
      </div>
    </div>
  );
}

export default Content;
