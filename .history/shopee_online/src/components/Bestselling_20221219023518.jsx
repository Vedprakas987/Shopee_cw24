import { Swiper, SwiperSlide } from 'swiper/react';
import Productcard from "./productcard";
import Bestsellingcard from './Bestsellingcars';
// Import Swiper styles
import 'swiper/css';

const  Bestselling=({products=[],v1,v2,v3,v4,v5}) => {
  console.log(products)
  return (
    <Swiper
      slidesPerView={v1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px
        360: {
          width: 360,
          slidesPerView: v5,
        },
        640: {
          width: 640,
          slidesPerView: v3,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: v4,
        },
      }}
    >
      {
        products.map((el)=>(
          <SwiperSlide>
            <Bestsellingcard {...el}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
export default Bestselling