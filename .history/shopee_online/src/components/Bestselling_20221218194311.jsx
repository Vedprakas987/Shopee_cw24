import { Swiper, SwiperSlide } from 'swiper/react';
import Productcard from "./productcard"
// Import Swiper styles
import 'swiper/css';

const  Bestselling=>({products}) => {
  console.log(products)
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        products.map((el)=>(
          <SwiperSlide>
            <Productcard {...el}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};