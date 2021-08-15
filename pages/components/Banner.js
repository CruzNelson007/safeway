import React from "react";
import { ImMap2, ImLocation, ImPhone } from "react-icons/im";

function Banner() {
  return (
    <section className="py-4 bg-dark text-light text-center" id="banner">
      <div className="container">
        <div className="row">
          {/* HIDE ON SM AND LOWER */}
          <div className="col-md-12 lead font-weight-normal d-none d-md-block d-lg-block d-xl-block">
            <span>Safeway Family Services</span>
            <ImMap2 className="mx-3" />
            <span>3101 Main St 1st Floor</span>
            <ImLocation className="mx-3" />
            <span>Bridgeport, CT 06606</span>
            <ImPhone className="mx-3" />
            <span>203 - 727 - 4629</span>
          </div>
          {/* ONLY SHOW ON SM OR LOWER */}
          <div className="col-md-12 lead font-weight-normal d-block d-md-none d-lg-none d-xl-none">
            <h4 className="">Safeway Family Services</h4>
            <ImMap2 className="mr-3" />
            <span>3101 Main St</span> <br />
            <ImLocation className="mr-3" />
            <span>Bridgeport, CT 06606</span> <br />
            <ImPhone className="mr-3" />
            <span>203 - 727 - 4629</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
