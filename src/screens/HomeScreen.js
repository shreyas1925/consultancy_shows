import React from "react";
import ImageSlider from "../Components/ImageSlider";
import Navbar from "../Components/Navbar";
import TopSearches from "../Components/TopSearches";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <TopSearches />
    </>
  );
};

export default HomeScreen;
