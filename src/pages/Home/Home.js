import { useHistory } from "react-router-dom";
import "./home.css";
import { VscSettingsGear } from "react-icons/vsc";
import { GiChart } from "react-icons/gi";
import { IoMagnetSharp } from "react-icons/io5";
import { MdReportProblem } from "react-icons/md";
import header from "../../assets/assests/header.png";
const Home = () => {

let history = useHistory();

  return (
    <div className="home">
      <div className="homeleft">
        <h1 className="landingmain">Crafting Memorable Digital Experiences</h1>
        <p className="landingpar">
          We build state-of-the-art web apps and validated digital product
          designs to help you grow.
        </p>
        <button onClick={()=>{history.push("/contact")}} className="landingbtn">get started</button>
      </div>
      <div className="homeright">
        <div className="landingimg">
          <img className="landingimg" src={header} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
