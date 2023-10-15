import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderImages } from '../../../data/data'

import './Slider.scss';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
 

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {SliderImages.map((item) =>{
            return(
                <>
                 <SwiperSlide>
                    <img src={item.img} alt="ImageSlider" className="sliderImage"/>
                 </SwiperSlide>
                </>
            )
        })}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
