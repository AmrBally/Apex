import React from "react";
import "./Features.css";
import featureImg1 from "../images/features1.png";
import featureImg2 from "../images/features2.png";
import featureImg3 from "../images/features3.png";
import { Container } from "react-bootstrap";

const Features = () => {
  return (
    <Container>
      <div className="features">
        <h1>Features for a better experience</h1>
        <div className="featuresContent">
          <div>
            <img src={featureImg1} alt="" />
            <div className="box">
              <h5>Video messaging</h5>
              <p>
                This software is very easy for you to <br /> manage. You can use
                it as you wish.
              </p>
            </div>
          </div>
          <div>
            <img src={featureImg2} alt="" />
            <div className="box">
              <h5>Save your time</h5>
              <p>
                This software is very easy for you to <br /> manage. You can use
                it as you wish.
              </p>
            </div>
          </div>
          <div>
            <img src={featureImg3} alt="" />
            <div className="box">
              <h5>Keep safe & private</h5>
              <p>
                This software is very easy for you to <br /> manage. You can use
                it as you wish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
