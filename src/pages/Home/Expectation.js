import React from "react";
import "./expectation.css";
import { useHistory } from "react-router-dom";

const Expectation = () => {

let history = useHistory();

  return (
    <div className="main-exp">
      <div className="expectleft">
        <h2 className="expectmain">What to expect from us.</h2>
        <div className="allparexpect">
          <p className="expectpar">
            Responsive website designs to understand your
            <br /> customers’ behavior across key platforms.
          </p>
          <p className="expectpar">
            Customer-centric User Experience design to ensure your 
            customers seamlessly navigate through their goals.
          </p>
          <p className="expectpar">
            Digital Innovation Consulting to help you build strong 
            customer relationships and make insightful decisions.
          </p>
        </div>
        <button onClick={()=>{history.push("/about")}} className="expectbtn">View more</button>
      </div>
      <div className="expectright">
        <img
          className="landingimger"
          src="https://vdepict.com/wp-content/uploads/2020/06/2.HM_.Image2MIN.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Expectation;
