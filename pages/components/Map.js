import React from "react";

function Map() {
  return (
    <section id="contact">
      <div className="container-fluid">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12007.239434113362!2d-73.205517!3d41.2041188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c2cbc91f913fb92!2sSafeway%20Family%20Services!5e0!3m2!1sen!2sus!4v1628542695855!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Map;
