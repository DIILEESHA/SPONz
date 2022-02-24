import React from "react";
import Team from "../about/Team";
import Interfaces from "./Interfaces";
import Solution from "./Solution";
import Solutionmapping from "./Solutionmapping";

const Mainsolution = () => {
  return (
    <div>
      <Solution />
      <Solutionmapping/>
      <Interfaces/>
      <Team/>
    </div>
  );
};

export default Mainsolution;
