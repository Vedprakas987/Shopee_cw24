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
     breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
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