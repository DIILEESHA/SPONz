import React from "react";
import Team from "../about/Team";
import Solution from "./Solution";
import Solutionmapping from "./Solutionmapping";

const Mainsolution = () => {
  return (
    <div>
      <Solution />
      <Solutionmapping/>
      <Team/>
    </div>
  );
};

export default Mainsolution;
