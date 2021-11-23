import React from "react";
import Advertisement from "../Components/Advertisement";
import ImageSlider from "../Components/ImageSlider";
import Navbar from "../Components/Navbar";
import TopSearches from "../Components/TopSearches";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <TopSearches />
      <Advertisement />
    </>
  );
};

export default HomeScreen;
