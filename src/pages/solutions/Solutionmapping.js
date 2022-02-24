import "./mapping.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Data } from "./Data";
import Team from "../about/Team";
import environment from "../../assets/assests/environment.png";

const AccordionSection = styled.div`
  display: flex;
  //   margin-left:50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
  background: transparent;
  //   margin-bottom:20px
`;

const Container = styled.div`
  position: absolute;
  margin-top: -10%;
  margin-leftt: 50%;
  //   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  border-bottom: 1px solid #fff;
  // box-shadow: 2px 10px 35px 1px black;
  background: transparent;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 24px;
    font-weight: 500;
    text-align:left;
    text-transform: uppercase;
  }
  span {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Dropdown = styled.div`
  background: ;
  color: #fff;
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   border-bottom: 1px solid #000;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 17px;
    width: 100%;
    margin-top: 50px;
    display: block;
  
  }
`;

const Solutionmapping = () => {
  let history = useHistory();
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="solutioned-mapper">
      <div className="mapped-rec">
        <div className="rec-left">
          <p className="left-title-mapped">
            Don’t Invest Months of Time, Invest a Week.{" "}
          </p>
          <p className="left-mapped-par">
            The Leap Workshop is essentially a week long intense but fun
            hackathon. We start by working in person with you our customer, to
            define all the challenges and broad scope of the workshop. Next we
            decide what challenges to prototype. Post which we rapidly start
            building high fidelity prototypes. Finally these prototypes are then
            tested with real users to validate the idea.
          </p>
          <button
            onClick={() => {
              history.push("/contact");
            }}
            className="left-mapped-btn"
          >
            Make solution
          </button>
        </div>
        <div className="rec-right">
          <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
            <AccordionSection>
              <Container>
                {Data.map((item, index) => {
                  return (
                    <>
                      <Wrap onClick={() => toggle(index)} key={index}>
                        <h1>{item.question}</h1>
                        <span>
                          {clicked === index ? <FiMinus /> : <FiPlus />}
                        </span>
                      </Wrap>
                      {clicked === index ? (
                        <Dropdown>
                          <p>{item.answer}</p>
                        </Dropdown>
                      ) : null}
                    </>
                  );
                })}
              </Container>
            </AccordionSection>
          </IconContext.Provider>
        </div>
        <>
        </>
      </div>
      
    </div>
  );
};

export default Solutionmapping;
