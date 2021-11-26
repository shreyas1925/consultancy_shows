import React from "react";
import Advertisement from "../Components/Advertisement";
import Extras from "../Components/Extras";
import ImageSlider from "../Components/ImageSlider";
import TopSearches from "../Components/TopSearches";
import Footer from "../Components/Footer";

const HomeScreen = () => {
  return (
    <>
      <ImageSlider />
      <TopSearches />
      <Advertisement />
      <Extras />
      {/* <Footer /> */}
    </>
  );
};

export default HomeScreen;
