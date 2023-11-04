import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderImages } from "../../../data/data";
import { getRandomCategories } from "../store/dispatcher";
import { Link } from "react-router-dom"

import "./Slider.scss";

// import required modules
import { Pagination } from "swiper/modules";
import { connect } from "react-redux";

const Slider = ({ getSliderRandomData, sliderBtnBrowseData }) => {
  const [slideImgData, setSliderImgData] = useState([]);
  //This is the get Api call for getting random Data of categories
  useEffect(() => {
    getSliderRandomData();
  }, [getSliderRandomData]);

  //We are using this useEffect to store the random Data of categories
  useEffect(() => {
    setSliderImgData(sliderBtnBrowseData);
  }, [sliderBtnBrowseData]);

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {SliderImages.map((item, index) => {
          return (
            <div>
              <div>
                <SwiperSlide key={item.id} className="slide">
                  <div
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      width: "100%",
                      height: "70vh",
                    }}
                    className="Slider-container"
                  >
                    <div>
                      <h5 className="sliderBackgroundTxt">{slideImgData && slideImgData?.data?.categories[index]?.name}</h5>
                      <Link to={`cat-products/${slideImgData && slideImgData?.data?.categories[index]?.name}`} className="btn browserCollectionBtn">Browse Collections</Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSliderRandomData: () => dispatch(getRandomCategories()),
  };
};

const mapStateToProps = ({ HomepageSlider }) => {
  return {
    sliderBtnBrowseData: HomepageSlider.sliderRandomData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
