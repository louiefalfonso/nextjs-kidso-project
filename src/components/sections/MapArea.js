import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="map fix" style={{ background: "#f5f5f5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3717545372792!2d-0.09376989999999999!3d51.506395399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760357d8109e77%3A0xa50b0b9280e8ac8a!2sLittle%20Angels%20Nursery!5e0!3m2!1sen!2suk!4v1696366343663!5m2!1sen!2suk"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapArea;
