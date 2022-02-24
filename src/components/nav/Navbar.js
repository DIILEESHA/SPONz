import React, { useState } from "react";
import car from "../../assets/assests/logo.png";
import { Link } from "react-router-dom";

import "./nav.css";

const Navbar = () => {
  const [show, setShow] = useState(true);

  function showSwitch() {
    return setShow(!show);
  }

  return (
    <>
      <div className="navbar">
        <div className="navright">
          <div className="logo">
            {/* <img
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={car}
              alt=""
            /> */}
             <Link onClick={() => showSwitch()} to="/">
             <img
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              src={car}
              alt=""/>
            </Link>
          </div>
        </div>
        <div className="navleft">
          {" "}
          <div className={show ? "links active" : "links"}>
            <Link onClick={() => showSwitch()} to="/solution">
              solutions
            </Link>
            <Link onClick={() => showSwitch()} to="/about">
              About
            </Link>
            <Link onClick={() => showSwitch()} to="/portfolio">
              insights
            </Link>
            <Link
              
              onClick={() => showSwitch()}
              to="/contact"
            >
               Contact
            </Link>
          
          </div>
          <div className="navme">
            {/* <Link onClick={ ()=> showSwitch()} to="/contact">Contact</Link> */}
          </div>
        </div>
        <div
          onClick={() => showSwitch()}
          className={show ? "bars-button active" : "bars-button"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
