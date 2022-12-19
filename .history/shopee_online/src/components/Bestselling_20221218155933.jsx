import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Bestsellingcard from './Bestsellingcars';
const Bestselling=() => {
    let url = 'http://localhost:3027/api/Toys'
     const [products,setproducts] = React.useState([])
     const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then(
            (res)=>setproducts(res)
        )
     }
     useEffect(() => {
      getdata()
     }, []);
     console.log(products)
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
 
   ))
  }
    </Swiper>
  );
};
export default Bestselling;