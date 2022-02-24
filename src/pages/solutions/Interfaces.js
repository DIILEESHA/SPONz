import React from "react";
import "./interface.css";
import inter from "../../assets/assests/interface.png";
import team from "../../assets/assests/team.png";
import stepup from "../../assets/assests/stepup.png";

const Interfaces = () => {
  return (
    <div className="main-int">
      <div className="hr5">
        <div className="int-right">
          <div className="inter-version1-img">
            <img className="all-inter-img" src={inter} alt="" />
          </div>
        </div>
        <div className="int-left">
          <h2 className="int-title-over">Design with the user in mind</h2>
          <p className="int-par-over">
            User-centered design is a defining feature of today's digital
            products. We are a design consultancy firm that focuses on enhancing
            user engagement and conversion. Our user interfaces are device
            agnostic. Mobile apps, web applications, and multiplatform digital
            experiences are all possibilities. We are committed to developing
            products and services that are both usable and reflective of your
            company's identity.
          </p>
        </div>
      </div>
      <div className="hr6">
        <div className="int-right1">
          {" "}
          <h2 className="int-title-over">
            Our Designers Are Digital Product Strategists
          </h2>
          <p className="int-par-over">
            With each new advanced item configuration project we start with an
            itemized exploratory meeting to comprehend your business better. Our
            energetic planners interview partners, lead client research, dissect
            your opposition, and merge subtleties. The outcome is an objective
            driven arrangement on executing an all encompassing client
            experience.
          </p>
        </div>
        <div className="int-left2">
          <div className="inter-version1-img">
            <img className="all-inter-imger" src={team} alt="" />
          </div>
        </div>
      </div>
      <div className="hr5">
        <div className="int-right">
          <div className="inter-version1-img">
            <img className="all-inter-img" src={stepup} alt="" />
          </div>
        </div>
        <div className="int-left">
          <h2 className="int-title-over">
            At long last the Product is Ready! Send off, Promote, Analyze and
            Improve.
          </h2>
          <p className="int-par-over">
            The item life cycle is broken into four phases. It begins with
            Introduction, advances with Growth and Maturity, lastly finishes
            with Decline. We screen this cycle for each item we configuration
            right to the end as an element in concluding when it is fitting to
            present new highlights, development hacks, try different things with
            value procedures, A/B test, or upgrade the stream.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interfaces;
