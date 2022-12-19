import { Swiper, SwiperSlide } from 'swiper/react';
import Prod
// Import Swiper styles
import 'swiper/css';

export default Bestselling=>({products}) => {
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
            
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};