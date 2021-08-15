import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  FaLocationArrow,
  FaBabyCarriage,
  FaBrain,
  FaHome,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";

function Featured() {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 my-5">
            <h1>
              <FaBabyCarriage />
            </h1>
            <h4 className="">Parenting</h4>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              autem.
            </p>
            {/* <Button color="primary">Learn More</Button> */}
            <Link
              className="btn btn-outline-primary"
              to="parenting"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 col-sm-4 my-5">
            <h1>
              <FaBrain />
            </h1>
            <h4 className="">Life Skills</h4>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              autem.
            </p>
            {/* <Button color="primary">Learn More</Button> */}
            <Link
              className="btn btn-outline-primary"
              to="lifeSkills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 col-sm-4 my-5">
            <h1>
              <FaHandsHelping />
            </h1>
            <h4 className="">Mentoring</h4>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              autem.
            </p>
            {/* <Button color="primary">Learn More</Button> */}
            <Link
              className="btn btn-outline-primary"
              to="mentoring"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 col-sm-4 my-5">
            <h1>
              <FaUsers />
            </h1>
            <h4 className="">Supervised Visitations</h4>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              autem.
            </p>
            {/* <Button color="primary">Learn More</Button> */}
            <Link
              className="btn btn-outline-primary"
              to="supervisedVisits"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 col-sm-4 my-5">
            <h1>
              <FaHome />
            </h1>
            <h4 className="">Home &amp; Companion</h4>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              autem.
            </p>
            {/* <Button color="primary">Learn More</Button> */}
            <Link
              className="btn btn-outline-primary"
              to="homeSupport"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </div>
          <div className="col-12 col-sm-4 my-5">
            <h1>
              <FaLocationArrow />
            </h1>
            <h4 className="">Contact Us</h4>
            <p className="my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              autem.
            </p>
            {/* <Button color="primary">Learn More</Button> */}
            <Link
              className="btn btn-outline-primary"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
