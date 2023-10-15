import React from "react";
import Header from "../Header/Header";
import Slider from "./Slider/Slider";
import "./HomePageProducts.scss";

const HomePageProducts = () => {
  return (
    <div>
      <Header />
      <div>
       <Slider />
      </div>
    </div>
  );
};

export default HomePageProducts;
