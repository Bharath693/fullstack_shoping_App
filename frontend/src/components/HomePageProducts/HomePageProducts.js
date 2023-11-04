import React from "react";
import Header from "../Header/Header";
import Slider from "./Slider/Slider";
import "./HomePageProducts.scss";
import HomepageCategories from "./HomePageCategories/HomepageCategories";



const HomePageProducts = () => {
  return (
    <div className="HomepageProducts">
      <Header />
      <div>
       <Slider />
      </div>
      <div className="HomepageCategoriesContainer">
         <HomepageCategories />
      </div>
    </div>
  );
};

export default HomePageProducts;
