import "./solution.css";
import { useHistory } from "react-router-dom";
import Details from '../Home/Details'

const Solution = () => {

    let history = useHistory();
  return (
   <>
    <div className="mainsolution">
      <h2 className="mainsolution-title">Solutions</h2>
      <p className="mainsolution-par">
        Our marquee offer is the Leap Workshop. We are focused on accelerated
        digital product innovation, user experience design, and digital
        transformation. We advocate working together with cross-functional teams
        to solve challenges from every perspective.
      </p>
      <button onClick={()=>{history.push("/contact")}} className="mainsolution-btn">Get In Touch</button>

      
    </div>
   <Details/>
   </>
  );
};

export default Solution;
