import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Productcard from './productcard';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Bestsellingcard from './Bestsellingcars';
const Bestselling=() => {
    let url = 'http://localhost:3026/api/data'
     const [products,setproducts] = React.useState([])
     const getdata=()=>{
        fetch(url).then((res)=>(res.json())).then(
            (res)=>setproducts(res.Toys)
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
   products.length>0 && products.map((el)=>(
    <SwiperSlide>
    <Productcard {...el}/>
    </SwiperSlide>
   ))
  }
    </Swiper>
  );
};
export default Bestselling;