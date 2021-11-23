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
          {/* <form className="">
            <h2 className="bold text-white">Connect Now</h2>
            <div className="socials mb-4 d-flex align-content-around">
              <div className="cursor-pointer text-white"></div>
            </div>
            <div className="form__grid">
              <div className="first">
                <div controlId="name" className="form__name">
                  <div
                    className="form-control"
                    type="text"
                    placeholder="First name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  ></div>
                </div>
              </div>
              <div
                className="form-control"
                type="text"
                placeholder="First name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></div>
              <div className="message">
                <div controlId="name">
                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Any Relevant Message"
                    id=""
                    cols="30"
                    rows="7"
                  ></textarea>
                  {/* <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  ></Form.Control> */}
          {/* </div>
              </div>
              <button type="button" className="btn btn-outline-info buttons">
                Connect
              </button>
            </div>
          </form> */}
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
