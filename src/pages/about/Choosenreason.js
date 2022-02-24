import React from "react";
import "./reason.css";
import two from '../../assets/assests/two.png'

const Choosenreason = () => {
  return (
    <div className="choosen">
      <div className="choosenright">
        <img
          className="choosenimg"
          src={"https://vdepict.com/wp-content/uploads/2020/06/2.HM_.Image2MIN.png"}
          alt=""
        />
      </div>
      <div className="choosenleft">
        <p className="choosepar">
        We are a digital advertising Company Which is providing Online Advertising Services such as Social Media Advertising, Website Design, Artwork Design and Etc.. We make the customer experience better. Being best at something feels great. Every Business desires a smooth buyer’s journey, WE are best at it!

        </p>
        <p className="setterbg">
          <div className="fg"></div>
         "“Get closer than ever to your customers. So close that you tell them what they need well before they realize it themselves.” – Steve Jobs, Apple.
        </p>
        <button className="choosebtn">Get Started</button>
      </div>
      
    </div>
  );
};

export default Choosenreason;
