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
      <About />
      <Extras />
      {/* <Footer /> */}
    </>
  );
};

export default HomeScreen;
