import React from "react";
import "./Landing.css";
import { Button, Container } from "react-bootstrap";
import landingimg1 from "../images/landing1.png";
import landingimg2 from "../images/landing2.png";
import landingimg3 from "../images/landing3.png";

const Landing = () => {
  return (
    <Container>
      <div className="landing">
        <div className="landingContent">
          <h1>
            Start chatting with <br /> customers, anytime, <br /> anywhere with
            Apex
          </h1>
          <p>
            Great software that allows you to chat from any <br /> place at any
            time without any interruption.
          </p>
          <Button variant="warning">
            Start Chating Now <span>{"->"}</span>
          </Button>
          <div className="cust">
            <img src={landingimg2} alt="" />
            <span className="first"></span>
            <span className="sec"></span>
            <img src={landingimg3} alt="" />
          </div>
        </div>
        <div className="image">
          <img src={landingimg1} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
