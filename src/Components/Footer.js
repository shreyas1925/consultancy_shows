import React from "react";
import "./Footer.css";
import Map from "./Maps";
import "./TopSearches.css";
const Footer = () => {
  return (
    <>
      <footer>
        {/* <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; Shreyas</Col>
          </Row>
        </Container> */}

        <div className="main">
          <div className="space-y-4 text-xs text-white">
            {/* <h4 className="bold text-white">ABOUT</h4> */}
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>

            <br />
            <br />
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>
          </div>

          <div className="space-y-4 text-xs text-white">
            {/* <h4 className="bold text-white">SUPPORT</h4> */}
            <p>Help Centre</p>
            <p>Cancellation options</p>
            <p>Nearby Response</p>
            <p>Safety Network</p>
            <p>Reports</p>

            <br />
            <br />
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>
          </div>

          {/* Map will be integrated here */}

          <div className="">
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4655071009865!2d76.64044535732852!3d12.284406670721024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf65846d4bc40f%3A0xaed6ab91f7acb66a!2sNie%20Men&#39;s%20Hostel!5e0!3m2!1sen!2sin!4v1637857801890!5m2!1sen!2sin"
                width="440"
                height="380"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                title="map"
              ></iframe>
            </p>
          </div>

          <div className=" text-white"></div>
        </div>
        <div className="space-y-4 text-gray-800 mains">
          <h3 className="font-semibold m-12 w-62 mt-3 text-white ">
            Terms & Conditions | All Rights Reserved | 2021 CONSULTANCY SHOWS
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
