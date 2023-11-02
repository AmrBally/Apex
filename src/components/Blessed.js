import React from "react";
import "./Blessed.css";
import blessedImg1 from "../images/client1.png";
import blessedImg2 from "../images/client2.png";
import { Container } from "react-bootstrap";

const Blessed = () => {
  return (
    <div className="blessed">
      <Container>
        <h1>
          Our blessed client <br /> said about us 😍
        </h1>
        <div className="blessedContainer">
          <div className="box">
            <div className="first">
              <h6>“Incredible Experience”</h6>
              <p>
                We had an incredible experience working with Mixland and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the concept so quickly.
              </p>
            </div>
            <div div className="sec">
              <img src={blessedImg1} alt="" />
              <div>
                <span>Wade Warren</span>
                <span>CEO, ABC Corporation</span>
              </div>
            </div>
          </div>
          <div className="box">
            <div div className="first">
              <h6>“Dependable, Responsive, Professional”</h6>
              <p>
                Fermin Apps has collaborated with Mixland team for several
                projects such as Photo Sharing Apps and Custom Social Networking
                Apps. The experience has been pleasant, professional and
                exceeding our expectations. The team is always thinking beyond.
              </p>
            </div>
            <div div className="sec">
              <img src={blessedImg2} alt="" />
              <div>
                <span>Esther Howard</span>
                <span>CEO, ABC Corporation</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blessed;
