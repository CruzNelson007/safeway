import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function About() {
  return (
    <section className="py-5" id="about" style={aboutBg}>
      <div className="container my-5 text-center">
        <h1>About</h1>
        <hr className="py-3" />
        <div className="row">
          <div className="col">
            <Card className="border-0 bg-transparent">
              <CardImg
                className="rounded-circle mx-auto shadow"
                top
                src="/about.png"
                alt="About"
                style={{ height: "auto", maxWidth: "350px" }}
              />
              <CardBody>
                <CardTitle className="pt-3" tag="h5">
                  Founders
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Eugene &amp; Susan Allen
                </CardSubtitle>
                <CardText className="py-3">
                  Safeway Family Services was founded in 2014 by Eugene and
                  Susan Allen. After spending 20 years working in juvenile
                  detention, and over 10 years as therapeutic foster parents,
                  Gene and Susan saw a need for services that reach children and
                  families while there is still time to make a positive impact
                  on their lives. Originally offering Supervised Visitation for
                  children and youth in foster care, Safeway Family Services has
                  expanded to offer Life Skills, Therapeutic Support, and Parent
                  Support Services. Our newest endeavor has added services for
                  individuals with developmental disabilities. Safeway Family
                  Services works collaboratively with families, attorneys, state
                  agencies and other professionals to provide quality services
                  to strengthen and rebuild families.
                </CardText>
                <Link
                  className="btn btn-primary"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Get In Touch
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutBg = {
  backgroundAttachment: "fixed",
  backgroundImage: 'url("/about.svg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default About;
