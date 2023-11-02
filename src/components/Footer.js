import React from "react";
import "./Footer.css";
import Logo from "../images/LOgo.png";
import social1 from "../images/social1.png";
import social2 from "../images/social2.png";
import social3 from "../images/social3.png";
import social4 from "../images/social4.png";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="box1">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="links">
            <a href="/">About</a>
            <a href="/">Features</a>
            <a href="/">Works</a>
            <a href="/">Support</a>
          </div>
          <div className="socialLogos">
            <img src={social1} alt="" />
            <img src={social2} alt="" />
            <img src={social3} alt="" />
            <img src={social4} alt="" />
          </div>
        </div>
        <div className="box2">
          <p>© Copyright 2022, All Rights Reserved</p>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
