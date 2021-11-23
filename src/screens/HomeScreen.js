import React from "react";
import Advertisement from "../Components/Advertisement";
import Extras from "../Components/Extras";
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
      <Extras />
    </>
  );
};

export default HomeScreen;
