import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <>
      {/* <h1 className="text-center mt-4">How to approach</h1> */}
      {/* <hr /> */}

      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="card" style={{ width: "30rem" }}>
              <img
                className="card-img-top"
                alt=""
                src="https://img.icons8.com/ios-glyphs/50/000000/man-on-phone.png"
              />
              <div className="card-body">
                <h3 className="card-title ">Choose a Service</h3>
                <hr style={{ width: "10rem", color: "red", padding: "2px" }} />
                <p className="card-text">
                  Businesses often need different solutions. Draw from our
                  portfolio of advanced technological services, that suit your
                  needs.
                </p>
                {/* <Link to="#" className="btn btn-primary">
              Go somewhere
            </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
