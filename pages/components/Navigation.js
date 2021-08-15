import React, { useState } from "react";
import { FaGratipay } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleCloser = () => {
    if (isOpen) {
      toggle();
    }
  };

  return (
    <div>
      <Navbar
        color="white"
        light
        expand="lg"
        fixed="top"
        className="py-3 shadow"
      >
        <div className="container">
          <NavbarBrand href="/">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                cursor: "pointer",
                transition: ".5s",
                textDecoration: "none",
              }}
            >
              <span className="d-none d-md-block d-lg-block d-xl-block">
                <FaGratipay className="mr-2 h4" />
                <strong>Safeway Family Services</strong>
              </span>
              <span className="d-sm-block d-md-none d-lg-none d-xl-none">
                <span className="lead font-weight-normal">
                  <FaGratipay className="h1 m-0 p-0" />
                </span>
              </span>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="border-0" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  onClick={toggleCloser}
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={toggleCloser}
                  className="nav-link"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={toggleCloser}
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  onClick={toggleCloser}
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
