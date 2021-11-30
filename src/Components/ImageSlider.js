import React from "react";
import "./ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../assets/images/img1.jpg";
import two from "../assets/images/img2.jpg";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings} className="slider">
        <div className="image">
          <img src={one} alt="" srcset="" />
        </div>
        <div className="image">
          <img src={two} alt="" srcset="" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
