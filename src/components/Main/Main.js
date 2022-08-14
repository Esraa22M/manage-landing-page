import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import About from "../About/About";
import Carousal from "../carousal/Carousal";
import AboutTeam from "../AboutTeam/AboutTeam";
const Main = () => {
  return (
    <section>
      <div className="Main__container">
       <SubHeading/>
       <About/>
       <Carousal/>
       <AboutTeam/>
      </div>
    </section>
  );
};
export default Main;
