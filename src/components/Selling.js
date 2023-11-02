import React from "react";
import "./Selling.css";
import sellingImg from "../images/selling.png";
import { Button, Container } from "react-bootstrap";

const Selling = () => {
  return (
    <Container>
      <div className="selling">
        <div>
          <h2>
            Start selling directly <br /> inside conversations
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br /> but the majority have suffered all injected humour or
            randomised <br /> words which don't look even slightly believable.{" "}
          </p>
          <Button variant="warning">Start Chatting Mow</Button>
        </div>
        <img src={sellingImg} alt="" />
      </div>
    </Container>
  );
};

export default Selling;
