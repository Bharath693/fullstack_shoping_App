import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllCategories } from "../store/dispatcher";
import SliderImage1 from "../../../assests/sliderImages/1.jpg"

// we are using this imports for sweeper slides
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./HomePageCategories.scss"
import Thumbnail from "../Thumbnail/Thumbnail";
import { Link } from "react-router-dom";

const HomepageCategories = ({ 
  getAllCategoriesAPi, 
  getAllCategoriesData,
  getAllCategoriesFetching
}) => {
   //global variable
   let i = 1;
  
  //state to catch the data of allCategories Api
  const [allCategoriesData, setAllCategoriesData] = useState([]);

  //allCategories get APi call
  useEffect(() => {
    getAllCategoriesAPi();
  }, [getAllCategoriesAPi]);

  //storing the Data of AllCategories Data into the state
  useEffect(() => {
    if(getAllCategoriesData !== undefined) {
        setAllCategoriesData(getAllCategoriesData);
    }
   
  }, [getAllCategoriesData]);

  

  return (
    <>
      {allCategoriesData !== undefined &&  allCategoriesData?.data?.allCategories.length > 0 ?  
      <Swiper 
        modules={[Virtual]} 
        spaceBetween={20} 
        slidesPerView={3} 
        virtual 
        className="swiperCategories"
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1080: {
            slidesPerView: 5
          }
        }}
        >
        {allCategoriesData !== undefined &&
          allCategoriesData?.data?.allCategories?.map((item, index) => {
            if(i >= 5) {
                i = 1
            }else{
                i++
            }
          
            return (
              <SwiperSlide key={index} virtualIndex={index} className="swiperSlideCategories">
                {/* <div>{item?.name}</div> */}
                <div className="slideContainer">
                  <div>
                  <img src={`/sliderImages/${i}.jpg`} alt="bb"/>
                  </div>
                  <div className="swiperSlideCategoryiesText">
                    <Link to={`cat-products/${item.name}`} className="swiperSlideText">{item?.name}</Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
       :
      <Thumbnail />
      }
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategoriesAPi: () => dispatch(getAllCategories()),
  };
};

const mapStateToProps = ({ HomepageSlider }) => {
  return {
    getAllCategoriesData: HomepageSlider.allCategoriesData,
    getAllCategoriesFetching: HomepageSlider.allCategoriesDataInprogress
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepageCategories);
