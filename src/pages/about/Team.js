import React from "react";
import "./team.css";
import av from "../../assets/assests/av1.png";
import avd from "../../assets/assests/av2.png";
import ave from "../../assets/assests/av3.png";
import environment from "../../assets/assests/environment.png";

const Team = () => {
  return (
    <div className="teamdev">
      <div className="teamadder">The "Sponzzer" Team</div>
      <div className="alllogo">
        <div className="teamlogos1">
          <img className="logoimg3" src={av} alt="" />
          <span className="logotitle">Pasindu </span>
          <span className="logotitle2">Co-founder </span>
        </div>
        <div className="teamlogos2">
          <img className="logoimg3" src={avd} alt="" />
          <span className="logotitle">Ishara </span>
          <span className="logotitle2">Managing director </span>
        </div>
        <div className="teamlogos3">
          <img className="logoimg3" src={ave} alt="" />
          <span className="logotitle">Ziham</span>
          <span className="logotitle2">Head of client services </span>
        </div>
      </div>
      <div className="rt">
        <img className="imgcollector" src={environment} alt="" />
        <div className="trv">
          <h2 className="lert">Are you ready to Digitize and Scale?</h2>
          <p className="lertv">
            If you own or work for a business that is looking to significantly
            improve its online presence then we welcome to you share your vision
            with us to create magic together.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
