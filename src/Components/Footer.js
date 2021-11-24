import React from "react";
import "./Footer.css";
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

          <div></div>

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
