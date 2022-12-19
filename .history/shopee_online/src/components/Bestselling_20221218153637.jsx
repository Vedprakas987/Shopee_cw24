import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Bestsellingcard from './Bestsellingcars';
import React from "react"
const Bestselling=() => {
     const [products,setproducts] = React.useState([])
     get
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {
      products.length!==0 &&  products.map((el)=>(
            <SwiperSlide>
            <Bestsellingcard {...el}/>
            </SwiperSlide>
        ))
     }
    </Swiper>
  );
};
export default Bestselling;