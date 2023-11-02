import React from "react";
import "./Chating.css";
import { Button, Container } from "react-bootstrap";

const Chating = () => {
  return (
    <Container>
      <div className="chatting">
        <h1>
          Ready to grow your business? <br /> Start with Apex, become faster{" "}
          <br /> every second
        </h1>
        <Button variant="warning">Start Chatting Mow</Button>
      </div>
    </Container>
  );
};

export default Chating;
