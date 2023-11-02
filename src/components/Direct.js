import React from "react";
import "./Direct.css";
import directImg from "../images/direct.png";
import { Container } from "react-bootstrap";

const Direct = () => {
  return (
    <Container>
      <div className="direct">
        <img src={directImg} alt="" />
        <div className="directContent">
          <h2>
            Get direct orders <br /> from your customers
          </h2>
          <p>
            Create custom landing pages with Rareblocks that converts more
            visitors than any website. With lots of unique blocks easily build a
            page. There are many variations of passages of available.{" "}
          </p>
          <div className="ratingBox">
            <div className="rating">
              <span>4.3K+</span>
              <p>
                Website’s
                <br /> Powering
              </p>
            </div>
            <div className="rating">
              <span>7M+</span>
              <p>
                Chats in <br /> Last 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Direct;
