import { Swiper, SwiperSlide } from 'swiper/react';
import Productcard from "./productcard";
import Bestsellingcard from './Bestsellingcars';
// Import Swiper styles
import 'swiper/css';

const  Bestselling=({products=[]}) => {
  console.log(products)
  return (
    <Swiper
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px
        360: {
          width: 360,
          slidesPerView: 1,
          slidesga
        },
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
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