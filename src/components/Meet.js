import React from "react";
import "./Meet.css";
import meetImg from "../images/meet2.png";
import { Container } from "react-bootstrap";

const Meet = () => {
  return (
    <Container>
      <div className="meet">
        <img src={meetImg} alt="" />
        <div>
          <h2>
            Meet your customers, <br /> with live video chat
          </h2>
          <p>
            Proin faucibus nibh et sagittis a. Lacinia purus ac <br /> amet
            pellentesque aliquam enim.
          </p>
          <p>
            Get paychecks up to two days early. Get a $20 bonus <br />
            when you receive qualifying direct deposits
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Meet;
