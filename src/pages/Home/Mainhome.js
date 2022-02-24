import React from "react";
import Slider from "../../components/slider/Slider";
import Details from "./Details";
import Expectation from "./Expectation";
import Home from "./Home";

const Mainhome = () => {
  return (
    <div>
      {/* <Slider /> */}
     
     
      <Home />
       <Details />
       <Expectation/>
    </div>
  );
};

export default Mainhome;
