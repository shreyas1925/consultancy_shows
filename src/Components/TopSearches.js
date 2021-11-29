import React from "react";
import "./TopSearches.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import one from "../assets/images/one.jpg";
// import two from "../assets/images/two.jpg";
const TopSearches = () => {
  const items = [
    <div className="box" style={{ marginBottom: 10 }}></div>,
    <div className="box" style={{ marginBottom: 10 }}></div>,
    <div className="box" style={{ marginBottom: 10 }}></div>,
    //   src={one}
  ];

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <div className="searches">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1800}
        animationDuration={2000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default TopSearches;
