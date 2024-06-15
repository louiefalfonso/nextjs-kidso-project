import React from "react";

const ContactDetails = () => {
  return (
    <>
      <div
        id="contact"
        className="contact-area after-none contact-bg pt-90 pb-30"
        style={{ background: "#12275e" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-info">
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-map" />
                  </div>
                  <h5>Office Address</h5>
                  <p>
                    3 Perkins Square, London
                    <br /> SE1 9HU
                  </p>
                </div>
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-clock" />
                  </div>
                  <h5>Working Hours</h5>
                  <p>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
                </div>
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <h5>Message Us</h5>
                  <p>
                    {" "}
                    <a href="#">support@example.com</a>
                    <br />
                    <a href="#">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
