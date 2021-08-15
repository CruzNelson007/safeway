import React from "react";
import { CardImg } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header
      className="bg-white d-flex flex-row align-items-center justify-content-center"
      id="home"
      style={fullPage}
    >
      <div className="container h-100" style={{ marginTop: "5%" }}>
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <h1 className="font-weight-light">
              Strengthening &amp; Rebuilding Families The{" "}
              <strong className="text-primary">Safe Way!</strong>
            </h1>
            <Link
              className="btn btn-primary mt-3"
              to="banner"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Scroll Down
            </Link>
          </div>
          <div className="col-md-6 col-sm-12  d-none d-md-block d-lg-block d-xl-block">
            <span>
              <CardImg src="/family_on_couch.svg" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

const fullPage = {
  minHeight: "92vh",
  backgroundAttachment: "fixed",
  backgroundImage: 'url("/curves.svg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflowX: "hidden",
};

export default Header;
