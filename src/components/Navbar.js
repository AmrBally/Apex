import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/LOgo.png";
import { Button, Container } from "react-bootstrap";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <Container>
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav className={mobile ? "navMobDown" : "navMob"}>
          <a href="/">Demos</a>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Pages</a>
          <a href="/">Contact</a>
          <div className="mobBtn">
            <Button variant="light">Login</Button>
            <Button variant="warning">Get Started Free</Button>
          </div>
        </nav>
        <div className="buttons">
          <Button variant="light">Login</Button>
          <Button variant="warning">Get Started Free</Button>
        </div>
        <div className="icons" onClick={() => setMobile(!mobile)}>
          {mobile ? (
            <button>
              <FaTimes />
            </button>
          ) : (
            <button>
              <FaBars />
            </button>
          )}
        </div>
      </header>
    </Container>
  );
};

export default Navbar;
