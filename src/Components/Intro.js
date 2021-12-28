import React from "react";
import tech from "../assets/images/intro.jpg";
import "./Intro.css";
const Intro = () => {
  return (
    <div>
      <div className="intro ">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="image">
              <img src={tech} alt="" srcset="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <h1 className="heading">
                Consultancy{" "}
                <span className="span">
                  shows<></>
                </span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis iure molestiae corrupti nesciunt beatae perferendis eum
                qui animi architecto inventore!
              </p>
              <button className="buttons">Register</button>
            </div>
          </div>
        </div>
      </div>

      {/* What we provide as a consultant agency */}
      <div className="provide">
        <div className="text text-center card_parent">
          <h1>PROCESS</h1>
          <h2>
            How we work{" "}
            <span>
              <img src="https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/000000/external-work-worklife-balance-and-stress-management-parzival-1997-outline-color-parzival-1997.png" />
            </span>
          </h2>
        </div>

        <div className="container-fluid mb-5 mt-5 ">
          <div className="row gx-5 gy-5">
            <div className="col-lg-3 col-md-6 col-12 ">
              <div className="card">
                <div className="contents">
                  <div className="icon">
                    <img src="https://img.icons8.com/color/48/000000/globe--v1.png" />
                  </div>
                  <h2>Explore</h2>
                  <p className="card_para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    distinctio cumque consectetur, omnis ab magni vel atque
                    porro eum cupiditate!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <div className="card">
                <div className="contents">
                  <div className="icon">
                    <img src="https://img.icons8.com/color/48/000000/service.png" />
                  </div>
                  <h2>Filter services</h2>
                  <p className="card_para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    distinctio cumque consectetur, omnis ab magni vel atque
                    porro eum cupiditate!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <div className="card">
                <div className="contents">
                  <div className="icon">
                    <img src="https://img.icons8.com/external-becris-lineal-color-becris/48/000000/external-meeting-business-management-becris-lineal-color-becris.png" />
                  </div>
                  <h2>Request a Meeting</h2>
                  <p className="card_para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    distinctio cumque consectetur, omnis ab magni vel atque
                    porro eum cupiditate!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 ">
              <div className="card">
                <div className="contents">
                  <div className="icon">
                    <img src="https://img.icons8.com/color/48/000000/add-user-group-woman-woman.png" />
                  </div>
                  <h2>Connect </h2>
                  <p className="card_para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                    distinctio cumque consectetur, omnis ab magni vel atque
                    porro eum cupiditate!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How to approach us */}
      <div className="approach"></div>
    </div>
  );
};

export default Intro;
