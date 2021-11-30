import React from "react";
import About from "../Components/About";
import Extras from "../Components/Extras";
import ImageSlider from "../Components/ImageSlider";
import TopSearches from "../Components/TopSearches";
import Footer from "../Components/Footer";

const HomeScreen = () => {
  return (
    <>
      <ImageSlider />
      <TopSearches />

      {/* <div className="pop-up"> */}
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <About />
      <Extras />
      {/* <Footer /> */}
    </>
  );
};

export default HomeScreen;
