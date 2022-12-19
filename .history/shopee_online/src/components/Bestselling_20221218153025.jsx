import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Bestsellingcard from './Bestsellingcars';

const Bestselling=({products=[]}) => {
    console.log(pro)
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
        products.map((el)=>(
            <SwiperSlide>
            <Bestsellingcard {...el}/>
            </SwiperSlide>
        ))
     }
    </Swiper>
  );
};
export default Bestselling;